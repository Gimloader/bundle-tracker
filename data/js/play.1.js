function a(b) {
    Object.defineProperty(b, '__esModule', {
        value: !0,
        configurable: !0
    });
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('W0sKd', function(b, c) {
    _b(b.exports), _l(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('4kSjY');
    var _f = _b => (0, d.jsx)(d.Fragment, {
        children: (0, d.jsx)(e.default, {
            ..._b
        })
    });
}), a.register('4kSjY', function(_b, c) {
    _l(_b.exports, 'default', function() {
        return _d;
    });
    var _d = a('9Rt0I').default;
}), a.register('9Rt0I', function(b, c) {
    _l(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('O4G7w'),
        h = a('EI+s2'),
        i = a('vnXTg'),
        j = a('oN4l0'),
        k = a('gaMZi');
    var _l = b => (e.useEffect(() => {
        (0, h.startLoop)(), document.addEventListener('click', b => {
            (0, k.legitEvent)(b) || b.stopPropagation();
        });
    }, []), (0, d.jsx)(j.default.Provider, {
        value: g.default,
        children: (0, d.jsx)(f.Provider, {
            ...g.default,
            children: (0, d.jsx)(i.default, {
                ...b
            })
        })
    }));
}), a.register('O4G7w', function(b, c) {
    _l(b.exports, 'default', function() {
        return _u;
    });
    var d = a('XGSSm'),
        e = a('Nd6gd'),
        f = a('HnvWo'),
        g = a('Auq1a'),
        h = a('i3gKg'),
        i = a('CGKSp'),
        j = a('haZfi'),
        k = a('bSAjm'),
        l = a('hnlmL'),
        m = a('ENy0x'),
        n = a('EutDK'),
        o = a('gDjoR'),
        p = a('0Nkeh'),
        q = a('ab5em'),
        r = a('XLrkG'),
        s = a('t/Cyj'),
        t = a('K6h9e');
    var _u = {
        gameValues: new(0, i.default)(),
        gameOptions: new(0, h.default)(),
        user: new(0, q.default)(),
        questions: new(0, l.default)(),
        powerups: new(0, k.default)(),
        balance: new(0, d.default)(),
        engine: new(0, e.default)(),
        theme: new(0, m.default)(),
        navigation: new(0, j.default)(),
        upgrades: new(0, p.default)(),
        translations: new(0, n.default)(),
        entities: new(0, f.default)(),
        ui: new(0, o.default)(),
        events: new(0, g.default)(),
        imposter: new(0, r.default)(),
        draw: new(0, s.default)(),
        pardy: new(0, t.default)()
    };
}), a.register('XGSSm', function(b, c) {
    _l(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.balance = 0, this.maxBalance = 0, this.balanceChangeIfCorrect = 1, this.balanceChangeIfIncorrect = -1, this.incomeMultiplier = 1, this.streakAmount = 0, this.customColor = '', (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'balance', void 0), (0, d.__decorate)([e.observable], f.prototype, 'maxBalance', void 0), (0, d.__decorate)([e.observable], f.prototype, 'balanceChangeIfCorrect', void 0), (0, d.__decorate)([e.observable], f.prototype, 'balanceChangeIfIncorrect', void 0), (0, d.__decorate)([e.observable], f.prototype, 'incomeMultiplier', void 0), (0, d.__decorate)([e.observable], f.prototype, 'streakAmount', void 0), (0, d.__decorate)([e.observable], f.prototype, 'customColor', void 0);
    var _g = f;
}), a.register('Nd6gd', function(b, c) {
    _l(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.game = null, this.client = null, this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.hasLeftRoom = !1, this.hasJoinedRoom = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'game', void 0), (0, d.__decorate)([e.observable], f.prototype, 'client', void 0), (0, d.__decorate)([e.observable], f.prototype, 'findingServerForGame', void 0), (0, d.__decorate)([e.observable], f.prototype, 'errorFindingServerForGame', void 0), (0, d.__decorate)([e.observable], f.prototype, 'attemptingToConnect', void 0), (0, d.__decorate)([e.observable], f.prototype, 'hasConnected', void 0), (0, d.__decorate)([e.observable], f.prototype, 'connected', void 0), (0, d.__decorate)([e.observable], f.prototype, 'connectionError', void 0), (0, d.__decorate)([e.observable], f.prototype, 'hasLeftRoom', void 0), (0, d.__decorate)([e.observable], f.prototype, 'hasJoinedRoom', void 0), (0, d.__decorate)([e.observable], f.prototype, 'joinedRoom', void 0), (0, d.__decorate)([e.observable], f.prototype, 'attemptingToJoinRoom', void 0), (0, d.__decorate)([e.observable], f.prototype, 'errorJoiningRoom', void 0), (0, d.__decorate)([e.observable], f.prototype, 'roomError', void 0);
    var _g = f;
}), a.register('HnvWo', function(b, c) {
    _l(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.defendingHomebase = null, this.lava = null, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'defendingHomebase', void 0), (0, d.__decorate)([e.observable], f.prototype, 'lava', void 0);
    var _g = f;
}), a.register('Auq1a', function(b, c) {
    _l(b.exports, 'default', function() {
        return a;
    });
    var d = class {};
}), a.register('i3gKg', function(b, c) {
    _l(b.exports, 'default', function() {
        return _h;
    });
    var d = a('csYze'),
        e = a('YuT/D'),
        f = a('6XgQB1');
    class g {
        get formattedGameOptions() {
            return (0, e.toJS)(this);
        }
        constructor() {
            this.type = f.GameType.live, this.goal = {
                type: f.GameGoal.time,
                value: 10
            }, this.specialGameType = e.observable.array(), this.group = '', this.currency = '$', this.language = 'en', this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.enablePowerupRNGAnimation = !1, this.music = !0, this.modeOptions = {}, this.setGameOptions = b => {
                Object.keys(b).forEach(_l => {
                    null !== this[_l] && ('specialGameType' === _l ? this.specialGameType.replace(b.specialGameType) : this[_l] = b[_l]);
                });
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], g.prototype, 'type', void 0), (0, d.__decorate)([e.observable], g.prototype, 'goal', void 0), (0, d.__decorate)([e.observable], g.prototype, 'specialGameType', void 0), (0, d.__decorate)([e.observable], g.prototype, 'group', void 0), (0, d.__decorate)([e.observable], g.prototype, 'currency', void 0), (0, d.__decorate)([e.observable], g.prototype, 'language', void 0), (0, d.__decorate)([e.observable], g.prototype, 'startingCash', void 0), (0, d.__decorate)([e.observable], g.prototype, 'handicap', void 0), (0, d.__decorate)([e.observable], g.prototype, 'clapping', void 0), (0, d.__decorate)([e.observable], g.prototype, 'powerups', void 0), (0, d.__decorate)([e.observable], g.prototype, 'themes', void 0), (0, d.__decorate)([e.observable], g.prototype, 'cleanPowerupsOnly', void 0), (0, d.__decorate)([e.observable], g.prototype, 'allowGoogleTranslate', void 0), (0, d.__decorate)([e.observable], g.prototype, 'enablePowerupRNGAnimation', void 0), (0, d.__decorate)([e.observable], g.prototype, 'music', void 0), (0, d.__decorate)([e.observable], g.prototype, 'modeOptions', void 0), (0, d.__decorate)([e.action.bound], g.prototype, 'setGameOptions', void 0), (0, d.__decorate)([e.computed], g.prototype, 'formattedGameOptions', null);
    var _h = g;
}), a.register('CGKSp', function(b, c) {
    _l(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.connected = !1, this.connectionError = !1, this.gameStatus = null, this.gameCode = null, this.players = e.observable.array(), this.teams = e.observable.array(), this.nonDismissMessage = {
                message: '',
                title: '',
                link: '',
                buttonText: ''
            }, this.thanosValues = null, this.news = e.observable.array([]), (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'connected', void 0), (0, d.__decorate)([e.observable], f.prototype, 'connectionError', void 0), (0, d.__decorate)([e.observable], f.prototype, 'gameStatus', void 0), (0, d.__decorate)([e.observable], f.prototype, 'gameCode', void 0), (0, d.__decorate)([e.observable], f.prototype, 'players', void 0), (0, d.__decorate)([e.observable], f.prototype, 'teams', void 0), (0, d.__decorate)([e.observable], f.prototype, 'nonDismissMessage', void 0), (0, d.__decorate)([e.observable], f.prototype, 'thanosValues', void 0), (0, d.__decorate)([e.observable], f.prototype, 'defendingHomebaseResults', void 0), (0, d.__decorate)([e.observable], f.prototype, 'news', void 0);
    var _g = f;
}), a.register('haZfi', function(b, c) {
    _l(b.exports, 'ShopTab', function() {
        return _g;
    }), _l(b.exports, 'default', function() {
        return _j;
    });
    var d = a('csYze'),
        e = a('E9ysS'),
        f = a('YuT/D');
    let _g;
    var h;
    (h = _g || (_g = {})).lava = 'lava', h.defendingHomebase = 'defendingHomebase', h.upgrades = 'upgrades', h.powerups = 'powerups', h.themes = 'themes', h.powerupsNonMusic = 'powerupsNonMusic', h.powerupsMusic = 'powerupsMusic';
    class i {
        changeRoute(j) {
            this.currentRoute = j;
        }
        constructor() {
            this.currentRoute = e.default.join, this.canChangeRoute = !0, this.drawerOpen = !1, this.settingsOpen = !1, this.leaderboardDrawerOpen = !1, this.currentShopTab = _g.upgrades, this.powerupRNGAnimationDone = !1, this.visitedPowerupSection = !1, this.attackModal = {
                open: !1,
                powerup: ''
            }, (0, f.makeObservable)(this);
        }
    }
    (0, d.__decorate)([f.observable], i.prototype, 'currentRoute', void 0), (0, d.__decorate)([f.observable], i.prototype, 'canChangeRoute', void 0), (0, d.__decorate)([f.observable], i.prototype, 'drawerOpen', void 0), (0, d.__decorate)([f.observable], i.prototype, 'settingsOpen', void 0), (0, d.__decorate)([f.observable], i.prototype, 'leaderboardDrawerOpen', void 0), (0, d.__decorate)([f.observable], i.prototype, 'currentShopTab', void 0), (0, d.__decorate)([f.observable], i.prototype, 'powerupRNGAnimationDone', void 0), (0, d.__decorate)([f.observable], i.prototype, 'visitedPowerupSection', void 0), (0, d.__decorate)([f.observable], i.prototype, 'attackModal', void 0), (0, d.__decorate)([f.action.bound], i.prototype, 'changeRoute', null);
    var _j = i;
}), a.register('E9ysS', function(b, c) {
    _l(b.exports, 'default', function() {
        return _e;
    });
    const d = '/play';
    var _e = {
        base: d,
        join: d + '/join',
        waiting: d + '/waiting',
        gameOver: d + '/results',
        questions: d + '/questions',
        team: d + '/team',
        shop: d + '/shop',
        upgrade: d + '/upgrade',
        nonDismissMessage: '/message',
        imposterMode: '/imposter-mode',
        drawMode: '/draw-mode',
        pardyMode: '/pardy-mode'
    };
}), a.register('bSAjm', function(b, c) {
    _l(b.exports, 'default', function() {
        return _h;
    });
    var d = a('csYze'),
        e = a('fe6E3'),
        f = a('YuT/D');
    class g {
        get activePowerups() {
            return (0, e.uniq)(this.personalActivePowerups.concat(this.teamActivePowerups));
        }
        get appliedPowerups() {
            return (0, e.uniq)(this.personalAppliedPowerups.concat(this.teamAppliedPowerups));
        }
        constructor() {
            this.availablePowerups = f.observable.array(), this.disabledPowerups = f.observable.array(), this.purchasedPowerups = f.observable.array(), this.usedPowerups = f.observable.array(), this.personalActivePowerups = f.observable.array(), this.teamActivePowerups = f.observable.array(), this.personalAppliedPowerups = f.observable.array(), this.teamAppliedPowerups = f.observable.array(), this.hasShownHelperModal = !1, this.screenAttack = {
                powerupName: '',
                attackerName: '',
                fullScreen: !1
            }, this.linkPartnerName = '', (0, f.makeObservable)(this);
        }
    }
    (0, d.__decorate)([f.observable], g.prototype, 'availablePowerups', void 0), (0, d.__decorate)([f.observable], g.prototype, 'disabledPowerups', void 0), (0, d.__decorate)([f.observable], g.prototype, 'purchasedPowerups', void 0), (0, d.__decorate)([f.observable], g.prototype, 'usedPowerups', void 0), (0, d.__decorate)([f.observable], g.prototype, 'personalActivePowerups', void 0), (0, d.__decorate)([f.observable], g.prototype, 'teamActivePowerups', void 0), (0, d.__decorate)([f.observable], g.prototype, 'personalAppliedPowerups', void 0), (0, d.__decorate)([f.observable], g.prototype, 'teamAppliedPowerups', void 0), (0, d.__decorate)([f.computed], g.prototype, 'activePowerups', null), (0, d.__decorate)([f.computed], g.prototype, 'appliedPowerups', null), (0, d.__decorate)([f.observable], g.prototype, 'hasShownHelperModal', void 0), (0, d.__decorate)([f.observable], g.prototype, 'screenAttack', void 0), (0, d.__decorate)([f.observable], g.prototype, 'linkPartnerName', void 0);
    var _h = g;
}), a.register('hnlmL', function(b, c) {
    _l(b.exports, 'default', function() {
        return _l;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('b3ci8'),
        g = a('fe6E3'),
        h = a('YuT/D'),
        i = a('5drJf'),
        j = a('DmB5I');
    class k {
        constructor() {
            (0, d.default)(this, 'eqt', ''), (0, d.default)(this, 'questionsAnsweredCorrectly', 0), (0, d.default)(this, 'questionsAnsweredIncorrectly', 0), this.ceq = null, this.currentQuestionIndex = 0, this.questionList = h.observable.array(), this.lastQuestion = '', this.canAnswerQuestion = !0, this.lockedViewingCorrectAnswer = !1, this.lastQuestionAnsweredTimestamp = 0, this.currentQuestionLoaded = !1, this.transitioningToNextQuestion = !1, this.setQuestions = b => {
                this.eqt = (0, i.EncryptData)(b, 'questions');
            }, this.nextQuestion = () => {
                this.setCurrentQuestion(this.currentQuestionIndex + 1);
            }, this.setCurrentQuestion = b => {
                const _l = (0, f.questionLocation)();
                if (!_l || !_l.length)
                    return;
                const m = this.questionList.length;
                this.currentQuestionIndex = b >= m ? 0 : b;
                const n = _l.find(b => b._id === this.questionList[this.currentQuestionIndex]);
                n && (this.ceq = (0, i.EncryptData)({
                    ...n,
                    answers: (0, g.shuffle)(n.answers)
                }, n._id), this.currentQuestionLoaded = !0);
            }, this.questionAnswered = (b, _t) => {
                this.lastQuestionAnsweredTimestamp = Date.now() / 1000, this.lastQuestionCorrect = b, this.lastQuestion = _t, this.canAnswerQuestion = !1, setTimeout(() => {
                    this.canAnswerQuestion = !0;
                }, j.CSS_TRANSITION_TIMEOUT);
            }, (0, h.makeObservable)(this);
        }
    }
    (0, e.__decorate)([h.observable], k.prototype, 'ceq', void 0), (0, e.__decorate)([h.observable], k.prototype, 'currentQuestionIndex', void 0), (0, e.__decorate)([h.observable], k.prototype, 'questionList', void 0), (0, e.__decorate)([h.observable], k.prototype, 'lastQuestion', void 0), (0, e.__decorate)([h.observable], k.prototype, 'lastQuestionCorrect', void 0), (0, e.__decorate)([h.observable], k.prototype, 'canAnswerQuestion', void 0), (0, e.__decorate)([h.observable], k.prototype, 'lockedViewingCorrectAnswer', void 0), (0, e.__decorate)([h.observable], k.prototype, 'lastQuestionAnsweredTimestamp', void 0), (0, e.__decorate)([h.observable], k.prototype, 'currentQuestionLoaded', void 0), (0, e.__decorate)([h.observable], k.prototype, 'transitioningToNextQuestion', void 0), (0, e.__decorate)([h.action.bound], k.prototype, 'setQuestions', void 0), (0, e.__decorate)([h.action.bound], k.prototype, 'nextQuestion', void 0), (0, e.__decorate)([h.action.bound], k.prototype, 'setCurrentQuestion', void 0), (0, e.__decorate)([h.action.bound], k.prototype, 'questionAnswered', void 0);
    var _l = k;
}), a.register('b3ci8', function(b, c) {
    _t(b.exports, 'questionAnswered', function() {
        return _s;
    }), _t(b.exports, 'send', function() {
        return _S;
    }), _t(b.exports, 'plural', function() {
        return _t;
    }), _t(b.exports, 'numberWithCommas', function() {
        return _u;
    }), _t(b.exports, 'getMoney', function() {
        return _v;
    }), _t(b.exports, 'inDrawMode', function() {
        return _Z;
    }), _t(b.exports, 'toggleDrawer', function() {
        return _w;
    }), _t(b.exports, 'purchaseTheme', function() {
        return _x;
    }), _t(b.exports, 'upgradeNameToKey', function() {
        return _y;
    }), _t(b.exports, 'toast', function() {
        return _z;
    }), _t(b.exports, 'capitalizeFirstLetter', function() {
        return _A;
    }), _t(b.exports, 'getTeamName', function() {
        return _B;
    }), _t(b.exports, 'teamPlayerNames', function() {
        return _C;
    }), _t(b.exports, 'getTeamColor', function() {
        return _D;
    }), _t(b.exports, 'getTeamIcon', function() {
        return _E;
    }), _t(b.exports, 'inTeamMode', function() {
        return _F;
    }), _t(b.exports, 'attack', function() {
        return _G;
    }), _t(b.exports, 'getPowerupDescription', function() {
        return _H;
    }), _t(b.exports, 'questionLocation', function() {
        return _I;
    }), _t(b.exports, 'inPardyMode', function() {
        return _ab;
    }), _t(b.exports, 'blockShopping', function() {
        return _J;
    }), _t(b.exports, 'getAssetPath', function() {
        return _K;
    }), _t(b.exports, 'getPowerupName', function() {
        return _K;
    }), _t(b.exports, 'getUpgradeCost', function() {
        return _L;
    }), _t(b.exports, 'startGame', function() {
        return _M;
    }), _t(b.exports, 'inImposterMode', function() {
        return _Y;
    }), _t(b.exports, 'changeRoute', function() {
        return _N;
    }), _t(b.exports, 'inZombiesVsHumansMode', function() {
        return _bb;
    }), _t(b.exports, 'requestDefendingHomebase', function() {
        return _O;
    }), _t(b.exports, 'defendingHomebaseResultsInfo', function() {
        return _P;
    }), _t(b.exports, 'listenForLeave', function() {
        return _Q;
    }), _t(b.exports, 'nonDismissMessage', function() {
        return _R;
    }), _t(b.exports, 'inThanosMode', function() {
        return _T;
    }), _t(b.exports, 'inQrScanMode', function() {
        return _U;
    }), _t(b.exports, 'inBossBattleMode', function() {
        return _V;
    }), _t(b.exports, 'inHiddenMode', function() {
        return _W;
    }), _t(b.exports, 'inLavaMode', function() {
        return _X;
    }), _t(b.exports, 'inComebackMode', function() {
        return _$;
    }), _t(b.exports, 'shopName', function() {
        return _db;
    }), _t(b.exports, 'mainFontName', function() {
        return _eb;
    });
    a('bgvr8');
    var d = a('HCZcd'),
        e = a('QWK7i'),
        f = a('3RPAv'),
        g = a('I+0AY'),
        h = a('vy6C5'),
        i = a('O4G7w'),
        j = a('6XgQB1'),
        k = a('4vC7/'),
        l = a('E9ysS'),
        m = a('XKFn7'),
        n = a('9FYKI'),
        o = a('xoHbD'),
        p = a('5drJf'),
        q = a('DmB5I'),
        r = a('PMl60');
    const _s = b => {
            if (!i.default.questions.canAnswerQuestion)
                return !1;
            const _t = i.default.questions.ceq ? (0, p.DecryptData)(i.default.questions.ceq) : null;
            let u = !1;
            if (_t) {
                const v = _t.answers.filter(b => b.correct);
                _t.type === j.QuestionType.textInput && v.map(b => _cb(b.text)).includes(_cb(b)) && (u = !0), _t.type === j.QuestionType.multipleChoice && v.map(b => b._id).includes(b) && (u = !0), i.default.questions.questionAnswered(u, _t._id), _S(k.default.questionAnswered, {
                    questionId: _t._id,
                    answer: b
                }), i.default.questions.transitioningToNextQuestion = !0;
            }
            return u;
        },
        _t = (b, _w, c) => 1 === _w ? b : c || b + 's',
        _u = b => b.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        _v = b => {
            if (_Z()) {
                const _w = Math.round(b);
                return `${ _u(_w) } ${ _t('point', _w) }`;
            }
            return (b < 0 ? '-' : '') + i.default.gameOptions.currency + _u(Math.round(Math.abs(b)));
        },
        _w = (b, _D) => {
            _D || g.woosh.play(), i.default.navigation.drawerOpen = b, 1 == b && (i.default.navigation.settingsOpen = !1);
        },
        _x = b => {
            _S(k.default.themePurchased, b);
        },
        _y = b => b === f.upgradeNames.moneyPerQuestion ? 'moneyPerQuestion' : b === f.upgradeNames.streakBonus ? 'streakBonus' : b === f.upgradeNames.multiplier ? 'multiplier' : 'insurance',
        _z = (b, _D) => {
            const {
                type: A,
                blockSound: B
            } = _D;
            B || ('error' === A ? g.error.play() : 'success' === A ? g.success.play() : g.alert.play()), d.toast[A || 'info'](b, {
                position: d.toast.POSITION.TOP_RIGHT,
                autoClose: 200 * b.length + 1000
            });
        },
        _A = b => b ? b.charAt(0).toUpperCase() + b.slice(1) : '',
        _B = b => _A(b),
        _C = b => {
            let _D = '';
            return b.forEach((c, a) => {
                _D += c, a + 1 !== b.length && (_D += ', ');
            }), _D;
        },
        _D = b => {
            let E = null;
            return E = b ? i.default.gameValues.teams.find(E => E.id === b) : i.default.user.team, E && E.color ? E.color.background : e.default.White;
        },
        _E = b => {
            let F = null;
            return F = b ? i.default.gameValues.teams.find(F => F.id === b) : i.default.user.team, F && F.icon ? F.icon : null;
        },
        _F = () => [
            o.TEAMS,
            o.HUMAN_ZOMBIE_DEFENDING_HOMEBASE,
            o.BOSS_BATTLE
        ].includes(i.default.gameOptions.specialGameType[0]),
        _G = (b, _R) => {
            const H = i.default.navigation.attackModal;
            _S(k.default.powerupAttack, {
                name: H.powerup,
                target: b
            });
        },
        _H = b => b.replace('#', _F() ? 'team' : 'player'),
        _I = () => i.default.questions.eqt ? (0, p.DecryptData)(i.default.questions.eqt) : [],
        _J = () => _ab();

    function _K(L) {
        return '/assets/play/' + L;
    }
    const _K = b => b.displayName ? b.displayName : b.name,
        _L = b => b * i.default.upgrades.upgradePricingDiscount,
        _M = () => {
            let N = l.default.questions;
            _ab() && (N = l.default.pardyMode), _Y() && (0, r.loadFont)('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'), _Z() && (0, r.loadFont)('https://fonts.googleapis.com/css2?family=Pangolin&display=swap'), _N(N), _bb() && _O();
        },
        _N = b => {
            i.default.navigation.currentRoute !== b && (i.default.navigation.canChangeRoute ? i.default.navigation.currentRoute !== l.default.nonDismissMessage && (b === l.default.questions && _ab() || b === l.default.shop && _J() || i.default.navigation.changeRoute(b)) : setTimeout(() => _N(b), q.CSS_TRANSITION_TIMEOUT));
        },
        _O = () => _S(k.default.requestPlayerDefendingHomebase),
        _P = () => {
            let Q = !1;
            const _R = i.default.gameValues.defendingHomebaseResults;
            return _R && _R.winner && _R.winner.linked && i.default.user.team.id === _R.winner.linked && (Q = !0), {
                won: Q,
                text: Q ? 'You Won!' : '\uD83D\uDE25'
            };
        },
        _Q = () => {
            window.onbeforeunload = () => {
                const R = i.default.navigation.currentRoute;
                return !![
                    l.default.waiting,
                    l.default.questions,
                    l.default.shop,
                    l.default.upgrade,
                    l.default.team
                ].includes(R) || null;
            };
        },
        _R = (b, _db) => {
            i.default.gameValues.nonDismissMessage.title = _db, i.default.gameValues.nonDismissMessage.message = b, _N(l.default.nonDismissMessage);
        },
        _S = (b, _db) => {
            const T = i.default.engine.game;
            T && T.send(b, _db);
        },
        _T = () => i.default.gameOptions.specialGameType.includes(h.THANOS),
        _U = () => i.default.gameOptions.specialGameType.includes(h.SHOP_QR_SCAN),
        _V = () => i.default.gameOptions.specialGameType.includes(o.BOSS_BATTLE),
        _W = () => i.default.gameOptions.specialGameType.includes(h.HIDDEN),
        _X = () => i.default.gameOptions.specialGameType.includes(h.LAVA),
        _Y = () => i.default.gameOptions.specialGameType.includes(h.IMPOSTER),
        _Z = () => i.default.gameOptions.specialGameType.includes(h.DRAW),
        _$ = () => i.default.gameOptions.specialGameType.includes(h.COMEBACK),
        _ab = () => i.default.gameOptions.specialGameType.includes(h.PARDY),
        _bb = () => i.default.gameOptions.specialGameType.includes(o.HUMAN_ZOMBIE_DEFENDING_HOMEBASE),
        _cb = b => {
            let _db = b.trim();
            return _db = _db.replace(/[\u2018\u2019]/g, '\'').replace(/[\u201C\u201D]/g, '"'), _db = _db.toLowerCase(), _db;
        },
        _db = () => _Y() ? 'Mission Control' : 'Shop',
        _eb = () => _Z() ? m.DRAW_MODE_FONT : n.default.mainFontName;
}), a.register('HCZcd', function(b, c) {
    var d, e;
    _h(b.exports, 'ToastContainer', function() {
        return d;
    }, function(f) {
        return d = f;
    }), _h(b.exports, 'toast', function() {
        return e;
    }, function(f) {
        return e = f;
    });
    var f = _j(a('CVNJj'));
    d = f.default;
    var g = a('cSCoP');
    g.Bounce, g.Slide, g.Zoom, g.Flip;
    var h = a('SH2ii');
    h.POSITION, h.TYPE;
    var i = _j(a('bTPmn'));

    function _j(k) {
        return k && k.__esModule ? k : {
            default: k
        };
    }
    e = i.default, _i(a('d5Mg4')).default;
}), a.register('CVNJj', function(b, c) {
    var d, e;
    _f(b.exports), _h(b.exports, '__esModule', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _h(b.exports, 'default', function() {
        return e;
    }, function(f) {
        return e = f;
    }), d = !0, e = void 0;
    var f = function(g) {
            if (g && g.__esModule)
                return g;
            var _h = {};
            if (null != g)
                for (var i in g)
                    if (Object.prototype.hasOwnProperty.call(g, i)) {
                        var j = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(g, i) : {};
                        j.get || j.set ? Object.defineProperty(_h, i, j) : _h[i] = g[i];
                    }
            return _h.default = g, _h;
        }(a('LEQ5w')),
        g = _p(a('WPpLv')),
        h = _p(a('JrtKP')),
        _i = _p(a('cRir8')),
        j = _p(a('mhMdT')),
        k = _p(a('5dWpX')),
        l = a('cSCoP'),
        m = a('SH2ii'),
        n = _p(a('4Jk3R')),
        o = a('9mnNb');

    function _p(q) {
        return q && q.__esModule ? q : {
            default: q
        };
    }

    function p(q) {
        return function(r) {
            if (Array.isArray(r)) {
                for (var s = 0, t = new Array(r.length); s < r.length; s++)
                    t[s] = r[s];
                return t;
            }
        }(q) || function(r) {
            if (Symbol.iterator in Object(r) || '[object Arguments]' === Object.prototype.toString.call(r))
                return Array.from(r);
        }(q) || function() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
        }();
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
    var p = function(q) {
        var r, s;

        function t() {
            for (var u, v = arguments.length, w = new Array(v), x = 0; x < v; x++)
                w[x] = arguments[x];
            return (u = q.call.apply(q, [this].concat(w)) || this).state = {
                toast: []
            }, u.toastKey = 1, u.collection = {}, u.isToastActive = function(y) {
                return -1 !== u.state.toast.indexOf(y);
            }, u;
        }
        s = q, (r = a).prototype = Object.create(s.prototype), r.prototype.constructor = r, r.__proto__ = s;
        var t = a.prototype;
        return t.componentDidMount = function() {
            var u = this;
            n.default.on(m.ACTION.SHOW, function(v, w) {
                return u.show(v, w);
            }).on(m.ACTION.CLEAR, function(v) {
                return v ? u.removeToast(v) : u.clear();
            }).emit(m.ACTION.DID_MOUNT, this);
        }, t.componentWillUnmount = function() {
            n.default.off(m.ACTION.SHOW).off(m.ACTION.CLEAR).emit(m.ACTION.WILL_UNMOUNT);
        }, t.removeToast = function(u) {
            this.setState({
                toast: this.state.toast.filter(function(v) {
                    return v !== u;
                })
            }, this.dispatchChange);
        }, t.dispatchChange = function() {
            n.default.emit(m.ACTION.ON_CHANGE, this.state.toast.length);
        }, t.makeCloseButton = function(u, v, w) {
            var x = this,
                y = this.props.closeButton;
            return ((0, f.isValidElement)(u) || !1 === u) && (y = u), !1 !== y && (0, f.cloneElement)(y, {
                closeToast: function() {
                    return x.removeToast(v);
                },
                type: w
            });
        }, t.getAutoCloseDelay = function(u) {
            return !1 === u || (0, o.isValidDelay)(u) ? u : this.props.autoClose;
        }, t.canBeRendered = function(u) {
            return (0, f.isValidElement)(u) || 'string' == typeof u || 'number' == typeof u || 'function' == typeof u;
        }, t.parseClassName = function(u) {
            return 'string' == typeof u ? u : null !== u && 'object' == typeof u && 'toString' in u ? u.toString() : null;
        }, t.show = function(u, v) {
            var w, x = this;
            if (!this.canBeRendered(u))
                throw new Error('The element you provided cannot be rendered. You provided an element of type ' + typeof u);
            var y = v.toastId,
                z = function() {
                    return x.removeToast(y);
                },
                A = {
                    id: y,
                    key: v.key || this.toastKey++,
                    type: v.type,
                    closeToast: z,
                    updateId: v.updateId,
                    rtl: this.props.rtl,
                    position: v.position || this.props.position,
                    transition: v.transition || this.props.transition,
                    className: this.parseClassName(v.className || this.props.toastClassName),
                    bodyClassName: this.parseClassName(v.bodyClassName || this.props.bodyClassName),
                    closeButton: this.makeCloseButton(v.closeButton, y, v.type),
                    pauseOnHover: 'boolean' == typeof v.pauseOnHover ? v.pauseOnHover : this.props.pauseOnHover,
                    pauseOnFocusLoss: 'boolean' == typeof v.pauseOnFocusLoss ? v.pauseOnFocusLoss : this.props.pauseOnFocusLoss,
                    draggable: 'boolean' == typeof v.draggable ? v.draggable : this.props.draggable,
                    draggablePercent: 'number' != typeof v.draggablePercent || isNaN(v.draggablePercent) ? this.props.draggablePercent : v.draggablePercent,
                    closeOnClick: 'boolean' == typeof v.closeOnClick ? v.closeOnClick : this.props.closeOnClick,
                    progressClassName: this.parseClassName(v.progressClassName || this.props.progressClassName),
                    progressStyle: this.props.progressStyle,
                    autoClose: this.getAutoCloseDelay(v.autoClose),
                    hideProgressBar: 'boolean' == typeof v.hideProgressBar ? v.hideProgressBar : this.props.hideProgressBar,
                    progress: parseFloat(v.progress),
                    isProgressDone: v.isProgressDone
                };
            'function' == typeof v.onOpen && (A.onOpen = v.onOpen), 'function' == typeof v.onClose && (A.onClose = v.onClose), (0, f.isValidElement)(u) && 'string' != typeof u.type && 'number' != typeof u.type ? u = (0, f.cloneElement)(u, {
                closeToast: z
            }) : 'function' == typeof u && (u = u({
                closeToast: z
            })), this.collection = _G({}, this.collection, ((w = {})[y] = {
                position: A.position,
                options: A,
                content: u
            }, w)), this.setState({
                toast: (A.updateId ? _m(this.state.toast) : _m(this.state.toast).concat([y])).filter(function(B) {
                    return B !== v.staleToastId;
                })
            }, this.dispatchChange);
        }, t.makeToast = function(u, v) {
            return f.default.createElement(j.default, _G({}, v, {
                isDocumentHidden: this.state.isDocumentHidden,
                key: 'toast-' + v.key
            }), u);
        }, t.clear = function() {
            this.setState({
                toast: []
            });
        }, t.renderToast = function() {
            var u = this,
                v = {},
                w = this.props,
                x = w.className,
                y = w.style;
            return (w.newestOnTop ? Object.keys(this.collection).reverse() : Object.keys(this.collection)).forEach(function(z) {
                var A = u.collection[z],
                    B = A.position,
                    C = A.options,
                    D = A.content;
                v[B] || (v[B] = []), -1 !== u.state.toast.indexOf(C.id) ? v[B].push(u.makeToast(D, C)) : (v[B].push(null), delete u.collection[z]);
            }), Object.keys(v).map(function(z) {
                var A = 1 === v[z].length && null === v[z][0],
                    B = {
                        className: (0, h.default)('Toastify__toast-container', 'Toastify__toast-container--' + z, {
                            'Toastify__toast-container--rtl': u.props.rtl
                        }, u.parseClassName(x)),
                        style: A ? _G({}, y, {
                            pointerEvents: 'none'
                        }) : _G({}, y)
                    };
                return f.default.createElement(_i.default, _G({}, B, {
                    key: 'container-' + z
                }), v[z]);
            });
        }, t.render = function() {
            return f.default.createElement('div', {
                className: 'Toastify'
            }, this.renderToast());
        }, a;
    }(f.Component);
    p.propTypes = {
        position: g.default.oneOf((0, o.objectValues)(m.POSITION)),
        autoClose: o.falseOrDelay,
        closeButton: o.falseOrElement,
        hideProgressBar: g.default.bool,
        pauseOnHover: g.default.bool,
        closeOnClick: g.default.bool,
        newestOnTop: g.default.bool,
        className: g.default.oneOfType([
            g.default.string,
            g.default.object
        ]),
        style: g.default.object,
        toastClassName: g.default.oneOfType([
            g.default.string,
            g.default.object
        ]),
        bodyClassName: g.default.oneOfType([
            g.default.string,
            g.default.object
        ]),
        progressClassName: g.default.oneOfType([
            g.default.string,
            g.default.object
        ]),
        progressStyle: g.default.object,
        transition: g.default.func,
        rtl: g.default.bool,
        draggable: g.default.bool,
        draggablePercent: g.default.number,
        pauseOnFocusLoss: g.default.bool
    }, p.defaultProps = {
        position: m.POSITION.TOP_RIGHT,
        transition: l.Bounce,
        rtl: !1,
        autoClose: 5000,
        hideProgressBar: !1,
        closeButton: f.default.createElement(k.default, null),
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
    }, e = p;
}), a.register('mhMdT', function(b, c) {
    var d, e;
    _f(b.exports), _h(b.exports, '__esModule', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _h(b.exports, 'default', function() {
        return e;
    }, function(f) {
        return e = f;
    }), d = !0, e = void 0;
    var f = function(g) {
            if (g && g.__esModule)
                return g;
            var _h = {};
            if (null != g)
                for (var i in g)
                    if (Object.prototype.hasOwnProperty.call(g, i)) {
                        var j = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(g, i) : {};
                        j.get || j.set ? Object.defineProperty(_h, i, j) : _h[i] = g[i];
                    }
            return _h.default = g, _h;
        }(a('LEQ5w')),
        g = _l(a('WPpLv')),
        h = _l(a('JrtKP')),
        i = _l(a('n1EFJ')),
        j = a('SH2ii'),
        k = a('9mnNb');

    function _l(m) {
        return m && m.__esModule ? m : {
            default: m
        };
    }

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

    function l(m) {
        return m.targetTouches && m.targetTouches.length >= 1 ? m.targetTouches[0].clientX : m.clientX;
    }

    function l(m) {
        return m.targetTouches && m.targetTouches.length >= 1 ? m.targetTouches[0].clientY : m.clientY;
    }
    var l = function() {},
        _m = function(n) {
            var o, p;

            function q() {
                for (var r, s = arguments.length, t = new Array(s), u = 0; u < s; u++)
                    t[u] = arguments[u];
                return (r = n.call.apply(n, [this].concat(t)) || this).state = {
                    isRunning: !0,
                    preventExitTransition: !1
                }, r.flag = {
                    canCloseOnClick: !0,
                    canDrag: !1
                }, r.drag = {
                    start: 0,
                    x: 0,
                    y: 0,
                    deltaX: 0,
                    removalDistance: 0
                }, r.ref = null, r.pauseToast = function() {
                    r.props.autoClose && r.setState({
                        isRunning: !1
                    });
                }, r.playToast = function() {
                    r.props.autoClose && r.setState({
                        isRunning: !0
                    });
                }, r.onDragStart = function(v) {
                    r.flag.canCloseOnClick = !0, r.flag.canDrag = !0, r.ref.style.transition = '', r.drag.start = r.drag.x = _C(v.nativeEvent), r.drag.removalDistance = r.ref.offsetWidth * (r.props.draggablePercent / 100);
                }, r.onDragMove = function(v) {
                    r.flag.canDrag && (r.state.isRunning && r.pauseToast(), r.drag.x = _C(v), r.drag.deltaX = r.drag.x - r.drag.start, r.drag.start !== r.drag.x && (r.flag.canCloseOnClick = !1), r.ref.style.transform = 'translateX(' + r.drag.deltaX + 'px)', r.ref.style.opacity = 1 - Math.abs(r.drag.deltaX / r.drag.removalDistance));
                }, r.onDragEnd = function(v) {
                    if (r.flag.canDrag) {
                        if (r.flag.canDrag = !1, Math.abs(r.drag.deltaX) > r.drag.removalDistance)
                            return void r.setState({
                                preventExitTransition: !0
                            }, r.props.closeToast);
                        r.drag.y = _D(v), r.ref.style.transition = 'transform 0.2s, opacity 0.2s', r.ref.style.transform = 'translateX(0)', r.ref.style.opacity = 1;
                    }
                }, r.onDragTransitionEnd = function() {
                    var v = r.ref.getBoundingClientRect(),
                        w = v.top,
                        x = v.bottom,
                        y = v.left,
                        z = v.right;
                    r.props.pauseOnHover && r.drag.x >= y && r.drag.x <= z && r.drag.y >= w && r.drag.y <= x ? r.pauseToast() : r.playToast();
                }, r;
            }
            p = n, (o = a).prototype = Object.create(p.prototype), o.prototype.constructor = o, o.__proto__ = p;
            var q = a.prototype;
            return q.componentDidMount = function() {
                this.props.onOpen(this.props.children.props), this.props.draggable && this.bindDragEvents(), this.props.pauseOnFocusLoss && this.bindFocusEvents();
            }, q.componentDidUpdate = function(r) {
                r.draggable !== this.props.draggable && (this.props.draggable ? this.bindDragEvents() : this.unbindDragEvents()), r.pauseOnFocusLoss !== this.props.pauseOnFocusLoss && (this.props.pauseOnFocusLoss ? this.bindFocusEvents() : this.unbindFocusEvents());
            }, q.componentWillUnmount = function() {
                this.props.onClose(this.props.children.props), this.props.draggable && this.unbindDragEvents(), this.props.pauseOnFocusLoss && this.unbindFocusEvents();
            }, q.bindFocusEvents = function() {
                window.addEventListener('focus', this.playToast), window.addEventListener('blur', this.pauseToast);
            }, q.unbindFocusEvents = function() {
                window.removeEventListener('focus', this.playToast), window.removeEventListener('blur', this.pauseToast);
            }, q.bindDragEvents = function() {
                document.addEventListener('mousemove', this.onDragMove), document.addEventListener('mouseup', this.onDragEnd), document.addEventListener('touchmove', this.onDragMove), document.addEventListener('touchend', this.onDragEnd);
            }, q.unbindDragEvents = function() {
                document.removeEventListener('mousemove', this.onDragMove), document.removeEventListener('mouseup', this.onDragEnd), document.removeEventListener('touchmove', this.onDragMove), document.removeEventListener('touchend', this.onDragEnd);
            }, q.render = function() {
                var r = this,
                    s = this.props,
                    t = s.closeButton,
                    u = s.children,
                    v = s.autoClose,
                    w = s.pauseOnHover,
                    x = s.closeOnClick,
                    y = s.type,
                    z = s.hideProgressBar,
                    A = s.closeToast,
                    B = s.transition,
                    _C = s.position,
                    _D = s.onExited,
                    E = s.className,
                    F = s.bodyClassName,
                    _G = s.progressClassName,
                    H = s.progressStyle,
                    I = s.updateId,
                    J = s.role,
                    K = s.progress,
                    L = s.isProgressDone,
                    M = s.rtl,
                    N = {
                        className: (0, h.default)('Toastify__toast', 'Toastify__toast--' + y, {
                            'Toastify__toast--rtl': M
                        }, E)
                    };
                v && w && (N.onMouseEnter = this.pauseToast, N.onMouseLeave = this.playToast), x && (N.onClick = function() {
                    return r.flag.canCloseOnClick && A();
                });
                var O = parseFloat(K) === K;
                return f.default.createElement(B, {
                    in: this.props.in,
                    appear: !0,
                    unmountOnExit: !0,
                    onExited: _D,
                    position: _C,
                    preventExitTransition: this.state.preventExitTransition
                }, f.default.createElement('div', _k({}, N, {
                    ref: function(P) {
                        return r.ref = P;
                    },
                    onMouseDown: this.onDragStart,
                    onTouchStart: this.onDragStart,
                    onTransitionEnd: this.onDragTransitionEnd
                }), f.default.createElement('div', _k({}, this.props.in && {
                    role: J
                }, {
                    className: (0, h.default)('Toastify__toast-body', F)
                }), u), t && t, (v || O) && f.default.createElement(i.default, _k({}, I && !O ? {
                    key: 'pb-' + I
                } : {}, {
                    rtl: M,
                    delay: v,
                    isRunning: this.state.isRunning,
                    closeToast: A,
                    hide: z,
                    type: y,
                    style: H,
                    className: _G,
                    controlledProgress: O,
                    isProgressDone: L,
                    progress: K
                }))));
            }, a;
        }(f.Component);
    _m.propTypes = {
        closeButton: k.falseOrElement.isRequired,
        autoClose: k.falseOrDelay.isRequired,
        children: g.default.node.isRequired,
        closeToast: g.default.func.isRequired,
        position: g.default.oneOf((0, k.objectValues)(j.POSITION)).isRequired,
        pauseOnHover: g.default.bool.isRequired,
        pauseOnFocusLoss: g.default.bool.isRequired,
        closeOnClick: g.default.bool.isRequired,
        transition: g.default.func.isRequired,
        rtl: g.default.bool.isRequired,
        hideProgressBar: g.default.bool.isRequired,
        draggable: g.default.bool.isRequired,
        draggablePercent: g.default.number.isRequired,
        in: g.default.bool,
        onExited: g.default.func,
        onOpen: g.default.func,
        onClose: g.default.func,
        type: g.default.oneOf((0, k.objectValues)(j.TYPE)),
        className: g.default.oneOfType([
            g.default.string,
            g.default.object
        ]),
        bodyClassName: g.default.oneOfType([
            g.default.string,
            g.default.object
        ]),
        progressClassName: g.default.oneOfType([
            g.default.string,
            g.default.object
        ]),
        progressStyle: g.default.object,
        progress: g.default.number,
        isProgressDone: g.default.bool,
        updateId: g.default.oneOfType([
            g.default.string,
            g.default.number
        ]),
        ariaLabel: g.default.string
    }, _m.defaultProps = {
        type: j.TYPE.DEFAULT,
        in: !0,
        onOpen: l,
        onClose: l,
        className: null,
        bodyClassName: null,
        progressClassName: null,
        updateId: null,
        role: 'alert'
    }, e = _m;
}), a.register('n1EFJ', function(b, c) {
    var d, e;
    _f(b.exports), _m(b.exports, '__esModule', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _m(b.exports, 'default', function() {
        return e;
    }, function(f) {
        return e = f;
    }), d = !0, e = void 0;
    var f = _k(a('LEQ5w')),
        g = _k(a('WPpLv')),
        h = _k(a('JrtKP')),
        i = a('SH2ii'),
        j = a('9mnNb');

    function _k(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }

    function k() {
        return k = Object.assign || function(l) {
            for (var _m = 1; _m < arguments.length; _m++) {
                var n = arguments[_m];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (l[o] = n[o]);
            }
            return l;
        }, k.apply(this, arguments);
    }

    function _k(l) {
        var m, n = l.delay,
            o = l.isRunning,
            p = l.closeToast,
            q = l.type,
            r = l.hide,
            s = l.className,
            t = l.style,
            u = l.controlledProgress,
            v = l.progress,
            w = l.isProgressDone,
            x = l.rtl,
            y = _m({}, t, {
                animationDuration: n + 'ms',
                animationPlayState: o ? 'running' : 'paused',
                opacity: r ? 0 : 1,
                transform: u ? 'scaleX(' + v + ')' : null
            }),
            z = (0, h.default)('Toastify__progress-bar', u ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated', 'Toastify__progress-bar--' + q, {
                'Toastify__progress-bar--rtl': x
            }, s),
            A = ((m = {})[u && w ? 'onTransitionEnd' : 'onAnimationEnd'] = u && !w ? null : p, m);
        return f.default.createElement('div', _m({
            className: z,
            style: y
        }, A));
    }
    _s.propTypes = {
        delay: j.falseOrDelay.isRequired,
        isRunning: g.default.bool.isRequired,
        closeToast: g.default.func.isRequired,
        rtl: g.default.bool.isRequired,
        type: g.default.string,
        hide: g.default.bool,
        className: g.default.oneOfType([
            g.default.string,
            g.default.object
        ]),
        progress: g.default.number,
        controlledProgress: g.default.bool,
        isProgressDone: g.default.bool
    }, _s.defaultProps = {
        type: i.TYPE.DEFAULT,
        hide: !1
    }, e = _s;
}), a.register('SH2ii', function(b, c) {
    var d, e, f;
    _i(b.exports, 'ACTION', function() {
        return d;
    }, function(g) {
        return d = g;
    }), _i(b.exports, 'TYPE', function() {
        return e;
    }, function(g) {
        return e = g;
    }), _i(b.exports, 'POSITION', function() {
        return f;
    }, function(g) {
        return f = g;
    }), d = e = f = void 0;
    f = {
        TOP_LEFT: 'top-left',
        TOP_RIGHT: 'top-right',
        TOP_CENTER: 'top-center',
        BOTTOM_LEFT: 'bottom-left',
        BOTTOM_RIGHT: 'bottom-right',
        BOTTOM_CENTER: 'bottom-center'
    };
    e = {
        INFO: 'info',
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error',
        DEFAULT: 'default'
    };
    d = {
        SHOW: 0,
        CLEAR: 1,
        DID_MOUNT: 2,
        WILL_UNMOUNT: 3,
        ON_CHANGE: 4
    };
}), a.register('9mnNb', function(b, c) {
    var d, e, f, g;
    _i(b.exports, 'isValidDelay', function() {
        return d;
    }, function(h) {
        return d = h;
    }), _i(b.exports, 'objectValues', function() {
        return e;
    }, function(h) {
        return e = h;
    }), _i(b.exports, 'falseOrElement', function() {
        return f;
    }, function(h) {
        return f = h;
    }), _i(b.exports, 'falseOrDelay', function() {
        return g;
    }, function(h) {
        return g = h;
    }), d = _i, e = function(h) {
        return Object.keys(h).map(function(_i) {
            return h[_i];
        });
    }, f = g = void 0;
    var h = a('LEQ5w');

    function _i(j) {
        return 'number' == typeof j && !isNaN(j) && j > 0;
    }

    function i(j) {
        return j.isRequired = function(k, l, m) {
            if (void 0 === k[l])
                return new Error('The prop ' + l + ' is marked as required in \n      ' + m + ', but its value is undefined.');
            j(k, l, m);
        }, j;
    }
    var i = _h(function(j, k, l) {
        var m = j[k];
        return !1 === m || _h(m) ? null : new Error(l + ' expect ' + k + ' \n      to be a valid Number > 0 or equal to false. ' + m + ' given.');
    });
    g = i;
    var j = _h(function(k, l, m) {
        var n = k[l];
        return !1 === n || (0, h.isValidElement)(n) ? null : new Error(m + ' expect ' + l + ' \n      to be a valid react element or equal to false. ' + n + ' given.');
    });
    f = j;
}), a.register('5dWpX', function(b, c) {
    var d, e;
    _f(b.exports), _j(b.exports, '__esModule', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _j(b.exports, 'default', function() {
        return e;
    }, function(f) {
        return e = f;
    }), d = !0, e = void 0;
    var f = _h(a('LEQ5w')),
        g = _h(a('WPpLv'));

    function _h(i) {
        return i && i.__esModule ? i : {
            default: i
        };
    }

    function _h(i) {
        var _j = i.closeToast,
            k = i.type,
            l = i.ariaLabel;
        return f.default.createElement('button', {
            className: 'Toastify__close-button Toastify__close-button--' + k,
            type: 'button',
            onClick: _j,
            'aria-label': l
        }, '\u2716');
    }
    _j.propTypes = {
        closeToast: g.default.func,
        arialLabel: g.default.string
    }, _j.defaultProps = {
        ariaLabel: 'close'
    }, e = _j;
}), a.register('cSCoP', function(b, c) {
    var d, e, f, g;
    _g(b.exports, 'Flip', function() {
        return d;
    }, function(h) {
        return d = h;
    }), _g(b.exports, 'Zoom', function() {
        return e;
    }, function(h) {
        return e = h;
    }), _g(b.exports, 'Slide', function() {
        return f;
    }, function(h) {
        return f = h;
    }), _g(b.exports, 'Bounce', function() {
        return g;
    }, function(h) {
        return g = h;
    }), d = e = f = g = void 0;
    var h, i = (h = a('d5Mg4')) && h.__esModule ? h : {
        default: h
    };
    var _j = (0, i.default)({
        enter: 'Toastify__bounce-enter',
        exit: 'Toastify__bounce-exit',
        appendPosition: !0
    });
    g = _j;
    var k = (0, i.default)({
        enter: 'Toastify__slide-enter',
        exit: 'Toastify__slide-exit',
        duration: [
            450,
            750
        ],
        appendPosition: !0
    });
    f = k;
    var l = (0, i.default)({
        enter: 'Toastify__zoom-enter',
        exit: 'Toastify__zoom-exit'
    });
    e = l;
    var _m = (0, i.default)({
        enter: 'Toastify__flip-enter',
        exit: 'Toastify__flip-exit'
    });
    d = _m;
}), a.register('d5Mg4', function(b, c) {
    var d, e;
    _f(b.exports), _g(b.exports, '__esModule', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _g(b.exports, 'default', function() {
        return e;
    }, function(f) {
        return e = f;
    }), d = !0, e = function(f) {
        var _g = f.enter,
            h = f.exit,
            i = f.duration,
            j = void 0 === i ? 750 : i,
            k = f.appendPosition,
            l = void 0 !== k && k;
        return function(m) {
            var n, o, p = m.children,
                q = m.position,
                r = m.preventExitTransition,
                _s = function(t, u) {
                    if (null == t)
                        return {};
                    var v, w, x = {},
                        y = Object.keys(t);
                    for (w = 0; w < y.length; w++)
                        v = y[w], u.indexOf(v) >= 0 || (x[v] = t[v]);
                    return x;
                }(m, [
                    'children',
                    'position',
                    'preventExitTransition'
                ]),
                t = l ? _g + '--' + q : _g,
                u = l ? h + '--' + q : h;
            Array.isArray(j) && 2 === j.length ? (n = j[0], o = j[1]) : n = o = j;
            return _f.default.createElement(_g.default, _h({}, _s, {
                timeout: r ? 0 : {
                    enter: n,
                    exit: o
                },
                onEnter: function(v) {
                    v.classList.add(t), v.style.animationFillMode = 'forwards', v.style.animationDuration = 0.001 * n + 's';
                },
                onEntered: function(v) {
                    v.classList.remove(t), v.style.cssText = '';
                },
                onExit: r ? _h : function(v) {
                    v.classList.add(u), v.style.animationFillMode = 'forwards', v.style.animationDuration = 0.001 * o + 's';
                }
            }), p);
        };
    };
    var _f = _h(a('LEQ5w')),
        _g = _h(a('xnKqY'));

    function _h(i) {
        return i && i.__esModule ? i : {
            default: i
        };
    }

    function _h() {
        return _h = Object.assign || function(i) {
            for (var j = 1; j < arguments.length; j++) {
                var k = arguments[j];
                for (var l in k)
                    Object.prototype.hasOwnProperty.call(k, l) && (i[l] = k[l]);
            }
            return i;
        }, _h.apply(this, arguments);
    }
    var _h = function() {};
}), a.register('4Jk3R', function(b, c) {
    var d, e;
    _f(b.exports), _h(b.exports, '__esModule', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _h(b.exports, 'default', function() {
        return e;
    }, function(f) {
        return e = f;
    }), d = !0, e = void 0;
    var f = {
        list: new Map(),
        on: function(g, _h) {
            return this.list.has(g) || this.list.set(g, []), this.list.get(g).push(_h), this;
        },
        off: function(g) {
            return this.list.delete(g), this;
        },
        emit: function(g) {
            for (var h = arguments.length, i = new Array(h > 1 ? h - 1 : 0), j = 1; j < h; j++)
                i[j - 1] = arguments[j];
            return !!this.list.has(g) && (this.list.get(g).forEach(function(k) {
                return setTimeout(function() {
                    return k.call.apply(k, [null].concat(i));
                }, 0);
            }), !0);
        }
    };
    e = f;
}), a.register('bTPmn', function(b, c) {
    var d, e;
    _f(b.exports), _k(b.exports, '__esModule', function() {
        return d;
    }, function(_f) {
        return d = _f;
    }), _k(b.exports, 'default', function() {
        return e;
    }, function(f) {
        return e = f;
    }), d = !0, e = void 0;
    var f, g = (f = a('4Jk3R')) && f.__esModule ? f : {
            default: f
        },
        h = a('SH2ii');

    function i() {
        return i = Object.assign || function(j) {
            for (var _k = 1; _k < arguments.length; _k++) {
                var l = arguments[_k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (j[m] = l[m]);
            }
            return j;
        }, i.apply(this, arguments);
    }
    var i = null,
        j = [],
        k = function() {
            return !1;
        };

    function l(m, n) {
        return _j({}, m, {
            type: n,
            toastId: _l(m)
        });
    }

    function l() {
        return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
    }

    function _l(m) {
        return m && ('string' == typeof m.toastId || 'number' == typeof m.toastId && !isNaN(m.toastId)) ? m.toastId : _o();
    }

    function l(m, n) {
        return null !== i ? g.default.emit(h.ACTION.SHOW, m, n) : j.push({
            action: h.ACTION.SHOW,
            content: m,
            options: n
        }), n.toastId;
    }
    var l = _j(function(m, n) {
        return _q(m, _n(n, n && n.type || h.TYPE.DEFAULT));
    }, {
        success: function(m, n) {
            return _q(m, _n(n, h.TYPE.SUCCESS));
        },
        info: function(m, n) {
            return _q(m, _n(n, h.TYPE.INFO));
        },
        warn: function(m, n) {
            return _q(m, _n(n, h.TYPE.WARNING));
        },
        warning: function(m, n) {
            return _q(m, _n(n, h.TYPE.WARNING));
        },
        error: function(m, n) {
            return _q(m, _n(n, h.TYPE.ERROR));
        },
        dismiss: function(m) {
            return void 0 === m && (m = null), i && g.default.emit(h.ACTION.CLEAR, m);
        },
        isActive: k,
        update: function(m, n) {
            setTimeout(function() {
                if (i && void 0 !== i.collection[m]) {
                    var o = i.collection[m],
                        p = o.options,
                        q = o.content,
                        r = _j({}, p, n, {
                            toastId: n.toastId || m
                        });
                    n.toastId && n.toastId !== m ? r.staleToastId = m : r.updateId = _o();
                    var s = void 0 !== r.render ? r.render : q;
                    delete r.render, _q(s, r);
                }
            }, 0);
        },
        done: function(m, n) {
            void 0 === n && (n = 1), l.update(m, {
                progress: n,
                isProgressDone: !0
            });
        },
        onChange: function(m) {
            'function' == typeof m && g.default.on(h.ACTION.ON_CHANGE, m);
        },
        POSITION: h.POSITION,
        TYPE: h.TYPE
    });
    g.default.on(h.ACTION.DID_MOUNT, function(m) {
        i = m, l.isActive = function(n) {
            return i.isToastActive(n);
        }, j.forEach(function(n) {
            g.default.emit(n.action, n.content, n.options);
        }), j = [];
    }).on(h.ACTION.WILL_UNMOUNT, function() {
        i = null, l.isActive = k;
    }), e = l;
}), a.register('3RPAv', function(b, c) {
    _g(b.exports, 'upgradeNames', function() {
        return a;
    });
    const d = {
        moneyPerQuestion: 'Money Per Question',
        streakBonus: 'Streak Bonus',
        multiplier: 'Multiplier',
        insurance: 'Insurance'
    };
}), a.register('I+0AY', function(b, c) {
    _g(b.exports, 'correct', function() {
        return _f;
    }), _g(b.exports, 'incorrect', function() {
        return _g;
    }), _g(b.exports, 'click', function() {
        return _h;
    }), _g(b.exports, 'click2', function() {
        return _i;
    }), _g(b.exports, 'applyTheme', function() {
        return _j;
    }), _g(b.exports, 'successClick', function() {
        return _k;
    }), _g(b.exports, 'woosh', function() {
        return _l;
    }), _g(b.exports, 'done', function() {
        return _m;
    }), _g(b.exports, 'celebrate', function() {
        return _n;
    }), _g(b.exports, 'error', function() {
        return _o;
    }), _g(b.exports, 'success', function() {
        return _p;
    }), _g(b.exports, 'alert', function() {
        return _q;
    }), _g(b.exports, 'clap', function() {
        return _r;
    }), _g(b.exports, 'pop', function() {
        return _s;
    }), _g(b.exports, 'freeze', function() {
        return _t;
    }), _g(b.exports, 'stone', function() {
        return _u;
    }), _g(b.exports, 'drain', function() {
        return _v;
    }), _g(b.exports, 'pieSlice', function() {
        return _w;
    }), _g(b.exports, 'spark', function() {
        return _x;
    }), _g(b.exports, 'bounce', function() {
        return _y;
    });
    var d = a('6yrsF'),
        e = a('b3ci8');
    const _f = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('correct.mp3')]
        }),
        _g = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('incorrect.mp3')]
        }),
        _h = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('click.wav')]
        }),
        _i = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('click2.wav')]
        }),
        _j = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('applyTheme.wav')]
        }),
        _k = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('successClick.wav')]
        }),
        _l = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('woosh.wav')]
        }),
        _m = (new(0, d.Howl)({
            src: [(0, e.getAssetPath)('splash.wav')]
        }), new(0, d.Howl)({
            src: [(0, e.getAssetPath)('done.wav')]
        })),
        _n = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('celebrate.mp3')],
            volume: 0.5
        }),
        _o = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('error.wav')]
        }),
        _p = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('success.wav')]
        }),
        _q = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('alert.wav')]
        }),
        _r = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('clap.wav')]
        }),
        _s = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('pop.mp3')]
        }),
        _t = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('freeze.mp3')]
        }),
        _u = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('stone.mp3')]
        }),
        _v = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('drain.mp3')],
            volume: 0.7
        }),
        _w = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('pieSlice.mp3')]
        }),
        _x = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('spark.mp3')],
            volume: 0.4
        }),
        _y = new(0, d.Howl)({
            src: [(0, e.getAssetPath)('bounce.wav')]
        });
}), a.register('vy6C5', function(b, c) {
    _g(b.exports, 'THANOS', function() {
        return a;
    }), _g(b.exports, 'HIDDEN', function() {
        return _e;
    }), _g(b.exports, 'SHOP_QR_SCAN', function() {
        return _f;
    }), _g(b.exports, 'DEFENDING_HOMEBASE', function() {
        return _g;
    }), _g(b.exports, 'LAVA', function() {
        return _h;
    }), _g(b.exports, 'IMPOSTER', function() {
        return _i;
    }), _g(b.exports, 'DRAW', function() {
        return _j;
    }), _g(b.exports, 'COMEBACK', function() {
        return _k;
    }), _g(b.exports, 'PARDY', function() {
        return _l;
    });
    const d = 'THANOS',
        _e = 'HIDDEN',
        _f = 'SHOP_QR_SCAN',
        _g = 'DEFENDING_HOMEBASE',
        _h = 'LAVA',
        _i = 'IMPOSTER',
        _j = 'DRAW',
        _k = 'COMEBACK',
        _l = 'PARDY';
}), a.register('4vC7/', function(b, c) {
    _g(b.exports, 'default', function() {
        return a;
    });
    var d = {
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
}), a.register('XKFn7', function(b, c) {
    _g(b.exports, 'DRAW_MODE_FONT', function() {
        return a;
    });
    const d = '\'Pangolin\', sans-serif';
}), a.register('9FYKI', function(b, c) {
    _g(b.exports, 'default', function() {
        return _d;
    });
    var _d = a('MueVt').default;
}), a.register('MueVt', function(b, c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    const d = '"Product Sans"';
    var _e = {
        mainFontName: d,
        name: d + ', sans-serif',
        important: d + ', sans-serif!important'
    };
}), a.register('xoHbD', function(b, c) {
    _g(b.exports, 'CLASSIC', function() {
        return a;
    }), _g(b.exports, 'TEAMS', function() {
        return _e;
    }), _g(b.exports, 'THANOS', function() {
        return _f;
    }), _g(b.exports, 'BOSS_BATTLE', function() {
        return _g;
    }), _g(b.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _h;
    }), _g(b.exports, 'LAVA', function() {
        return _i;
    }), _g(b.exports, 'IMPOSTER', function() {
        return _j;
    }), _g(b.exports, 'DRAW', function() {
        return _k;
    }), _g(b.exports, 'PARDY', function() {
        return _l;
    });
    const d = 'CLASSIC',
        _e = 'TEAMS',
        _f = 'THANOS',
        _g = 'BOSS_BATTLE',
        _h = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _i = 'LAVA',
        _j = 'IMPOSTER',
        _k = 'DRAW',
        _l = 'PARDY';
}), a.register('DmB5I', function(b, c) {
    _g(b.exports, 'CSS_TRANSITION_TIMEOUT', function() {
        return a;
    });
    const d = 250;
}), a.register('ENy0x', function(b, c) {
    _g(b.exports, 'defaultShopColor', function() {
        return _h;
    }), _g(b.exports, 'defaultContinueColor', function() {
        return _i;
    }), _g(b.exports, 'default', function() {
        return _k;
    });
    var d = a('csYze'),
        e = a('QWK7i'),
        f = a('YuT/D');
    const g = a('6XgQB1').themes.filter(b => 'Default' === b.name)[0],
        _h = {
            background: '#311B92',
            text: e.default.White
        },
        _i = {
            background: '#1A237E',
            text: e.default.White
        };
    class j {
        constructor() {
            this.theme = {
                defaultBackground: g.question.background,
                question: g.question,
                palette: g.palette,
                response: {
                    correctAnswer: {
                        background: '#388E3C',
                        text: e.default.White
                    },
                    incorrectAnswer: {
                        background: '#B71C1C',
                        text: e.default.White
                    },
                    shop: _h,
                    continue: _i
                },
                desktopBreakpoint: 650
            }, this.availableThemes = f.observable.array(), this.disabledThemes = f.observable.array(), this.themeName = g.name, this.ownedThemes = f.observable.array(), (0, f.makeObservable)(this);
        }
    }
    (0, d.__decorate)([f.observable], j.prototype, 'theme', void 0), (0, d.__decorate)([f.observable], j.prototype, 'availableThemes', void 0), (0, d.__decorate)([f.observable], j.prototype, 'disabledThemes', void 0), (0, d.__decorate)([f.observable], j.prototype, 'themeName', void 0), (0, d.__decorate)([f.observable], j.prototype, 'ownedThemes', void 0);
    var _k = j;
}), a.register('EutDK', function(b, c) {
    _g(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'translations', void 0);
    var _g = f;
}), a.register('gDjoR', function(b, c) {
    _g(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.fullBlackScreen = !1, this.snowing = !1, this.blurredScreen = !1, this.showingSuccessModal = !1, this.successModalInfo = {
                icon: '',
                background: '',
                color: '',
                title: '',
                description: '',
                sound: '',
                textOptions: null
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'fullBlackScreen', void 0), (0, d.__decorate)([e.observable], f.prototype, 'snowing', void 0), (0, d.__decorate)([e.observable], f.prototype, 'blurredScreen', void 0), (0, d.__decorate)([e.observable], f.prototype, 'showingSuccessModal', void 0), (0, d.__decorate)([e.observable], f.prototype, 'successModalInfo', void 0);
    var _g = f;
}), a.register('0Nkeh', function(b, c) {
    _g(b.exports, 'upgradeNames', function() {
        return _f;
    }), _g(b.exports, 'default', function() {
        return _h;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const _f = {
        moneyPerQuestion: 'Money Per Question',
        streakBonus: 'Streak Bonus',
        multiplier: 'Multiplier',
        insurance: 'Insurance'
    };
    class g {
        constructor() {
            this.upgradePricingDiscount = 1, this.upgrades = e.observable.array(), this.currentlySelectedUpgrade = _f.moneyPerQuestion, this.upgradeLevels = {
                moneyPerQuestion: 1,
                streakBonus: 1,
                multiplier: 1,
                insurance: 1
            }, this.upgradeLevelTabs = {
                moneyPerQuestion: 2,
                streakBonus: 2,
                multiplier: 2,
                insurance: 2
            }, this.homebaseUpgades = e.observable.array(), this.lavaUpgrades = e.observable.array(), (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], g.prototype, 'upgradePricingDiscount', void 0), (0, d.__decorate)([e.observable], g.prototype, 'upgrades', void 0), (0, d.__decorate)([e.observable], g.prototype, 'currentlySelectedUpgrade', void 0), (0, d.__decorate)([e.observable], g.prototype, 'upgradeLevels', void 0), (0, d.__decorate)([e.observable], g.prototype, 'upgradeLevelTabs', void 0), (0, d.__decorate)([e.observable], g.prototype, 'homebaseUpgades', void 0), (0, d.__decorate)([e.observable], g.prototype, 'lavaUpgrades', void 0);
    var _h = g;
}), a.register('ab5em', function(b, c) {
    _g(b.exports, 'default', function() {
        return _g;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    class f {
        constructor() {
            this.name = '', this.groupId = '', this.groupMemberId = '', this.theme = 'Default', this.team = null, this.place = 1, this.readToMeEnabled = !1, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], f.prototype, 'name', void 0), (0, d.__decorate)([e.observable], f.prototype, 'groupId', void 0), (0, d.__decorate)([e.observable], f.prototype, 'groupMemberId', void 0), (0, d.__decorate)([e.observable], f.prototype, 'theme', void 0), (0, d.__decorate)([e.observable], f.prototype, 'team', void 0), (0, d.__decorate)([e.observable], f.prototype, 'place', void 0), (0, d.__decorate)([e.observable], f.prototype, 'readToMeEnabled', void 0);
    var _g = f;
}), a.register('XLrkG', function(b, c) {
    _g(b.exports, 'ImposterStatus', function() {
        return _f;
    }), _g(b.exports, 'PersonRole', function() {
        return _h;
    }), _g(b.exports, 'ImposterShopItemId', function() {
        return _j;
    }), _g(b.exports, 'default', function() {
        return _m;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    let _f;
    var g;
    let _h;
    var i;
    let _j;
    var k;
    (g = _f || (_f = {})).intro = 'intro', g.questions = 'questions', g.discussion = 'discussion', g.voting = 'voting', g.votingResult = 'votingResult', (i = _h || (_h = {})).detective = 'detective', i.imposter = 'imposter', (k = _j || (_j = {})).donate = 'donate', k.privateInvestigation = 'privateInvestigation', k.publicInvestigation = 'publicInvestigation', k.meeting = 'meeting', k.investigationRemover = 'investigationRemover', k.fakeInvestigation = 'fakeInvestigation', k.noteViewer = 'noteViewer', k.blendIn = 'blendIn', k.clearListRemover = 'clearListRemover';
    class l {
        constructor() {
            this.status = _f.intro, this.me = null, this.meetingsLeft = 0, this.impostersLeft = 0, this.investigationsLeft = 0, this.epl = null, this.shopItems = e.observable.array(), this.currentShopItem = null, this.currentShopItemModalVisible = !1, this.noteDrawerOpen = !1, this.roleModalOpen = !0, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], l.prototype, 'status', void 0), (0, d.__decorate)([e.observable], l.prototype, 'me', void 0), (0, d.__decorate)([e.observable], l.prototype, 'meetingsLeft', void 0), (0, d.__decorate)([e.observable], l.prototype, 'impostersLeft', void 0), (0, d.__decorate)([e.observable], l.prototype, 'investigationsLeft', void 0), (0, d.__decorate)([e.observable], l.prototype, 'epl', void 0), (0, d.__decorate)([e.observable], l.prototype, 'shopItems', void 0), (0, d.__decorate)([e.observable], l.prototype, 'currentShopItem', void 0), (0, d.__decorate)([e.observable], l.prototype, 'currentShopItemModalVisible', void 0), (0, d.__decorate)([e.observable], l.prototype, 'noteDrawerOpen', void 0), (0, d.__decorate)([e.observable], l.prototype, 'roleModalOpen', void 0);
    var _m = l;
}), a.register('t/Cyj', function(b, c) {
    _g(b.exports, 'PointAdditionType', function() {
        return _f;
    }), _g(b.exports, 'DrawRole', function() {
        return _h;
    }), _g(b.exports, 'DrawStatus', function() {
        return _j;
    }), _g(b.exports, 'default', function() {
        return _m;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    let _f;
    var g;
    let _h;
    var i;
    let _j;
    var k;
    (g = _f || (_f = {})).correct = 'correct', g.speed = 'speed', g.firstGuess = 'firstGuess', g.goodDrawer = 'goodDrawer', (i = _h || (_h = {})).drawer = 'Drawer', i.guesser = 'Guesser', (k = _j || (_j = {})).pickDrawer = 'pickDrawer', k.termSelection = 'termSelection', k.drawing = 'drawing', k.results = 'results';
    class l {
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
                role: _h.guesser,
                lastRound: null,
                answeredCorrectly: !1
            }, this.status = _j.pickDrawer, this.latestLine = null, this.latestFeedItem = null, this.shouldClearCanvas = !1, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], l.prototype, 'round', void 0), (0, d.__decorate)([e.observable], l.prototype, 'me', void 0), (0, d.__decorate)([e.observable], l.prototype, 'status', void 0), (0, d.__decorate)([e.observable], l.prototype, 'latestLine', void 0), (0, d.__decorate)([e.observable], l.prototype, 'latestFeedItem', void 0), (0, d.__decorate)([e.observable], l.prototype, 'shouldClearCanvas', void 0);
    var _m = l;
}), a.register('K6h9e', function(b, c) {
    _g(b.exports, 'PardyScreen', function() {
        return _f;
    }), _g(b.exports, 'PardyQuestionScreen', function() {
        return _h;
    }), _g(b.exports, 'PardyQuestionStatus', function() {
        return _j;
    }), _g(b.exports, 'default', function() {
        return _m;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    let _f;
    var g;
    let _h;
    var i;
    let _j;
    var k;
    (g = _f || (_f = {})).home = 'home', g.question = 'question', g.answer = 'answer', (i = _h || (_h = {})).preview = 'preview', i.finale = 'finale', i.question = 'question', (k = _j || (_j = {})).preview = 'preview', k.ask = 'ask', k.timesUp = 'timesUp';
    class l {
        constructor() {
            this.screen = _f.home, this.questionScreen = _h.preview, this.questionStatus = _j.preview, this.powers = e.observable.array(), this.power = '', this.powerOptions = e.observable.array(), this.currentQuestion = null, this.animatingQuestionScreenOut = !1, this.animatingBetScreenOut = !1, this.answered = !1, this.answeredCorrectly = !1, this.answerResponseItems = e.observable.array(), this.maxBet = 1, this.currentBet = 0, this.tips = e.observable.array(), this.answerLockedInWittyMessages = e.observable.array(), this.correctWittyMessages = e.observable.array(), this.incorrectWittyMessages = e.observable.array(), (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], l.prototype, 'screen', void 0), (0, d.__decorate)([e.observable], l.prototype, 'questionScreen', void 0), (0, d.__decorate)([e.observable], l.prototype, 'questionStatus', void 0), (0, d.__decorate)([e.observable], l.prototype, 'powers', void 0), (0, d.__decorate)([e.observable], l.prototype, 'power', void 0), (0, d.__decorate)([e.observable], l.prototype, 'powerOptions', void 0), (0, d.__decorate)([e.observable], l.prototype, 'currentQuestion', void 0), (0, d.__decorate)([e.observable], l.prototype, 'animatingQuestionScreenOut', void 0), (0, d.__decorate)([e.observable], l.prototype, 'animatingBetScreenOut', void 0), (0, d.__decorate)([e.observable], l.prototype, 'answered', void 0), (0, d.__decorate)([e.observable], l.prototype, 'answeredCorrectly', void 0), (0, d.__decorate)([e.observable], l.prototype, 'answerResponseItems', void 0), (0, d.__decorate)([e.observable], l.prototype, 'maxBet', void 0), (0, d.__decorate)([e.observable], l.prototype, 'currentBet', void 0), (0, d.__decorate)([e.observable], l.prototype, 'tips', void 0), (0, d.__decorate)([e.observable], l.prototype, 'answerLockedInWittyMessages', void 0), (0, d.__decorate)([e.observable], l.prototype, 'correctWittyMessages', void 0), (0, d.__decorate)([e.observable], l.prototype, 'incorrectWittyMessages', void 0);
    var _m = l;
}), a.register('EI+s2', function(b, c) {
    _g(b.exports, 'startLoop', function() {
        return _g;
    });
    var d = a('b3ci8'),
        e = a('/Gny8');
    const f = () => {
            e.default.forEach(b => {
                var _g;
                window[b] && (_g = b, setTimeout(() => {
                    (0, d.send)('REDBOAT', _g);
                }, 130));
            });
        },
        _g = () => {
            setInterval(f, 10000);
        };
}), a.register('/Gny8', function(b, c) {
    _p(b.exports, 'default', function() {
        return _e;
    });
    var d = [
        'clickElement',
        'Exploit',
        'msgpack',
        'AYO_YOU_SHOULDNT_BE_HERE_ROCKS_NETWORK_VAREDZP',
        'getAnswer'
    ];
    var _e = [
        d[0],
        d[1],
        d[2],
        d[3]
    ];
}), a.register('vnXTg', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('J/XHk'),
        f = a('ncnqT'),
        g = a('nP+p+'),
        h = a('9FYKI'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('YuT/D'),
        l = a('2x11J'),
        m = a('oN4l0');
    const n = (0, e.default)({
        typography: {
            fontFamily: [
                h.default.mainFontName,
                'sans-serif'
            ].join(',')
        }
    });
    var _o = (0, l.observer)(b => {
        const {
            theme: _p
        } = i.useContext(m.default);
        return (0, d.jsx)(f.default, {
            theme: n,
            children: (0, d.jsx)(j.ThemeProvider, {
                theme: (0, k.toJS)(_p.theme),
                children: (0, d.jsx)(d.Fragment, {
                    children: (0, d.jsx)(g.default, {
                        ...b
                    })
                })
            })
        });
    });
}), a.register('ncnqT', function(b, c) {
    _k(b.exports, 'default', function() {
        return _i;
    });
    var d = a('r98tK1'),
        e = a('LEQ5w');
    a('WPpLv');
    var f = a('7/5tH'),
        g = a('r53HP'),
        h = a('8OM/J');
    var _i = function(j) {
        var _k = j.children,
            l = j.theme,
            m = (0, g.default)(),
            n = _c(e).useMemo(function() {
                var o = null === m ? l : function(p, q) {
                    return 'function' == typeof q ? q(p) : (0, d.default)((0, d.default)({}, p), q);
                }(m, l);
                return null != o && (o[h.default] = null !== m), o;
            }, [
                l,
                m
            ]);
        return _c(e).createElement(f.default.Provider, {
            value: n
        }, _k);
    };
}), a.register('nP+p+', function(b, _c) {
    _A(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('eup54');
    a('LEQ5w');
    var _f = b => (0, d.jsx)(e.default, {
        ...b
    });
}), a.register('eup54', function(b, c) {
    _A(b.exports, 'default', function() {
        return _z;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('HCZcd'),
        g = a('2x11J'),
        h = a('Axq+p'),
        i = a('9FYKI'),
        j = a('O5C3m'),
        k = a('PgtY7'),
        l = a('PcR/G'),
        m = a('RC6kl3'),
        n = a('EG5dB'),
        o = a('ZkrsQ'),
        p = a('2i+hG'),
        q = a('oN4l0'),
        r = a('sHRDd');
    let s, t, u, v = b => b;
    const w = h.default.div(s || (s = v`
  display: flex;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  color: ${ 0 };
`), r.default.Black),
        x = h.default.div(t || (t = v`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  font-family: ${ 0 };
  user-select: none;
  ${ 0 }
  transition: filter 1s;
  overflow: hidden;
`), i.default.name, b => b.blurred && 'filter: blur(5px);'),
        y = h.default.div(u || (u = v`
  height: 0px;
  width: 0px;
  .toast-body {
    font-family: ${ 0 };
  }
`), i.default.name);
    var _z = (0, g.observer)(b => {
        const {
            ui: _A
        } = e.useContext(q.default);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(m.default, {
                    children: (0, d.jsx)(w, {
                        children: (0, d.jsxs)(x, {
                            blurred: _A.blurredScreen,
                            children: [
                                (0, d.jsx)(j.default, {}),
                                (0, d.jsx)(k.default, {
                                    ...b
                                })
                            ]
                        })
                    })
                }),
                (0, d.jsx)(y, {
                    children: (0, d.jsx)(f.ToastContainer, {
                        bodyClassName: 'toast-body'
                    })
                }),
                (0, d.jsx)(n.default, {}),
                (0, d.jsx)(o.default, {}),
                (0, d.jsx)(p.default, {}),
                (0, d.jsx)(l.default, {})
            ]
        });
    });
}), a.register('O5C3m', function(b, c) {
    _H(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('hqhIw'),
        g = a('5g4Fg'),
        h = a('lVtHT'),
        i = a('zr14p');
    class j extends e.Component {
        render() {
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(g.default, {}),
                    (0, d.jsx)(i.default, {}),
                    (0, d.jsx)(h.default, {}),
                    (0, d.jsx)(f.default, {})
                ]
            });
        }
    }
    var _k = j;
}), a.register('hqhIw', function(b, c) {
    _H(b.exports, 'DISABLED_PATHS', function() {
        return _B;
    }), _H(b.exports, 'default', function() {
        return _F;
    });
    var d = a('0hzx+'),
        e = a('KFYFW'),
        f = a('amKpW'),
        g = a('XO5BT'),
        h = a('QWK7i'),
        i = a('ziKcb'),
        j = a('E9ysS'),
        k = a('b3ci8'),
        l = a('2x11J'),
        m = a('LEQ5w'),
        n = a('Axq+p'),
        o = a('Nufvj'),
        p = a('FcCA1'),
        q = a('93Y+H'),
        r = a('jVmx9'),
        s = a('K+bpA');
    a('KOgpv');
    var t = a('8Wc8V'),
        u = a('Ei+Gg'),
        v = a('oN4l0');
    let w, x, y, z = b => b;
    const A = [
            j.default.join,
            j.default.drawMode
        ],
        _B = [
            j.default.waiting,
            j.default.gameOver,
            j.default.team,
            j.default.nonDismissMessage,
            j.default.imposterMode
        ],
        C = n.default.div(w || (w = z`
  flex: 0 1 auto;
  color: ${ 0 };
`), h.default.White),
        D = n.default.div(x || (x = z`
  height: ${ 0 }px;
  background: #4252af;
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${ 0 };
  z-index: 1;
`), 63, i.default.basic),
        E = n.default.div(y || (y = z`
  width: 100%;
  display: flex;
  align-items: center;
`));
    var _F = (0, l.observer)(() => {
        const {
            balance: G,
            user: _H,
            navigation: I,
            powerups: J,
            questions: {
                lockedViewingCorrectAnswer: K
            }
        } = m.useContext(v.default), L = m.useCallback(() => {
            if (!K)
                return I.currentRoute === j.default.questions ? (0, k.changeRoute)(j.default.shop) : (0, k.changeRoute)(j.default.questions);
        }, [
            I.currentRoute,
            K
        ]), M = m.useCallback(() => {
            const N = {
                fontWeight: 900,
                cursor: 'pointer',
                fontSize: 22
            };
            return _H.team ? {
                ...N,
                padding: 5,
                backgroundColor: (0, k.getTeamColor)(),
                borderRadius: 4
            } : N;
        }, [_H.team]), N = m.useCallback(() => (0, k.toggleDrawer)(!0), []), O = () => (0, k.inHiddenMode)() || J.appliedPowerups.includes(t.PowerupNames.cashConcealer) ? (0, d.jsx)('div', {}) : (0, d.jsx)('div', {
            onClick: L,
            style: M(),
            children: (0, k.getMoney)(G.balance)
        });
        return A.includes(I.currentRoute) ? null : _B.includes(I.currentRoute) ? (0, d.jsx)(D, {
            children: (0, d.jsx)(E, {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: (0, d.jsx)('img', {
                    src: '/client/img/svgLogoWhite.svg',
                    style: {
                        height: 30
                    }
                })
            })
        }) : (0, d.jsxs)(C, {
            children: [
                (0, d.jsx)(D, {
                    children: (0, d.jsxs)(E, {
                        style: {
                            paddingLeft: 8,
                            paddingRight: 10
                        },
                        children: [
                            (0, d.jsx)(o.default, {}),
                            (0, d.jsx)(e.default, {
                                onClick: N,
                                color: 'inherit',
                                'aria-label': 'Menu',
                                children: (0, d.jsx)(g.default, {})
                            }),
                            (0, d.jsx)(q.default, {}),
                            (0, d.jsx)(p.default, {}),
                            (0, d.jsx)(u.default, {}),
                            (0, d.jsx)(r.default, {}),
                            (0, d.jsxs)('div', {
                                style: {
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    color: G.customColor ? G.customColor : 'inherit',
                                    transition: 'color 0.25s'
                                },
                                children: [
                                    (0, d.jsx)('div', {}),
                                    (0, d.jsx)('div', {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center'
                                        },
                                        children: (0, d.jsx)('div', {
                                            children: _H.team ? (0, d.jsx)(f.default, {
                                                title: (0, d.jsx)('div', {
                                                    style: {
                                                        fontSize: 19,
                                                        padding: 5
                                                    },
                                                    children: (0, k.capitalizeFirstLetter)(_H.team.id)
                                                }),
                                                placement: 'left',
                                                children: O()
                                            }) : O()
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, d.jsx)(s.default, {})
            ]
        });
    });
}), a.register('KFYFW', function(b, c) {
    _n(b.exports, 'default', function() {
        return _t;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('awqIe'),
        j = a('+4L0f'),
        k = a('mmS5q'),
        l = f.forwardRef(function(m, _n) {
            var o = m.edge,
                p = void 0 !== o && o,
                q = m.children,
                r = m.classes,
                s = m.className,
                _t = m.color,
                u = void 0 === _t ? 'default' : _t,
                v = m.disabled,
                w = void 0 !== v && v,
                x = m.disableFocusRipple,
                y = void 0 !== x && x,
                z = m.size,
                A = void 0 === z ? 'medium' : z,
                B = (0, e.default)(m, [
                    'edge',
                    'children',
                    'classes',
                    'className',
                    'color',
                    'disabled',
                    'disableFocusRipple',
                    'size'
                ]);
            return f.createElement(j.default, (0, d.default)({
                className: (0, g.default)(r.root, s, 'default' !== u && r['color'.concat((0, k.default)(u))], w && r.disabled, 'small' === A && r['size'.concat((0, k.default)(A))], {
                    start: r.edgeStart,
                    end: r.edgeEnd
                } [p]),
                centerRipple: !0,
                focusRipple: !y,
                disabled: w,
                ref: _n
            }, B), f.createElement('span', {
                className: r.label
            }, q));
        }),
        m = (0, h.default)(function(n) {
            return {
                root: {
                    textAlign: 'center',
                    flex: '0 0 auto',
                    fontSize: n.typography.pxToRem(24),
                    padding: 12,
                    borderRadius: '50%',
                    overflow: 'visible',
                    color: n.palette.action.active,
                    transition: n.transitions.create('background-color', {
                        duration: n.transitions.duration.shortest
                    }),
                    '&:hover': {
                        backgroundColor: (0, i.fade)(n.palette.action.active, n.palette.action.hoverOpacity),
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    },
                    '&$disabled': {
                        backgroundColor: 'transparent',
                        color: n.palette.action.disabled
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
                    color: n.palette.primary.main,
                    '&:hover': {
                        backgroundColor: (0, i.fade)(n.palette.primary.main, n.palette.action.hoverOpacity),
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                colorSecondary: {
                    color: n.palette.secondary.main,
                    '&:hover': {
                        backgroundColor: (0, i.fade)(n.palette.secondary.main, n.palette.action.hoverOpacity),
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                disabled: {},
                sizeSmall: {
                    padding: 3,
                    fontSize: n.typography.pxToRem(18)
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
        })(l);
}), a.register('XO5BT', function(b, c) {
    _i(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
        }), 'Menu');
}), a.register('OO/bE', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('r98tK1'),
        e = a('LEQ5w'),
        f = a('h+POK');

    function _g(h, _i) {
        var j = _c(e).memo(_c(e).forwardRef(function(k, l) {
            return _c(e).createElement(f.default, (0, d.default)({
                ref: l
            }, k), h);
        }));
        return j.muiName = f.default.muiName, j;
    }
}), a.register('ziKcb', function(b, _c) {
    _q(b.exports, 'default', function() {
        return a;
    });
    var d = {
        basic: '0px 4px 33px -6px rgba(0, 0, 0, 0.46)'
    };
}), a.register('Nufvj', function(b, c) {
    _q(b.exports, 'default', function() {
        return _q;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('KFYFW'),
        h = a('l4HT0'),
        i = a('QWK7i'),
        j = a('E9ysS'),
        k = a('I+0AY'),
        l = a('b3ci8'),
        m = a('2x11J'),
        n = a('LEQ5w');
    const o = b => (0, f.jsx)('div', {
        style: {
            color: i.default.White
        },
        children: (0, f.jsx)(g.default, {
            onClick: b.goBack,
            color: 'inherit',
            children: (0, f.jsx)(h.default, {})
        })
    });
    let p = class extends n.Component {
        render() {
            return this.props.navigation.currentRoute === j.default.upgrade ? (0, f.jsx)(o, {
                goBack: this.goBack
            }) : null;
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'goBack', () => {
                k.click.play(), (0, l.changeRoute)(j.default.shop);
            });
        }
    };
    p = (0, e.__decorate)([
        (0, m.inject)('navigation'),
        m.observer
    ], p);
    var _q = p;
}), a.register('l4HT0', function(b, c) {
    _q(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'
        }), 'ArrowBack');
}), a.register('FcCA1', function(b, _c) {
    _q(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('KFYFW'),
        f = a('vA1Qh'),
        g = a('QWK7i'),
        h = a('E9ysS'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('oN4l0'),
        l = a('kOSsb'),
        m = a('b3ci8'),
        n = a('5drJf');
    var _o = (0, i.observer)(() => {
        const {
            navigation: p,
            questions: _q,
            user: r,
            pardy: s
        } = j.useContext(k.default);
        return (0, d.jsx)(d.Fragment, {
            children: r.readToMeEnabled && l.default.hasFinishedReading() && l.default.canPlayAgain() && (p.currentRoute === h.default.questions || p.currentRoute === h.default.pardyMode) && (0, d.jsx)('div', {
                style: {
                    color: g.default.White
                },
                children: (0, d.jsx)(e.default, {
                    onClick: () => {
                        (0, m.inPardyMode)() ? l.default.play(s.currentQuestion): l.default.play((0, n.DecryptData)(_q.ceq));
                    },
                    color: 'inherit',
                    children: (0, d.jsx)(f.default, {})
                })
            })
        });
    });
}), a.register('vA1Qh', function(b, c) {
    _c(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z'
        }), 'Hearing');
}), a.register('oN4l0', function(b, _c) {
    _c(b.exports, 'default', function() {
        return _e;
    });
    var d = a('O4G7w');
    var _e = a('LEQ5w').createContext(d.default);
}), a.register('93Y+H', function(b, c) {
    _c(b.exports, 'default', function() {
        return _o;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('KFYFW'),
        h = a('0Jc0F'),
        i = a('++MnA'),
        j = a('2x11J'),
        k = a('LEQ5w'),
        l = a('6XgQB1'),
        m = a('b3ci8');
    let n = class extends k.Component {
        render() {
            return this.props.gameOptions.type !== l.GameType.live || (0, m.inLavaMode)() || (0, m.inZombiesVsHumansMode)() || (0, m.inImposterMode)() || (0, m.inHiddenMode)() || (0, m.inPardyMode)() ? null : (0, f.jsx)(g.default, {
                onClick: this.open,
                color: 'inherit',
                'aria-label': 'Leaderboard',
                children: (0, f.jsx)(_d(h), {})
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'open', () => {
                this.props.navigation.leaderboardDrawerOpen = !0, (0, i.fetchLatestLeaderboardStats)();
            });
        }
    };
    n = (0, e.__decorate)([
        (0, j.inject)('navigation', 'gameOptions'),
        j.observer
    ], n);
    var _o = n;
}), a.register('0Jc0F', function(b, _c) {
    var _d = a('CO72t');
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.default = void 0;
    var e = _d(a('LEQ5w')),
        f = (0, _d(a('Sf/mW')).default)(e.default.createElement('path', {
            d: 'M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z'
        }), 'Games');
    b.exports.default = f;
}), a.register('CO72t', function(b, c) {
    b.exports = function(d) {
        return d && d.__esModule ? d : {
            default: d
        };
    };
}), a.register('++MnA', function(b, c) {
    _l(b.exports, 'leaderboardSorter', function() {
        return _k;
    }), _l(b.exports, 'fetchLatestLeaderboardStats', function() {
        return _l;
    }), _l(b.exports, 'default', function() {
        return _n;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('4vC7/'),
        g = a('b3ci8'),
        h = a('2x11J'),
        i = a('LEQ5w'),
        j = a('LlmxX');
    const _k = b => {
            const _l = (0, g.inThanosMode)() ? 'stones' : 'balance';
            return b.slice().sort((b, c) => b[_l] === c[_l] ? 0 : b[_l] > c[_l] ? -1 : 1);
        },
        _l = () => (0, g.send)((0, g.inTeamMode)() ? f.default.requestTeamLeaderboard : f.default.requestPlayerLeaderboard);
    let m = class extends i.Component {
        componentDidMount() {
            _l();
        }
        render() {
            const n = (0, g.inTeamMode)();
            let o = [],
                p = [];
            return n && !this.props.gameValues.teams.length ? null : n || this.props.gameValues.players.length ? (n ? o = _k(this.props.gameValues.teams) : p = _k(this.props.gameValues.players), (0, e.jsx)('div', {
                style: {
                    width: '100%'
                },
                children: n ? o.map((n, o) => (0, e.jsx)(j.default, {
                    item: n,
                    position: o + 1,
                    isPlayer: !1,
                    usePowerupAction: this.props.usePowerupAction,
                    parentAction: this.props.parentAction,
                    showSelf: this.props.showSelf,
                    showHidden: this.props.showHidden,
                    customBorderRadius: this.props.customItemBorderRadius
                }, n.id)) : p.map((n, o) => (0, e.jsx)(j.default, {
                    item: n,
                    position: o + 1,
                    isPlayer: !0,
                    usePowerupAction: this.props.usePowerupAction,
                    parentAction: this.props.parentAction,
                    showSelf: this.props.showSelf,
                    showHidden: this.props.showHidden,
                    customBorderRadius: this.props.customItemBorderRadius
                }, n.id))
            })) : null;
        }
    };
    m = (0, d.__decorate)([
        (0, h.inject)('gameValues', 'gameOptions'),
        h.observer
    ], m);
    var _n = m;
}), a.register('LlmxX', function(b, c) {
    _E(b.exports, 'LINK_ICON', function() {
        return _y;
    }), _E(b.exports, 'default', function() {
        return _F;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('uo5Q0'),
        h = a('pECMN'),
        i = a('RYc37'),
        j = a('DNhpF'),
        k = a('QWK7i'),
        l = a('ziKcb'),
        m = a('mQhD8');
    a('KOgpv');
    var n = a('8Wc8V'),
        o = a('b3ci8'),
        p = a('2x11J'),
        q = a('LEQ5w'),
        r = a('Axq+p'),
        s = a('6XgQB1');
    let t, u, v, w, x = b => b;
    const _y = 'fas fa-link',
        z = r.default.div(t || (t = x`
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
`), b => b.backgroundColor, b => b.customBorderRadius || 3, b => b.textColor, l.default.basic, () => (0, o.mainFontName)()),
        A = r.default.div(u || (u = x`
  display: flex;
  align-items: center;
  flex: 1;
`)),
        B = r.default.div(v || (v = x`
  height: 40px;
  margin-right: 5px;
  width: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ 0 };
  color: ${ 0 };
`), b => b.backgroundColor, b => b.textColor),
        C = r.default.div(w || (w = x`
  font-weight: normal;
  font-size: 15px;
`)),
        D = b => {
            let _E = '';
            return b.players.forEach((c, a) => {
                _E += c, a + 1 !== b.players.length && (_E += ', ');
            }), _E;
        };
    let E = class extends q.Component {
        render() {
            const F = this.props,
                G = this.getIcon();
            if (F.item.activePowerups.includes(n.PowerupNames.undercover) && !this.props.showHidden)
                return null;
            const {
                isPlayer: H
            } = F;
            if (H) {
                const I = F.item;
                if (I.id === (0, m.identifier)() && !this.props.showSelf)
                    return null;
                const J = this.props.theme.availableThemes.filter(F => F.name === I.theme)[0];
                J || (J.name = 'Default');
                let K = k.default.White,
                    L = k.default.Black;
                return 'Default' !== J.name && (K = J.question.background, L = J.question.text), (0, f.jsxs)(z, {
                    backgroundColor: K,
                    textColor: L,
                    customBorderRadius: this.props.customBorderRadius,
                    children: [
                        (0, f.jsxs)(A, {
                            children: [
                                (0, f.jsx)(B, {
                                    backgroundColor: J.palette[0].background,
                                    textColor: J.palette[0].text,
                                    children: (0, f.jsx)(j.default, {
                                        paddingHorizontal: 7,
                                        paddingVertical: 7,
                                        text: G ? (0, f.jsx)(h.default, {
                                            name: G
                                        }) : F.position.toString()
                                    })
                                }),
                                (0, f.jsx)('div', {
                                    onClick: this.toggleBalanceVisiblity,
                                    style: {
                                        width: 'calc(100% - 50px)',
                                        marginLeft: 7,
                                        cursor: 'pointer'
                                    },
                                    children: this.state.showingBalance ? (0, o.inThanosMode)() ? `${ I.stones } stone${ 1 === I.stones ? '' : 's' }` : (0, o.getMoney)(I.balance) : I.name
                                })
                            ]
                        }),
                        this.props.usePowerupAction && (0, f.jsx)('div', {
                            style: {
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: 15
                            },
                            children: (0, f.jsx)(g.default, {
                                type: this.canUsePowerup() ? 'primary' : 'disabled',
                                label: (0, f.jsx)(i.default, {
                                    text: this.getUseButtonText()
                                }),
                                size: 'small',
                                onClick: this.attack
                            })
                        })
                    ]
                });
            }
            const I = F.item;
            return I.id !== F.user.team.id || this.props.showSelf ? (0, f.jsxs)(z, {
                backgroundColor: k.default.White,
                textColor: k.default.Black,
                customBorderRadius: this.props.customBorderRadius,
                children: [
                    (0, f.jsxs)(A, {
                        children: [
                            (0, f.jsx)(B, {
                                backgroundColor: (0, o.getTeamColor)(I.id),
                                textColor: k.default.White,
                                children: (0, f.jsx)(j.default, {
                                    paddingHorizontal: 7,
                                    paddingVertical: 7,
                                    text: G ? (0, f.jsx)(h.default, {
                                        name: G
                                    }) : F.position.toString()
                                })
                            }),
                            (0, f.jsxs)('div', {
                                onClick: this.toggleBalanceVisiblity,
                                style: {
                                    width: 'calc(100% - 50px)',
                                    marginLeft: 7,
                                    cursor: 'pointer'
                                },
                                children: [
                                    (0, f.jsx)('div', {
                                        children: this.state.showingBalance ? (0, o.getMoney)(I.balance) : (0, f.jsx)(i.default, {
                                            text: (0, o.getTeamName)(I.id)
                                        })
                                    }),
                                    (0, f.jsx)(C, {
                                        children: D(I)
                                    })
                                ]
                            })
                        ]
                    }),
                    this.props.usePowerupAction && (0, f.jsx)('div', {
                        style: {
                            height: 40,
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: 15
                        },
                        children: (0, f.jsx)(g.default, {
                            type: this.canUsePowerup() ? 'primary' : 'disabled',
                            label: (0, f.jsx)(i.default, {
                                text: this.getUseButtonText()
                            }),
                            size: 'small',
                            onClick: this.attack
                        })
                    })
                ]
            }) : null;
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                showingBalance: !1
            }), (0, d.default)(this, 'canUsePowerup', () => {
                const F = this.props.navigation.attackModal.powerup;
                return !F || (F === n.PowerupNames.giving || !this.props.item.activePowerups.includes(n.PowerupNames.shield) && (F !== n.PowerupNames.link || !this.props.item.activePowerups.includes(n.PowerupNames.link)));
            }), (0, d.default)(this, 'getIcon', () => {
                const F = this.props.item.activePowerups;
                if (F.includes(n.PowerupNames.shield))
                    return 'fas fa-shield-alt';
                if (F.includes(n.PowerupNames.link))
                    return _y;
                if (this.props.isPlayer)
                    return null;
                {
                    const G = this.props.item;
                    return (0, o.getTeamIcon)(G.id);
                }
            }), (0, d.default)(this, 'getUseButtonText', () => {
                const F = this.props.navigation.attackModal.powerup;
                return F === n.PowerupNames.link ? 'Link' : F === n.PowerupNames.giving ? 'Give' : 'Use';
            }), (0, d.default)(this, 'attack', () => {
                if (this.props.isPlayer) {
                    const F = this.props.item;
                    (0, o.attack)(F.id, F.name);
                } else {
                    const F = this.props.item;
                    (0, o.attack)(F.id, (0, o.getTeamName)(F.id));
                }
                this.props.parentAction && this.props.parentAction();
            }), (0, d.default)(this, 'toggleBalanceVisiblity', () => {
                ((0, o.inThanosMode)() || !(0, o.inHiddenMode)() && ((0, o.inTeamMode)() || this.props.gameValues.gameStatus !== s.GameStatus.gameplay)) && this.setState({
                    showingBalance: !this.state.showingBalance
                });
            });
        }
    };
    E = (0, e.__decorate)([
        (0, p.inject)('engine', 'user', 'theme', 'gameOptions', 'navigation', 'gameValues'),
        p.observer
    ], E);
    var _F = E;
}), a.register('pECMN', function(b, c) {
    _s(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    class _f extends e.Component {
        render() {
            return (0, d.jsx)('i', {
                className: this.props.name,
                style: this.props.style
            });
        }
    }
}), a.register('RYc37', function(b, c) {
    _s(b.exports, 'default', function() {
        return _j;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('LEQ5w'),
        g = a('2x11J'),
        h = a('bgvr8');
    let i = class extends f.Component {
        componentDidUpdate(j) {
            j.text !== this.props.text && (this.setState({
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
                }) : void this.requestTranslation().then(b => {
                    this.props.translations[this.props.text] = b, this.setState({
                        text: b
                    });
                }).catch();
        }
        render() {
            return this.buildString();
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                text: this.props.text
            }), (0, d.default)(this, 'buildString', () => {
                let j = this.state.text;
                return this.props.suffix && (j += this.props.suffix), j;
            }), (0, d.default)(this, 'requestTranslation', async () => {
                try {
                    return (await h.default.post('/api/translate', {
                        to: this.props.gameOptions.language,
                        text: this.props.text
                    })).data;
                } catch (b) {
                    return this.props.text;
                }
            });
        }
    };
    i = (0, e.__decorate)([
        (0, g.inject)('translations', 'gameOptions'),
        g.observer
    ], i);
    var _j = i;
}), a.register('mQhD8', function(b, c) {
    _s(b.exports, 'identifier', function() {
        return _q;
    }), _s(b.exports, 'default', function() {
        return _r;
    });
    var d = a('++MnA'),
        e = a('I+0AY'),
        f = a('b3ci8'),
        g = a('vy6C5'),
        h = a('haZfi'),
        i = a('O4G7w'),
        j = a('FCqSv'),
        k = a('SD5S+'),
        l = a('6yrsF'),
        m = a('shdmB'),
        n = a('Wc0bi'),
        o = a('5drJf'),
        p = a('PMl60');
    const _q = () => {
        var r, _s;
        return (null === i.default || void 0 === i.default || null === (r = i.default.engine) || void 0 === r || null === (_s = r.client) || void 0 === _s ? void 0 : _s.id) || '';
    };
    var _r = b => {
        i.default.engine.game = b;
        const s = m.default.map(b => b());
        b.onMessage.add((b, c) => {
            const t = {
                action: b,
                payload: c
            };
            if (t.action !== j.default.stateUpdate) {
                if (t.action === j.default.playerJoinsStaticState) {
                    const u = c;
                    return i.default.gameOptions.setGameOptions(u.gameOptions), i.default.upgrades.upgrades.replace(u.upgrades), i.default.theme.availableThemes.replace(u.themes), i.default.powerups.availablePowerups.replace(u.powerups), u.news && i.default.gameValues.news.replace(u.news), u.gameOptions.specialGameType.includes(g.DEFENDING_HOMEBASE) && (i.default.navigation.currentShopTab = h.ShopTab.defendingHomebase), void(u.gameOptions.specialGameType.includes(g.PARDY) && (0, p.loadFont)('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap'));
                }
                if (t.action === j.default.updatedPlayerLeaderboard) {
                    let u = 1;
                    return (0, d.leaderboardSorter)(t.payload.items).forEach((s, c) => {
                        s.id === _q() && (u = c + 1);
                    }), i.default.user.place = u, void i.default.gameValues.players.replace(t.payload.items);
                }
                if (t.action === j.default.updatedTeamLeaderboard) {
                    let u = 1;
                    return (0, d.leaderboardSorter)(t.payload.items).forEach((s, c) => {
                        s.id === i.default.user.team.id && (u = c + 1);
                    }), i.default.user.place = u, void i.default.gameValues.teams.replace(t.payload.items);
                }
                if (t.action !== j.default.toast)
                    if (t.action !== j.default.nonDismissMessage)
                        if (t.action !== j.default.thanosResults)
                            if (t.action === j.default.balanceFlashRed && (i.default.balance.customColor = '#f44336', e.drain.play(), setTimeout(() => i.default.balance.customColor = '', 1000)), t.action !== j.default.deflected)
                                if (t.action !== j.default.enablePowerupRNGAnimation) {
                                    if (t.action === j.default.availableHomebaseUpgrades)
                                        return i.default.navigation.currentShopTab = h.ShopTab.defendingHomebase, void i.default.upgrades.homebaseUpgades.replace(t.payload);
                                    if (t.action !== j.default.defendingHomebaseStatus)
                                        if (t.action !== j.default.defendingHomebaseResults) {
                                            if (t.action === j.default.playAgainNewGameCode)
                                                return i.default.user.groupMemberId || localStorage.setItem(n.LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME, i.default.user.name), void(window.location.href = `/join?gc=${ t.payload }`);
                                            if (t.action === j.default.availableLavaUpgrades)
                                                return i.default.navigation.currentShopTab = h.ShopTab.lava, void i.default.upgrades.lavaUpgrades.replace(c);
                                            if (t.action !== j.default.lavaResults) {
                                                if (t.action !== j.default.successModalInfo)
                                                    t.action !== j.default.imposter.people ? t.action !== j.default.draw.line ? t.action !== j.default.draw.feedItem ? t.action !== j.default.draw.clear || (i.default.draw.shouldClearCanvas = !0) : i.default.draw.latestFeedItem = c : i.default.draw.latestLine = c : i.default.imposter.epl = (0, o.EncryptData)(c, 'impostor');
                                                else if (i.default.ui.successModalInfo = c, i.default.ui.showingSuccessModal = !0, c.sound) {
                                                    new(0, l.Howl)({
                                                        src: [(0, f.getAssetPath)(c.sound)]
                                                    }).play();
                                                }
                                            } else
                                                i.default.entities.lava = c;
                                        } else
                                            i.default.gameValues.defendingHomebaseResults = t.payload;
                                    else
                                        i.default.entities.defendingHomebase = t.payload;
                                } else
                                    i.default.gameOptions.enablePowerupRNGAnimation = !0;
                else
                    e.bounce.play();
                else
                    i.default.gameValues.thanosValues = t.payload;
                else
                    (0, f.nonDismissMessage)(t.payload.message, t.payload.title);
                else
                    (0, f.toast)(t.payload.message, t.payload);
            } else
                (0, k.default)({
                    type: c.type,
                    value: c.value
                }, s);
        });
    };
}), a.register('FCqSv', function(b, c) {
    _n(b.exports, 'default', function() {
        return a;
    });
    var d = {
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
}), a.register('SD5S+', function(b, c) {
    _n(b.exports, 'default', function() {
        return _j;
    });
    var d = a('rE3aP'),
        e = a('O4G7w'),
        f = a('ENy0x'),
        g = a('U4qvK'),
        h = a('OUPRa');
    let i = !1;
    var _j = (b, _n) => {
        const {
            type: k,
            value: l
        } = b;
        if (k === g.default.balance)
            return e.default.balance.balance = l, void(l > e.default.balance.maxBalance && (e.default.balance.maxBalance = l));
        if (k === g.default.balanceChange)
            return e.default.balance.balanceChangeIfCorrect = l.balanceChangeIfCorrect, void(e.default.balance.balanceChangeIfIncorrect = l.balanceChangeIfIncorrect);
        if (k === g.default.gameQuestions)
            return void e.default.questions.setQuestions(l);
        if (k === g.default.playerQuestionList)
            return e.default.questions.questionList.replace(l.questionList), void(e.default.questions.ceq && !e.default.questions.transitioningToNextQuestion || e.default.questions.setCurrentQuestion(l.questionIndex));
        if (k === g.default.playerQuestionListIndex)
            return void(e.default.questions.transitioningToNextQuestion && e.default.questions.setCurrentQuestion(l));
        if (k === g.default.purchasedPowerups)
            return void e.default.powerups.purchasedPowerups.replace(l);
        if (k === g.default.usedPowerups)
            return void e.default.powerups.usedPowerups.replace(l);
        if (k === g.default.personalActivePowerups)
            return void e.default.powerups.personalActivePowerups.replace(l);
        if (k === g.default.teamActivePowerups)
            return void e.default.powerups.teamActivePowerups.replace(l);
        if (k === g.default.name)
            return 'Player [Still Entering Name]' === l ? void(e.default.engine.hasLeftRoom && window.location.reload()) : void(e.default.user.name = l);
        if (k === g.default.group)
            return e.default.user.groupId = l.groupId, void(e.default.user.groupMemberId = l.groupMemberId);
        if (k === g.default.theme) {
            const m = l,
                _n = e.default.theme.availableThemes.filter(_n => _n && _n.name && _n.name === m)[0];
            if (!_n)
                return;
            return e.default.theme.themeName = m, e.default.theme.theme.defaultBackground = _n.question.background, e.default.theme.theme.question = _n.question, e.default.theme.theme.palette = _n.palette, void('Default' === m ? (e.default.theme.theme.response.shop = f.defaultShopColor, e.default.theme.theme.response.continue = f.defaultContinueColor) : (e.default.theme.theme.response.shop = _n.palette[0], e.default.theme.theme.response.continue = _n.palette[1]));
        }
        if (k === g.default.purchasedThemes)
            return void e.default.theme.ownedThemes.replace(l);
        if (k === g.default.upgradeLevels)
            return void(e.default.upgrades.upgradeLevels = l);
        if (k === g.default.upgradePricingDiscount)
            return void(e.default.upgrades.upgradePricingDiscount = l);
        if (k === g.default.gameStatus)
            return e.default.gameValues.gameStatus = l, void(i || (i = !0, (0, h.default)()));
        if (k === g.default.incomeMultiplier)
            return void(e.default.balance.incomeMultiplier = l);
        if (k === g.default.linkInfo)
            return void(e.default.powerups.linkPartnerName = l.name);
        if (k === g.default.teamInfo)
            return void(e.default.user.team = l);
        if (k === g.default.maxBalance)
            return void(e.default.balance.maxBalance = l);
        if (k === g.default.disabledPowerups)
            return void e.default.powerups.disabledPowerups.replace(l);
        if (k === g.default.fullScreenPlayerBlack)
            return void(e.default.ui.fullBlackScreen = l.on);
        if (k === g.default.screenAttack)
            return l && (e.default.powerups.screenAttack.attackerName = l.attackerName, e.default.powerups.screenAttack.powerupName = l.powerupName, e.default.powerups.screenAttack.fullScreen = l.fullScreen), void(0, d.onScreenAttackChanged)();
        if (k === g.default.streakAmount)
            return void(e.default.balance.streakAmount = l);
        if (k === g.default.appliedPowerups)
            return void e.default.powerups.personalAppliedPowerups.replace(l);
        if (k === g.default.teamAppliedPowerups)
            return void e.default.powerups.teamAppliedPowerups.replace(l);
        if (k === g.default.imposter.status)
            return e.default.imposter.status = l, void(e.default.imposter.currentShopItemModalVisible = !1);
        if (k === g.default.imposter.shopItems)
            return void e.default.imposter.shopItems.replace(l);
        if (k === g.default.imposter.person)
            return void(e.default.imposter.me = l);
        if (k === g.default.imposter.remainingInvestigations)
            return void(e.default.imposter.investigationsLeft = l);
        if (k === g.default.imposter.remainingMeetings)
            return void(e.default.imposter.meetingsLeft = l);
        if (k === g.default.imposter.remainingImposters)
            return void(e.default.imposter.impostersLeft = l);
        if (k === g.default.questionsAnsweredCorrectly)
            return void(e.default.questions.questionsAnsweredCorrectly = l);
        if (k === g.default.questionsAnsweredIncorrectly)
            return void(e.default.questions.questionsAnsweredIncorrectly = l);
        const m = _m.find(_m => _m.key === b.type);
        m && m.listener.applyPatches(b.value);
    };
}), a.register('rE3aP', function(b, c) {
    _m(b.exports, 'backgroundImage', function() {
        return _j;
    }), _m(b.exports, 'onAttack', function() {
        return _k;
    }), _m(b.exports, 'getVerb', function() {
        return _l;
    }), _m(b.exports, 'getTitle', function() {
        return _m;
    }), _m(b.exports, 'getIconColor', function() {
        return _n;
    }), _m(b.exports, 'getIcon', function() {
        return _o;
    }), _m(b.exports, 'onScreenAttackChanged', function() {
        return _p;
    });
    var d = a('QWK7i');
    a('KOgpv');
    var e = a('8Wc8V'),
        f = a('I+0AY'),
        g = a('b3ci8'),
        h = a('O4G7w');
    const i = () => h.default && h.default.powerups && h.default.powerups.screenAttack && h.default.powerups.screenAttack.powerupName ? h.default.powerups.screenAttack.powerupName : '',
        _j = () => {
            const k = i();
            return k === e.PowerupNames.icer ? (0, g.getAssetPath)('iced.jpeg') : k === e.PowerupNames.pumpkinPie ? (0, g.getAssetPath)('pied.jpeg') : '';
        },
        _k = () => {
            const l = i();
            l === e.PowerupNames.icer && f.freeze.play(), l === e.PowerupNames.pumpkinPie && f.pieSlice.play();
        },
        _l = () => {
            const m = i();
            return m === e.PowerupNames.icer ? 'Frozen' : m === e.PowerupNames.pumpkinPie ? 'Pied' : '';
        },
        _m = () => {
            const n = i();
            return n === e.PowerupNames.icer ? 'You\'re Frozen!' : n === e.PowerupNames.pumpkinPie ? 'You\'ve been Pied!' : '';
        },
        _n = () => {
            const o = i();
            return o === e.PowerupNames.icer ? d.default.White : o === e.PowerupNames.pumpkinPie ? '#e65100' : d.default.White;
        },
        _o = () => {
            const p = i();
            return p === e.PowerupNames.icer ? 'far fa-snowflake' : p === e.PowerupNames.pumpkinPie ? 'far fa-pie' : '';
        },
        _p = () => {
            const q = h.default.powerups.screenAttack;
            q.powerupName && q.powerupName === e.PowerupNames.blurredScreen ? q.powerupName === e.PowerupNames.blurredScreen && (h.default.ui.blurredScreen = !0) : h.default.ui.blurredScreen && (h.default.ui.blurredScreen = !1);
        };
}), a.register('KOgpv', function(b, c) {
    _m(b.exports, 'PowerupCategory', function() {
        return a('8Wc8V').PowerupCategory;
    }), _m(b.exports, 'PowerupNames', function() {
        return a('8Wc8V').PowerupNames;
    }), a('8Wc8V');
}), a.register('8Wc8V', function(b, c) {
    _m(b.exports, 'PowerupNames', function() {
        return a;
    }), _m(b.exports, 'PowerupCategory', function() {
        return _e;
    });
    const d = {
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
    let _e;
    (_e || (_e = {})).specialSound = 'specialSound';
}), a.register('U4qvK', function(b, c) {
    _m(b.exports, 'default', function() {
        return a;
    });
    var d = {
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
}), a.register('OUPRa', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('6XgQB1'),
        e = a('E9ysS'),
        f = a('b3ci8'),
        g = a('O4G7w');
    var _h = () => {
        g.default.gameValues.gameStatus !== d.GameStatus.results ? g.default.gameValues.gameStatus !== d.GameStatus.teams ? g.default.gameValues.gameStatus !== d.GameStatus.gameplay ? (0, f.changeRoute)(e.default.waiting) : (0, f.startGame)() : (0, f.changeRoute)(e.default.team) : (0, f.changeRoute)(e.default.gameOver);
    };
}), a.register('shdmB', function(b, c) {
    _m(b.exports, 'default', function() {
        return _i;
    }), a('3etRZ');
    var d = a('I0lbT'),
        e = a('EFm9H'),
        f = a('YGNlC');
    a('5lftF');
    var g = a('2h4GA'),
        h = a('Uh11n');
    var _i = [
        d.default,
        e.default,
        f.default,
        g.default,
        h.default
    ];
}), a.register('3etRZ', function(b, c) {
    _m(b.exports, 'Round', function() {
        return a('I0lbT').default;
    }), _m(b.exports, 'Person', function() {
        return a('EFm9H').default;
    }), _m(b.exports, 'Status', function() {
        return a('YGNlC').default;
    });
    a('I0lbT'), a('EFm9H'), a('YGNlC');
}), a.register('I0lbT', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('O4G7w'),
        e = a('eedQ8'),
        f = a('U4qvK');
    const g = [
        'secondsLeft',
        'term',
        'drawer',
        'drawingBase64',
        'termOptions',
        'revealText'
    ];
    var _h = () => {
        const i = new(0, e.default)();
        return g.forEach(_m => {
            i.onPropChange(_m, i => {
                d.default.draw.round[_m] = i;
            });
        }), {
            key: f.default.draw.round,
            listener: i
        };
    };
}), a.register('EFm9H', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('O4G7w'),
        e = a('eedQ8'),
        f = a('U4qvK');
    const g = [
        'answeredCorrectly',
        'lastRound',
        'role'
    ];
    var _h = () => {
        const i = new(0, e.default)();
        return g.forEach(_m => {
            i.onPropChange(_m, i => {
                d.default.draw.me[_m] = i;
            });
        }), {
            key: f.default.draw.person,
            listener: i
        };
    };
}), a.register('YGNlC', function(b, c) {
    _m(b.exports, 'default', function() {
        return _g;
    });
    var d = a('O4G7w'),
        e = a('eedQ8'),
        f = a('U4qvK');
    var _g = () => {
        const h = new(0, e.default)();
        return h.onPropChange('value', h => {
            d.default.draw.status = h;
        }), {
            key: f.default.draw.status,
            listener: h
        };
    };
}), a.register('5lftF', function(b, c) {
    _m(b.exports, 'PardyState', function() {
        return a('2h4GA').default;
    }), _m(b.exports, 'PardyPerson', function() {
        return a('Uh11n').default;
    });
    a('2h4GA'), a('Uh11n');
}), a.register('2h4GA', function(b, c) {
    _m(b.exports, 'default', function() {
        return _k;
    });
    var d = a('O4G7w'),
        e = a('eedQ8'),
        f = a('fe6E3'),
        g = a('b3ci8'),
        h = a('U4qvK');
    const i = [
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
        j = [
            'powers',
            'tips',
            'answerLockedInWittyMessages',
            'correctWittyMessages',
            'incorrectWittyMessages'
        ];
    var _k = () => {
        const l = new(0, e.default)();
        return i.forEach(_m => {
            l.onPropChange(_m, l => {
                if (j.includes(_m))
                    d.default.pardy[_m].replace(l);
                else if ('currentQuestionId' === _m) {
                    const _m = (0, g.questionLocation)().find(_m => _m._id === l);
                    _m && (d.default.pardy.currentQuestion = {
                        ..._m,
                        answers: (0, f.shuffle)(_m.answers)
                    });
                } else
                    d.default.pardy[_v] = l;
            });
        }), {
            key: h.default.pardy.state,
            listener: l
        };
    };
}), a.register('Uh11n', function(b, c) {
    _v(b.exports, 'default', function() {
        return _i;
    });
    var d = a('O4G7w'),
        e = a('eedQ8'),
        f = a('U4qvK');
    const g = [
            'answerResponseItems',
            'powerOptions'
        ],
        h = [
            'power',
            'answered',
            'answeredCorrectly',
            'answerResponseItems',
            'maxBet',
            'currentBet',
            'powerOptions'
        ];
    var _i = () => {
        const j = new(0, e.default)();
        return h.forEach(_v => {
            j.onPropChange(_v, j => {
                g.includes(_v) ? d.default.pardy[_v].replace(j) : d.default.pardy[_v] = j;
            });
        }), {
            key: f.default.pardy.person,
            listener: j
        };
    };
}), a.register('jVmx9', function(b, c) {
    _v(b.exports, 'Preview', function() {
        return _n;
    }), _v(b.exports, 'default', function() {
        return _p;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('amKpW'),
        g = a('pECMN'),
        h = a('RYc37'),
        i = a('b3ci8'),
        j = a('2x11J'),
        k = a('LEQ5w');
    let l;
    const m = a('Axq+p').default.div(l || (l = (b => b)`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ 0 };
  color: ${ 0 };
  margin-right: 5px;
`), b => b.colors.background, b => b.colors.text),
        _n = b => (0, e.jsx)(f.default, {
            placement: 'right',
            title: b.name ? (0, e.jsx)('div', {
                style: {
                    fontSize: 15
                },
                children: (0, e.jsx)(h.default, {
                    text: b.name + ' active'
                })
            }) : null,
            children: (0, e.jsx)(m, {
                colors: b.color,
                children: (0, e.jsx)(g.default, {
                    name: b.icon
                })
            })
        });
    let o = class extends k.Component {
        render() {
            const p = this.props.powerups.availablePowerups.filter(p => this.props.powerups.activePowerups.includes(p.name));
            return (0, e.jsx)('div', {
                style: {
                    display: 'flex'
                },
                children: p.map(p => (0, e.jsx)(_n, {
                    name: (0, i.getPowerupName)(p),
                    icon: p.icon,
                    color: p.color
                }, p.name))
            });
        }
    };
    o = (0, d.__decorate)([
        (0, j.inject)('powerups'),
        j.observer
    ], o);
    var _p = o;
}), a.register('K+bpA', function(b, c) {
    _v(b.exports, 'default', function() {
        return _u;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('2x11J'),
        j = a('E9ysS'),
        k = a('TwXYL'),
        l = a('UHSA3'),
        m = a('CYOFn'),
        n = a('b3ci8'),
        o = a('3RPAv');
    let p, q, r, s = b => b,
        t = class extends g.Component {
            render() {
                if ((0, n.inImposterMode)() || (0, n.inPardyMode)())
                    return null;
                const {
                    balance: u
                } = this.props, _v = this.canShow(), w = (0, m.default)({
                    moneyPerQuestion: this.findUpgradeValue(o.upgradeNames.moneyPerQuestion),
                    streakBonus: this.findUpgradeValue(o.upgradeNames.streakBonus),
                    multiplier: this.findUpgradeValue(o.upgradeNames.multiplier),
                    incomeMultiplier: u.incomeMultiplier,
                    activePowerups: this.props.powerups.activePowerups
                });
                return (0, f.jsx)(_v, {
                    animate: {
                        height: _v ? 'auto' : 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: (0, f.jsx)(_w, {
                        children: (0, f.jsx)(_x, {
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
                            children: w.map((_v, w) => (0, f.jsx)(l.default, {
                                index: w,
                                amount: this.props.balance.streakAmount === w ? Math.max(_v, u.balanceChangeIfCorrect) : _v,
                                onX: this.changeX,
                                selected: this.props.balance.streakAmount === w,
                                hideArrow: w >= 99
                            }, `money-item-${ w }`))
                        })
                    })
                });
            }
            constructor(...b) {
                super(...b), (0, d.default)(this, 'state', {
                    xValue: 0
                }), (0, d.default)(this, 'changeX', b => this.setState({
                    xValue: b
                })), (0, d.default)(this, 'findUpgradeValue', b => {
                    const u = this.props.upgrades.upgrades.find(u => u.name === b);
                    if (!u)
                        return 1;
                    const v = u.levels[this.props.upgrades.upgradeLevels[(0, n.upgradeNameToKey)(b)] - 1];
                    return v ? v.value : 1;
                }), (0, d.default)(this, 'canShow', () => {
                    const {
                        navigation: {
                            currentRoute: u
                        },
                        upgrades: v
                    } = this.props;
                    return !!v.upgrades.length && (u === j.default.questions || u === j.default.upgrade);
                });
            }
        };
    t = (0, e.__decorate)([
        (0, i.inject)('navigation', 'balance', 'upgrades', 'powerups'),
        i.observer
    ], t);
    var _u = t;
    const _v = (0, h.default)(k.motion.div)(p || (p = s`
  width: 100%;
  background: #4252af;
  overflow: hidden;
`)),
        _w = h.default.div(q || (q = s`
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 7.5px;
  width: 100%;
`)),
        _x = (0, h.default)(k.motion.div)(r || (r = s`
  display: flex;
  align-items: center;
`));
}), a.register('UHSA3', function(b, c) {
    _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('pECMN'),
        h = a('b3ci8');
    let i, j, k, l = b => b;
    var _m = b => {
        const _n = e.useRef(),
            o = `bonus-item-index-${ b.index }`;
        return e.useEffect(() => {
            if (b.selected) {
                const p = document.getElementById(o);
                p && b.onX(p.offsetLeft);
            }
        }, [
            b.selected,
            b.amount
        ]), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_n, {
                    id: o,
                    ref: _n,
                    children: [
                        (0, d.jsx)(_o, {
                            children: b.index
                        }),
                        (0, d.jsx)(_p, {
                            children: (0, h.getMoney)(b.amount)
                        })
                    ]
                }),
                b.hideArrow ? null : (0, d.jsx)(g.default, {
                    style: {
                        marginRight: 30,
                        opacity: 0.5
                    },
                    name: 'fas fa-long-arrow-right'
                })
            ]
        });
    };
    const _n = f.default.div(i || (i = l`
  margin-right: 30px;
`)),
        _o = f.default.div(j || (j = l`
  font-size: 11px;
  margin-bottom: 2px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`)),
        _p = f.default.div(k || (k = l`
  padding: 8px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
`));
}), a.register('CYOFn', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    }), a('KOgpv');
    var d = a('8Wc8V');
    var _e = b => {
        const {
            moneyPerQuestion: _f,
            streakBonus: g,
            multiplier: h,
            incomeMultiplier: i,
            activePowerups: j
        } = b, k = j.includes(d.PowerupNames.minuteMoreEarnings);
        return Array.from(Array(100).keys()).map((b, d) => {
            let l = _f;
            return l += g * d, l *= h, l *= i, k && (l *= 2), Math.round(l);
        });
    };
}), a.register('Ei+Gg', function(b, c) {
    _c(b.exports, 'default', function() {
        return _m;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('KFYFW'),
        h = a('US1ze'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('b3ci8');
    let l = class extends j.Component {
        render() {
            return (0, k.inImposterMode)() ? (0, f.jsx)(g.default, {
                onClick: this.open,
                color: 'inherit',
                'aria-label': 'notes',
                children: (0, f.jsx)(_d(h), {})
            }) : null;
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'open', () => {
                this.props.imposter.noteDrawerOpen = !0;
            });
        }
    };
    l = (0, e.__decorate)([
        (0, i.inject)('imposter'),
        i.observer
    ], l);
    var _m = l;
}), a.register('US1ze', function(b, _c) {
    var _d = a('CO72t');
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.default = void 0;
    var e = _d(a('LEQ5w')),
        f = (0, _d(a('Sf/mW')).default)(e.default.createElement('path', {
            d: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'
        }), 'Description');
    b.exports.default = f;
}), a.register('5g4Fg', function(b, c) {
    _C(b.exports, 'default', function() {
        return _A;
    });
    var d = a('0hzx+'),
        e = a('3xIY7'),
        f = a('G13ww'),
        g = a('/TUxI'),
        h = a('xzQFy'),
        i = a('fs3me'),
        j = a('1tnXY'),
        k = a('tz3U0'),
        l = a('TyHMk'),
        m = a('zO6Zt'),
        n = a('RYc37'),
        o = a('hqhIw'),
        p = a('E9ysS'),
        q = a('b3ci8'),
        r = a('2x11J'),
        s = a('LEQ5w'),
        t = a('cHXR8'),
        u = a('DLsYr'),
        v = a('QQKEQ'),
        w = a('vKq/0'),
        x = a('ngWp0'),
        y = a('FQoLM'),
        z = a('oN4l0');
    var _A = (0, r.observer)(() => {
        var B;
        const {
            navigation: _C,
            user: D,
            questions: {
                lockedViewingCorrectAnswer: E
            }
        } = s.useContext(z.default), F = E, G = () => (0, q.toggleDrawer)(!1), H = _C.drawerOpen;
        return o.DISABLED_PATHS.includes(_C.currentRoute) ? null : (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(u.default, {}),
                (0, d.jsx)(e.default, {
                    open: H,
                    onClose: G,
                    children: (0, d.jsxs)('div', {
                        className: 'flex flex-column maxHeight',
                        style: {
                            width: '70vw',
                            maxWidth: 300
                        },
                        children: [
                            (0, d.jsx)('div', {
                                className: 'maxWidth scroll-y',
                                style: {
                                    flex: 1,
                                    overflowX: 'hidden'
                                },
                                children: _C.settingsOpen ? (0, d.jsx)(f.default, {
                                    style: {
                                        width: '100%'
                                    },
                                    component: 'nav',
                                    children: (0, d.jsxs)(g.default, {
                                        children: [
                                            (0, d.jsx)(i.default, {
                                                primary: (0, d.jsx)(n.default, {
                                                    text: 'Read to Me'
                                                })
                                            }),
                                            (0, d.jsx)(w.default, {
                                                checked: D.readToMeEnabled,
                                                onChange: B => {
                                                    D.readToMeEnabled = B;
                                                }
                                            })
                                        ]
                                    })
                                }) : (0, q.inPardyMode)() ? (0, d.jsx)(y.default, {}) : (0, d.jsxs)(d.Fragment, {
                                    children: [
                                        (0, d.jsxs)(f.default, {
                                            style: {
                                                width: '100%'
                                            },
                                            component: 'nav',
                                            children: [
                                                (0, d.jsx)(t.default, {}),
                                                (0, d.jsx)(y.default, {}),
                                                (0, d.jsx)(m.default, {
                                                    to: p.default.questions,
                                                    onClick: G,
                                                    disabled: F,
                                                    children: (0, d.jsxs)(g.default, {
                                                        button: !0,
                                                        children: [
                                                            (0, d.jsx)(h.default, {
                                                                children: (0, d.jsx)(k.default, {})
                                                            }),
                                                            (0, d.jsx)(i.default, {
                                                                primary: (0, d.jsx)(n.default, {
                                                                    text: 'Questions'
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                !(0, q.blockShopping)() && (0, d.jsx)(m.default, {
                                                    to: p.default.shop,
                                                    onClick: G,
                                                    disabled: F,
                                                    children: (0, d.jsxs)(g.default, {
                                                        button: !0,
                                                        children: [
                                                            (0, d.jsx)(h.default, {
                                                                children: (0, q.inImposterMode)() ? (0, d.jsx)(j.default, {}) : (0, d.jsx)(l.default, {})
                                                            }),
                                                            (0, d.jsx)(i.default, {
                                                                primary: (0, d.jsx)(n.default, {
                                                                    text: (0, q.shopName)()
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, d.jsx)(v.default, {})
                                    ]
                                })
                            }),
                            (0, d.jsx)(x.default, {
                                playerName: D.name,
                                teamName: null === (B = D.team) || void 0 === B ? void 0 : B.id,
                                onClickSettings: () => _C.settingsOpen = !0,
                                onBack: () => _C.settingsOpen = !1,
                                isSettingsOpen: _C.settingsOpen
                            })
                        ]
                    })
                })
            ]
        });
    });
}), a.register('3xIY7', function(b, c) {
    _t(b.exports, 'default', function() {
        return _z;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('MbL7f'),
        i = a('/HoDX'),
        j = a('QvROH'),
        k = a('ibFfx'),
        l = a('pOFev'),
        m = a('mmS5q'),
        n = a('fgF4D'),
        o = a('t4j58'),
        p = {
            left: 'right',
            right: 'left',
            top: 'down',
            bottom: 'up'
        };
    var q = {
            enter: n.duration.enteringScreen,
            exit: n.duration.leavingScreen
        },
        r = f.forwardRef(function(s, _t) {
            var u = s.anchor,
                v = void 0 === u ? 'left' : u,
                w = s.BackdropProps,
                x = s.children,
                y = s.classes,
                _z = s.className,
                A = s.elevation,
                B = void 0 === A ? 16 : A,
                C = s.ModalProps,
                D = (C = void 0 === C ? {} : C).BackdropProps,
                E = (0, e.default)(C, ['BackdropProps']),
                F = s.onClose,
                G = s.open,
                H = void 0 !== G && G,
                I = s.PaperProps,
                J = void 0 === I ? {} : I,
                K = s.SlideProps,
                L = s.TransitionComponent,
                M = void 0 === L ? k.default : L,
                N = s.transitionDuration,
                O = void 0 === N ? q : N,
                P = s.variant,
                Q = void 0 === P ? 'temporary' : P,
                R = (0, e.default)(s, [
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
                S = (0, o.default)(),
                T = f.useRef(!1);
            f.useEffect(function() {
                T.current = !0;
            }, []);
            var U = function(V, W) {
                    return 'rtl' === V.direction && function(X) {
                        return -1 !== [
                            'left',
                            'right'
                        ].indexOf(X);
                    }(W) ? p[W] : W;
                }(S, v),
                V = f.createElement(l.default, (0, d.default)({
                    elevation: 'temporary' === Q ? B : 0,
                    square: !0
                }, J, {
                    className: (0, g.default)(y.paper, y['paperAnchor'.concat((0, m.default)(U))], J.className, 'temporary' !== Q && y['paperAnchorDocked'.concat((0, m.default)(U))])
                }), x);
            if ('permanent' === Q)
                return f.createElement('div', (0, d.default)({
                    className: (0, g.default)(y.root, y.docked, _z),
                    ref: _t
                }, R), V);
            var W = f.createElement(M, (0, d.default)({
                in: H,
                direction: p[U],
                timeout: O,
                appear: T.current
            }, K), V);
            return 'persistent' === Q ? f.createElement('div', (0, d.default)({
                className: (0, g.default)(y.root, y.docked, _z),
                ref: _t
            }, R), W) : f.createElement(h.default, (0, d.default)({
                BackdropProps: (0, d.default)({}, w, D, {
                    transitionDuration: O
                }),
                BackdropComponent: i.default,
                className: (0, g.default)(y.root, y.modal, _z),
                open: H,
                onClose: F,
                ref: _t
            }, R, E), W);
        }),
        s = (0, j.default)(function(t) {
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
                    zIndex: t.zIndex.drawer,
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
                    borderRight: '1px solid '.concat(t.palette.divider)
                },
                paperAnchorDockedTop: {
                    borderBottom: '1px solid '.concat(t.palette.divider)
                },
                paperAnchorDockedRight: {
                    borderLeft: '1px solid '.concat(t.palette.divider)
                },
                paperAnchorDockedBottom: {
                    borderTop: '1px solid '.concat(t.palette.divider)
                },
                modal: {}
            };
        }, {
            name: 'MuiDrawer',
            flip: !1
        })(r);
}), a.register('MbL7f', function(b, c) {
    _v(b.exports, 'default', function() {
        return _t;
    });
    var d = a('GepBD'),
        e = a('r98tK1'),
        f = a('LEQ5w'),
        g = a('Z/8fU');
    a('WPpLv');
    var h = a('JRhGL'),
        i = a('r53HP'),
        j = a('u04uh'),
        k = a('4PBoy'),
        l = a('st7Uz'),
        m = a('hZetO'),
        n = a('OOg43'),
        o = a('PT6bv'),
        p = a('5ejfT'),
        q = a('ez5ke'),
        r = a('tPPtf');
    var s = new(0, p.default)(),
        _t = f.forwardRef(function(u, _v) {
            var w = (0, i.default)(),
                x = (0, h.default)({
                    name: 'MuiModal',
                    props: (0, e.default)({}, u),
                    theme: w
                }),
                y = x.BackdropComponent,
                z = void 0 === y ? r.default : y,
                A = x.BackdropProps,
                B = x.children,
                C = x.closeAfterTransition,
                D = void 0 !== C && C,
                E = x.container,
                F = x.disableAutoFocus,
                G = void 0 !== F && F,
                H = x.disableBackdropClick,
                I = void 0 !== H && H,
                J = x.disableEnforceFocus,
                K = void 0 !== J && J,
                L = x.disableEscapeKeyDown,
                M = void 0 !== L && L,
                N = x.disablePortal,
                O = void 0 !== N && N,
                P = x.disableRestoreFocus,
                Q = void 0 !== P && P,
                R = x.disableScrollLock,
                S = void 0 !== R && R,
                T = x.hideBackdrop,
                U = void 0 !== T && T,
                V = x.keepMounted,
                W = void 0 !== V && V,
                X = x.manager,
                Y = void 0 === X ? s : X,
                Z = x.onBackdropClick,
                $ = x.onClose,
                ab = x.onEscapeKeyDown,
                bb = x.onRendered,
                cb = x.open,
                db = (0, d.default)(x, [
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
                eb = f.useState(!0),
                fb = eb[0],
                gb = eb[1],
                hb = f.useRef({}),
                ib = f.useRef(null),
                jb = f.useRef(null),
                kb = (0, m.default)(jb, _v),
                lb = function(mb) {
                    return !!mb.children && mb.children.props.hasOwnProperty('in');
                }(x),
                mb = function() {
                    return (0, j.default)(ib.current);
                },
                nb = function() {
                    return hb.current.modalRef = jb.current, hb.current.mountNode = ib.current, hb.current;
                },
                ob = function() {
                    Y.mount(nb(), {
                        disableScrollLock: S
                    }), jb.current.scrollTop = 0;
                },
                pb = (0, n.default)(function() {
                    var qb = function(rb) {
                        return rb = 'function' == typeof rb ? rb() : rb, g.findDOMNode(rb);
                    }(E) || mb().body;
                    Y.add(nb(), qb), jb.current && ob();
                }),
                qb = f.useCallback(function() {
                    return Y.isTopModal(nb());
                }, [Y]),
                rb = (0, n.default)(function(sb) {
                    ib.current = sb, sb && (bb && bb(), cb && qb() ? ob() : (0, p.ariaHidden)(jb.current, !0));
                }),
                sb = f.useCallback(function() {
                    Y.remove(nb());
                }, [Y]);
            if (f.useEffect(function() {
                    return function() {
                        sb();
                    };
                }, [sb]), f.useEffect(function() {
                    cb ? pb() : lb && D || sb();
                }, [
                    cb,
                    sb,
                    lb,
                    D,
                    pb
                ]), !W && !cb && (!lb || fb))
                return null;
            var tb = function(ub) {
                    return {
                        root: {
                            position: 'fixed',
                            zIndex: ub.zIndex.modal,
                            right: 0,
                            bottom: 0,
                            top: 0,
                            left: 0
                        },
                        hidden: {
                            visibility: 'hidden'
                        }
                    };
                }(w || {
                    zIndex: o.default
                }),
                ub = {};
            return void 0 === B.props.tabIndex && (ub.tabIndex = B.props.tabIndex || '-1'), lb && (ub.onEnter = (0, l.default)(function() {
                gb(!1);
            }, B.props.onEnter), ub.onExited = (0, l.default)(function() {
                gb(!0), D && sb();
            }, B.props.onExited)), f.createElement(k.default, {
                ref: rb,
                container: E,
                disablePortal: O
            }, f.createElement('div', (0, e.default)({
                ref: kb,
                onKeyDown: function(vb) {
                    'Escape' === vb.key && qb() && (ab && ab(vb), M || (vb.stopPropagation(), $ && $(vb, 'escapeKeyDown')));
                },
                role: 'presentation'
            }, db, {
                style: (0, e.default)({}, tb.root, !cb && fb ? tb.hidden : {}, db.style)
            }), U ? null : f.createElement(z, (0, e.default)({
                open: cb,
                onClick: function(vb) {
                    vb.target === vb.currentTarget && (Z && Z(vb), !I && $ && $(vb, 'backdropClick'));
                }
            }, A)), f.createElement(q.default, {
                disableEnforceFocus: K,
                disableAutoFocus: G,
                disableRestoreFocus: Q,
                getDoc: mb,
                isEnabled: qb,
                open: cb
            }, f.cloneElement(B, ub))));
        });
}), a.register('u04uh', function(b, c) {
    function d(e) {
        return e && e.ownerDocument || document;
    }
    _l(b.exports, 'default', function() {
        return a;
    });
}), a.register('5ejfT', function(b, c) {
    _l(b.exports, 'ariaHidden', function() {
        return _j;
    }), _l(b.exports, 'default', function() {
        return _j;
    });
    var d = a('VXtxW'),
        e = a('/5ynO'),
        f = a('zDnXd'),
        g = a('iDD2s'),
        h = a('u04uh'),
        i = a('jt3+P');

    function _j(k, _l) {
        _l ? k.setAttribute('aria-hidden', 'true') : k.removeAttribute('aria-hidden');
    }

    function j(k) {
        return parseInt(window.getComputedStyle(k)['padding-right'], 10) || 0;
    }

    function j(k, l, m) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
            o = arguments.length > 4 ? arguments[4] : void 0,
            p = [
                l,
                m
            ].concat((0, f.default)(n)),
            q = [
                'TEMPLATE',
                'SCRIPT',
                'STYLE'
            ];
        [].forEach.call(k.children, function(r) {
            1 === r.nodeType && -1 === p.indexOf(r) && -1 === q.indexOf(r.tagName) && _q(r, o);
        });
    }

    function j(k, l) {
        var m = -1;
        return k.some(function(n, o) {
            return !!l(n) && (m = o, !0);
        }), m;
    }

    function j(k, l) {
        var m, n = [],
            o = [],
            p = k.container;
        if (!l.disableScrollLock) {
            if (function(q) {
                    var r = (0, h.default)(q);
                    return r.body === q ? (0, i.default)(r).innerWidth > r.documentElement.clientWidth : q.scrollHeight > q.clientHeight;
                }(p)) {
                var q = (0, g.default)();
                n.push({
                    value: p.style.paddingRight,
                    key: 'padding-right',
                    el: p
                }), p.style['padding-right'] = ''.concat(_p(p) + q, 'px'), m = (0, h.default)(p).querySelectorAll('.mui-fixed'), [].forEach.call(m, function(r) {
                    o.push(r.style.paddingRight), r.style.paddingRight = ''.concat(_p(r) + q, 'px');
                });
            }
            var _q = p.parentElement,
                r = 'HTML' === _q.nodeName && 'scroll' === window.getComputedStyle(_q)['overflow-y'] ? _q : p;
            n.push({
                value: r.style.overflow,
                key: 'overflow',
                el: r
            }), r.style.overflow = 'hidden';
        }
        return function() {
            m && [].forEach.call(m, function(q, r) {
                o[r] ? q.style.paddingRight = o[r] : q.style.removeProperty('padding-right');
            }), n.forEach(function(q) {
                var r = q.value,
                    s = q.el,
                    t = q.key;
                r ? s.style.setProperty(t, r) : s.style.removeProperty(t);
            });
        };
    }
    var _j = function() {
        function k() {
            (0, d.default)(this, k), this.modals = [], this.containers = [];
        }
        return (0, e.default)(b, [{
                key: 'add',
                value: function(k, l) {
                    var m = this.modals.indexOf(k);
                    if (-1 !== m)
                        return m;
                    m = this.modals.length, this.modals.push(k), k.modalRef && _o(k.modalRef, !1);
                    var n = function(o) {
                        var p = [];
                        return [].forEach.call(o.children, function(q) {
                            q.getAttribute && 'true' === q.getAttribute('aria-hidden') && p.push(q);
                        }), p;
                    }(l);
                    _q(l, k.mountNode, k.modalRef, n, !0);
                    var o = _r(this.containers, function(p) {
                        return p.container === l;
                    });
                    return -1 !== o ? (this.containers[o].modals.push(k), m) : (this.containers.push({
                        modals: [k],
                        container: l,
                        restore: null,
                        hiddenSiblingNodes: n
                    }), m);
                }
            },
            {
                key: 'mount',
                value: function(k, l) {
                    var m = _r(this.containers, function(n) {
                            return -1 !== n.modals.indexOf(k);
                        }),
                        n = this.containers[m];
                    n.restore || (n.restore = _s(n, l));
                }
            },
            {
                key: 'remove',
                value: function(k) {
                    var l = this.modals.indexOf(k);
                    if (-1 === l)
                        return l;
                    var m = _r(this.containers, function(n) {
                            return -1 !== n.modals.indexOf(k);
                        }),
                        n = this.containers[m];
                    if (n.modals.splice(n.modals.indexOf(k), 1), this.modals.splice(l, 1), 0 === n.modals.length)
                        n.restore && n.restore(), k.modalRef && _o(k.modalRef, !0), _q(n.container, k.mountNode, k.modalRef, n.hiddenSiblingNodes, !1), this.containers.splice(m, 1);
                    else {
                        var o = n.modals[n.modals.length - 1];
                        o.modalRef && _o(o.modalRef, !1);
                    }
                    return l;
                }
            },
            {
                key: 'isTopModal',
                value: function(k) {
                    return this.modals.length > 0 && this.modals[this.modals.length - 1] === k;
                }
            }
        ]), b;
    }();
}), a.register('VXtxW', function(b, c) {
    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }
    _f(b.exports, 'default', function() {
        return a;
    });
}), a.register('iDD2s', function(b, c) {
    function d() {
        var e = document.createElement('div');
        e.style.width = '99px', e.style.height = '99px', e.style.position = 'absolute', e.style.top = '-9999px', e.style.overflow = 'scroll', document.body.appendChild(e);
        var _f = e.offsetWidth - e.clientWidth;
        return document.body.removeChild(e), _f;
    }
    _j(b.exports, 'default', function() {
        return a;
    });
}), a.register('jt3+P', function(b, c) {
    _j(b.exports, 'default', function() {
        return _e;
    });
    var d = a('u04uh');

    function _e(f) {
        return (0, d.default)(f).defaultView || window;
    }
}), a.register('ez5ke', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('LEQ5w'),
        e = a('Z/8fU');
    a('WPpLv');
    var f = a('u04uh'),
        g = a('hZetO');
    var _h = function(i) {
        var _j = i.children,
            k = i.disableAutoFocus,
            l = void 0 !== k && k,
            m = i.disableEnforceFocus,
            n = void 0 !== m && m,
            _o = i.disableRestoreFocus,
            _p = void 0 !== _o && _o,
            _q = i.getDoc,
            _r = i.isEnabled,
            _s = i.open,
            t = d.useRef(),
            u = d.useRef(null),
            v = d.useRef(null),
            w = d.useRef(),
            x = d.useRef(null),
            y = d.useCallback(function(z) {
                x.current = e.findDOMNode(z);
            }, []),
            z = (0, g.default)(_j.ref, y),
            A = d.useRef();
        return d.useEffect(function() {
            A.current = _s;
        }, [_s]), !A.current && _s && 'undefined' != typeof window && (w.current = _q().activeElement), d.useEffect(function() {
            if (_s) {
                var B = (0, f.default)(x.current);
                l || !x.current || x.current.contains(B.activeElement) || (x.current.hasAttribute('tabIndex') || x.current.setAttribute('tabIndex', -1), x.current.focus());
                var C = function() {
                        B.hasFocus() && !n && _r() && !t.current ? x.current && !x.current.contains(B.activeElement) && x.current.focus() : t.current = !1;
                    },
                    D = function(E) {
                        !n && _r() && 9 === E.keyCode && B.activeElement === x.current && (t.current = !0, E.shiftKey ? v.current.focus() : u.current.focus());
                    };
                B.addEventListener('focus', C, !0), B.addEventListener('keydown', D, !0);
                var E = setInterval(function() {
                    C();
                }, 50);
                return function() {
                    clearInterval(E), B.removeEventListener('focus', C, !0), B.removeEventListener('keydown', D, !0), _p || (w.current && w.current.focus && w.current.focus(), w.current = null);
                };
            }
        }, [
            l,
            n,
            _p,
            _r,
            _s
        ]), d.createElement(d.Fragment, null, d.createElement('div', {
            tabIndex: 0,
            ref: u,
            'data-test': 'sentinelStart'
        }), d.cloneElement(_j, {
            ref: z
        }), d.createElement('div', {
            tabIndex: 0,
            ref: v,
            'data-test': 'sentinelEnd'
        }));
    };
}), a.register('tPPtf', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = {
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
        _h = f.forwardRef(function(i, _j) {
            var k = i.invisible,
                l = void 0 !== k && k,
                m = i.open,
                n = (0, e.default)(i, [
                    'invisible',
                    'open'
                ]);
            return m ? f.createElement('div', (0, d.default)({
                'aria-hidden': !0,
                ref: _j
            }, n, {
                style: (0, d.default)({}, g.root, l ? g.invisible : {}, n.style)
            })) : null;
        });
}), a.register('/HoDX', function(b, c) {
    _l(b.exports, 'default', function() {
        return _q;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('Vor5I'),
        j = f.forwardRef(function(k, _l) {
            var m = k.children,
                n = k.classes,
                o = k.className,
                p = k.invisible,
                _q = void 0 !== p && p,
                r = k.open,
                s = k.transitionDuration,
                t = k.TransitionComponent,
                u = void 0 === t ? i.default : t,
                v = (0, e.default)(k, [
                    'children',
                    'classes',
                    'className',
                    'invisible',
                    'open',
                    'transitionDuration',
                    'TransitionComponent'
                ]);
            return f.createElement(u, (0, d.default)({
                in: r,
                timeout: s
            }, v), f.createElement('div', {
                className: (0, g.default)(n.root, o, _q && n.invisible),
                'aria-hidden': !0,
                ref: _l
            }, m));
        }),
        k = (0, h.default)({
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
        })(j);
}), a.register('Vor5I', function(b, c) {
    _q(b.exports, 'default', function() {
        return _o;
    });
    var d = a('r98tK1'),
        e = a('l/iLf'),
        f = a('GepBD'),
        g = a('LEQ5w');
    a('WPpLv');
    var h = a('OfACg'),
        i = a('fgF4D'),
        j = a('t4j58'),
        k = a('ORi6J'),
        l = a('hZetO'),
        m = {
            entering: {
                opacity: 1
            },
            entered: {
                opacity: 1
            }
        },
        n = {
            enter: i.duration.enteringScreen,
            exit: i.duration.leavingScreen
        },
        _o = g.forwardRef(function(p, _q) {
            var r = p.children,
                s = p.disableStrictModeCompat,
                t = void 0 !== s && s,
                u = p.in,
                v = p.onEnter,
                w = p.onEntered,
                x = p.onEntering,
                y = p.onExit,
                z = p.onExited,
                A = p.onExiting,
                B = p.style,
                C = p.TransitionComponent,
                D = void 0 === C ? h.default : C,
                E = p.timeout,
                F = void 0 === E ? n : E,
                G = (0, f.default)(p, [
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
                H = (0, j.default)(),
                I = H.unstable_strictMode && !t,
                J = g.useRef(null),
                K = (0, l.default)(r.ref, _q),
                L = (0, l.default)(I ? J : void 0, K),
                M = function(N) {
                    return function(O, P) {
                        if (N) {
                            var Q = I ? [
                                    J.current,
                                    O
                                ] : [
                                    O,
                                    P
                                ],
                                R = (0, e.default)(Q, 2),
                                S = R[0],
                                T = R[1];
                            void 0 === T ? N(S) : N(S, T);
                        }
                    };
                },
                N = M(x),
                O = M(function(P, Q) {
                    (0, k.reflow)(P);
                    var R = (0, k.getTransitionProps)({
                        style: B,
                        timeout: F
                    }, {
                        mode: 'enter'
                    });
                    P.style.webkitTransition = H.transitions.create('opacity', R), P.style.transition = H.transitions.create('opacity', R), v && v(P, Q);
                }),
                P = M(w),
                Q = M(A),
                R = M(function(S) {
                    var T = (0, k.getTransitionProps)({
                        style: B,
                        timeout: F
                    }, {
                        mode: 'exit'
                    });
                    S.style.webkitTransition = H.transitions.create('opacity', T), S.style.transition = H.transitions.create('opacity', T), y && y(S);
                }),
                S = M(z);
            return g.createElement(D, (0, d.default)({
                appear: !0,
                in: u,
                nodeRef: I ? J : void 0,
                onEnter: O,
                onEntered: P,
                onEntering: N,
                onExit: R,
                onExited: S,
                onExiting: Q,
                timeout: F
            }, G), function(T, U) {
                return g.cloneElement(r, (0, d.default)({
                    style: (0, d.default)({
                        opacity: 0,
                        visibility: 'exited' !== T || u ? void 0 : 'hidden'
                    }, m[T], B, r.props.style),
                    ref: L
                }, U));
            });
        });
}), a.register('ibFfx', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('Z/8fU'),
        h = a('mwSz2'),
        i = a('OfACg'),
        j = a('hZetO'),
        k = a('t4j58'),
        l = a('fgF4D'),
        m = a('ORi6J');

    function n(o, _p) {
        var q = function(r, s) {
            var t, u = s.getBoundingClientRect();
            if (s.fakeTransform)
                t = s.fakeTransform;
            else {
                var v = window.getComputedStyle(s);
                t = v.getPropertyValue('-webkit-transform') || v.getPropertyValue('transform');
            }
            var v = 0,
                w = 0;
            if (t && 'none' !== t && 'string' == typeof t) {
                var x = t.split('(')[1].split(')')[0].split(',');
                v = parseInt(x[4], 10), w = parseInt(x[5], 10);
            }
            return 'left' === r ? 'translateX('.concat(window.innerWidth, 'px) translateX(').concat(v - u.left, 'px)') : 'right' === r ? 'translateX(-'.concat(u.left + u.width - v, 'px)') : 'up' === r ? 'translateY('.concat(window.innerHeight, 'px) translateY(').concat(w - u.top, 'px)') : 'translateY(-'.concat(u.top + u.height - w, 'px)');
        }(o, _p);
        q && (_p.style.webkitTransform = q, _p.style.transform = q);
    }
    var n = {
            enter: l.duration.enteringScreen,
            exit: l.duration.leavingScreen
        },
        _o = f.forwardRef(function(p, q) {
            var r = p.children,
                s = p.direction,
                t = void 0 === s ? 'down' : s,
                u = p.in,
                v = p.onEnter,
                w = p.onEntered,
                x = p.onEntering,
                y = p.onExit,
                z = p.onExited,
                A = p.onExiting,
                B = p.style,
                C = p.timeout,
                D = void 0 === C ? n : C,
                E = p.TransitionComponent,
                F = void 0 === E ? i.default : E,
                G = (0, e.default)(p, [
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
                H = (0, k.default)(),
                I = f.useRef(null),
                J = f.useCallback(function(K) {
                    I.current = g.findDOMNode(K);
                }, []),
                K = (0, j.default)(r.ref, J),
                L = (0, j.default)(K, q),
                M = function(N) {
                    return function(O) {
                        N && (void 0 === O ? N(I.current) : N(I.current, O));
                    };
                },
                N = M(function(O, P) {
                    _t(t, O), (0, m.reflow)(O), v && v(O, P);
                }),
                O = M(function(P, Q) {
                    var R = (0, m.getTransitionProps)({
                        timeout: D,
                        style: B
                    }, {
                        mode: 'enter'
                    });
                    P.style.webkitTransition = H.transitions.create('-webkit-transform', (0, d.default)({}, R, {
                        easing: H.transitions.easing.easeOut
                    })), P.style.transition = H.transitions.create('transform', (0, d.default)({}, R, {
                        easing: H.transitions.easing.easeOut
                    })), P.style.webkitTransform = 'none', P.style.transform = 'none', x && x(P, Q);
                }),
                P = M(w),
                Q = M(A),
                R = M(function(S) {
                    var T = (0, m.getTransitionProps)({
                        timeout: D,
                        style: B
                    }, {
                        mode: 'exit'
                    });
                    S.style.webkitTransition = H.transitions.create('-webkit-transform', (0, d.default)({}, T, {
                        easing: H.transitions.easing.sharp
                    })), S.style.transition = H.transitions.create('transform', (0, d.default)({}, T, {
                        easing: H.transitions.easing.sharp
                    })), _t(t, S), y && y(S);
                }),
                S = M(function(T) {
                    T.style.webkitTransition = '', T.style.transition = '', z && z(T);
                }),
                T = f.useCallback(function() {
                    I.current && _t(t, I.current);
                }, [t]);
            return f.useEffect(function() {
                if (!u && 'down' !== t && 'right' !== t) {
                    var U = (0, h.default)(function() {
                        I.current && _t(t, I.current);
                    });
                    return window.addEventListener('resize', U),
                        function() {
                            U.clear(), window.removeEventListener('resize', U);
                        };
                }
            }, [
                t,
                u
            ]), f.useEffect(function() {
                u || T();
            }, [
                u,
                T
            ]), f.createElement(F, (0, d.default)({
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
            }, G), function(U, V) {
                return f.cloneElement(r, (0, d.default)({
                    ref: L,
                    style: (0, d.default)({
                        visibility: 'exited' !== U || u ? void 0 : 'hidden'
                    }, B, r.props.style)
                }, V));
            });
        });
}), a.register('mwSz2', function(b, c) {
    function d(e) {
        var f, g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 166;

        function h() {
            for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                j[k] = arguments[k];
            var l = this,
                m = function() {
                    e.apply(l, j);
                };
            clearTimeout(f), f = setTimeout(m, g);
        }
        return d.clear = function() {
            clearTimeout(f);
        }, d;
    }
    _k(b.exports, 'default', function() {
        return a;
    });
}), a.register('pOFev', function(b, c) {
    _k(b.exports, 'default', function() {
        return _p;
    });
    var d = a('GepBD'),
        e = a('r98tK1'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = f.forwardRef(function(j, _k) {
            var l = j.classes,
                m = j.className,
                n = j.component,
                o = void 0 === n ? 'div' : n,
                _p = j.square,
                q = void 0 !== _p && _p,
                r = j.elevation,
                s = void 0 === r ? 1 : r,
                _t = j.variant,
                u = void 0 === _t ? 'elevation' : _t,
                v = (0, d.default)(j, [
                    'classes',
                    'className',
                    'component',
                    'square',
                    'elevation',
                    'variant'
                ]);
            return f.createElement(o, (0, e.default)({
                className: (0, g.default)(l.root, m, 'outlined' === u ? l.outlined : l['elevation'.concat(s)], !q && l.rounded),
                ref: _k
            }, v));
        }),
        j = (0, h.default)(function(k) {
            var l = {};
            return k.shadows.forEach(function(m, n) {
                l['elevation'.concat(n)] = {
                    boxShadow: m
                };
            }), (0, e.default)({
                root: {
                    backgroundColor: k.palette.background.paper,
                    color: k.palette.text.primary,
                    transition: k.transitions.create('box-shadow')
                },
                rounded: {
                    borderRadius: k.shape.borderRadius
                },
                outlined: {
                    border: '1px solid '.concat(k.palette.divider)
                }
            }, l);
        }, {
            name: 'MuiPaper'
        })(i);
}), a.register('G13ww', function(b, c) {
    _l(b.exports, 'default', function() {
        return _q;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('aPdBA'),
        j = f.forwardRef(function(k, _l) {
            var m = k.children,
                n = k.classes,
                o = k.className,
                p = k.component,
                _q = void 0 === p ? 'ul' : p,
                r = k.dense,
                s = void 0 !== r && r,
                t = k.disablePadding,
                u = void 0 !== t && t,
                v = k.subheader,
                w = (0, e.default)(k, [
                    'children',
                    'classes',
                    'className',
                    'component',
                    'dense',
                    'disablePadding',
                    'subheader'
                ]),
                x = f.useMemo(function() {
                    return {
                        dense: s
                    };
                }, [s]);
            return f.createElement(i.default.Provider, {
                value: x
            }, f.createElement(_q, (0, d.default)({
                className: (0, g.default)(n.root, o, s && n.dense, !u && n.padding, v && n.subheader),
                ref: _l
            }, w), v, m));
        }),
        k = (0, h.default)({
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
        })(j);
}), a.register('aPdBA', function(b, c) {
    _q(b.exports, 'default', function() {
        return _d;
    });
    var _d = a('LEQ5w').createContext({});
}), a.register('/TUxI', function(b, c) {
    _q(b.exports, 'default', function() {
        return _v;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('+4L0f'),
        j = a('uSMNT'),
        k = a('hZetO'),
        l = a('aPdBA'),
        m = a('Z/8fU'),
        n = 'undefined' == typeof window ? f.useEffect : f.useLayoutEffect,
        o = f.forwardRef(function(p, _q) {
            var r = p.alignItems,
                s = void 0 === r ? 'center' : r,
                t = p.autoFocus,
                u = void 0 !== t && t,
                _v = p.button,
                w = void 0 !== _v && _v,
                x = p.children,
                y = p.classes,
                z = p.className,
                A = p.component,
                B = p.ContainerComponent,
                C = void 0 === B ? 'li' : B,
                D = p.ContainerProps,
                E = (D = void 0 === D ? {} : D).className,
                F = (0, e.default)(D, ['className']),
                G = p.dense,
                H = void 0 !== G && G,
                I = p.disabled,
                J = void 0 !== I && I,
                K = p.disableGutters,
                L = void 0 !== K && K,
                M = p.divider,
                N = void 0 !== M && M,
                O = p.focusVisibleClassName,
                P = p.selected,
                Q = void 0 !== P && P,
                R = (0, e.default)(p, [
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
                S = f.useContext(l.default),
                T = {
                    dense: H || S.dense || !1,
                    alignItems: s
                },
                U = f.useRef(null);
            n(function() {
                u && U.current && U.current.focus();
            }, [u]);
            var V = f.Children.toArray(x),
                W = V.length && (0, j.default)(V[V.length - 1], ['ListItemSecondaryAction']),
                X = f.useCallback(function(Y) {
                    U.current = m.findDOMNode(Y);
                }, []),
                Y = (0, k.default)(X, _q),
                Z = (0, d.default)({
                    className: (0, g.default)(y.root, z, T.dense && y.dense, !L && y.gutters, N && y.divider, J && y.disabled, w && y.button, 'center' !== s && y.alignItemsFlexStart, W && y.secondaryAction, Q && y.selected),
                    disabled: J
                }, R),
                $ = A || 'li';
            return w && (Z.component = A || 'div', Z.focusVisibleClassName = (0, g.default)(y.focusVisible, O), $ = i.default), W ? ($ = Z.component || A ? $ : 'div', 'li' === C && ('li' === $ ? $ = 'div' : 'li' === Z.component && (Z.component = 'div')), f.createElement(l.default.Provider, {
                value: T
            }, f.createElement(C, (0, d.default)({
                className: (0, g.default)(y.container, E),
                ref: Y
            }, F), f.createElement($, Z, V), V.pop()))) : f.createElement(l.default.Provider, {
                value: T
            }, f.createElement($, (0, d.default)({
                ref: Y
            }, Z), V));
        }),
        p = (0, h.default)(function(q) {
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
                        backgroundColor: q.palette.action.selected
                    },
                    '&$selected, &$selected:hover': {
                        backgroundColor: q.palette.action.selected
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
                    borderBottom: '1px solid '.concat(q.palette.divider),
                    backgroundClip: 'padding-box'
                },
                gutters: {
                    paddingLeft: 16,
                    paddingRight: 16
                },
                button: {
                    transition: q.transitions.create('background-color', {
                        duration: q.transitions.duration.shortest
                    }),
                    '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: q.palette.action.hover,
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
        })(o);
}), a.register('uSMNT', function(b, c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(f, _g) {
        return d.isValidElement(f) && -1 !== _g.indexOf(f.type.muiName);
    }
}), a.register('xzQFy', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('aPdBA'),
        j = f.forwardRef(function(k, _l) {
            var m = k.classes,
                n = k.className,
                o = (0, e.default)(k, [
                    'classes',
                    'className'
                ]),
                p = f.useContext(i.default);
            return f.createElement('div', (0, d.default)({
                className: (0, g.default)(m.root, n, 'flex-start' === p.alignItems && m.alignItemsFlexStart),
                ref: _l
            }, o));
        }),
        _k = (0, h.default)(function(l) {
            return {
                root: {
                    minWidth: 56,
                    color: l.palette.action.active,
                    flexShrink: 0,
                    display: 'inline-flex'
                },
                alignItemsFlexStart: {
                    marginTop: 8
                }
            };
        }, {
            name: 'MuiListItemIcon'
        })(j);
}), a.register('fs3me', function(b, c) {
    _m(b.exports, 'default', function() {
        return _r;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('KGi6Z'),
        j = a('aPdBA'),
        k = f.forwardRef(function(l, _m) {
            var n = l.children,
                o = l.classes,
                p = l.className,
                q = l.disableTypography,
                _r = void 0 !== q && q,
                s = l.inset,
                t = void 0 !== s && s,
                u = l.primary,
                v = l.primaryTypographyProps,
                w = l.secondary,
                x = l.secondaryTypographyProps,
                y = (0, e.default)(l, [
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
                z = f.useContext(j.default).dense,
                A = null != u ? u : n;
            null == A || A.type === i.default || _r || (A = f.createElement(i.default, (0, d.default)({
                variant: z ? 'body2' : 'body1',
                className: o.primary,
                component: 'span',
                display: 'block'
            }, v), A));
            var B = w;
            return null == B || B.type === i.default || _r || (B = f.createElement(i.default, (0, d.default)({
                variant: 'body2',
                className: o.secondary,
                color: 'textSecondary',
                display: 'block'
            }, x), B)), f.createElement('div', (0, d.default)({
                className: (0, g.default)(o.root, p, z && o.dense, t && o.inset, A && B && o.multiline),
                ref: _m
            }, y), A, B);
        }),
        l = (0, h.default)({
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
        })(k);
}), a.register('KGi6Z', function(b, c) {
    _m(b.exports, 'default', function() {
        return _r;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('mmS5q'),
        j = {
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
        k = f.forwardRef(function(l, _m) {
            var n = l.align,
                o = void 0 === n ? 'inherit' : n,
                p = l.classes,
                q = l.className,
                _r = l.color,
                s = void 0 === _r ? 'initial' : _r,
                t = l.component,
                u = l.display,
                v = void 0 === u ? 'initial' : u,
                w = l.gutterBottom,
                x = void 0 !== w && w,
                y = l.noWrap,
                z = void 0 !== y && y,
                A = l.paragraph,
                B = void 0 !== A && A,
                C = l.variant,
                D = void 0 === C ? 'body1' : C,
                E = l.variantMapping,
                F = void 0 === E ? j : E,
                G = (0, e.default)(l, [
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
                H = t || (B ? 'p' : F[D] || j[D]) || 'span';
            return f.createElement(H, (0, d.default)({
                className: (0, g.default)(p.root, q, 'inherit' !== D && p[D], 'initial' !== s && p['color'.concat((0, i.default)(s))], z && p.noWrap, x && p.gutterBottom, B && p.paragraph, 'inherit' !== o && p['align'.concat((0, i.default)(o))], 'initial' !== v && p['display'.concat((0, i.default)(v))]),
                ref: _m
            }, G));
        }),
        l = (0, h.default)(function(m) {
            return {
                root: {
                    margin: 0
                },
                body2: m.typography.body2,
                body1: m.typography.body1,
                caption: m.typography.caption,
                button: m.typography.button,
                h1: m.typography.h1,
                h2: m.typography.h2,
                h3: m.typography.h3,
                h4: m.typography.h4,
                h5: m.typography.h5,
                h6: m.typography.h6,
                subtitle1: m.typography.subtitle1,
                subtitle2: m.typography.subtitle2,
                overline: m.typography.overline,
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
                    color: m.palette.primary.main
                },
                colorSecondary: {
                    color: m.palette.secondary.main
                },
                colorTextPrimary: {
                    color: m.palette.text.primary
                },
                colorTextSecondary: {
                    color: m.palette.text.secondary
                },
                colorError: {
                    color: m.palette.error.main
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
        })(k);
}), a.register('1tnXY', function(b, c) {
    _B(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9c.39-.67-.09-1.5-.86-1.5H13l2.49-6.65c.25-.65-.23-1.35-.93-1.35H8c-.55 0-1 .45-1 1z'
        }), 'FlashOnRounded');
}), a.register('tz3U0', function(b, c) {
    _B(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z'
        }), 'QuestionAnswer');
}), a.register('TyHMk', function(b, c) {
    _B(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z'
        }), 'Shop');
}), a.register('zO6Zt', function(b, _c) {
    _B(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('b3ci8');
    var _f = b => (0, d.jsx)('span', {
        onClick: () => {
            b.disabled || (b.onClick && b.onClick(), (0, e.changeRoute)(b.to));
        },
        children: b.children
    });
}), a.register('cHXR8', function(b, c) {
    _B(b.exports, 'default', function() {
        return _r;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('pECMN'),
        g = a('LlmxX'),
        h = a('RYc37'),
        i = a('QWK7i'),
        j = a('2x11J'),
        k = a('LEQ5w'),
        l = a('wmWZN'),
        m = a('Axq+p');
    let n, o, p = b => b;
    let q = class extends k.Component {
        render() {
            return this.props.powerups.linkPartnerName ? (0, e.jsx)(l.default, {
                children: (0, e.jsxs)('div', {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        (0, e.jsx)('div', {
                            style: {
                                background: i.default.DarkSuccessGreen,
                                color: i.default.White,
                                height: 43,
                                width: 43,
                                marginRight: 7,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            },
                            children: (0, e.jsx)(f.default, {
                                name: g.LINK_ICON
                            })
                        }),
                        (0, e.jsxs)('div', {
                            style: {
                                fontWeight: 'bold'
                            },
                            children: [
                                (0, e.jsx)(_s, {
                                    children: (0, e.jsx)(h.default, {
                                        text: 'Link Active'
                                    })
                                }),
                                (0, e.jsx)(_t, {
                                    children: this.props.powerups.linkPartnerName
                                })
                            ]
                        })
                    ]
                })
            }) : null;
        }
    };
    q = (0, d.__decorate)([
        (0, j.inject)('powerups'),
        j.observer
    ], q);
    var _r = q;
    const _s = m.default.div(n || (n = p`
  font-size: 17px;
  opacity: 0.8;
`)),
        _t = m.default.div(o || (o = p`
  font-size: 20px;
  text-overflow: ellipsis;
  width: 261px;
  white-space: nowrap;
  overflow: hidden;
`));
}), a.register('wmWZN', function(b, c) {
    _B(b.exports, 'default', function() {
        return _f;
    });
    var d = a('9FYKI');
    let e;
    var _f = a('Axq+p').default.div(e || (e = (b => b)`
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
`), d.default.name);
}), a.register('DLsYr', function(b, c) {
    _B(b.exports, 'default', function() {
        return _A;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('pECMN'),
        h = a('++MnA'),
        i = a('6a8o9'),
        j = a('RYc37'),
        k = a('9FYKI');
    a('KOgpv');
    var l = a('8Wc8V'),
        m = a('b3ci8'),
        n = a('2x11J'),
        o = a('LEQ5w'),
        p = a('Axq+p');
    let q, r, s, t, u = b => b;
    const v = p.default.div(q || (q = u`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: ${ 0 };
`), k.default.name),
        w = p.default.div(r || (r = u`
  font-size: 38px;
  margin-left: 5px;
  font-weight: 900;
`)),
        x = p.default.div(s || (s = u`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: ${ 0 };
  color: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
`), b => b.backgroundColor, b => b.textColor),
        y = p.default.div(t || (t = u`
  font-size: 19px;
  opacity: 0.8;
  margin-bottom: 7px;
  font-family: ${ 0 };
`), k.default.name);
    let z = class extends o.Component {
        render() {
            const A = (this.props.powerups.availablePowerups.filter(A => A.name === this.props.navigation.attackModal.powerup) || [])[0];
            if (!A)
                return null;
            const _B = !(A.name === l.PowerupNames.link && this.props.powerups.activePowerups.includes(l.PowerupNames.shield));
            return (0, f.jsxs)(i.default, {
                open: this.props.navigation.attackModal.open,
                close: this.close,
                customMaxWidth: '90%',
                customWidth: '600px',
                children: [
                    (0, f.jsxs)(v, {
                        children: [
                            (0, f.jsx)(x, {
                                backgroundColor: A.color.background,
                                textColor: A.color.text,
                                children: (0, f.jsx)(g.default, {
                                    name: A.icon
                                })
                            }),
                            (0, f.jsx)(w, {
                                children: (0, f.jsx)(j.default, {
                                    text: (0, m.getPowerupName)(A)
                                })
                            })
                        ]
                    }),
                    (0, f.jsx)(y, {
                        children: (0, f.jsx)(j.default, {
                            text: _B ? (0, m.getPowerupDescription)(A.description) : 'This powerup is disabled while shield is active'
                        })
                    }),
                    _B && (0, f.jsx)(h.default, {
                        usePowerupAction: !0,
                        parentAction: this.close
                    })
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'close', () => this.props.navigation.attackModal.open = !1);
        }
    };
    z = (0, e.__decorate)([
        (0, n.inject)('powerups', 'navigation'),
        n.observer
    ], z);
    var _A = z;
}), a.register('6a8o9', function(b, c) {
    _x(b.exports, 'default', function() {
        return _w;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('Z/8fU'),
        i = a('2x11J'),
        j = a('Axq+p'),
        k = a('HVYv8'),
        l = a('QWK7i'),
        m = a('9FYKI'),
        n = a('ziKcb'),
        o = a('I+0AY');
    let p, q, r = b => b;
    const s = j.default.div(p || (p = r`
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
`), m.default.name),
        t = j.default.div(q || (q = r`
  background: ${ 0 };
  border-radius: 4px;
  box-shadow: ${ 0 };
  animation-duration: 0.5s;
  ${ 0 }
  padding: ${ 0 };
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 9999999999999;
`), l.default.White, n.default.basic, b => b.fullScreen ? '\n  height: 100%;\n  width: 100%;\n  ' : `\n  max-width: ${ b.customMaxWidth ? b.customMaxWidth : '540px' };\n  ${ b.customWidth ? 'width: ' + b.customWidth + ';' : null }\n  max-height: 79vh;\n  margin: 20px;\n  `, b => b.customPadding || '18px'),
        u = b => b.stopPropagation();
    let v = class extends g.Component {
        static getDerivedStateFromProps(w, _x) {
            return !w.open && _x.open ? (o.done.play(), {
                exiting: !0,
                open: !1
            }) : w.open && !_x.open ? {
                exiting: !1,
                open: !0
            } : null;
        }
        componentDidUpdate(w, x) {
            this.state.exiting && !x.exiting && setTimeout(() => this.setState({
                exiting: !1
            }), 500);
        }
        render() {
            const {
                close: w,
                gameValues: {
                    gameStatus: x
                }
            } = this.props, {
                open: y,
                exiting: z
            } = this.state;
            if (!y && !z)
                return null;
            if (x === k.GameStatus.results)
                return null;
            const A = z ? 'fadeOut' : 'fadeIn',
                B = z ? 'zoomOut' : 'zoomIn';
            return h.createPortal((0, f.jsx)(s, {
                className: `animated ${ A }`,
                onClick: w,
                children: (0, f.jsx)(t, {
                    onClick: u,
                    fullScreen: this.props.fullscreen,
                    className: `animated ${ B }`,
                    customPadding: this.props.customPadding,
                    customMaxWidth: this.props.customMaxWidth,
                    customWidth: this.props.customWidth,
                    style: this.props.customStyle,
                    children: this.props.children
                })
            }), document.body);
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                exiting: !1,
                open: !1
            });
        }
    };
    v = (0, e.__decorate)([
        (0, i.inject)('gameValues'),
        i.observer
    ], v);
    var _w = v;
}), a.register('HVYv8', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    _l(b.exports, 'GameStatus', function() {
        return h;
    }), (e = d || (d = {})).multipleChoice = 'mc', e.textInput = 'text', (g = f || (f = {})).public = 'public', g.private = 'private', (i = h || (h = {})).setup = 'setup', i.join = 'join', i.teams = 'teams', i.gameplay = 'gameplay', i.results = 'results', (k = j || (j = {})).time = 'time', k.race = 'race', k.allIn = 'allIn';
}), a.register('QQKEQ', function(b, c) {
    _l(b.exports, 'default', function() {
        return _l;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('8aLS5'),
        h = a('2x11J'),
        i = a('LEQ5w'),
        j = a('z6i5l');
    let k = class extends i.Component {
        render() {
            const l = this.useablePowerups();
            return l.length < 1 ? null : (0, f.jsxs)(i.Fragment, {
                children: [
                    (0, f.jsx)(g.default, {}),
                    (0, f.jsx)('div', {
                        style: {
                            height: 5
                        }
                    }),
                    l.map(l => (0, f.jsx)(j.default, {
                        powerup: l
                    }, l.name))
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'useablePowerups', () => this.props.powerups.availablePowerups.filter(b => this.props.powerups.purchasedPowerups.includes(b.name) && !this.props.powerups.usedPowerups.includes(b.name)));
        }
    };
    k = (0, e.__decorate)([
        (0, h.inject)('powerups'),
        h.observer
    ], k);
    var _l = k;
}), a.register('8aLS5', function(b, c) {
    _l(b.exports, 'default', function() {
        return _r;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('awqIe'),
        j = f.forwardRef(function(k, _l) {
            var m = k.absolute,
                n = void 0 !== m && m,
                o = k.classes,
                p = k.className,
                q = k.component,
                _r = void 0 === q ? 'hr' : q,
                s = k.flexItem,
                t = void 0 !== s && s,
                u = k.light,
                v = void 0 !== u && u,
                w = k.orientation,
                x = void 0 === w ? 'horizontal' : w,
                y = k.role,
                z = void 0 === y ? 'hr' !== _r ? 'separator' : void 0 : y,
                A = k.variant,
                B = void 0 === A ? 'fullWidth' : A,
                C = (0, e.default)(k, [
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
            return f.createElement(_r, (0, d.default)({
                className: (0, g.default)(o.root, p, 'fullWidth' !== B && o[B], n && o.absolute, t && o.flexItem, v && o.light, 'vertical' === x && o.vertical),
                role: z,
                ref: _l
            }, C));
        }),
        k = (0, h.default)(function(l) {
            return {
                root: {
                    height: 1,
                    margin: 0,
                    border: 'none',
                    flexShrink: 0,
                    backgroundColor: l.palette.divider
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
                    backgroundColor: (0, i.fade)(l.palette.divider, 0.08)
                },
                middle: {
                    marginLeft: l.spacing(2),
                    marginRight: l.spacing(2)
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
        })(j);
}), a.register('z6i5l', function(b, c) {
    _u(b.exports, 'default', function() {
        return _D;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('amKpW'),
        h = a('uo5Q0'),
        i = a('pECMN'),
        j = a('RYc37'),
        k = a('9FYKI'),
        l = a('b3ci8'),
        m = a('2x11J'),
        n = a('LEQ5w'),
        o = a('4vC7/');
    a('KOgpv');
    var p = a('8Wc8V'),
        q = a('Axq+p'),
        r = a('I+0AY');
    let s, t, u, v, w = b => b;
    const x = [
            p.PowerupNames.pumpkinPie,
            p.PowerupNames.icer,
            p.PowerupNames.reducer,
            p.PowerupNames.subtractor,
            p.PowerupNames.giving,
            p.PowerupNames.link,
            p.PowerupNames.blurredScreen,
            p.PowerupNames.cashConcealer,
            p.PowerupNames.outnumbered
        ],
        y = q.default.div(s || (s = w`
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
`), k.default.name),
        z = q.default.div(t || (t = w`
  display: flex;
  align-items: center;
`)),
        A = q.default.div(u || (u = w`
  background-color: ${ 0 };
  color: ${ 0 };
  height: 38px;
  width: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`), b => b.colors.background, b => b.colors.text),
        B = q.default.div(v || (v = w`
  font-size: 18px;
  font-weight: bold;
  margin-left: 7px;
`));
    let C = class extends n.Component {
        render() {
            const {
                powerup: D
            } = this.props;
            return (0, f.jsx)('div', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                },
                children: (0, f.jsxs)(y, {
                    children: [
                        (0, f.jsxs)(z, {
                            children: [
                                (0, f.jsx)(g.default, {
                                    title: (0, f.jsx)('div', {
                                        style: {
                                            fontSize: 15
                                        },
                                        children: (0, f.jsx)(j.default, {
                                            text: (0, l.getPowerupDescription)(D.description)
                                        })
                                    }),
                                    children: (0, f.jsx)(A, {
                                        colors: D.color,
                                        children: (0, f.jsx)(i.default, {
                                            name: D.icon
                                        })
                                    })
                                }),
                                (0, f.jsx)(B, {
                                    children: (0, f.jsx)(j.default, {
                                        text: (0, l.getPowerupName)(D)
                                    })
                                })
                            ]
                        }),
                        (0, f.jsx)(h.default, {
                            onClick: this.activatePowerup,
                            label: (0, f.jsx)(j.default, {
                                text: 'Use'
                            }),
                            type: this.props.powerups.activePowerups.includes(D.name) ? 'disabled' : 'primary',
                            size: 'small'
                        })
                    ]
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'activatePowerup', () => {
                this.props.powerup.name.includes('Stone') ? r.stone.play() : (r.successClick.play(), this.props.powerup.name !== p.PowerupNames.repurchasePowerups && (0, l.toggleDrawer)(!1)), (0, l.send)(o.default.powerupActivated, this.props.powerup.name), x.includes(this.props.powerup.name) && (this.props.navigation.attackModal.powerup = this.props.powerup.name, this.props.navigation.attackModal.open = !0);
            });
        }
    };
    C = (0, e.__decorate)([
        (0, m.inject)('powerups', 'navigation'),
        m.observer
    ], C);
    var _D = C;
}), a.register('ngWp0', function(b, c) {
    _u(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('139MV'),
        g = a('UNqxL'),
        h = a('b3ci8'),
        i = a('KFYFW');
    let j, k, l, m, n, o = b => b;
    var _p = b => (0, d.jsxs)(_q, {
        children: [
            (0, d.jsxs)(_r, {
                children: [
                    (0, d.jsx)(_s, {
                        children: b.playerName
                    }),
                    b.teamName && (0, d.jsx)(_t, {
                        children: b.teamName
                    })
                ]
            }),
            (0, d.jsx)(_u, {
                children: (0, d.jsx)(i.default, {
                    style: {
                        color: 'rgba(117, 117, 117, 1.0)'
                    },
                    onClick: b.isSettingsOpen ? b.onBack : b.onClickSettings,
                    children: b.isSettingsOpen ? (0, d.jsx)(f.default, {}) : (0, d.jsx)(g.default, {})
                })
            })
        ]
    });
    const _q = e.default.div.attrs({
            className: 'maxWidth flex vc between'
        })(j || (j = o`
  font-family: ${ 0 };
  flex-shrink: 0;
  padding: 12px 16px;
  padding-right: 5px;
  background-color: #f2f2f2;
`), h.mainFontName),
        _r = e.default.div.attrs({
            className: 'flex flex-column hc'
        })(k || (k = o`
  align-items: flex-start;
  overflow: hidden;
`)),
        _s = e.default.div(l || (l = o`
  color: #222222;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`)),
        _t = e.default.div(m || (m = o`
  font-size: 12px;
  color: #696969;
`)),
        _u = e.default.div(n || (n = o`
  margin-left: 10px;
`));
}), a.register('139MV', function(b, c) {
    _u(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'
        }), 'KeyboardBackspace');
}), a.register('UNqxL', function(b, c) {
    _u(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            transform: 'scale(1.2, 1.2)',
            d: 'M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'
        }), 'Settings');
}), a.register('FQoLM', function(b, _c) {
    _u(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('oN4l0'),
        g = a('2x11J'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('b3ci8');
    let k, l, m, n, o, p, q, r = b => b;
    var _s = (0, g.observer)(() => {
        const {
            pardy: t
        } = h.useContext(f.default), _u = t.powers.find(_u => _u.id === t.power);
        return _u ? (0, d.jsx)(_t, {
            children: (0, d.jsxs)(_u, {
                children: [
                    (0, d.jsx)(_v, {
                        style: {
                            backgroundColor: _u.background
                        },
                        children: (0, d.jsx)(_w, {
                            src: _u.image
                        })
                    }),
                    (0, d.jsxs)(_x, {
                        children: [
                            (0, d.jsx)(_y, {
                                children: _u.name
                            }),
                            (0, d.jsx)(_z, {
                                children: _u.description
                            })
                        ]
                    })
                ]
            })
        }) : null;
    });
    const _t = i.default.div.attrs({
            className: 'maxWidth'
        })(k || (k = r`
  font-family: ${ 0 };
  padding: 15px;
`), j.mainFontName),
        _u = i.default.div.attrs({
            className: 'maxWidth light-shadow'
        })(l || (l = r`
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 0px;
  border-radius: 5px;
  overflow: hidden;
`)),
        _v = i.default.div.attrs({
            className: 'maxWidth flex-center'
        })(m || (m = r`
  height: 80px;
`)),
        _w = i.default.img(n || (n = r`
  height: 40px;
  filter: drop-shadow(2px 2px 2px #222);
`)),
        _x = i.default.div.attrs({
            className: 'maxWidth flex-center flex-column'
        })(o || (o = r`
  background: ${ 0 };
  padding: 20px 15px;
  text-align: center;
`), e.default.Snow),
        _y = i.default.div(p || (p = r`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 2px;
`)),
        _z = i.default.div(q || (q = r`
  font-size: 14px;
`));
}), a.register('lVtHT', function(b, c) {
    _Q(b.exports, 'default', function() {
        return _q;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('2x11J'),
        h = a('LEQ5w'),
        i = a('eL9mY'),
        j = a('b3ci8'),
        k = a('zr14p'),
        l = a('Axq+p'),
        m = a('NIZyA'),
        n = a('RYc37');
    let o, p = class extends h.Component {
        render() {
            const q = this.props.imposter.noteDrawerOpen;
            return (0, j.inImposterMode)() ? (0, f.jsx)(k.StyledDrawer, {
                closable: !1,
                placement: 'left',
                visible: q,
                onClose: this.close,
                width: window.innerWidth > 500 ? 364 : '80vw',
                bodyStyle: {
                    height: '100%',
                    overflow: 'hidden',
                    padding: 0,
                    fontFamily: '\'Space Grotesk\', monospace'
                },
                children: (0, f.jsxs)(k.LeaderboardContainer, {
                    style: {
                        paddingLeft: 20,
                        paddingRight: 20
                    },
                    children: [
                        (0, f.jsxs)(_r, {
                            children: [
                                (0, f.jsx)('span', {
                                    role: 'img',
                                    'aria-label': 'notebook',
                                    children: '\uD83D\uDCD3'
                                }),
                                ' ',
                                'Notebook'
                            ]
                        }),
                        (0, f.jsx)(i.default, {
                            minRows: 8
                        }),
                        (0, f.jsx)(m.default, {
                            type: 'info',
                            style: {
                                marginTop: 17,
                                marginBottom: 25
                            },
                            message: (0, f.jsx)(n.default, {
                                text: 'Tip'
                            }),
                            description: (0, f.jsx)(n.default, {
                                text: 'Pay attention to the Investigation Log for more clues.'
                            }),
                            showIcon: !0
                        })
                    ]
                })
            }) : null;
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'close', () => this.props.imposter.noteDrawerOpen = !1);
        }
    };
    p = (0, e.__decorate)([
        (0, g.inject)('imposter'),
        g.observer
    ], p);
    var _q = p;
    const _r = l.default.div(o || (o = (b => b)`
  font-weight: 900;
  font-size: 34px;
  margin-top: 10px;
  margin-bottom: 7px;
`));
}), a.register('eL9mY', function(b, c) {
    _Q(b.exports, 'default', function() {
        return _n;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('LEQ5w'),
        h = a('ewwAh'),
        i = a('2x11J'),
        j = a('b3ci8'),
        k = a('4vC7/');
    const {
        TextArea: l
    } = h.default;
    let m = class extends g.Component {
        componentWillUnmount() {
            this.save();
        }
        render() {
            return this.props.imposter.me ? (0, f.jsx)(l, {
                placeholder: 'Leave notes or observations here!',
                value: this.props.imposter.me.notes,
                onChange: this.handleChange,
                onBlur: this.onBlur,
                autoSize: {
                    minRows: this.props.minRows || 4
                }
            }) : null;
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'handleChange', b => {
                this.props.imposter.me.notes = b.target.value;
            }), (0, d.default)(this, 'onBlur', () => this.save()), (0, d.default)(this, 'save', () => {
                (0, j.send)(k.default.imposter.notes, this.props.imposter.me.notes);
            });
        }
    };
    m = (0, e.__decorate)([
        (0, i.inject)('imposter'),
        i.observer
    ], m);
    var _n = m;
}), a.register('zr14p', function(b, c) {
    _Q(b.exports, 'StyledDrawer', function() {
        return _p;
    }), _Q(b.exports, 'LeaderboardContainer', function() {
        return _s;
    }), _Q(b.exports, 'default', function() {
        return _r;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('sgToH'),
        h = a('2x11J'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('6XgQB1'),
        l = a('vTmYd');
    let m, n, o = b => b;
    const _p = (0, j.default)(g.default)(m || (m = o`
  .ant-drawer-wrapper-body {
    width: 100%;
    height: 100%;
  }
`));
    let q = class extends i.Component {
        render() {
            return this.props.gameOptions.type !== k.GameType.live ? null : (0, f.jsx)(_p, {
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
                children: (0, f.jsx)(_s, {
                    children: (0, f.jsx)(l.default, {})
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'close', () => this.props.navigation.leaderboardDrawerOpen = !1);
        }
    };
    q = (0, e.__decorate)([
        (0, h.inject)('navigation', 'gameOptions'),
        h.observer
    ], q);
    var _r = q;
    const _s = j.default.div(n || (n = o`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`));
}), a.register('vTmYd', function(b, c) {
    _Q(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('++MnA'),
        f = a('LEQ5w');
    class g extends f.Component {
        render() {
            return (0, d.jsx)(f.Fragment, {
                children: (0, d.jsx)(e.default, {
                    showSelf: !0,
                    customItemBorderRadius: 7
                })
            });
        }
    }
    var _h = g;
}), a.register('PgtY7', function(b, c) {
    _Q(b.exports, 'Container', function() {
        return _N;
    }), _Q(b.exports, 'default', function() {
        return _T;
    });
    var d = a('0hzx+'),
        e = a('vJrOE'),
        f = a('Q67Mk'),
        g = a('oTTgx'),
        h = a('E9ysS'),
        i = a('LEQ5w'),
        j = a('exphF'),
        k = a('Axq+p'),
        l = a('GW9SK'),
        m = a('kuM00'),
        n = a('bo+P/'),
        o = a('cX8g7'),
        p = a('b3ci8'),
        q = a('YuT/D'),
        r = a('2x11J'),
        s = a('O4G7w'),
        t = a('6XgQB1'),
        u = a('01jjC'),
        v = a('kSOTp'),
        w = a('TaSes'),
        x = a('RMwBf'),
        y = a('AxrXZ'),
        z = a('vvlOW'),
        A = a('1vKai'),
        B = a('LxKpR'),
        C = a('xh8Lc'),
        D = a('c4qSi'),
        E = a('oN4l0'),
        F = a('YrjGX'),
        G = a('fe6E3'),
        H = a('DmB5I');
    let I;
    const J = [h.default.questions],
        K = () => (0, G.sample)('abcdefghijklmnopqrstuvwxyz'.split('')),
        L = K(),
        M = K(),
        _N = k.default.div.withConfig({
            displayName: `sc-${ L + M }`
        }).attrs({
            className: 'maxAll flex-column'
        })(I || (I = (b => b)`
  flex: 1 1 auto;
  min-height: 0;
  background: ${ 0 };
  overflow-x: hidden;
  overflow-y: hidden;
`), b => b.customBackground || b.theme.defaultBackground),
        O = {
            width: '100%',
            height: '100%'
        },
        P = b => {
            if (b.currentRoute === b.path) {
                const _Q = b.component;
                return (0, d.jsx)(_Q, {});
            }
            return null;
        },
        Q = () => s.default.navigation.canChangeRoute = !1,
        R = () => s.default.navigation.canChangeRoute = !0,
        S = b => {
            const [T, U] = i.useState(!0);
            return i.useEffect(() => {
                U(!1);
            }, []), (0, d.jsx)(j.TransitionGroup, {
                style: O,
                children: (0, d.jsx)(j.CSSTransition, {
                    style: O,
                    timeout: H.CSS_TRANSITION_TIMEOUT,
                    onExit: Q,
                    onEntered: R,
                    classNames: J.includes(b.currentRoute) || T ? '' : 'fade-router',
                    children: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.upgrade,
                                component: g.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.shop,
                                component: f.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.questions,
                                component: n.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.team,
                                component: m.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.waiting,
                                component: e.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.gameOver,
                                component: l.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.nonDismissMessage,
                                component: v.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.imposterMode,
                                component: y.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.drawMode,
                                component: z.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.pardyMode,
                                component: A.default
                            }),
                            (0, d.jsx)(P, {
                                currentRoute: b.currentRoute,
                                path: h.default.join,
                                component: B.default
                            })
                        ]
                    })
                }, b.currentRoute)
            });
        };
    var _T = (0, r.observer)(b => {
        const {
            gameValues: U,
            navigation: V
        } = i.useContext(E.default);
        return i.useEffect(() => {
            b.joinDetails && ((0, F.default)({
                serverUrl: b.joinDetails.serverUrl,
                roomId: b.joinDetails.roomId,
                intentId: b.joinDetails.intentId
            }), (0, q.when)(() => U.gameStatus === t.GameStatus.results, () => {
                (0, p.changeRoute)(h.default.gameOver);
            }), (0, p.listenForLeave)());
        }, []), (0, d.jsxs)(_N, {
            children: [
                (0, d.jsx)(S, {
                    currentRoute: V.currentRoute
                }),
                (0, d.jsx)(o.default, {}),
                (0, d.jsx)(C.default, {}),
                (0, d.jsx)(u.default, {}),
                (0, d.jsx)(w.default, {}),
                (0, d.jsx)(x.default, {}),
                (0, d.jsx)(D.default, {})
            ]
        });
    });
}), a.register('vJrOE', function(b, c) {
    _u(b.exports, 'ITEM_MAX_WIDTH', function() {
        return _q;
    }), _u(b.exports, 'default', function() {
        return _w;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('2x11J'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('LxU5h'),
        k = (j = a('LxU5h'), a('OcP/P')),
        l = a('l2Y8H'),
        m = a('oybzR');
    let n, o, p = b => b;
    const _q = 600,
        r = i.default.div(n || (n = p`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  background: ${ 0 };
  -webkit-overflow-scrolling: touch;
`), j.backgroundCanvasColor),
        s = i.default.div(o || (o = p`
  width: 90%;
  max-width: ${ 0 }px;
  min-height: 100%;
`), _q);
    let t;
    var u;
    (u = t || (t = {})).information = 'information', u.drawing = 'drawing';
    let v = class extends h.Component {
        render() {
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(m.default, {}),
                    this.getContent()
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                screen: t.information
            }), (0, d.default)(this, 'switchToDrawing', () => {
                this.setState({
                    screen: t.drawing
                });
            }), (0, d.default)(this, 'getContent', () => this.state.screen === t.information ? (0, f.jsx)(r, {
                onClick: this.switchToDrawing,
                children: (0, f.jsxs)(s, {
                    children: [
                        (0, f.jsx)('div', {
                            style: {
                                height: 20
                            }
                        }),
                        (0, f.jsx)(k.default, {}),
                        this.props.gameValues.news.map(b => (0, f.jsx)(l.default, {
                            item: b
                        }, b.description)),
                        (0, f.jsx)('div', {
                            style: {
                                height: 20
                            }
                        })
                    ]
                })
            }) : (0, f.jsx)(j.default, {}));
        }
    };
    v = (0, e.__decorate)([
        (0, g.inject)('gameValues'),
        g.observer
    ], v);
    var _w = v;
}), a.register('LxU5h', function(b, c) {
    _u(b.exports, 'backgroundCanvasColor', function() {
        return _o;
    }), _u(b.exports, 'defaultDrawingColor', function() {
        return _p;
    }), _u(b.exports, 'secondaryDrawingColor', function() {
        return _q;
    }), _u(b.exports, 'default', function() {
        return _t;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('7yitG'),
        h = a('Axq+p'),
        i = a('QWK7i'),
        j = a('b3ci8'),
        k = a('heOfl'),
        l = a('jlhuE');
    let m;
    const n = 'gimkit-draw-canvas',
        _o = () => (0, j.inImposterMode)() ? '#313639' : (0, j.inLavaMode)() ? '#263238' : (0, j.inPardyMode)() ? '#525380' : '#4caf50',
        _p = () => (0, j.inImposterMode)() ? i.default.White : (0, j.inLavaMode)() || (0, j.inPardyMode)() ? '#ffeb3b' : '#424242',
        _q = () => (0, j.inImposterMode)() ? '#ffee58' : (0, j.inThanosMode)() ? '#5e35b1' : (0, j.inLavaMode)() ? '#ff6f00' : (0, j.inPardyMode)() ? '#99f6a9' : '#e1f5fe',
        r = h.default.div(m || (m = (b => b)`
  height: 100%;
  width: 100%;
  background: ${ 0 };
`), _o);
    class s extends f.Component {
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
                width: t,
                height: _u
            } = this.state;
            return (0, e.jsx)(e.Fragment, {
                children: (0, e.jsxs)(r, {
                    id: n,
                    children: [
                        (0, e.jsx)(g.default, {
                            canvasHeight: _u,
                            canvasWidth: t,
                            brushRadius: this.state.drawState.brushSize,
                            brushColor: this.state.drawState.brushColor,
                            hideGrid: !0,
                            style: {
                                background: _o
                            },
                            lazyRadius: 0,
                            catenaryColor: this.state.drawState.brushColor
                        }),
                        (0, e.jsx)(k.default, {
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
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                width: 0,
                height: 0,
                drawState: {
                    brushColor: _p(),
                    brushSize: l.default.pen
                },
                showingControls: !0
            }), (0, d.default)(this, 'changeBrushColor', b => {
                this.setState({
                    drawState: {
                        ...this.state.drawState,
                        brushColor: b,
                        brushSize: this.state.drawState.brushSize === l.default.eraser ? l.default.pen : this.state.drawState.brushSize
                    }
                });
            }), (0, d.default)(this, 'changeBrushSize', b => {
                this.setState({
                    drawState: {
                        ...this.state.drawState,
                        brushSize: b,
                        brushColor: _p()
                    }
                });
            }), (0, d.default)(this, 'changeToEraser', () => this.setState({
                drawState: {
                    brushSize: l.default.eraser,
                    brushColor: _o()
                }
            })), (0, d.default)(this, 'onTouch', b => {
                b.preventDefault();
            }), (0, d.default)(this, 'onResize', () => {
                const t = document.getElementById(n).clientHeight,
                    u = document.getElementById(n).clientWidth;
                this.setState({
                    height: t,
                    width: u
                });
            });
        }
    }
    var _t = s;
}), a.register('7yitG', function(b, c) {
    _n(b.exports, 'default', function() {
        return _p;
    });
    var d, e, f = a('LEQ5w'),
        g = a('WPpLv'),
        h = a('zLe8d'),
        i = a('Alxfy'),
        j = a('iIbRn'),
        k = a('P84Od'),
        l = Object.assign || function(m) {
            for (var _n = 1; _n < arguments.length; _n++) {
                var o = arguments[_n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (m[p] = o[p]);
            }
            return m;
        };

    function m(n, o) {
        return {
            x: n.x + (o.x - n.x) / 2,
            y: n.y + (o.y - n.y) / 2
        };
    }
    var m = {
            display: 'block',
            position: 'absolute'
        },
        n = [{
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
        o = _s(g).oneOfType([
            _s(g).number,
            _s(g).string
        ]),
        _p = (e = d = function(q) {
            function r(_s) {
                ! function(t, u) {
                    if (!(t instanceof u))
                        throw new TypeError('Cannot call a class as a function');
                }(this, r);
                var t = function(u, v) {
                    if (!u)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !v || 'object' != typeof v && 'function' != typeof v ? u : v;
                }(this, q.call(this, _s));
                return t.componentWillUnmount = function() {
                    t.canvasObserver.unobserve(t.canvasContainer);
                }, t.drawImage = function() {
                    t.props.imgSrc && (t.image = new Image(), t.image.crossOrigin = 'anonymous', t.image.onload = function() {
                        return (0, k.default)({
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
                }, t.loadSaveData = function(u) {
                    var v = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.props.immediateLoading;
                    if ('string' != typeof u)
                        throw new Error('saveData needs to be of type string!');
                    var w = JSON.parse(u),
                        x = w.lines,
                        y = w.width,
                        z = w.height;
                    if (!x || 'function' != typeof x.push)
                        throw new Error('saveData.lines needs to be an array!');
                    if (t.clear(), y === t.props.canvasWidth && z === t.props.canvasHeight)
                        t.simulateDrawingLines({
                            lines: x,
                            immediate: v
                        });
                    else {
                        var A = t.props.canvasWidth / y,
                            B = t.props.canvasHeight / z,
                            C = (A + B) / 2;
                        t.simulateDrawingLines({
                            lines: x.map(function(D) {
                                return l({}, D, {
                                    points: D.points.map(function(E) {
                                        return {
                                            x: E.x * A,
                                            y: E.y * B
                                        };
                                    }),
                                    brushRadius: D.brushRadius * C
                                });
                            }),
                            immediate: v
                        });
                    }
                }, t.simulateDrawingLines = function(u) {
                    var v = u.lines,
                        w = u.immediate,
                        x = 0,
                        y = w ? 0 : t.props.loadTimeOffset;
                    v.forEach(function(z) {
                        var A = z.points,
                            B = z.brushColor,
                            C = z.brushRadius;
                        if (w)
                            return t.drawPoints({
                                points: A,
                                brushColor: B,
                                brushRadius: C
                            }), t.points = A, void t.saveLine({
                                brushColor: B,
                                brushRadius: C
                            });
                        for (var D = function(E) {
                                x += y, window.setTimeout(function() {
                                    t.drawPoints({
                                        points: A.slice(0, E + 1),
                                        brushColor: B,
                                        brushRadius: C
                                    });
                                }, x);
                            }, E = 1; E < A.length; E++)
                            D(E);
                        x += y, window.setTimeout(function() {
                            t.points = A, t.saveLine({
                                brushColor: B,
                                brushRadius: C
                            });
                        }, x);
                    });
                }, t.handleDrawStart = function(u) {
                    u.preventDefault(), t.isPressing = !0;
                    var v = t.getPointerPos(u),
                        w = v.x,
                        x = v.y;
                    u.touches && u.touches.length > 0 && t.lazy.update({
                        x: w,
                        y: x
                    }, {
                        both: !0
                    }), t.handlePointerMove(w, x);
                }, t.handleDrawMove = function(u) {
                    u.preventDefault();
                    var v = t.getPointerPos(u),
                        w = v.x,
                        x = v.y;
                    t.handlePointerMove(w, x);
                }, t.handleDrawEnd = function(u) {
                    u.preventDefault(), t.handleDrawMove(u), t.isDrawing = !1, t.isPressing = !1, t.saveLine();
                }, t.handleCanvasResize = function(u, v) {
                    var w = t.getSaveData(),
                        x = u,
                        y = Array.isArray(x),
                        z = 0;
                    for (x = y ? x : x[Symbol.iterator]();;) {
                        var A;
                        if (y) {
                            if (z >= x.length)
                                break;
                            A = x[z++];
                        } else {
                            if ((z = x.next()).done)
                                break;
                            A = z.value;
                        }
                        var B = A.contentRect,
                            C = B.width,
                            D = B.height;
                        t.setCanvasSize(t.canvas.interface, C, D), t.setCanvasSize(t.canvas.drawing, C, D), t.setCanvasSize(t.canvas.temp, C, D), t.setCanvasSize(t.canvas.grid, C, D), t.drawGrid(t.ctx.grid), t.drawImage(), t.loop({
                            once: !0
                        });
                    }
                    t.loadSaveData(w, !0);
                }, t.setCanvasSize = function(u, v, w) {
                    u.width = v, u.height = w, u.style.width = v, u.style.height = w;
                }, t.getPointerPos = function(u) {
                    var v = t.canvas.interface.getBoundingClientRect(),
                        w = u.clientX,
                        x = u.clientY;
                    return u.changedTouches && u.changedTouches.length > 0 && (w = u.changedTouches[0].clientX, x = u.changedTouches[0].clientY), {
                        x: w - v.left,
                        y: x - v.top
                    };
                }, t.handlePointerMove = function(u, v) {
                    if (!t.props.disabled) {
                        t.lazy.update({
                            x: u,
                            y: v
                        });
                        var w = !t.lazy.isEnabled();
                        (t.isPressing && !t.isDrawing || w && t.isPressing) && (t.isDrawing = !0, t.points.push(t.lazy.brush.toObject())), t.isDrawing && (t.points.push(t.lazy.brush.toObject()), t.drawPoints({
                            points: t.points,
                            brushColor: t.props.brushColor,
                            brushRadius: t.props.brushRadius
                        })), t.mouseHasMoved = !0;
                    }
                }, t.drawPoints = function(u) {
                    var v = u.points,
                        w = u.brushColor,
                        x = u.brushRadius;
                    t.ctx.temp.lineJoin = 'round', t.ctx.temp.lineCap = 'round', t.ctx.temp.strokeStyle = w, t.ctx.temp.clearRect(0, 0, t.ctx.temp.canvas.width, t.ctx.temp.canvas.height), t.ctx.temp.lineWidth = 2 * x;
                    var y = v[0],
                        z = v[1];
                    t.ctx.temp.moveTo(z.x, z.y), t.ctx.temp.beginPath();
                    for (var A = 1, B = v.length; A < B; A++) {
                        var C = _w(y, z);
                        t.ctx.temp.quadraticCurveTo(y.x, y.y, C.x, C.y), y = v[A], z = v[A + 1];
                    }
                    t.ctx.temp.lineTo(y.x, y.y), t.ctx.temp.stroke();
                }, t.saveLine = function() {
                    var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
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
                    var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
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
                }, t.drawGrid = function(u) {
                    if (!t.props.hideGrid) {
                        u.clearRect(0, 0, u.canvas.width, u.canvas.height), u.beginPath(), u.setLineDash([
                            5,
                            1
                        ]), u.setLineDash([]), u.strokeStyle = t.props.gridColor, u.lineWidth = 0.5;
                        for (var v = 0; v < u.canvas.width;)
                            v += 25, u.moveTo(v, 0), u.lineTo(v, u.canvas.height);
                        u.stroke();
                        for (var w = 0; w < u.canvas.height;)
                            w += 25, u.moveTo(0, w), u.lineTo(u.canvas.width, w);
                        u.stroke();
                    }
                }, t.drawInterface = function(u, v, w) {
                    t.props.hideInterface || (u.clearRect(0, 0, u.canvas.width, u.canvas.height), u.beginPath(), u.fillStyle = t.props.brushColor, u.arc(w.x, w.y, t.props.brushRadius, 0, 2 * Math.PI, !0), u.fill(), u.beginPath(), u.fillStyle = t.props.catenaryColor, u.arc(v.x, v.y, 4, 0, 2 * Math.PI, !0), u.fill(), t.lazy.isEnabled() && (u.beginPath(), u.lineWidth = 2, u.lineCap = 'round', u.setLineDash([
                        2,
                        4
                    ]), u.strokeStyle = t.props.catenaryColor, t.catenary.drawToCanvas(t.ctx.interface, w, v, t.chainLength), u.stroke()), u.beginPath(), u.fillStyle = t.props.catenaryColor, u.arc(w.x, w.y, 2, 0, 2 * Math.PI, !0), u.fill());
                }, t.canvas = {}, t.ctx = {}, t.catenary = new(0, i.Catenary)(), t.points = [], t.lines = [], t.mouseHasMoved = !0, t.valuesChanged = !0, t.isDrawing = !1, t.isPressing = !1, t;
            }
            return function(r, s) {
                if ('function' != typeof s && null !== s)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof s);
                r.prototype = Object.create(s && s.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(r, s) : r.__proto__ = s);
            }(_s, q), _s.prototype.componentDidMount = function() {
                var r = this;
                this.lazy = new(0, h.LazyBrush)({
                    radius: this.props.lazyRadius * window.devicePixelRatio,
                    enabled: !0,
                    initialPoint: {
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2
                    }
                }), this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.canvasObserver = new(0, j.default)(function(_s, t) {
                    return r.handleCanvasResize(_s, t);
                }), this.canvasObserver.observe(this.canvasContainer), this.drawImage(), this.loop(), window.setTimeout(function() {
                    var s = window.innerWidth / 2,
                        t = window.innerHeight / 2;
                    r.lazy.update({
                        x: s - r.chainLength / 4,
                        y: t
                    }, {
                        both: !0
                    }), r.lazy.update({
                        x: s + r.chainLength / 4,
                        y: t
                    }, {
                        both: !1
                    }), r.mouseHasMoved = !0, r.valuesChanged = !0, r.clear(), r.props.saveData && r.loadSaveData(r.props.saveData);
                }, 100);
            }, _s.prototype.componentDidUpdate = function(r) {
                r.lazyRadius !== this.props.lazyRadius && (this.chainLength = this.props.lazyRadius * window.devicePixelRatio, this.lazy.setRadius(this.props.lazyRadius * window.devicePixelRatio)), r.saveData !== this.props.saveData && this.loadSaveData(this.props.saveData), JSON.stringify(r) !== JSON.stringify(this.props) && (this.valuesChanged = !0);
            }, _s.prototype.render = function() {
                var r = this;
                return _d(f).createElement('div', {
                    className: this.props.className,
                    style: l({
                        display: 'block',
                        background: this.props.backgroundColor,
                        touchAction: 'none',
                        width: this.props.canvasWidth,
                        height: this.props.canvasHeight
                    }, this.props.style),
                    ref: function(_s) {
                        _s && (r.canvasContainer = _s);
                    }
                }, n.map(function(s) {
                    var t = s.name,
                        u = s.zIndex,
                        v = 'interface' === t;
                    return _d(f).createElement('canvas', {
                        key: t,
                        ref: function(w) {
                            w && (r.canvas[t] = w, r.ctx[t] = w.getContext('2d'));
                        },
                        style: l({}, m, {
                            zIndex: u
                        }),
                        onMouseDown: v ? r.handleDrawStart : void 0,
                        onMouseMove: v ? r.handleDrawMove : void 0,
                        onMouseUp: v ? r.handleDrawEnd : void 0,
                        onMouseOut: v ? r.handleDrawEnd : void 0,
                        onTouchStart: v ? r.handleDrawStart : void 0,
                        onTouchMove: v ? r.handleDrawMove : void 0,
                        onTouchEnd: v ? r.handleDrawEnd : void 0,
                        onTouchCancel: v ? r.handleDrawEnd : void 0
                    });
                }));
            }, _c;
        }(f.PureComponent), d.propTypes = {
            onChange: _d(g).func,
            loadTimeOffset: _d(g).number,
            lazyRadius: _d(g).number,
            brushRadius: _d(g).number,
            brushColor: _d(g).string,
            catenaryColor: _d(g).string,
            gridColor: _d(g).string,
            backgroundColor: _d(g).string,
            hideGrid: _d(g).bool,
            canvasWidth: o,
            canvasHeight: o,
            disabled: _d(g).bool,
            imgSrc: _d(g).string,
            saveData: _d(g).string,
            immediateLoading: _d(g).bool,
            hideInterface: _d(g).bool
        }, d.defaultProps = {
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
        }, e);
}), a.register('zLe8d', function(b, _c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.LazyPoint = b.exports.Point = b.exports.LazyBrush = void 0;
    var _d = _g(a('FRnen')),
        e = _g(a('h47sz')),
        f = _g(a('S5xHb'));

    function _g(h) {
        return h && h.__esModule ? h : {
            default: h
        };
    }
    b.exports.LazyBrush = _d.default, b.exports.Point = e.default, b.exports.LazyPoint = f.default;
}), a.register('FRnen', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    var d, e = function() {
            function f(g, h) {
                for (var i = 0; i < h.length; i++) {
                    var j = h[i];
                    j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
                }
            }
            return function(f, g, h) {
                return g && b(f.prototype, g), h && b(f, h), f;
            };
        }(),
        f = a('S5xHb'),
        g = (d = f) && d.__esModule ? d : {
            default: d
        };

    function h(i, j) {
        if (!(i instanceof j))
            throw new TypeError('Cannot call a class as a function');
    }
    var h = function() {
        function i() {
            var j = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                k = j.radius,
                l = void 0 === k ? 30 : k,
                m = j.enabled,
                n = void 0 === m || m,
                o = j.initialPoint,
                p = void 0 === o ? {
                    x: 0,
                    y: 0
                } : o;
            _h(this, i), this.radius = l, this._isEnabled = n, this.pointer = new g.default(p.x, p.y), this.brush = new g.default(p.x, p.y), this.angle = 0, this.distance = 0, this._hasMoved = !1;
        }
        return e(b, [{
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
                value: function(i) {
                    this.radius = i;
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
                value: function(i) {
                    var j = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        k = j.both,
                        l = void 0 !== k && k;
                    return this._hasMoved = !1, !(this.pointer.equalsTo(i) && !l) && (this.pointer.update(i), l ? (this._hasMoved = !0, this.brush.update(i), !0) : (this._isEnabled ? (this.distance = this.pointer.getDistanceTo(this.brush), this.angle = this.pointer.getAngleTo(this.brush), this.distance > this.radius && (this.brush.moveByAngle(this.angle, this.distance - this.radius), this._hasMoved = !0)) : (this.distance = 0, this.angle = 0, this.brush.update(i), this._hasMoved = !0), !0));
                }
            }
        ]), b;
    }();
    b.exports.default = h;
}), a.register('S5xHb', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    var d, e = function() {
            function f(g, h) {
                for (var i = 0; i < h.length; i++) {
                    var j = h[i];
                    j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
                }
            }
            return function(f, g, h) {
                return g && b(f.prototype, g), h && b(f, h), f;
            };
        }(),
        f = a('h47sz'),
        g = (d = f) && d.__esModule ? d : {
            default: d
        };

    function _h(i, j) {
        if (!(i instanceof j))
            throw new TypeError('Cannot call a class as a function');
    }

    function h(i, j) {
        if (!i)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return !j || 'object' != typeof j && 'function' != typeof j ? i : j;
    }
    var h = function(i) {
        function j() {
            return _h(this, j), _h(this, (j.__proto__ || Object.getPrototypeOf(j)).apply(this, arguments));
        }
        return function(j, k) {
            if ('function' != typeof k && null !== k)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof k);
            j.prototype = Object.create(k && k.prototype, {
                constructor: {
                    value: j,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), k && (Object.setPrototypeOf ? Object.setPrototypeOf(j, k) : j.__proto__ = k);
        }(c, i), e(c, [{
                key: 'update',
                value: function(j) {
                    this.x = j.x, this.y = j.y;
                }
            },
            {
                key: 'moveByAngle',
                value: function(j, k) {
                    var l = j + Math.PI / 2;
                    this.x = this.x + Math.sin(l) * k, this.y = this.y - Math.cos(l) * k;
                }
            },
            {
                key: 'equalsTo',
                value: function(j) {
                    return this.x === j.x && this.y === j.y;
                }
            },
            {
                key: 'getDifferenceTo',
                value: function(j) {
                    return new g.default(this.x - j.x, this.y - j.y);
                }
            },
            {
                key: 'getDistanceTo',
                value: function(j) {
                    var k = this.getDifferenceTo(j);
                    return Math.sqrt(Math.pow(k.x, 2) + Math.pow(k.y, 2));
                }
            },
            {
                key: 'getAngleTo',
                value: function(j) {
                    var k = this.getDifferenceTo(j);
                    return Math.atan2(k.y, k.x);
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
        ]), c;
    }(g.default);
    b.exports.default = h;
}), a.register('h47sz', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    b.exports.default = function b(d, e) {
        ! function(f, g) {
            if (!(f instanceof g))
                throw new TypeError('Cannot call a class as a function');
        }(this, b), this.x = d, this.y = e;
    };
}), a.register('Alxfy', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.Point = b.exports.Catenary = void 0;
    var d = _f(a('1Fhn+')),
        e = _f(a('wmcmX'));

    function _f(g) {
        return g && g.__esModule ? g : {
            default: g
        };
    }
    b.exports.Catenary = d.default, b.exports.Point = e.default;
}), a.register('1Fhn+', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    var d, e = function() {
            function f(g, h) {
                for (var i = 0; i < h.length; i++) {
                    var j = h[i];
                    j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
                }
            }
            return function(f, g, h) {
                return g && b(f.prototype, g), h && b(f, h), f;
            };
        }(),
        f = a('wmcmX'),
        g = (d = f) && d.__esModule ? d : {
            default: d
        };

    function _h(i, j) {
        if (!(i instanceof j))
            throw new TypeError('Cannot call a class as a function');
    }
    var _h = function() {
        function i() {
            var j = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                k = j.segments,
                l = void 0 === k ? 50 : k,
                m = j.iterationLimit,
                n = void 0 === m ? 100 : m;
            _p(this, i), this.p1 = new g.default(), this.p2 = new g.default(), this.segments = l, this.iterationLimit = n;
        }
        return e(b, [{
                key: 'drawToCanvas',
                value: function(i, j, k, l) {
                    this.p1.update(j), this.p2.update(k);
                    var m = this.p1.x > this.p2.x,
                        n = m ? this.p2 : this.p1,
                        o = m ? this.p1 : this.p2,
                        _p = [],
                        q = !0;
                    if (n.getDistanceTo(o) < l)
                        if (o.x - n.x > 0.01) {
                            var r = o.x - n.x,
                                s = o.y - n.y,
                                t = -this.getCatenaryParameter(r, s, l, this.iterationLimit),
                                u = 0.5 * (t * Math.log((l + s) / (l - s)) - r),
                                v = t * Math.cosh(u / t),
                                _w = n.x - u,
                                x = n.y - v;
                            _p = this.getCurve(t, n, o, _w, x, this.segments), q = !1;
                        } else {
                            var r = 0.5 * (n.x + o.x),
                                s = 0.5 * (n.y + o.y + l);
                            _p = [
                                [
                                    n.x,
                                    n.y
                                ],
                                [
                                    r,
                                    s
                                ],
                                [
                                    o.x,
                                    o.y
                                ]
                            ];
                        }
                    else
                        _p = [
                            [
                                n.x,
                                n.y
                            ],
                            [
                                o.x,
                                o.y
                            ]
                        ];
                    return q ? this.drawLine(_p, i) : this.drawCurve(_p, i), _p;
                }
            },
            {
                key: 'getCatenaryParameter',
                value: function(i, j, k, l) {
                    for (var m = Math.sqrt(k * k - j * j) / i, n = Math.acosh(m) + 1, o = -1, p = 0; Math.abs(n - o) > 0.000001 && p < l;)
                        o = n, n -= (Math.sinh(n) - m * n) / (Math.cosh(n) - m), p++;
                    return i / (2 * n);
                }
            },
            {
                key: 'getCurve',
                value: function(i, j, k, l, m, n) {
                    for (var o = [
                            j.x,
                            i * Math.cosh((j.x - l) / i) + m
                        ], p = k.x - j.x, q = n - 1, r = 0; r < q; r++) {
                        var s = j.x + p * (r + 0.5) / q,
                            t = i * Math.cosh((s - l) / i) + m;
                        o.push(s, t);
                    }
                    return o.push(k.x, i * Math.cosh((k.x - l) / i) + m), o;
                }
            },
            {
                key: 'drawLine',
                value: function(i, j) {
                    j.moveTo(i[0][0], i[0][1]), j.lineTo(i[1][0], i[1][1]);
                }
            },
            {
                key: 'drawCurve',
                value: function(i, j) {
                    var k = 0.5 * i.length - 1,
                        l = i[2],
                        m = i[3],
                        n = [];
                    j.moveTo(i[0], i[1]);
                    for (var o = 2; o < k; o++) {
                        var p = i[2 * o],
                            q = i[2 * o + 1],
                            r = 0.5 * (p + l),
                            s = 0.5 * (q + m);
                        n.push([
                            l,
                            m,
                            r,
                            s
                        ]), j.quadraticCurveTo(l, m, r, s), l = p, m = q;
                    }
                    return k = i.length, j.quadraticCurveTo(i[k - 4], i[k - 3], i[k - 2], i[k - 1]), n;
                }
            }
        ]), b;
    }();
    b.exports.default = _h;
}), a.register('wmcmX', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    var d = function() {
        function e(f, g) {
            for (var h = 0; h < g.length; h++) {
                var i = g[h];
                i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(f, i.key, i);
            }
        }
        return function(e, f, g) {
            return f && b(e.prototype, f), g && b(e, g), e;
        };
    }();
    var e = function() {
        function f(g, h) {
            ! function(i, j) {
                if (!(i instanceof j))
                    throw new TypeError('Cannot call a class as a function');
            }(this, f), this.x = g, this.y = h;
        }
        return d(b, [{
                key: 'update',
                value: function(f) {
                    this.x = f.x, this.y = f.y;
                }
            },
            {
                key: 'getDifferenceTo',
                value: function(f) {
                    return new b(this.x - f.x, this.y - f.y);
                }
            },
            {
                key: 'getDistanceTo',
                value: function(f) {
                    var g = this.getDifferenceTo(f);
                    return Math.sqrt(Math.pow(g.x, 2) + Math.pow(g.y, 2));
                }
            }
        ]), b;
    }();
    b.exports.default = e;
}), a.register('P84Od', function(b, c) {
    function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            f = e.ctx,
            g = e.img,
            h = e.x,
            i = e.y,
            j = e.w,
            k = e.h,
            l = e.offsetX,
            m = e.offsetY;
        'number' != typeof h && (h = 0), 'number' != typeof i && (i = 0), 'number' != typeof j && (j = f.canvas.width), 'number' != typeof k && (k = f.canvas.height), 'number' != typeof l && (l = 0.5), 'number' != typeof m && (m = 0.5), l < 0 && (l = 0), m < 0 && (m = 0), l > 1 && (l = 1), m > 1 && (m = 1);
        var n, o, p, q, r = g.width,
            s = g.height,
            t = Math.min(j / r, k / s),
            u = r * t,
            v = s * t,
            w = 1;
        u < j && (w = j / u), Math.abs(w - 1) < 1e-14 && v < k && (w = k / v), (n = (r - (p = r / ((u *= w) / j))) * l) < 0 && (n = 0), (o = (s - (q = s / ((v *= w) / k))) * m) < 0 && (o = 0), p > r && (p = r), q > s && (q = s), f.drawImage(g, n, o, p, q, h, i, j, k);
    }
    _p(b.exports, 'default', function() {
        return a;
    });
}), a.register('heOfl', function(b, c) {
    _p(b.exports, 'default', function() {
        return _u;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('pECMN'),
        g = a('QWK7i'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('LxU5h'),
        k = a('jlhuE');
    let l, m, n, o = b => b;
    const p = i.default.div(l || (l = o`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
`)),
        q = i.default.div(m || (m = o`
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
`), g.default.DisabledGray, g.default.White),
        r = i.default.div(n || (n = o`
  cursor: pointer;
  font-size: 35px;
  background: ${ 0 };
  color: ${ 0 };
  padding: 5px;
  border-radius: 6px;
`), b => b.enabled ? '#E0E0E0' : 'transparent', b => b.customColor ? b.customColor : g.default.Black),
        s = {
            borderColor: g.default.Black,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '50%'
        };
    class t extends h.Component {
        render() {
            if (!this.props.show)
                return null;
            const {
                drawState: u
            } = this.props;
            return (0, e.jsx)(p, {
                children: (0, e.jsxs)(q, {
                    children: [
                        (0, e.jsx)(r, {
                            customColor: j.defaultDrawingColor,
                            enabled: u.brushColor === (0, j.defaultDrawingColor)(),
                            onClick: this.changeToDefaultColor,
                            children: (0, e.jsx)(f.default, {
                                name: 'fas fa-circle',
                                style: s
                            })
                        }),
                        (0, e.jsx)(r, {
                            onClick: this.changeToSecondaryColor,
                            enabled: u.brushColor === (0, j.secondaryDrawingColor)(),
                            customColor: (0, j.secondaryDrawingColor)(),
                            children: (0, e.jsx)(f.default, {
                                name: 'fas fa-circle',
                                style: s
                            })
                        }),
                        (0, e.jsx)('div', {
                            style: {
                                height: 35,
                                width: 5,
                                background: g.default.DisabledGray,
                                marginLeft: 10,
                                marginRight: 10
                            }
                        }),
                        (0, e.jsx)(r, {
                            onClick: this.changeToPen,
                            enabled: u.brushColor !== (0, j.backgroundCanvasColor)() && u.brushSize === k.default.pen,
                            children: (0, e.jsx)(f.default, {
                                name: 'fas fa-pen'
                            })
                        }),
                        (0, e.jsx)(r, {
                            onClick: this.changeToMarker,
                            enabled: u.brushColor !== (0, j.backgroundCanvasColor)() && u.brushSize === k.default.marker,
                            children: (0, e.jsx)(f.default, {
                                name: 'fas fa-marker'
                            })
                        }),
                        (0, e.jsx)(r, {
                            onClick: this.props.changeToEraser,
                            enabled: u.brushColor === (0, j.backgroundCanvasColor)(),
                            children: (0, e.jsx)(f.default, {
                                name: 'fas fa-eraser'
                            })
                        })
                    ]
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'changeToDefaultColor', () => this.props.changeColor((0, j.defaultDrawingColor)())), (0, d.default)(this, 'changeToSecondaryColor', () => this.props.changeColor((0, j.secondaryDrawingColor)())), (0, d.default)(this, 'changeToPen', () => this.props.changeSize(k.default.pen)), (0, d.default)(this, 'changeToMarker', () => this.props.changeSize(k.default.marker));
        }
    }
    var _u = t;
}), a.register('jlhuE', function(b, c) {
    _p(b.exports, 'default', function() {
        return a;
    });
    var d = {
        pen: 8,
        marker: 18,
        eraser: 18
    };
}), a.register('OcP/P', function(b, c) {
    _p(b.exports, 'default', function() {
        return _A;
    });
    var d = a('0hzx+'),
        e = a('pECMN'),
        f = a('RYc37'),
        g = a('QWK7i'),
        h = a('ziKcb'),
        i = a('GT7Vh');
    a('LEQ5w');
    var j = a('Axq+p'),
        k = a('LxU5h'),
        l = a('b3ci8');
    let m, n, o, p, q, r, s = b => b;
    const t = j.default.div(m || (m = s`
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
`), h.default.basic, () => (0, i.darken)(0.3, (0, k.backgroundCanvasColor)()), g.default.White),
        u = j.default.div(n || (n = s`
  font-size: 37px;
  margin-bottom: 4px;
`)),
        v = j.default.div(o || (o = s`
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
`), h.default.basic),
        w = j.default.div(p || (p = s`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
`)),
        x = j.default.div(q || (q = s`
  font-size: 20px;
`)),
        y = j.default.div(r || (r = s`
  color: rgba(255, 255, 255, 0.6);
  font-size: 17px;
  margin-top: 2px;
`)),
        z = b => (0, d.jsxs)(v, {
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 31,
                        flexShrink: 0
                    },
                    children: (0, d.jsx)(e.default, {
                        name: b.icon
                    })
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginLeft: 15
                    },
                    children: (0, d.jsx)(f.default, {
                        text: b.message
                    })
                })
            ]
        });
    var _A = () => (0, d.jsxs)(t, {
        children: [
            (0, d.jsx)(u, {
                children: (0, d.jsx)(f.default, {
                    text: (0, l.inImposterMode)() ? 'Ready for liftoff?' : 'Get ready...'
                })
            }),
            (0, l.inLavaMode)() ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(z, {
                        icon: 'fas fa-volcano',
                        message: 'The lava is rising...'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fas fa-building',
                        message: 'Work together to keep your building above the lava'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fas fa-shopping-bag',
                        message: 'Purchase builds in the shop'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fas fa-star',
                        message: 'Survive as long as you can'
                    })
                ]
            }) : (0, l.inImposterMode)() ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(z, {
                        icon: 'fa fa-user-astronaut',
                        message: 'Crewmates: run investigations and collect evidence to vote the impostors off the ship!'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fa fa-user-secret',
                        message: 'Impostors: sabotage crewmate investigations and blend in. Try not to get voted off!'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fa fa-info-circle',
                        message: 'We\'ll reveal your role once we liftoff.'
                    })
                ]
            }) : (0, l.inDrawMode)() ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(z, {
                        icon: 'fa fa-question-circle',
                        message: 'For each round, guess the term being drawn!'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fa fa-chart-line',
                        message: 'Gain points by guessing correctly.'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fa fa-trophy',
                        message: 'Have the most points by the end to be declared the winner!'
                    })
                ]
            }) : (0, l.inPardyMode)() ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(z, {
                        icon: 'far fa-money-bill-alt',
                        message: 'For each round, answer the question correctly to earn cash!'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fas fa-bolt',
                        message: 'Pick a power that fits your play-style to come out on top.'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fas fa-sack-dollar',
                        message: 'Make your final bet in The Finale!'
                    })
                ]
            }) : (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(z, {
                        icon: 'far fa-money-bill-alt',
                        message: 'Answer questions to earn cash'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fas fa-shopping-cart',
                        message: 'Purchase upgrades and powerups with your cash'
                    }),
                    (0, d.jsx)(z, {
                        icon: 'fas fa-level-up-alt',
                        message: 'Earn cash faster!'
                    })
                ]
            }),
            (0, d.jsxs)(w, {
                children: [
                    (0, d.jsx)(x, {
                        children: (0, d.jsx)(f.default, {
                            text: 'You can draw while you\'re waiting!'
                        })
                    }),
                    (0, d.jsx)(y, {
                        children: (0, d.jsx)(f.default, {
                            text: 'Click/tap here to draw!'
                        })
                    })
                ]
            })
        ]
    });
}), a.register('l2Y8H', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('TBMFr'),
        f = a('QWK7i'),
        g = a('9FYKI'),
        h = a('ziKcb');
    a('LEQ5w');
    var i = a('Axq+p'),
        j = a('vJrOE');
    let k, l, m, n = b => b;
    var _o = b => {
        const {
            tag: _p,
            header: q,
            image: r,
            description: s
        } = b.item;
        let t = !1;
        if ((_p || q || r || s) && (t = !0), !t)
            return null;
        return (0, d.jsxs)(_p, {
            onClick: b => {
                b.stopPropagation();
            },
            children: [
                _p && (0, d.jsx)(e.default, {
                    color: 'secondary',
                    style: {
                        marginBottom: 10,
                        fontWeight: 900
                    },
                    label: _p
                }),
                q && (0, d.jsx)(_q, {
                    children: q
                }),
                r && (0, d.jsx)('img', {
                    src: r,
                    style: {
                        maxWidth: '100%',
                        maxHeight: 170,
                        borderRadius: 5,
                        boxShadow: h.default.basic,
                        marginBottom: s ? 10 : 0,
                        marginTop: q || _p ? 10 : 0
                    }
                }),
                s && (0, d.jsx)(_r, {
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                })
            ]
        });
    };
    const _p = i.default.div(k || (k = n`
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
`), () => j.ITEM_MAX_WIDTH, h.default.basic, f.default.White, g.default.mainFontName),
        _q = i.default.div(l || (l = n`
  font-size: 28px;
  font-weight: bold;
`)),
        _r = i.default.div(m || (m = n`
  font-weight: normal;
  font-family: ${ 0 };
  font-size: 16px;
  margin-top: 10px;
  text-align: left;
`), g.default.name);
}), a.register('TBMFr', function(b, c) {
    _p(b.exports, 'default', function() {
        return _v;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('tbQRB'),
        i = a('QvROH'),
        j = a('awqIe'),
        k = a('hZetO'),
        l = a('mmS5q'),
        m = a('+4L0f');

    function n(o) {
        return 'Backspace' === o.key || 'Delete' === o.key;
    }
    var n = f.forwardRef(function(o, _p) {
            var q = o.avatar,
                r = o.classes,
                s = o.className,
                t = o.clickable,
                u = o.color,
                _v = void 0 === u ? 'default' : u,
                w = o.component,
                x = o.deleteIcon,
                y = o.disabled,
                z = void 0 !== y && y,
                A = o.icon,
                B = o.label,
                C = o.onClick,
                D = o.onDelete,
                E = o.onKeyDown,
                F = o.onKeyUp,
                G = o.size,
                H = void 0 === G ? 'medium' : G,
                I = o.variant,
                J = void 0 === I ? 'default' : I,
                K = (0, e.default)(o, [
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
                L = f.useRef(null),
                M = (0, k.default)(L, _p),
                N = function(O) {
                    O.stopPropagation(), D && D(O);
                },
                O = !(!1 === t || !C) || t,
                P = 'small' === H,
                Q = w || (O ? m.default : 'div'),
                R = Q === m.default ? {
                    component: 'div'
                } : {},
                S = null;
            if (D) {
                var T = (0, g.default)('default' !== _v && ('default' === J ? r['deleteIconColor'.concat((0, l.default)(_v))] : r['deleteIconOutlinedColor'.concat((0, l.default)(_v))]), P && r.deleteIconSmall);
                S = x && f.isValidElement(x) ? f.cloneElement(x, {
                    className: (0, g.default)(x.props.className, r.deleteIcon, T),
                    onClick: N
                }) : f.createElement(h.default, {
                    className: (0, g.default)(r.deleteIcon, T),
                    onClick: N
                });
            }
            var T = null;
            q && f.isValidElement(q) && (T = f.cloneElement(q, {
                className: (0, g.default)(r.avatar, q.props.className, P && r.avatarSmall, 'default' !== _v && r['avatarColor'.concat((0, l.default)(_v))])
            }));
            var U = null;
            return A && f.isValidElement(A) && (U = f.cloneElement(A, {
                className: (0, g.default)(r.icon, A.props.className, P && r.iconSmall, 'default' !== _v && r['iconColor'.concat((0, l.default)(_v))])
            })), f.createElement(Q, (0, d.default)({
                role: O || D ? 'button' : void 0,
                className: (0, g.default)(r.root, s, 'default' !== _v && [
                    r['color'.concat((0, l.default)(_v))],
                    O && r['clickableColor'.concat((0, l.default)(_v))],
                    D && r['deletableColor'.concat((0, l.default)(_v))]
                ], 'default' !== J && [
                    r.outlined,
                    {
                        primary: r.outlinedPrimary,
                        secondary: r.outlinedSecondary
                    } [_v]
                ], z && r.disabled, P && r.sizeSmall, O && r.clickable, D && r.deletable),
                'aria-disabled': !!z || void 0,
                tabIndex: O || D ? 0 : void 0,
                onClick: C,
                onKeyDown: function(V) {
                    V.currentTarget === V.target && _n(V) && V.preventDefault(), E && E(V);
                },
                onKeyUp: function(V) {
                    V.currentTarget === V.target && (D && _n(V) ? D(V) : 'Escape' === V.key && L.current && L.current.blur()), F && F(V);
                },
                ref: M
            }, R, K), T || U, f.createElement('span', {
                className: (0, g.default)(r.label, P && r.labelSmall)
            }, B), S);
        }),
        o = (0, i.default)(function(p) {
            var q = 'light' === p.palette.type ? p.palette.grey[300] : p.palette.grey[700],
                r = (0, j.fade)(p.palette.text.primary, 0.26);
            return {
                root: {
                    fontFamily: p.typography.fontFamily,
                    fontSize: p.typography.pxToRem(13),
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 32,
                    color: p.palette.getContrastText(q),
                    backgroundColor: q,
                    borderRadius: 16,
                    whiteSpace: 'nowrap',
                    transition: p.transitions.create([
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
                        color: 'light' === p.palette.type ? p.palette.grey[700] : p.palette.grey[300],
                        fontSize: p.typography.pxToRem(12)
                    },
                    '& $avatarColorPrimary': {
                        color: p.palette.primary.contrastText,
                        backgroundColor: p.palette.primary.dark
                    },
                    '& $avatarColorSecondary': {
                        color: p.palette.secondary.contrastText,
                        backgroundColor: p.palette.secondary.dark
                    },
                    '& $avatarSmall': {
                        marginLeft: 4,
                        marginRight: -4,
                        width: 18,
                        height: 18,
                        fontSize: p.typography.pxToRem(10)
                    }
                },
                sizeSmall: {
                    height: 24
                },
                colorPrimary: {
                    backgroundColor: p.palette.primary.main,
                    color: p.palette.primary.contrastText
                },
                colorSecondary: {
                    backgroundColor: p.palette.secondary.main,
                    color: p.palette.secondary.contrastText
                },
                disabled: {},
                clickable: {
                    userSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                    cursor: 'pointer',
                    '&:hover, &:focus': {
                        backgroundColor: (0, j.emphasize)(q, 0.08)
                    },
                    '&:active': {
                        boxShadow: p.shadows[1]
                    }
                },
                clickableColorPrimary: {
                    '&:hover, &:focus': {
                        backgroundColor: (0, j.emphasize)(p.palette.primary.main, 0.08)
                    }
                },
                clickableColorSecondary: {
                    '&:hover, &:focus': {
                        backgroundColor: (0, j.emphasize)(p.palette.secondary.main, 0.08)
                    }
                },
                deletable: {
                    '&:focus': {
                        backgroundColor: (0, j.emphasize)(q, 0.08)
                    }
                },
                deletableColorPrimary: {
                    '&:focus': {
                        backgroundColor: (0, j.emphasize)(p.palette.primary.main, 0.2)
                    }
                },
                deletableColorSecondary: {
                    '&:focus': {
                        backgroundColor: (0, j.emphasize)(p.palette.secondary.main, 0.2)
                    }
                },
                outlined: {
                    backgroundColor: 'transparent',
                    border: '1px solid '.concat('light' === p.palette.type ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
                    '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
                        backgroundColor: (0, j.fade)(p.palette.text.primary, p.palette.action.hoverOpacity)
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
                    color: p.palette.primary.main,
                    border: '1px solid '.concat(p.palette.primary.main),
                    '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
                        backgroundColor: (0, j.fade)(p.palette.primary.main, p.palette.action.hoverOpacity)
                    }
                },
                outlinedSecondary: {
                    color: p.palette.secondary.main,
                    border: '1px solid '.concat(p.palette.secondary.main),
                    '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
                        backgroundColor: (0, j.fade)(p.palette.secondary.main, p.palette.action.hoverOpacity)
                    }
                },
                avatar: {},
                avatarSmall: {},
                avatarColorPrimary: {},
                avatarColorSecondary: {},
                icon: {
                    color: 'light' === p.palette.type ? p.palette.grey[700] : p.palette.grey[300],
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
                    color: r,
                    height: 22,
                    width: 22,
                    cursor: 'pointer',
                    margin: '0 5px 0 -6px',
                    '&:hover': {
                        color: (0, j.fade)(r, 0.4)
                    }
                },
                deleteIconSmall: {
                    height: 16,
                    width: 16,
                    marginRight: 4,
                    marginLeft: -4
                },
                deleteIconColorPrimary: {
                    color: (0, j.fade)(p.palette.primary.contrastText, 0.7),
                    '&:hover, &:active': {
                        color: p.palette.primary.contrastText
                    }
                },
                deleteIconColorSecondary: {
                    color: (0, j.fade)(p.palette.secondary.contrastText, 0.7),
                    '&:hover, &:active': {
                        color: p.palette.secondary.contrastText
                    }
                },
                deleteIconOutlinedColorPrimary: {
                    color: (0, j.fade)(p.palette.primary.main, 0.7),
                    '&:hover, &:active': {
                        color: p.palette.primary.main
                    }
                },
                deleteIconOutlinedColorSecondary: {
                    color: (0, j.fade)(p.palette.secondary.main, 0.7),
                    '&:hover, &:active': {
                        color: p.palette.secondary.main
                    }
                }
            };
        }, {
            name: 'MuiChip'
        })(n);
}), a.register('tbQRB', function(b, c) {
    _i(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('0ZXN1').default)(d.createElement('path', {
            d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
        }), 'Cancel');
}), a.register('0ZXN1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('r98tK1'),
        e = a('LEQ5w'),
        f = a('h+POK');

    function _g(h, _i) {
        var j = function(k, l) {
            return _c(e).createElement(f.default, (0, d.default)({
                ref: l
            }, k), h);
        };
        return j.muiName = f.default.muiName, _c(e).memo(_c(e).forwardRef(j));
    }
}), a.register('oybzR', function(b, _c) {
    _k(b.exports, 'default', function() {
        return _m;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('E9ysS'),
        g = a('b3ci8'),
        h = a('YuT/D'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('6XgQB1');
    let l = class extends j.Component {
        componentDidMount() {
            (0, h.when)(() => this.props.gameValues.gameStatus === k.GameStatus.gameplay || this.props.gameValues.gameStatus === k.GameStatus.teams || this.props.gameValues.gameStatus === k.GameStatus.results, () => {
                this.props.gameValues.gameStatus !== k.GameStatus.teams ? this.props.gameValues.gameStatus !== k.GameStatus.results ? (0, g.startGame)() : (0, g.changeRoute)(f.default.gameOver) : (0, g.changeRoute)(f.default.team);
            }, {});
        }
        render() {
            return null;
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                hasCalledStart: !1
            });
        }
    };
    l = (0, e.__decorate)([
        (0, i.inject)('gameValues', 'gameOptions'),
        i.observer
    ], l);
    var _m = l;
}), a.register('Q67Mk', function(b, c) {
    _k(b.exports, 'default', function() {
        return _y;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('QWK7i'),
        h = a('PgtY7'),
        i = a('gvR51'),
        j = a('LKC0u'),
        k = a('d+C1q'),
        l = a('K6chi'),
        m = a('E9ysS'),
        _n = a('I+0AY'),
        o = a('b3ci8'),
        p = a('2x11J'),
        q = a('LEQ5w'),
        r = a('haZfi'),
        s = a('/yxva'),
        t = a('h3nRr'),
        u = a('1TW/H'),
        v = a('aoMfm');
    a('KOgpv');
    var w = a('8Wc8V');
    let x = class extends q.Component {
        componentDidMount() {
            (0, o.blockShopping)() && (0, o.changeRoute)(m.default.questions);
        }
        render() {
            return (0, f.jsx)(h.Container, {
                customBackground: g.default.White,
                children: this.getContent()
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'changeShopTab', b => {
                _n.click2.play(), this.props.navigation.currentShopTab = b;
            }), (0, d.default)(this, 'getContent', () => {
                return (0, o.inQrScanMode)() ? (0, f.jsx)(t.default, {}) : (0, o.inImposterMode)() ? (0, f.jsx)(v.default, {}) : (0, f.jsxs)(f.Fragment, {
                    children: [
                        (b = this.props.navigation.currentShopTab, b === r.ShopTab.upgrades ? (0, f.jsx)(l.default, {}) : b === r.ShopTab.powerups ? (0, f.jsx)(j.default, {}) : b === r.ShopTab.defendingHomebase ? (0, f.jsx)(s.default, {}) : b === r.ShopTab.lava ? (0, f.jsx)(u.default, {}) : b === r.ShopTab.powerupsNonMusic ? (0, f.jsx)(j.default, {
                            hidePowerup: b => !(!b.category || !b.category.includes(w.PowerupCategory.specialSound))
                        }) : b === r.ShopTab.powerupsMusic ? (0, f.jsx)(j.default, {
                            hidePowerup: b => !b.category || !b.category.includes(w.PowerupCategory.specialSound)
                        }) : (0, f.jsx)(k.default, {})),
                        (0, f.jsx)(i.default, {
                            changeShopTab: this.changeShopTab,
                            value: this.props.navigation.currentShopTab
                        })
                    ]
                });
                var y;
            });
        }
    };
    x = (0, e.__decorate)([
        (0, p.inject)('navigation'),
        p.observer
    ], x);
    var _y = x;
}), a.register('gvR51', function(b, c) {
    _k(b.exports, 'default', function() {
        return _w;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('PGEBa'),
        h = a('GSmpf'),
        i = a('EJd0t'),
        j = a('eyKVC'),
        k = a('grsaj'),
        l = a('Sc5P8'),
        m = a('BlV95'),
        n = a('i8vUP'),
        o = a('RYc37'),
        p = a('b3ci8'),
        q = a('2x11J'),
        r = a('LEQ5w'),
        s = a('haZfi');
    let t;
    const u = (0, a('Axq+p').default)(g.default)(t || (t = (b => b)`
  height: 68px !important;
  border-top-color: rgba(0, 0, 0, 0.6);
  border-top-style: solid;
  border-top-width: 2px;
`));
    let v = class extends r.Component {
        render() {
            return (0, f.jsxs)(u, {
                value: this.props.value,
                onChange: this.handleTabChange,
                style: {
                    zIndex: 0
                },
                showLabels: !0,
                children: [
                    (0, p.inLavaMode)() && (0, f.jsx)(h.default, {
                        label: (0, f.jsx)(o.default, {
                            text: 'Build'
                        }),
                        icon: (0, f.jsx)(i.default, {}),
                        value: s.ShopTab.lava
                    }),
                    (0, p.inZombiesVsHumansMode)() && (0, f.jsx)(h.default, {
                        label: (0, f.jsx)(o.default, {
                            text: 'Home'
                        }),
                        icon: (0, f.jsx)(k.default, {}),
                        value: s.ShopTab.defendingHomebase
                    }),
                    (0, f.jsx)(h.default, {
                        label: (0, f.jsx)(o.default, {
                            text: 'Upgrades'
                        }),
                        icon: (0, f.jsx)(n.default, {}),
                        value: s.ShopTab.upgrades
                    }),
                    this.canShowPowerups() && (0, f.jsx)(h.default, {
                        label: (0, f.jsx)(o.default, {
                            text: (0, p.inThanosMode)() ? 'Items' : 'Powerups'
                        }),
                        icon: (0, f.jsx)(m.default, {}),
                        value: s.ShopTab.powerups
                    }),
                    (0, p.inComebackMode)() && (0, f.jsx)(h.default, {
                        label: (0, f.jsx)(o.default, {
                            text: 'Powerups'
                        }),
                        icon: (0, f.jsx)(m.default, {}),
                        value: s.ShopTab.powerupsNonMusic
                    }),
                    this.props.gameOptions.music && (0, p.inComebackMode)() && (0, f.jsx)(h.default, {
                        label: (0, f.jsx)(o.default, {
                            text: 'Music'
                        }),
                        icon: (0, f.jsx)(l.default, {}),
                        value: s.ShopTab.powerupsMusic
                    }),
                    this.canShowThemes() && (0, f.jsx)(h.default, {
                        label: (0, f.jsx)(o.default, {
                            text: 'Themes'
                        }),
                        icon: (0, f.jsx)(j.default, {}),
                        value: s.ShopTab.themes
                    })
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'canShowPowerups', () => this.props.gameOptions.powerups && !(0, p.inComebackMode)()), (0, d.default)(this, 'canShowThemes', () => this.props.gameOptions.themes), (0, d.default)(this, 'handleTabChange', (b, _k) => {
                this.props.changeShopTab(_k);
            });
        }
    };
    v = (0, e.__decorate)([
        (0, q.inject)('gameOptions'),
        q.observer
    ], v);
    var _w = v;
}), a.register('PGEBa', function(b, c) {
    _k(b.exports, 'default', function() {
        return _p;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('FISDR'), a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = f.forwardRef(function(j, _k) {
            var l = j.children,
                m = j.classes,
                n = j.className,
                o = j.component,
                _p = void 0 === o ? 'div' : o,
                q = j.onChange,
                r = j.showLabels,
                s = void 0 !== r && r,
                t = j.value,
                u = (0, e.default)(j, [
                    'children',
                    'classes',
                    'className',
                    'component',
                    'onChange',
                    'showLabels',
                    'value'
                ]);
            return f.createElement(_p, (0, d.default)({
                className: (0, g.default)(m.root, n),
                ref: _k
            }, u), f.Children.map(l, function(v, w) {
                if (!f.isValidElement(v))
                    return null;
                var x = void 0 === v.props.value ? w : v.props.value;
                return f.cloneElement(v, {
                    selected: x === t,
                    showLabel: void 0 !== v.props.showLabel ? v.props.showLabel : s,
                    value: x,
                    onChange: q
                });
            }));
        }),
        j = (0, h.default)(function(k) {
            return {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    height: 56,
                    backgroundColor: k.palette.background.paper
                }
            };
        }, {
            name: 'MuiBottomNavigation'
        })(i);
}), a.register('GSmpf', function(b, c) {
    _l(b.exports, 'default', function() {
        return _q;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('+4L0f'),
        j = f.forwardRef(function(k, _l) {
            var m = k.classes,
                n = k.className,
                o = k.icon,
                p = k.label,
                _q = k.onChange,
                r = k.onClick,
                s = k.selected,
                t = k.showLabel,
                u = k.value,
                v = (0, e.default)(k, [
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
            return f.createElement(i.default, (0, d.default)({
                ref: _l,
                className: (0, g.default)(m.root, n, s ? m.selected : !t && m.iconOnly),
                focusRipple: !0,
                onClick: function(w) {
                    _q && _q(w, u), r && r(w);
                }
            }, v), f.createElement('span', {
                className: m.wrapper
            }, o, f.createElement('span', {
                className: (0, g.default)(m.label, s ? m.selected : !t && m.iconOnly)
            }, p)));
        }),
        k = (0, h.default)(function(l) {
            return {
                root: {
                    transition: l.transitions.create([
                        'color',
                        'padding-top'
                    ], {
                        duration: l.transitions.duration.short
                    }),
                    padding: '6px 12px 8px',
                    minWidth: 80,
                    maxWidth: 168,
                    color: l.palette.text.secondary,
                    flex: '1',
                    '&$iconOnly': {
                        paddingTop: 16
                    },
                    '&$selected': {
                        paddingTop: 6,
                        color: l.palette.primary.main
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
                    fontFamily: l.typography.fontFamily,
                    fontSize: l.typography.pxToRem(12),
                    opacity: 1,
                    transition: 'font-size 0.2s, opacity 0.2s',
                    transitionDelay: '0.1s',
                    '&$iconOnly': {
                        opacity: 0,
                        transitionDelay: '0s'
                    },
                    '&$selected': {
                        fontSize: l.typography.pxToRem(14)
                    }
                }
            };
        }, {
            name: 'MuiBottomNavigationAction'
        })(j);
}), a.register('EJd0t', function(b, c) {
    _D(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'
        }), 'Build');
}), a.register('eyKVC', function(b, c) {
    _D(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z'
        }), 'FormatPaint');
}), a.register('grsaj', function(b, c) {
    _D(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
        }), 'Home');
}), a.register('Sc5P8', function(b, c) {
    _D(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'
        }), 'MusicNote');
}), a.register('BlV95', function(b, c) {
    _D(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z'
        }), 'Power');
}), a.register('i8vUP', function(b, c) {
    _D(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w'),
        _e = (0, a('OO/bE').default)(_c(d).createElement('path', {
            d: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'
        }), 'TrendingUp');
}), a.register('LKC0u', function(b, _c) {
    _D(b.exports, 'default', function() {
        return _C;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('RYc37'),
        h = a('+Xge8'),
        i = a('E9ysS'),
        j = a('b3ci8'),
        k = a('2x11J'),
        l = a('LEQ5w'),
        m = a('Axq+p'),
        n = a('D7v0X');
    let o, p, q, r, s, t, u = b => b;
    var v;
    (v = t || (t = {})).treasure = 'Treaure', v.powerups = 'Powerups';
    const w = m.default.div(o || (o = u`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`)),
        x = m.default.div(p || (p = u`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 10px;
`)),
        y = m.default.h2(q || (q = u`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 700px) {
    font-size: 40px;
  }
`)),
        z = m.default.div(r || (r = u`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  flex-direction: column;
`)),
        A = m.default.img.attrs({
            src: (0, j.getAssetPath)('treasure.svg')
        })(s || (s = u`
  width: 50%;
  max-width: 250px;
  max-height: 25vh;
  cursor: pointer;
`));
    let B = class extends l.Component {
        render() {
            return (0, f.jsx)(w, {
                children: this.renderScreens()
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                showPowerupsHelperModal: !1,
                showTreasureChest: !0,
                currentScreen: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.powerupRNGAnimationDone ? t.treasure : t.powerups
            }), (0, d.default)(this, 'renderScreens', () => {
                const {
                    currentScreen: C
                } = this.state;
                let _D = null;
                return C === t.treasure ? _D = this.treasureChestScreen() : C === t.powerups && (_D = this.powerupsScreen()), _D;
            }), (0, d.default)(this, 'treasureChestScreen', () => (0, f.jsxs)(z, {
                className: !this.state.showTreasureChest && 'animated fadeOut',
                children: [
                    (0, f.jsx)(y, {
                        children: (0, f.jsx)(g.default, {
                            text: 'Open The Treasure Chest To Unlock Your Powerups!'
                        })
                    }),
                    (0, f.jsx)(A, {
                        className: this.state.showTreasureChest ? 'animated pulse infinite' : 'animated bounceOut',
                        onClick: this.hideTreasureChest
                    })
                ]
            })), (0, d.default)(this, 'powerupsScreen', () => (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(x, {
                        className: this.props.gameOptions.enablePowerupRNGAnimation && !this.props.navigation.visitedPowerupSection ? 'animated fadeIn' : '',
                        children: this.props.powerups.availablePowerups.filter(b => !this.props.powerups.disabledPowerups.includes(b.name) && (!this.props.hidePowerup || !this.props.hidePowerup(b))).map(b => (0, f.jsx)(h.default, {
                            powerup: b,
                            openModal: this.openModal
                        }, b.name))
                    }),
                    (0, f.jsx)(n.default, {
                        open: this.state.showPowerupsHelperModal,
                        close: this.closeModal,
                        closeAndReturnToQuestions: this.closeAndReturnToQuestions
                    })
                ]
            })), (0, d.default)(this, 'hideTreasureChest', () => {
                this.props.navigation.powerupRNGAnimationDone = !0, this.setState({
                    showTreasureChest: !1
                }, () => setTimeout(() => this.setState({
                    currentScreen: t.powerups
                }, () => setTimeout(() => this.props.navigation.visitedPowerupSection = !0, 500)), 1000));
            }), (0, d.default)(this, 'openModal', () => this.setState({
                showPowerupsHelperModal: !0
            })), (0, d.default)(this, 'closeAndReturnToQuestions', () => {
                this.closeModal(), setTimeout(() => (0, j.changeRoute)(i.default.questions), 510);
            }), (0, d.default)(this, 'closeModal', () => {
                this.setState({
                    showPowerupsHelperModal: !1
                });
            });
        }
    };
    B = (0, e.__decorate)([
        (0, k.inject)('powerups', 'gameOptions', 'navigation'),
        k.observer
    ], B);
    var _C = B;
}), a.register('+Xge8', function(b, c) {
    _F(b.exports, 'default', function() {
        return _E;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('TBMFr'),
        h = a('uo5Q0'),
        i = a('pECMN'),
        j = a('RYc37'),
        k = a('ziKcb'),
        l = a('4vC7/'),
        m = a('E9ysS'),
        n = a('I+0AY'),
        o = a('b3ci8'),
        p = a('2x11J'),
        q = a('LEQ5w'),
        r = a('Axq+p');
    let s, t, u, v, w, x = b => b;
    const y = r.default.div(s || (s = x`
  box-shadow: ${ 0 };
  flex-grow: 1;
  width: 510px;
  border-radius: ${ 0 }px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`), k.default.basic, 5),
        z = r.default.div(t || (t = x`
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
`), b => b.colors.background, b => b.colors.text, 5, 5),
        A = r.default.div(u || (u = x`
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: flex-end;
`)),
        B = r.default.div(v || (v = x`
  font-weight: bold;
  font-size: 26px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`)),
        C = r.default.div(w || (w = x`
  color: rgba(0, 0, 0, 0.7);
`));
    let D = class extends q.Component {
        render() {
            const {
                powerup: E
            } = this.props, _F = this.getButtonDetails();
            return (0, f.jsxs)(y, {
                children: [
                    (0, f.jsxs)(z, {
                        colors: E.color,
                        children: [
                            (0, f.jsx)(i.default, {
                                name: E.icon
                            }),
                            E.customTag && (0, f.jsx)(g.default, {
                                style: {
                                    marginTop: 5
                                },
                                label: E.customTag
                            })
                        ]
                    }),
                    (0, f.jsxs)(A, {
                        children: [
                            (0, f.jsxs)('div', {
                                style: {
                                    marginRight: 10
                                },
                                children: [
                                    (0, f.jsx)(B, {
                                        children: (0, f.jsx)('div', {
                                            style: {
                                                marginRight: 5
                                            },
                                            children: (0, f.jsx)(j.default, {
                                                text: (0, o.getPowerupName)(E)
                                            })
                                        })
                                    }),
                                    (0, f.jsx)(C, {
                                        children: (0, f.jsx)(j.default, {
                                            text: (0, o.getPowerupDescription)(E.description)
                                        })
                                    })
                                ]
                            }),
                            (0, f.jsx)(h.default, {
                                type: _F.type,
                                label: (0, f.jsx)(j.default, {
                                    text: _F.label,
                                    disableIfContains: this.props.gameOptions.currency
                                }),
                                onClick: _F.onClick
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'getCost', () => 5 * Math.ceil((this.props.balance.balance * this.props.powerup.percentageCost + this.props.powerup.baseCost) / 5)), (0, d.default)(this, 'getButtonDetails', () => {
                const {
                    balance: E,
                    powerup: F
                } = this.props, G = this.getCost(), H = E.balance >= G && !this.props.powerups.purchasedPowerups.includes(F.name);
                return {
                    label: this.props.powerups.purchasedPowerups.includes(F.name) ? this.props.powerups.usedPowerups.includes(F.name) ? 'Used' : 'Purchased' : (0, o.getMoney)(G),
                    type: H ? 'primary' : 'disabled',
                    onClick: H ? this.purchase : null
                };
            }), (0, d.default)(this, 'purchase', () => {
                n.successClick.play(), this.props.powerups.hasShownHelperModal || this.props.powerup.autoActivate || (this.props.powerups.hasShownHelperModal = !0, this.props.openModal()), (0, o.send)(l.default.powerupPurchased, this.props.powerup.name), this.props.powerup.autoActivate && (0, o.changeRoute)(m.default.questions);
            });
        }
    };
    D = (0, e.__decorate)([
        (0, p.inject)('powerups', 'gameOptions', 'balance'),
        p.observer
    ], D);
    var _E = D;
}), a.register('D7v0X', function(b, c) {
    _G(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('uo5Q0'),
        f = a('6a8o9'),
        g = a('RYc37'),
        h = a('9FYKI'),
        i = a('ziKcb'),
        j = a('b3ci8'),
        k = a('LEQ5w'),
        l = a('Axq+p');
    let m, n, o, p = b => b;
    const q = l.default.div(m || (m = p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${ 0 };
`), h.default.name),
        r = l.default.div(n || (n = p`
  font-weight: bold;
  font-size: 29px;
`)),
        s = l.default.div(o || (o = p`
  font-size: 21px;
  text-align: center;
  margin-bottom: 15px;
`));
    class t extends k.Component {
        render() {
            return (0, d.jsx)(f.default, {
                open: this.props.open,
                close: this.props.close,
                children: (0, d.jsxs)(q, {
                    children: [
                        (0, d.jsx)(r, {
                            children: (0, d.jsx)(g.default, {
                                text: 'Powerup Purchased!'
                            })
                        }),
                        (0, d.jsx)(s, {
                            children: (0, d.jsx)(g.default, {
                                text: 'Activate your powerup via the tray menu'
                            })
                        }),
                        (0, d.jsx)('img', {
                            src: (0, j.getAssetPath)('PowerupTutorial.gif'),
                            style: {
                                maxHeight: 270,
                                borderRadius: 3,
                                boxShadow: i.default.basic,
                                marginBottom: 15
                            }
                        }),
                        (0, d.jsx)(e.default, {
                            type: 'secondary',
                            size: 'large',
                            onClick: this.props.closeAndReturnToQuestions,
                            label: (0, d.jsx)(g.default, {
                                text: 'Got It'
                            })
                        })
                    ]
                })
            });
        }
    }
    var _u = t;
}), a.register('d+C1q', function(b, c) {
    _G(b.exports, 'Container', function() {
        return _m;
    }), _G(b.exports, 'default', function() {
        return _p;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('SDtgz'),
        g = a('2x11J'),
        h = a('LEQ5w'),
        i = a('Axq+p');
    let j, k, l = b => b;
    const _m = i.default.div(j || (j = l`
  flex: 1;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`)),
        n = i.default.div(k || (k = l`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
`));
    let o = class extends h.Component {
        render() {
            const {
                theme: {
                    availableThemes: p
                }
            } = this.props;
            return (0, e.jsx)(_m, {
                children: (0, e.jsx)(n, {
                    children: p.slice().sort((p, _G) => p.cost - _G.cost).filter(p => !this.props.theme.disabledThemes.includes(p.name)).map(p => (0, e.jsx)(f.default, {
                        specifiedTheme: p
                    }, p.name))
                })
            });
        }
    };
    o = (0, d.__decorate)([
        (0, g.inject)('theme'),
        g.observer
    ], o);
    var _p = o;
}), a.register('SDtgz', function(b, c) {
    _G(b.exports, 'default', function() {
        return _F;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('uo5Q0'),
        h = a('RYc37'),
        i = a('ziKcb'),
        j = a('4vC7/'),
        k = a('E9ysS'),
        l = a('I+0AY'),
        m = a('b3ci8'),
        n = a('2x11J'),
        o = a('LEQ5w'),
        p = a('haZfi'),
        q = a('Axq+p');
    let r, s, t, u, v, w, x = b => b;
    const y = q.default.div(r || (r = x`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 470px;
  border-radius: ${ 0 }px;
  margin: 10px;
  box-shadow: ${ 0 };
`), 5, i.default.basic),
        z = q.default.div(s || (s = x`
  width: 100%;
  height: 100px;
  display: flex;
`)),
        A = q.default.div(t || (t = x`
  height: 100%;
  width: 25%;
  border-top-left-radius: ${ 0 }px;
  border-top-right-radius: ${ 0 }px;
  background: ${ 0 };
`), b => 0 === b.index ? 5 : 0, b => 3 === b.index ? 5 : 0, b => b.color),
        B = q.default.div(u || (u = x`
  border-bottom-left-radius: ${ 0 }px;
  border-bottom-right-radius: ${ 0 }px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`), 5, 5),
        C = q.default.div(v || (v = x`
  color: rgba(0, 0, 0, 0.7);
`)),
        D = q.default.div(w || (w = x`
  font-weight: bold;
  font-size: 26px;
  font-weight: bold;
`));
    let E = class extends o.Component {
        render() {
            const F = this.getButtonDetails(),
                _G = this.props.specifiedTheme;
            return (0, f.jsxs)(y, {
                children: [
                    (0, f.jsx)(z, {
                        children: _G.palette.map((F, _G) => (0, f.jsx)(A, {
                            index: _G,
                            color: F.background
                        }, F.background + _G))
                    }),
                    (0, f.jsxs)(B, {
                        children: [
                            (0, f.jsxs)('div', {
                                style: {
                                    marginRight: 10
                                },
                                children: [
                                    (0, f.jsx)(D, {
                                        children: _G.name
                                    }),
                                    (0, f.jsx)(C, {
                                        children: (0, f.jsx)(h.default, {
                                            text: _G.description
                                        })
                                    })
                                ]
                            }),
                            (0, f.jsx)(g.default, {
                                onClick: F.onClick,
                                type: F.type,
                                label: F.text
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'getButtonDetails', () => {
                if (this.ownsTheme())
                    return this.canApplyTheme() ? {
                        type: 'secondary',
                        text: (0, f.jsx)(h.default, {
                            text: 'Apply'
                        }),
                        onClick: () => {
                            l.applyTheme.play(), this.props.navigation.currentShopTab = p.ShopTab.upgrades, (0, m.send)(j.default.themeApplied, this.props.specifiedTheme.name), (0, m.changeRoute)(k.default.questions);
                        }
                    } : {
                        type: 'disabled',
                        text: (0, f.jsx)(h.default, {
                            text: 'Applied'
                        })
                    };
                const F = (0, m.getMoney)(this.props.specifiedTheme.cost);
                return this.canPurchaseTheme() ? {
                    type: 'primary',
                    text: F,
                    onClick: () => {
                        l.successClick.play(), (0, m.purchaseTheme)(this.props.specifiedTheme.name);
                    }
                } : {
                    type: 'disabled',
                    text: F
                };
            }), (0, d.default)(this, 'ownsTheme', () => this.props.theme.ownedThemes.includes(this.props.specifiedTheme.name)), (0, d.default)(this, 'canApplyTheme', () => this.ownsTheme() && this.props.theme.themeName !== this.props.specifiedTheme.name), (0, d.default)(this, 'canPurchaseTheme', () => !this.ownsTheme() && this.props.specifiedTheme.cost <= this.props.balance.balance);
        }
    };
    E = (0, e.__decorate)([
        (0, n.inject)('balance', 'theme', 'navigation'),
        n.observer
    ], E);
    var _F = E;
}), a.register('K6chi', function(b, c) {
    _r(b.exports, 'default', function() {
        return _m;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('QWK7i'),
        g = a('ZcS2Q'),
        h = a('2x11J'),
        i = a('LEQ5w');
    let j;
    const k = a('Axq+p').default.div(j || (j = (b => b)`
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
`), f.default.BackgroundGray, f.default.Black);
    let l = class extends i.Component {
        render() {
            const {
                upgrades: m
            } = this.props;
            return (0, e.jsx)(k, {
                children: m.upgrades.map((m, _r) => (0, e.jsx)(g.default, {
                    title: m.name,
                    description: m.description,
                    icon: m.icon,
                    index: _r
                }, m.name))
            });
        }
    };
    l = (0, d.__decorate)([
        (0, h.inject)('upgrades'),
        h.observer
    ], l);
    var _m = l;
}), a.register('ZcS2Q', function(b, c) {
    _r(b.exports, 'default', function() {
        return _d;
    });
    var _d = a('O//rx').default;
}), a.register('O//rx', function(b, c) {
    _r(b.exports, 'default', function() {
        return _w;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('RYc37'),
        h = a('QWK7i'),
        i = a('ziKcb'),
        j = a('qacSc'),
        k = a('E9ysS'),
        l = a('I+0AY'),
        m = a('b3ci8'),
        n = a('2x11J'),
        o = a('LEQ5w'),
        p = a('Axq+p');
    let q, r, s = b => b;
    const t = p.default.div(q || (q = s`
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
`), h.default.White, h.default.Black, i.default.basic, b => b.breakpoint),
        u = p.default.div(r || (r = s`
  margin-left: 10px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-right: 12px;
  @media (min-width: ${ 0 }px) {
    text-align: center;
  }
`), b => b.breakpoint);
    let v = class extends o.Component {
        render() {
            return (0, f.jsxs)(t, {
                onClick: this.handleClick,
                breakpoint: 700,
                children: [
                    (0, f.jsx)(j.default, {
                        index: this.props.index,
                        name: this.props.icon,
                        desktopBreakpoint: 700
                    }),
                    (0, f.jsxs)(u, {
                        breakpoint: 700,
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontWeight: 'bold',
                                    fontSize: 24
                                },
                                children: (0, f.jsx)(g.default, {
                                    text: this.props.title
                                })
                            }),
                            (0, f.jsx)('div', {
                                children: (0, f.jsx)(g.default, {
                                    text: this.props.description
                                })
                            })
                        ]
                    })
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'handleClick', () => {
                l.click.play(), this.props.upgrades.currentlySelectedUpgrade = this.props.title, (0, m.changeRoute)(k.default.upgrade);
            });
        }
    };
    v = (0, e.__decorate)([
        (0, n.inject)('upgrades'),
        n.observer
    ], v);
    var _w = v;
}), a.register('qacSc', function(b, c) {
    _r(b.exports, 'default', function() {
        return _j;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('pECMN'),
        g = a('LEQ5w');
    let h;
    const i = a('Axq+p').default.div(h || (h = (b => b)`
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
`), b => b.theme.palette[b.index].background, b => b.theme.palette[b.index].text, b => `${ b.breakpoint }px`);
    class _j extends g.Component {
        componentDidMount() {
            window.addEventListener('resize', this.updateWidth);
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.updateWidth);
        }
        render() {
            return (0, e.jsx)(i, {
                breakpoint: this.props.desktopBreakpoint,
                index: this.props.index,
                children: (0, e.jsx)(f.default, {
                    name: this.props.name
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                screenWidth: 0
            }), (0, d.default)(this, 'updateWidth', () => {
                this.setState({
                    screenWidth: window.innerWidth
                });
            });
        }
    }
}), a.register('/yxva', function(b, c) {
    _r(b.exports, 'default', function() {
        return _r;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('4vC7/'),
        h = a('E9ysS'),
        i = a('b3ci8'),
        j = a('2x11J'),
        k = a('LEQ5w'),
        l = a('Axq+p'),
        m = a('d+C1q'),
        n = a('0iO/0'),
        o = a('/rhrA');
    let p, q = class extends k.Component {
        componentDidMount() {
            (0, i.requestDefendingHomebase)(), this.checkHomebaseInterval = setInterval(() => {
                (0, i.requestDefendingHomebase)();
            }, 5000);
        }
        componentWillUnmount() {
            this.checkHomebaseInterval && clearInterval(this.checkHomebaseInterval);
        }
        render() {
            return (0, f.jsx)(m.Container, {
                style: {
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: (0, f.jsxs)(_s, {
                    children: [
                        (0, f.jsx)(n.default, {}),
                        this.props.upgrades.homebaseUpgades.map(b => {
                            const _r = this.getCost(b.baseCost, b.percentageCost),
                                s = this.props.balance.balance >= _r;
                            return (0, f.jsx)(o.default, {
                                name: b.name,
                                description: b.description,
                                cost: _r,
                                canAfford: s,
                                icon: b.icon,
                                background: b.background,
                                onClick: () => {
                                    s && ((0, i.send)(g.default.upgradeDefendingHomebase, {
                                        id: b.id
                                    }), (0, i.changeRoute)(h.default.questions));
                                }
                            }, b.id);
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                height: 20,
                                width: '100%'
                            }
                        })
                    ]
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'checkHomebaseInterval', null), (0, d.default)(this, 'getCost', (b, _t) => 5 * Math.ceil((b + _t * this.props.balance.maxBalance) / 5));
        }
    };
    q = (0, e.__decorate)([
        (0, j.inject)('upgrades', 'balance'),
        j.observer
    ], q);
    var _r = q;
    const _s = l.default.div(p || (p = (b => b)`
  width: 100%;
  max-width: 700px;
`));
}), a.register('0iO/0', function(b, c) {
    _t(b.exports, 'Container', function() {
        return _t;
    }), _t(b.exports, 'IconContainer', function() {
        return _u;
    }), _t(b.exports, 'default', function() {
        return _s;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('8aLS5'),
        g = a('pECMN'),
        h = a('RYc37'),
        i = a('QWK7i'),
        j = a('ziKcb'),
        k = a('b3ci8'),
        l = a('2x11J'),
        m = a('LEQ5w'),
        n = a('Axq+p');
    let o, p, q = b => b;
    let r = class extends m.Component {
        render() {
            const s = this.props.entities.defendingHomebase;
            return s ? (0, e.jsxs)(_t, {
                children: [
                    (0, e.jsx)(_u, {
                        colors: {
                            text: i.default.White,
                            background: s.backgroundColor
                        },
                        children: (0, e.jsx)(g.default, {
                            name: s.icon
                        })
                    }),
                    (0, e.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: [
                            (0, e.jsx)('div', {
                                style: {
                                    fontWeight: 900,
                                    fontSize: 35
                                },
                                children: (0, e.jsx)(h.default, {
                                    text: s.name
                                })
                            }),
                            (0, e.jsxs)('div', {
                                style: {
                                    fontSize: 23,
                                    marginTop: -5
                                },
                                children: [
                                    (0, k.numberWithCommas)(s.health),
                                    '/',
                                    (0, k.numberWithCommas)(s.maxHealth),
                                    ' ',
                                    (0, e.jsx)(h.default, {
                                        text: 'health'
                                    })
                                ]
                            }),
                            (0, e.jsx)(f.default, {
                                style: {
                                    width: '100%',
                                    marginTop: 5,
                                    marginBottom: 10,
                                    maxWidth: 400
                                }
                            }),
                            (0, e.jsxs)('div', {
                                children: [
                                    (0, e.jsx)(h.default, {
                                        text: 'Losing'
                                    }),
                                    ' ',
                                    (0, e.jsx)('b', {
                                        children: (0, k.numberWithCommas)((_t = s.healthDecreasePerTick, Math.round(10 * _t) / 10))
                                    }),
                                    ' ',
                                    (0, e.jsx)(h.default, {
                                        text: 'health per second'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : null;
            var _t;
        }
    };
    r = (0, d.__decorate)([
        (0, l.inject)('entities'),
        l.observer
    ], r);
    var _s = r;
    const _t = n.default.div(o || (o = q`
  margin: 20px;
  border-radius: ${ 0 }px;
  box-shadow: ${ 0 };
`), 5, j.default.basic),
        _u = n.default.div(p || (p = q`
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
`), b => b.colors.background, b => b.colors.text, 5, 5);
}), a.register('/rhrA', function(b, c) {
    _x(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('uo5Q0'),
        f = a('pECMN'),
        g = a('RYc37'),
        h = a('QWK7i'),
        i = a('ziKcb'),
        j = a('b3ci8'),
        k = a('LEQ5w'),
        l = a('Axq+p');
    let m, n, o = b => b;
    class p extends k.Component {
        render() {
            const q = this.props;
            return (0, d.jsxs)(_r, {
                style: q.style,
                children: [
                    (0, d.jsx)(_s, {
                        colors: {
                            text: h.default.White,
                            background: q.background
                        },
                        children: (0, d.jsx)(f.default, {
                            name: q.icon
                        })
                    }),
                    (0, d.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between'
                        },
                        children: [
                            (0, d.jsxs)('div', {
                                className: 'flex flex-column',
                                style: {
                                    alignItems: 'flex-start'
                                },
                                children: [
                                    q.aboveNameComponent ? q.aboveNameComponent : null,
                                    (0, d.jsx)('div', {
                                        style: {
                                            fontWeight: 900,
                                            fontSize: 25
                                        },
                                        children: (0, d.jsx)(g.default, {
                                            text: q.name
                                        })
                                    }),
                                    (0, d.jsx)('div', {
                                        children: (0, d.jsx)(g.default, {
                                            text: q.description
                                        })
                                    })
                                ]
                            }),
                            (0, d.jsx)('div', {
                                children: (0, d.jsx)(e.default, {
                                    type: q.canAfford ? 'primary' : 'disabled',
                                    size: 'medium',
                                    label: (0, j.getMoney)(q.cost),
                                    style: {
                                        marginLeft: 25
                                    },
                                    onClick: q.onClick
                                })
                            })
                        ]
                    })
                ]
            });
        }
    }
    var _q = p;
    const _r = l.default.div(m || (m = o`
  margin: 20px;
  border-radius: ${ 0 }px;
  box-shadow: ${ 0 };
`), 5, i.default.basic),
        _s = l.default.div(n || (n = o`
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
`), b => b.colors.background, b => b.colors.text, 5, 5);
}), a.register('h3nRr', function(b, c) {
    _x(b.exports, 'default', function() {
        return _x;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('QWK7i'),
        h = a('E9ysS'),
        i = a('I+0AY'),
        j = a('b3ci8'),
        k = a('2x11J'),
        l = a('LEQ5w'),
        m = a('RagEc'),
        n = a('0Nkeh'),
        o = a('Axq+p'),
        p = a('LKC0u'),
        q = a('d+C1q');
    let r, s, t = b => b;
    const u = o.default.div(r || (r = t`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${ 0 };
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
`), g.default.White),
        v = o.default.div(s || (s = t`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 9px;
`));
    let w = class extends l.Component {
        render() {
            return this.getContent();
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                showReader: !0,
                screen: ''
            }), (0, d.default)(this, 'handleScan', b => {
                if (b && JSON.parse(b)) {
                    const _x = JSON.parse(b);
                    _x.route && (i.applyTheme.play(), this.setState({
                        showReader: !1,
                        screen: _x.route
                    }, () => {
                        'moneyPerQuestion' === this.state.screen && this.onUpgradeScanned(n.upgradeNames.moneyPerQuestion), 'streakBonus' === this.state.screen && this.onUpgradeScanned(n.upgradeNames.streakBonus), 'multiplier' === this.state.screen && this.onUpgradeScanned(n.upgradeNames.multiplier), 'insurance' === this.state.screen && this.onUpgradeScanned(n.upgradeNames.insurance);
                    }));
                }
            }), (0, d.default)(this, 'getContent', () => this.state.showReader ? (0, f.jsxs)(u, {
                children: [
                    (0, f.jsx)(v, {
                        children: 'Find a KitCode to scan!'
                    }),
                    (0, f.jsx)(_d(m), {
                        onScan: this.handleScan,
                        style: {
                            width: 300,
                            height: 300
                        },
                        onError: null
                    })
                ]
            }) : 'themes' === this.state.screen ? (0, f.jsx)(q.default, {}) : 'powerups' === this.state.screen ? (0, f.jsx)(p.default, {}) : null), (0, d.default)(this, 'onUpgradeScanned', b => {
                this.props.upgrades.currentlySelectedUpgrade = b, (0, j.changeRoute)(h.default.upgrade);
            });
        }
    };
    w = (0, e.__decorate)([
        (0, k.inject)('upgrades'),
        k.observer
    ], w);
    var _x = w;
}), a.register('RagEc', function(b, c) {
    var _d, e, f = Object.assign || function(g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        },
        g = function() {
            function h(i, j) {
                for (var k = 0; k < j.length; k++) {
                    var l = j[k];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(i, l.key, l);
                }
            }
            return function(h, i, j) {
                return i && b(h.prototype, i), j && b(h, j), h;
            };
        }();
    var h = a('LEQ5w'),
        i = h.Component,
        j = a('WPpLv'),
        k = a('U/xTY'),
        l = k.getDeviceId,
        m = (k.getFacingModePattern, a('I8IBZ')),
        n = a('CA4Ie');
    a('yyH/r');
    var o = n(['!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.jsQR=e():o.jsQR=e()}("undefined"!=typeof self?self:this,function(){return function(o){function e(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return o[t].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var r={};return e.m=o,e.c=r,e.d=function(o,r,t){e.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=3)}([function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return!(o<0||o>=this.width||e<0||e>=this.height)&&!!this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c)},o}();e.BitMatrix=t},function(o,e,r){"use strict";function t(o,e){return o^e}Object.defineProperty(e,"__esModule",{value:!0});var c=r(2);e.addOrSubtractGF=t;var s=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var t=1,s=0;s<this.size;s++)this.expTable[s]=t,(t*=2)>=this.size&&(t=(t^this.primitive)&this.size-1);for(var s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new c.default(this,Uint8ClampedArray.from([0])),this.one=new c.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error("Can\'t invert 0");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error("Invalid monomial degree less than 0");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new c.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error("Can\'t take log(0)");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=s},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error("No coefficients.");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c]}}else this.coefficients=e}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){if(this.isZero())return e;if(e.isZero())return this;var r=this.coefficients,c=e.coefficients;r.length>c.length&&(n=[c,r],r=n[0],c=n[1]);for(var s=new Uint8ClampedArray(c.length),a=c.length-r.length,d=0;d<a;d++)s[d]=c[d];for(var d=a;d<c.length;d++)s[d]=t.addOrSubtractGF(r[d-a],c[d]);return new o(this.field,s);var n},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,d=new Uint8ClampedArray(c+a-1),n=0;n<c;n++)for(var l=r[n],i=0;i<a;i++)d[n+i]=t.addOrSubtractGF(d[n+i],this.field.multiply(l,s[i]));return new o(this.field,d)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error("Invalid degree less than 0");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach(function(o){e=t.addOrSubtractGF(e,o)}),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c},function(o,e,r){"use strict";function t(o){var e=n.locate(o);if(!e)return null;var r=d.extract(o,e),t=a.decode(r.matrix);return t?{binaryData:t.bytes,data:t.text,chunks:t.chunks,location:{topRightCorner:r.mappingFunction(e.dimension,0),topLeftCorner:r.mappingFunction(0,0),bottomRightCorner:r.mappingFunction(e.dimension,e.dimension),bottomLeftCorner:r.mappingFunction(0,e.dimension),topRightFinderPattern:e.topRight,topLeftFinderPattern:e.topLeft,bottomLeftFinderPattern:e.bottomLeft,bottomRightAlignmentPattern:e.alignmentPattern}}:null}function c(o,e,r,c){void 0===c&&(c={});var a=l;Object.keys(a||{}).forEach(function(o){a[o]=c[o]||a[o]});var d="attemptBoth"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,n="onlyInvert"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,i=s.binarize(o,e,r,d),B=i.binarized,k=i.inverted,u=t(n?k:B);return u||"attemptBoth"!==a.inversionAttempts&&"invertFirst"!==a.inversionAttempts||(u=t(n?B:k)),u}Object.defineProperty(e,"__esModule",{value:!0});var s=r(4),a=r(5),d=r(11),n=r(12),l={inversionAttempts:"attemptBoth"};c.default=c,e.default=c},function(o,e,r){"use strict";function t(o,e,r){return o<e?e:o>r?r:o}function c(o,e,r,c){if(o.length!==e*r*4)throw new Error("Malformed data passed to binarizer.");for(var l=new n(e,r),i=0;i<e;i++)for(var B=0;B<r;B++){var k=o[4*(B*e+i)+0],u=o[4*(B*e+i)+1],C=o[4*(B*e+i)+2];l.set(i,B,.2126*k+.7152*u+.0722*C)}for(var m=Math.ceil(e/a),f=Math.ceil(r/a),w=new n(m,f),P=0;P<f;P++)for(var v=0;v<m;v++){for(var h=0,p=1/0,y=0,B=0;B<a;B++)for(var i=0;i<a;i++){var b=l.get(v*a+i,P*a+B);h+=b,p=Math.min(p,b),y=Math.max(y,b)}var g=h/Math.pow(a,2);if(y-p<=d&&(g=p/2,P>0&&v>0)){var x=(w.get(v,P-1)+2*w.get(v-1,P)+w.get(v-1,P-1))/4;p<x&&(g=x)}w.set(v,P,g)}var M=s.BitMatrix.createEmpty(e,r),L=null;c&&(L=s.BitMatrix.createEmpty(e,r));for(var P=0;P<f;P++)for(var v=0;v<m;v++){for(var N=t(v,2,m-3),I=t(P,2,f-3),h=0,O=-2;O<=2;O++)for(var z=-2;z<=2;z++)h+=w.get(N+O,I+z);for(var S=h/25,O=0;O<a;O++)for(var z=0;z<a;z++){var i=v*a+O,B=P*a+z,X=l.get(i,B);M.set(i,B,X<=S),c&&L.set(i,B,!(X<=S))}}return c?{binarized:M,inverted:L}:{binarized:M}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(0),a=8,d=24,n=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e)}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r},o}();e.binarize=c},function(o,e,r){"use strict";function t(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function c(o,e){return e<<1|o}function s(o){var e=17+4*o.versionNumber,r=k.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,!0),r.setRegion(e-8,0,8,9,!0),r.setRegion(0,e-8,9,8,!0);for(var t=0,c=o.alignmentPatternCenters;t<c.length;t++)for(var s=c[t],a=0,d=o.alignmentPatternCenters;a<d.length;a++){var n=d[a];6===s&&6===n||6===s&&n===e-7||s===e-7&&6===n||r.setRegion(s-2,n-2,5,5,!0)}return r.setRegion(6,9,1,e-17,!0),r.setRegion(9,6,e-17,1,!0),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,!0),r.setRegion(0,e-11,6,3,!0)),r}function a(o,e,r){for(var t=w[r.dataMask],a=o.height,d=s(e),n=[],l=0,i=0,B=!0,k=a-1;k>0;k-=2){6===k&&k--;for(var u=0;u<a;u++)for(var C=B?a-1-u:u,m=0;m<2;m++){var f=k-m;if(!d.get(f,C)){i++;var P=o.get(f,C);t({y:C,x:f})&&(P=!P),l=c(P,l),8===i&&(n.push(l),i=0,l=0)}}B=!B}return n}function d(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return m.VERSIONS[r-1];for(var s=0,a=5;a>=0;a--)for(var d=e-9;d>=e-11;d--)s=c(o.get(d,a),s);for(var n=0,d=5;d>=0;d--)for(var a=e-9;a>=e-11;a--)n=c(o.get(d,a),n);for(var l,i=1/0,B=0,k=m.VERSIONS;B<k.length;B++){var u=k[B];if(u.infoBits===s||u.infoBits===n)return u;var C=t(s,u.infoBits);C<i&&(l=u,i=C),C=t(n,u.infoBits),C<i&&(l=u,i=C)}return i<=3?l:void 0}function n(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=c(o.get(r,8),e));for(var s=7;s>=0;s--)6!==s&&(e=c(o.get(8,s),e));for(var a=o.height,d=0,s=a-1;s>=a-7;s--)d=c(o.get(8,s),d);for(var r=a-8;r<a;r++)d=c(o.get(r,8),d);for(var n=1/0,l=null,i=0,B=f;i<B.length;i++){var k=B[i],u=k.bits,C=k.formatInfo;if(u===e||u===d)return C;var m=t(e,u);m<n&&(l=C,n=m),e!==d&&(m=t(d,u))<n&&(l=C,n=m)}return n<=3?l:null}function l(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach(function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock}),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,d=0;d<a;d++)for(var n=0,l=c;n<l.length;n++){var i=l[n];i.codewords.push(o.shift())}if(t.ecBlocks.length>1)for(var B=t.ecBlocks[0].numBlocks,k=t.ecBlocks[1].numBlocks,d=0;d<k;d++)c[B+d].codewords.push(o.shift());for(;o.length>0;)for(var u=0,C=c;u<C.length;u++){var i=C[u];i.codewords.push(o.shift())}return c}function i(o){var e=d(o);if(!e)return null;var r=n(o);if(!r)return null;var t=a(o,e,r),c=l(t,e,r.errorCorrectionLevel);if(!c)return null;for(var s=c.reduce(function(o,e){return o+e.numDataCodewords},0),i=new Uint8ClampedArray(s),B=0,k=0,m=c;k<m.length;k++){var f=m[k],w=C.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!w)return null;for(var P=0;P<f.numDataCodewords;P++)i[B++]=w[P]}try{return u.decode(i,e.versionNumber)}catch(o){return null}}function B(o){if(null==o)return null;var e=i(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return i(o)}Object.defineProperty(e,"__esModule",{value:!0});var k=r(0),u=r(6),C=r(9),m=r(10),f=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],w=[function(o){return(o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return(o.y+o.x)%3==0},function(o){return(Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return(o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return((o.y+o.x)%2+o.y*o.x%3)%2==0}];e.decode=B},function(o,e,r){"use strict";function t(o,e){for(var r=[],t="",c=[10,12,14][e],s=o.readBits(c);s>=3;){var a=o.readBits(10);if(a>=1e3)throw new Error("Invalid numeric value above 999");var d=Math.floor(a/100),n=Math.floor(a/10)%10,l=a%10;r.push(48+d,48+n,48+l),t+=d.toString()+n.toString()+l.toString(),s-=3}if(2===s){var a=o.readBits(7);if(a>=100)throw new Error("Invalid numeric value above 99");var d=Math.floor(a/10),n=a%10;r.push(48+d,48+n),t+=d.toString()+n.toString()}else if(1===s){var a=o.readBits(4);if(a>=10)throw new Error("Invalid numeric value above 9");r.push(48+a),t+=a.toString()}return{bytes:r,text:t}}function c(o,e){for(var r=[],t="",c=[9,11,13][e],s=o.readBits(c);s>=2;){var a=o.readBits(11),d=Math.floor(a/45),n=a%45;r.push(k[d].charCodeAt(0),k[n].charCodeAt(0)),t+=k[d]+k[n],s-=2}if(1===s){var d=o.readBits(6);r.push(k[d].charCodeAt(0)),t+=k[d]}return{bytes:r,text:t}}function s(o,e){for(var r=[],t="",c=[8,16,16][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(8);r.push(d)}try{t+=decodeURIComponent(r.map(function(o){return"%"+("0"+o.toString(16)).substr(-2)}).join(""))}catch(o){}return{bytes:r,text:t}}function a(o,e){for(var r=[],t="",c=[8,10,12][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(13),n=Math.floor(d/192)<<8|d%192;n+=n<7936?33088:49472,r.push(n>>8,255&n),t+=String.fromCharCode(i.shiftJISTable[n])}return{bytes:r,text:t}}function d(o,e){for(var r=new l.BitStream(o),d=e<=9?0:e<=26?1:2,i={text:"",bytes:[],chunks:[]};r.available()>=4;){var k=r.readBits(4);if(k===B.Terminator)return i;if(k===B.ECI)0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(7)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(14)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(21)}):i.chunks.push({type:n.ECI,assignmentNumber:-1});else if(k===B.Numeric){var u=t(r,d);i.text+=u.text,(w=i.bytes).push.apply(w,u.bytes),i.chunks.push({type:n.Numeric,text:u.text})}else if(k===B.Alphanumeric){var C=c(r,d);i.text+=C.text,(P=i.bytes).push.apply(P,C.bytes),i.chunks.push({type:n.Alphanumeric,text:C.text})}else if(k===B.Byte){var m=s(r,d);i.text+=m.text,(v=i.bytes).push.apply(v,m.bytes),i.chunks.push({type:n.Byte,bytes:m.bytes,text:m.text})}else if(k===B.Kanji){var f=a(r,d);i.text+=f.text,(h=i.bytes).push.apply(h,f.bytes),i.chunks.push({type:n.Kanji,bytes:f.bytes,text:f.text})}}var w,P,v,h}Object.defineProperty(e,"__esModule",{value:!0});var n,l=r(7),i=r(8);!function(o){o.Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci"}(n=e.Mode||(e.Mode={}));var B;!function(o){o[o.Terminator=0]="Terminator",o[o.Numeric=1]="Numeric",o[o.Alphanumeric=2]="Alphanumeric",o[o.Byte=4]="Byte",o[o.Kanji=8]="Kanji",o[o.ECI=7]="ECI"}(B||(B={}));var k=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];e.decode=d},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error("Cannot read "+o.toString()+" bits");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r,c=r-t,s=255>>8-t<<c;e=(this.bytes[this.byteOffset]&s)>>c,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;if(o>0){var c=8-o,s=255>>c<<c;e=e<<o|(this.bytes[this.byteOffset]&s)>>c,this.bitOffset+=o}}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,\n36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,\n39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,\n59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(o,e,r){"use strict";function t(o,e,r,t){e.degree()<r.degree()&&(w=[r,e],e=w[0],r=w[1]);for(var c=e,s=r,a=o.zero,d=o.one;s.degree()>=t/2;){var n=c,l=a;if(c=s,a=d,c.isZero())return null;s=n;for(var i=o.zero,B=c.getCoefficient(c.degree()),k=o.inverse(B);s.degree()>=c.degree()&&!s.isZero();){var u=s.degree()-c.degree(),C=o.multiply(s.getCoefficient(s.degree()),k);i=i.addOrSubtract(o.buildMonomial(u,C)),s=s.addOrSubtract(c.multiplyByMonomial(u,C))}if(d=i.multiplyPoly(a).addOrSubtract(l),s.degree()>=c.degree())return null}var m=d.getCoefficient(0);if(0===m)return null;var f=o.inverse(m);return[d.multiply(f),s.multiply(f)];var w}function c(o,e){var r=e.degree();if(1===r)return[e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}function s(o,e,r){for(var t=r.length,c=new Array(t),s=0;s<t;s++){for(var a=o.inverse(r[s]),n=1,l=0;l<t;l++)s!==l&&(n=o.multiply(n,d.addOrSubtractGF(1,o.multiply(r[l],a))));c[s]=o.multiply(e.evaluateAt(a),o.inverse(n)),0!==o.generatorBase&&(c[s]=o.multiply(c[s],a))}return c}function a(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var a=new d.default(285,256,0),l=new n.default(a,r),i=new Uint8ClampedArray(e),B=!1,k=0;k<e;k++){var u=l.evaluateAt(a.exp(k+a.generatorBase));i[i.length-1-k]=u,0!==u&&(B=!0)}if(!B)return r;var C=new n.default(a,i),m=t(a,a.buildMonomial(e,1),C,e);if(null===m)return null;var f=c(a,m[0]);if(null==f)return null;for(var w=s(a,m[1],f),P=0;P<f.length;P++){var v=r.length-1-a.log(f[P]);if(v<0)return null;r[v]=d.addOrSubtractGF(r[v],w[P])}return r}Object.defineProperty(e,"__esModule",{value:!0});var d=r(1),n=r(2);e.decode=a},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(o,e,r){"use strict";function t(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return{a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,d=t.x-r.x,n=e.y-r.y,l=t.y-r.y,i=a*l-d*n,B=(c*l-d*s)/i,k=(a*s-c*n)/i;return{a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}function c(o,e,r,c){var s=t(o,e,r,c);return{a11:s.a22*s.a33-s.a23*s.a32,a12:s.a13*s.a32-s.a12*s.a33,a13:s.a12*s.a23-s.a13*s.a22,a21:s.a23*s.a31-s.a21*s.a33,a22:s.a11*s.a33-s.a13*s.a31,a23:s.a13*s.a21-s.a11*s.a23,a31:s.a21*s.a32-s.a22*s.a31,a32:s.a12*s.a31-s.a11*s.a32,a33:s.a11*s.a22-s.a12*s.a21}}function s(o,e){return{a11:o.a11*e.a11+o.a21*e.a12+o.a31*e.a13,a12:o.a12*e.a11+o.a22*e.a12+o.a32*e.a13,a13:o.a13*e.a11+o.a23*e.a12+o.a33*e.a13,a21:o.a11*e.a21+o.a21*e.a22+o.a31*e.a23,a22:o.a12*e.a21+o.a22*e.a22+o.a32*e.a23,a23:o.a13*e.a21+o.a23*e.a22+o.a33*e.a23,a31:o.a11*e.a31+o.a21*e.a32+o.a31*e.a33,a32:o.a12*e.a31+o.a22*e.a32+o.a32*e.a33,a33:o.a13*e.a31+o.a23*e.a32+o.a33*e.a33}}function a(o,e){for(var r=c({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5}),a=t(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft),n=s(a,r),l=d.BitMatrix.createEmpty(e.dimension,e.dimension),i=function(o,e){var r=n.a13*o+n.a23*e+n.a33;return{x:(n.a11*o+n.a21*e+n.a31)/r,y:(n.a12*o+n.a22*e+n.a32)/r}},B=0;B<e.dimension;B++)for(var k=0;k<e.dimension;k++){var u=k+.5,C=B+.5,m=i(u,C);l.set(k,B,o.get(Math.floor(m.x),Math.floor(m.y)))}return{matrix:l,mappingFunction:i}}Object.defineProperty(e,"__esModule",{value:!0});var d=r(0);e.extract=a},function(o,e,r){"use strict";function t(o){return o.reduce(function(o,e){return o+e})}function c(o,e,r){var t,c,s,a=C(o,e),d=C(e,r),n=C(o,r);return d>=a&&d>=n?(l=[e,o,r],t=l[0],c=l[1],s=l[2]):n>=d&&n>=a?(i=[o,e,r],t=i[0],c=i[1],s=i[2]):(B=[o,r,e],t=B[0],c=B[1],s=B[2]),(s.x-c.x)*(t.y-c.y)-(s.y-c.y)*(t.x-c.x)<0&&(k=[s,t],t=k[0],s=k[1]),{bottomLeft:t,topLeft:c,topRight:s};var l,i,B,k}function s(o,e,r,c){var s=(t(d(o,r,c,5))/7+t(d(o,e,c,5))/7+t(d(r,o,c,5))/7+t(d(e,o,c,5))/7)/4;if(s<1)throw new Error("Invalid module size");var a=Math.round(C(o,e)/s),n=Math.round(C(o,r)/s),l=Math.floor((a+n)/2)+7;switch(l%4){case 0:l++;break;case 2:l--}return{dimension:l,moduleSize:s}}function a(o,e,r,t){var c,s,a,d,n=[{x:Math.floor(o.x),y:Math.floor(o.y)}],l=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);l?(c=Math.floor(o.y),s=Math.floor(o.x),a=Math.floor(e.y),d=Math.floor(e.x)):(c=Math.floor(o.x),s=Math.floor(o.y),a=Math.floor(e.x),d=Math.floor(e.y));for(var i=Math.abs(a-c),B=Math.abs(d-s),k=Math.floor(-i/2),u=c<a?1:-1,m=s<d?1:-1,f=!0,w=c,P=s;w!==a+u;w+=u){var v=l?P:w,h=l?w:P;if(r.get(v,h)!==f&&(f=!f,n.push({x:v,y:h}),n.length===t+1))break;if((k+=B)>0){if(P===d)break;P+=m,k-=i}}for(var p=[],y=0;y<t;y++)n[y]&&n[y+1]?p.push(C(n[y],n[y+1])):p.push(0);return p}function d(o,e,r,t){var c=e.y-o.y,s=e.x-o.x,d=a(o,e,r,Math.ceil(t/2)),n=a(o,{x:o.x-s,y:o.y-c},r,Math.ceil(t/2)),l=d.shift()+n.shift()-1;return(i=n.concat(l)).concat.apply(i,d);var i}function n(o,e){var r=t(o)/t(e),c=0;return e.forEach(function(e,t){c+=Math.pow(o[t]-e*r,2)}),{averageSize:r,error:c}}function l(o,e,r){try{var t=d(o,{x:-1,y:o.y},r,e.length),c=d(o,{x:o.x,y:-1},r,e.length),s={x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},a=d(o,s,r,e.length),l={x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},i=d(o,l,r,e.length),B=n(t,e),k=n(c,e),u=n(a,e),C=n(i,e),m=Math.sqrt(B.error*B.error+k.error*k.error+u.error*u.error+C.error*C.error),f=(B.averageSize+k.averageSize+u.averageSize+C.averageSize)/4;return m+(Math.pow(B.averageSize-f,2)+Math.pow(k.averageSize-f,2)+Math.pow(u.averageSize-f,2)+Math.pow(C.averageSize-f,2))/f}catch(o){return 1/0}}function i(o){for(var e=[],r=[],a=[],d=[],n=0;n<=o.height;n++)!function(c){for(var s=0,n=!1,l=[0,0,0,0,0],i=-1;i<=o.width;i++)!function(e){var a=o.get(e,c);if(a===n)s++;else{l=[l[1],l[2],l[3],l[4],s],s=1,n=a;var i=t(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!a,C=t(l.slice(-3))/3,m=Math.abs(l[2]-C)<C&&Math.abs(l[3]-C)<C&&Math.abs(l[4]-C)<C&&a;if(B){var f=e-l[3]-l[4],w=f-l[2],P={startX:w,endX:f,y:c},v=r.filter(function(o){return w>=o.bottom.startX&&w<=o.bottom.endX||f>=o.bottom.startX&&w<=o.bottom.endX||w<=o.bottom.startX&&f>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:r.push({top:P,bottom:P})}if(m){var h=e-l[4],p=h-l[3],P={startX:p,y:c,endX:h},v=d.filter(function(o){return p>=o.bottom.startX&&p<=o.bottom.endX||h>=o.bottom.startX&&p<=o.bottom.endX||p<=o.bottom.startX&&h>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:d.push({top:P,bottom:P})}}}(i);e.push.apply(e,r.filter(function(o){return o.bottom.y!==c&&o.bottom.y-o.top.y>=2})),r=r.filter(function(o){return o.bottom.y===c}),a.push.apply(a,d.filter(function(o){return o.bottom.y!==c})),d=d.filter(function(o){return o.bottom.y===c})}(n);e.push.apply(e,r.filter(function(o){return o.bottom.y-o.top.y>=2})),a.push.apply(a,d);var i=e.filter(function(o){return o.bottom.y-o.top.y>=2}).map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(c))){\nvar s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=t(s)/s.length;return{score:l({x:Math.round(r),y:Math.round(c)},[1,1,3,1,1],o),x:r,y:c,size:a}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}).map(function(o,e,r){if(e>B)return null;var t=r.filter(function(o,r){return e!==r}).map(function(e){return{x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}}).sort(function(o,e){return o.score-e.score});if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return{points:[o].concat(t.slice(0,2)),score:c}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score});if(0===i.length)return null;var m,f,w=c(i[0].points[0],i[0].points[1],i[0].points[2]),P=w.topRight,v=w.topLeft,h=w.bottomLeft;try{L=s(v,P,h,o),m=L.dimension,f=L.moduleSize}catch(o){return null}var p={x:P.x-v.x+h.x,y:P.y-v.y+h.y},y=(C(v,h)+C(v,P))/2/f,b=1-3/y,g={x:v.x+b*(p.x-v.x),y:v.y+b*(p.y-v.y)},x=a.map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(c))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];t(s);return{x:r,y:c,score:l({x:Math.floor(r),y:Math.floor(c)},[1,1,1],o)+C({x:r,y:c},g)}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}),M=y>=15&&x.length?x[0]:g;return{alignmentPattern:{x:M.x,y:M.y},bottomLeft:{x:h.x,y:h.y},dimension:m,topLeft:{x:v.x,y:v.y},topRight:{x:P.x,y:P.y}};var L}Object.defineProperty(e,"__esModule",{value:!0});var B=4,k=.5,u=1.5,C=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};e.locate=i}]).default}),self.addEventListener("message",function(o){var e=jsQR(o.data.data,o.data.width,o.data.height);e?postMessage(e.data):postMessage(null)});'], {
            type: 'application/javascript'
        }),
        p = [
            'delay',
            'legacyMode',
            'facingMode'
        ];
    b.exports = (e = _d = function(q) {
        function r(s) {
            ! function(t, u) {
                if (!(t instanceof u))
                    throw new TypeError('Cannot call a class as a function');
            }(this, r);
            var t = function(u, v) {
                if (!u)
                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                return !v || 'object' != typeof v && 'function' != typeof v ? u : v;
            }(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, s));
            return t.els = {}, t.state = {
                mirrorVideo: !1
            }, t.initiate = t.initiate.bind(t), t.initiateLegacyMode = t.initiateLegacyMode.bind(t), t.check = t.check.bind(t), t.handleVideo = t.handleVideo.bind(t), t.handleLoadStart = t.handleLoadStart.bind(t), t.handleInputChange = t.handleInputChange.bind(t), t.clearComponent = t.clearComponent.bind(t), t.handleReaderLoad = t.handleReaderLoad.bind(t), t.openImageDialog = t.openImageDialog.bind(t), t.handleWorkerMessage = t.handleWorkerMessage.bind(t), t.setRefFactory = t.setRefFactory.bind(t), t;
        }
        return function(r, s) {
            if ('function' != typeof s && null !== s)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof s);
            r.prototype = Object.create(s && s.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(r, s) : r.__proto__ = s);
        }(c, q), g(c, [{
                key: 'componentDidMount',
                value: function() {
                    this.worker = new Worker(URL.createObjectURL(o)), this.worker.onmessage = this.handleWorkerMessage, this.props.legacyMode ? this.initiateLegacyMode() : this.initiate();
                }
            },
            {
                key: 'componentWillReceiveProps',
                value: function(r) {
                    var s = m(this.props, r, p),
                        t = !0,
                        u = !1,
                        v = void 0;
                    try {
                        for (var w, x = s[Symbol.iterator](); !(t = (w = x.next()).done); t = !0) {
                            var y = w.value;
                            if ('facingMode' == y) {
                                this.clearComponent(), this.initiate(r);
                                break;
                            }
                            if ('delay' == y)
                                0 != this.props.delay || r.legacyMode || (this.timeout = setTimeout(this.check, r.delay)), 0 == r.delay && clearTimeout(this.timeout);
                            else if ('legacyMode' == y) {
                                this.props.legacyMode && !r.legacyMode ? (this.clearComponent(), this.initiate(r)) : (this.clearComponent(), this.componentDidUpdate = this.initiateLegacyMode);
                                break;
                            }
                        }
                    } catch (r) {
                        u = !0, v = r;
                    } finally {
                        try {
                            !t && g.return && g.return();
                        } finally {
                            if (u)
                                throw v;
                        }
                    }
                }
            },
            {
                key: 'shouldComponentUpdate',
                value: function(r, s) {
                    return s !== this.state || m(this.props, r, p).length > 0;
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
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        s = r.onError,
                        t = r.facingMode,
                        u = /firefox/i.test(navigator.userAgent),
                        v = {};
                    navigator.mediaDevices && 'function' == typeof navigator.mediaDevices.getSupportedConstraints && (v = navigator.mediaDevices.getSupportedConstraints());
                    var w = {};
                    v.facingMode && (w.facingMode = {
                        ideal: t
                    }), v.frameRate && (w.frameRate = {
                        ideal: 25,
                        min: 10
                    });
                    var x = v.facingMode || u ? Promise.resolve(r.constraints || w) : l(t).then(function(y) {
                        return Object.assign({}, {
                            deviceId: y
                        }, r.constraints);
                    });
                    x.then(function(y) {
                        return navigator.mediaDevices.getUserMedia({
                            video: y
                        });
                    }).then(this.handleVideo).catch(s);
                }
            },
            {
                key: 'handleVideo',
                value: function(r) {
                    var s = this.els.preview,
                        t = this.props.facingMode;
                    if (!s)
                        return setTimeout(this.handleVideo, 200, r);
                    void 0 !== (s || {}).srcObject ? s.srcObject = r : void 0 !== s.mozSrcObject ? s.mozSrcObject = r : window.URL.createObjectURL ? s.src = window.URL.createObjectURL(r) : window.webkitURL ? s.src = window.webkitURL.createObjectURL(r) : s.src = r, s.playsInline = !0;
                    var u = r.getTracks()[0];
                    this.stopCamera = u.stop.bind(u), s.addEventListener('loadstart', this.handleLoadStart), this.setState({
                        mirrorVideo: 'user' == t,
                        streamLabel: u.label
                    });
                }
            },
            {
                key: 'handleLoadStart',
                value: function() {
                    var r = this.props,
                        s = r.delay,
                        t = r.onLoad,
                        u = this.state,
                        v = u.mirrorVideo,
                        w = u.streamLabel,
                        x = this.els.preview;
                    x.play(), 'function' == typeof t && t({
                        mirrorVideo: v,
                        streamLabel: w
                    }), 'number' == typeof s && (this.timeout = setTimeout(this.check, s)), x.removeEventListener('loadstart', this.handleLoadStart);
                }
            },
            {
                key: 'check',
                value: function() {
                    var r = this.props,
                        s = r.legacyMode,
                        t = r.resolution,
                        u = r.delay,
                        v = this.els,
                        w = v.preview,
                        x = v.canvas,
                        y = v.img,
                        z = Math.floor(s ? y.naturalWidth : w.videoWidth),
                        A = Math.floor(s ? y.naturalHeight : w.videoHeight),
                        B = 0,
                        C = 0;
                    if (s) {
                        var D = t / (z > A ? z : A);
                        A *= D, z *= D, x.width = z, x.height = A;
                    } else {
                        var D = t / (z < A ? z : A);
                        C = ((A *= D) - t) / 2 * -1, B = ((z *= D) - t) / 2 * -1, x.width = t, x.height = t;
                    }
                    var D = w && w.readyState === w.HAVE_ENOUGH_DATA;
                    if (s || D) {
                        var E = x.getContext('2d');
                        E.drawImage(s ? y : w, B, C, z, A);
                        var F = E.getImageData(0, 0, x.width, x.height);
                        this.worker.postMessage(F);
                    } else
                        this.timeout = setTimeout(this.check, u);
                }
            },
            {
                key: 'handleWorkerMessage',
                value: function(r) {
                    var s = this.props,
                        t = s.onScan,
                        u = s.legacyMode,
                        v = s.delay;
                    t(r.data || null), !u && 'number' == typeof v && this.worker && (this.timeout = setTimeout(this.check, v));
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
                value: function(r) {
                    var s = r.target.files[0];
                    this.reader.readAsDataURL(s);
                }
            },
            {
                key: 'handleReaderLoad',
                value: function(r) {
                    this.els.img.src = r.target.result;
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
                value: function(r) {
                    var s = this;
                    return function(t) {
                        s.els[r] = t;
                    };
                }
            },
            {
                key: 'render',
                value: function() {
                    var r = this.props,
                        s = r.style,
                        t = r.className,
                        u = r.onImageLoad,
                        v = r.legacyMode,
                        w = r.showViewFinder,
                        x = (r.facingMode, {
                            display: 'none'
                        }),
                        y = {
                            top: 0,
                            left: 0,
                            display: 'block',
                            position: 'absolute',
                            overflow: 'hidden',
                            width: '100%',
                            height: '100%'
                        },
                        z = f({}, y, {
                            objectFit: 'cover',
                            transform: this.state.mirrorVideo ? 'scaleX(-1)' : void 0
                        }),
                        A = f({}, y, {
                            objectFit: 'scale-down'
                        });
                    return h.createElement('section', {
                        className: t,
                        style: s
                    }, h.createElement('section', {
                        style: {
                            overflow: 'hidden',
                            position: 'relative',
                            width: '100%',
                            paddingTop: '100%'
                        }
                    }, !v && w ? h.createElement('div', {
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
                    }) : null, v ? h.createElement('input', {
                        style: x,
                        type: 'file',
                        accept: 'image/*',
                        ref: this.setRefFactory('input'),
                        onChange: this.handleInputChange
                    }) : null, v ? h.createElement('img', {
                        style: A,
                        ref: this.setRefFactory('img'),
                        onLoad: u
                    }) : h.createElement('video', {
                        style: z,
                        ref: this.setRefFactory('preview')
                    }), h.createElement('canvas', {
                        style: x,
                        ref: this.setRefFactory('canvas')
                    })));
                }
            }
        ]), c;
    }(i), _d.propTypes = {
        onScan: j.func.isRequired,
        onError: j.func.isRequired,
        onLoad: j.func,
        onImageLoad: j.func,
        delay: j.oneOfType([
            j.number,
            j.bool
        ]),
        facingMode: j.oneOf([
            'user',
            'environment'
        ]),
        legacyMode: j.bool,
        resolution: j.number,
        showViewFinder: j.bool,
        style: j.any,
        className: j.string,
        constraints: j.object
    }, _d.defaultProps = {
        delay: 500,
        resolution: 600,
        facingMode: 'environment',
        showViewFinder: !0,
        constraints: null
    }, e);
}), a.register('U/xTY', function(b, c) {
    var d = a('crHJ4').NoVideoInputDevicesError;

    function e(f, g, h) {
        return f.length > 0 ? f[0].deviceId : 1 == g.length || 'user' == h ? g[0].deviceId : g[1].deviceId;
    }
    var e = function(f) {
        return 'environment' == f ? /rear|back|environment/gi : /front|user|face/gi;
    };
    b.exports = {
        getDeviceId: function(f) {
            var g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _i;
            return new Promise(function(h, _i) {
                var j = void 0;
                try {
                    j = navigator.mediaDevices.enumerateDevices();
                } catch (f) {
                    _i(new d());
                }
                j.then(function(k) {
                    var l = k.filter(function(m) {
                        return 'videoinput' == m.kind;
                    });
                    if (l.length < 1)
                        _i(new d());
                    else {
                        var m = e(f),
                            n = l.filter(function(o) {
                                var p = o.label;
                                return m.test(p);
                            });
                        h(g(n, l, f));
                    }
                });
            });
        },
        getFacingModePattern: e
    };
}), a.register('crHJ4', function(b, c) {
    function d() {
        this.name = 'NoVideoInputDevicesError', this.message = 'No video input devices found';
    }
    _f.prototype = new Error(), b.exports = {
        NoVideoInputDevicesError: _f
    };
}), a.register('I8IBZ', function(b, c) {
    b.exports = function(d, e, _f) {
        var g = [];
        return _f.forEach(function(h) {
            d[h] != e[h] && g.push(h);
        }), g;
    };
}), a.register('CA4Ie', function(b, c) {
    b.exports = function(d, e) {
        d = d || [], e = e || {};
        try {
            return new Blob(d, e);
        } catch (_d) {
            if ('TypeError' !== _d.name)
                throw _d;
            for (var f = new(window.BlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder)(), g = 0; g < d.length; g += 1)
                f.append(d[g]);
            return f.getBlob(e.type);
        }
    };
}), a.register('yyH/r', function(b, c) {
    (0, a('kRyqd').adapterFactory)({
        window: 'undefined' == typeof window ? void 0 : window
    });
}), a.register('kRyqd', function(b, c) {
    _l(b.exports, 'adapterFactory', function() {
        return _j;
    });
    var _d = a('AjDBF'),
        e = a('xAi4e'),
        f = a('9ixV/'),
        g = a('EPf4h'),
        h = a('RCx4e'),
        i = a('62uPd');

    function _j({
        window: k
    } = {}, _l = {
        shimChrome: !0,
        shimFirefox: !0,
        shimEdge: !0,
        shimSafari: !0
    }) {
        const m = _d.log,
            n = _d.detectBrowser(k),
            o = {
                browserDetails: n,
                commonShim: i,
                extractVersion: _d.extractVersion,
                disableLog: _d.disableLog,
                disableWarnings: _d.disableWarnings
            };
        switch (n.browser) {
            case 'chrome':
                if (!e || !e.shimPeerConnection || !_l.shimChrome)
                    return m('Chrome shim is not included in this adapter release.'), o;
                if (null === n.version)
                    return m('Chrome shim can not determine version, not shimming.'), o;
                m('adapter.js shimming chrome.'), o.browserShim = e, e.shimGetUserMedia(k), e.shimMediaStream(k), e.shimPeerConnection(k), e.shimOnTrack(k), e.shimAddTrackRemoveTrack(k), e.shimGetSendersWithDtmf(k), e.shimGetStats(k), e.shimSenderReceiverGetStats(k), e.fixNegotiationNeeded(k), i.shimRTCIceCandidate(k), i.shimConnectionState(k), i.shimMaxMessageSize(k), i.shimSendThrowTypeError(k), i.removeAllowExtmapMixed(k);
                break;
            case 'firefox':
                if (!g || !g.shimPeerConnection || !_l.shimFirefox)
                    return m('Firefox shim is not included in this adapter release.'), o;
                m('adapter.js shimming firefox.'), o.browserShim = g, g.shimGetUserMedia(k), g.shimPeerConnection(k), g.shimOnTrack(k), g.shimRemoveStream(k), g.shimSenderGetStats(k), g.shimReceiverGetStats(k), g.shimRTCDataChannel(k), g.shimAddTransceiver(k), g.shimGetParameters(k), g.shimCreateOffer(k), g.shimCreateAnswer(k), i.shimRTCIceCandidate(k), i.shimConnectionState(k), i.shimMaxMessageSize(k), i.shimSendThrowTypeError(k);
                break;
            case 'edge':
                if (!f || !f.shimPeerConnection || !_l.shimEdge)
                    return m('MS edge shim is not included in this adapter release.'), o;
                m('adapter.js shimming edge.'), o.browserShim = f, f.shimGetUserMedia(k), f.shimGetDisplayMedia(k), f.shimPeerConnection(k), f.shimReplaceTrack(k), i.shimMaxMessageSize(k), i.shimSendThrowTypeError(k);
                break;
            case 'safari':
                if (!h || !_l.shimSafari)
                    return m('Safari shim is not included in this adapter release.'), o;
                m('adapter.js shimming safari.'), o.browserShim = h, h.shimRTCIceServerUrls(k), h.shimCreateOfferLegacy(k), h.shimCallbacksAPI(k), h.shimLocalStreamsAPI(k), h.shimRemoteStreamsAPI(k), h.shimTrackEventTransceiver(k), h.shimGetUserMedia(k), h.shimAudioContext(k), i.shimRTCIceCandidate(k), i.shimMaxMessageSize(k), i.shimSendThrowTypeError(k), i.removeAllowExtmapMixed(k);
                break;
            default:
                m('Unsupported browser!');
        }
        return o;
    }
}), a.register('AjDBF', function(b, c) {
    _h(b.exports, 'extractVersion', function() {
        return _f;
    }), _h(b.exports, 'wrapPeerConnectionEvent', function() {
        return _f;
    }), _h(b.exports, 'disableLog', function() {
        return _f;
    }), _h(b.exports, 'disableWarnings', function() {
        return _f;
    }), _h(b.exports, 'log', function() {
        return _f;
    }), _h(b.exports, 'deprecated', function() {
        return _f;
    }), _h(b.exports, 'detectBrowser', function() {
        return _f;
    }), _h(b.exports, 'compactObject', function() {
        return _f;
    }), _h(b.exports, 'filterStats', function() {
        return _f;
    });
    let d = !0,
        e = !0;

    function _f(g, _h, i) {
        const j = g.match(_h);
        return j && j.length >= i && parseInt(j[i], 10);
    }

    function _f(g, h, i) {
        if (!g.RTCPeerConnection)
            return;
        const j = g.RTCPeerConnection.prototype,
            k = j.addEventListener;
        j.addEventListener = function(l, m) {
            if (l !== h)
                return k.apply(this, arguments);
            const n = l => {
                const o = i(l);
                o && (m.handleEvent ? m.handleEvent(o) : m(o));
            };
            return this._eventMap = this._eventMap || {}, this._eventMap[h] || (this._eventMap[h] = new Map()), this._eventMap[h].set(m, n), k.apply(this, [
                l,
                n
            ]);
        };
        const l = j.removeEventListener;
        j.removeEventListener = function(m, n) {
            if (m !== h || !this._eventMap || !this._eventMap[h])
                return l.apply(this, arguments);
            if (!this._eventMap[h].has(n))
                return l.apply(this, arguments);
            const o = this._eventMap[h].get(n);
            return this._eventMap[h].delete(n), 0 === this._eventMap[h].size && delete this._eventMap[h], 0 === Object.keys(this._eventMap).length && delete this._eventMap, l.apply(this, [
                m,
                o
            ]);
        }, Object.defineProperty(j, 'on' + h, {
            get() {
                return this['_on' + h];
            },
            set(m) {
                this['_on' + h] && (this.removeEventListener(h, this['_on' + h]), delete this['_on' + h]), m && this.addEventListener(h, this['_on' + h] = m);
            },
            enumerable: !0,
            configurable: !0
        });
    }

    function _f(g) {
        return 'boolean' != typeof g ? new Error('Argument type: ' + typeof g + '. Please use a boolean.') : (d = g, g ? 'adapter.js logging disabled' : 'adapter.js logging enabled');
    }

    function _f(g) {
        return 'boolean' != typeof g ? new Error('Argument type: ' + typeof g + '. Please use a boolean.') : (e = !g, 'adapter.js deprecation warnings ' + (g ? 'disabled' : 'enabled'));
    }

    function _f() {
        if ('object' == typeof window) {
            if (d)
                return;
            'undefined' != typeof console && 'function' == typeof console.log && console.log.apply(console, arguments);
        }
    }

    function _f(g, h) {
        e && console.warn(g + ' is deprecated, please use ' + h + ' instead.');
    }

    function _f(g) {
        const h = {
            browser: null,
            version: null
        };
        if (void 0 === g || !g.navigator)
            return h.browser = 'Not a browser.', h;
        const {
            navigator: i
        } = g;
        if (i.mozGetUserMedia)
            h.browser = 'firefox', h.version = _l(i.userAgent, /Firefox\/(\d+)\./, 1);
        else if (i.webkitGetUserMedia || !1 === g.isSecureContext && g.webkitRTCPeerConnection && !g.RTCIceGatherer)
            h.browser = 'chrome', h.version = _l(i.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
        else if (i.mediaDevices && i.userAgent.match(/Edge\/(\d+).(\d+)$/))
            h.browser = 'edge', h.version = _l(i.userAgent, /Edge\/(\d+).(\d+)$/, 2);
        else {
            if (!g.RTCPeerConnection || !i.userAgent.match(/AppleWebKit\/(\d+)\./))
                return h.browser = 'Not a supported browser.', h;
            h.browser = 'safari', h.version = _l(i.userAgent, /AppleWebKit\/(\d+)\./, 1), h.supportsUnifiedPlan = g.RTCRtpTransceiver && 'currentDirection' in g.RTCRtpTransceiver.prototype;
        }
        return h;
    }

    function f(g) {
        return '[object Object]' === Object.prototype.toString.call(g);
    }

    function _f(g) {
        return _e(g) ? Object.keys(g).reduce(function(h, i) {
            const j = _e(g[i]),
                k = j ? _f(g[i]) : g[i],
                _l = j && !Object.keys(k).length;
            return void 0 === k || _l ? h : Object.assign(h, {
                [i]: k
            });
        }, {}) : g;
    }

    function f(g, h, i) {
        h && !i.has(h.id) && (i.set(h.id, h), Object.keys(h).forEach(d => {
            d.endsWith('Id') ? f(g, g.get(h[d]), i) : d.endsWith('Ids') && h[d].forEach(h => {
                f(g, g.get(h), i);
            });
        }));
    }

    function _f(g, h, i) {
        const j = i ? 'outbound-rtp' : 'inbound-rtp',
            k = new Map();
        if (null === h)
            return k;
        const l = [];
        return g.forEach(g => {
            'track' === g.type && g.trackIdentifier === h.id && l.push(g);
        }), l.forEach(h => {
            g.forEach(i => {
                i.type === j && i.trackId === h.id && _v(g, i, k);
            });
        }), k;
    }
}), a.register('xAi4e', function(b, c) {
    _g(b.exports, 'shimMediaStream', function() {
        return _e;
    }), _g(b.exports, 'shimOnTrack', function() {
        return _e;
    }), _g(b.exports, 'shimGetSendersWithDtmf', function() {
        return _e;
    }), _g(b.exports, 'shimGetStats', function() {
        return _e;
    }), _g(b.exports, 'shimSenderReceiverGetStats', function() {
        return _e;
    }), _g(b.exports, 'shimAddTrackRemoveTrackWithNative', function() {
        return _e;
    }), _g(b.exports, 'shimAddTrackRemoveTrack', function() {
        return _e;
    }), _g(b.exports, 'shimPeerConnection', function() {
        return _e;
    }), _g(b.exports, 'fixNegotiationNeeded', function() {
        return _e;
    }), _g(b.exports, 'shimGetUserMedia', function() {
        return a('qiwYX').shimGetUserMedia;
    }), _g(b.exports, 'shimGetDisplayMedia', function() {
        return a('fEO4R').shimGetDisplayMedia;
    });
    var d = a('AjDBF');
    a('qiwYX'), a('fEO4R');

    function _e(f) {
        f.MediaStream = f.MediaStream || f.webkitMediaStream;
    }

    function _e(f) {
        if ('object' == typeof f && f.RTCPeerConnection && !('ontrack' in f.RTCPeerConnection.prototype)) {
            Object.defineProperty(f.RTCPeerConnection.prototype, 'ontrack', {
                get() {
                    return this._ontrack;
                },
                set(g) {
                    this._ontrack && this.removeEventListener('track', this._ontrack), this.addEventListener('track', this._ontrack = g);
                },
                enumerable: !0,
                configurable: !0
            });
            const _g = f.RTCPeerConnection.prototype.setRemoteDescription;
            f.RTCPeerConnection.prototype.setRemoteDescription = function() {
                return this._ontrackpoly || (this._ontrackpoly = _g => {
                    _g.stream.addEventListener('addtrack', c => {
                        let h;
                        h = f.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(f => f.track && f.track.id === c.track.id) : {
                            track: c.track
                        };
                        const i = new Event('track');
                        i.track = c.track, i.receiver = h, i.transceiver = {
                            receiver: h
                        }, i.streams = [_g.stream], this.dispatchEvent(i);
                    }), _g.stream.getTracks().forEach(c => {
                        let h;
                        h = f.RTCPeerConnection.prototype.getReceivers ? this.getReceivers().find(f => f.track && f.track.id === c.id) : {
                            track: c
                        };
                        const i = new Event('track');
                        i.track = c, i.receiver = h, i.transceiver = {
                            receiver: h
                        }, i.streams = [_g.stream], this.dispatchEvent(i);
                    });
                }, this.addEventListener('addstream', this._ontrackpoly)), _g.apply(this, arguments);
            };
        } else
            d.wrapPeerConnectionEvent(f, 'track', f => (f.transceiver || Object.defineProperty(f, 'transceiver', {
                value: {
                    receiver: f.receiver
                }
            }), f));
    }

    function _e(f) {
        if ('object' == typeof f && f.RTCPeerConnection && !('getSenders' in f.RTCPeerConnection.prototype) && 'createDTMFSender' in f.RTCPeerConnection.prototype) {
            const g = function(h, i) {
                return {
                    track: i,
                    get dtmf() {
                        return void 0 === this._dtmf && ('audio' === i.kind ? this._dtmf = h.createDTMFSender(i) : this._dtmf = null), this._dtmf;
                    },
                    _pc: h
                };
            };
            if (!f.RTCPeerConnection.prototype.getSenders) {
                f.RTCPeerConnection.prototype.getSenders = function() {
                    return this._senders = this._senders || [], this._senders.slice();
                };
                const h = f.RTCPeerConnection.prototype.addTrack;
                f.RTCPeerConnection.prototype.addTrack = function(i, j) {
                    let k = h.apply(this, arguments);
                    return k || (k = g(this, i), this._senders.push(k)), k;
                };
                const i = f.RTCPeerConnection.prototype.removeTrack;
                f.RTCPeerConnection.prototype.removeTrack = function(j) {
                    i.apply(this, arguments);
                    const k = this._senders.indexOf(j); -
                    1 !== k && this._senders.splice(k, 1);
                };
            }
            const h = f.RTCPeerConnection.prototype.addStream;
            f.RTCPeerConnection.prototype.addStream = function(i) {
                this._senders = this._senders || [], h.apply(this, [i]), i.getTracks().forEach(i => {
                    this._senders.push(g(this, i));
                });
            };
            const i = f.RTCPeerConnection.prototype.removeStream;
            f.RTCPeerConnection.prototype.removeStream = function(j) {
                this._senders = this._senders || [], i.apply(this, [j]), j.getTracks().forEach(j => {
                    const k = this._senders.find(k => k.track === j);
                    k && this._senders.splice(this._senders.indexOf(k), 1);
                });
            };
        } else if ('object' == typeof f && f.RTCPeerConnection && 'getSenders' in f.RTCPeerConnection.prototype && 'createDTMFSender' in f.RTCPeerConnection.prototype && f.RTCRtpSender && !('dtmf' in f.RTCRtpSender.prototype)) {
            const g = f.RTCPeerConnection.prototype.getSenders;
            f.RTCPeerConnection.prototype.getSenders = function() {
                const h = g.apply(this, []);
                return h.forEach(h => h._pc = this), h;
            }, Object.defineProperty(f.RTCRtpSender.prototype, 'dtmf', {
                get() {
                    return void 0 === this._dtmf && ('audio' === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf;
                }
            });
        }
    }

    function _e(f) {
        if (!f.RTCPeerConnection)
            return;
        const g = f.RTCPeerConnection.prototype.getStats;
        f.RTCPeerConnection.prototype.getStats = function() {
            const [h, i, j] = arguments;
            if (arguments.length > 0 && 'function' == typeof h)
                return g.apply(this, arguments);
            if (0 === g.length && (0 === arguments.length || 'function' != typeof h))
                return g.apply(this, []);
            const k = function(l) {
                    const m = {};
                    return l.result().forEach(l => {
                        const n = {
                            id: l.id,
                            timestamp: l.timestamp,
                            type: {
                                localcandidate: 'local-candidate',
                                remotecandidate: 'remote-candidate'
                            } [l.type] || l.type
                        };
                        l.names().forEach(m => {
                            n[m] = l.stat(m);
                        }), m[n.id] = n;
                    }), m;
                },
                l = function(m) {
                    return new Map(Object.keys(m).map(g => [
                        g,
                        m[g]
                    ]));
                };
            if (arguments.length >= 2) {
                const m = function(n) {
                    i(l(k(n)));
                };
                return g.apply(this, [
                    m,
                    h
                ]);
            }
            return new Promise((h, i) => {
                g.apply(this, [
                    function(m) {
                        h(l(k(m)));
                    },
                    i
                ]);
            }).then(i, j);
        };
    }

    function _e(f) {
        if (!('object' == typeof f && f.RTCPeerConnection && f.RTCRtpSender && f.RTCRtpReceiver))
            return;
        if (!('getStats' in f.RTCRtpSender.prototype)) {
            const g = f.RTCPeerConnection.prototype.getSenders;
            g && (f.RTCPeerConnection.prototype.getSenders = function() {
                const h = g.apply(this, []);
                return h.forEach(h => h._pc = this), h;
            });
            const h = f.RTCPeerConnection.prototype.addTrack;
            h && (f.RTCPeerConnection.prototype.addTrack = function() {
                const i = h.apply(this, arguments);
                return i._pc = this, i;
            }), f.RTCRtpSender.prototype.getStats = function() {
                const i = this;
                return this._pc.getStats().then(g => d.filterStats(g, i.track, !0));
            };
        }
        if (!('getStats' in f.RTCRtpReceiver.prototype)) {
            const g = f.RTCPeerConnection.prototype.getReceivers;
            g && (f.RTCPeerConnection.prototype.getReceivers = function() {
                const h = g.apply(this, []);
                return h.forEach(h => h._pc = this), h;
            }), d.wrapPeerConnectionEvent(f, 'track', f => (f.receiver._pc = f.srcElement, f)), f.RTCRtpReceiver.prototype.getStats = function() {
                const h = this;
                return this._pc.getStats().then(g => d.filterStats(g, h.track, !1));
            };
        }
        if (!('getStats' in f.RTCRtpSender.prototype) || !('getStats' in f.RTCRtpReceiver.prototype))
            return;
        const g = f.RTCPeerConnection.prototype.getStats;
        f.RTCPeerConnection.prototype.getStats = function() {
            if (arguments.length > 0 && arguments[0] instanceof f.MediaStreamTrack) {
                const h = arguments[0];
                let i, j, k;
                return this.getSenders().forEach(j => {
                    j.track === h && (i ? k = !0 : i = j);
                }), this.getReceivers().forEach(i => (i.track === h && (j ? k = !0 : j = i), i.track === h)), k || i && j ? Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError')) : i ? i.getStats() : j ? j.getStats() : Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
            }
            return g.apply(this, arguments);
        };
    }

    function _e(f) {
        f.RTCPeerConnection.prototype.getLocalStreams = function() {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(f => this._shimmedLocalStreams[f][0]);
        };
        const g = f.RTCPeerConnection.prototype.addTrack;
        f.RTCPeerConnection.prototype.addTrack = function(h, i) {
            if (!i)
                return g.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            const j = g.apply(this, arguments);
            return this._shimmedLocalStreams[i.id] ? -1 === this._shimmedLocalStreams[i.id].indexOf(j) && this._shimmedLocalStreams[i.id].push(j) : this._shimmedLocalStreams[i.id] = [
                i,
                j
            ], j;
        };
        const h = f.RTCPeerConnection.prototype.addStream;
        f.RTCPeerConnection.prototype.addStream = function(i) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {}, i.getTracks().forEach(i => {
                if (this.getSenders().find(g => g.track === i))
                    throw new DOMException('Track already exists.', 'InvalidAccessError');
            });
            const j = this.getSenders();
            h.apply(this, arguments);
            const k = this.getSenders().filter(i => -1 === j.indexOf(i));
            this._shimmedLocalStreams[i.id] = [i].concat(k);
        };
        const i = f.RTCPeerConnection.prototype.removeStream;
        f.RTCPeerConnection.prototype.removeStream = function(j) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[j.id], i.apply(this, arguments);
        };
        const j = f.RTCPeerConnection.prototype.removeTrack;
        f.RTCPeerConnection.prototype.removeTrack = function(k) {
            return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, k && Object.keys(this._shimmedLocalStreams).forEach(g => {
                const l = this._shimmedLocalStreams[g].indexOf(k); -
                1 !== l && this._shimmedLocalStreams[g].splice(l, 1), 1 === this._shimmedLocalStreams[g].length && delete this._shimmedLocalStreams[g];
            }), j.apply(this, arguments);
        };
    }

    function _e(f) {
        if (!f.RTCPeerConnection)
            return;
        const g = d.detectBrowser(f);
        if (f.RTCPeerConnection.prototype.addTrack && g.version >= 65)
            return _g(f);
        const h = f.RTCPeerConnection.prototype.getLocalStreams;
        f.RTCPeerConnection.prototype.getLocalStreams = function() {
            const i = h.apply(this);
            return this._reverseStreams = this._reverseStreams || {}, i.map(i => this._reverseStreams[i.id]);
        };
        const i = f.RTCPeerConnection.prototype.addStream;
        f.RTCPeerConnection.prototype.addStream = function(j) {
            if (this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, j.getTracks().forEach(f => {
                    if (this.getSenders().find(j => j.track === f))
                        throw new DOMException('Track already exists.', 'InvalidAccessError');
                }), !this._reverseStreams[j.id]) {
                const k = new f.MediaStream(j.getTracks());
                this._streams[j.id] = k, this._reverseStreams[k.id] = j, j = k;
            }
            i.apply(this, [j]);
        };
        const j = f.RTCPeerConnection.prototype.removeStream;

        function k(l, m) {
            let n = m.sdp;
            return Object.keys(l._reverseStreams || []).forEach(m => {
                const o = l._reverseStreams[m],
                    p = l._streams[o.id];
                n = n.replace(new RegExp(p.id, 'g'), o.id);
            }), new RTCSessionDescription({
                type: m.type,
                sdp: n
            });
        }

        function k(l, m) {
            let n = m.sdp;
            return Object.keys(l._reverseStreams || []).forEach(m => {
                const o = l._reverseStreams[m],
                    p = l._streams[o.id];
                n = n.replace(new RegExp(o.id, 'g'), p.id);
            }), new RTCSessionDescription({
                type: m.type,
                sdp: n
            });
        }
        f.RTCPeerConnection.prototype.removeStream = function(k) {
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {}, j.apply(this, [this._streams[k.id] || k]), delete this._reverseStreams[this._streams[k.id] ? this._streams[k.id].id : k.id], delete this._streams[k.id];
        }, f.RTCPeerConnection.prototype.addTrack = function(k, l) {
            if ('closed' === this.signalingState)
                throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            const m = [].slice.call(arguments, 1);
            if (1 !== m.length || !m[0].getTracks().find(f => f === k))
                throw new DOMException('The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.', 'NotSupportedError');
            const n = this.getSenders().find(f => f.track === k);
            if (n)
                throw new DOMException('Track already exists.', 'InvalidAccessError');
            this._streams = this._streams || {}, this._reverseStreams = this._reverseStreams || {};
            const o = this._streams[l.id];
            if (o)
                o.addTrack(k), Promise.resolve().then(() => {
                    this.dispatchEvent(new Event('negotiationneeded'));
                });
            else {
                const p = new f.MediaStream([k]);
                this._streams[l.id] = p, this._reverseStreams[p.id] = l, this.addStream(p);
            }
            return this.getSenders().find(f => f.track === k);
        }, [
            'createOffer',
            'createAnswer'
        ].forEach(function(k) {
            const l = f.RTCPeerConnection.prototype[k],
                m = {
                    [k]() {
                        const n = arguments;
                        return arguments.length && 'function' == typeof arguments[0] ? l.apply(this, [
                            k => {
                                const o = _f(this, k);
                                n[0].apply(null, [o]);
                            },
                            k => {
                                n[1] && n[1].apply(null, k);
                            },
                            arguments[2]
                        ]) : l.apply(this, arguments).then(n => _f(this, n));
                    }
                };
            f.RTCPeerConnection.prototype[k] = m[k];
        });
        const k = f.RTCPeerConnection.prototype.setLocalDescription;
        f.RTCPeerConnection.prototype.setLocalDescription = function() {
            return arguments.length && arguments[0].type ? (arguments[0] = _o(this, arguments[0]), k.apply(this, arguments)) : k.apply(this, arguments);
        };
        const l = Object.getOwnPropertyDescriptor(f.RTCPeerConnection.prototype, 'localDescription');
        Object.defineProperty(f.RTCPeerConnection.prototype, 'localDescription', {
            get() {
                const m = l.get.apply(this);
                return '' === m.type ? m : _f(this, m);
            }
        }), f.RTCPeerConnection.prototype.removeTrack = function(m) {
            if ('closed' === this.signalingState)
                throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            if (!m._pc)
                throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.', 'TypeError');
            if (!(m._pc === this))
                throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
            let n;
            this._streams = this._streams || {}, Object.keys(this._streams).forEach(h => {
                this._streams[h].getTracks().find(n => m.track === n) && (n = this._streams[h]);
            }), n && (1 === n.getTracks().length ? this.removeStream(this._reverseStreams[n.id]) : n.removeTrack(m.track), this.dispatchEvent(new Event('negotiationneeded')));
        };
    }

    function _e(f) {
        const g = d.detectBrowser(f);
        if (!f.RTCPeerConnection && f.webkitRTCPeerConnection && (f.RTCPeerConnection = f.webkitRTCPeerConnection), !f.RTCPeerConnection)
            return;
        const h = 0 === f.RTCPeerConnection.prototype.addIceCandidate.length;
        g.version < 53 && [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ].forEach(function(i) {
            const j = f.RTCPeerConnection.prototype[i],
                k = {
                    [i]() {
                        return arguments[0] = new('addIceCandidate' === i ? f.RTCIceCandidate : f.RTCSessionDescription)(arguments[0]), j.apply(this, arguments);
                    }
                };
            f.RTCPeerConnection.prototype[i] = k[i];
        });
        const i = f.RTCPeerConnection.prototype.addIceCandidate;
        f.RTCPeerConnection.prototype.addIceCandidate = function() {
            return h || arguments[0] ? g.version < 78 && arguments[0] && '' === arguments[0].candidate ? Promise.resolve() : i.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
        };
    }

    function _e(f) {
        const g = d.detectBrowser(f);
        d.wrapPeerConnectionEvent(f, 'negotiationneeded', f => {
            const h = f.target;
            if (!(g.version < 72 || h.getConfiguration && 'plan-b' === h.getConfiguration().sdpSemantics) || 'stable' === h.signalingState)
                return f;
        });
    }
}), a.register('qiwYX', function(b, c) {
    _h(b.exports, 'shimGetUserMedia', function() {
        return _f;
    });
    var d = a('AjDBF');
    const e = d.log;

    function _f(g) {
        const _h = g && g.navigator;
        if (!_h.mediaDevices)
            return;
        const i = d.detectBrowser(g),
            j = function(k) {
                if ('object' != typeof k || k.mandatory || k.optional)
                    return k;
                const l = {};
                return Object.keys(k).forEach(i => {
                    if ('require' === i || 'advanced' === i || 'mediaSource' === i)
                        return;
                    const m = 'object' == typeof k[i] ? k[i] : {
                        ideal: k[i]
                    };
                    void 0 !== m.exact && 'number' == typeof m.exact && (m.min = m.max = m.exact);
                    const n = function(o, p) {
                        return o ? o + p.charAt(0).toUpperCase() + p.slice(1) : 'deviceId' === p ? 'sourceId' : p;
                    };
                    if (void 0 !== m.ideal) {
                        l.optional = l.optional || [];
                        let o = {};
                        'number' == typeof m.ideal ? (o[n('min', i)] = m.ideal, l.optional.push(o), o = {}, o[n('max', i)] = m.ideal, l.optional.push(o)) : (o[n('', i)] = m.ideal, l.optional.push(o));
                    }
                    void 0 !== m.exact && 'number' != typeof m.exact ? (l.mandatory = l.mandatory || {}, l.mandatory[n('', i)] = m.exact) : [
                        'min',
                        'max'
                    ].forEach(k => {
                        void 0 !== m[k] && (l.mandatory = l.mandatory || {}, l.mandatory[n(k, i)] = m[k]);
                    });
                }), k.advanced && (l.optional = (l.optional || []).concat(k.advanced)), l;
            },
            k = function(l, m) {
                if (i.version >= 61)
                    return m(l);
                if ((l = JSON.parse(JSON.stringify(l))) && 'object' == typeof l.audio) {
                    const n = function(o, p, q) {
                        p in o && !(q in o) && (o[q] = o[p], delete o[p]);
                    };
                    n((l = JSON.parse(JSON.stringify(l))).audio, 'autoGainControl', 'googAutoGainControl'), n(l.audio, 'noiseSuppression', 'googNoiseSuppression'), l.audio = j(l.audio);
                }
                if (l && 'object' == typeof l.video) {
                    let n = l.video.facingMode;
                    n = n && ('object' == typeof n ? n : {
                        ideal: n
                    });
                    const _o = i.version < 66;
                    if (n && ('user' === n.exact || 'environment' === n.exact || 'user' === n.ideal || 'environment' === n.ideal) && (!_h.mediaDevices.getSupportedConstraints || !_h.mediaDevices.getSupportedConstraints().facingMode || _o)) {
                        let p;
                        if (delete l.video.facingMode, 'environment' === n.exact || 'environment' === n.ideal ? p = [
                                'back',
                                'rear'
                            ] : 'user' !== n.exact && 'user' !== n.ideal || (p = ['front']), p)
                            return _h.mediaDevices.enumerateDevices().then(_h => {
                                let q = (_h = _h.filter(l => 'videoinput' === l.kind)).find(l => p.some(_h => l.label.toLowerCase().includes(_h)));
                                return !q && _h.length && p.includes('back') && (q = _h[_h.length - 1]), q && (l.video.deviceId = n.exact ? {
                                    exact: q.deviceId
                                } : {
                                    ideal: q.deviceId
                                }), l.video = j(l.video), e('chrome: ' + JSON.stringify(l)), m(l);
                            });
                    }
                    l.video = j(l.video);
                }
                return e('chrome: ' + JSON.stringify(l)), m(l);
            },
            l = function(m) {
                return i.version >= 64 ? m : {
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
                    } [m.name] || m.name,
                    message: m.message,
                    constraint: m.constraint || m.constraintName,
                    toString() {
                        return this.name + (this.message && ': ') + this.message;
                    }
                };
            };
        if (_h.getUserMedia = function(m, n, o) {
                k(m, m => {
                    _h.webkitGetUserMedia(m, n, m => {
                        o && o(l(m));
                    });
                });
            }.bind(_h), _h.mediaDevices.getUserMedia) {
            const m = _h.mediaDevices.getUserMedia.bind(_h.mediaDevices);
            _h.mediaDevices.getUserMedia = function(n) {
                return k(n, n => m(n).then(m => {
                    if (n.audio && !m.getAudioTracks().length || n.video && !m.getVideoTracks().length)
                        throw m.getTracks().forEach(m => {
                            m.stop();
                        }), new DOMException('', 'NotFoundError');
                    return m;
                }, m => Promise.reject(l(m))));
            };
        }
    }
}), a.register('fEO4R', function(b, c) {
    function d(e, f) {
        e.navigator.mediaDevices && 'getDisplayMedia' in e.navigator.mediaDevices || e.navigator.mediaDevices && ('function' == typeof f ? e.navigator.mediaDevices.getDisplayMedia = function(g) {
            return f(g).then(f => {
                const h = g.video && g.video.width,
                    i = g.video && g.video.height,
                    j = g.video && g.video.frameRate;
                return g.video = {
                    mandatory: {
                        chromeMediaSource: 'desktop',
                        chromeMediaSourceId: f,
                        maxFrameRate: j || 3
                    }
                }, h && (g.video.mandatory.maxWidth = h), i && (g.video.mandatory.maxHeight = i), e.navigator.mediaDevices.getUserMedia(g);
            });
        } : console.error('shimGetDisplayMedia: getSourceId argument is not a function'));
    }
    _i(b.exports, 'shimGetDisplayMedia', function() {
        return a;
    });
}), a.register('9ixV/', function(b, c) {
    _i(b.exports, 'shimPeerConnection', function() {
        return _g;
    }), _i(b.exports, 'shimReplaceTrack', function() {
        return _g;
    }), _i(b.exports, 'shimGetUserMedia', function() {
        return a('BO2yY').shimGetUserMedia;
    }), _i(b.exports, 'shimGetDisplayMedia', function() {
        return a('XNYzQ').shimGetDisplayMedia;
    });
    var d = a('AjDBF'),
        e = a('rtVTG'),
        f = a('L21/n');
    a('BO2yY'), a('XNYzQ');

    function _g(h) {
        const _i = d.detectBrowser(h);
        if (h.RTCIceGatherer && (h.RTCIceCandidate || (h.RTCIceCandidate = function(j) {
                return j;
            }), h.RTCSessionDescription || (h.RTCSessionDescription = function(j) {
                return j;
            }), _i.version < 15025)) {
            const j = Object.getOwnPropertyDescriptor(h.MediaStreamTrack.prototype, 'enabled');
            Object.defineProperty(h.MediaStreamTrack.prototype, 'enabled', {
                set(k) {
                    j.set.call(this, k);
                    const l = new Event('enabled');
                    l.enabled = k, this.dispatchEvent(l);
                }
            });
        }
        h.RTCRtpSender && !('dtmf' in h.RTCRtpSender.prototype) && Object.defineProperty(h.RTCRtpSender.prototype, 'dtmf', {
            get() {
                return void 0 === this._dtmf && ('audio' === this.track.kind ? this._dtmf = new h.RTCDtmfSender(this) : 'video' === this.track.kind && (this._dtmf = null)), this._dtmf;
            }
        }), h.RTCDtmfSender && !h.RTCDTMFSender && (h.RTCDTMFSender = h.RTCDtmfSender);
        const j = _c(f)(h, _i.version);
        h.RTCPeerConnection = function(k) {
            return k && k.iceServers && (k.iceServers = (0, e.filterIceServers)(k.iceServers, _i.version), d.log('ICE servers after filtering:', k.iceServers)), new j(k);
        }, h.RTCPeerConnection.prototype = j.prototype;
    }

    function _g(h) {
        h.RTCRtpSender && !('replaceTrack' in h.RTCRtpSender.prototype) && (h.RTCRtpSender.prototype.replaceTrack = h.RTCRtpSender.prototype.setTrack);
    }
}), a.register('rtVTG', function(b, _c) {
    _g(b.exports, 'filterIceServers', function() {
        return _e;
    });
    var d = a('AjDBF');

    function _e(f, _g) {
        let h = !1;
        return (f = JSON.parse(JSON.stringify(f))).filter(f => {
            if (f && (f.urls || f.url)) {
                let i = f.urls || f.url;
                f.url && !f.urls && d.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                const j = 'string' == typeof i;
                return j && (i = [i]), i = i.filter(f => {
                    if (0 === f.indexOf('stun:'))
                        return !1;
                    const k = f.startsWith('turn') && !f.startsWith('turn:[') && f.includes('transport=udp');
                    return k && !h ? (h = !0, !0) : k && !h;
                }), delete f.url, f.urls = j ? i[0] : i, !!i.length;
            }
        });
    }
}), a.register('L21/n', function(b, c) {
    var d = a('yIuHV');

    function e(f, g, h, i, j) {
        var k = d.writeRtpDescription(f.kind, g);
        if (k += d.writeIceParameters(f.iceGatherer.getLocalParameters()), k += d.writeDtlsParameters(f.dtlsTransport.getLocalParameters(), 'offer' === h ? 'actpass' : j || 'active'), k += 'a=mid:' + f.mid + '\r\n', f.rtpSender && f.rtpReceiver ? k += 'a=sendrecv\r\n' : f.rtpSender ? k += 'a=sendonly\r\n' : f.rtpReceiver ? k += 'a=recvonly\r\n' : k += 'a=inactive\r\n', f.rtpSender) {
            var l = f.rtpSender._initialTrackId || f.rtpSender.track.id;
            f.rtpSender._initialTrackId = l;
            var m = 'msid:' + (i ? i.id : '-') + ' ' + l + '\r\n';
            k += 'a=' + m, k += 'a=ssrc:' + f.sendEncodingParameters[0].ssrc + ' ' + m, f.sendEncodingParameters[0].rtx && (k += 'a=ssrc:' + f.sendEncodingParameters[0].rtx.ssrc + ' ' + m, k += 'a=ssrc-group:FID ' + f.sendEncodingParameters[0].ssrc + ' ' + f.sendEncodingParameters[0].rtx.ssrc + '\r\n');
        }
        return k += 'a=ssrc:' + f.sendEncodingParameters[0].ssrc + ' cname:' + d.localCName + '\r\n', f.rtpSender && f.sendEncodingParameters[0].rtx && (k += 'a=ssrc:' + f.sendEncodingParameters[0].rtx.ssrc + ' cname:' + d.localCName + '\r\n'), k;
    }

    function e(f, g) {
        var h = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: []
            },
            i = function(j, k) {
                j = parseInt(j, 10);
                for (var l = 0; l < k.length; l++)
                    if (k[l].payloadType === j || k[l].preferredPayloadType === j)
                        return k[l];
            },
            j = function(k, l, m, n) {
                var o = i(k.parameters.apt, m),
                    p = i(l.parameters.apt, n);
                return o && p && o.name.toLowerCase() === p.name.toLowerCase();
            };
        return f.codecs.forEach(function(k) {
            for (var l = 0; l < g.codecs.length; l++) {
                var m = g.codecs[l];
                if (k.name.toLowerCase() === m.name.toLowerCase() && k.clockRate === m.clockRate) {
                    if ('rtx' === k.name.toLowerCase() && k.parameters && m.parameters.apt && !j(k, m, f.codecs, g.codecs))
                        continue;
                    (m = JSON.parse(JSON.stringify(m))).numChannels = Math.min(k.numChannels, m.numChannels), h.codecs.push(m), m.rtcpFeedback = m.rtcpFeedback.filter(function(n) {
                        for (var o = 0; o < k.rtcpFeedback.length; o++)
                            if (k.rtcpFeedback[o].type === n.type && k.rtcpFeedback[o].parameter === n.parameter)
                                return !0;
                        return !1;
                    });
                    break;
                }
            }
        }), f.headerExtensions.forEach(function(k) {
            for (var l = 0; l < g.headerExtensions.length; l++) {
                var m = g.headerExtensions[l];
                if (k.uri === m.uri) {
                    h.headerExtensions.push(m);
                    break;
                }
            }
        }), h;
    }

    function e(f, g, h) {
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
        } [g][f].indexOf(h);
    }

    function e(f, g) {
        var h = f.getRemoteCandidates().find(function(i) {
            return g.foundation === i.foundation && g.ip === i.ip && g.port === i.port && g.priority === i.priority && g.protocol === i.protocol && g.type === i.type;
        });
        return h || f.addRemoteCandidate(g), !h;
    }

    function e(f, g) {
        var h = new Error(g);
        return h.name = f, h.code = {
            NotSupportedError: 9,
            InvalidStateError: 11,
            InvalidAccessError: 15,
            TypeError: void 0,
            OperationError: void 0
        } [f], h;
    }
    b.exports = function(e, f) {
        function g(h, i) {
            i.addTrack(h), i.dispatchEvent(new e.MediaStreamTrackEvent('addtrack', {
                track: h
            }));
        }

        function g(h, i, j, k) {
            var l = new Event('track');
            l.track = i, l.receiver = j, l.transceiver = {
                receiver: j
            }, l.streams = k, e.setTimeout(function() {
                h._dispatchEvent('track', l);
            });
        }
        var _g = function(h) {
            var i = this,
                j = document.createDocumentFragment();
            if ([
                    'addEventListener',
                    'removeEventListener',
                    'dispatchEvent'
                ].forEach(function(k) {
                    i[k] = j[k].bind(j);
                }), this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this._localDescription = null, this._remoteDescription = null, this.signalingState = 'stable', this.iceConnectionState = 'new', this.connectionState = 'new', this.iceGatheringState = 'new', h = JSON.parse(JSON.stringify(h || {})), this.usingBundle = 'max-bundle' === h.bundlePolicy, 'negotiate' === h.rtcpMuxPolicy)
                throw _p('NotSupportedError', 'rtcpMuxPolicy \'negotiate\' is not supported');
            switch (h.rtcpMuxPolicy || (h.rtcpMuxPolicy = 'require'), h.iceTransportPolicy) {
                case 'all':
                case 'relay':
                    break;
                default:
                    h.iceTransportPolicy = 'all';
            }
            switch (h.bundlePolicy) {
                case 'balanced':
                case 'max-compat':
                case 'max-bundle':
                    break;
                default:
                    h.bundlePolicy = 'balanced';
            }
            if (h.iceServers = function(k, l) {
                    var m = !1;
                    return (k = JSON.parse(JSON.stringify(k))).filter(function(n) {
                        if (n && (n.urls || n.url)) {
                            var o = n.urls || n.url;
                            n.url && !n.urls && console.warn('RTCIceServer.url is deprecated! Use urls instead.');
                            var p = 'string' == typeof o;
                            return p && (o = [o]), o = o.filter(function(q) {
                                return 0 !== q.indexOf('turn:') || -1 === q.indexOf('transport=udp') || -1 !== q.indexOf('turn:[') || m ? 0 === q.indexOf('stun:') && l >= 14393 && -1 === q.indexOf('?transport=udp') : (m = !0, !0);
                            }), delete n.url, n.urls = p ? o[0] : o, !!o.length;
                        }
                    });
                }(h.iceServers || [], f), this._iceGatherers = [], h.iceCandidatePoolSize)
                for (var k = h.iceCandidatePoolSize; k > 0; k--)
                    this._iceGatherers.push(new e.RTCIceGatherer({
                        iceServers: h.iceServers,
                        gatherPolicy: h.iceTransportPolicy
                    }));
            else
                h.iceCandidatePoolSize = 0;
            this._config = h, this.transceivers = [], this._sdpSessionId = d.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0, this._isClosed = !1;
        };
        Object.defineProperty(_g.prototype, 'localDescription', {
            configurable: !0,
            get: function() {
                return this._localDescription;
            }
        }), Object.defineProperty(_g.prototype, 'remoteDescription', {
            configurable: !0,
            get: function() {
                return this._remoteDescription;
            }
        }), _g.prototype.onicecandidate = null, _g.prototype.onaddstream = null, _g.prototype.ontrack = null, _g.prototype.onremovestream = null, _g.prototype.onsignalingstatechange = null, _g.prototype.oniceconnectionstatechange = null, _g.prototype.onconnectionstatechange = null, _g.prototype.onicegatheringstatechange = null, _g.prototype.onnegotiationneeded = null, _g.prototype.ondatachannel = null, _g.prototype._dispatchEvent = function(h, i) {
            this._isClosed || (this.dispatchEvent(i), 'function' == typeof this['on' + h] && this['on' + h](i));
        }, _g.prototype._emitGatheringStateChange = function() {
            var h = new Event('icegatheringstatechange');
            this._dispatchEvent('icegatheringstatechange', h);
        }, _g.prototype.getConfiguration = function() {
            return this._config;
        }, _g.prototype.getLocalStreams = function() {
            return this.localStreams;
        }, _g.prototype.getRemoteStreams = function() {
            return this.remoteStreams;
        }, _g.prototype._createTransceiver = function(h, i) {
            var j = this.transceivers.length > 0,
                k = {
                    track: null,
                    iceGatherer: null,
                    iceTransport: null,
                    dtlsTransport: null,
                    localCapabilities: null,
                    remoteCapabilities: null,
                    rtpSender: null,
                    rtpReceiver: null,
                    kind: h,
                    mid: null,
                    sendEncodingParameters: null,
                    recvEncodingParameters: null,
                    stream: null,
                    associatedRemoteMediaStreams: [],
                    wantReceive: !0
                };
            if (this.usingBundle && j)
                k.iceTransport = this.transceivers[0].iceTransport, k.dtlsTransport = this.transceivers[0].dtlsTransport;
            else {
                var l = this._createIceAndDtlsTransports();
                k.iceTransport = l.iceTransport, k.dtlsTransport = l.dtlsTransport;
            }
            return i || this.transceivers.push(k), k;
        }, _g.prototype.addTrack = function(h, i) {
            if (this._isClosed)
                throw _p('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.');
            var j;
            if (this.transceivers.find(function(k) {
                    return k.track === h;
                }))
                throw _p('InvalidAccessError', 'Track already exists.');
            for (var k = 0; k < this.transceivers.length; k++)
                this.transceivers[k].track || this.transceivers[k].kind !== h.kind || (j = this.transceivers[k]);
            return j || (j = this._createTransceiver(h.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(i) && this.localStreams.push(i), j.track = h, j.stream = i, j.rtpSender = new e.RTCRtpSender(h, j.dtlsTransport), j.rtpSender;
        }, _g.prototype.addStream = function(h) {
            var i = this;
            if (f >= 15025)
                h.getTracks().forEach(function(j) {
                    i.addTrack(j, h);
                });
            else {
                var j = h.clone();
                h.getTracks().forEach(function(k, l) {
                    var m = j.getTracks()[l];
                    k.addEventListener('enabled', function(n) {
                        m.enabled = n.enabled;
                    });
                }), j.getTracks().forEach(function(k) {
                    i.addTrack(k, j);
                });
            }
        }, _g.prototype.removeTrack = function(h) {
            if (this._isClosed)
                throw _p('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.');
            if (!(h instanceof e.RTCRtpSender))
                throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.');
            var i = this.transceivers.find(function(j) {
                return j.rtpSender === h;
            });
            if (!i)
                throw _p('InvalidAccessError', 'Sender was not created by this connection.');
            var j = i.stream;
            i.rtpSender.stop(), i.rtpSender = null, i.track = null, i.stream = null, -1 === this.transceivers.map(function(k) {
                return k.stream;
            }).indexOf(j) && this.localStreams.indexOf(j) > -1 && this.localStreams.splice(this.localStreams.indexOf(j), 1), this._maybeFireNegotiationNeeded();
        }, _g.prototype.removeStream = function(h) {
            var i = this;
            h.getTracks().forEach(function(j) {
                var k = i.getSenders().find(function(l) {
                    return l.track === j;
                });
                k && i.removeTrack(k);
            });
        }, _g.prototype.getSenders = function() {
            return this.transceivers.filter(function(h) {
                return !!h.rtpSender;
            }).map(function(h) {
                return h.rtpSender;
            });
        }, _g.prototype.getReceivers = function() {
            return this.transceivers.filter(function(h) {
                return !!h.rtpReceiver;
            }).map(function(h) {
                return h.rtpReceiver;
            });
        }, _g.prototype._createIceGatherer = function(h, i) {
            var j = this;
            if (i && h > 0)
                return this.transceivers[0].iceGatherer;
            if (this._iceGatherers.length)
                return this._iceGatherers.shift();
            var k = new e.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy
            });
            return Object.defineProperty(k, 'state', {
                value: 'new',
                writable: !0
            }), this.transceivers[h].bufferedCandidateEvents = [], this.transceivers[h].bufferCandidates = function(l) {
                var m = !l.candidate || 0 === Object.keys(l.candidate).length;
                k.state = m ? 'completed' : 'gathering', null !== j.transceivers[h].bufferedCandidateEvents && j.transceivers[h].bufferedCandidateEvents.push(l);
            }, k.addEventListener('localcandidate', this.transceivers[h].bufferCandidates), k;
        }, _g.prototype._gather = function(h, i) {
            var j = this,
                k = this.transceivers[i].iceGatherer;
            if (!k.onlocalcandidate) {
                var l = this.transceivers[i].bufferedCandidateEvents;
                this.transceivers[i].bufferedCandidateEvents = null, k.removeEventListener('localcandidate', this.transceivers[i].bufferCandidates), k.onlocalcandidate = function(m) {
                    if (!(j.usingBundle && i > 0)) {
                        var n = new Event('icecandidate');
                        n.candidate = {
                            sdpMid: h,
                            sdpMLineIndex: i
                        };
                        var o = m.candidate,
                            _p = !o || 0 === Object.keys(o).length;
                        if (_p)
                            'new' !== k.state && 'gathering' !== k.state || (k.state = 'completed');
                        else {
                            'new' === k.state && (k.state = 'gathering'), o.component = 1, o.ufrag = k.getLocalParameters().usernameFragment;
                            var q = d.writeCandidate(o);
                            n.candidate = Object.assign(n.candidate, d.parseCandidate(q)), n.candidate.candidate = q, n.candidate.toJSON = function() {
                                return {
                                    candidate: n.candidate.candidate,
                                    sdpMid: n.candidate.sdpMid,
                                    sdpMLineIndex: n.candidate.sdpMLineIndex,
                                    usernameFragment: n.candidate.usernameFragment
                                };
                            };
                        }
                        var q = d.getMediaSections(j._localDescription.sdp);
                        q[n.candidate.sdpMLineIndex] += _p ? 'a=end-of-candidates\r\n' : 'a=' + n.candidate.candidate + '\r\n', j._localDescription.sdp = d.getDescription(j._localDescription.sdp) + q.join('');
                        var r = j.transceivers.every(function(s) {
                            return s.iceGatherer && 'completed' === s.iceGatherer.state;
                        });
                        'gathering' !== j.iceGatheringState && (j.iceGatheringState = 'gathering', j._emitGatheringStateChange()), _p || j._dispatchEvent('icecandidate', n), r && (j._dispatchEvent('icecandidate', new Event('icecandidate')), j.iceGatheringState = 'complete', j._emitGatheringStateChange());
                    }
                }, e.setTimeout(function() {
                    l.forEach(function(m) {
                        k.onlocalcandidate(m);
                    });
                }, 0);
            }
        }, _g.prototype._createIceAndDtlsTransports = function() {
            var h = this,
                i = new e.RTCIceTransport(null);
            i.onicestatechange = function() {
                h._updateIceConnectionState(), h._updateConnectionState();
            };
            var j = new e.RTCDtlsTransport(i);
            return j.ondtlsstatechange = function() {
                h._updateConnectionState();
            }, j.onerror = function() {
                Object.defineProperty(j, 'state', {
                    value: 'failed',
                    writable: !0
                }), h._updateConnectionState();
            }, {
                iceTransport: i,
                dtlsTransport: j
            };
        }, _g.prototype._disposeIceAndDtlsTransports = function(h) {
            var i = this.transceivers[h].iceGatherer;
            i && (delete i.onlocalcandidate, delete this.transceivers[h].iceGatherer);
            var j = this.transceivers[h].iceTransport;
            j && (delete j.onicestatechange, delete this.transceivers[h].iceTransport);
            var k = this.transceivers[h].dtlsTransport;
            k && (delete k.ondtlsstatechange, delete k.onerror, delete this.transceivers[h].dtlsTransport);
        }, _g.prototype._transceive = function(h, i, j) {
            var k = _i(h.localCapabilities, h.remoteCapabilities);
            i && h.rtpSender && (k.encodings = h.sendEncodingParameters, k.rtcp = {
                cname: d.localCName,
                compound: h.rtcpParameters.compound
            }, h.recvEncodingParameters.length && (k.rtcp.ssrc = h.recvEncodingParameters[0].ssrc), h.rtpSender.send(k)), j && h.rtpReceiver && k.codecs.length > 0 && ('video' === h.kind && h.recvEncodingParameters && f < 15019 && h.recvEncodingParameters.forEach(function(l) {
                delete l.rtx;
            }), h.recvEncodingParameters.length ? k.encodings = h.recvEncodingParameters : k.encodings = [{}], k.rtcp = {
                compound: h.rtcpParameters.compound
            }, h.rtcpParameters.cname && (k.rtcp.cname = h.rtcpParameters.cname), h.sendEncodingParameters.length && (k.rtcp.ssrc = h.sendEncodingParameters[0].ssrc), h.rtpReceiver.receive(k));
        }, _g.prototype.setLocalDescription = function(h) {
            var i, j, k = this;
            if (-1 === [
                    'offer',
                    'answer'
                ].indexOf(h.type))
                return Promise.reject(_p('TypeError', 'Unsupported type "' + h.type + '"'));
            if (!_o('setLocalDescription', h.type, k.signalingState) || k._isClosed)
                return Promise.reject(_p('InvalidStateError', 'Can not set local ' + h.type + ' in state ' + k.signalingState));
            if ('offer' === h.type)
                i = d.splitSections(h.sdp), j = i.shift(), i.forEach(function(l, m) {
                    var n = d.parseRtpParameters(l);
                    k.transceivers[m].localCapabilities = n;
                }), k.transceivers.forEach(function(l, m) {
                    k._gather(l.mid, m);
                });
            else if ('answer' === h.type) {
                i = d.splitSections(k._remoteDescription.sdp), j = i.shift();
                var l = d.matchPrefix(j, 'a=ice-lite').length > 0;
                i.forEach(function(m, n) {
                    var _o = k.transceivers[n],
                        _p = _o.iceGatherer,
                        q = _o.iceTransport,
                        r = _o.dtlsTransport,
                        s = _o.localCapabilities,
                        t = _o.remoteCapabilities;
                    if (!(d.isRejected(m) && 0 === d.matchPrefix(m, 'a=bundle-only').length) && !_o.rejected) {
                        var u = d.getIceParameters(m, j),
                            _v = d.getDtlsParameters(m, j);
                        l && (_v.role = 'server'), k.usingBundle && 0 !== n || (k._gather(_o.mid, n), 'new' === q.state && q.start(_p, u, l ? 'controlling' : 'controlled'), 'new' === r.state && r.start(_v));
                        var w = _i(s, t);
                        k._transceive(_o, w.codecs.length > 0, !1);
                    }
                });
            }
            return k._localDescription = {
                type: h.type,
                sdp: h.sdp
            }, 'offer' === h.type ? k._updateSignalingState('have-local-offer') : k._updateSignalingState('stable'), Promise.resolve();
        }, _g.prototype.setRemoteDescription = function(h) {
            var i = this;
            if (-1 === [
                    'offer',
                    'answer'
                ].indexOf(h.type))
                return Promise.reject(_r('TypeError', 'Unsupported type "' + h.type + '"'));
            if (!_q('setRemoteDescription', h.type, i.signalingState) || i._isClosed)
                return Promise.reject(_r('InvalidStateError', 'Can not set remote ' + h.type + ' in state ' + i.signalingState));
            var j = {};
            i.remoteStreams.forEach(function(k) {
                j[k.id] = k;
            });
            var k = [],
                l = d.splitSections(h.sdp),
                m = l.shift(),
                n = d.matchPrefix(m, 'a=ice-lite').length > 0,
                o = d.matchPrefix(m, 'a=group:BUNDLE ').length > 0;
            i.usingBundle = o;
            var p = d.matchPrefix(m, 'a=ice-options:')[0];
            return i.canTrickleIceCandidates = !!p && p.substr(14).split(' ').indexOf('trickle') >= 0, l.forEach(function(_q, _r) {
                var s = d.splitLines(_q),
                    t = d.getKind(_q),
                    u = d.isRejected(_q) && 0 === d.matchPrefix(_q, 'a=bundle-only').length,
                    v = s[0].substr(2).split(' ')[2],
                    w = d.getDirection(_q, m),
                    x = d.parseMsid(_q),
                    y = d.getMid(_q) || d.generateIdentifier();
                if (u || 'application' === t && ('DTLS/SCTP' === v || 'UDP/DTLS/SCTP' === v))
                    i.transceivers[_r] = {
                        mid: y,
                        kind: t,
                        protocol: v,
                        rejected: !0
                    };
                else {
                    var z, A, B, C, D, E, F, G, H;
                    !u && i.transceivers[_r] && i.transceivers[_r].rejected && (i.transceivers[_r] = i._createTransceiver(t, !0));
                    var I, J, K = d.parseRtpParameters(_q);
                    u || (I = d.getIceParameters(_q, m), (J = d.getDtlsParameters(_q, m)).role = 'client'), F = d.parseRtpEncodingParameters(_q);
                    var L = d.parseRtcpParameters(_q),
                        M = d.matchPrefix(_q, 'a=end-of-candidates', m).length > 0,
                        N = d.matchPrefix(_q, 'a=candidate:').map(function(O) {
                            return d.parseCandidate(O);
                        }).filter(function(O) {
                            return 1 === O.component;
                        });
                    if (('offer' === h.type || 'answer' === h.type) && !u && o && _r > 0 && i.transceivers[_r] && (i._disposeIceAndDtlsTransports(_r), i.transceivers[_r].iceGatherer = i.transceivers[0].iceGatherer, i.transceivers[_r].iceTransport = i.transceivers[0].iceTransport, i.transceivers[_r].dtlsTransport = i.transceivers[0].dtlsTransport, i.transceivers[_r].rtpSender && i.transceivers[_r].rtpSender.setTransport(i.transceivers[0].dtlsTransport), i.transceivers[_r].rtpReceiver && i.transceivers[_r].rtpReceiver.setTransport(i.transceivers[0].dtlsTransport)), 'offer' !== h.type || u) {
                        if ('answer' === h.type && !u) {
                            A = (z = i.transceivers[_r]).iceGatherer, B = z.iceTransport, C = z.dtlsTransport, D = z.rtpReceiver, E = z.sendEncodingParameters, G = z.localCapabilities, i.transceivers[_r].recvEncodingParameters = F, i.transceivers[_r].remoteCapabilities = K, i.transceivers[_r].rtcpParameters = L, N.length && 'new' === B.state && (!n && !M || o && 0 !== _r ? N.forEach(function(O) {
                                _k(z.iceTransport, O);
                            }) : B.setRemoteCandidates(N)), o && 0 !== _r || ('new' === B.state && B.start(A, I, 'controlling'), 'new' === C.state && C.start(J)), !_i(z.localCapabilities, z.remoteCapabilities).codecs.filter(function(O) {
                                return 'rtx' === O.name.toLowerCase();
                            }).length && z.sendEncodingParameters[0].rtx && delete z.sendEncodingParameters[0].rtx, i._transceive(z, 'sendrecv' === w || 'recvonly' === w, 'sendrecv' === w || 'sendonly' === w), !D || 'sendrecv' !== w && 'sendonly' !== w ? delete z.rtpReceiver : (H = D.track, x ? (j[x.stream] || (j[x.stream] = new e.MediaStream()), a(H, j[x.stream]), k.push([
                                H,
                                D,
                                j[x.stream]
                            ])) : (j.default || (j.default = new e.MediaStream()), a(H, j.default), k.push([
                                H,
                                D,
                                j.default
                            ])));
                        }
                    } else {
                        (z = i.transceivers[_r] || i._createTransceiver(t)).mid = y, z.iceGatherer || (z.iceGatherer = i._createIceGatherer(_r, o)), N.length && 'new' === z.iceTransport.state && (!M || o && 0 !== _r ? N.forEach(function(O) {
                            _k(z.iceTransport, O);
                        }) : z.iceTransport.setRemoteCandidates(N)), G = e.RTCRtpReceiver.getCapabilities(t), f < 15019 && (G.codecs = G.codecs.filter(function(O) {
                            return 'rtx' !== O.name;
                        })), E = z.sendEncodingParameters || [{
                            ssrc: 1001 * (2 * _r + 2)
                        }];
                        var O, P = !1;
                        if ('sendrecv' === w || 'sendonly' === w) {
                            if (P = !z.rtpReceiver, D = z.rtpReceiver || new e.RTCRtpReceiver(z.dtlsTransport, t), P)
                                H = D.track, x && '-' === x.stream || (x ? (j[x.stream] || (j[x.stream] = new e.MediaStream(), Object.defineProperty(j[x.stream], 'id', {
                                    get: function() {
                                        return x.stream;
                                    }
                                })), Object.defineProperty(H, 'id', {
                                    get: function() {
                                        return x.track;
                                    }
                                }), O = j[x.stream]) : (j.default || (j.default = new e.MediaStream()), O = j.default)), O && (a(H, O), z.associatedRemoteMediaStreams.push(O)), k.push([
                                    H,
                                    D,
                                    O
                                ]);
                        } else
                            z.rtpReceiver && z.rtpReceiver.track && (z.associatedRemoteMediaStreams.forEach(function(Q) {
                                var R = Q.getTracks().find(function(S) {
                                    return S.id === z.rtpReceiver.track.id;
                                });
                                R && function(S, T) {
                                    T.removeTrack(S), T.dispatchEvent(new e.MediaStreamTrackEvent('removetrack', {
                                        track: S
                                    }));
                                }(R, Q);
                            }), z.associatedRemoteMediaStreams = []);
                        z.localCapabilities = G, z.remoteCapabilities = K, z.rtpReceiver = D, z.rtcpParameters = L, z.sendEncodingParameters = E, z.recvEncodingParameters = F, i._transceive(i.transceivers[_r], !1, P);
                    }
                }
            }), void 0 === i._dtlsRole && (i._dtlsRole = 'offer' === h.type ? 'active' : 'passive'), i._remoteDescription = {
                type: h.type,
                sdp: h.sdp
            }, 'offer' === h.type ? i._updateSignalingState('have-remote-offer') : i._updateSignalingState('stable'), Object.keys(j).forEach(function(q) {
                var r = j[q];
                if (r.getTracks().length) {
                    if (-1 === i.remoteStreams.indexOf(r)) {
                        i.remoteStreams.push(r);
                        var s = new Event('addstream');
                        s.stream = r, e.setTimeout(function() {
                            i._dispatchEvent('addstream', s);
                        });
                    }
                    k.forEach(function(s) {
                        var t = s[0],
                            u = s[1];
                        r.id === s[2].id && _l(i, t, u, [r]);
                    });
                }
            }), k.forEach(function(q) {
                q[2] || _l(i, q[0], q[1], []);
            }), e.setTimeout(function() {
                i && i.transceivers && i.transceivers.forEach(function(q) {
                    q.iceTransport && 'new' === q.iceTransport.state && q.iceTransport.getRemoteCandidates().length > 0 && (console.warn('Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification'), q.iceTransport.addRemoteCandidate({}));
                });
            }, 4000), Promise.resolve();
        }, _g.prototype.close = function() {
            this.transceivers.forEach(function(h) {
                h.iceTransport && h.iceTransport.stop(), h.dtlsTransport && h.dtlsTransport.stop(), h.rtpSender && h.rtpSender.stop(), h.rtpReceiver && h.rtpReceiver.stop();
            }), this._isClosed = !0, this._updateSignalingState('closed');
        }, _g.prototype._updateSignalingState = function(h) {
            this.signalingState = h;
            var i = new Event('signalingstatechange');
            this._dispatchEvent('signalingstatechange', i);
        }, _g.prototype._maybeFireNegotiationNeeded = function() {
            var h = this;
            'stable' === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout(function() {
                if (h.needNegotiation) {
                    h.needNegotiation = !1;
                    var i = new Event('negotiationneeded');
                    h._dispatchEvent('negotiationneeded', i);
                }
            }, 0));
        }, _g.prototype._updateIceConnectionState = function() {
            var h, i = {
                new: 0,
                closed: 0,
                checking: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach(function(j) {
                    j.iceTransport && !j.rejected && i[j.iceTransport.state]++;
                }), h = 'new', i.failed > 0 ? h = 'failed' : i.checking > 0 ? h = 'checking' : i.disconnected > 0 ? h = 'disconnected' : i.new > 0 ? h = 'new' : i.connected > 0 ? h = 'connected' : i.completed > 0 && (h = 'completed'), h !== this.iceConnectionState) {
                this.iceConnectionState = h;
                var j = new Event('iceconnectionstatechange');
                this._dispatchEvent('iceconnectionstatechange', j);
            }
        }, _g.prototype._updateConnectionState = function() {
            var h, i = {
                new: 0,
                closed: 0,
                connecting: 0,
                connected: 0,
                completed: 0,
                disconnected: 0,
                failed: 0
            };
            if (this.transceivers.forEach(function(j) {
                    j.iceTransport && j.dtlsTransport && !j.rejected && (i[j.iceTransport.state]++, i[j.dtlsTransport.state]++);
                }), i.connected += i.completed, h = 'new', i.failed > 0 ? h = 'failed' : i.connecting > 0 ? h = 'connecting' : i.disconnected > 0 ? h = 'disconnected' : i.new > 0 ? h = 'new' : i.connected > 0 && (h = 'connected'), h !== this.connectionState) {
                this.connectionState = h;
                var j = new Event('connectionstatechange');
                this._dispatchEvent('connectionstatechange', j);
            }
        }, _g.prototype.createOffer = function() {
            var h = this;
            if (h._isClosed)
                return Promise.reject(_q('InvalidStateError', 'Can not call createOffer after close'));
            var _i = h.transceivers.filter(function(j) {
                    return 'audio' === j.kind;
                }).length,
                j = h.transceivers.filter(function(k) {
                    return 'video' === k.kind;
                }).length,
                _k = arguments[0];
            if (_k) {
                if (_k.mandatory || _k.optional)
                    throw new TypeError('Legacy mandatory/optional constraints not supported.');
                void 0 !== _k.offerToReceiveAudio && (_i = !0 === _k.offerToReceiveAudio ? 1 : !1 === _k.offerToReceiveAudio ? 0 : _k.offerToReceiveAudio), void 0 !== _k.offerToReceiveVideo && (j = !0 === _k.offerToReceiveVideo ? 1 : !1 === _k.offerToReceiveVideo ? 0 : _k.offerToReceiveVideo);
            }
            for (h.transceivers.forEach(function(l) {
                    'audio' === l.kind ? --_i < 0 && (l.wantReceive = !1) : 'video' === l.kind && --j < 0 && (l.wantReceive = !1);
                }); _i > 0 || j > 0;)
                _i > 0 && (h._createTransceiver('audio'), _i--), j > 0 && (h._createTransceiver('video'), j--);
            var _l = d.writeSessionBoilerplate(h._sdpSessionId, h._sdpSessionVersion++);
            h.transceivers.forEach(function(m, n) {
                var o = m.track,
                    p = m.kind,
                    _q = m.mid || d.generateIdentifier();
                m.mid = _q, m.iceGatherer || (m.iceGatherer = h._createIceGatherer(n, h.usingBundle));
                var r = e.RTCRtpSender.getCapabilities(p);
                f < 15019 && (r.codecs = r.codecs.filter(function(s) {
                    return 'rtx' !== s.name;
                })), r.codecs.forEach(function(s) {
                    'H264' === s.name && void 0 === s.parameters['level-asymmetry-allowed'] && (s.parameters['level-asymmetry-allowed'] = '1'), m.remoteCapabilities && m.remoteCapabilities.codecs && m.remoteCapabilities.codecs.forEach(function(t) {
                        s.name.toLowerCase() === t.name.toLowerCase() && s.clockRate === t.clockRate && (s.preferredPayloadType = t.payloadType);
                    });
                }), r.headerExtensions.forEach(function(s) {
                    (m.remoteCapabilities && m.remoteCapabilities.headerExtensions || []).forEach(function(t) {
                        s.uri === t.uri && (s.id = t.id);
                    });
                });
                var s = m.sendEncodingParameters || [{
                    ssrc: 1001 * (2 * n + 1)
                }];
                o && f >= 15019 && 'video' === p && !s[0].rtx && (s[0].rtx = {
                    ssrc: s[0].ssrc + 1
                }), m.wantReceive && (m.rtpReceiver = new e.RTCRtpReceiver(m.dtlsTransport, p)), m.localCapabilities = r, m.sendEncodingParameters = s;
            }), 'max-compat' !== h._config.bundlePolicy && (_l += 'a=group:BUNDLE ' + h.transceivers.map(function(m) {
                return m.mid;
            }).join(' ') + '\r\n'), _l += 'a=ice-options:trickle\r\n', h.transceivers.forEach(function(m, n) {
                _l += _k(m, m.localCapabilities, 'offer', m.stream, h._dtlsRole), _l += 'a=rtcp-rsize\r\n', !m.iceGatherer || 'new' === h.iceGatheringState || 0 !== n && h.usingBundle || (m.iceGatherer.getLocalCandidates().forEach(function(o) {
                    o.component = 1, _l += 'a=' + d.writeCandidate(o) + '\r\n';
                }), 'completed' === m.iceGatherer.state && (_l += 'a=end-of-candidates\r\n'));
            });
            var m = new e.RTCSessionDescription({
                type: 'offer',
                sdp: _l
            });
            return Promise.resolve(m);
        }, _g.prototype.createAnswer = function() {
            var h = this;
            if (h._isClosed)
                return Promise.reject(_m('InvalidStateError', 'Can not call createAnswer after close'));
            if ('have-remote-offer' !== h.signalingState && 'have-local-pranswer' !== h.signalingState)
                return Promise.reject(_m('InvalidStateError', 'Can not call createAnswer in signalingState ' + h.signalingState));
            var i = d.writeSessionBoilerplate(h._sdpSessionId, h._sdpSessionVersion++);
            h.usingBundle && (i += 'a=group:BUNDLE ' + h.transceivers.map(function(j) {
                return j.mid;
            }).join(' ') + '\r\n'), i += 'a=ice-options:trickle\r\n';
            var j = d.getMediaSections(h._remoteDescription.sdp).length;
            h.transceivers.forEach(function(k, l) {
                if (!(l + 1 > j)) {
                    if (k.rejected)
                        return 'application' === k.kind ? 'DTLS/SCTP' === k.protocol ? i += 'm=application 0 DTLS/SCTP 5000\r\n' : i += 'm=application 0 ' + k.protocol + ' webrtc-datachannel\r\n' : 'audio' === k.kind ? i += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n' : 'video' === k.kind && (i += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n'), void(i += 'c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:' + k.mid + '\r\n');
                    var _m;
                    if (k.stream)
                        'audio' === k.kind ? _m = k.stream.getAudioTracks()[0] : 'video' === k.kind && (_m = k.stream.getVideoTracks()[0]), _m && f >= 15019 && 'video' === k.kind && !k.sendEncodingParameters[0].rtx && (k.sendEncodingParameters[0].rtx = {
                            ssrc: k.sendEncodingParameters[0].ssrc + 1
                        });
                    var n = _l(k.localCapabilities, k.remoteCapabilities);
                    !n.codecs.filter(function(o) {
                        return 'rtx' === o.name.toLowerCase();
                    }).length && k.sendEncodingParameters[0].rtx && delete k.sendEncodingParameters[0].rtx, i += _k(k, n, 'answer', k.stream, h._dtlsRole), k.rtcpParameters && k.rtcpParameters.reducedSize && (i += 'a=rtcp-rsize\r\n');
                }
            });
            var k = new e.RTCSessionDescription({
                type: 'answer',
                sdp: i
            });
            return Promise.resolve(k);
        }, _g.prototype.addIceCandidate = function(h) {
            var i, j = this;
            return h && void 0 === h.sdpMLineIndex && !h.sdpMid ? Promise.reject(new TypeError('sdpMLineIndex or sdpMid required')) : new Promise(function(_k, _l) {
                if (!j._remoteDescription)
                    return _l(_l('InvalidStateError', 'Can not add ICE candidate without a remote description'));
                if (h && '' !== h.candidate) {
                    var m = h.sdpMLineIndex;
                    if (h.sdpMid)
                        for (var n = 0; n < j.transceivers.length; n++)
                            if (j.transceivers[n].mid === h.sdpMid) {
                                m = n;
                                break;
                            }
                    var n = j.transceivers[m];
                    if (!n)
                        return _l(_l('OperationError', 'Can not add ICE candidate'));
                    if (n.rejected)
                        return _k();
                    var o = Object.keys(h.candidate).length > 0 ? d.parseCandidate(h.candidate) : {};
                    if ('tcp' === o.protocol && (0 === o.port || 9 === o.port))
                        return _k();
                    if (o.component && 1 !== o.component)
                        return _k();
                    if ((0 === m || m > 0 && n.iceTransport !== j.transceivers[0].iceTransport) && !_k(n.iceTransport, o))
                        return _l(_l('OperationError', 'Can not add ICE candidate'));
                    var p = h.candidate.trim();
                    0 === p.indexOf('a=') && (p = p.substr(2)), (i = d.getMediaSections(j._remoteDescription.sdp))[m] += 'a=' + (o.type ? p : 'end-of-candidates') + '\r\n', j._remoteDescription.sdp = d.getDescription(j._remoteDescription.sdp) + i.join('');
                } else
                    for (var m = 0; m < j.transceivers.length && (j.transceivers[m].rejected || (j.transceivers[m].iceTransport.addRemoteCandidate({}), (i = d.getMediaSections(j._remoteDescription.sdp))[m] += 'a=end-of-candidates\r\n', j._remoteDescription.sdp = d.getDescription(j._remoteDescription.sdp) + i.join(''), !j.usingBundle)); m++);
                _k();
            });
        }, _g.prototype.getStats = function(h) {
            if (h && h instanceof e.MediaStreamTrack) {
                var i = null;
                if (this.transceivers.forEach(function(j) {
                        j.rtpSender && j.rtpSender.track === h ? i = j.rtpSender : j.rtpReceiver && j.rtpReceiver.track === h && (i = j.rtpReceiver);
                    }), !i)
                    throw _l('InvalidAccessError', 'Invalid selector.');
                return i.getStats();
            }
            var i = [];
            return this.transceivers.forEach(function(j) {
                [
                    'rtpSender',
                    'rtpReceiver',
                    'iceGatherer',
                    'iceTransport',
                    'dtlsTransport'
                ].forEach(function(k) {
                    j[k] && i.push(j[k].getStats());
                });
            }), Promise.all(i).then(function(j) {
                var k = new Map();
                return j.forEach(function(l) {
                    l.forEach(function(m) {
                        k.set(m.id, m);
                    });
                }), k;
            });
        };
        [
            'RTCRtpSender',
            'RTCRtpReceiver',
            'RTCIceGatherer',
            'RTCIceTransport',
            'RTCDtlsTransport'
        ].forEach(function(h) {
            var i = e[h];
            if (i && i.prototype && i.prototype.getStats) {
                var j = i.prototype.getStats;
                i.prototype.getStats = function() {
                    return j.apply(this).then(function(k) {
                        var l = new Map();
                        return Object.keys(k).forEach(function(m) {
                            var n;
                            k[m].type = {
                                inboundrtp: 'inbound-rtp',
                                outboundrtp: 'outbound-rtp',
                                candidatepair: 'candidate-pair',
                                localcandidate: 'local-candidate',
                                remotecandidate: 'remote-candidate'
                            } [(n = k[m]).type] || n.type, l.set(m, k[m]);
                        }), l;
                    });
                };
            }
        });
        var h = [
            'createOffer',
            'createAnswer'
        ];
        return h.forEach(function(i) {
            var j = _g.prototype[i];
            _g.prototype[i] = function() {
                var k = arguments;
                return 'function' == typeof k[0] || 'function' == typeof k[1] ? j.apply(this, [arguments[2]]).then(function(l) {
                    'function' == typeof k[0] && k[0].apply(null, [l]);
                }, function(l) {
                    'function' == typeof k[1] && k[1].apply(null, [l]);
                }) : j.apply(this, arguments);
            };
        }), (h = [
            'setLocalDescription',
            'setRemoteDescription',
            'addIceCandidate'
        ]).forEach(function(i) {
            var j = _g.prototype[i];
            _g.prototype[i] = function() {
                var k = arguments;
                return 'function' == typeof k[1] || 'function' == typeof k[2] ? j.apply(this, arguments).then(function() {
                    'function' == typeof k[1] && k[1].apply(null);
                }, function(l) {
                    'function' == typeof k[2] && k[2].apply(null, [l]);
                }) : j.apply(this, arguments);
            };
        }), ['getStats'].forEach(function(i) {
            var j = _g.prototype[i];
            _g.prototype[i] = function() {
                var k = arguments;
                return 'function' == typeof k[1] ? j.apply(this, arguments).then(function() {
                    'function' == typeof k[1] && k[1].apply(null);
                }) : j.apply(this, arguments);
            };
        }), _g;
    };
}), a.register('yIuHV', function(b, c) {
    var d = {
        generateIdentifier: function() {
            return Math.random().toString(36).substr(2, 10);
        }
    };
    d.localCName = d.generateIdentifier(), d.splitLines = function(e) {
        return e.trim().split('\n').map(function(f) {
            return f.trim();
        });
    }, d.splitSections = function(e) {
        return e.split('\nm=').map(function(f, g) {
            return (g > 0 ? 'm=' + f : f).trim() + '\r\n';
        });
    }, d.getDescription = function(e) {
        var f = d.splitSections(e);
        return f && f[0];
    }, d.getMediaSections = function(e) {
        var f = d.splitSections(e);
        return f.shift(), f;
    }, d.matchPrefix = function(e, f) {
        return d.splitLines(e).filter(function(g) {
            return 0 === g.indexOf(f);
        });
    }, d.parseCandidate = function(e) {
        for (var f, g = {
                foundation: (f = 0 === e.indexOf('a=candidate:') ? e.substring(12).split(' ') : e.substring(10).split(' '))[0],
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
    }, d.writeCandidate = function(e) {
        var f = [];
        f.push(e.foundation), f.push(e.component), f.push(e.protocol.toUpperCase()), f.push(e.priority), f.push(e.address || e.ip), f.push(e.port);
        var g = e.type;
        return f.push('typ'), f.push(g), 'host' !== g && e.relatedAddress && e.relatedPort && (f.push('raddr'), f.push(e.relatedAddress), f.push('rport'), f.push(e.relatedPort)), e.tcpType && 'tcp' === e.protocol.toLowerCase() && (f.push('tcptype'), f.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (f.push('ufrag'), f.push(e.usernameFragment || e.ufrag)), 'candidate:' + f.join(' ');
    }, d.parseIceOptions = function(e) {
        return e.substr(14).split(' ');
    }, d.parseRtpMap = function(e) {
        var f = e.substr(9).split(' '),
            g = {
                payloadType: parseInt(f.shift(), 10)
            };
        return f = f[0].split('/'), g.name = f[0], g.clockRate = parseInt(f[1], 10), g.channels = 3 === f.length ? parseInt(f[2], 10) : 1, g.numChannels = g.channels, g;
    }, d.writeRtpMap = function(e) {
        var f = e.payloadType;
        void 0 !== e.preferredPayloadType && (f = e.preferredPayloadType);
        var g = e.channels || e.numChannels || 1;
        return 'a=rtpmap:' + f + ' ' + e.name + '/' + e.clockRate + (1 !== g ? '/' + g : '') + '\r\n';
    }, d.parseExtmap = function(e) {
        var f = e.substr(9).split(' ');
        return {
            id: parseInt(f[0], 10),
            direction: f[0].indexOf('/') > 0 ? f[0].split('/')[1] : 'sendrecv',
            uri: f[1]
        };
    }, d.writeExtmap = function(e) {
        return 'a=extmap:' + (e.id || e.preferredId) + (e.direction && 'sendrecv' !== e.direction ? '/' + e.direction : '') + ' ' + e.uri + '\r\n';
    }, d.parseFmtp = function(e) {
        for (var f, g = {}, h = e.substr(e.indexOf(' ') + 1).split(';'), i = 0; i < h.length; i++)
            g[(f = h[i].trim().split('='))[0].trim()] = f[1];
        return g;
    }, d.writeFmtp = function(e) {
        var f = '',
            g = e.payloadType;
        if (void 0 !== e.preferredPayloadType && (g = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
            var h = [];
            Object.keys(e.parameters).forEach(function(i) {
                e.parameters[i] ? h.push(i + '=' + e.parameters[i]) : h.push(i);
            }), f += 'a=fmtp:' + g + ' ' + h.join(';') + '\r\n';
        }
        return f;
    }, d.parseRtcpFb = function(e) {
        var f = e.substr(e.indexOf(' ') + 1).split(' ');
        return {
            type: f.shift(),
            parameter: f.join(' ')
        };
    }, d.writeRtcpFb = function(e) {
        var f = '',
            g = e.payloadType;
        return void 0 !== e.preferredPayloadType && (g = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function(h) {
            f += 'a=rtcp-fb:' + g + ' ' + h.type + (h.parameter && h.parameter.length ? ' ' + h.parameter : '') + '\r\n';
        }), f;
    }, d.parseSsrcMedia = function(e) {
        var f = e.indexOf(' '),
            g = {
                ssrc: parseInt(e.substr(7, f - 7), 10)
            },
            h = e.indexOf(':', f);
        return h > -1 ? (g.attribute = e.substr(f + 1, h - f - 1), g.value = e.substr(h + 1)) : g.attribute = e.substr(f + 1), g;
    }, d.parseSsrcGroup = function(e) {
        var f = e.substr(13).split(' ');
        return {
            semantics: f.shift(),
            ssrcs: f.map(function(g) {
                return parseInt(g, 10);
            })
        };
    }, d.getMid = function(e) {
        var f = d.matchPrefix(e, 'a=mid:')[0];
        if (f)
            return f.substr(6);
    }, d.parseFingerprint = function(e) {
        var f = e.substr(14).split(' ');
        return {
            algorithm: f[0].toLowerCase(),
            value: f[1]
        };
    }, d.getDtlsParameters = function(e, f) {
        return {
            role: 'auto',
            fingerprints: d.matchPrefix(e + f, 'a=fingerprint:').map(d.parseFingerprint)
        };
    }, d.writeDtlsParameters = function(e, f) {
        var g = 'a=setup:' + f + '\r\n';
        return e.fingerprints.forEach(function(h) {
            g += 'a=fingerprint:' + h.algorithm + ' ' + h.value + '\r\n';
        }), g;
    }, d.parseCryptoLine = function(e) {
        var f = e.substr(9).split(' ');
        return {
            tag: parseInt(f[0], 10),
            cryptoSuite: f[1],
            keyParams: f[2],
            sessionParams: f.slice(3)
        };
    }, d.writeCryptoLine = function(e) {
        return 'a=crypto:' + e.tag + ' ' + e.cryptoSuite + ' ' + ('object' == typeof e.keyParams ? d.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? ' ' + e.sessionParams.join(' ') : '') + '\r\n';
    }, d.parseCryptoKeyParams = function(e) {
        if (0 !== e.indexOf('inline:'))
            return null;
        var f = e.substr(7).split('|');
        return {
            keyMethod: 'inline',
            keySalt: f[0],
            lifeTime: f[1],
            mkiValue: f[2] ? f[2].split(':')[0] : void 0,
            mkiLength: f[2] ? f[2].split(':')[1] : void 0
        };
    }, d.writeCryptoKeyParams = function(e) {
        return e.keyMethod + ':' + e.keySalt + (e.lifeTime ? '|' + e.lifeTime : '') + (e.mkiValue && e.mkiLength ? '|' + e.mkiValue + ':' + e.mkiLength : '');
    }, d.getCryptoParameters = function(e, f) {
        return d.matchPrefix(e + f, 'a=crypto:').map(d.parseCryptoLine);
    }, d.getIceParameters = function(e, f) {
        var g = d.matchPrefix(e + f, 'a=ice-ufrag:')[0],
            h = d.matchPrefix(e + f, 'a=ice-pwd:')[0];
        return g && h ? {
            usernameFragment: g.substr(12),
            password: h.substr(10)
        } : null;
    }, d.writeIceParameters = function(e) {
        return 'a=ice-ufrag:' + e.usernameFragment + '\r\na=ice-pwd:' + e.password + '\r\n';
    }, d.parseRtpParameters = function(e) {
        for (var f = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            }, g = d.splitLines(e)[0].split(' '), h = 3; h < g.length; h++) {
            var i = g[h],
                j = d.matchPrefix(e, 'a=rtpmap:' + i + ' ')[0];
            if (j) {
                var _k = d.parseRtpMap(j),
                    _l = d.matchPrefix(e, 'a=fmtp:' + i + ' ');
                switch (_k.parameters = _l.length ? d.parseFmtp(_l[0]) : {}, _k.rtcpFeedback = d.matchPrefix(e, 'a=rtcp-fb:' + i + ' ').map(d.parseRtcpFb), f.codecs.push(_k), _k.name.toUpperCase()) {
                    case 'RED':
                    case 'ULPFEC':
                        f.fecMechanisms.push(_k.name.toUpperCase());
                }
            }
        }
        return d.matchPrefix(e, 'a=extmap:').forEach(function(i) {
            f.headerExtensions.push(d.parseExtmap(i));
        }), f;
    }, d.writeRtpDescription = function(e, f) {
        var g = '';
        g += 'm=' + e + ' ', g += f.codecs.length > 0 ? '9' : '0', g += ' UDP/TLS/RTP/SAVPF ', g += f.codecs.map(function(h) {
            return void 0 !== h.preferredPayloadType ? h.preferredPayloadType : h.payloadType;
        }).join(' ') + '\r\n', g += 'c=IN IP4 0.0.0.0\r\n', g += 'a=rtcp:9 IN IP4 0.0.0.0\r\n', f.codecs.forEach(function(h) {
            g += d.writeRtpMap(h), g += d.writeFmtp(h), g += d.writeRtcpFb(h);
        });
        var h = 0;
        return f.codecs.forEach(function(i) {
            i.maxptime > h && (h = i.maxptime);
        }), h > 0 && (g += 'a=maxptime:' + h + '\r\n'), g += 'a=rtcp-mux\r\n', f.headerExtensions && f.headerExtensions.forEach(function(i) {
            g += d.writeExtmap(i);
        }), g;
    }, d.parseRtpEncodingParameters = function(e) {
        var f, g = [],
            h = d.parseRtpParameters(e),
            i = -1 !== h.fecMechanisms.indexOf('RED'),
            j = -1 !== h.fecMechanisms.indexOf('ULPFEC'),
            k = d.matchPrefix(e, 'a=ssrc:').map(function(l) {
                return d.parseSsrcMedia(l);
            }).filter(function(l) {
                return 'cname' === l.attribute;
            }),
            l = k.length > 0 && k[0].ssrc,
            m = d.matchPrefix(e, 'a=ssrc-group:FID').map(function(n) {
                return n.substr(17).split(' ').map(function(o) {
                    return parseInt(o, 10);
                });
            });
        m.length > 0 && m[0].length > 1 && m[0][0] === l && (f = m[0][1]), h.codecs.forEach(function(n) {
            if ('RTX' === n.name.toUpperCase() && n.parameters.apt) {
                var o = {
                    ssrc: l,
                    codecPayloadType: parseInt(n.parameters.apt, 10)
                };
                l && f && (o.rtx = {
                    ssrc: f
                }), g.push(o), i && ((o = JSON.parse(JSON.stringify(o))).fec = {
                    ssrc: l,
                    mechanism: j ? 'red+ulpfec' : 'red'
                }, g.push(o));
            }
        }), 0 === g.length && l && g.push({
            ssrc: l
        });
        var n = d.matchPrefix(e, 'b=');
        return n.length && (n = 0 === n[0].indexOf('b=TIAS:') ? parseInt(n[0].substr(7), 10) : 0 === n[0].indexOf('b=AS:') ? 950 * parseInt(n[0].substr(5), 10) - 16000 : void 0, g.forEach(function(o) {
            o.maxBitrate = n;
        })), g;
    }, d.parseRtcpParameters = function(e) {
        var f = {},
            g = d.matchPrefix(e, 'a=ssrc:').map(function(h) {
                return d.parseSsrcMedia(h);
            }).filter(function(h) {
                return 'cname' === h.attribute;
            })[0];
        g && (f.cname = g.value, f.ssrc = g.ssrc);
        var h = d.matchPrefix(e, 'a=rtcp-rsize');
        f.reducedSize = h.length > 0, f.compound = 0 === h.length;
        var i = d.matchPrefix(e, 'a=rtcp-mux');
        return f.mux = i.length > 0, f;
    }, d.parseMsid = function(e) {
        var f, g = d.matchPrefix(e, 'a=msid:');
        if (1 === g.length)
            return {
                stream: (f = g[0].substr(7).split(' '))[0],
                track: f[1]
            };
        var h = d.matchPrefix(e, 'a=ssrc:').map(function(i) {
            return d.parseSsrcMedia(i);
        }).filter(function(i) {
            return 'msid' === i.attribute;
        });
        return h.length > 0 ? {
            stream: (f = h[0].value.split(' '))[0],
            track: f[1]
        } : void 0;
    }, d.parseSctpDescription = function(e) {
        var f, g = d.parseMLine(e),
            h = d.matchPrefix(e, 'a=max-message-size:');
        h.length > 0 && (f = parseInt(h[0].substr(19), 10)), isNaN(f) && (f = 65536);
        var i = d.matchPrefix(e, 'a=sctp-port:');
        if (i.length > 0)
            return {
                port: parseInt(i[0].substr(12), 10),
                protocol: g.fmt,
                maxMessageSize: f
            };
        if (d.matchPrefix(e, 'a=sctpmap:').length > 0) {
            var j = d.matchPrefix(e, 'a=sctpmap:')[0].substr(10).split(' ');
            return {
                port: parseInt(j[0], 10),
                protocol: j[1],
                maxMessageSize: f
            };
        }
    }, d.writeSctpDescription = function(e, f) {
        var g = [];
        return g = 'DTLS/SCTP' !== e.protocol ? [
            'm=' + e.kind + ' 9 ' + e.protocol + ' ' + f.protocol + '\r\n',
            'c=IN IP4 0.0.0.0\r\n',
            'a=sctp-port:' + f.port + '\r\n'
        ] : [
            'm=' + e.kind + ' 9 ' + e.protocol + ' ' + f.port + '\r\n',
            'c=IN IP4 0.0.0.0\r\n',
            'a=sctpmap:' + f.port + ' ' + f.protocol + ' 65535\r\n'
        ], void 0 !== f.maxMessageSize && g.push('a=max-message-size:' + f.maxMessageSize + '\r\n'), g.join('');
    }, d.generateSessionId = function() {
        return Math.random().toString().substr(2, 21);
    }, d.writeSessionBoilerplate = function(e, f, g) {
        var h = void 0 !== f ? f : 2;
        return 'v=0\r\no=' + (g || 'thisisadapterortc') + ' ' + (e || d.generateSessionId()) + ' ' + h + ' IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n';
    }, d.writeMediaSection = function(e, f, g, h) {
        var i = d.writeRtpDescription(e.kind, f);
        if (i += d.writeIceParameters(e.iceGatherer.getLocalParameters()), i += d.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), 'offer' === g ? 'actpass' : 'active'), i += 'a=mid:' + e.mid + '\r\n', e.direction ? i += 'a=' + e.direction + '\r\n' : e.rtpSender && e.rtpReceiver ? i += 'a=sendrecv\r\n' : e.rtpSender ? i += 'a=sendonly\r\n' : e.rtpReceiver ? i += 'a=recvonly\r\n' : i += 'a=inactive\r\n', e.rtpSender) {
            var j = 'msid:' + h.id + ' ' + e.rtpSender.track.id + '\r\n';
            i += 'a=' + j, i += 'a=ssrc:' + e.sendEncodingParameters[0].ssrc + ' ' + j, e.sendEncodingParameters[0].rtx && (i += 'a=ssrc:' + e.sendEncodingParameters[0].rtx.ssrc + ' ' + j, i += 'a=ssrc-group:FID ' + e.sendEncodingParameters[0].ssrc + ' ' + e.sendEncodingParameters[0].rtx.ssrc + '\r\n');
        }
        return i += 'a=ssrc:' + e.sendEncodingParameters[0].ssrc + ' cname:' + d.localCName + '\r\n', e.rtpSender && e.sendEncodingParameters[0].rtx && (i += 'a=ssrc:' + e.sendEncodingParameters[0].rtx.ssrc + ' cname:' + d.localCName + '\r\n'), i;
    }, d.getDirection = function(e, f) {
        for (var g = d.splitLines(e), h = 0; h < g.length; h++)
            switch (g[h]) {
                case 'a=sendrecv':
                case 'a=sendonly':
                case 'a=recvonly':
                case 'a=inactive':
                    return g[h].substr(2);
            }
        return f ? d.getDirection(f) : 'sendrecv';
    }, d.getKind = function(e) {
        return d.splitLines(e)[0].split(' ')[0].substr(2);
    }, d.isRejected = function(e) {
        return '0' === e.split(' ', 2)[1];
    }, d.parseMLine = function(e) {
        var f = d.splitLines(e)[0].substr(2).split(' ');
        return {
            kind: f[0],
            port: parseInt(f[1], 10),
            protocol: f[2],
            fmt: f.slice(3).join(' ')
        };
    }, d.parseOLine = function(e) {
        var f = d.matchPrefix(e, 'o=')[0].substr(2).split(' ');
        return {
            username: f[0],
            sessionId: f[1],
            sessionVersion: parseInt(f[2], 10),
            netType: f[3],
            addressType: f[4],
            address: f[5]
        };
    }, d.isValidSDP = function(e) {
        if ('string' != typeof e || 0 === e.length)
            return !1;
        for (var f = d.splitLines(e), g = 0; g < f.length; g++)
            if (f[g].length < 2 || '=' !== f[g].charAt(1))
                return !1;
        return !0;
    }, b.exports = d;
}), a.register('BO2yY', function(b, c) {
    function d(e) {
        const f = e && e.navigator,
            g = f.mediaDevices.getUserMedia.bind(f.mediaDevices);
        f.mediaDevices.getUserMedia = function(h) {
            return g(h).catch(h => Promise.reject(function(i) {
                return {
                    name: {
                        PermissionDeniedError: 'NotAllowedError'
                    } [i.name] || i.name,
                    message: i.message,
                    constraint: i.constraint,
                    toString() {
                        return this.name;
                    }
                };
            }(h)));
        };
    }
    _g(b.exports, 'shimGetUserMedia', function() {
        return a;
    });
}), a.register('XNYzQ', function(b, c) {
    function d(e) {
        'getDisplayMedia' in e.navigator && e.navigator.mediaDevices && (e.navigator.mediaDevices && 'getDisplayMedia' in e.navigator.mediaDevices || (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)));
    }
    _g(b.exports, 'shimGetDisplayMedia', function() {
        return a;
    });
}), a.register('EPf4h', function(b, c) {
    _g(b.exports, 'shimOnTrack', function() {
        return _e;
    }), _g(b.exports, 'shimPeerConnection', function() {
        return _e;
    }), _g(b.exports, 'shimSenderGetStats', function() {
        return _e;
    }), _g(b.exports, 'shimReceiverGetStats', function() {
        return _e;
    }), _g(b.exports, 'shimRemoveStream', function() {
        return _e;
    }), _g(b.exports, 'shimRTCDataChannel', function() {
        return _e;
    }), _g(b.exports, 'shimAddTransceiver', function() {
        return _e;
    }), _g(b.exports, 'shimGetParameters', function() {
        return _e;
    }), _g(b.exports, 'shimCreateOffer', function() {
        return _e;
    }), _g(b.exports, 'shimCreateAnswer', function() {
        return _e;
    }), _g(b.exports, 'shimGetUserMedia', function() {
        return a('uyL6Z').shimGetUserMedia;
    }), _g(b.exports, 'shimGetDisplayMedia', function() {
        return a('Y+HKx').shimGetDisplayMedia;
    });
    var d = a('AjDBF');
    a('uyL6Z'), a('Y+HKx');

    function _e(f) {
        'object' == typeof f && f.RTCTrackEvent && 'receiver' in f.RTCTrackEvent.prototype && !('transceiver' in f.RTCTrackEvent.prototype) && Object.defineProperty(f.RTCTrackEvent.prototype, 'transceiver', {
            get() {
                return {
                    receiver: this.receiver
                };
            }
        });
    }

    function _e(f) {
        const _g = d.detectBrowser(f);
        if ('object' != typeof f || !f.RTCPeerConnection && !f.mozRTCPeerConnection)
            return;
        if (!f.RTCPeerConnection && f.mozRTCPeerConnection && (f.RTCPeerConnection = f.mozRTCPeerConnection), _g.version < 53 && [
                'setLocalDescription',
                'setRemoteDescription',
                'addIceCandidate'
            ].forEach(function(h) {
                const i = f.RTCPeerConnection.prototype[h],
                    j = {
                        [h]() {
                            return arguments[0] = new('addIceCandidate' === h ? f.RTCIceCandidate : f.RTCSessionDescription)(arguments[0]), i.apply(this, arguments);
                        }
                    };
                f.RTCPeerConnection.prototype[h] = j[h];
            }), _g.version < 68) {
            const h = f.RTCPeerConnection.prototype.addIceCandidate;
            f.RTCPeerConnection.prototype.addIceCandidate = function() {
                return arguments[0] ? arguments[0] && '' === arguments[0].candidate ? Promise.resolve() : h.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
            };
        }
        const h = {
                inboundrtp: 'inbound-rtp',
                outboundrtp: 'outbound-rtp',
                candidatepair: 'candidate-pair',
                localcandidate: 'local-candidate',
                remotecandidate: 'remote-candidate'
            },
            i = f.RTCPeerConnection.prototype.getStats;
        f.RTCPeerConnection.prototype.getStats = function() {
            const [j, k, l] = arguments;
            return i.apply(this, [j || null]).then(j => {
                if (_g.version < 53 && !k)
                    try {
                        j.forEach(j => {
                            j.type = h[j.type] || j.type;
                        });
                    } catch (_g) {
                        if ('TypeError' !== _g.name)
                            throw _g;
                        j.forEach((_g, i) => {
                            j.set(i, Object.assign({}, _g, {
                                type: h[_g.type] || _g.type
                            }));
                        });
                    }
                return j;
            }).then(k, l);
        };
    }

    function _e(f) {
        if ('object' != typeof f || !f.RTCPeerConnection || !f.RTCRtpSender)
            return;
        if (f.RTCRtpSender && 'getStats' in f.RTCRtpSender.prototype)
            return;
        const g = f.RTCPeerConnection.prototype.getSenders;
        g && (f.RTCPeerConnection.prototype.getSenders = function() {
            const h = g.apply(this, []);
            return h.forEach(h => h._pc = this), h;
        });
        const h = f.RTCPeerConnection.prototype.addTrack;
        h && (f.RTCPeerConnection.prototype.addTrack = function() {
            const i = h.apply(this, arguments);
            return i._pc = this, i;
        }), f.RTCRtpSender.prototype.getStats = function() {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
        };
    }

    function _e(f) {
        if ('object' != typeof f || !f.RTCPeerConnection || !f.RTCRtpSender)
            return;
        if (f.RTCRtpSender && 'getStats' in f.RTCRtpReceiver.prototype)
            return;
        const g = f.RTCPeerConnection.prototype.getReceivers;
        g && (f.RTCPeerConnection.prototype.getReceivers = function() {
            const h = g.apply(this, []);
            return h.forEach(h => h._pc = this), h;
        }), d.wrapPeerConnectionEvent(f, 'track', f => (f.receiver._pc = f.srcElement, f)), f.RTCRtpReceiver.prototype.getStats = function() {
            return this._pc.getStats(this.track);
        };
    }

    function _e(f) {
        f.RTCPeerConnection && !('removeStream' in f.RTCPeerConnection.prototype) && (f.RTCPeerConnection.prototype.removeStream = function(g) {
            d.deprecated('removeStream', 'removeTrack'), this.getSenders().forEach(_g => {
                _g.track && g.getTracks().includes(_g.track) && this.removeTrack(_g);
            });
        });
    }

    function _e(f) {
        f.DataChannel && !f.RTCDataChannel && (f.RTCDataChannel = f.DataChannel);
    }

    function _e(f) {
        if ('object' != typeof f || !f.RTCPeerConnection)
            return;
        const _g = f.RTCPeerConnection.prototype.addTransceiver;
        _g && (f.RTCPeerConnection.prototype.addTransceiver = function() {
            this.setParametersPromises = [];
            const h = arguments[1],
                i = h && 'sendEncodings' in h;
            i && h.sendEncodings.forEach(h => {
                if ('rid' in h) {
                    if (!/^[a-z0-9]{0,16}$/i.test(h.rid))
                        throw new TypeError('Invalid RID value provided.');
                }
                if ('scaleResolutionDownBy' in h && !(parseFloat(h.scaleResolutionDownBy) >= 1))
                    throw new RangeError('scale_resolution_down_by must be >= 1.0');
                if ('maxFramerate' in h && !(parseFloat(h.maxFramerate) >= 0))
                    throw new RangeError('max_framerate must be >= 0.0');
            });
            const j = _g.apply(this, arguments);
            if (i) {
                const {
                    sender: k
                } = j, l = k.getParameters();
                (!('encodings' in l) || 1 === l.encodings.length && 0 === Object.keys(l.encodings[0]).length) && (l.encodings = h.sendEncodings, k.sendEncodings = h.sendEncodings, this.setParametersPromises.push(k.setParameters(l).then(() => {
                    delete k.sendEncodings;
                }).catch(() => {
                    delete k.sendEncodings;
                })));
            }
            return j;
        });
    }

    function _e(f) {
        if ('object' != typeof f || !f.RTCRtpSender)
            return;
        const g = f.RTCRtpSender.prototype.getParameters;
        g && (f.RTCRtpSender.prototype.getParameters = function() {
            const h = g.apply(this, arguments);
            return 'encodings' in h || (h.encodings = [].concat(this.sendEncodings || [{}])), h;
        });
    }

    function _e(f) {
        if ('object' != typeof f || !f.RTCPeerConnection)
            return;
        const g = f.RTCPeerConnection.prototype.createOffer;
        f.RTCPeerConnection.prototype.createOffer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => g.apply(this, arguments)).finally(() => {
                this.setParametersPromises = [];
            }) : g.apply(this, arguments);
        };
    }

    function _e(f) {
        if ('object' != typeof f || !f.RTCPeerConnection)
            return;
        const g = f.RTCPeerConnection.prototype.createAnswer;
        f.RTCPeerConnection.prototype.createAnswer = function() {
            return this.setParametersPromises && this.setParametersPromises.length ? Promise.all(this.setParametersPromises).then(() => g.apply(this, arguments)).finally(() => {
                this.setParametersPromises = [];
            }) : g.apply(this, arguments);
        };
    }
}), a.register('uyL6Z', function(b, c) {
    _g(b.exports, 'shimGetUserMedia', function() {
        return _e;
    });
    var d = a('AjDBF');

    function _e(f) {
        const _g = d.detectBrowser(f),
            h = f && f.navigator,
            i = f && f.MediaStreamTrack;
        if (h.getUserMedia = function(j, k, l) {
                d.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia'), h.mediaDevices.getUserMedia(j).then(k, l);
            }, !(_g.version > 55 && 'autoGainControl' in h.mediaDevices.getSupportedConstraints())) {
            const j = function(k, l, m) {
                    l in k && !(m in k) && (k[m] = k[l], delete k[l]);
                },
                k = h.mediaDevices.getUserMedia.bind(h.mediaDevices);
            if (h.mediaDevices.getUserMedia = function(l) {
                    return 'object' == typeof l && 'object' == typeof l.audio && (l = JSON.parse(JSON.stringify(l)), j(l.audio, 'autoGainControl', 'mozAutoGainControl'), j(l.audio, 'noiseSuppression', 'mozNoiseSuppression')), k(l);
                }, i && i.prototype.getSettings) {
                const l = i.prototype.getSettings;
                i.prototype.getSettings = function() {
                    const m = l.apply(this, arguments);
                    return j(m, 'mozAutoGainControl', 'autoGainControl'), j(m, 'mozNoiseSuppression', 'noiseSuppression'), m;
                };
            }
            if (i && i.prototype.applyConstraints) {
                const l = i.prototype.applyConstraints;
                i.prototype.applyConstraints = function(m) {
                    return 'audio' === this.kind && 'object' == typeof m && (m = JSON.parse(JSON.stringify(m)), j(m, 'autoGainControl', 'mozAutoGainControl'), j(m, 'noiseSuppression', 'mozNoiseSuppression')), l.apply(this, [m]);
                };
            }
        }
    }
}), a.register('Y+HKx', function(b, c) {
    function d(e, f) {
        e.navigator.mediaDevices && 'getDisplayMedia' in e.navigator.mediaDevices || e.navigator.mediaDevices && (e.navigator.mediaDevices.getDisplayMedia = function(g) {
            if (!g || !g.video) {
                const h = new DOMException('getDisplayMedia without video constraints is undefined');
                return h.name = 'NotFoundError', h.code = 8, Promise.reject(h);
            }
            return !0 === g.video ? g.video = {
                mediaSource: f
            } : g.video.mediaSource = f, e.navigator.mediaDevices.getUserMedia(g);
        });
    }
    _g(b.exports, 'shimGetDisplayMedia', function() {
        return a;
    });
}), a.register('RCx4e', function(b, c) {
    _g(b.exports, 'shimLocalStreamsAPI', function() {
        return _e;
    }), _g(b.exports, 'shimRemoteStreamsAPI', function() {
        return _e;
    }), _g(b.exports, 'shimCallbacksAPI', function() {
        return _e;
    }), _g(b.exports, 'shimGetUserMedia', function() {
        return _e;
    }), _g(b.exports, 'shimConstraints', function() {
        return _e;
    }), _g(b.exports, 'shimRTCIceServerUrls', function() {
        return _e;
    }), _g(b.exports, 'shimTrackEventTransceiver', function() {
        return _e;
    }), _g(b.exports, 'shimCreateOfferLegacy', function() {
        return _e;
    }), _g(b.exports, 'shimAudioContext', function() {
        return _e;
    });
    var d = a('AjDBF');

    function _e(f) {
        if ('object' == typeof f && f.RTCPeerConnection) {
            if ('getLocalStreams' in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.getLocalStreams = function() {
                    return this._localStreams || (this._localStreams = []), this._localStreams;
                }), !('addStream' in f.RTCPeerConnection.prototype)) {
                const _g = f.RTCPeerConnection.prototype.addTrack;
                f.RTCPeerConnection.prototype.addStream = function(h) {
                    this._localStreams || (this._localStreams = []), this._localStreams.includes(h) || this._localStreams.push(h), h.getAudioTracks().forEach(c => _g.call(this, c, h)), h.getVideoTracks().forEach(c => _g.call(this, c, h));
                }, f.RTCPeerConnection.prototype.addTrack = function(h, ...c) {
                    return c && c.forEach(h => {
                        this._localStreams ? this._localStreams.includes(h) || this._localStreams.push(h) : this._localStreams = [h];
                    }), _g.apply(this, arguments);
                };
            }
            'removeStream' in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.removeStream = function(g) {
                this._localStreams || (this._localStreams = []);
                const h = this._localStreams.indexOf(g);
                if (-1 === h)
                    return;
                this._localStreams.splice(h, 1);
                const i = g.getTracks();
                this.getSenders().forEach(g => {
                    i.includes(g.track) && this.removeTrack(g);
                });
            });
        }
    }

    function _e(f) {
        if ('object' == typeof f && f.RTCPeerConnection && ('getRemoteStreams' in f.RTCPeerConnection.prototype || (f.RTCPeerConnection.prototype.getRemoteStreams = function() {
                return this._remoteStreams ? this._remoteStreams : [];
            }), !('onaddstream' in f.RTCPeerConnection.prototype))) {
            Object.defineProperty(f.RTCPeerConnection.prototype, 'onaddstream', {
                get() {
                    return this._onaddstream;
                },
                set(g) {
                    this._onaddstream && (this.removeEventListener('addstream', this._onaddstream), this.removeEventListener('track', this._onaddstreampoly)), this.addEventListener('addstream', this._onaddstream = g), this.addEventListener('track', this._onaddstreampoly = g => {
                        g.streams.forEach(g => {
                            if (this._remoteStreams || (this._remoteStreams = []), this._remoteStreams.includes(g))
                                return;
                            this._remoteStreams.push(g);
                            const h = new Event('addstream');
                            h.stream = g, this.dispatchEvent(h);
                        });
                    });
                }
            });
            const g = f.RTCPeerConnection.prototype.setRemoteDescription;
            f.RTCPeerConnection.prototype.setRemoteDescription = function() {
                const h = this;
                return this._onaddstreampoly || this.addEventListener('track', this._onaddstreampoly = function(i) {
                    i.streams.forEach(i => {
                        if (h._remoteStreams || (h._remoteStreams = []), h._remoteStreams.indexOf(i) >= 0)
                            return;
                        h._remoteStreams.push(i);
                        const j = new Event('addstream');
                        j.stream = i, h.dispatchEvent(j);
                    });
                }), g.apply(h, arguments);
            };
        }
    }

    function _e(f) {
        if ('object' != typeof f || !f.RTCPeerConnection)
            return;
        const g = f.RTCPeerConnection.prototype,
            h = g.createOffer,
            i = g.createAnswer,
            j = g.setLocalDescription,
            k = g.setRemoteDescription,
            l = g.addIceCandidate;
        g.createOffer = function(m, n) {
            const o = arguments.length >= 2 ? arguments[2] : arguments[0],
                p = h.apply(this, [o]);
            return n ? (p.then(m, n), Promise.resolve()) : p;
        }, g.createAnswer = function(m, n) {
            const o = arguments.length >= 2 ? arguments[2] : arguments[0],
                p = i.apply(this, [o]);
            return n ? (p.then(m, n), Promise.resolve()) : p;
        };
        let m = function(n, o, p) {
            const q = j.apply(this, [n]);
            return p ? (q.then(o, p), Promise.resolve()) : q;
        };
        g.setLocalDescription = m, m = function(n, o, p) {
            const q = k.apply(this, [n]);
            return p ? (q.then(o, p), Promise.resolve()) : q;
        }, g.setRemoteDescription = m, m = function(n, o, p) {
            const q = l.apply(this, [n]);
            return p ? (q.then(o, p), Promise.resolve()) : q;
        }, g.addIceCandidate = m;
    }

    function _e(f) {
        const g = f && f.navigator;
        if (g.mediaDevices && g.mediaDevices.getUserMedia) {
            const h = g.mediaDevices,
                i = h.getUserMedia.bind(h);
            g.mediaDevices.getUserMedia = h => i(_e(h));
        }!g.getUserMedia && g.mediaDevices && g.mediaDevices.getUserMedia && (g.getUserMedia = function(h, i, j) {
            g.mediaDevices.getUserMedia(h).then(i, j);
        }.bind(g));
    }

    function _e(f) {
        return f && void 0 !== f.video ? Object.assign({}, f, {
            video: d.compactObject(f.video)
        }) : f;
    }

    function _e(f) {
        if (!f.RTCPeerConnection)
            return;
        const g = f.RTCPeerConnection;
        f.RTCPeerConnection = function(h, i) {
            if (h && h.iceServers) {
                const j = [];
                for (let k = 0; k < h.iceServers.length; k++) {
                    let l = h.iceServers[k];
                    !l.hasOwnProperty('urls') && l.hasOwnProperty('url') ? (d.deprecated('RTCIceServer.url', 'RTCIceServer.urls'), l = JSON.parse(JSON.stringify(l)), l.urls = l.url, delete l.url, j.push(l)) : j.push(h.iceServers[k]);
                }
                h.iceServers = j;
            }
            return new g(h, i);
        }, f.RTCPeerConnection.prototype = g.prototype, 'generateCertificate' in g && Object.defineProperty(f.RTCPeerConnection, 'generateCertificate', {
            get: () => g.generateCertificate
        });
    }

    function _e(f) {
        'object' == typeof f && f.RTCTrackEvent && 'receiver' in f.RTCTrackEvent.prototype && !('transceiver' in f.RTCTrackEvent.prototype) && Object.defineProperty(f.RTCTrackEvent.prototype, 'transceiver', {
            get() {
                return {
                    receiver: this.receiver
                };
            }
        });
    }

    function _e(f) {
        const g = f.RTCPeerConnection.prototype.createOffer;
        f.RTCPeerConnection.prototype.createOffer = function(h) {
            if (h) {
                void 0 !== h.offerToReceiveAudio && (h.offerToReceiveAudio = !!h.offerToReceiveAudio);
                const i = this.getTransceivers().find(h => 'audio' === h.receiver.track.kind);
                !1 === h.offerToReceiveAudio && i ? 'sendrecv' === i.direction ? i.setDirection ? i.setDirection('sendonly') : i.direction = 'sendonly' : 'recvonly' === i.direction && (i.setDirection ? i.setDirection('inactive') : i.direction = 'inactive') : !0 !== h.offerToReceiveAudio || i || this.addTransceiver('audio'), void 0 !== h.offerToReceiveVideo && (h.offerToReceiveVideo = !!h.offerToReceiveVideo);
                const j = this.getTransceivers().find(h => 'video' === h.receiver.track.kind);
                !1 === h.offerToReceiveVideo && j ? 'sendrecv' === j.direction ? j.setDirection ? j.setDirection('sendonly') : j.direction = 'sendonly' : 'recvonly' === j.direction && (j.setDirection ? j.setDirection('inactive') : j.direction = 'inactive') : !0 !== h.offerToReceiveVideo || j || this.addTransceiver('video');
            }
            return g.apply(this, arguments);
        };
    }

    function _e(f) {
        'object' != typeof f || f.AudioContext || (f.AudioContext = f.webkitAudioContext);
    }
}), a.register('62uPd', function(b, c) {
    _h(b.exports, 'shimRTCIceCandidate', function() {
        return _f;
    }), _h(b.exports, 'shimMaxMessageSize', function() {
        return _f;
    }), _h(b.exports, 'shimSendThrowTypeError', function() {
        return _m;
    }), _h(b.exports, 'shimConnectionState', function() {
        return _f;
    }), _h(b.exports, 'removeAllowExtmapMixed', function() {
        return _f;
    });
    var d = a('yIuHV'),
        e = a('AjDBF');

    function _f(g) {
        if (!g.RTCIceCandidate || g.RTCIceCandidate && 'foundation' in g.RTCIceCandidate.prototype)
            return;
        const _h = g.RTCIceCandidate;
        g.RTCIceCandidate = function(i) {
            if ('object' == typeof i && i.candidate && 0 === i.candidate.indexOf('a=') && ((i = JSON.parse(JSON.stringify(i))).candidate = i.candidate.substr(2)), i.candidate && i.candidate.length) {
                const j = new _h(i),
                    k = _m(d).parseCandidate(i.candidate),
                    l = Object.assign(j, k);
                return l.toJSON = function() {
                    return {
                        candidate: l.candidate,
                        sdpMid: l.sdpMid,
                        sdpMLineIndex: l.sdpMLineIndex,
                        usernameFragment: l.usernameFragment
                    };
                }, l;
            }
            return new _h(i);
        }, g.RTCIceCandidate.prototype = _h.prototype, e.wrapPeerConnectionEvent(g, 'icecandidate', _h => (_h.candidate && Object.defineProperty(_h, 'candidate', {
            value: new g.RTCIceCandidate(_h.candidate),
            writable: 'false'
        }), _h));
    }

    function _f(g) {
        if (!g.RTCPeerConnection)
            return;
        const h = e.detectBrowser(g);
        'sctp' in g.RTCPeerConnection.prototype || Object.defineProperty(g.RTCPeerConnection.prototype, 'sctp', {
            get() {
                return void 0 === this._sctp ? null : this._sctp;
            }
        });
        const i = function(j) {
                if (!j || !j.sdp)
                    return !1;
                const k = _m(d).splitSections(j.sdp);
                return k.shift(), k.some(j => {
                    const l = _m(d).parseMLine(j);
                    return l && 'application' === l.kind && -1 !== l.protocol.indexOf('SCTP');
                });
            },
            j = function(k) {
                const l = k.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                if (null === l || l.length < 2)
                    return -1;
                const _m = parseInt(l[1], 10);
                return _m != _m ? -1 : _m;
            },
            k = function(l) {
                let m = 65536;
                return 'firefox' === h.browser && (m = h.version < 57 ? -1 === l ? 16384 : 2147483637 : h.version < 60 ? 57 === h.version ? 65535 : 65536 : 2147483637), m;
            },
            l = function(m, n) {
                let o = 65536;
                'firefox' === h.browser && 57 === h.version && (o = 65535);
                const p = _p(d).matchPrefix(m.sdp, 'a=max-message-size:');
                return p.length > 0 ? o = parseInt(p[0].substr(19), 10) : 'firefox' === h.browser && -1 !== n && (o = 2147483637), o;
            },
            _m = g.RTCPeerConnection.prototype.setRemoteDescription;
        g.RTCPeerConnection.prototype.setRemoteDescription = function() {
            if (this._sctp = null, 'chrome' === h.browser && h.version >= 76) {
                const {
                    sdpSemantics: n
                } = this.getConfiguration();
                'plan-b' === n && Object.defineProperty(this, 'sctp', {
                    get() {
                        return void 0 === this._sctp ? null : this._sctp;
                    },
                    enumerable: !0,
                    configurable: !0
                });
            }
            if (i(arguments[0])) {
                const n = j(arguments[0]),
                    o = k(n),
                    _p = l(arguments[0], n);
                let q;
                q = 0 === o && 0 === _p ? Number.POSITIVE_INFINITY : 0 === o || 0 === _p ? Math.max(o, _p) : Math.min(o, _p);
                const r = {};
                Object.defineProperty(r, 'maxMessageSize', {
                    get: () => q
                }), this._sctp = r;
            }
            return _m.apply(this, arguments);
        };
    }

    function f(g) {
        if (!g.RTCPeerConnection || !('createDataChannel' in g.RTCPeerConnection.prototype))
            return;

        function h(i, j) {
            const k = i.send;
            i.send = function() {
                const l = arguments[0],
                    m = l.length || l.size || l.byteLength;
                if ('open' === i.readyState && j.sctp && m > j.sctp.maxMessageSize)
                    throw new TypeError('Message too large (can send a maximum of ' + j.sctp.maxMessageSize + ' bytes)');
                return k.apply(i, arguments);
            };
        }
        const h = g.RTCPeerConnection.prototype.createDataChannel;
        g.RTCPeerConnection.prototype.createDataChannel = function() {
            const i = h.apply(this, arguments);
            return _h(i, this), i;
        }, e.wrapPeerConnectionEvent(g, 'datachannel', g => (_h(g.channel, g.target), g));
    }

    function _f(g) {
        if (!g.RTCPeerConnection || 'connectionState' in g.RTCPeerConnection.prototype)
            return;
        const _h = g.RTCPeerConnection.prototype;
        Object.defineProperty(_h, 'connectionState', {
            get() {
                return {
                    completed: 'connected',
                    checking: 'connecting'
                } [this.iceConnectionState] || this.iceConnectionState;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(_h, 'onconnectionstatechange', {
            get() {
                return this._onconnectionstatechange || null;
            },
            set(i) {
                this._onconnectionstatechange && (this.removeEventListener('connectionstatechange', this._onconnectionstatechange), delete this._onconnectionstatechange), i && this.addEventListener('connectionstatechange', this._onconnectionstatechange = i);
            },
            enumerable: !0,
            configurable: !0
        }), [
            'setLocalDescription',
            'setRemoteDescription'
        ].forEach(g => {
            const i = _h[g];
            _h[g] = function() {
                return this._connectionstatechangepoly || (this._connectionstatechangepoly = g => {
                    const j = g.target;
                    if (j._lastConnectionState !== j.connectionState) {
                        j._lastConnectionState = j.connectionState;
                        const k = new Event('connectionstatechange', g);
                        j.dispatchEvent(k);
                    }
                    return g;
                }, this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly)), i.apply(this, arguments);
            };
        });
    }

    function _f(g) {
        if (!g.RTCPeerConnection)
            return;
        const h = e.detectBrowser(g);
        if ('chrome' === h.browser && h.version >= 71)
            return;
        if ('safari' === h.browser && h.version >= 605)
            return;
        const i = g.RTCPeerConnection.prototype.setRemoteDescription;
        g.RTCPeerConnection.prototype.setRemoteDescription = function(j) {
            return j && j.sdp && -1 !== j.sdp.indexOf('\na=extmap-allow-mixed') && (j.sdp = j.sdp.split('\n').filter(j => 'a=extmap-allow-mixed' !== j.trim()).join('\n')), i.apply(this, arguments);
        };
    }
}), a.register('1TW/H', function(b, c) {
    _r(b.exports, 'Content', function() {
        return _s;
    }), _r(b.exports, 'default', function() {
        return _r;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('2x11J'),
        h = a('LEQ5w'),
        i = a('Axq+p'),
        j = a('d+C1q'),
        k = a('xryIH'),
        l = a('/rhrA'),
        m = a('b3ci8'),
        n = a('4vC7/'),
        o = a('E9ysS');
    let p, q = class extends h.Component {
        render() {
            const {
                upgrades: {
                    lavaUpgrades: r
                }
            } = this.props;
            return (0, f.jsx)(j.Container, {
                style: {
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: (0, f.jsxs)(_s, {
                    children: [
                        (0, f.jsx)(k.default, {}),
                        r.map(r => (0, f.jsx)(l.default, {
                            icon: r.icon,
                            background: r.background,
                            name: r.name,
                            description: r.description,
                            cost: r.price,
                            canAfford: this.canAffordUpgrade(r.id),
                            onClick: () => this.purchaseUpgrade(r.id)
                        }, `lava-upgrade-${ r.id }`)),
                        (0, f.jsx)('div', {
                            style: {
                                height: 20,
                                width: '100%'
                            }
                        })
                    ]
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'canAffordUpgrade', b => {
                const _r = this.props.upgrades.lavaUpgrades.find(_r => _r.id === b);
                return !!_r && this.props.balance.balance >= _r.price;
            }), (0, d.default)(this, 'purchaseUpgrade', b => {
                this.canAffordUpgrade(b) && ((0, m.send)(n.default.lavaPurchasePiece, {
                    type: b
                }), (0, m.changeRoute)(o.default.questions));
            });
        }
    };
    q = (0, e.__decorate)([
        (0, g.inject)('upgrades', 'balance'),
        g.observer
    ], q);
    var _r = q;
    const _s = i.default.div(p || (p = (b => b)`
  width: 100%;
  max-width: 700px;
`));
}), a.register('xryIH', function(b, c) {
    _w(b.exports, 'default', function() {
        return _p;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('pECMN'),
        g = a('RYc37'),
        h = a('QWK7i'),
        i = a('b3ci8'),
        j = a('2x11J'),
        k = a('LEQ5w'),
        l = a('0iO/0'),
        m = a('fmVdR'),
        n = a('PMl60');
    let o = class extends k.Component {
        render() {
            return this.props.entities.lava ? (0, e.jsxs)(l.Container, {
                children: [
                    (0, e.jsx)(l.IconContainer, {
                        colors: {
                            text: h.default.White,
                            background: '#009624'
                        },
                        children: (0, e.jsx)(f.default, {
                            name: 'fas fa-wrench fa-flip-horizontal'
                        })
                    }),
                    (0, e.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: [
                            (0, e.jsx)('div', {
                                style: {
                                    fontWeight: 900,
                                    fontSize: 35,
                                    lineHeight: '35px',
                                    marginTop: 4
                                },
                                children: (0, e.jsx)(g.default, {
                                    text: 'Build'
                                })
                            }),
                            (0, e.jsx)(m.default, {
                                style: {
                                    marginBottom: 15,
                                    marginTop: 18
                                }
                            }),
                            (0, e.jsxs)('div', {
                                style: {
                                    fontSize: 16,
                                    textAlign: 'center'
                                },
                                children: [
                                    (0, e.jsxs)('b', {
                                        children: [
                                            (0, e.jsx)(g.default, {
                                                text: 'Building Height'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, i.numberWithCommas)(this.props.entities.lava.buildHeight),
                                    ' ',
                                    (0, e.jsx)(g.default, {
                                        text: (0, n.plural)('block', this.props.entities.lava.buildHeight)
                                    }),
                                    (0, e.jsx)('br', {}),
                                    (0, e.jsxs)('b', {
                                        children: [
                                            (0, e.jsx)(g.default, {
                                                text: 'Lava Height'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, i.numberWithCommas)(this.props.entities.lava.lavaHeight),
                                    ' ',
                                    (0, e.jsx)(g.default, {
                                        text: (0, n.plural)('block', this.props.entities.lava.lavaHeight)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : null;
        }
    };
    o = (0, d.__decorate)([
        (0, j.inject)('entities'),
        j.observer
    ], o);
    var _p = o;
}), a.register('aoMfm', function(b, c) {
    _w(b.exports, 'default', function() {
        return _x;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('XLrkG'),
        h = a('2x11J'),
        i = a('LEQ5w'),
        j = a('/rhrA'),
        k = a('d+C1q'),
        l = a('1TW/H'),
        m = a('QWK7i'),
        n = a('Y4mzl'),
        o = a('Axq+p'),
        p = a('RYc37'),
        q = a('b3ci8'),
        r = a('4vC7/'),
        s = a('E9ysS');
    let t;
    const u = [
        g.ImposterShopItemId.fakeInvestigation,
        g.ImposterShopItemId.investigationRemover,
        g.ImposterShopItemId.privateInvestigation,
        g.ImposterShopItemId.publicInvestigation
    ];
    let v = class extends i.Component {
        render() {
            return (0, f.jsx)(k.Container, {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    background: '#cfd8dc',
                    fontFamily: '\'Space Grotesk\', monospace'
                },
                children: (0, f.jsxs)(l.Content, {
                    children: [
                        (0, f.jsx)(n.default, {}),
                        this.props.imposter.shopItems.map(b => (0, f.jsx)(j.default, {
                            style: {
                                color: m.default.White,
                                background: '#000a12'
                            },
                            icon: b.icon,
                            background: b.background,
                            name: b.name,
                            description: b.description,
                            cost: b.cost,
                            canAfford: this.canPurchaseItem(b.id),
                            aboveNameComponent: this.isItemNotAvailable(b.id) ? (0, f.jsx)(_w, {}) : null,
                            onClick: () => this.purchaseItem(b.id)
                        }, `imposter-item-${ b.id }`)),
                        (0, f.jsx)('div', {
                            style: {
                                height: 25
                            }
                        })
                    ]
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'isItemNotAvailable', b => !(0 !== this.props.imposter.investigationsLeft || !u.includes(b)) || !(b !== g.ImposterShopItemId.blendIn || !this.props.imposter.me || !this.props.imposter.me.blendingIn)), (0, d.default)(this, 'canPurchaseItem', b => !this.isItemNotAvailable(b) && this.canAffordItem(b)), (0, d.default)(this, 'canAffordItem', b => {
                const _w = this.props.imposter.shopItems.find(_w => _w.id === b);
                return !!_w && this.props.balance.balance >= _w.cost;
            }), (0, d.default)(this, 'purchaseItem', b => {
                if (u.includes(b) && b !== g.ImposterShopItemId.investigationRemover || b === g.ImposterShopItemId.donate || b === g.ImposterShopItemId.noteViewer || b === g.ImposterShopItemId.clearListRemover)
                    return this.props.imposter.currentShopItem = b, void(this.props.imposter.currentShopItemModalVisible = !0);
                (0, q.send)(r.default.imposter.purchase, {
                    item: b
                }), b !== g.ImposterShopItemId.meeting && (0, q.changeRoute)(s.default.questions);
            });
        }
    };
    v = (0, e.__decorate)([
        (0, h.inject)('imposter', 'balance'),
        h.observer
    ], v);
    const _w = () => (0, f.jsx)(_y, {
        children: (0, f.jsx)(p.default, {
            text: 'Not Available'
        })
    });
    var _x = v;
    const _y = o.default.div(t || (t = (b => b)`
  background: #d32f2f;
  font-size: 14px;
  padding: 3px 11px;
  border-radius: 8px;
  margin-bottom: 2px;
`));
}), a.register('Y4mzl', function(b, c) {
    _q(b.exports, 'default', function() {
        return _p;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('pECMN'),
        g = a('RYc37'),
        h = a('QWK7i'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('0iO/0'),
        l = a('fmVdR'),
        m = a('XLrkG'),
        n = a('b3ci8');
    let o = class extends j.Component {
        render() {
            const {
                me: p,
                investigationsLeft: _q,
                meetingsLeft: r,
                impostersLeft: s
            } = this.props.imposter;
            if (!p)
                return null;
            const t = p.role === m.PersonRole.imposter;
            return (0, e.jsxs)(k.Container, {
                style: {
                    background: '#263238',
                    color: h.default.White
                },
                children: [
                    (0, e.jsx)(k.IconContainer, {
                        colors: {
                            text: '#ffeb3b',
                            background: '#000a12'
                        },
                        children: (0, e.jsx)(f.default, {
                            name: 'far fa-space-station-moon-alt'
                        })
                    }),
                    (0, e.jsxs)('div', {
                        style: {
                            padding: 23,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        },
                        children: [
                            (0, e.jsx)('div', {
                                style: {
                                    fontWeight: 900,
                                    fontSize: 35,
                                    lineHeight: '35px',
                                    marginTop: 4
                                },
                                children: (0, e.jsx)(g.default, {
                                    text: 'Mission Control'
                                })
                            }),
                            (0, e.jsx)(l.default, {
                                style: {
                                    marginBottom: 15,
                                    marginTop: 18
                                }
                            }),
                            (0, e.jsxs)('div', {
                                style: {
                                    fontSize: 16,
                                    textAlign: 'center'
                                },
                                children: [
                                    (0, e.jsxs)('b', {
                                        children: [
                                            (0, e.jsx)(g.default, {
                                                text: 'Investigations Left'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, n.numberWithCommas)(_q),
                                    (0, e.jsx)('br', {}),
                                    !t && (0, e.jsxs)(e.Fragment, {
                                        children: [
                                            (0, e.jsxs)('b', {
                                                children: [
                                                    (0, e.jsx)(g.default, {
                                                        text: 'Impostors Left'
                                                    }),
                                                    ':'
                                                ]
                                            }),
                                            ' ',
                                            (0, n.numberWithCommas)(s),
                                            (0, e.jsx)('br', {})
                                        ]
                                    }),
                                    (0, e.jsxs)('b', {
                                        children: [
                                            (0, e.jsx)(g.default, {
                                                text: 'Meetings Left'
                                            }),
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    (0, n.numberWithCommas)(r)
                                ]
                            })
                        ]
                    })
                ]
            });
        }
    };
    o = (0, d.__decorate)([
        (0, i.inject)('imposter'),
        i.observer
    ], o);
    var _p = o;
}), a.register('oTTgx', function(b, c) {
    _s(b.exports, 'default', function() {
        return _r;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('QWK7i'),
        h = a('2jpMh'),
        i = a('qkJZE'),
        j = a('dHTXP'),
        k = a('E9ysS'),
        l = a('b3ci8'),
        m = a('2x11J'),
        n = a('LEQ5w');
    let o;
    const p = a('Axq+p').default.div(o || (o = (b => b)`
  height: 100%;
  width: 100%;
  background: ${ 0 };
  display: flex;
  align-items: center;
  flex-direction: column;
`), g.default.BackgroundGray);
    let q = class extends n.Component {
        render() {
            const r = this.props.upgrades.upgrades.filter(r => r.name === this.props.upgrades.currentlySelectedUpgrade)[0],
                _s = this.props.upgrades.upgradeLevelTabs[(0, l.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)];
            return (0, f.jsxs)(p, {
                children: [
                    (0, f.jsx)(h.default, {
                        onPurchase: this.markAsPurchased
                    }),
                    (0, f.jsx)(j.default, {
                        levels: r.levels,
                        active: _s
                    }),
                    (0, f.jsx)(i.default, {
                        open: this.state.purchased,
                        onContinue: this.closeModal
                    })
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                purchased: !1
            }), (0, d.default)(this, 'closeModal', b => {
                this.setState({
                    purchased: !1
                }, () => b ? setTimeout(() => (0, l.changeRoute)(k.default.questions), 300) : null);
            }), (0, d.default)(this, 'markAsPurchased', () => this.setState({
                purchased: !0
            }));
        }
    };
    q = (0, e.__decorate)([
        (0, m.inject)('upgrades'),
        m.observer
    ], q);
    var _r = q;
}), a.register('2jpMh', function(b, c) {
    _E(b.exports, 'default', function() {
        return _D;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('RYc37'),
        h = a('DNhpF'),
        i = a('QWK7i'),
        j = a('ziKcb'),
        k = a('4vC7/'),
        l = a('3RPAv'),
        m = a('b3ci8'),
        n = a('2x11J'),
        o = a('LEQ5w'),
        p = a('Axq+p');
    let q, r, s, t, u, v = b => b;
    const w = '4px',
        x = p.default.div(q || (q = v`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        y = p.default.div(r || (r = v`
  height: 90%;
  max-height: 500px;
  width: 90%;
  max-width: 700px;
  border-radius: ${ 0 };
  box-shadow: ${ 0 };
  background: ${ 0 };
  color: ${ 0 };
`), w, j.default.basic, b => b.theme.question.background, b => b.theme.question.text),
        z = p.default.div(s || (s = v`
  height: 20%;
  border-top-left-radius: ${ 0 };
  border-top-right-radius: ${ 0 };
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
`), w, w),
        A = p.default.div(t || (t = v`
  height: 50%;
  width: 100%;
`)),
        B = p.default.div(u || (u = v`
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
`), b => b.disabled ? i.default.DisabledGray : 'rgba(255,255,255,0.2)', b => b.disabled ? 'not-allowed' : 'pointer', i.default.White, w, w, b => b.disabled ? i.default.DisabledGray : 'rgba(255,255,255,0.25)');
    let C = class extends o.Component {
        render() {
            const D = this.getBuyDetails();
            return (0, f.jsx)(x, {
                children: (0, f.jsxs)(y, {
                    children: [
                        (0, f.jsx)(z, {
                            children: (0, f.jsx)(h.default, {
                                paddingHorizontal: 30,
                                max: 40,
                                text: (0, f.jsx)(g.default, {
                                    text: this.getTitle()
                                })
                            })
                        }),
                        (0, f.jsx)(A, {
                            children: (0, f.jsx)(h.default, {
                                mode: 'multi',
                                max: 200,
                                text: this.getValue()
                            })
                        }),
                        (0, f.jsx)(B, {
                            onClick: D.onClick,
                            disabled: D.disabled,
                            children: (0, f.jsx)(h.default, {
                                max: 45,
                                paddingHorizontal: 20,
                                paddingVertical: 20,
                                text: D.disabledAllText ? (0, f.jsx)(g.default, {
                                    text: 'Buy for',
                                    suffix: ` ${ D.text }`
                                }) : (0, f.jsx)(g.default, {
                                    text: D.text
                                })
                            })
                        })
                    ]
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'canPurchase', () => this.ownedLevel() < this.currentlySelectedLevel() && this.getPrice() <= this.props.balance.balance), (0, d.default)(this, 'currentlySelectedLevel', () => this.props.upgrades.upgradeLevelTabs[(0, m.upgradeNameToKey)(this.currentUpgrade().name)]), (0, d.default)(this, 'ownedLevel', () => this.props.upgrades.upgradeLevels[(0, m.upgradeNameToKey)(this.currentUpgrade().name)]), (0, d.default)(this, 'currentUpgrade', () => this.props.upgrades.upgrades.filter(b => b.name === this.props.upgrades.currentlySelectedUpgrade)[0]), (0, d.default)(this, 'getTitle', () => {
                const D = this.currentUpgrade();
                return D.name === l.upgradeNames.insurance ? 'Amount Covered' : D.name;
            }), (0, d.default)(this, 'getValue', () => {
                const D = this.currentUpgrade(),
                    _E = this.getLevel().value;
                return D.name === l.upgradeNames.insurance ? Math.round(100 * (1 - _E)) + '%' : D.name === l.upgradeNames.multiplier ? _E + 'x' : (0, m.getMoney)(_E * this.props.balance.incomeMultiplier);
            }), (0, d.default)(this, 'getBuyDetails', () => {
                if (this.ownedLevel() >= this.currentlySelectedLevel())
                    return {
                        text: 'Already Owned',
                        disabled: !0,
                        onClick: null
                    };
                const D = this.canPurchase();
                return {
                    text: (0, m.getMoney)(this.getPrice()),
                    disabled: !D,
                    onClick: D ? this.purchaseUpgrade : null,
                    disabledAllText: !0
                };
            }), (0, d.default)(this, 'purchaseUpgrade', () => {
                const D = this.currentUpgrade(),
                    E = this.currentlySelectedLevel();
                (0, m.send)(k.default.upgradePurchased, {
                    upgradeName: D.name,
                    level: E
                }), this.props.onPurchase();
            }), (0, d.default)(this, 'getLevel', () => {
                const D = this.currentlySelectedLevel();
                return this.currentUpgrade().levels.filter((_G, c) => c + 1 === D)[0];
            }), (0, d.default)(this, 'getPrice', () => (0, m.getUpgradeCost)(this.getLevel().price));
        }
    };
    C = (0, e.__decorate)([
        (0, n.inject)('upgrades', 'balance'),
        n.observer
    ], C);
    var _D = C;
}), a.register('qkJZE', function(b, c) {
    _G(b.exports, 'confettiConfig', function() {
        return _y;
    }), _G(b.exports, 'default', function() {
        return _F;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('uo5Q0'),
        h = a('6a8o9'),
        i = a('RYc37'),
        j = a('QWK7i'),
        k = a('9FYKI'),
        l = a('3RPAv'),
        m = a('I+0AY'),
        n = a('b3ci8'),
        o = a('2x11J'),
        p = a('LEQ5w'),
        q = a('FgYUV'),
        r = a('Axq+p');
    let s, t, u, v, w, x = b => b;
    const _y = {
            angle: 90,
            spread: 67,
            startVelocity: 60,
            elementCount: 50,
            decay: 0.87
        },
        z = r.default.div(s || (s = x`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: ${ 0 };
  display: ${ 0 };
`), b => b.open ? 0 : -1, b => b.visible ? 'flex' : 'none'),
        A = r.default.div(t || (t = x`
  background: ${ 0 };
  font-family: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), j.default.White, k.default.name),
        B = r.default.div(u || (u = x`
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 2.5s;
`)),
        C = r.default.div(v || (v = x`
  font-weight: bold;
  font-size: 45px;
`)),
        D = r.default.div(w || (w = x`
  font-size: 23px;
  text-align: center;
`));
    let E = class extends p.Component {
        componentDidUpdate(F) {
            this.props.open && !F.open && (m.celebrate.play(), setTimeout(() => this.setState({
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
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(h.default, {
                        open: this.props.open,
                        close: this.closeWithoutMovingForward,
                        customMaxWidth: '500px',
                        children: (0, f.jsxs)(A, {
                            children: [
                                (0, f.jsx)(B, {
                                    className: 'animated pulse infinite',
                                    children: (0, f.jsx)('img', {
                                        style: {
                                            maxHeight: 150
                                        },
                                        src: (0, n.getAssetPath)('balloons.svg')
                                    })
                                }),
                                (0, f.jsxs)(C, {
                                    children: [
                                        (0, f.jsx)(i.default, {
                                            text: 'Purchased'
                                        }),
                                        '!'
                                    ]
                                }),
                                (0, f.jsx)(D, {
                                    children: (0, f.jsx)(i.default, {
                                        text: this.getDescription()
                                    })
                                }),
                                (0, f.jsx)('div', {
                                    style: {
                                        marginTop: 10
                                    },
                                    children: (0, f.jsx)(g.default, {
                                        onClick: this.closeWithMovingForward,
                                        type: 'primary',
                                        label: (0, f.jsx)(i.default, {
                                            text: 'Continue to Questions'
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    (0, f.jsx)(z, {
                        visible: this.state.showConfetti,
                        open: this.props.open,
                        children: (0, f.jsx)(_d(q), {
                            active: this.state.showConfetti,
                            config: _y
                        })
                    })
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                showConfetti: !1
            }), (0, d.default)(this, 'upgradeName', () => this.props.upgrades.currentlySelectedUpgrade), (0, d.default)(this, 'upgradeDetails', () => {
                const F = this.props.upgrades.upgrades.filter(F => F.name === this.upgradeName())[0];
                let _G = 1;
                return {
                    ...F.levels.filter((F, _d) => _d + 1 === this.props.upgrades.upgradeLevelTabs[(0, n.upgradeNameToKey)(this.upgradeName())] && (_G = _d + 1, !0))[0],
                    level: _G
                };
            }), (0, d.default)(this, 'closeWithMovingForward', () => this.close(!0)), (0, d.default)(this, 'closeWithoutMovingForward', () => this.close(!1)), (0, d.default)(this, 'close', b => {
                this.setState({
                    showConfetti: !1
                }, () => this.props.onContinue(b));
            }), (0, d.default)(this, 'handleKeyDown', ({
                keyCode: F = 0
            }) => {
                13 === F && this.props.open && this.props.onContinue(!0);
            }), (0, d.default)(this, 'getDescription', () => {
                const G = this.upgradeDetails().value,
                    H = this.upgradeName();
                return H === l.upgradeNames.moneyPerQuestion ? `You will now earn/lose ${ (0, n.getMoney)(G * this.props.balance.incomeMultiplier) } per question.` : H === l.upgradeNames.streakBonus ? `You'll now earn an extra ${ (0, n.getMoney)(G * this.props.balance.incomeMultiplier) } for each question you answer correctly in a row.` : H === l.upgradeNames.multiplier ? `Each question's earnings/loss will now be multiplied by ${ (0, n.numberWithCommas)(G) }x.` : H === l.upgradeNames.insurance ? `After answering incorrectly, you will now only have to pay back ${ 100 * G }% of the cost.` : null;
            });
        }
    };
    E = (0, e.__decorate)([
        (0, o.inject)('upgrades', 'balance'),
        o.observer
    ], E);
    var _F = E;
}), a.register('FgYUV', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    var _d, e = function() {
            function f(g, h) {
                for (var i = 0; i < h.length; i++) {
                    var j = h[i];
                    j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
                }
            }
            return function(f, g, h) {
                return g && b(f.prototype, g), h && b(f, h), f;
            };
        }(),
        f = a('LEQ5w'),
        g = (_d = f) && _d.__esModule ? _d : {
            default: _d
        },
        h = a('V9HIq');
    var i = {
            position: 'relative'
        },
        j = function(k) {
            function l(m) {
                ! function(n, o) {
                    if (!(n instanceof o))
                        throw new TypeError('Cannot call a class as a function');
                }(this, l);
                var n = function(o, p) {
                    if (!o)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !p || 'object' != typeof p && 'function' != typeof p ? o : p;
                }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, m));
                return n.setRef = n.setRef.bind(n), n;
            }
            return function(l, m) {
                if ('function' != typeof m && null !== m)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof m);
                l.prototype = Object.create(m && m.prototype, {
                    constructor: {
                        value: l,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(l, m) : l.__proto__ = m);
            }(c, k), e(c, [{
                    key: 'componentWillReceiveProps',
                    value: function(l) {
                        l.active && !this.props.active && (0, h.confetti)(this.container, l.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(l) {
                        this.container = l;
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return g.default.createElement('div', {
                            className: this.props.className,
                            style: i,
                            ref: this.setRef
                        });
                    }
                }
            ]), c;
        }(f.Component);
    b.exports.default = j;
}), a.register('V9HIq', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.confetti = function(d) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            f = Object.assign({}, _k, e),
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
            q = _d(d, g, h, i, j),
            r = q.map(function(s) {
                return {
                    element: s,
                    physics: a(k, l, m, p)
                };
            });
        return _i(d, r, n, o);
    };

    function _d(e, f, g, h, _i) {
        return Array.from({
            length: f
        }).map(function(j, _k) {
            var l = document.createElement('div'),
                m = g[_k % g.length];
            return l.style['background-color'] = m, l.style.width = h, l.style.height = _i, l.style.position = 'absolute', l.style.willChange = 'transform, opacity', e.appendChild(l), l;
        });
    }

    function d(e, f, g, h) {
        var i = e * (Math.PI / 180),
            j = f * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * h(),
            wobbleSpeed: 0.1 + 0.1 * h(),
            velocity: 0.5 * g + h() * g,
            angle2D: -i + (0.5 * j - h() * j),
            angle3D: -Math.PI / 4 + h() * (Math.PI / 2),
            tiltAngle: h() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * h()
        };
    }

    function d(e, f, g, h) {
        var i = void 0;
        return new Promise(function(j) {
            requestAnimationFrame(function _t(k) {
                i || (i = k);
                var l = i === k ? 0 : (k - i) / h;
                f.forEach(function(m) {
                    return function(n, o, p) {
                        n.physics.x += Math.cos(n.physics.angle2D) * n.physics.velocity, n.physics.y += Math.sin(n.physics.angle2D) * n.physics.velocity, n.physics.z += Math.sin(n.physics.angle3D) * n.physics.velocity, n.physics.wobble += n.physics.wobbleSpeed, n.physics.velocity *= p, n.physics.y += 3, n.physics.tiltAngle += n.physics.tiltAngleSpeed;
                        var q = n.physics,
                            r = q.x,
                            s = q.y,
                            _t = q.tiltAngle,
                            u = q.wobble,
                            v = 'translate3d(' + (r + 10 * Math.cos(u)) + 'px, ' + (s + 10 * Math.sin(u)) + 'px, 0) rotate3d(1, 1, 1, ' + _t + 'rad)';
                        n.element.style.transform = v, n.element.style.opacity = 1 - o;
                    }(m, l, g);
                }), k - i < h ? requestAnimationFrame(_f) : (f.forEach(function(m) {
                    if (m.element.parentNode === e)
                        return e.removeChild(m.element);
                }), j());
            });
        });
    }
    var d = {
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
}), a.register('dHTXP', function(b, c) {
    _o(b.exports, 'default', function() {
        return _o;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        _f = a('0hzx+'),
        g = a('KalnG'),
        h = a('I+0AY'),
        i = a('b3ci8'),
        j = a('2x11J'),
        k = a('LEQ5w');
    let l;
    const m = a('Axq+p').default.div(l || (l = (b => b)`
  height: 40%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`));
    let n = class extends k.Component {
        componentDidMount() {
            document.addEventListener('keydown', this.handleKeyDown);
        }
        componentWillUnmount() {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
        render() {
            const o = this.currentLevel();
            return (0, _f.jsx)(m, {
                children: this.props.levels.map((_o, c) => (0, _f.jsx)(g.default, {
                    level: c + 1,
                    changeLevel: this.changeLevel,
                    chosen: c + 1 === this.props.active,
                    canAfford: this.props.balance.balance >= (0, i.getUpgradeCost)(_o.price),
                    alreadyPurchased: o >= c + 1
                }, _o.value))
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'changeLevel', b => {
                b !== this.props.active && (h.click2.play(), this.props.upgrades.upgradeLevelTabs[(0, i.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)] = b);
            }), (0, d.default)(this, 'currentLevel', () => this.props.upgrades.upgradeLevels[(0, i.upgradeNameToKey)(this.props.upgrades.currentlySelectedUpgrade)]), (0, d.default)(this, 'getNextPosition', b => {
                const _o = this.props.active;
                return 'left' === b && 1 !== _o && 6 !== _o ? _o - 1 : 'right' === b && 5 !== _o && 10 !== _o ? _o + 1 : 'up' === b && _o - 5 > 0 ? _o - 5 : 'down' === b && _o + 5 < 11 ? _o + 5 : _o;
            }), (0, d.default)(this, 'handleKeyDown', ({
                keyCode: o = 0
            }) => {
                37 !== o && 65 !== o || this.changeLevel(this.getNextPosition('left')), 38 !== o && 87 !== o || this.changeLevel(this.getNextPosition('up')), 39 !== o && 68 !== o || this.changeLevel(this.getNextPosition('right')), 40 !== o && 83 !== o || this.changeLevel(this.getNextPosition('down'));
            });
        }
    };
    n = (0, e.__decorate)([
        (0, j.inject)('upgrades', 'balance'),
        j.observer
    ], n);
    var _o = n;
}), a.register('KalnG', function(b, c) {
    _w(b.exports, 'default', function() {
        return _p;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('pECMN'),
        g = a('RYc37'),
        h = a('DNhpF'),
        i = a('QWK7i'),
        j = a('LEQ5w'),
        k = a('Axq+p');
    let l, m, n = b => b;
    class o extends j.Component {
        render() {
            return (0, e.jsx)(_q, {
                onMouseDown: this.changeLevel,
                chosen: this.props.chosen,
                children: (0, e.jsx)(h.default, {
                    mode: 'single',
                    max: 30,
                    paddingHorizontal: 10,
                    text: (0, e.jsxs)(_r, {
                        children: [
                            (0, e.jsx)('div', {
                                style: {
                                    color: this.getCircleColor(),
                                    marginRight: 3
                                },
                                children: (0, e.jsx)(f.default, {
                                    name: 'fas fa-circle'
                                })
                            }),
                            (0, e.jsx)('div', {
                                children: (0, e.jsx)(g.default, {
                                    text: 'Level ' + this.props.level
                                })
                            })
                        ]
                    })
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'getCircleColor', () => this.props.alreadyPurchased ? 'gray' : this.props.canAfford ? 'green' : 'red'), (0, d.default)(this, 'changeLevel', () => this.props.changeLevel(this.props.level));
        }
    }
    var _p = o;
    const _q = k.default.div(l || (l = n`
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
`), b => b.chosen ? '#28004c' : '#0D0019', i.default.White),
        _r = k.default.div(m || (m = n`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    flex-direction: column;
  }
`));
}), a.register('GW9SK', function(b, c) {
    _w(b.exports, 'default', function() {
        return _w;
    });
    var d = a('0hzx+'),
        e = a('++MnA'),
        f = a('RYc37'),
        g = a('b3ci8'),
        h = a('2x11J'),
        i = a('LEQ5w'),
        j = a('Axq+p'),
        k = a('VHZi4'),
        l = a('C4mh2'),
        m = a('/wYbc'),
        n = a('PMl60'),
        o = a('0FNgp'),
        p = a('oN4l0');
    let q, r, s = b => b;
    const t = j.default.div.attrs({
            className: 'scroll-y'
        })(q || (q = s`
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ 0 }) repeat 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: ${ 0 };
`), (0, g.getAssetPath)('background.png'), () => (0, g.mainFontName)()),
        u = j.default.div(r || (r = s`
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
`), b => b.animationDelay),
        v = b => {
            const _w = (b, _w) => (Math.pow(10, _w) + ~~b).toString().substring(1),
                x = b % 60;
            return `${ _w(Math.floor(b / 60), 2) }:${ _w(x, 2) }`;
        };
    var _w = (0, h.observer)(() => {
        const {
            entities: {
                lava: x
            },
            balance: y,
            questions: z
        } = i.useContext(p.default);
        if ((0, g.inImposterMode)())
            return (0, d.jsx)(o.default, {});
        let A = 0;
        return (0, g.inBossBattleMode)() && (A = 11), (0, g.inZombiesVsHumansMode)() && (A = 17), (0, g.inPardyMode)() && (A = 16), x && (A = 13), (0, d.jsx)(t, {
            children: (0, d.jsxs)(u, {
                className: 'animated zoomInDown',
                animationDelay: A,
                children: [
                    (0, d.jsx)(m.default, {
                        customText: x ? '\uD83C\uDF0B Game Over!' : (0, g.inZombiesVsHumansMode)() ? (0, g.defendingHomebaseResultsInfo)().text : null
                    }),
                    (0, g.inZombiesVsHumansMode)() ? (0, g.defendingHomebaseResultsInfo)().won ? (0, d.jsx)(k.default, {}) : null : (0, d.jsx)(k.default, {}),
                    x ? (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(l.default, {
                                customColor: '#1B5E20',
                                amount: v(x.secondsLasted),
                                tagline: (0, d.jsx)(f.default, {
                                    text: 'Lava Survival Time'
                                })
                            }),
                            (0, d.jsx)(l.default, {
                                amount: `${ (0, g.numberWithCommas)(x.buildHeight) } ${ (0, n.plural)('block', x.buildHeight) }`,
                                tagline: (0, d.jsx)(f.default, {
                                    text: 'Building Height'
                                })
                            }),
                            (0, d.jsx)(l.default, {
                                amount: `${ (0, g.numberWithCommas)(x.buildPieces) } ${ (0, n.plural)('piece', x.buildPieces) }`,
                                tagline: (0, d.jsx)(f.default, {
                                    text: 'Building Pieces'
                                })
                            })
                        ]
                    }) : null,
                    (0, d.jsx)(l.default, {
                        amount: (0, g.getMoney)(y.balance),
                        tagline: (0, d.jsx)(f.default, {
                            text: (0, g.inDrawMode)() ? 'Final Score' : 'Final Balance'
                        })
                    }),
                    !(0, g.inDrawMode)() && (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(l.default, {
                                customColor: '#1B5E20',
                                amount: (0, g.numberWithCommas)(z.questionsAnsweredCorrectly),
                                tagline: (0, d.jsx)(f.default, {
                                    text: 'Questions Answered Correctly'
                                })
                            }),
                            (0, d.jsx)(l.default, {
                                customColor: '#DD2C00',
                                amount: (0, g.numberWithCommas)(z.questionsAnsweredIncorrectly),
                                tagline: (0, d.jsx)(f.default, {
                                    text: 'Questions Answered Incorrectly'
                                })
                            })
                        ]
                    }),
                    !(0, g.inZombiesVsHumansMode)() && !x && (0, d.jsx)(e.default, {
                        showSelf: !0
                    })
                ]
            })
        });
    });
}), a.register('VHZi4', function(b, c) {
    _p(b.exports, 'default', function() {
        return _s;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('DNhpF'),
        h = a('F0yyO'),
        i = a('QWK7i'),
        j = a('ziKcb'),
        k = a('4vC7/');
    a('KOgpv');
    var l = a('8Wc8V'),
        m = a('b3ci8'),
        n = a('2x11J'),
        o = a('LEQ5w');
    let p;
    const q = a('Axq+p').default.div(p || (p = (b => b)`
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
`), j.default.basic, i.default.White, b => b.theme.question.background, b => b.theme.question.text);
    let r = class extends o.Component {
        render() {
            return this.props.gameOptions.clapping ? (0, f.jsx)(q, {
                onClick: this.onClap,
                children: (0, f.jsx)(g.default, {
                    max: 75,
                    text: (0, f.jsxs)('div', {
                        className: 'animated pulse infinite',
                        children: [
                            (0, h.getClappingEmoji)(),
                            ' ',
                            (0, m.numberWithCommas)(this.state.clapCount)
                        ]
                    })
                })
            }) : null;
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                clapCount: 0
            }), (0, d.default)(this, 'onClap', () => {
                const s = this.props.powerups.activePowerups.includes(l.PowerupNames.clapMultiplier) ? 10 : 1;
                (0, h.getClapSound)().play(), (0, m.send)(k.default.clap, {
                    amount: s
                }), this.setState({
                    clapCount: this.state.clapCount + s
                });
            });
        }
    };
    r = (0, e.__decorate)([
        (0, n.inject)('gameOptions', 'powerups'),
        n.observer
    ], r);
    var _s = r;
}), a.register('F0yyO', function(b, c) {
    _p(b.exports, 'getClappingEmoji', function() {
        return _e;
    }), _p(b.exports, 'getClapSound', function() {
        return _f;
    });
    var d = a('I+0AY');
    const _e = () => '\uD83D\uDC4F',
        _f = () => d.clap;
}), a.register('C4mh2', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('DNhpF'),
        f = a('QWK7i');
    a('LEQ5w');
    var g = a('Axq+p');
    let h, i, j, k = b => b;
    const l = g.default.div(h || (h = k`
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
`), f.default.White),
        m = g.default.div(i || (i = k`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`)),
        n = g.default.div(j || (j = k`
  height: 72px;
  width: 100%;
  color: ${ 0 };
`), b => b.customColor ? b.customColor : f.default.Black);
    var _o = b => (0, d.jsxs)(l, {
        children: [
            (0, d.jsx)(m, {
                children: b.tagline
            }),
            (0, d.jsx)(n, {
                customColor: b.customColor,
                children: (0, d.jsx)(e.default, {
                    paddingHorizontal: 10,
                    paddingVertical: 0,
                    max: 72,
                    text: b.amount
                })
            })
        ]
    });
}), a.register('/wYbc', function(b, c) {
    _p(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('DNhpF'),
        f = a('QWK7i'),
        g = a('ziKcb'),
        h = a('qkJZE'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('FgYUV'),
        l = a('Axq+p'),
        m = a('oN4l0');
    let n;
    const o = b => {
            const _p = b % 10,
                q = b % 100;
            return 1 === _p && 11 !== q ? b + 'st' : 2 === _p && 12 !== q ? b + 'nd' : 3 === _p && 13 !== q ? b + 'rd' : b + 'th';
        },
        p = l.default.div(n || (n = (b => b)`
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
`), f.default.White, g.default.basic);
    var _q = (0, i.observer)(b => {
        const [r, s] = j.useState(!1), {
            user: t
        } = j.useContext(m.default);
        return j.useEffect(() => {
            setTimeout(() => {
                s(!0);
            }, 7100);
        }, []), (0, d.jsxs)(p, {
            children: [
                (0, d.jsx)(_c(k), {
                    active: r,
                    config: {
                        ...h.confettiConfig,
                        angle: 270
                    }
                }),
                (0, d.jsx)(e.default, {
                    customClass: 'animated fadeIn',
                    customStyle: {
                        animationDelay: '7s'
                    },
                    max: 250,
                    text: b.customText || o(t.place) + '!'
                })
            ]
        });
    });
}), a.register('0FNgp', function(b, _c) {
    _z(b.exports, 'default', function() {
        return _x;
    });
    var d = a('0hzx+'),
        e = a('QWK7i'),
        f = a('4vC7/'),
        g = a('b3ci8'),
        h = a('DNhpF'),
        i = a('XLrkG'),
        j = a('2x11J'),
        k = a('LEQ5w'),
        l = a('Axq+p'),
        m = a('5drJf'),
        n = a('oN4l0');
    let o, p, q, r, s, t, u, v, w = b => b;
    var _x = (0, j.observer)(() => {
        const {
            imposter: y
        } = k.useContext(n.default), _z = y.impostersLeft >= 1, A = (0, m.DecryptData)(y.epl) || [];
        return k.useEffect(() => {
            (0, g.send)(f.default.imposter.requestPeople);
        }, []), (0, d.jsx)(_y, {
            children: (0, d.jsxs)(_z, {
                children: [
                    (0, d.jsx)(_A, {
                        children: (0, d.jsx)(h.default, {
                            max: 120,
                            paddingVertical: 0,
                            paddingHorizontal: 0,
                            text: (_z ? 'Impostors' : 'Crewmates') + ' Win'
                        })
                    }),
                    (0, d.jsxs)(_B, {
                        children: [
                            (0, d.jsx)(_C, {
                                style: {
                                    background: _z ? '#d32f2f' : '#4caf50'
                                }
                            }),
                            (0, d.jsx)(_D, {
                                children: (0, d.jsx)(_E, {
                                    src: (0, g.getAssetPath)(_z ? 'astronaut2.svg' : 'astronaut.svg')
                                })
                            })
                        ]
                    }),
                    (0, d.jsxs)(_F, {
                        children: [
                            (0, d.jsxs)('b', {
                                children: [
                                    (0, g.plural)('Impostor', A.filter(y => y.role === i.PersonRole.imposter).length),
                                    ':'
                                ]
                            }),
                            ' ',
                            (0, g.teamPlayerNames)(A.filter(y => y.role === i.PersonRole.imposter).map(y => y.name))
                        ]
                    })
                ]
            })
        });
    });
    const _y = l.default.div.attrs({
            className: 'flex hc maxWidth maxHeight scroll-y'
        })(o || (o = w`
  background: ${ 0 };
  color: ${ 0 };
  align-items: flex-start;
`), e.default.Black, e.default.White),
        _z = l.default.div.attrs({
            className: 'flex flex-column vc animated fadeIn'
        })(p || (p = w`
  animation-duration: 12s;
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
  width: 80%;
  max-width: 500px;
`)),
        _A = l.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = w`
  height: 77px;
  font-weight: 700;
`)),
        _B = l.default.div(r || (r = w`
  height: 250px;
  width: 300px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 75px;
`)),
        _C = l.default.div.attrs({
            className: 'maxWidth maxHeight animated pulse infinite'
        })(s || (s = w`
  border-radius: 50%;
  animation-duration: 2.5s;
  filter: blur(50px);
`)),
        _D = l.default.div.attrs({
            className: 'flex maxWidth hc vc'
        })(t || (t = w`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`)),
        _E = l.default.img(u || (u = w`
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.4));
  height: 160px;
`)),
        _F = l.default.div(v || (v = w`
  font-size: 24px;
`));
}), a.register('kuM00', function(b, c) {
    _v(b.exports, 'default', function() {
        return _u;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('FpbFp'),
        g = a('RYc37'),
        h = a('b3ci8'),
        i = a('YuT/D'),
        j = a('2x11J'),
        k = a('LEQ5w'),
        l = a('Axq+p'),
        m = a('6XgQB1'),
        n = a('OkCPe');
    let o, p, q = b => b;
    const r = (0, l.default)(n.Card)(o || (o = q`
  @media (min-width: 760px) and (min-height: 719px) {
    transform: scale(1.5);
  }
`)),
        s = l.default.div(p || (p = q`
  background: ${ 0 };
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), b => b.background);
    let t = class extends k.Component {
        componentDidMount() {
            (0, i.when)(() => this.props.gameValues.gameStatus === m.GameStatus.gameplay, () => (0, h.startGame)());
        }
        render() {
            const {
                user: u
            } = this.props, _v = u.team && u.team.meta && u.team.meta.isBoss;
            return (0, e.jsx)(s, {
                background: (0, h.getTeamColor)(),
                children: (0, e.jsx)(r, {
                    children: u.team ? (0, e.jsxs)(e.Fragment, {
                        children: [
                            _v ? (0, e.jsx)('img', {
                                src: (0, h.getAssetPath)('power-fight.svg'),
                                style: {
                                    width: '40%'
                                }
                            }) : (0, e.jsx)('img', {
                                src: (0, h.getAssetPath)('team.svg'),
                                style: {
                                    width: '60%'
                                }
                            }),
                            (0, e.jsx)(n.Title, {
                                children: (0, e.jsx)(g.default, {
                                    text: (0, h.capitalizeFirstLetter)(u.team.id)
                                })
                            }),
                            (0, e.jsx)(n.Details, {
                                children: _v ? (0, e.jsx)(g.default, {
                                    text: 'You\'re the boss. Ready to face the challengers?'
                                }) : (0, h.inZombiesVsHumansMode)() ? (0, e.jsx)(g.default, {
                                    text: 'Get ready for battle!'
                                }) : (0, e.jsx)(g.default, {
                                    text: 'Go find the rest of your team!'
                                })
                            })
                        ]
                    }) : (0, e.jsx)(f.default, {})
                })
            });
        }
    };
    t = (0, d.__decorate)([
        (0, j.inject)('user', 'gameValues'),
        j.observer
    ], t);
    var _u = t;
}), a.register('OkCPe', function(b, c) {
    _o(b.exports, 'Title', function() {
        return _k;
    }), _o(b.exports, 'Details', function() {
        return _l;
    }), _o(b.exports, 'Card', function() {
        return _m;
    });
    var d = a('Axq+p'),
        e = a('ziKcb'),
        f = a('QWK7i');
    let g, h, i, j = b => b;
    const _k = d.default.div(g || (g = j`
  font-size: 34px;
  font-weight: bold;
`)),
        _l = d.default.div(h || (h = j`
  font-size: 21px;
  margin-bottom: 7px;
`)),
        _m = d.default.div(i || (i = j`
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
`), e.default.basic, f.default.White);
}), a.register('bo+P/', function(b, c) {
    _o(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('9fFDn'),
        h = a('sHRDd'),
        i = a('I+0AY'),
        j = a('b3ci8'),
        k = a('E9ysS'),
        l = a('oN4l0');
    var _m = (0, f.observer)(() => {
        const {
            questions: n,
            balance: _o,
            gameOptions: p,
            user: q,
            translations: r,
            imposter: s,
            theme: t
        } = _c(e).useContext(l.default);
        _c(e).useEffect(() => (n.lockedViewingCorrectAnswer = !1, () => {
            n.lockedViewingCorrectAnswer = !1;
        }), []);
        const u = n => (0, j.inImposterMode)() ? `${ n <= 0 ? '-' : '+' }${ (0, j.numberWithCommas)(Math.round(Math.abs(n))) }` : `${ n > 0 ? '+' : '' }${ (0, j.getMoney)(n) }`,
            v = () => {
                const w = (0, j.questionLocation)().find(w => w._id === n.lastQuestion);
                return w || null;
            };
        return (0, d.jsx)(g.default, {
            continueAction: () => {
                n.transitioningToNextQuestion = !1;
            },
            ecc: n.ceq,
            lastQuestion: v(),
            lastQuestionCorrectAnswer: (() => {
                const w = v();
                if (!w)
                    return null;
                let x = w.answers.find(w => w.correct);
                return x || (x = {
                    text: 'No Correct Answer',
                    correct: !1,
                    _id: 'no-correct-answer'
                }), x;
            })(),
            lastQuestionAnsweredCorrect: n.lastQuestionCorrect,
            onQuestionAnswered: n => (0, j.questionAnswered)(n),
            nextQuestion: n.nextQuestion,
            responseActions: (() => {
                const w = [];
                return n.lastQuestionCorrect && ((0, j.blockShopping)() || w.push({
                    handleClick: () => (0, j.changeRoute)(k.default.shop),
                    background: t.theme.response.shop.background,
                    text: (0, j.shopName)()
                })), w;
            })(),
            textShownWhenAnsweringCorrectly: u(_o.balanceChangeIfCorrect),
            textShownWhenAnsweringIncorrectly: u(_o.balanceChangeIfIncorrect),
            correctSound: (0, j.inImposterMode)() ? i.spark : i.correct,
            incorrectSound: i.incorrect,
            onActionSound: i.click,
            language: p.language,
            translations: r.translations,
            allowGoogleTranslate: p.allowGoogleTranslate,
            readToMeEnabled: q.readToMeEnabled,
            blockKeyboardEvents: s.noteDrawerOpen,
            defaultBackgroundColor: t.theme.defaultBackground,
            continueButtonColor: t.theme.response.continue,
            answerColors: t.theme.palette,
            questionColor: t.theme.question,
            textInputButtonColor: t.theme.palette[2],
            correctAnswerColor: (0, j.inImposterMode)() ? {
                background: h.default.Black,
                text: '#ffeb3b'
            } : t.theme.response.correctAnswer,
            incorrectAnswerColor: t.theme.response.incorrectAnswer,
            onLockedChange: _o => {
                n.lockedViewingCorrectAnswer = _o;
            }
        });
    });
}), a.register('cX8g7', function(b, _c) {
    _B(b.exports, 'default', function() {
        return _j;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('1WtMc');
    let i = class extends g.Component {
        render() {
            return this.props.powerups.screenAttack.powerupName && this.props.powerups.screenAttack.attackerName && this.props.powerups.screenAttack.fullScreen ? (0, e.jsx)(h.default, {}) : null;
        }
    };
    i = (0, d.__decorate)([
        (0, f.inject)('powerups'),
        f.observer
    ], i);
    var _j = i;
}), a.register('1WtMc', function(b, c) {
    _B(b.exports, 'default', function() {
        return _A;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('QWK7i'),
        h = a('2x11J'),
        i = a('LEQ5w'),
        j = a('rE3aP'),
        k = a('Axq+p');
    let l, m, n, o, p, q, r = b => b;
    const s = b => new Promise(_B => setTimeout(_B, b)),
        t = k.default.div(l || (l = r`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${ 0 };
`), g.default.Black),
        u = k.default.div(m || (m = r`
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
`), b => b.backgroundImage, g.default.White),
        v = k.default.div(n || (n = r`
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
        w = k.default.div(o || (o = r`
  font-size: 37px;
  margin-bottom: 3px;
`)),
        x = k.default.div(p || (p = r`
  font-size: 20px;
  opacity: 0.8;
`)),
        y = k.default.div(q || (q = r`
  font-size: 23px;
`));
    let z = class extends i.Component {
        componentDidMount() {
            this.mounted = !0, this.beginCountdown(), (0, j.onAttack)();
        }
        componentWillUnmount() {
            this.mounted = !1;
        }
        render() {
            const A = this.secondsLeft();
            return (0, f.jsx)(t, {
                children: (0, f.jsx)(u, {
                    backgroundImage: (0, j.backgroundImage)(),
                    children: (0, f.jsxs)(v, {
                        children: [
                            (0, f.jsx)(w, {
                                children: (0, j.getTitle)()
                            }),
                            (0, f.jsxs)(x, {
                                children: [
                                    (0, j.getVerb)(),
                                    ' by ',
                                    this.props.powerups.screenAttack.attackerName
                                ]
                            }),
                            (0, f.jsx)('i', {
                                style: {
                                    color: (0, j.getIconColor)(),
                                    fontSize: 95,
                                    marginTop: 10,
                                    marginBottom: 10
                                },
                                className: `${ (0, j.getIcon)() } animated pulse infinite`
                            }),
                            (0, f.jsxs)(y, {
                                children: [
                                    'Wait ',
                                    A,
                                    ' ',
                                    'second' + (1 === A ? '' : 's')
                                ]
                            })
                        ]
                    })
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                secondsPassed: 0
            }), (0, d.default)(this, 'mounted', !1), (0, d.default)(this, 'beginCountdown', async () => {
                for (let A = 0; A < 15; A++)
                    await s(1000), this.addSecond();
                this.mounted && this.setState({
                    secondsPassed: 0
                });
            }), (0, d.default)(this, 'addSecond', () => {
                this.mounted && this.setState({
                    secondsPassed: this.state.secondsPassed + 1
                });
            }), (0, d.default)(this, 'secondsLeft', () => 15 - this.state.secondsPassed);
        }
    };
    z = (0, e.__decorate)([(0, h.inject)('powerups')], z);
    var _A = z;
}), a.register('01jjC', function(b, c) {
    _B(b.exports, 'default', function() {
        return _j;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('LObA9');
    let i = class extends g.Component {
        render() {
            return this.props.gameValues.thanosValues ? (0, e.jsx)(h.default, {}) : null;
        }
    };
    i = (0, d.__decorate)([
        (0, f.inject)('gameValues'),
        f.observer
    ], i);
    var _j = i;
}), a.register('LObA9', function(b, c) {
    _B(b.exports, 'default', function() {
        return _C;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('QWK7i'),
        h = a('mQhD8'),
        i = a('jVmx9'),
        j = a('b3ci8'),
        k = a('2x11J'),
        l = a('LEQ5w'),
        m = a('Axq+p'),
        n = a('TwXYL');
    let o, p, q, r = b => b;
    const s = {
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
        t = {
            hidden: {
                opacity: 0
            },
            show: {
                opacity: 1
            }
        },
        u = b => (0, f.jsx)(n.motion.div, {
            variants: t,
            initial: 'hidden',
            transition: {
                duration: 1.2
            },
            children: (0, f.jsx)(i.Preview, {
                color: {
                    text: g.default.White,
                    background: b.color
                },
                icon: 'far fa-gem'
            })
        }),
        v = m.default.div(o || (o = r`
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
`), g.default.Black, g.default.White),
        w = m.default.div(p || (p = r`
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
        x = m.default.div(q || (q = r`
  animation-duration: 3s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`));
    let y;
    var z;
    (z = y || (y = {})).winner = 'Winner', z.waiting = 'Waiting', z.resultsShowing = 'Results Showing', z.result = 'Result';
    const A = b => {
        let _B = '';
        return b.forEach((c, a) => {
            _B += c, a + 1 !== b.length && (_B += ', ');
        }), _B;
    };
    let B = class extends l.Component {
        componentDidMount() {
            (0, j.toggleDrawer)(!1, !0), setTimeout(() => this.setState({
                showStones: !0
            }), 1200), setTimeout(() => this.setState({
                stage: y.waiting
            }), 11400);
            const C = this.props.gameValues.thanosValues.showAt,
                D = setInterval(() => {
                    const E = Math.round((C - Date.now()) / 1000);
                    if (E <= 0)
                        return this.setState({
                            stage: y.resultsShowing
                        }), setTimeout(() => this.setState({
                            stage: y.result
                        }), 4000 * (this.props.gameValues.thanosValues.saved.length + this.props.gameValues.thanosValues.snapped.length)), void clearInterval(D);
                    this.setState({
                        secondsLeft: E
                    });
                }, 200);
        }
        render() {
            return (0, f.jsx)(v, {
                children: (0, f.jsx)(w, {
                    children: this.getContent()
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                stage: y.winner,
                secondsLeft: 0,
                showStones: !1
            }), (0, d.default)(this, 'getContent', () => {
                const {
                    thanosValues: C
                } = this.props.gameValues;
                if (this.state.stage === y.waiting)
                    return (0, f.jsx)('div', {
                        children: (0, f.jsxs)(x, {
                            className: 'animated fadeIn',
                            children: [
                                (0, f.jsx)('div', {
                                    style: {
                                        fontSize: 25
                                    },
                                    children: 'The snap is about to happen...'
                                }),
                                (0, f.jsxs)('b', {
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
                if (this.state.stage === y.resultsShowing)
                    return (0, f.jsx)(x, {
                        children: (0, f.jsx)('div', {
                            style: {
                                fontSize: 25,
                                textAlign: 'center',
                                maxWidth: 500
                            },
                            children: 'Look up! The snap results are showing...'
                        })
                    });
                if (this.state.stage === y.result) {
                    const D = (0, h.identifier)();
                    let E = !0,
                        F = 'You Got Snapped!',
                        G = '';
                    if (C.saved.map(C => C.id).includes(D)) {
                        E = !1, F = 'You Survived The Snap!';
                        G = `You survived along with ${ A(C.saved.filter(C => C.id !== D).map(C => C.name)) }`;
                    } else
                        C.winner.id === D ? (E = !1, F = 'You Won!', G = `You snapped ${ A(C.snapped.map(C => C.name)) }`) : G = `You got snapped along with ${ A(C.snapped.filter(C => C.id !== D).map(C => C.name)) }`;
                    return (0, f.jsx)('div', {
                        children: (0, f.jsxs)(x, {
                            style: {
                                animationDuration: '22s'
                            },
                            className: E ? 'animated fadeOut' : '',
                            children: [
                                (0, f.jsx)('b', {
                                    style: {
                                        fontSize: 46,
                                        textAlign: 'center'
                                    },
                                    children: F
                                }),
                                (0, f.jsx)('div', {
                                    style: {
                                        margin: 10,
                                        maxWidth: 500,
                                        textAlign: 'center'
                                    },
                                    children: G
                                })
                            ]
                        })
                    }, '3');
                }
                return this.state.stage === y.winner ? (0, f.jsx)('div', {
                    children: (0, f.jsxs)(x, {
                        className: 'animated fadeIn',
                        children: [
                            (0, f.jsx)('b', {
                                style: {
                                    fontSize: 43
                                },
                                children: C.winner.name
                            }),
                            (0, f.jsx)('div', {
                                style: {
                                    fontSize: 25
                                },
                                children: 'acquired all 6 Infinity Stones'
                            }),
                            (0, f.jsx)('div', {
                                style: {
                                    height: 10
                                }
                            }),
                            (0, f.jsxs)(n.motion.div, {
                                animate: this.state.showStones ? 'show' : 'hidden',
                                style: {
                                    display: 'flex'
                                },
                                variants: s,
                                children: [
                                    (0, f.jsx)(u, {
                                        color: '#f4511e'
                                    }),
                                    (0, f.jsx)(u, {
                                        color: '#388e3c'
                                    }),
                                    (0, f.jsx)(u, {
                                        color: '#1976d2'
                                    }),
                                    (0, f.jsx)(u, {
                                        color: '#ffcc80'
                                    }),
                                    (0, f.jsx)(u, {
                                        color: '#d32f2f'
                                    }),
                                    (0, f.jsx)(u, {
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
    B = (0, e.__decorate)([(0, k.inject)('gameValues')], B);
    var _C = B;
}), a.register('kSOTp', function(b, c) {
    _h(b.exports, 'default', function() {
        return _n;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('uo5Q0'),
        h = a('RYc37'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('OkCPe'),
        l = a('C4N9N');
    let m = class extends j.Component {
        render() {
            return (0, f.jsx)(l.BackgroundContainer, {
                children: (0, f.jsxs)(k.Card, {
                    children: [
                        (0, f.jsx)(k.Title, {
                            children: (0, f.jsx)(h.default, {
                                text: this.props.gameValues.nonDismissMessage.title
                            })
                        }),
                        (0, f.jsx)(k.Details, {
                            children: (0, f.jsx)(h.default, {
                                text: this.props.gameValues.nonDismissMessage.message
                            })
                        }),
                        (0, f.jsx)(g.default, {
                            label: this.props.gameValues.nonDismissMessage.buttonText || 'Join New Game',
                            onClick: this.handleClick,
                            type: 'secondary'
                        })
                    ]
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'handleClick', () => {
                this.props.gameValues.nonDismissMessage.link ? window.location.href = this.props.gameValues.nonDismissMessage.link : window.location.reload();
            });
        }
    };
    m = (0, e.__decorate)([
        (0, i.inject)('gameValues'),
        i.observer
    ], m);
    var _n = m;
}), a.register('C4N9N', function(b, c) {
    _h(b.exports, 'BackgroundContainer', function() {
        return _g;
    });
    var d = a('Axq+p'),
        e = a('b3ci8');
    let f;
    const _g = d.default.div(f || (f = (b => b)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ 0 }) repeat 0 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`), (0, e.getAssetPath)('background.png'));
}), a.register('TaSes', function(b, c) {
    _h(b.exports, 'default', function() {
        return _l;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('QWK7i'),
        g = a('2x11J'),
        h = a('LEQ5w'),
        i = a('Axq+p');
    let j, k = class extends h.Component {
        render() {
            return this.props.ui.fullBlackScreen ? (0, e.jsx)(_m, {}) : null;
        }
    };
    k = (0, d.__decorate)([
        (0, g.inject)('ui'),
        g.observer
    ], k);
    var _l = k;
    const _m = i.default.div(j || (j = (b => b)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999999999999999999999;
  background: ${ 0 };
`), f.default.Black);
}), a.register('RMwBf', function(b, c) {
    _h(b.exports, 'default', function() {
        return _j;
    });
    var d = a('csYze'),
        e = a('0hzx+'),
        f = a('2x11J'),
        g = a('LEQ5w'),
        h = a('qmqup');
    let i = class extends g.Component {
        render() {
            return (0, e.jsx)(h.default, {
                isSnowing: this.props.ui.snowing
            });
        }
    };
    i = (0, d.__decorate)([
        (0, f.inject)('ui'),
        f.observer
    ], i);
    var _j = i;
}), a.register('qmqup', function(b, c) {
    _h(b.exports, 'default', function() {
        return _i;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('tO6XK');
    class h extends f.Component {
        componentDidUpdate(i) {
            this.state.hasShown || !i.isSnowing && this.props.isSnowing && (this.setState({
                hasShown: !0
            }), (0, g.default)());
        }
        render() {
            return (0, e.jsx)('canvas', {
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
        constructor(...b) {
            super(...b), (0, d.default)(this, 'state', {
                hasShown: !1
            });
        }
    }
    var _i = h;
}), a.register('tO6XK', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('O4G7w'),
        e = a('YuT/D');

    function _f() {
        var g = !0,
            _h = document.getElementById('snow-canv');
        if (_h) {
            for (var i, j = _h.getContext('2d'), k = _h.width = window.innerWidth, l = _h.height = window.innerHeight, m = [], n = 0; n < 29; ++n)
                (i = new _i()).y = Math.random() * (l + 50), i.x = Math.random() * k, i.t = Math.random() * (2 * Math.PI), i.sz = 100 / (10 + 100 * Math.random()) * 1.3, i.sp = 0.15 * Math.pow(0.8 * i.sz, 2) * 1, i.sp = i.sp < 1 ? 1 : i.sp, m.push(i);
            _i(), (0, e.reaction)(() => d.default.ui.isSnowing, () => {
                const o = d.default.ui.isSnowing;
                !g && o ? (g = o, _i()) : g = o;
            });
        }

        function _i() {
            if (g) {
                window.requestAnimationFrame(_i), a.clearRect(0, 0, _f, _g), a.fillRect(0, 0, _f, _g), a.fill();
                for (var j = 0; j < _h.length; ++j) {
                    var k = _h[j];
                    k.t += 0.05, k.t = k.t >= 2 * Math.PI ? 0 : k.t, k.y += k.sp, k.x += Math.sin(1 * k.t) * (0.3 * k.sz), k.y > _g + 50 && (k.y = -10 - 20 * Math.random()), k.x > _f + 20 && (k.x = -20), k.x < -20 && (k.x = _f + 20), k.draw();
                }
            }
        }

        function _i() {
            this.draw = function() {
                this.g = a.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, 'hsla(255,255%,255%,1)'), this.g.addColorStop(1, 'hsla(255,255%,255%,0)'), a.moveTo(this.x, this.y), a.fillStyle = this.g, a.beginPath(), a.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), a.fill();
            };
        }
    }
}), a.register('AxrXZ', function(b, c) {
    _x(b.exports, 'default', function() {
        return _r;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        _g = a('QWK7i'),
        _h = a('E9ysS'),
        i = a('b3ci8'),
        j = a('XLrkG'),
        k = a('2x11J'),
        l = a('LEQ5w'),
        m = a('Axq+p'),
        n = a('MW/KE'),
        o = a('Osc3j');
    let p, q = class extends l.Component {
        render() {
            return (0, f.jsx)(_s, {
                children: this.getContent()
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'getContent', () => {
                const {
                    status: r
                } = this.props.imposter;
                return r === j.ImposterStatus.discussion || r === j.ImposterStatus.voting ? (0, f.jsx)(n.default, {}) : r === j.ImposterStatus.votingResult ? (0, f.jsx)(o.default, {
                    text: 'Look at your captain\'s screen for voting results.'
                }) : r === j.ImposterStatus.intro ? (0, f.jsx)(o.default, {
                    text: 'Look at your captain\'s screen for instructions.'
                }) : (r == j.ImposterStatus.questions && (0, i.changeRoute)(_h.default.questions), null);
            });
        }
    };
    q = (0, e.__decorate)([
        (0, k.inject)('imposter'),
        k.observer
    ], q);
    var _r = q;
    const _s = m.default.div(p || (p = (b => b)`
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
`), _g.default.White);
}), a.register('MW/KE', function(b, c) {
    _x(b.exports, 'default', function() {
        return _w;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('NIZyA'),
        h = a('fmVdR'),
        i = a('QWK7i'),
        j = a('XLrkG'),
        k = a('2x11J'),
        l = a('LEQ5w'),
        m = a('Axq+p'),
        n = a('C8xPK'),
        o = a('eL9mY'),
        p = a('2QLd7'),
        q = a('UMVyY');
    let r, s, t, u = b => b,
        v = class extends l.Component {
            render() {
                return (0, f.jsx)(_x, {
                    children: (0, f.jsx)(_y, {
                        children: (0, f.jsxs)(_z, {
                            children: [
                                (0, f.jsx)(n.default, {}),
                                this.getContent()
                            ]
                        })
                    })
                });
            }
            constructor(...b) {
                super(...b), (0, d.default)(this, 'getContent', () => {
                    const {
                        me: w,
                        status: _x
                    } = this.props.imposter;
                    return w && w.votedOff ? (0, f.jsx)(g.default, {
                        type: 'warning',
                        showIcon: !0,
                        message: 'Voted Off',
                        description: 'You\'ve been voted off and cannot contribute.',
                        style: {
                            textAlign: 'left',
                            marginTop: 35
                        }
                    }) : (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    marginTop: 25,
                                    marginBottom: 20
                                },
                                className: 'maxWidth',
                                children: (0, f.jsxs)(h.default, {
                                    children: [
                                        (0, f.jsx)('span', {
                                            role: 'img',
                                            'aria-label': 'notebook',
                                            children: '\uD83D\uDCD3'
                                        }),
                                        ' ',
                                        'Notebook'
                                    ]
                                })
                            }),
                            (0, f.jsx)(o.default, {}),
                            _x === j.ImposterStatus.discussion ? (0, f.jsxs)(f.Fragment, {
                                children: [
                                    (0, f.jsx)('div', {
                                        style: {
                                            marginTop: 25,
                                            marginBottom: 20
                                        },
                                        className: 'maxWidth',
                                        children: (0, f.jsxs)(h.default, {
                                            children: [
                                                (0, f.jsx)('span', {
                                                    role: 'img',
                                                    'aria-label': 'astronaut',
                                                    children: '\uD83D\uDC69‍\uD83D\uDE80'
                                                }),
                                                ' ',
                                                'People'
                                            ]
                                        })
                                    }),
                                    (0, f.jsx)(p.default, {})
                                ]
                            }) : (0, f.jsx)(q.default, {})
                        ]
                    });
                });
            }
        };
    v = (0, e.__decorate)([
        (0, k.inject)('imposter'),
        k.observer
    ], v);
    var _w = v;
    const _x = m.default.div.attrs({
            className: 'maxWidth maxHeight flex hc'
        })(r || (r = u``)),
        _y = m.default.div.attrs({
            className: 'scroll-y'
        })(s || (s = u`
  flex: 1;
`)),
        _z = m.default.div(t || (t = u`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 25px;
  width: 90%;
  max-width: 600px;
  background: ${ 0 };
  color: ${ 0 };
`), i.default.White, i.default.Black);
}), a.register('C8xPK', function(b, c) {
    _q(b.exports, 'default', function() {
        return _r;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('b3ci8'),
        h = a('XLrkG'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('Axq+p');
    let l, m, n, o, p = b => b,
        q = class extends j.Component {
            render() {
                return (0, f.jsxs)(_s, {
                    children: [
                        (0, f.jsx)(_t, {
                            src: this.getImage()
                        }),
                        (0, f.jsx)(_u, {
                            children: this.getTitle()
                        }),
                        (0, f.jsx)(_v, {
                            children: this.getDescription()
                        })
                    ]
                });
            }
            constructor(...b) {
                super(...b), (0, d.default)(this, 'getImage', () => {
                    const {
                        status: r
                    } = this.props.imposter;
                    return r === h.ImposterStatus.discussion ? (0, g.getAssetPath)('discussion.svg') : (0, g.getAssetPath)('vote.svg');
                }), (0, d.default)(this, 'getTitle', () => {
                    const {
                        status: r
                    } = this.props.imposter;
                    return r === h.ImposterStatus.discussion ? 'Discussion' : 'Vote';
                }), (0, d.default)(this, 'getDescription', () => {
                    const {
                        status: r
                    } = this.props.imposter;
                    return r === h.ImposterStatus.discussion ? 'Who is the impostor?' : 'Vote out who you think the impostor is!';
                });
            }
        };
    q = (0, e.__decorate)([
        (0, i.inject)('imposter'),
        i.observer
    ], q);
    var _r = q;
    const _s = k.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(l || (l = p``)),
        _t = k.default.img(m || (m = p`
  max-width: 150px;
  margin-top: 15px;
`)),
        _u = k.default.div(n || (n = p`
  margin-top: 10px;
  font-weight: bold;
  font-size: 50px;
`)),
        _v = k.default.div(o || (o = p`
  font-size: 21px;
  color: rgba(0, 0, 0, 0.9);
`));
}), a.register('2QLd7', function(b, c) {
    _q(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('QWK7i'),
        f = a('4vC7/'),
        g = a('b3ci8'),
        h = a('XLrkG'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('Axq+p'),
        l = a('5drJf'),
        m = a('oN4l0'),
        n = a('4GYRE');
    let o;
    var _p = (0, i.observer)(b => {
        const {
            imposter: _q
        } = j.useContext(m.default);
        j.useEffect(() => {
            (0, g.send)(f.default.imposter.requestPeople);
        }, []);
        const {
            showAction: r,
            actionText: s,
            onSelect: t
        } = b, {
            epl: u,
            me: v
        } = _q, w = (0, l.DecryptData)(u) || [];
        if (!v)
            return null;
        const x = v && v.role === h.PersonRole.imposter;
        return (0, d.jsx)(_q, {
            children: w.filter(_q => _q.id !== v.id && (!_q.votedOff && (!b.filter || b.filter(_q)))).map(b => (0, d.jsx)(n.default, {
                name: b.name,
                nameColor: b.markedAsClear ? e.default.DarkSuccessGreen : b.role === h.PersonRole.imposter && x ? '#c62828' : e.default.Black,
                description: b.markedAsClear ? 'On the clear list' : b.role === h.PersonRole.imposter && x ? 'An Impostor' : void 0,
                button: r ? {
                    label: s,
                    onClick: () => t(b.id)
                } : null
            }, b.id))
        });
    });
    const _q = k.default.div.attrs({
        className: 'maxWidth'
    })(o || (o = (b => b)``));
}), a.register('4GYRE', function(b, c) {
    _t(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('Axq+p');
    a('LEQ5w');
    var f = a('uo5Q0'),
        g = a('QWK7i');
    let h, i, j, k, l, m = b => b;
    var _n = b => (0, d.jsxs)(_o, {
        children: [
            (0, d.jsxs)(_p, {
                children: [
                    (0, d.jsx)(_q, {
                        style: {
                            color: b.nameColor || g.default.Black
                        },
                        children: b.name
                    }),
                    b.description && (0, d.jsx)(_r, {
                        children: b.description
                    })
                ]
            }),
            b.button && (0, d.jsx)(_s, {
                children: (0, d.jsx)(f.default, {
                    type: 'primary',
                    onClick: b.button.onClick,
                    label: b.button.label,
                    size: 'small'
                })
            })
        ]
    });
    const _o = e.default.div.attrs({
            className: 'flex vc light-shadow'
        })(h || (h = m`
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
        _p = e.default.div(i || (i = m``)),
        _q = e.default.div(j || (j = m`
  font-size: 22px;
  font-weight: 500;
  overflow-wrap: anywhere;
`)),
        _r = e.default.div(k || (k = m`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`)),
        _s = e.default.div(l || (l = m`
  flex-shrink: 0;
  margin-left: 10px;
`));
}), a.register('UMVyY', function(b, c) {
    _t(b.exports, 'default', function() {
        return _p;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('NIZyA'),
        h = a('fmVdR'),
        i = a('4vC7/'),
        j = a('I+0AY'),
        k = a('b3ci8'),
        l = a('2x11J'),
        m = a('LEQ5w'),
        n = a('2QLd7');
    let o = class extends m.Component {
        render() {
            const {
                me: p
            } = this.props.imposter;
            return p && p.currentVote ? (0, f.jsx)(g.default, {
                type: 'success',
                showIcon: !0,
                message: 'Voted!',
                description: 'Your vote is in!',
                style: {
                    textAlign: 'left',
                    marginTop: 20
                }
            }) : (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            marginTop: 25,
                            marginBottom: 20
                        },
                        className: 'maxWidth',
                        children: (0, f.jsx)(h.default, {
                            children: '\uD83D\uDC69‍\uD83D\uDE80 People'
                        })
                    }),
                    (0, f.jsx)(n.default, {
                        showAction: !0,
                        actionText: 'Vote',
                        onSelect: this.vote
                    })
                ]
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'vote', b => {
                j.successClick.play(), (0, k.send)(i.default.imposter.vote, b);
            });
        }
    };
    o = (0, e.__decorate)([
        (0, l.inject)('imposter'),
        l.observer
    ], o);
    var _p = o;
}), a.register('Osc3j', function(b, c) {
    _t(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+'),
        e = a('RYc37');
    a('LEQ5w');
    var f = a('Axq+p');
    let g, h, i = b => b;
    var _j = b => (0, d.jsx)(_k, {
        children: (0, d.jsx)(_l, {
            children: (0, d.jsx)(e.default, {
                text: b.text
            })
        })
    });
    const _k = f.default.div.attrs({
            className: 'flex hc vc maxWidth maxHeight'
        })(g || (g = i``)),
        _l = f.default.div(h || (h = i`
  background: rgba(97, 97, 97, 0.8);
  padding: 48px;
  border-radius: 8px;
  font-size: 22px;
  border-style: solid;
  border-color: #ff9800;
  border-width: 3px;
  margin: 30px;
`));
}), a.register('vvlOW', function(b, c) {
    _t(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('nrG5X'),
        g = a('Axq+p'),
        h = a('QWK7i'),
        i = a('f9q/6'),
        j = a('b3ci8'),
        k = a('2x11J'),
        l = a('oN4l0'),
        m = a('t/Cyj');
    let n;
    var _o = (0, k.observer)(() => {
        const {
            draw: {
                status: p
            }
        } = e.useContext(l.default);
        return (0, d.jsx)(_p, {
            children: p === m.DrawStatus.drawing ? (0, d.jsx)(f.default, {}) : (0, d.jsx)(i.default, {})
        });
    });
    const _p = g.default.div.attrs({
        className: 'maxWidth maxHeight'
    })(n || (n = (b => b)`
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
`), () => (0, j.mainFontName)(), h.default.Black);
}), a.register('nrG5X', function(b, c) {
    _t(b.exports, 'MOBILE_BREAKPOINT', function() {
        return _q;
    }), _t(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('RWWge'),
        h = a('UGtMl'),
        i = a('Fg5C+'),
        j = a('2x11J'),
        k = a('oN4l0'),
        l = a('t/Cyj'),
        m = a('b3ci8'),
        n = a('4vC7/'),
        o = a('YuT/D');
    let p;
    const _q = 890;
    var _r = (0, j.observer)(() => {
        var s;
        const {
            draw: _t
        } = e.useContext(k.default), u = e.useRef(), [v, w] = e.useState(i.colors[0]), [x, y] = e.useState(i.sizes[1]), [z, A] = e.useState(), B = (null == _t || null === (s = _t.me) || void 0 === s ? void 0 : s.role) === l.DrawRole.drawer, C = e.useMemo(() => _t.round.drawingBase64, []);
        e.useEffect(() => {
            const D = (0, o.reaction)(() => _t.latestLine, D => {
                    var E;
                    D && !B && (null == u || null === (E = u.current) || void 0 === E || E.addLine(D));
                }),
                E = (0, o.reaction)(() => _t.round.drawingBase64, D => {
                    var F;
                    D && !B && (null == u || null === (F = u.current) || void 0 === F || F.drawImage(D));
                }),
                F = (0, o.reaction)(() => _t.shouldClearCanvas, D => {
                    D && B && (_H(), _t.shouldClearCanvas = !1);
                });
            return () => {
                D(), E(), F();
            };
        }, [B]);
        const D = e.useCallback(s => {
                B && (0, m.send)(n.default.draw.lineDrawn, s);
            }, [B]),
            E = e.useCallback(s => {
                B && (0, m.send)(n.default.draw.imageDrawn, s);
            }, [B]),
            F = e.useMemo(() => _t.round.secondsLeft ? `${ _t.round.secondsLeft } ${ (0, m.plural)('second', _t.round.secondsLeft) } left...` : 'Time\'s up!', [_t.round.secondsLeft]),
            G = !(!B || !_t.round.secondsLeft),
            _H = () => {
                u.current && B && u.current.clear();
            };
        return (0, d.jsxs)(_s, {
            children: [
                (0, d.jsx)(g.default, {
                    canEdit: G,
                    color: v,
                    brushSize: x,
                    initialImage: C,
                    canvasRef: u,
                    emitLine: D,
                    emitImage: E,
                    term: _t.round.term,
                    isDrawer: B,
                    drawerName: _t.round.drawer.name,
                    revealText: _t.round.revealText,
                    timeText: F,
                    secondsLeft: _t.round.secondsLeft,
                    hidingTerm: z
                }),
                (0, d.jsx)(h.default, {
                    isDrawer: B,
                    setColor: w,
                    setBrushSize: y,
                    color: v,
                    brushSize: x,
                    undo: () => {
                        u.current && B && u.current.undo();
                    },
                    clear: _H,
                    guessedCorrectly: _t.me.answeredCorrectly,
                    secondsLeft: _t.round.secondsLeft,
                    timeText: F,
                    term: _t.round.term,
                    hidingTerm: z,
                    setHidingTerm: A
                })
            ]
        });
    });
    const _s = f.default.div.attrs({
        className: 'maxWidth maxHeight flex'
    })(p || (p = (b => b)`
  align-items: stretch;
  @media (max-width: ${ 0 }px) {
    flex-direction: column;
  }
`), _q);
}), a.register('RWWge', function(b, c) {
    _v(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('A6lcN'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('ZrZsz'),
        i = a('BXKZi0'),
        j = a('nrG5X'),
        k = a('mA4IE'),
        l = a('b5kvC');
    let m, n, o, p, q, r, s, t = b => b;
    const u = b => {
        const _v = b.text.split('');
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)('span', {
                children: _v.map((_v, c) => {
                    const w = `letter-${ c }`;
                    return ' ' !== _v || b.noTimeLeft ? (0, d.jsx)(f.Fragment, {
                        children: _v
                    }, w) : (0, d.jsx)(f.Fragment, {
                        children: '\xA0\xA0\xA0'
                    }, w);
                })
            })
        });
    };
    var _v = b => {
        const w = f.useRef(null),
            [x, y] = (0, i.default)(w),
            z = (0, k.useWindowWidth)(),
            A = Math.min(x / 4, y / 3),
            B = 4 * A,
            C = 3 * A,
            D = z < j.MOBILE_BREAKPOINT ? b.timeText : b.isDrawer ? 'You\'re drawing...' : null,
            E = b.isDrawer ? null : (0, d.jsxs)('span', {
                children: [
                    'Drawer: ',
                    (0, d.jsx)('b', {
                        children: b.drawerName
                    })
                ]
            });
        return (0, d.jsx)(_w, {
            children: (0, d.jsxs)(_x, {
                children: [
                    (0, d.jsxs)(_y, {
                        children: [
                            D ? (0, d.jsx)(_z, {
                                children: D
                            }) : null,
                            (0, d.jsx)(_A, {
                                children: b.isDrawer ? b.hidingTerm ? 'Term Hidden' : b.term : (0, d.jsx)(u, {
                                    text: b.revealText,
                                    noTimeLeft: !b.secondsLeft
                                })
                            })
                        ]
                    }),
                    (0, d.jsx)(_B, {
                        ref: w,
                        children: B && C ? (0, d.jsx)(h.HandDrawnDiv, {
                            style: {
                                width: B,
                                height: C
                            },
                            children: (0, d.jsx)(e.default, {
                                ref: b.canvasRef,
                                width: B,
                                height: C,
                                canEdit: b.canEdit,
                                color: b.color,
                                strokeWidth: b.brushSize,
                                emitLine: b.emitLine,
                                onLatestImage: b.emitImage,
                                initialImage: b.initialImage
                            })
                        }) : null
                    }),
                    E ? (0, d.jsx)(_C, {
                        children: E
                    }) : null
                ]
            })
        });
    };
    const _w = g.default.div(m || (m = t`
  flex: 1;
  overflow: hidden;
  @media (max-width: ${ 0 }px) {
    overflow: visible;
    height: 60vh;
  }
`), () => j.MOBILE_BREAKPOINT),
        _x = g.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column vc'
        })(n || (n = t`
  padding: 20px;
  max-height: 100%;
  overflow: hidden;
  @media (max-width: ${ 0 }px) {
    padding: 20px 15px;
  }
`), () => j.MOBILE_BREAKPOINT),
        _y = g.default.div.attrs({
            className: 'flex flex-column vc'
        })(o || (o = t`
  margin-bottom: 10px;
  @media (max-width: ${ 0 }px) {
    margin-bottom: 7px;
  }
`), () => j.MOBILE_BREAKPOINT),
        _z = g.default.div(p || (p = t`
  font-size: 23px;
  @media (max-width: ${ 0 }px) {
    font-size: 18px;
  }
`), () => j.MOBILE_BREAKPOINT),
        _A = g.default.div(q || (q = t`
  font-size: 41px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 32px;
  }
`), l.FontWeights.Bold, () => j.MOBILE_BREAKPOINT),
        _B = g.default.div.attrs({
            className: 'flex hc vc maxWidth'
        })(r || (r = t`
  flex: 1;
  overflow: hidden;
`)),
        _C = g.default.div(s || (s = t`
  margin-top: 15px;
  font-size: 19px;
  @media (max-width: ${ 0 }px) {
    display: none;
  }
`), () => j.MOBILE_BREAKPOINT);
}), a.register('ZrZsz', function(b, c) {
    _j(b.exports, 'HandDrawnDiv', function() {
        return _f;
    });
    var d = a('QWK7i');
    let e;
    const _f = a('Axq+p').default.div(e || (e = (b => b)`
  border: solid
    ${ 0 }px
    ${ 0 };
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  -webkit-transform: translateZ(0); // needed in Safari for some weird reason
`), b => void 0 !== b.borderWidth ? b.borderWidth : 3, d.default.Black);
}), a.register('BXKZi0', function(b, c) {
    _j(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+UcJ7'),
        f = a('dR/Gi');
    var _g = (b, _j) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = b && 'current' in b ? b.current : b;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == _j ? void 0 : _j.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == _j ? void 0 : _j.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const _j = b && 'current' in b ? b.current : b;
            _j && i([
                _j.offsetWidth,
                _j.offsetHeight
            ]);
        }, [b]), (0, e.default)(b, b => {
            const j = b.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _k(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const j = new Map(),
            _k = new(0, d.default)((0, g.default)((_k, c) => {
                var l;
                if (1 === _k.length)
                    null === (l = j.get(_k[0].target)) || void 0 === l || l(_k[0], c);
                else
                    for (let m = 0; m < _k.length; m++) {
                        var n;
                        null === (n = j.get(_k[m].target)) || void 0 === n || n(_k[m], c);
                    }
            }));
        return {
            observer: _k,
            subscribe(l, m) {
                _k.observe(l), j.set(l, m);
            },
            unsubscribe(l) {
                _k.unobserve(l), j.delete(l);
            }
        };
    }());
    var _j = function(k, l) {
        const m = i(),
            n = (0, f.default)(l);
        return (0, e.default)(() => {
            let o = !1;
            const p = k && 'current' in k ? k.current : k;
            if (p)
                return m.subscribe(p, (k, m) => {
                    o || n.current(k, m);
                }), () => {
                    o = !0, m.unsubscribe(p);
                };
        }, [
            k,
            m,
            n
        ]), m.observer;
    };
}), a.register('dR/Gi', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = _c(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = b => {
        const _f = d.useRef(b);
        return d.useEffect(() => {
            _f.current = b;
        }), _f;
    };
}), a.register('18t62', function(b, c) {
    _f(b.exports, 'default', function() {
        return a;
    });
    var d = function(e) {
        var _f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                _f = j, g || (g = requestAnimationFrame(function() {
                    g = null, e.apply(void 0, _f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), a.register('mA4IE', function(b, c) {
    _l(b.exports, 'useWindowWidth', function() {
        return _p;
    });
    var d = a('hVk9x'),
        e = a('89+GI');
    const f = {},
        g = 'undefined' == typeof window ? null : window,
        h = () => [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ],
        i = (j = k) => {
            const {
                wait: _l,
                leading: m,
                initialWidth: n = 0,
                initialHeight: o = 0
            } = j, [_p, q] = (0, d.useDebounce)('undefined' == typeof document ? [
                n,
                o
            ] : h, _l, m), r = () => q(h);
            return (0, e.default)(g, 'resize', r), (0, e.default)(g, 'orientationchange', r), _p;
        },
        l = j => i(j)[0];
}), a.register('hVk9x', function(b, c) {
    _g(b.exports, 'useDebounceCallback', function() {
        return _f;
    }), _g(b.exports, 'useDebounce', function() {
        return _k;
    });
    var d = a('LEQ5w'),
        e = a('20TiJ');
    const _f = (b, _g = 100, h = !1) => {
            const i = (0, e.default)(b),
                j = d.useRef(),
                _k = [
                    _g,
                    h,
                    i
                ];

            function l() {
                j.current && clearTimeout(j.current), j.current = void 0;
            }

            function l() {
                j.current = void 0;
            }
            return d.useEffect(() => _h, _k), d.useCallback(function() {
                const l = arguments,
                    {
                        current: m
                    } = j;
                if (void 0 === m && h)
                    return j.current = setTimeout(_i, _g), i.current.apply(null, l);
                m && clearTimeout(m), j.current = setTimeout(() => {
                    j.current = void 0, i.current.apply(null, l);
                }, _g);
            }, _k);
        },
        i = (b, _g, h) => {
            const j = d.useState(b);
            return [
                j[0],
                _f(j[1], _g, h)
            ];
        };
}), a.register('89+GI', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('dR/Gi');
    var _f = function(g, _h, i, j) {
        const k = d.useRef(i),
            l = d.useRef(j);
        (0, e.default)(() => {
            k.current = i, l.current = j;
        }), (0, e.default)(() => {
            const m = g && 'current' in g ? g.current : g;
            if (!m)
                return;
            let n = 0;

            function o(...g) {
                n || k.current.apply(this, g);
            }
            m.addEventListener(_h, d);
            const o = l.current;
            return () => {
                n = 1, m.removeEventListener(_h, d), o && o();
            };
        }, [
            g,
            _h
        ]);
    };
}), a.register('UGtMl', function(b, c) {
    _w(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('nrG5X'),
        g = a('Fg5C+'),
        _h = a('6Qv2M');
    let _i;
    var _j = b => (0, d.jsx)(_k, {
        children: b.isDrawer ? (0, d.jsx)(g.default, {
            setColor: b.setColor,
            setBrushSize: b.setBrushSize,
            clear: b.clear,
            undo: b.undo,
            color: b.color,
            brushSize: b.brushSize,
            timeText: b.timeText,
            hidingTerm: b.hidingTerm,
            setHidingTerm: b.setHidingTerm
        }) : (0, d.jsx)(_h.default, {
            guessedCorrectly: b.guessedCorrectly,
            secondsLeft: b.secondsLeft,
            timeText: b.timeText,
            term: b.term
        })
    });
    const _k = e.default.div.attrs({
        className: 'scroll-y flex flex-column'
    })(_i || (_i = (b => b)`
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
`), () => f.MOBILE_BREAKPOINT);
}), a.register('Fg5C+', function(b, c) {
    _w(b.exports, 'colors', function() {
        return _t;
    }), _w(b.exports, 'sizes', function() {
        return _u;
    }), _w(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('b5kvC'),
        f = a('QWK7i'),
        g = a('I+0AY');
    a('LEQ5w');
    var h = a('Axq+p'),
        i = a('nrG5X');
    let j, k, l, m, n, o, p, q, r = b => b;
    const s = '#7cb342',
        _t = [
            f.default.Black,
            f.default.White,
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
        _u = [
            5,
            10,
            20,
            40
        ];
    var _v = b => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(_w, {
                children: [
                    (0, d.jsx)(_x, {
                        children: 'Color'
                    }),
                    (0, d.jsx)(_y, {
                        children: _t.map(_w => (0, d.jsx)(_z, {
                            color: _w,
                            selected: _w === b.color,
                            onClick: () => {
                                g.pop.play(), b.setColor(_w);
                            }
                        }, _w))
                    }),
                    (0, d.jsx)(_x, {
                        children: 'Brush Size'
                    }),
                    (0, d.jsx)(_y, {
                        children: _u.map(_w => (0, d.jsx)(_A, {
                            onClick: () => {
                                g.pop.play(), b.setBrushSize(_w);
                            },
                            selected: _w === b.brushSize,
                            children: (0, d.jsx)('div', {
                                style: {
                                    width: _w,
                                    height: _w,
                                    borderRadius: '50%',
                                    background: 'black'
                                }
                            })
                        }, `size-${ _w }`))
                    }),
                    (0, d.jsx)(_x, {
                        children: 'Tools'
                    }),
                    (0, d.jsxs)(_y, {
                        children: [
                            (0, d.jsxs)(_B, {
                                onClick: () => {
                                    g.pop.play(), b.undo();
                                },
                                children: [
                                    (0, d.jsx)(_C, {
                                        className: 'fas fa-undo'
                                    }),
                                    ' Undo'
                                ]
                            }),
                            (0, d.jsxs)(_B, {
                                onClick: () => {
                                    g.pop.play(), b.clear();
                                },
                                children: [
                                    (0, d.jsx)(_C, {
                                        className: 'far fa-trash'
                                    }),
                                    ' Clear'
                                ]
                            }),
                            (0, d.jsxs)(_B, {
                                onClick: () => {
                                    b.setHidingTerm(!b.hidingTerm);
                                },
                                children: [
                                    (0, d.jsx)(_C, {
                                        className: b.hidingTerm ? 'fas fa-eye' : 'fas fa-eye-slash'
                                    }),
                                    ' ',
                                    b.hidingTerm ? 'Show Term' : 'Hide Term'
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, d.jsx)(_D, {
                children: b.timeText
            })
        ]
    });
    const _w = h.default.div(j || (j = r`
  padding: 20px;
`)),
        _x = h.default.div(k || (k = r`
  font-weight: ${ 0 };
  font-size: 34px;
`), e.FontWeights.Bold),
        _y = h.default.div.attrs({
            className: 'flex maxWidth wrap'
        })(l || (l = r`
  margin-top: 5px;
  margin-bottom: 15px;
`)),
        _z = h.default.div(m || (m = r`
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
`), b => b.color, b => b.selected ? 4 : 2, b => b.selected ? s : f.default.Black),
        _A = h.default.div.attrs({
            className: 'flex hc vc'
        })(n || (n = r`
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
`), b => b.selected ? 4 : 2, b => b.selected ? s : f.default.Black),
        _B = h.default.div.attrs({
            className: 'flex hc vc'
        })(o || (o = r`
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
`), f.default.Black),
        _C = h.default.i(p || (p = r`
  margin-right: 10px;
`)),
        _D = h.default.div(q || (q = r`
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
`), () => i.MOBILE_BREAKPOINT);
}), a.register('6Qv2M', function(b, c) {
    _w(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('ewwAh'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('b3ci8'),
        j = a('4vC7/'),
        k = a('TgZEH'),
        l = a('fe6E3'),
        m = a('2x11J'),
        n = a('oN4l0'),
        o = a('nrG5X');
    let p, q, r, s, t, u = b => b;
    var _v = (0, m.observer)(b => {
        const _w = g.useRef(null),
            [x, y] = g.useState(''),
            {
                gameOptions: {
                    modeOptions: z
                }
            } = g.useContext(n.default);
        g.useEffect(() => {
            b.guessedCorrectly && y('');
        }, [b.guessedCorrectly]), g.useEffect(() => {
            0 === b.secondsLeft && y('');
        }, [b.secondsLeft]);
        const A = g.useMemo(() => {
                const B = b.term.split('');
                return (0, l.uniq)(B.filter(b => {
                    return !(1 === (B = b).length && (' ' === B || '.' === B || ',' === B || !isNaN(Number(B)) || B.match(/[a-z]/i)));
                    var C;
                }));
            }, [b.term]),
            B = () => {
                x && !b.guessedCorrectly && ((0, i.send)(j.default.draw.guess, x), y(''));
            },
            C = !b.secondsLeft,
            D = b.guessedCorrectly ? 'You guessed correctly!' : C ? 'Time\'s up!' : 'Type your guess here!',
            E = b.guessedCorrectly || C;
        return (0, d.jsxs)(_w, {
            children: [
                (0, d.jsx)(_x, {
                    children: b.timeText
                }),
                (0, d.jsxs)(_y, {
                    children: [
                        (0, d.jsx)(k.default, {}),
                        (0, d.jsxs)(_z, {
                            children: [
                                A.length && z && z.symbolKeyboardEnabled ? (0, d.jsx)('div', {
                                    className: 'flex vc',
                                    style: {
                                        marginBottom: 10
                                    },
                                    children: A.map(b => (0, d.jsx)(e.default, {
                                        size: 'small',
                                        type: 'dashed',
                                        style: {
                                            marginRight: 5
                                        },
                                        disabled: E,
                                        onClick: () => {
                                            return d = b, x.length < 21 && y(`${ x }${ d }`), void(_w.current && _w.current.focus());
                                            var F;
                                        },
                                        children: b
                                    }, `non-traditional-${ b }`))
                                }) : null,
                                (0, d.jsxs)(_A, {
                                    children: [
                                        (0, d.jsx)(f.default, {
                                            ref: _w,
                                            autoFocus: !0,
                                            placeholder: D,
                                            size: 'large',
                                            value: x,
                                            onChange: b => {
                                                y(b.target.value);
                                            },
                                            onPressEnter: B,
                                            disabled: E,
                                            maxLength: 21
                                        }),
                                        (0, d.jsx)(e.default, {
                                            onClick: B,
                                            style: {
                                                marginLeft: 10
                                            },
                                            type: 'primary',
                                            size: 'large',
                                            disabled: E,
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
    const _w = h.default.div.attrs({
            className: 'flex flex-column'
        })(p || (p = u`
  flex: 1;
  overflow: hidden;
`)),
        _x = h.default.div(q || (q = u`
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 2px;
  padding: 20px;
  font-size: 16px;
  line-height: 1;
  @media (max-width: ${ 0 }px) {
    display: none;
  }
`), () => o.MOBILE_BREAKPOINT),
        _y = h.default.div.attrs({
            className: 'flex flex-column'
        })(r || (r = u`
  flex: 1;
  padding: 0px 20px;
  overflow: hidden;
`)),
        _z = h.default.div(s || (s = u`
  padding-bottom: 20px;
`)),
        _A = h.default.div.attrs({
            className: 'flex'
        })(t || (t = u``));
}), a.register('TgZEH', function(b, c) {
    _o(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('oN4l0'),
        g = a('2x11J'),
        h = a('YuT/D'),
        i = a('QWK7i'),
        j = a('RYc37'),
        k = a('fe6E3'),
        l = a('Axq+p');
    let m;
    const n = b => {
        const {
            name: _o,
            action: p,
            translateAllowed: q,
            nameColor: r,
            actionColor: s,
            important: t
        } = b.item, u = t && p && !_o;
        return (0, d.jsxs)('div', {
            style: {
                fontSize: 17
            },
            children: [
                _o && (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)('b', {
                            style: {
                                color: r || i.default.Black
                            },
                            children: _o
                        }),
                        '\xA0'
                    ]
                }),
                p && (0, d.jsx)('span', {
                    style: {
                        color: s || i.default.Black,
                        fontWeight: u ? 'bold' : 'normal'
                    },
                    children: q ? (0, d.jsx)(j.default, {
                        text: p
                    }) : p
                })
            ]
        });
    };
    var _o = (0, g.observer)(() => {
        const p = e.useRef(null),
            [q, r] = e.useState([]),
            {
                draw: s
            } = e.useContext(f.default),
            t = (0, k.debounce)(p => {
                r(q => [
                    ...q,
                    p
                ]);
            }, 200);
        return e.useEffect(() => {
            const u = (0, h.reaction)(() => s.latestFeedItem, u => {
                u && (u => {
                    u.important ? r(q => [
                        ...q,
                        u
                    ]) : t(u);
                })({
                    ...u,
                    id: Date.now().toString() + Math.random().toString()
                });
            });
            return () => u();
        }, []), e.useEffect(() => {
            p.current && (p.current.scrollTop = p.current.scrollHeight);
        }, [q.length]), (0, d.jsx)(_p, {
            ref: p,
            children: (0, k.takeRight)(q, 60).map(p => (0, d.jsx)(n, {
                item: p
            }, `guess-item-${ p.id }`))
        });
    });
    const _p = l.default.div.attrs({
        className: 'flex flex-column'
    })(m || (m = (b => b)`
  flex: 1;
  overflow: hidden;
  justify-content: flex-end;
  padding-bottom: 15px;
`));
}), a.register('f9q/6', function(b, c) {
    _q(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('c2T5X'),
        g = a('Axq+p'),
        h = a('cuYpa'),
        i = a('aF2+q'),
        j = a('ot/l6'),
        k = a('2x11J'),
        l = a('oN4l0'),
        m = a('t/Cyj');
    let n;
    var _o = (0, k.observer)(() => {
        const {
            draw: p
        } = e.useContext(l.default);
        return (0, d.jsxs)(_p, {
            children: [
                (0, d.jsx)(f.default, {}),
                p.status === m.DrawStatus.termSelection && (null == p || null === (_q = p.me) || void 0 === _q ? void 0 : _q.role) === m.DrawRole.drawer ? (0, d.jsx)(i.default, {}) : p.status === m.DrawStatus.results ? (0, d.jsx)(j.default, {
                    additions: (null == p || null === (c = p.me) || void 0 === c ? void 0 : c.lastRound) || [],
                    isDrawer: (null == p || null === (a = p.me) || void 0 === a ? void 0 : a.role) === m.DrawRole.drawer
                }) : (0, d.jsx)(h.default, {})
            ]
        });
        var _q, r, s;
    });
    const _p = g.default.div.attrs({
        className: 'maxWidth maxHeight flex flex-column'
    })(n || (n = (b => b)``));
}), a.register('c2T5X', function(b, c) {
    _x(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('QWK7i'),
        f = a('b3ci8'),
        g = a('oN4l0'),
        h = a('2x11J'),
        i = a('LEQ5w'),
        j = a('Axq+p');
    let k;
    var _l = (0, h.observer)(() => {
        const {
            balance: m
        } = i.useContext(g.default);
        return (0, d.jsx)(_m, {
            children: (0, f.getMoney)(m.balance)
        });
    });
    const _m = j.default.div.attrs({
        className: 'maxWidth flex'
    })(k || (k = (b => b)`
  padding: 10px 20px;
  background: #4252af;
  color: ${ 0 };
  justify-content: flex-end;
  font-size: 23px;
  font-weight: bold;
  box-shadow: 0 4px 8px -2px gray;
`), e.default.White);
}), a.register('cuYpa', function(b, c) {
    _x(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('RYc37');
    a('LEQ5w');
    var f = a('Axq+p');
    let g;
    var _h = () => (0, d.jsx)(_i, {
        children: (0, d.jsx)(e.default, {
            text: 'Waiting for round to begin...'
        })
    });
    const _i = f.default.div.attrs({
        className: 'flex hc vc'
    })(g || (g = (b => b)`
  flex: 1;
  text-align: center;
  font-size: 38px;
  padding: 40px;
`));
}), a.register('aF2+q', function(b, c) {
    _x(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('fmVdR'),
        f = a('b5kvC'),
        g = a('QWK7i'),
        h = a('4vC7/'),
        i = a('b3ci8'),
        j = a('RYc37'),
        k = a('oN4l0'),
        l = a('2x11J'),
        m = a('LEQ5w'),
        n = a('Axq+p'),
        o = a('ZrZsz');
    let p, q, r, s, t, u = b => b;
    var _v = (0, l.observer)(() => {
        const {
            draw: {
                round: {
                    termOptions: w
                }
            }
        } = m.useContext(k.default);
        return (0, d.jsx)(_w, {
            children: (0, d.jsx)('div', {
                className: 'maxWidth flex hc',
                children: (0, d.jsxs)(_x, {
                    children: [
                        (0, d.jsx)(_y, {
                            children: (0, d.jsx)(j.default, {
                                text: 'You are this round\'s drawer!'
                            })
                        }),
                        (0, d.jsx)(_z, {
                            children: (0, d.jsx)(j.default, {
                                text: 'Which term do you want to draw?'
                            })
                        }),
                        (0, d.jsx)(e.default, {}),
                        (0, d.jsx)('div', {
                            style: {
                                height: 7
                            }
                        }),
                        w.map(w => (0, d.jsx)(_A, {
                            onClick: () => {
                                return _x = w.id, (0, i.send)(h.default.draw.termSelected, _x);
                                var _x;
                            },
                            children: w.term
                        }, w.id))
                    ]
                })
            })
        });
    });
    const _w = n.default.div.attrs({
            className: 'flex flex-column vc scroll-y'
        })(p || (p = u`
  flex: 1;
  padding: 40px 0px;
`)),
        _x = (0, n.default)(o.HandDrawnDiv).attrs({
            className: 'animated fadeInDown'
        })(q || (q = u`
  width: 700px;
  max-width: 90%;
  padding: 35px;
  background: ${ 0 };
`), g.default.White),
        _y = n.default.div(r || (r = u`
  font-size: 22px;
  color: #1b5e20;
`)),
        _z = n.default.div(s || (s = u`
  font-size: 32px;
  font-weight: ${ 0 };
`), f.FontWeights.Bold),
        _A = (0, n.default)(o.HandDrawnDiv).attrs({
            className: 'maxWidth'
        })(t || (t = u`
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
}), a.register('ot/l6', function(b, c) {
    _v(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('QWK7i'),
        f = a('fe6E3');
    a('LEQ5w');
    var g = a('Axq+p'),
        h = a('nrG5X'),
        i = a('t/Cyj'),
        j = a('RYc37'),
        k = a('b3ci8');
    let l, m, n, o, p, q, r = b => b;
    const s = [
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
        t = (b, _v) => b + _v.amount;
    var _u = b => {
        const _v = b.additions.reduce(t, 0) || 0,
            w = _v > 0;
        return (0, d.jsx)(_v, {
            className: 'flex',
            correct: w,
            children: (0, d.jsx)(_w, {
                children: (0, d.jsxs)(_x, {
                    children: [
                        (0, d.jsx)(_y, {
                            children: b.isDrawer && w ? (0, d.jsx)(j.default, {
                                text: 'Nice work!'
                            }) : `+ ${ (0, k.getMoney)(_v) }`
                        }),
                        (0, d.jsx)(_z, {
                            children: w ? (0, d.jsx)(d.Fragment, {
                                children: b.additions.map(b => {
                                    return (0, d.jsxs)(_A, {
                                        children: [
                                            '+ ',
                                            (0, k.getMoney)(b.amount),
                                            ' ',
                                            (_v = b.type, w = b.metadata, _v === i.PointAdditionType.correct ? (0, d.jsx)(j.default, {
                                                text: 'for correct guess'
                                            }) : _v === i.PointAdditionType.firstGuess ? (0, d.jsx)(j.default, {
                                                text: 'for correct first guess'
                                            }) : _v === i.PointAdditionType.speed ? (0, d.jsx)(j.default, {
                                                text: 'for speed'
                                            }) : _v === i.PointAdditionType.goodDrawer && w && 'number' == typeof w ? `for ${ w } ${ (0, k.plural)('person', w, 'people') } guessing your drawing correctly!` : '')
                                        ]
                                    }, b.type);
                                    var x, y;
                                })
                            }) : (0, d.jsx)(d.Fragment, {
                                children: (0, d.jsx)(_A, {
                                    children: (0, d.jsx)(j.default, {
                                        text: b.isDrawer ? 'You tried your best!' : (0, f.sample)(s)
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        });
    };
    const _v = g.default.div.attrs({
            className: 'scroll-y'
        })(l || (l = r`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
`), b => b.correct ? 'rgba(56, 142, 60, 0.85)' : 'rgba(123, 31, 162, 0.85)', e.default.White),
        _w = g.default.div(m || (m = r`
  margin: auto;
`)),
        _x = g.default.div.attrs({
            className: 'flex flex-column vc'
        })(n || (n = r`
  margin: 40px;
  @media (max-width: ${ 0 }px) {
    margin: 30px;
  }
`), () => h.MOBILE_BREAKPOINT),
        _y = g.default.div(o || (o = r`
  font-size: 70px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  @media (max-width: ${ 0 }px) {
    font-size: 55px;
  }
`), () => h.MOBILE_BREAKPOINT),
        _z = g.default.div(p || (p = r``)),
        _A = g.default.div(q || (q = r`
  font-size: 26px;
  @media (max-width: ${ 0 }px) {
    font-size: 22px;
  }
`), () => h.MOBILE_BREAKPOINT);
}), a.register('1vKai', function(b, c) {
    _x(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('CDjx8'),
        j = a('4Zwwi'),
        k = a('xeXTb'),
        l = a('yglW8'),
        m = a('pcYDx'),
        n = a('3gtuL'),
        o = a('UPKYc'),
        p = a('2x11J'),
        q = a('oN4l0'),
        r = a('K6h9e'),
        s = a('E1Lr+');
    let t;
    var _u = (0, p.observer)(() => {
        const {
            pardy: v
        } = f.useContext(q.default);
        return (0, d.jsx)(_v, {
            children: (() => {
                if (v.screen === r.PardyScreen.question) {
                    if (v.questionScreen === r.PardyQuestionScreen.finale)
                        return !v.currentBet || v.animatingBetScreenOut ? (0, d.jsx)(n.default, {}) : (0, d.jsx)(o.default, {});
                    if (v.questionStatus === r.PardyQuestionStatus.preview)
                        return (0, d.jsx)(k.default, {});
                    if (v.questionStatus === r.PardyQuestionStatus.ask || v.questionStatus === r.PardyQuestionStatus.timesUp)
                        return v.answered && !v.animatingQuestionScreenOut ? (0, d.jsx)(s.default, {}) : (0, d.jsx)(m.default, {
                            timesUp: v.questionStatus === r.PardyQuestionStatus.timesUp,
                            answered: v.answered
                        });
                }
                return v.answerResponseItems.length ? (0, d.jsx)(l.default, {
                    correct: v.answeredCorrectly,
                    reasons: v.answerResponseItems
                }) : (0, d.jsx)(j.default, {});
            })()
        });
    });
    const _v = g.default.div.attrs({
        className: 'maxAll'
    })(t || (t = (b => b)`
  font-family: 'Londrina Solid', cursive;
  font-weight: ${ 0 };
  background: ${ 0 };
  color: ${ 0 };
  user-select: none;
`), h.FontWeights.Light, i.default.background, e.default.White);
}), a.register('CDjx8', function(b, c) {
    _x(b.exports, 'default', function() {
        return a;
    });
    var d = {
        background: '#0f1150',
        questionBackground: '#303f9f',
        answerResponseCorrect: '#2e7d32',
        answerResponseIncorrect: '#c62828'
    };
}), a.register('4Zwwi', function(b, c) {
    _x(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('eOwtP');
    var _f = () => (0, d.jsx)(e.default, {
        message: 'Waiting for round to begin...'
    });
}), a.register('eOwtP', function(b, c) {
    _x(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('b5kvC');
    a('LEQ5w');
    var f = a('Axq+p');
    let g, h, i, j = b => b;
    var _k = b => (0, d.jsx)(_l, {
        children: (0, d.jsxs)(_m, {
            children: [
                (0, d.jsx)('div', {
                    className: 'loader',
                    style: {
                        margin: 0
                    }
                }),
                (0, d.jsx)(_n, {
                    children: b.message
                })
            ]
        })
    });
    const _l = f.default.div.attrs({
            className: 'maxAll flex-center'
        })(g || (g = j``)),
        _m = f.default.div.attrs({
            className: 'flex-center flex-column'
        })(h || (h = j`
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
`), e.FontWeights.Normal, 650),
        _n = f.default.div(i || (i = j`
  margin-top: 25px;
  font-size: 32px;
  @media (max-width: ${ 0 }px) {
    font-size: 20px;
    margin-top: 20px;
  }
`), 650);
}), a.register('xeXTb', function(b, c) {
    _x(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('eOwtP');
    var _f = () => (0, d.jsx)(e.default, {
        message: 'Get ready to answer!'
    });
}), a.register('yglW8', function(b, c) {
    _x(b.exports, 'default', function() {
        return _w;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('b5kvC'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('TwXYL'),
        j = a('m7ecM'),
        k = a('P2vlO'),
        l = a('RYc37'),
        m = a('CDjx8'),
        n = a('2x11J'),
        o = a('oN4l0'),
        p = a('fe6E3');
    let q, r, s, t, u, v = b => b;
    var _w = (0, n.observer)(b => {
        const {
            pardy: {
                correctWittyMessages: _x,
                incorrectWittyMessages: y
            }
        } = g.useContext(o.default), [z, A] = g.useState(!1), {
            correct: B,
            reasons: C
        } = b, D = g.useMemo(() => (0, p.sample)(_x), []), E = g.useMemo(() => (0, p.sample)(y), []);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_x, {
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
                        background: B ? m.default.answerResponseCorrect : m.default.answerResponseIncorrect
                    },
                    children: (0, d.jsxs)(_y, {
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
                            (0, d.jsx)(_z, {
                                className: B ? 'fal fa-check-circle' : 'fal fa-times-circle'
                            }),
                            (0, d.jsx)(_A, {
                                children: (0, d.jsx)(l.default, {
                                    text: (B ? 'Correct' : 'Incorrect') + '!'
                                })
                            }),
                            (0, d.jsx)(_B, {
                                children: B ? D : E
                            }),
                            (0, d.jsx)('div', {
                                style: {
                                    height: 60
                                }
                            }),
                            (0, d.jsx)(k.default, {
                                reasons: C,
                                onReasonsAnimatedIn: () => {
                                    B && A(!0);
                                }
                            })
                        ]
                    })
                }),
                z ? (0, d.jsx)(j.default, {}) : null
            ]
        });
    });
    const _x = (0, h.default)(i.motion.div).attrs({
            className: 'maxAll scroll-y'
        })(q || (q = v``)),
        _y = (0, h.default)(i.motion.div).attrs({
            className: 'maxWidth flex-center flex-column'
        })(r || (r = v`
  min-height: 100%;
  padding: 40px 20px;
  text-align: center;
`)),
        _z = h.default.i(s || (s = v`
  color: ${ 0 };
  font-size: 144px;
`), e.default.White),
        _A = h.default.div(t || (t = v`
  font-weight: ${ 0 };
  font-size: 64px;
  margin-top: 10px;
`), f.FontWeights.Normal),
        _B = h.default.div(u || (u = v`
  font-size: 22px;
`));
}), a.register('m7ecM', function(b, c) {
    _p(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('5GGbn');
    let g;
    const h = {
            intensity: 4
        },
        i = {
            width: '100%',
            height: '100%'
        };
    var _j = () => (0, d.jsx)(_k, {
        children: (0, d.jsx)(f.Fireworks, {
            options: h,
            style: i
        })
    });
    const _k = e.default.div.attrs({
        className: 'maxWidth maxHeight'
    })(g || (g = (b => b)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`));
}), a.register('P2vlO', function(b, c) {
    _p(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('TwXYL');
    a('LEQ5w');
    var g = a('Axq+p');
    let h, i, j = b => b;
    var _k = b => (0, d.jsx)(_l, {
        initial: 'hidden',
        animate: 'show',
        onAnimationComplete: b.onReasonsAnimatedIn,
        children: b.reasons.map(b => (0, d.jsx)(_m, {
            children: b
        }, b))
    });
    const _l = (0, g.default)(f.motion.div).attrs({
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
        })(h || (h = j``)),
        _m = (0, g.default)(f.motion.div).attrs({
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
        })(i || (i = j`
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${ 0 };
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  font-size: 24px;
`), e.default.White);
}), a.register('pcYDx', function(b, c) {
    _p(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('/pcsp'),
        f = a('Axq+p'),
        g = a('MueVt'),
        h = a('TwXYL'),
        i = a('CDjx8'),
        j = a('sHRDd'),
        k = a('b5kvC'),
        l = a('DNhpF');
    let m, n, o, p, q = b => b;
    const r = () => (0, d.jsx)(_v, {
        children: (0, d.jsx)(_w, {
            children: (0, d.jsx)(l.default, {
                text: 'Time\'s Up!',
                max: 80,
                noBold: !0,
                paddingHorizontal: '10%'
            })
        })
    });
    var _s = b => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(_t, {
                initial: {
                    background: i.default.background
                },
                animate: {
                    background: i.default.questionBackground
                },
                transition: {
                    duration: 1.2,
                    ease: 'easeOut'
                },
                children: (0, d.jsx)(_u, {
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
                    children: (0, d.jsx)(e.default, {})
                })
            }),
            b.timesUp && !b.answered ? (0, d.jsx)(r, {}) : null
        ]
    });
    const _t = (0, f.default)(h.motion.div).attrs({
            className: 'maxAll'
        })(m || (m = q``)),
        _u = (0, f.default)(h.motion.div).attrs({
            className: 'maxAll'
        })(n || (n = q`
  font-family: ${ 0 };
  overflow: hidden;
  color: ${ 0 };
`), g.default.mainFontName, j.default.Black),
        _v = f.default.div.attrs({
            className: 'maxAll flex-center animated fadeIn'
        })(o || (o = q`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`)),
        _w = f.default.div.attrs({
            className: 'medium-shadow animated jackInTheBox'
        })(p || (p = q`
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
`), i.default.questionBackground, j.default.White, k.FontWeights.Normal);
}), a.register('/pcsp', function(b, c) {
    _p(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('4vC7/'),
        g = a('I+0AY'),
        h = a('b3ci8'),
        i = a('oN4l0'),
        j = a('9fFDn'),
        k = a('2x11J'),
        l = a('LEQ5w'),
        m = a('5drJf');
    var _n = (0, k.observer)(() => {
        const [o, _p] = l.useState(!1), {
            user: q,
            pardy: r
        } = l.useContext(i.default);
        l.useEffect(() => (r.animatingQuestionScreenOut = !1, () => r.animatingQuestionScreenOut = !1), []);
        const s = r.currentQuestion;
        return o && !r.animatingQuestionScreenOut ? null : s ? (0, d.jsx)(j.default, {
            ecc: (0, m.EncryptData)(s, s._id),
            onQuestionAnswered: o => (g.click.play(), _p(!0), r.animatingQuestionScreenOut = !0, (0, h.send)(f.default.questionAnswered, {
                questionId: r.currentQuestion._id,
                answer: o
            }), !1),
            beforeOpenAnswerResponse: () => {
                r.animatingQuestionScreenOut = !1;
            },
            readToMeEnabled: q.readToMeEnabled,
            questionColor: {
                background: 'transparent',
                text: e.default.White
            },
            defaultBackgroundColor: 'transparent',
            blockKeyboardEvents: !0
        }) : null;
    });
}), a.register('3gtuL', function(b, c) {
    _D(b.exports, 'default', function() {
        return _B;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('fmVdR'),
        g = a('GnfDG'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('kd2GK'),
        k = a('4vC7/'),
        l = a('b3ci8'),
        m = a('oN4l0'),
        n = a('TwXYL'),
        o = a('2x11J'),
        p = a('LEQ5w'),
        q = a('Axq+p'),
        r = a('CDjx8');
    let s, t, u, v, w, x, y, z = b => b;
    const A = 700;
    var _B = (0, o.observer)(() => {
        const {
            pardy: C
        } = p.useContext(m.default), [_D, E] = p.useState(0), [F, G] = p.useState(!1), H = C.maxBet, I = () => {
            if (!_D)
                return;
            const J = Math.max(1, Math.min(_D, H));
            (0, l.send)(k.default.pardy.setBet, J), C.animatingBetScreenOut = !0, C.currentBet = J, q();
        }, J = () => G(!0);
        return (0, d.jsx)(j.default, {
            children: (0, d.jsx)(_C, {
                initial: {
                    background: 'rgba(0,0,0,0)'
                },
                animate: {
                    background: F ? r.default.background : 'rgba(0,0,0,0)'
                },
                transition: {
                    duration: 0.7
                },
                children: (0, d.jsx)(_D, {
                    children: (0, d.jsxs)(_E, {
                        initial: {
                            opacity: 0,
                            y: 50,
                            scale: 0.8,
                            x: 0
                        },
                        animate: F ? {
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
                            C.animatingBetScreenOut = !1;
                        },
                        children: [
                            (0, d.jsx)(_F, {
                                children: 'The Finale'
                            }),
                            (0, d.jsx)(_G, {
                                children: 'Place Your Bet!'
                            }),
                            (0, d.jsxs)('div', {
                                className: 'flex maxWidth vc',
                                children: [
                                    (0, d.jsx)('div', {
                                        style: {
                                            fontSize: 26,
                                            marginRight: 10
                                        },
                                        children: '$'
                                    }),
                                    (0, d.jsx)(g.default, {
                                        size: 'large',
                                        placeholder: '1,000',
                                        min: 1,
                                        max: H,
                                        autoFocus: !0,
                                        formatter: C => {
                                            if (!C)
                                                return '';
                                            let K = 1;
                                            return K = Number(C), isNaN(K) && (K = 1), K = Math.max(1, Math.min(K, H)), (0, l.numberWithCommas)(K);
                                        },
                                        parser: C => Number(C.replace(',', '')),
                                        onChange: E,
                                        style: {
                                            width: '100%',
                                            height: 55,
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: h.default.White,
                                            fontSize: 26,
                                            background: 'rgba(0,0,0,0.2)'
                                        },
                                        step: 1,
                                        onPressEnter: I
                                    })
                                ]
                            }),
                            (0, d.jsx)(f.default, {
                                style: {
                                    margin: '40px 0px'
                                }
                            }),
                            (0, d.jsxs)(_H, {
                                children: [
                                    (0, d.jsxs)(_I, {
                                        children: [
                                            'Max Bet: ',
                                            (0, l.getMoney)(H)
                                        ]
                                    }),
                                    (0, d.jsx)(e.default, {
                                        size: 'large',
                                        type: 'primary',
                                        style: {
                                            height: 50,
                                            width: 200
                                        },
                                        onClick: I,
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
    const _C = (0, q.default)(n.motion.div).attrs({
            className: 'maxAll scroll-y'
        })(s || (s = z``)),
        _D = q.default.div.attrs({
            className: 'maxWidth flex-center'
        })(t || (t = z`
  min-height: 100%;
  padding: 30px 0px;
`)),
        _E = (0, q.default)(n.motion.div).attrs({
            className: 'flex-column flex-center medium-shadow'
        })(u || (u = z`
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
`), h.default.White, h.default.Black, A),
        _F = q.default.div(v || (v = z`
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
`), h.default.Black, i.FontWeights.UltraBold, A),
        _G = q.default.div(w || (w = z`
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`), i.FontWeights.Normal, A),
        _H = q.default.div.attrs({
            className: 'flex maxWidth vc between'
        })(x || (x = z`
  @media (max-width: ${ 0 }px) {
    flex-direction: column;
  }
`), A),
        _I = q.default.div(y || (y = z`
  font-size: 18px;
  @media (max-width: ${ 0 }px) {
    margin-bottom: 10px;
  }
`), A);
}), a.register('UPKYc', function(b, c) {
    _y(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('b3ci8'),
        g = a('oN4l0'),
        h = a('9R7cy'),
        i = a('TwXYL'),
        j = a('2x11J'),
        k = a('Axq+p');
    let l, m, n, o, p = b => b;
    var _q = (0, j.observer)(() => {
        const {
            pardy: {
                currentBet: r
            }
        } = e.useContext(g.default);
        return (0, d.jsx)(_r, {
            children: (0, d.jsxs)(_s, {
                children: [
                    (0, d.jsx)(_t, {}),
                    (0, d.jsxs)(_u, {
                        children: [
                            'Your bet of ',
                            (0, d.jsx)('b', {
                                children: (0, f.getMoney)(r)
                            }),
                            ' is in!'
                        ]
                    })
                ]
            })
        });
    });
    const _r = k.default.div.attrs({
            className: 'maxAll flex-center'
        })(l || (l = p``)),
        _s = (0, k.default)(i.motion.div).attrs({
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
        })(m || (m = p`
  background: rgba(255, 255, 255, 0.15);
  padding: 50px;
  border-radius: 5px;
  margin: 30px;
  text-align: center;
`)),
        _t = (0, k.default)(h.default).attrs({
            name: 'fas fa-check',
            className: 'animated pulse infinite'
        })(n || (n = p`
  font-size: 64px;
  margin-bottom: 25px;
`)),
        _u = k.default.div(o || (o = p`
  font-size: 32px;
`));
}), a.register('9R7cy', function(b, c) {
    _y(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = b => (0, d.jsx)('i', {
        className: `${ b.name }${ b.className ? ` ${ b.className }` : '' }`,
        style: b.style
    });
}), a.register('E1Lr+', function(b, c) {
    _y(b.exports, 'default', function() {
        return _w;
    });
    var d = a('0hzx+'),
        e = a('b5kvC'),
        f = a('b3ci8'),
        g = a('oN4l0'),
        h = a('TwXYL'),
        i = a('fe6E3'),
        j = a('2x11J'),
        k = a('LEQ5w'),
        l = a('Axq+p'),
        m = a('CDjx8');
    let n, o, p, q, r, s, t, u = b => b;
    const v = 650;
    var _w = (0, j.observer)(() => {
        const {
            pardy: {
                tips: x,
                answerLockedInWittyMessages: _y
            }
        } = k.useContext(g.default), z = k.useMemo(() => (0, i.sample)(_y), []), A = k.useMemo(() => (0, i.sample)(x), []);
        return (0, d.jsxs)(_x, {
            initial: {
                background: m.default.questionBackground
            },
            animate: {
                background: m.default.background
            },
            transition: {
                duration: 1.3
            },
            children: [
                (0, d.jsxs)(_y, {
                    children: [
                        (0, d.jsx)(_z, {}),
                        (0, d.jsx)(_A, {
                            children: 'Answer locked in!'
                        }),
                        (0, d.jsx)(_B, {
                            children: z
                        })
                    ]
                }),
                (0, d.jsx)(_C, {
                    children: (0, d.jsx)(_D, {
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
                            __html: A
                        }
                    })
                })
            ]
        });
    });
    const _x = (0, l.default)(h.motion.div).attrs({
            className: 'maxAll flex-center'
        })(n || (n = u``)),
        _y = l.default.div.attrs({
            className: 'flex-center flex-column animated jackInTheBox'
        })(o || (o = u`
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  @media (max-width: ${ 0 }px) {
    padding: 40px 20px;
  }
`), v),
        _z = l.default.img.attrs({
            src: (0, f.getAssetPath)('lock.svg'),
            className: 'animated pulse infinite'
        })(p || (p = u`
  height: 120px;
  animation-duration: 3s;
  @media (max-width: ${ 0 }px) {
    height: 100px;
  }
`), v),
        _A = l.default.div(q || (q = u`
  font-size: 52px;
  margin-top: 15px;
  font-weight: ${ 0 };
  @media (max-width: ${ 0 }px) {
    font-size: 36px;
    margin-top: 10px;
  }
`), e.FontWeights.Normal, v),
        _B = l.default.div(r || (r = u`
  font-size: 22px;
  margin-top: 10px;
  @media (max-width: ${ 0 }px) {
    font-size: 14px;
    margin-top: 8px;
  }
`), v),
        _C = l.default.div.attrs({
            className: 'maxAll flex hc'
        })(s || (s = u`
  position: absolute;
  top: 0;
  left: 0;
  align-items: flex-end;
  pointer-events: none;
`)),
        _D = (0, l.default)(h.motion.div)(t || (t = u`
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
`), v);
}), a.register('LxKpR', function(b, c) {
    _J(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('FpbFp'),
        f = a('sHRDd');
    a('LEQ5w');
    var g = a('C4N9N');
    var _h = () => (0, d.jsx)(g.BackgroundContainer, {
        children: (0, d.jsx)(e.default, {
            style: {
                color: f.default.White
            },
            size: 48
        })
    });
}), a.register('xh8Lc', function(b, c) {
    _J(b.exports, 'default', function() {
        return _J;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('TwXYL'),
        h = a('QWK7i'),
        i = a('ziKcb'),
        j = a('b3ci8'),
        k = a('b5kvC'),
        l = a('fmVdR'),
        m = a('fe6E3'),
        n = a('2x11J'),
        o = a('oN4l0');
    a('KOgpv');
    var p = a('8Wc8V'),
        q = a('9FYKI'),
        r = a('4vC7/'),
        s = a('6XgQB1'),
        t = a('6yrsF'),
        u = a('RYc37'),
        v = a('PMl60');
    let w, x, y, z, A, B, C, D, E = b => b;
    const F = 800,
        G = 700,
        H = b => (0, d.jsx)(_R, {
            background: b.color,
            onClick: b.select,
            children: b.num
        }),
        I = b => {
            const _J = new(0, t.Howl)({
                    src: [(0, j.getAssetPath)('numberSwitch.mp3')]
                }),
                K = new(0, t.Howl)({
                    src: [(0, j.getAssetPath)('numberLogo.mp3')]
                }),
                L = new(0, t.Howl)({
                    src: [(0, j.getAssetPath)('numberSuccess.mp3')]
                }),
                M = new(0, t.Howl)({
                    src: [(0, j.getAssetPath)('numberError.mp3')]
                }),
                [N] = e.useState((0, m.shuffle)(Array.from(Array(9).keys()).map(b => b + 1))),
                [O, P] = e.useState(1),
                [Q, R] = e.useState(!1),
                [S, T] = e.useState(!1);
            e.useEffect(() => {
                (0, v.loadFont)('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap'), K.play();
            }, []);
            const U = b => Q ? '#ffebee' : b < O ? '#c8e6c9' : '#fff8e1';
            return (0, d.jsx)(_K, {
                children: (0, d.jsx)(_L, {
                    animate: {
                        opacity: S ? 0 : 1
                    },
                    transition: {
                        duration: 0.8
                    },
                    initial: {
                        opacity: 0
                    },
                    children: (0, d.jsxs)(_M, {
                        animate: {
                            opacity: S ? 0 : 1,
                            y: S ? 20 : 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        children: [
                            (0, d.jsx)(_N, {}),
                            (0, d.jsx)(_O, {
                                children: (0, d.jsx)(u.default, {
                                    text: 'Outnumbered'
                                })
                            }),
                            (0, d.jsxs)(_P, {
                                children: [
                                    'by ',
                                    b.name,
                                    '.'
                                ]
                            }),
                            (0, d.jsx)(l.default, {}),
                            (0, d.jsx)(_Q, {
                                children: N.map(K => (0, d.jsx)(H, {
                                    num: K,
                                    color: U(K),
                                    select: () => (K => {
                                        10 !== O && (K !== O ? (P(1), R(!0), M.play(), setTimeout(() => {
                                            R(!1);
                                        }, 1000)) : (P(K + 1), R(!1), 9 === K ? (setTimeout(() => {
                                            T(!0);
                                        }, 350), setTimeout(() => {
                                            b.onFinish();
                                        }, 1200), L.play()) : _J.play()));
                                    })(K)
                                }, `numblock-${ K }`))
                            })
                        ]
                    })
                })
            });
        };
    var _J = (0, n.observer)(() => {
        var K;
        const {
            powerups: L,
            gameValues: M
        } = e.useContext(o.default);
        return (null == L || null === (K = L.screenAttack) || void 0 === K ? void 0 : K.powerupName) !== p.PowerupNames.outnumbered || M.gameStatus !== s.GameStatus.gameplay || M.nonDismissMessage.title ? null : (0, d.jsx)(I, {
            name: L.screenAttack.attackerName,
            onFinish: () => {
                L.screenAttack = {
                    powerupName: '',
                    attackerName: '',
                    fullScreen: !1
                }, (0, j.send)(r.default.outnumberedComplete);
            }
        });
    });
    const _K = f.default.div.attrs({
            className: 'maxWidth maxHeight'
        })(w || (w = E`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`)),
        _L = (0, f.default)(g.motion.div).attrs({
            className: 'maxWidth maxHeight flex hc vc'
        })(x || (x = E`
  background: rgba(0, 0, 0, 0.35);
`)),
        _M = (0, f.default)(g.motion.div).attrs({
            className: 'flex flex-column hc vc'
        })(y || (y = E`
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
`), h.default.Black, h.default.White, i.default.basic, F, G),
        _N = f.default.img.attrs({
            src: (0, j.getAssetPath)('numbers.svg'),
            alt: 'number blocks'
        })(z || (z = E`
  height: 125px;
  @media (max-width: ${ 0 }px),
    (max-height: ${ 0 }px) {
    height: 110px;
  }
  @media (max-width: 550px) {
    height: 80px;
  }
`), F, G),
        _O = f.default.div(A || (A = E`
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
`), k.FontWeights.Bold, q.default.mainFontName, F, G),
        _P = f.default.div(B || (B = E`
  font-size: 21px;
  @media (max-width: ${ 0 }px),
    (max-height: ${ 0 }px) {
    font-size: 18px;
  }
  @media (max-width: 550px) {
    font-size: 16px;
  }
`), F, G),
        _Q = f.default.div(C || (C = E`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';
`)),
        _R = f.default.div.attrs({
            className: 'flex hc vc'
        })(D || (D = E`
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
`), k.FontWeights.Bold, b => b.background);
}), a.register('c4qSi', function(b, c) {
    _y(b.exports, 'default', function() {
        return _x;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('6a8o9'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('sHRDd'),
        j = a('CDjx8'),
        k = a('fmVdR'),
        l = a('eDGix'),
        m = a('2x11J'),
        n = a('oN4l0'),
        o = a('vy6C5'),
        p = a('E9ysS');
    let q, r, s, t, u = b => b;
    const v = [
            p.default.waiting,
            p.default.pardyMode
        ],
        w = (0, m.observer)(() => {
            const {
                pardy: x,
                navigation: {
                    currentRoute: _y
                }
            } = e.useContext(n.default), z = e.useMemo(() => !(x.power || !v.includes(_y) || !x.powers.length || !x.powerOptions.length), [
                x.power,
                _y,
                x.powers.length,
                x.powerOptions.length
            ]);
            return (0, d.jsx)(f.default, {
                open: z,
                close: () => !1,
                customWidth: '700px',
                customMaxWidth: '95%',
                customPadding: '0px',
                customStyle: {
                    border: `3px solid ${ i.default.White }`
                },
                children: (0, d.jsxs)(_y, {
                    children: [
                        (0, d.jsxs)(_z, {
                            children: [
                                (0, d.jsx)(_A, {
                                    children: 'Pick Your'
                                }),
                                (0, d.jsx)(_B, {
                                    children: 'Power!'
                                })
                            ]
                        }),
                        (0, d.jsx)(k.default, {
                            style: {
                                margin: '30px 0px'
                            }
                        }),
                        x.powers.filter(_y => x.powerOptions.includes(_y.id)).map(x => (0, d.jsx)(l.default, {
                            id: x.id,
                            name: x.name,
                            image: x.image,
                            description: x.description,
                            background: x.background
                        }, x.id))
                    ]
                })
            });
        });
    var _x = (0, m.observer)(() => {
        const {
            gameOptions: {
                specialGameType: y
            }
        } = e.useContext(n.default);
        return y && y.includes(o.PARDY) ? (0, d.jsx)(w, {}) : null;
    });
    const _y = g.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = u`
  padding: 40px;
  background: ${ 0 };
  color: ${ 0 };
  font-family: 'Londrina Solid', cursive;
  font-weight: ${ 0 };
`), j.default.background, i.default.White, h.FontWeights.Light),
        _z = g.default.div.attrs({
            className: 'maxWidth flex-column flex-center'
        })(r || (r = u`
  text-transform: uppercase;
  line-height: 1;
  text-shadow: 0px 3px 3px ${ 0 };
`), i.default.Black),
        _A = g.default.div(s || (s = u`
  font-size: 42px;
`)),
        _B = g.default.div(t || (t = u`
  font-size: 84px;
  font-weight: ${ 0 };
`), h.FontWeights.Bold);
}), a.register('eDGix', function(b, c) {
    _g(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('b5kvC'),
        g = a('4vC7/'),
        h = a('b3ci8'),
        i = a('uo5Q0');
    a('LEQ5w');
    var j = a('Axq+p');
    let k, l, m, n, o, p, q = b => b;
    var _r = b => (0, d.jsxs)(_s, {
        children: [
            (0, d.jsx)(_t, {
                style: {
                    background: b.background
                },
                children: (0, d.jsx)(_u, {
                    src: b.image
                })
            }),
            (0, d.jsxs)(_v, {
                children: [
                    (0, d.jsx)(_w, {
                        children: b.name
                    }),
                    (0, d.jsx)(_x, {
                        children: b.description
                    }),
                    (0, d.jsx)(i.default, {
                        type: 'primary',
                        style: {
                            width: 250
                        },
                        size: 'small',
                        label: 'Select',
                        onClick: () => {
                            (0, h.send)(g.default.pardy.setPower, b.id);
                        }
                    })
                ]
            })
        ]
    });
    const _s = j.default.div.attrs({
            className: 'maxWidth medium-shadow'
        })(k || (k = q`
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 3px solid #90a4ae;
  color: ${ 0 };
  background: ${ 0 };
  text-align: center;
`), e.default.Black, e.default.White),
        _t = j.default.div.attrs({
            className: 'maxWidth flex-center'
        })(l || (l = q`
  height: 80px;
`)),
        _u = j.default.img(m || (m = q`
  height: 42px;
  filter: drop-shadow(2px 2px 2px #222);
`)),
        _v = j.default.div.attrs({
            className: 'maxWidth flex-column flex-center'
        })(n || (n = q`
  padding: 20px;
  background: #f5f5f5;
`)),
        _w = j.default.div(o || (o = q`
  font-weight: ${ 0 };
  font-size: 34px;
`), f.FontWeights.Normal),
        _x = j.default.div(p || (p = q`
  font-size: 18px;
  margin-bottom: 15px;
`));
}), a.register('YrjGX', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('hMiZR');
    var _f = async b => {
        const {
            serverUrl: _g,
            roomId: h,
            intentId: i
        } = b, j = {
            intent: i
        };
        (0, d.isLoggedIn)() && (j.authToken = (0, d.getUser)().token), (0, e.default)({
            joinOptions: {
                serverUrl: _g,
                roomId: h,
                options: j
            },
            disposeOnError: !1
        });
    };
}), a.register('hMiZR', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('T2fy6'),
        e = a('O4G7w'),
        f = a('mQhD8'),
        g = a('2VZKo');
    var _h = b => {
        const {
            joinOptions: _i,
            createOptions: j
        } = b;
        if (!_i && !j)
            return;
        const k = () => {
            e.default.engine.attemptingToConnect = !1, e.default.engine.hasConnected = !1, e.default.engine.connected = !1, e.default.engine.connectionError = !1, e.default.engine.joinedRoom = !1, e.default.engine.attemptingToJoinRoom = !1, e.default.engine.errorJoiningRoom = !1, e.default.engine.roomError = null;
        };
        k(), e.default.engine.attemptingToConnect = !0;
        const l = new(0, d.Client)(_i ? _i.serverUrl : j.serverUrl, {
                transports: ['websocket'],
                clientIdSuffix: '-play'
            }),
            m = l.onConnectError.add(_i => {
                console.log({
                    connectionError: _i
                }), b.onConnectError && b.onConnectError(_i), b.disposeOnError && k(), e.default.engine.connectionError = !0, e.default.engine.attemptingToConnect = !1;
            });
        l.onConnect.add(() => {
            m(), e.default.engine.client = l, e.default.engine.connected = !0, e.default.engine.hasConnected = !0, e.default.engine.attemptingToConnect = !1, e.default.engine.attemptingToJoinRoom = !0, l.onConnectError.add(() => {
                e.default.engine.connectionError = !0;
            }), l.onConnect.add(() => {
                e.default.engine.connected = !0, e.default.engine.connectionError = !1, e.default.engine.attemptingToConnect = !1, e.default.engine.attemptingToJoinRoom = !0;
            }), l.onReconnect.add(() => {
                e.default.engine.connected = !0, e.default.engine.connectionError = !1, e.default.engine.attemptingToConnect = !1, e.default.engine.attemptingToJoinRoom = !0;
            }), e.default.engine.attemptingToJoinRoom = !0;
            const n = _i ? l.joinRoom(_i.roomId, _i.options) : l.createRoom(j.roomType, j.options);
            n.onJoinAttempt.add(() => {
                e.default.engine.attemptingToJoinRoom = !0;
            }), n.onJoinError.add(_i => {
                console.log({
                    roomJoinError: _i
                }), b.onRoomJoinError && b.onRoomJoinError(_i), e.default.engine.roomError = _i, e.default.engine.errorJoiningRoom = !0, e.default.engine.attemptingToJoinRoom = !1;
            });
            const o = n.onJoinError.add(() => {
                b.disposeOnError && k();
            });
            n.onJoin.add(() => {
                (0, f.default)(n), (0, g.default)(), b.onRoomJoin && b.onRoomJoin(), e.default.engine.hasJoinedRoom = !0;
            }, !0), n.onJoin.add(() => {
                o(), e.default.engine.joinedRoom = !0, e.default.engine.attemptingToJoinRoom = !1, e.default.engine.game || (e.default.engine.game = n);
            }), n.onLeave.add(() => {
                e.default.engine.joinedRoom = !1;
            });
        }, !0), l.onDisconnect.add(() => {
            e.default.engine.attemptingToConnect = !0, e.default.engine.connected = !1, b.onDisconnect && b.onDisconnect();
        });
    };
}), a.register('2VZKo', function(b, c) {
    _v(b.exports, 'default', function() {
        return _i;
    });
    var d = a('I+0AY'),
        e = a('YuT/D'),
        f = a('R3B5z'),
        g = a('8Wc8V'),
        h = a('O4G7w');
    var _i = () => {
        (0, e.reaction)(() => h.default.powerups.activePowerups, b => {
            b.includes(g.PowerupNames.fivePercentBot) ? h.default.ui.snowing = !0 : h.default.ui.snowing = !1;
        }), (0, e.reaction)(() => h.default.navigation.leaderboardDrawerOpen, () => d.woosh.play()), (0, e.reaction)(() => h.default.imposter.status, () => (0, f.default)()), (0, e.reaction)(() => h.default.gameValues.gameStatus, () => (0, f.default)()), (0, e.reaction)(() => h.default.navigation.currentRoute, () => (0, f.default)());
    };
}), a.register('R3B5z', function(b, c) {
    _v(b.exports, 'default', function() {
        return _j;
    });
    var d = a('E9ysS'),
        e = a('b3ci8'),
        f = a('XLrkG'),
        g = a('O4G7w'),
        h = a('6XgQB1');
    const i = [
        d.default.questions,
        d.default.shop
    ];
    var _j = () => {
        if (g.default.gameValues.gameStatus === h.GameStatus.gameplay)
            return (0, e.inImposterMode)() ? g.default.imposter.status === f.ImposterStatus.questions ? void(i.includes(g.default.navigation.currentRoute) || (0, e.changeRoute)(d.default.questions)) : void(0, e.changeRoute)(d.default.imposterMode) : void((0, e.inDrawMode)() ? (0, e.changeRoute)(d.default.drawMode) : (0, e.inPardyMode)() && (0, e.changeRoute)(d.default.pardyMode));
    };
}), a.register('PcR/G', function(b, c) {
    _v(b.exports, 'default', function() {
        return _u;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('f6oyN'),
        h = a('fmVdR'),
        i = a('sgToH'),
        j = a('YRlpt'),
        k = a('6CIVV'),
        l = a('sHRDd'),
        m = a('MueVt'),
        n = a('2x11J'),
        o = a('LEQ5w'),
        p = a('6XgQB1'),
        q = a('E9ysS'),
        r = a('YpuqJ');
    const s = 'https://status.gimkit.com';
    let t = class extends o.Component {
        render() {
            const {
                engine: u,
                gameValues: _v,
                navigation: w
            } = this.props, x = ((u, _v, w) => !(_v.gameStatus === p.GameStatus.results || (!u.connectionError || u.game) && !u.errorFindingServerForGame && !u.errorJoiningRoom && (w.currentRoute === q.default.join || !u.game || u.joinedRoom || w.currentRoute === q.default.nonDismissMessage)))(u, _v, w);
            return w.currentRoute === q.default.join ? (0, f.jsx)(j.default, {
                open: x,
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
            }) : (0, f.jsx)(i.default, {
                open: x,
                placement: 'bottom',
                closable: !1,
                height: 'auto',
                children: this.getContent()
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'getLoading', () => {
                const {
                    engine: u
                } = this.props;
                return !u.errorJoiningRoom && (!u.errorFindingServerForGame && !(!u.game && u.connectionError));
            }), (0, d.default)(this, 'getContent', () => {
                const u = this.getLoading();
                return (0, f.jsxs)('div', {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        fontFamily: m.default.name,
                        color: l.default.Black,
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        u && (0, f.jsx)(k.default, {
                            size: 'large',
                            style: {
                                marginBottom: 10
                            }
                        }),
                        !u && (0, f.jsxs)(f.Fragment, {
                            children: [
                                (0, f.jsx)(g.default, {
                                    style: {
                                        color: 'red',
                                        fontSize: 51
                                    }
                                }),
                                (0, f.jsx)(h.default, {})
                            ]
                        }),
                        (0, f.jsx)('div', {
                            style: {
                                textAlign: 'center',
                                fontSize: 23,
                                fontWeight: 'bold'
                            },
                            children: this.getMessage()
                        })
                    ]
                });
            }), (0, d.default)(this, 'getMessage', () => {
                const {
                    engine: u
                } = this.props;
                if (u.errorFindingServerForGame)
                    return (0, f.jsxs)('span', {
                        children: [
                            'We couldn\'t find any available game servers. Gimkit might be down. Check ',
                            (0, f.jsx)('a', {
                                href: s,
                                children: s
                            }),
                            ' for more info.'
                        ]
                    });
                if (!u.game && u.connectionError)
                    return (0, f.jsxs)('span', {
                        children: [
                            'Your network is blocking connection to our game servers. Get more details on how to fix this ',
                            (0, f.jsx)('a', {
                                href: 'https://www.gimkit.com/connection',
                                children: 'here.'
                            })
                        ]
                    });
                if (u.errorJoiningRoom) {
                    const v = (0, r.default)(u.roomError);
                    return (0, f.jsxs)('span', {
                        children: [
                            (0, f.jsx)('span', {
                                style: {
                                    fontSize: 23
                                },
                                children: v.title
                            }),
                            (0, f.jsx)('br', {}),
                            (0, f.jsx)('span', {
                                style: {
                                    fontWeight: 'normal',
                                    fontSize: 18
                                },
                                children: v.description
                            })
                        ]
                    });
                }
                return u.attemptingToConnect ? (0, f.jsxs)('span', {
                    children: [
                        'Disconnected!',
                        ' ',
                        (0, f.jsx)('span', {
                            style: {
                                fontWeight: 'normal'
                            },
                            children: 'Attempting to reconnect...'
                        })
                    ]
                }) : u.attemptingToJoinRoom ? (0, f.jsxs)('span', {
                    children: [
                        'Connected!',
                        ' ',
                        (0, f.jsx)('span', {
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
    t = (0, e.__decorate)([
        (0, n.inject)('engine', 'gameValues', 'navigation'),
        n.observer
    ], t);
    var _u = t;
}), a.register('f6oyN', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('R6BYy'),
        g = a('sLVIW'),
        h = function(i, _j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, i), {}, {
                ref: _j,
                icon: f.default
            }));
        };
    h.displayName = 'CloseCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('R6BYy', function(b, c) {
    _f(b.exports, 'default', function() {
        return a;
    });
    var d = {
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
}), a.register('YpuqJ', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('O4G7w');
    var _e = b => {
        let _f = 'Error joining game',
            g = '',
            h = 'string' == typeof b ? b : b.type;
        if ('MAX_PLAYERS' === h) {
            let {
                message: i
            } = b;
            _f = i.title ? i.title : 'Game full', g = i.description ? i.description : 'There are too many players in this game';
        } else
            'HOST_DISCONNECTED' === h ? (_f = 'All done.', g = 'The host for this game has left.') : 'GAME_FINISHED' === h ? (_f = 'Game ended.', g = 'This game has already ended.') : 'INVALID_INTENT' === h ? (_f = 'Reservation expired', g = 'Your reservation to join this game has expired. Refresh and try joining again.') : h && h.includes && h.includes('No data found') ? d.default.engine.hasJoinedRoom ? (_f = 'All gone.', g = 'The game you were in no longer exists.') : (_f = 'No game found.', g = 'The game you were trying to join does not exist.') : g = 'An unknown error occurred.';
        return {
            title: _f,
            description: g
        };
    };
}), a.register('EG5dB', function(b, c) {
    _r(b.exports, 'default', function() {
        return _q;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('uo5Q0'),
        h = a('6a8o9'),
        i = a('2x11J'),
        j = a('LEQ5w'),
        k = a('Axq+p');
    let l, m, n, o = b => b,
        p = class extends j.Component {
            render() {
                return (0, f.jsx)(h.default, {
                    open: this.props.ui.showingSuccessModal,
                    close: this.close,
                    customWidth: '570px',
                    customPadding: '26px',
                    children: this.getContent()
                });
            }
            constructor(...b) {
                super(...b), (0, d.default)(this, 'close', () => this.props.ui.showingSuccessModal = !1), (0, d.default)(this, 'getContent', () => {
                    const {
                        successModalInfo: q
                    } = this.props.ui;
                    if (!q || !q.title)
                        return null;
                    const {
                        textOptions: _r
                    } = q, {
                        icon: s,
                        background: t,
                        color: u,
                        title: v,
                        description: w
                    } = q;
                    return (0, f.jsxs)('div', {
                        style: {
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        },
                        children: [
                            (0, f.jsx)(_r, {
                                style: {
                                    background: t,
                                    color: u
                                },
                                children: (0, f.jsx)('i', {
                                    className: s
                                })
                            }),
                            (0, f.jsx)(_s, {
                                children: v
                            }),
                            (0, f.jsx)(_t, {
                                style: {
                                    textAlign: _r && _r.align ? _r.align : 'center',
                                    whiteSpace: _r && _r.customLines ? 'pre-wrap' : 'normal'
                                },
                                children: w
                            }),
                            (0, f.jsx)(g.default, {
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
    p = (0, e.__decorate)([
        (0, i.inject)('ui'),
        i.observer
    ], p);
    var _q = p;
    const _r = k.default.div(l || (l = o`
  height: 78px;
  width: 78px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
`)),
        _s = k.default.div(m || (m = o`
  font-size: 38px;
  font-weight: 900;
  margin-top: 6px;
`)),
        _t = k.default.div(n || (n = o`
  font-size: 18px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.8);
`));
}), a.register('ZkrsQ', function(b, c) {
    _C(b.exports, 'default', function() {
        return _D;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('0hzx+'),
        g = a('QWK7i'),
        h = a('4vC7/'),
        i = a('E9ysS'),
        j = a('b3ci8'),
        k = a('pECMN'),
        l = a('6a8o9'),
        m = a('RYc37'),
        n = a('XLrkG'),
        o = a('2x11J'),
        p = a('LEQ5w'),
        q = a('Axq+p'),
        r = a('2QLd7');
    let s, t, u, v, w, x, y, z = b => b;
    const A = b => {
            if (b === n.ImposterShopItemId.clearListRemover)
                return b => !b.canNeverBeClear && b.role === n.PersonRole.detective;
        },
        B = b => {
            const _C = b.items.find(_C => _C.id === b.shopItem);
            return _C ? (0, f.jsxs)(_E, {
                children: [
                    (0, f.jsxs)(_F, {
                        style: {
                            color: g.default.White,
                            background: _C.background
                        },
                        children: [
                            (0, f.jsx)(_G, {
                                children: (0, f.jsx)(k.default, {
                                    style: {
                                        fontSize: 34
                                    },
                                    name: _C.icon
                                })
                            }),
                            (0, f.jsxs)(_H, {
                                children: [
                                    (0, f.jsx)(_I, {
                                        children: (0, f.jsx)(m.default, {
                                            text: _C.name
                                        })
                                    }),
                                    (0, f.jsx)(_J, {
                                        children: (0, f.jsx)(m.default, {
                                            text: _C.description
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, f.jsx)(_K, {
                        children: (0, f.jsx)(r.default, {
                            actionText: (c = _C.id, c === n.ImposterShopItemId.fakeInvestigation || c === n.ImposterShopItemId.privateInvestigation || c === n.ImposterShopItemId.publicInvestigation ? 'Investigate' : c === n.ImposterShopItemId.donate ? 'Donate' : 'Use'),
                            showAction: !0,
                            onSelect: b.handleSelect,
                            filter: A(_C.id)
                        })
                    })
                ]
            }) : (b.close(), null);
            var D;
        };
    let C = class extends p.Component {
        render() {
            if (!this.props.imposter.me)
                return null;
            const {
                imposter: D
            } = this.props, E = D.currentShopItemModalVisible;
            return (0, f.jsx)(l.default, {
                open: E,
                close: this.close,
                customMaxWidth: '90%',
                customWidth: '600px',
                customPadding: '0px',
                children: (0, f.jsx)(B, {
                    shopItem: D.currentShopItem,
                    items: D.shopItems,
                    close: this.close,
                    handleSelect: this.handlePersonSelect
                })
            });
        }
        constructor(...b) {
            super(...b), (0, d.default)(this, 'close', () => {
                this.props.imposter.currentShopItemModalVisible = !1;
            }), (0, d.default)(this, 'handlePersonSelect', b => {
                (0, j.send)(h.default.imposter.purchase, {
                    item: this.props.imposter.currentShopItem,
                    on: b
                }), (0, j.changeRoute)(i.default.questions), this.close();
            });
        }
    };
    C = (0, e.__decorate)([
        (0, o.inject)('imposter'),
        o.observer
    ], C);
    var _D = C;
    const _E = q.default.div.attrs({
            className: 'maxWidth flex flex-column'
        })(s || (s = z`
  font-family: 'Space Grotesk', monospace;
`)),
        _F = q.default.div(t || (t = z`
  height: 170px;
  padding: 20px;
`)),
        _G = q.default.div.attrs({
            className: 'flex maxWidth vc hc'
        })(u || (u = z`
  height: 60px;
`)),
        _H = q.default.div(v || (v = z`
  text-align: center;
  margin-top: 4px;
`)),
        _I = q.default.div(w || (w = z`
  font-size: 25px;
  font-weight: 900;
`)),
        _J = q.default.div(x || (x = z`
  font-size: 14px;
`)),
        _K = q.default.div.attrs({
            className: 'maxWidth'
        })(y || (y = z`
  padding: 20px;
`));
}), a.register('2i+hG', function(b, c) {
    _C(b.exports, 'default', function() {
        return _B;
    });
    var d = a('0hzx+'),
        e = a('QWK7i'),
        f = a('b3ci8'),
        g = a('uo5Q0'),
        h = a('6a8o9'),
        i = a('RYc37'),
        j = a('XLrkG'),
        k = a('2x11J'),
        l = a('LEQ5w'),
        m = a('Axq+p'),
        n = a('5drJf'),
        o = a('oN4l0');
    let p, q, r, s, t, u, v, w, x, y = b => b;
    var z;
    (z = x || (x = {})).intro = 'intro', z.role = 'role';
    const A = (0, k.observer)(() => {
        const [B, _C] = l.useState(x.intro), {
            imposter: D
        } = l.useContext(o.default), E = () => {
            B !== x.intro && (D.roleModalOpen = !1);
        }, F = () => {
            _C(x.role);
        }, G = () => D.me.role === j.PersonRole.imposter, H = () => {
            const {
                epl: I,
                impostersLeft: J,
                me: K
            } = D, L = (0, n.DecryptData)(I) || [];
            let M = [];
            if (G()) {
                const N = L.filter(N => N.role === j.PersonRole.imposter && N.id !== K.id);
                N.length && M.push(`Other ${ (0, f.plural)('Impostor', N.length) }: ${ (0, f.teamPlayerNames)(N.map(N => N.name)) }`), M.push('Visit Mission Control to decrease the number of investigations\n      crewmates can have.'), M.push('Blend in by running fake investigations or putting on a disguise.');
            } else
                M.push(`There ${ 1 === J ? 'is' : 'are' } ${ J } ${ (0, f.plural)('impostor', J) } on board. Find and vote them out!`), M.push('Run investigations in Mission Control to rule out fellow crewmates.'), M.push('Use your notebook to keep track of your suspicions.'), M.push('Call a meeting when you\'re ready to vote someone out.');
            return M;
        }, I = D.roleModalOpen && D.status !== j.ImposterStatus.intro;
        return (0, d.jsx)(h.default, {
            open: I,
            close: E,
            customPadding: '0px',
            customWidth: '600px',
            customMaxWidth: '600px',
            children: (0, d.jsx)(_C, {
                children: B === x.intro ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(_D, {
                            children: (0, d.jsx)(i.default, {
                                text: 'Welcome aboard.'
                            })
                        }),
                        (0, d.jsx)(_E, {}),
                        (0, d.jsx)(_F, {
                            children: (0, d.jsx)(i.default, {
                                text: 'Make sure nobody can see your screen, and then click to view your\n            role!'
                            })
                        }),
                        (0, d.jsx)(g.default, {
                            style: {
                                width: '100%'
                            },
                            size: 'medium',
                            type: 'primary',
                            onClick: F,
                            label: (0, d.jsx)(i.default, {
                                text: 'View Role'
                            })
                        })
                    ]
                }) : (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(_G, {
                            children: (0, d.jsx)(i.default, {
                                text: 'You are ' + (G() ? 'an' : 'a')
                            })
                        }),
                        (0, d.jsx)(_H, {
                            children: (0, d.jsx)(i.default, {
                                text: G() ? 'Impostor' : 'Crewmate'
                            })
                        }),
                        (0, d.jsx)(_I, {
                            children: H().map(B => (0, d.jsx)(_J, {
                                children: (0, d.jsx)(i.default, {
                                    text: B
                                })
                            }, B))
                        }),
                        (0, d.jsx)(g.default, {
                            style: {
                                marginTop: 5
                            },
                            size: 'medium',
                            type: 'primary',
                            onClick: E,
                            label: (0, d.jsx)(i.default, {
                                text: 'Close'
                            })
                        })
                    ]
                })
            })
        });
    });
    var _B = (0, k.observer)(() => {
        const {
            imposter: C
        } = l.useContext(o.default);
        return C.me ? (0, d.jsx)(A, {}) : null;
    });
    const _C = m.default.div.attrs({
            className: 'maxWidth flex flex-column hc vc'
        })(p || (p = y`
  background: ${ 0 };
  color: ${ 0 };
  padding: 40px;
  font-family: 'Space Grotesk', monospace;
  text-align: center;
`), e.default.Black, e.default.White),
        _D = m.default.div(q || (q = y`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 16px;
`)),
        _E = m.default.img.attrs({
            src: (0, f.getAssetPath)('space-ship.svg')
        })(r || (r = y`
  height: 125px;
`)),
        _F = m.default.div(s || (s = y`
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 18px;
`)),
        _G = m.default.div(t || (t = y`
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: -8px;
`)),
        _H = m.default.div(u || (u = y`
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 20px;
`)),
        _I = m.default.ul.attrs({
            className: 'maxWidth'
        })(v || (v = y`
  font-size: 16px;
  text-align: left;
`)),
        _J = m.default.li(w || (w = y`
  margin-bottom: 13px;
`));
}), a.register('gaMZi', function(b, c) {
    _e(b.exports, 'legitEvent', function() {
        return a;
    });
    const d = b => !b || (!0 !== b.isTrusted && !1 !== b.isTrusted || b.isTrusted);
}), a.register('x8CoD', function(b, c) {
    _e(b.exports, 'getCloudinaryUrl', function() {
        return a;
    });
    const d = b => {
            const _e = _e(b);
            return _e ? b.includes('/video/upload') ? `https://${ _f }/video/upload/${ _e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ _e }` : b;
        },
        _e = b => {
            if (!_i.some(_f => b.includes(_f)))
                return null;
            if (b.includes(_g) && !b.includes(`/${ _h }/`))
                return null;
            const _f = b.split('/');
            if (!_f || !_f.length || _f.length < 2)
                return null;
            const g = _f[_f.length - 2],
                h = _f[_f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        _f = 'media.gimkit.com',
        _g = 'res.cloudinary.com',
        _h = 'gimkit-production',
        _i = [
            _f,
            _g
        ];
}), a.register('pMmde1', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(i, _j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, i), {}, {
                ref: _j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    _c(b.exports, 'default', function() {
        return a;
    });
    var d = {
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
}), a.register('JtnSG', function(b, c) {
    _c(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    const f = e.lazy(() => a('am6fB'));
    var _g = b => (0, d.jsx)(e.Suspense, {
        fallback: b.fallback || null,
        children: (0, d.jsx)(f, {
            latex: b.latex
        })
    });
}), a.register('am6fB', function(b, _c) {
    b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('emcKB')),
        import('./' + a('HmN9A').resolve('5OCdz'))
    ]).then(() => a('vZVkZ'));
}), a.register('gk6FN', function(b, c) {
    _j(b.exports, 'useMotionValue', function() {
        return _h;
    });
    var d = a('LEQ5w'),
        e = a('dssd5'),
        f = a('v1rLj'),
        g = a('mk5EJ');

    function _h(i) {
        const _j = (0, g.useConstant)(() => (0, e.motionValue)(i)),
            {
                isStatic: k
            } = (0, d.useContext)(f.MotionConfigContext);
        if (k) {
            const [, l] = (0, d.useState)(i);
            (0, d.useEffect)(() => _j.on('change', l), []);
        }
        return _j;
    }
});