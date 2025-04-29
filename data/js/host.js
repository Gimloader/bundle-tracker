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
var a = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    b = a.parcelRequire388b;
b.register('LQ+V+', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(c.exports, 'default', function() {
        return _h;
    });
    var f = b('0hzx+');
    b('LEQ5w');
    var g = b('UDnIs');
    var _h = () => (0, f.jsx)(f.Fragment, {
        children: (0, f.jsx)(g.default, {})
    });
}), b.register('UDnIs', function(c, d) {
    _o(c.exports, 'default', function() {
        return _e;
    });
    var _e = b('Qocyj').default;
}), b.register('Qocyj', function(c, d) {
    _o(c.exports, 'default', function() {
        return _k;
    });
    var e = b('0hzx+'),
        f = b('2x11J');
    b('LEQ5w');
    var g = b('e3EXx'),
        h = b('LYKIV'),
        i = b('PMl60'),
        j = b('sjRDa');
    var _k = () => (0, e.jsx)(j.default.Provider, {
        value: g.default,
        children: (0, e.jsxs)(f.Provider, {
            ...g.default,
            children: [
                (0, e.jsx)(i.Title, {
                    title: 'Host',
                    description: 'Host a game of Gimkit, an online strategic game show for the classroom.'
                }),
                (0, e.jsx)(h.default, {})
            ]
        })
    });
}), b.register('e3EXx', function(c, d) {
    _o(c.exports, 'default', function() {
        return _t;
    });
    var e = b('mIN5U'),
        f = b('rH6Je'),
        g = b('T2FD2'),
        h = b('32E0B'),
        i = b('e8Fci'),
        j = b('86Ykd'),
        k = b('MLM22'),
        l = b('9j8La'),
        m = b('LCL9u'),
        n = b('nQ8Ky'),
        o = b('zQgGj'),
        p = b('ZGYFt'),
        q = b('AuGOs'),
        r = b('FMB45'),
        s = b('7xc+t');
    var _t = {
        kit: new(0, j.default)(),
        players: new(0, k.default)(),
        gameValues: new(0, i.default)(),
        gameOptions: new(0, h.default)(),
        engine: new(0, e.default)(),
        stats: new(0, m.default)(),
        translations: new(0, n.default)(),
        powerups: new(0, l.default)(),
        ui: new(0, o.default)(),
        entities: new(0, f.default)(),
        events: new(0, g.default)(),
        imposter: new(0, p.default)(),
        draw: new(0, q.default)(),
        pardy: new(0, r.default)(),
        metadata: new(0, s.default)()
    };
}), b.register('mIN5U', function(c, d) {
    _o(c.exports, 'default', function() {
        return _h;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    class g {
        constructor() {
            this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'game', void 0), (0, e.__decorate)([f.observable], g.prototype, 'client', void 0), (0, e.__decorate)([f.observable], g.prototype, 'findingServerForGame', void 0), (0, e.__decorate)([f.observable], g.prototype, 'errorFindingServerForGame', void 0), (0, e.__decorate)([f.observable], g.prototype, 'attemptingToConnect', void 0), (0, e.__decorate)([f.observable], g.prototype, 'hasConnected', void 0), (0, e.__decorate)([f.observable], g.prototype, 'connected', void 0), (0, e.__decorate)([f.observable], g.prototype, 'connectionError', void 0), (0, e.__decorate)([f.observable], g.prototype, 'joinedRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'attemptingToJoinRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'errorJoiningRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'roomError', void 0);
    var _h = g;
}), b.register('rH6Je', function(c, d) {
    _o(c.exports, 'default', function() {
        return _h;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    class g {
        constructor() {
            this.defendingHomebase = f.observable.array(), this.lava = null, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'defendingHomebase', void 0), (0, e.__decorate)([f.observable], g.prototype, 'lava', void 0);
    var _h = g;
}), b.register('T2FD2', function(c, d) {
    _o(c.exports, 'default', function() {
        return b;
    });
    var e = class {};
}), b.register('32E0B', function(c, d) {
    _o(c.exports, 'default', function() {
        return _i;
    });
    var e = b('csYze'),
        f = b('YuT/D'),
        g = b('6XgQB1');
    class h {
        get formattedGameOptions() {
            return (0, f.toJS)(this);
        }
        constructor() {
            this.type = g.GameType.live, this.goal = {
                type: g.GameGoal.time,
                value: 10
            }, this.specialGameType = f.observable.array(), this.currency = '$', this.language = 'en', this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.joinInLate = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.music = !0, this.modeOptions = {}, this.setGameOptionsFromStorage = (_o, c) => {
                Object.keys(_o).forEach(d => {
                    null !== this[d] && ('group' !== d && 'specialGameType' !== d && 'modeOptions' !== d || c) && (this[d] = _o[d]);
                });
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], h.prototype, 'type', void 0), (0, e.__decorate)([f.observable], h.prototype, 'goal', void 0), (0, e.__decorate)([f.observable], h.prototype, 'specialGameType', void 0), (0, e.__decorate)([f.observable], h.prototype, 'currency', void 0), (0, e.__decorate)([f.observable], h.prototype, 'language', void 0), (0, e.__decorate)([f.observable], h.prototype, 'startingCash', void 0), (0, e.__decorate)([f.observable], h.prototype, 'handicap', void 0), (0, e.__decorate)([f.observable], h.prototype, 'clapping', void 0), (0, e.__decorate)([f.observable], h.prototype, 'joinInLate', void 0), (0, e.__decorate)([f.observable], h.prototype, 'powerups', void 0), (0, e.__decorate)([f.observable], h.prototype, 'themes', void 0), (0, e.__decorate)([f.observable], h.prototype, 'cleanPowerupsOnly', void 0), (0, e.__decorate)([f.observable], h.prototype, 'allowGoogleTranslate', void 0), (0, e.__decorate)([f.observable], h.prototype, 'music', void 0), (0, e.__decorate)([f.observable], h.prototype, 'modeOptions', void 0), (0, e.__decorate)([f.action.bound], h.prototype, 'setGameOptionsFromStorage', void 0), (0, e.__decorate)([f.computed], h.prototype, 'formattedGameOptions', null);
    var _i = h;
}), b.register('e8Fci', function(c, d) {
    _o(c.exports, 'default', function() {
        return _j;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('YuT/D'),
        h = b('6XgQB1');
    class i {
        constructor() {
            (0, e.default)(this, 'availableThemes', g.observable.array()), this.currentRoute = h.GameStatus.setup, this.gameCode = '', this.clapCount = 0, this.reportId = '', this.activityItems = g.observable.array(), this.thanosValues = null, this.bossId = null, this.showBossBattleModal = !1, this.gameEndDate = 0, this.defendingHomebaseResults = null, this.roomIntentErrorMessage = '', (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], i.prototype, 'currentRoute', void 0), (0, f.__decorate)([g.observable], i.prototype, 'gameCode', void 0), (0, f.__decorate)([g.observable], i.prototype, 'clapCount', void 0), (0, f.__decorate)([g.observable], i.prototype, 'reportId', void 0), (0, f.__decorate)([g.observable], i.prototype, 'activityItems', void 0), (0, f.__decorate)([g.observable], i.prototype, 'thanosValues', void 0), (0, f.__decorate)([g.observable], i.prototype, 'bossId', void 0), (0, f.__decorate)([g.observable], i.prototype, 'showBossBattleModal', void 0), (0, f.__decorate)([g.observable], i.prototype, 'gameEndDate', void 0), (0, f.__decorate)([g.observable], i.prototype, 'defendingHomebaseResults', void 0), (0, f.__decorate)([g.observable], i.prototype, 'roomIntentErrorMessage', void 0);
    var _j = i;
}), b.register('86Ykd', function(c, d) {
    _o(c.exports, 'default', function() {
        return _f;
    });
    var e = b('1bFPu');
    var _f = class {
        constructor() {
            (0, e.default)(this, 'questions', []);
        }
    };
}), b.register('MLM22', function(c, d) {
    _o(c.exports, 'default', function() {
        return _j;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    const g = (_o, c) => _o + c.balance,
        h = (_o, c) => _o + c.stones;
    class i {
        get filteredPlayers() {
            return this.players.filter(_o => 'Player [Still Entering Name]' !== _o.name);
        }
        get totalStones() {
            return this.players.reduce(h, 0);
        }
        get totalBalance() {
            return this.teams.length ? this.teams.reduce(g, 0) : this.players.reduce(g, 0);
        }
        constructor() {
            this.players = f.observable.array([]), this.teams = f.observable.array(), this.finalResults = f.observable.array(), (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], i.prototype, 'players', void 0), (0, e.__decorate)([f.observable], i.prototype, 'teams', void 0), (0, e.__decorate)([f.observable], i.prototype, 'finalResults', void 0), (0, e.__decorate)([f.computed], i.prototype, 'filteredPlayers', null), (0, e.__decorate)([f.computed], i.prototype, 'totalStones', null), (0, e.__decorate)([f.computed], i.prototype, 'totalBalance', null);
    var _j = i;
}), b.register('9j8La', function(c, d) {
    _o(c.exports, 'default', function() {
        return _h;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    class g {
        constructor() {
            this.specialSongIsPlaying = !1, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'specialSongIsPlaying', void 0);
    var _h = g;
}), b.register('LCL9u', function(c, d) {
    _o(c.exports, 'default', function() {
        return _h;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    class g {
        constructor() {
            this.playerStats = f.observable.array(), (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'playerStats', void 0);
    var _h = g;
}), b.register('nQ8Ky', function(c, d) {
    _o(c.exports, 'default', function() {
        return _h;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    class g {
        constructor() {
            (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'translations', void 0);
    var _h = g;
}), b.register('zQgGj', function(c, d) {
    _o(c.exports, 'default', function() {
        return _i;
    });
    var e = b('csYze'),
        f = b('YuT/D'),
        g = b('hEZVH');
    class h {
        constructor() {
            this.backgroundColor = g.default.BackgroundPurple, this.showingBossPreScreen = !1, this.showingLavaPreScreen = !1, this.showingHumansVsZombiesPreScreen = !1, this.snowing = !1, this.showingClassTip = !1, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], h.prototype, 'backgroundColor', void 0), (0, e.__decorate)([f.observable], h.prototype, 'showingBossPreScreen', void 0), (0, e.__decorate)([f.observable], h.prototype, 'showingLavaPreScreen', void 0), (0, e.__decorate)([f.observable], h.prototype, 'showingHumansVsZombiesPreScreen', void 0), (0, e.__decorate)([f.observable], h.prototype, 'snowing', void 0), (0, e.__decorate)([f.observable], h.prototype, 'showingClassTip', void 0);
    var _i = h;
}), b.register('hEZVH', function(c, d) {
    _o(c.exports, 'default', function() {
        return b;
    });
    var e = {
        Black: '#000000',
        White: '#FFFFFF',
        BackgroundPurple: '#673ab7',
        SuccessGreen: '#4bb543',
        LightSuccessGreen: '#6abf69',
        DisabledGray: '#838383',
        Gold: '#FFD700',
        ErrorRed: '#d32f2f',
        LovePink: '#e91e63',
        DarkSummerOrange: '#bf360c'
    };
}), b.register('ZGYFt', function(c, d) {
    _o(c.exports, 'PersonRole', function() {
        return _g;
    }), _o(c.exports, 'ImposterStatus', function() {
        return _i;
    }), _o(c.exports, 'default', function() {
        return _l;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    let _g;
    var h;
    let _i;
    var j;
    (h = _g || (_g = {})).detective = 'detective', h.imposter = 'imposter', (j = _i || (_i = {})).intro = 'intro', j.questions = 'questions', j.discussion = 'discussion', j.voting = 'voting', j.votingResult = 'votingResult';
    class k {
        constructor() {
            this.status = _i.intro, this.meetingsLeft = 5, this.investigationsLeft = 0, this.impostersLeft = 0, this.votes = 0, this.meetingResults = null, this.people = f.observable.array(), (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], k.prototype, 'status', void 0), (0, e.__decorate)([f.observable], k.prototype, 'meetingsLeft', void 0), (0, e.__decorate)([f.observable], k.prototype, 'investigationsLeft', void 0), (0, e.__decorate)([f.observable], k.prototype, 'impostersLeft', void 0), (0, e.__decorate)([f.observable], k.prototype, 'votes', void 0), (0, e.__decorate)([f.observable], k.prototype, 'meetingResults', void 0), (0, e.__decorate)([f.observable], k.prototype, 'people', void 0);
    var _l = k;
}), b.register('AuGOs', function(c, d) {
    _o(c.exports, 'DrawStatus', function() {
        return _g;
    }), _o(c.exports, 'default', function() {
        return _j;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    let _g;
    var h;
    (h = _g || (_g = {})).pickDrawer = 'pickDrawer', h.termSelection = 'termSelection', h.drawing = 'drawing', h.results = 'results';
    class i {
        constructor() {
            this.status = _g.pickDrawer, this.round = {
                term: '',
                secondsLeft: 999,
                drawingBase64: '',
                revealText: '',
                drawer: {
                    id: '',
                    name: ''
                }
            }, this.latestLine = null, this.latestFeedItem = null, this.personCount = null, this.everybodyGotLastRoundCorrect = !1, this.showingFeed = !0, this.pointAdditions = f.observable.array(), this.drawingHistory = f.observable.array(), this.drawingsModalOpen = !1, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], i.prototype, 'status', void 0), (0, e.__decorate)([f.observable], i.prototype, 'round', void 0), (0, e.__decorate)([f.observable], i.prototype, 'latestLine', void 0), (0, e.__decorate)([f.observable], i.prototype, 'latestFeedItem', void 0), (0, e.__decorate)([f.observable], i.prototype, 'personCount', void 0), (0, e.__decorate)([f.observable], i.prototype, 'everybodyGotLastRoundCorrect', void 0), (0, e.__decorate)([f.observable], i.prototype, 'showingFeed', void 0), (0, e.__decorate)([f.observable], i.prototype, 'pointAdditions', void 0), (0, e.__decorate)([f.observable], i.prototype, 'drawingHistory', void 0), (0, e.__decorate)([f.observable], i.prototype, 'drawingsModalOpen', void 0);
    var _j = i;
}), b.register('FMB45', function(c, d) {
    _o(c.exports, 'PardyScreen', function() {
        return _g;
    }), _o(c.exports, 'PardyQuestionScreen', function() {
        return _i;
    }), _o(c.exports, 'PardyQuestionStatus', function() {
        return _k;
    }), _o(c.exports, 'default', function() {
        return _n;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    let _g;
    var h;
    let _i;
    var j;
    let _k;
    var l;
    (h = _g || (_g = {})).home = 'home', h.question = 'question', h.answer = 'answer', (j = _i || (_i = {})).preview = 'preview', j.finale = 'finale', j.question = 'question', (l = _k || (_k = {})).preview = 'preview', l.ask = 'ask', l.timesUp = 'timesUp';
    class m {
        constructor() {
            this.screen = _g.home, this.questionScreen = _i.preview, this.questionStatus = _k.preview, this.currentRound = null, this.disabledSections = f.observable.array(), this.board = null, this.powers = f.observable.array(), this.playerCount = 0, this.betsPlaced = 0, this.playersAnswered = 0, this.playersAnsweredCorrectly = 0, this.nameOfFirstPlayerToAnswerCorrectly = '', (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], m.prototype, 'screen', void 0), (0, e.__decorate)([f.observable], m.prototype, 'questionScreen', void 0), (0, e.__decorate)([f.observable], m.prototype, 'questionStatus', void 0), (0, e.__decorate)([f.observable], m.prototype, 'currentRound', void 0), (0, e.__decorate)([f.observable], m.prototype, 'disabledSections', void 0), (0, e.__decorate)([f.observable], m.prototype, 'board', void 0), (0, e.__decorate)([f.observable], m.prototype, 'powers', void 0), (0, e.__decorate)([f.observable], m.prototype, 'finaleQuestionId', void 0), (0, e.__decorate)([f.observable], m.prototype, 'playerCount', void 0), (0, e.__decorate)([f.observable], m.prototype, 'betsPlaced', void 0), (0, e.__decorate)([f.observable], m.prototype, 'playersAnswered', void 0), (0, e.__decorate)([f.observable], m.prototype, 'playersAnsweredCorrectly', void 0), (0, e.__decorate)([f.observable], m.prototype, 'nameOfFirstPlayerToAnswerCorrectly', void 0);
    var _n = m;
}), b.register('7xc+t', function(c, d) {
    _o(c.exports, 'default', function() {
        return _h;
    });
    var e = b('csYze'),
        f = b('YuT/D');
    class g {
        constructor() {
            this.hasReceivedHostStaticState = !1, this.currentGameIsUsingGroups = !1, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'hasReceivedHostStaticState', void 0), (0, e.__decorate)([f.observable], g.prototype, 'currentGameIsUsingGroups', void 0);
    var _h = g;
}), b.register('LYKIV', function(c, d) {
    _o(c.exports, 'default', function() {
        return _p;
    });
    var e = b('0hzx+'),
        f = b('hEZVH'),
        g = b('2x11J'),
        h = b('LEQ5w'),
        i = b('Axq+p'),
        j = b('LFqOY'),
        k = b('sjRDa'),
        l = b('6XgQB1');
    let m;
    const n = (0, g.observer)(() => {
            const {
                ui: {
                    backgroundColor: _o
                },
                gameValues: {
                    currentRoute: p
                }
            } = h.useContext(k.default), q = p === l.GameStatus.setup || p === l.GameStatus.join;
            return (0, e.jsx)(_o, {
                backgroundColor: _o,
                instantAnimateBackground: q,
                children: (0, e.jsx)(j.default, {})
            });
        }),
        _o = i.default.div(m || (m = (_j => _j)`
  min-height: 100vh;
  width: 100%;
  color: ${ 0 };
  background: ${ 0 };
  transition: background ${ 0 }s;
  display: flex;
  flex-direction: column;
`), f.default.White, _j => _j.backgroundColor, _j => _j.instantAnimateBackground ? 0 : 0.5);
    var _p = n;
}), b.register('LFqOY', function(c, d) {
    _j(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('6XgQB1');
    b('LEQ5w');
    var g = b('vGsl8'),
        h = b('+TyX3'),
        i = b('uL+xD'),
        j = b('DsT4y'),
        k = b('HTTWT'),
        l = b('kW/Ne'),
        m = b('ZKCsJ'),
        n = b('SUeUf'),
        o = b('s4Jsn'),
        p = b('KJQEo');
    var _q = () => (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsx)(g.default, {
                route: f.GameStatus.gameplay,
                component: i.default
            }),
            (0, e.jsx)(g.default, {
                route: f.GameStatus.join,
                component: j.default
            }),
            (0, e.jsx)(g.default, {
                route: f.GameStatus.results,
                component: l.default
            }),
            (0, e.jsx)(g.default, {
                route: f.GameStatus.setup,
                component: m.default
            }),
            (0, e.jsx)(g.default, {
                route: f.GameStatus.teams,
                component: n.default
            }),
            (0, e.jsx)(k.default, {}),
            (0, e.jsx)(h.default, {}),
            (0, e.jsx)(p.default, {}),
            (0, e.jsx)(o.default, {})
        ]
    });
}), b.register('vGsl8', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('2x11J'),
        h = b('LEQ5w');
    let i = class extends h.Component {
        render() {
            const {
                route: _j
            } = this.props;
            if (this.props.gameValues.currentRoute !== _j)
                return null;
            const k = this.props.component;
            return (0, f.jsx)(k, {});
        }
    };
    i = (0, e.__decorate)([
        (0, g.inject)('gameValues'),
        g.observer
    ], i);
    var _j = i;
}), b.register('+TyX3', function(c, d) {
    _j(c.exports, 'default', function() {
        return _k;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('2x11J'),
        h = b('LEQ5w'),
        i = b('Ot/ON');
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
    var _k = j;
}), b.register('Ot/ON', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('1bFPu'),
        f = b('0hzx+'),
        g = b('LEQ5w'),
        h = b('giK3u');
    class i extends g.Component {
        componentDidUpdate(_j) {
            this.state.hasShown || !_j.isSnowing && this.props.isSnowing && (this.setState({
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
        constructor(..._h) {
            super(..._h), (0, e.default)(this, 'state', {
                hasShown: !1
            });
        }
    }
    var _j = i;
}), b.register('giK3u', function(c, d) {
    _h(c.exports, 'default', function() {
        return _g;
    });
    var e = b('e3EXx'),
        f = b('YuT/D');

    function _g() {
        var _h = !0,
            i = document.getElementById('snow-canv');
        if (i) {
            for (var j, k = i.getContext('2d'), l = i.width = window.innerWidth, m = i.height = window.innerHeight, n = [], o = 0; o < 29; ++o)
                (j = new _j()).y = Math.random() * (m + 50), j.x = Math.random() * l, j.t = Math.random() * (2 * Math.PI), j.sz = 100 / (10 + 100 * Math.random()) * 1.3, j.sp = 0.15 * Math.pow(0.8 * j.sz, 2) * 1, j.sp = j.sp < 1 ? 1 : j.sp, n.push(j);
            _j(), (0, f.reaction)(() => e.default.ui.isSnowing, () => {
                const p = e.default.ui.isSnowing;
                !_h && p ? (_h = p, _j()) : _h = p;
            });
        }

        function _j() {
            if (_h) {
                window.requestAnimationFrame(_j), b.clearRect(0, 0, _g, _h), b.fillRect(0, 0, _g, _h), b.fill();
                for (var k = 0; k < _i.length; ++k) {
                    var l = _i[k];
                    l.t += 0.05, l.t = l.t >= 2 * Math.PI ? 0 : l.t, l.y += l.sp, l.x += Math.sin(1 * l.t) * (0.3 * l.sz), l.y > _h + 50 && (l.y = -10 - 20 * Math.random()), l.x > _g + 20 && (l.x = -20), l.x < -20 && (l.x = _g + 20), l.draw();
                }
            }
        }

        function _j() {
            this.draw = function() {
                this.g = b.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, 'hsla(255,255%,255%,1)'), this.g.addColorStop(1, 'hsla(255,255%,255%,0)'), b.moveTo(this.x, this.y), b.fillStyle = this.g, b.beginPath(), b.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), b.fill();
            };
        }
    }
}), b.register('uL+xD', function(c, d) {
    _x(c.exports, 'default', function() {
        return _x;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('3rMVL'),
        _h = b('hEZVH'),
        _i = b('RMEzW'),
        j = b('YuT/D'),
        k = b('2x11J'),
        l = b('LEQ5w'),
        m = b('Axq+p'),
        n = b('xEQXp'),
        o = b('l9nZi'),
        p = b('vVA4Y'),
        q = b('eNDcU'),
        r = b('oCa/T'),
        s = b('Q9mfL'),
        t = b('cD5Jd');
    let u;
    const v = m.default.div(u || (u = (_x => _x)`
  height: 100vh;
  width: 100%;
  font-family: ${ 0 };
  display: flex;
  flex-direction: column;
`), _i.default.fontFamilyName);
    let w = class extends l.Component {
        componentDidMount() {
            if (this.props.blockComponentDidMountScript)
                return;
            (0, g.addActivityItem)({
                name: 'The Game',
                action: 'has started!',
                customTextColor: _h.default.LightSuccessGreen
            });
            const _x = (0, g.getMusicTrack)();
            this.props.gameOptions.music && (_x.playing() || (0, g.inDrawMode)() || (0, g.inPardyMode)() || _x.play()), (0, j.reaction)(() => this.props.gameOptions.music, c => {
                c ? _x.playing() || (0, g.inDrawMode)() || (0, g.inPardyMode)() || _x.play() : (0, g.inPardyMode)() || _x.pause();
            });
        }
        render() {
            return (0, g.inZombiesVsHumansMode)() ? (0, f.jsx)(p.default, {}) : (0, g.inLavaMode)() ? (0, f.jsx)(q.default, {}) : (0, g.inImposterMode)() ? (0, f.jsx)(r.default, {}) : (0, g.inDrawMode)() ? (0, f.jsx)(s.default, {}) : (0, g.inPardyMode)() ? (0, f.jsx)(t.default, {}) : (0, f.jsxs)(v, {
                children: [
                    (0, f.jsx)(n.default, {}),
                    (0, f.jsx)(o.default, {})
                ]
            });
        }
    };
    w = (0, e.__decorate)([
        (0, k.inject)('gameOptions'),
        k.observer
    ], w);
    var _x = w;
}), b.register('3rMVL', function(c, d) {
    _Q(c.exports, 'plural', function() {
        return _q;
    }), _Q(c.exports, 'numberWithCommas', function() {
        return _r;
    }), _Q(c.exports, 'getMoney', function() {
        return _s;
    }), _Q(c.exports, 'inDrawMode', function() {
        return _N;
    }), _Q(c.exports, 'banPlayer', function() {
        return _t;
    }), _Q(c.exports, 'addActivityItem', function() {
        return _u;
    }), _Q(c.exports, 'inTeamMode', function() {
        return _v;
    }), _Q(c.exports, 'getTeamColor', function() {
        return _w;
    }), _Q(c.exports, 'endGame', function() {
        return _x;
    }), _Q(c.exports, 'inThanosMode', function() {
        return _H;
    }), _Q(c.exports, 'inZombiesVsHumansMode', function() {
        return _K;
    }), _Q(c.exports, 'getMusicTrack', function() {
        return _y;
    }), _Q(c.exports, 'inImposterMode', function() {
        return _M;
    }), _Q(c.exports, 'inLavaMode', function() {
        return _L;
    }), _Q(c.exports, 'startSpecialSong', function() {
        return _z;
    }), _Q(c.exports, 'getAssetPath', function() {
        return _P;
    }), _Q(c.exports, 'getQueryVariable', function() {
        return _A;
    }), _Q(c.exports, 'playSound', function() {
        return _B;
    }), _Q(c.exports, 'stopSound', function() {
        return _C;
    }), _Q(c.exports, 'send', function() {
        return _E;
    }), _Q(c.exports, 'HideIfTabbedAway', function() {
        return _F;
    }), _Q(c.exports, 'musicIsOn', function() {
        return _G;
    }), _Q(c.exports, 'inHiddenMode', function() {
        return _I;
    }), _Q(c.exports, 'inBossBattleMode', function() {
        return _J;
    }), _Q(c.exports, 'inPardyMode', function() {
        return _O;
    }), _Q(c.exports, 'inProduction', function() {
        return _P;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('Yv86d'),
        g = (b('bgvr8'), b('hEZVH')),
        h = b('e3EXx'),
        i = b('6XgQB1'),
        j = b('Li6uh'),
        k = b('UJt8+'),
        l = b('6yrsF'),
        m = b('fe6E3'),
        n = b('INDrz'),
        o = b('xoHbD');
    const p = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        },
        _q = (_Q, c, d) => 1 === c ? _Q : d || _Q + 's',
        _r = _Q => _Q.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        _s = _Q => {
            const t = Math.round(_Q);
            return _N() ? `${ _r(t) } ${ _q('point', t) }` : (t < 0 ? '-' : '') + h.default.gameOptions.currency + _r(Math.abs(t));
        },
        _t = _Q => {
            h.default.engine.game.send(j.default.kickPlayer, _Q), h.default.players.players.replace(h.default.players.players.filter(c => c.id !== _Q)), h.default.ui.showingClassTip || h.default.metadata.currentGameIsUsingGroups || (h.default.ui.showingClassTip = !0);
        },
        _u = _Q => {
            h.default.gameValues.activityItems.replace([
                ...(0, m.takeRight)(h.default.gameValues.activityItems, 22),
                {
                    ..._Q,
                    key: p() + p() + '-' + p() + '-' + p() + '-' + p()
                }
            ]);
        },
        _v = () => [
            o.TEAMS,
            k.HUMAN_ZOMBIE_DEFENDING_HOMEBASE,
            k.BOSS_BATTLE
        ].includes(h.default.gameOptions.specialGameType[0]),
        _w = _Q => {
            const x = h.default.players.teams.findIndex(x => x.id === _Q);
            return -1 !== x ? h.default.players.teams[x].color.background : g.default.White;
        },
        _x = _Q => {
            if ((_H() || _K()) && !_Q)
                return;
            const y = _y();
            _M() || y.fade(f.MUSIC_VOLUME, 0, 1000), setTimeout(() => {
                _v() ? h.default.engine.game.send(j.default.requestTeamLeaderboard, 'final') : h.default.engine.game.send(j.default.requestPlayerLeaderboard, 'final'), h.default.gameValues.currentRoute = i.GameStatus.results;
            }, 500);
        };
    const _y = () => _H() ? f.default.thanos.thanos : _K() ? f.default.halloween : _L() ? f.default.lava.panther : _M() ? f.default.imposter.mysteriousCase : _N() ? f.default.draw.background : f.default.realityShow,
        _z = (_Q, c) => {
            const A = h.default.gameOptions.music,
                B = _y();
            h.default.powerups.specialSongIsPlaying || (A && B.fade(f.MUSIC_VOLUME, 0, 1000), setTimeout(() => {
                const C = new(0, l.Howl)({
                    src: [_P(_Q)],
                    volume: 0.9
                });
                C.play(), h.default.powerups.specialSongIsPlaying = !0;
                const D = String(h.default.ui.backgroundColor);
                h.default.ui.backgroundColor = c, C.on('end', () => {
                    h.default.powerups.specialSongIsPlaying = !1, h.default.ui.backgroundColor = D, A && h.default.gameValues.currentRoute === i.GameStatus.gameplay && B.fade(0, f.MUSIC_VOLUME, 1000);
                });
            }, 1000));
        },
        _A = _Q => {
            const B = window.location.search.substring(1).split('&');
            for (let C = 0; C < B.length; C++) {
                const D = B[C].split('=');
                if (D[0] === _Q)
                    return D[1];
            }
            return null;
        },
        _B = (_Q, c) => {
            const C = () => {
                c.onEnd && c.onEnd();
            };
            void 0 !== c.volume ? _Q.volume(c.volume) : _Q.volume(1), c.fadeIn && _Q.volume(0), _Q.play(), c.fadeIn && _Q.fade(0, void 0 !== c.volume ? c.volume : 1, c.fadeInDuration || 1000), _Q.once('play', () => {
                c.onPlay && c.onPlay(), c.fadeOut && setTimeout(() => {
                    _Q.fade(c.volume || 1, 0, 1000);
                }, 1000 * (_Q.duration() - 1));
            });
            const D = () => {
                c.onError ? c.onError() : C();
            };
            return _Q.once('end', C), _Q.once('loaderror', D), _Q.once('playerror', D), _Q;
        },
        _C = (_Q, c, D = 1000) => {
            c ? (_Q.fade(_Q.volume(), 0, D), setTimeout(() => _Q.stop(), D)) : _Q.stop();
        },
        _E = (_Q, c) => {
            const F = h.default.engine.game;
            F && F.send(_Q, c);
        },
        _F = _Q => (0, n.default)() ? (0, e.jsx)(e.Fragment, {
            children: _Q.children
        }) : (0, e.jsx)('div', {}),
        _G = () => !0 === h.default.gameOptions.music,
        _H = () => h.default.gameOptions.specialGameType.includes(k.THANOS),
        _I = () => h.default.gameOptions.specialGameType.includes(k.HIDDEN),
        _J = () => h.default.gameOptions.specialGameType.includes(k.BOSS_BATTLE),
        _K = () => h.default.gameOptions.specialGameType.includes(k.HUMAN_ZOMBIE_DEFENDING_HOMEBASE),
        _L = () => h.default.gameOptions.specialGameType.includes(k.LAVA),
        _M = () => h.default.gameOptions.specialGameType.includes(k.IMPOSTER),
        _N = () => h.default.gameOptions.specialGameType.includes(k.DRAW),
        _O = () => h.default.gameOptions.specialGameType.includes(k.PARDY);

    function _P() {
        return !0;
    }

    function _P(_Q) {
        return '/assets/host/' + _Q;
    }
}), b.register('Yv86d', function(c, d) {
    _h(c.exports, 'MUSIC_VOLUME', function() {
        return _g;
    }), _h(c.exports, 'default', function() {
        return _j;
    });
    var e = b('6yrsF'),
        f = b('3rMVL');
    const _g = 0.45,
        h = !1,
        i = _h => new(0, e.Howl)({
            src: [(0, f.getAssetPath)(`${ _h }.mp3`)],
            preload: h
        });
    var _j = {
        realityShow: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('reality-show.mp3')],
            loop: !0,
            volume: _g,
            preload: h
        }),
        thanos: {
            thanos: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('thanos.mp3')],
                loop: !0,
                volume: _g,
                preload: h
            }),
            wind: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('wind.mp3')],
                preload: h
            }),
            successDing: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('successDing.mp3')],
                preload: h
            })
        },
        winner: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('winner.mp3')],
            preload: h
        }),
        celebrate: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('celebrate.mp3')],
            preload: h
        }),
        bossBattle: {
            darkAmbience: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('darkAmbience.mp3')],
                preload: h
            }),
            award: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('award.mp3')],
                volume: 0.7,
                preload: h
            }),
            getAmped: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('getAmped.mp3')],
                preload: h
            })
        },
        imposter: {
            tensionBuild: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('tensionBuild.mp3')],
                preload: h,
                volume: 0.7
            }),
            spaceshipAmbience: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('spaceshipAmbience.mp3')],
                preload: h,
                loop: !0
            }),
            typing: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('typing.mp3')],
                preload: h
            }),
            crewmateWin: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('crewmateWin.mp3')],
                preload: h
            }),
            imposterWin: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('imposterWin.mp3')],
                preload: h
            }),
            meetingBoom: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('meetingBoom.mp3')],
                preload: h
            }),
            mystery: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('mystery.mp3')],
                preload: h
            }),
            spaceDoorOpen: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('spaceDoorOpen.mp3')],
                preload: h
            }),
            mysteriousCase: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('mysteriousCase.mp3')],
                preload: h,
                loop: !0
            })
        },
        draw: {
            roundStart: new(0, e.Howl)({
                src: (0, f.getAssetPath)('roundStart.mp3'),
                preload: h
            }),
            funk: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('drawFunk.mp3')],
                preload: h
            }),
            winner: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('drawWinner.mp3')],
                preload: h
            }),
            background: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('drawBackground.mp3')],
                preload: h,
                loop: !0
            })
        },
        pardy: {
            music: new(0, e.Howl)({
                src: (0, f.getAssetPath)('pardyMusic.mp3'),
                preload: h,
                loop: !0
            }),
            riser: i('pardyRiser'),
            countdown: i('pardyCountdown'),
            tick: i('pardyTick'),
            swoosh: i('pardySwoosh'),
            roundStart: i('roundStart'),
            complete: i('pardyComplete'),
            finaleMusic: new(0, e.Howl)({
                src: (0, f.getAssetPath)('pardyFinaleMusic.mp3'),
                preload: h,
                loop: !0
            }),
            drumRoll: i('pardyDrumRoll')
        },
        eventBoom: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('eventBoom.wav')],
            preload: h
        }),
        suspense: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('suspense.wav')],
            volume: 0.45,
            preload: h
        }),
        halloween: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('halloween.mp3')],
            loop: !0,
            volume: _g,
            preload: h
        }),
        engagingSuspense: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('engagingSuspense.mp3')],
            preload: h
        }),
        fanfare: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('fanfare.mp3')],
            preload: h
        }),
        boom: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('boom.mp3')],
            preload: h
        }),
        lava: {
            panther: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('panther.mp3')],
                loop: !0,
                preload: h,
                volume: 0.25
            }),
            pantherShort: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('pantherShort.mp3')],
                preload: h,
                volume: 0.4
            }),
            lavaRumble: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('lavaRumble.mp3')],
                loop: !0,
                preload: h
            }),
            egyptFanfare: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('egyptFanfare.mp3')],
                preload: h,
                volume: 0.5
            })
        }
    };
}), b.register('Li6uh', function(c, d) {
    _h(c.exports, 'default', function() {
        return b;
    });
    var e = {
        requestHostClientIdFromGameCode: 'REQUEST_HOST_ID',
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
}), b.register('UJt8+', function(c, d) {
    _h(c.exports, 'THANOS', function() {
        return b;
    }), _h(c.exports, 'HIDDEN', function() {
        return _f;
    }), _h(c.exports, 'BOSS_BATTLE', function() {
        return _g;
    }), _h(c.exports, 'SHOP_QR_SCAN', function() {
        return _h;
    }), _h(c.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _i;
    }), _h(c.exports, 'LAVA', function() {
        return _j;
    }), _h(c.exports, 'IMPOSTER', function() {
        return _k;
    }), _h(c.exports, 'DRAW', function() {
        return _l;
    }), _h(c.exports, 'COMEBACK', function() {
        return _m;
    }), _h(c.exports, 'PARDY', function() {
        return _n;
    });
    const e = 'THANOS',
        _f = 'HIDDEN',
        _g = 'BOSS_BATTLE',
        _h = 'SHOP_QR_SCAN',
        _i = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _j = 'LAVA',
        _k = 'IMPOSTER',
        _l = 'DRAW',
        _m = 'COMEBACK',
        _n = 'PARDY';
}), b.register('INDrz', function(c, d) {
    _h(c.exports, 'default', function() {
        return _i;
    });
    var e = b('LEQ5w'),
        f = b('w4s5P'),
        g = function(_h, i) {
            if (Array.isArray(_h))
                return _h;
            if (Symbol.iterator in Object(_h))
                return function(j, k) {
                    var l = [],
                        m = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var p, q = j[Symbol.iterator](); !(m = (p = q.next()).done) && (l.push(p.value), !k || l.length !== k); m = !0);
                    } catch (j) {
                        n = !0, o = j;
                    } finally {
                        try {
                            !m && _h.return && _h.return();
                        } finally {
                            if (n)
                                throw o;
                        }
                    }
                    return l;
                }(_h, i);
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        },
        _h = f.isSupported && f.visibility,
        _i = function() {
            var j = (0, f.getHandlerArgs)(),
                k = g(j, 1)[0],
                l = (0, e.useState)(k),
                m = g(l, 2),
                n = m[0],
                o = m[1];
            return (0, e.useEffect)(function() {
                if (_h) {
                    var p = function() {
                        var q = (0, f.getHandlerArgs)(),
                            r = g(q, 1)[0];
                        o(r);
                    };
                    return document.addEventListener(f.visibility.event, p),
                        function() {
                            document.removeEventListener(f.visibility.event, p);
                        };
                }
            }, []), n;
        };
}), b.register('w4s5P', function(c, d) {
    _i(c.exports, 'isSupported', function() {
        return _g;
    }), _i(c.exports, 'visibility', function() {
        return _h;
    }), _i(c.exports, 'getHandlerArgs', function() {
        return _n;
    });
    var e = 'undefined' != typeof document,
        f = [{
                hidden: 'hidden',
                event: 'visibilitychange',
                state: 'visibilityState'
            },
            {
                hidden: 'webkitHidden',
                event: 'webkitvisibilitychange',
                state: 'webkitVisibilityState'
            },
            {
                hidden: 'mozHidden',
                event: 'mozvisibilitychange',
                state: 'mozVisibilityState'
            },
            {
                hidden: 'msHidden',
                event: 'msvisibilitychange',
                state: 'msVisibilityState'
            },
            {
                hidden: 'oHidden',
                event: 'ovisibilitychange',
                state: 'oVisibilityState'
            }
        ],
        _g = e && Boolean(document.addEventListener),
        _h = function() {
            if (!_g)
                return null;
            var _i = !0,
                j = !1,
                k = void 0;
            try {
                for (var l, m = f[Symbol.iterator](); !(_i = (l = m.next()).done); _i = !0) {
                    var _n = l.value;
                    if (_n.hidden in document)
                        return _n;
                }
            } catch (_i) {
                j = !0, k = _i;
            } finally {
                try {
                    !_i && _h.return && _h.return();
                } finally {
                    if (j)
                        throw k;
                }
            }
            return null;
        }(),
        i = function() {
            if (!_h)
                return [
                    !0,
                    'visible'
                ];
            var j = _h.hidden,
                k = _h.state;
            return [
                !document[j],
                document[k]
            ];
        };
}), b.register('xoHbD', function(c, d) {
    _u(c.exports, 'CLASSIC', function() {
        return b;
    }), _u(c.exports, 'TEAMS', function() {
        return _f;
    }), _u(c.exports, 'THANOS', function() {
        return _g;
    }), _u(c.exports, 'BOSS_BATTLE', function() {
        return _h;
    }), _u(c.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _i;
    }), _u(c.exports, 'LAVA', function() {
        return _j;
    }), _u(c.exports, 'IMPOSTER', function() {
        return _k;
    }), _u(c.exports, 'DRAW', function() {
        return _l;
    }), _u(c.exports, 'PARDY', function() {
        return _m;
    });
    const e = 'CLASSIC',
        _f = 'TEAMS',
        _g = 'THANOS',
        _h = 'BOSS_BATTLE',
        _i = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _j = 'LAVA',
        _k = 'IMPOSTER',
        _l = 'DRAW',
        _m = 'PARDY';
}), b.register('RMEzW', function(c, d) {
    _u(c.exports, 'default', function() {
        return b;
    });
    var e = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), b.register('xEQXp', function(c, d) {
    _u(c.exports, 'default', function() {
        return _u;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('ijg0s'),
        i = b('3rMVL'),
        j = b('2x11J'),
        k = b('LEQ5w'),
        l = b('f5Ll8'),
        m = b('6XgQB1'),
        n = b('OkbLr'),
        o = b('NmuWD'),
        p = b('mfp3D'),
        q = b('+UyIc24'),
        r = b('mFvD7');
    const s = _u => (0, g.jsxs)('span', {
        children: [
            _u.minutes,
            ':',
            _u.seconds
        ]
    });
    let t = class extends k.Component {
        componentDidMount() {
            this.props.gameValues.gameEndDate || (this.props.gameValues.gameEndDate = this.state.startDate + 60000 * this.props.gameOptions.goal.value);
        }
        render() {
            const _u = this.getGameGoalText();
            return (0, g.jsxs)(o.Container, {
                children: [
                    (0, g.jsxs)(o.HeaderSectionContainer, {
                        customCSS: '\n          display: flex;\n          align-items: center;\n        ',
                        children: [
                            (0, g.jsx)('img', {
                                src: '/client/img/svgLogoWhite.svg',
                                style: {
                                    height: 30
                                }
                            }),
                            this.props.gameOptions.joinInLate ? (0, g.jsx)(h.default, {
                                title: 'Game Code (Click to enlarge)',
                                children: (0, g.jsx)(o.GameCode, {
                                    onClick: this.toggleLargeCode,
                                    showLargeCode: this.state.showLargeCode,
                                    children: this.props.gameValues.gameCode
                                })
                            }) : null
                        ]
                    }),
                    (0, g.jsx)(o.HeaderSectionContainer, {
                        customWidth: 50,
                        children: !(0, i.inZombiesVsHumansMode)() && (0, g.jsx)(o.Goal, {
                            children: (0, i.inThanosMode)() ? 'Collect All 6 Infinity Stones' : 'TIME' === _u ? this.timeRender() : _u
                        })
                    }),
                    (0, g.jsx)(o.HeaderSectionContainer, {
                        customCSS: '\n          justify-content: flex-end;\n          display: flex;\n        ',
                        children: (0, g.jsxs)('div', {
                            style: {
                                display: 'flex'
                            },
                            children: [
                                !(0, i.inProduction)() && (0, g.jsx)(n.default, {
                                    onClick: this.newGame,
                                    icon: (0, g.jsx)(p.default, {}),
                                    tooltipMessage: '[DEV] Start New Game'
                                }),
                                (0, g.jsx)(n.default, {
                                    onClick: this.toggleMusic,
                                    icon: (0, g.jsx)(r.default, {}),
                                    tooltipMessage: 'Toggle Music'
                                }),
                                !(0, i.inThanosMode)() && !(0, i.inZombiesVsHumansMode)() && (0, g.jsx)(n.default, {
                                    onClick: this.endGame,
                                    icon: (0, g.jsx)(q.default, {}),
                                    tooltipMessage: 'End Game'
                                })
                            ]
                        })
                    })
                ]
            });
        }
        constructor(..._u) {
            super(..._u), (0, e.default)(this, 'state', {
                startDate: Date.now(),
                showLargeCode: !1
            }), (0, e.default)(this, 'toggleLargeCode', () => this.setState({
                showLargeCode: !this.state.showLargeCode
            })), (0, e.default)(this, 'endGame', () => {
                (0, i.endGame)(!0);
            }), (0, e.default)(this, 'toggleMusic', () => {
                this.props.gameOptions.music = !this.props.gameOptions.music;
            }), (0, e.default)(this, 'newGame', () => {
                this.props.engine.game.send('DEV_NEW_GAME'), setTimeout(() => window.location.reload(), 200);
            }), (0, e.default)(this, 'timeRender', () => this.props.gameValues.gameEndDate ? (0, g.jsx)(_d(l), {
                renderer: s,
                onComplete: i.endGame,
                date: this.props.gameValues.gameEndDate
            }) : null), (0, e.default)(this, 'getGameGoalText', () => {
                const {
                    gameOptions: {
                        goal: _u
                    }
                } = this.props;
                return _u.type === m.GameGoal.allIn ? `Reach ${ (0, i.getMoney)(_u.value) }` : _u.type === m.GameGoal.race ? `First to ${ (0, i.getMoney)(_u.value) }` : _u.type === m.GameGoal.time ? 'TIME' : '';
            });
        }
    };
    t = (0, f.__decorate)([
        (0, j.inject)('gameValues', 'gameOptions', 'ui', 'engine'),
        j.observer
    ], t);
    var _u = t;
}), b.register('f5Ll8', function(c, _d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    }), c.exports.getTimeDifference = c.exports.zeroPad = void 0;
    var e = Object.assign || function(f) {
            for (var g = 1; g < arguments.length; g++) {
                var h = arguments[g];
                for (var i in h)
                    Object.prototype.hasOwnProperty.call(h, i) && (f[i] = h[i]);
            }
            return f;
        },
        f = function() {
            function g(h, i) {
                for (var j = 0; j < i.length; j++) {
                    var k = i[j];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, 'value' in k && (k.writable = !0), Object.defineProperty(h, k.key, k);
                }
            }
            return function(g, h, i) {
                return h && c(g.prototype, h), i && c(g, i), g;
            };
        }(),
        g = _i(b('LEQ5w')),
        h = _i(b('WPpLv'));

    function _i(j) {
        return j && j.__esModule ? j : {
            default: j
        };
    }
    var i = c.exports.zeroPad = function(j) {
            var k = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            if (0 === k)
                return j;
            var l = String(j);
            return l.length >= k ? l : ('0'.repeat(k) + l).slice(-1 * k);
        },
        j = c.exports.getTimeDifference = function(k) {
            var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                m = l.now,
                n = void 0 === m ? Date.now : m,
                o = l.precision,
                p = void 0 === o ? 0 : o,
                q = l.controlled,
                r = void 0 !== q && q,
                s = 'string' == typeof k ? new Date(k) : k,
                t = parseInt(1000 * (Math.max(0, r ? s : s - n()) / 1000).toFixed(Math.max(0, Math.min(20, p))), 10),
                u = t / 1000;
            return {
                total: t,
                days: Math.floor(u / 86400),
                hours: Math.floor(u / 3600 % 24),
                minutes: Math.floor(u / 60 % 60),
                seconds: Math.floor(u % 60),
                milliseconds: Number((u % 1 * 1000).toFixed()),
                completed: t <= 0
            };
        },
        k = function(l) {
            function m(n) {
                ! function(o, p) {
                    if (!(o instanceof p))
                        throw new TypeError('Cannot call a class as a function');
                }(this, m);
                var o = function(p, q) {
                    if (!p)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !q || 'object' != typeof q && 'function' != typeof q ? p : q;
                }(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, n));
                _l.call(o);
                var p = o.props,
                    q = p.date,
                    r = p.now,
                    s = p.precision,
                    t = p.controlled;
                return o.mounted = !1, o.state = e({}, j(q, {
                    now: r,
                    precision: s,
                    controlled: t
                })), o;
            }
            return function(m, n) {
                if ('function' != typeof n && null !== n)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
                m.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: m,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(m, n) : m.__proto__ = n);
            }(_d, l), f(_d, [{
                    key: 'componentDidMount',
                    value: function() {
                        this.mounted = !0, this.props.controlled || (this.interval = setInterval(this.tick, this.props.intervalDelay));
                    }
                },
                {
                    key: 'componentWillReceiveProps',
                    value: function(m) {
                        var n = m.date,
                            o = m.now,
                            p = m.precision,
                            q = m.controlled;
                        this.setDeltaState(j(n, {
                            now: o,
                            precision: p,
                            controlled: q
                        }));
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function() {
                        this.mounted = !1, this.clearInterval();
                    }
                },
                {
                    key: 'setDeltaState',
                    value: function(m) {
                        !this.state.completed && m.completed && (this.clearInterval(), this.props.onComplete && this.props.onComplete(m)), this.mounted && this.setState(e({}, m));
                    }
                },
                {
                    key: 'getFormattedDelta',
                    value: function() {
                        var m = this.state,
                            n = m.days,
                            o = m.hours,
                            p = this.state,
                            q = p.minutes,
                            r = p.seconds,
                            s = this.props,
                            t = s.daysInHours,
                            u = s.zeroPadLength;
                        return t ? (o = i(o + 24 * n, u), n = null) : o = i(o, Math.min(2, u)), {
                            days: n,
                            hours: o,
                            minutes: i(q, Math.min(2, u)),
                            seconds: i(r, Math.min(2, u))
                        };
                    }
                },
                {
                    key: 'clearInterval',
                    value: function(m) {
                        function n() {
                            return m.apply(this, arguments);
                        }
                        return _d.toString = function() {
                            return m.toString();
                        }, _d;
                    }(function() {
                        clearInterval(this.interval), delete this.interval;
                    })
                },
                {
                    key: 'render',
                    value: function() {
                        var m = this.getFormattedDelta();
                        if (this.props.renderer)
                            return this.props.renderer(e({}, this.props, this.state, m));
                        if (this.state.completed && this.props.children) {
                            var n = e({}, this.props, this.state, m);
                            return delete n.children, g.default.cloneElement(this.props.children, {
                                countdown: n
                            });
                        }
                        var n = m.days,
                            o = m.hours,
                            p = m.minutes,
                            q = m.seconds;
                        return g.default.createElement('span', null, n, null != n ? ':' : '', o, ':', p, ':', q);
                    }
                }
            ]), _d;
        }(g.default.Component),
        _l = function() {
            var m = this;
            this.tick = function() {
                var n = m.props,
                    o = n.date,
                    p = n.now,
                    q = n.precision,
                    r = n.controlled,
                    s = n.onTick,
                    t = j(o, {
                        now: p,
                        precision: q,
                        controlled: r
                    });
                m.setDeltaState(e({}, t)), s && t.total > 0 && s(t);
            };
        };
    c.exports.default = k, k.propTypes = {
        date: h.default.oneOfType([
            h.default.instanceOf(Date),
            h.default.string,
            h.default.number
        ]).isRequired,
        daysInHours: h.default.bool,
        zeroPadLength: h.default.number,
        controlled: h.default.bool,
        intervalDelay: h.default.number,
        precision: h.default.number,
        children: h.default.any,
        renderer: h.default.func,
        now: h.default.func,
        onTick: h.default.func,
        onComplete: h.default.func
    }, k.defaultProps = {
        daysInHours: !1,
        zeroPadLength: 2,
        controlled: !1,
        intervalDelay: 1000,
        precision: 0,
        children: null
    };
}), b.register('OkbLr', function(c, d) {
    _j(c.exports, 'default', function() {
        return _h;
    });
    var e = b('0hzx+'),
        f = b('ulE4q'),
        g = b('ijg0s');
    b('LEQ5w');
    var _h = _j => (0, e.jsx)(g.default, {
        placement: 'leftBottom',
        title: _j.tooltipMessage,
        children: (0, e.jsx)(f.default, {
            style: {
                marginLeft: 5
            },
            onClick: _j.onClick,
            type: 'primary',
            shape: 'circle',
            icon: _j.icon,
            size: 'large'
        })
    });
}), b.register('NmuWD', function(c, d) {
    _j(c.exports, 'Container', function() {
        return _l;
    }), _j(c.exports, 'GameCode', function() {
        return _m;
    }), _j(c.exports, 'Goal', function() {
        return _n;
    }), _j(c.exports, 'HeaderSectionContainer', function() {
        return _o;
    });
    var e = b('RMEzW'),
        f = b('Axq+p');
    let g, h, i, j, k = _j => _j;
    const _l = f.default.div(g || (g = k`
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
        _m = f.default.div(h || (h = k`
  padding: 6px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  font-family: ${ 0 };
  ${ 0 }
`), e.default.fontFamilyName, _j => _j.showLargeCode ? '\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.9);\n    z-index: 99999;\n    font-size: 150px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  ' : null),
        _n = f.default.div(i || (i = k`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  font-size: 29px;
  ${ 0 };
`), e.default.black),
        _o = f.default.div(j || (j = k`
  ${ 0 }
  width: ${ 0 }%;
;
`), _j => _j.customCSS ? _j.customCSS : '', _j => _j.customWidth ? _j.customWidth : 25);
}), b.register('mfp3D', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('aeDL7'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'EnterOutlined';
    var _j = f.forwardRef(i);
}), b.register('aeDL7', function(c, d) {
    _j(c.exports, 'default', function() {
        return b;
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
                    d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'enter',
        theme: 'outlined'
    };
}), b.register('+UyIc24', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('r3/DU21'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'LogoutOutlined';
    var _j = f.forwardRef(i);
}), b.register('r3/DU21', function(c, d) {
    _j(c.exports, 'default', function() {
        return b;
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
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), b.register('mFvD7', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('By5kr'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'SoundOutlined';
    var _j = f.forwardRef(i);
}), b.register('By5kr', function(c, d) {
    _t(c.exports, 'default', function() {
        return b;
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
                    d: 'M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z'
                }
            }]
        },
        name: 'sound',
        theme: 'outlined'
    };
}), b.register('l9nZi', function(c, d) {
    _t(c.exports, 'default', function() {
        return _n;
    });
    var e = b('0hzx+'),
        f = b('3rMVL'),
        g = b('LEQ5w'),
        h = b('Axq+p'),
        i = b('ApnZz'),
        j = b('BAkC1');
    let k;
    const l = h.default.div(k || (k = (_t => _t)`
  min-height: 0;
  flex: 1;
  display: flex;
  min-height: 0;
`));
    class m extends g.Component {
        render() {
            return (0, e.jsxs)(l, {
                children: [
                    (0, e.jsx)(i.default, {
                        forceShowBalance: (0, f.inThanosMode)()
                    }),
                    (0, e.jsx)(j.default, {})
                ]
            });
        }
    }
    var _n = m;
}), b.register('ApnZz', function(c, d) {
    _t(c.exports, 'leaderboardSorter', function() {
        return _q;
    }), _t(c.exports, 'default', function() {
        return _t;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('/7zwG'),
        h = b('3rMVL'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('R6gfH'),
        l = b('Axq+p'),
        m = b('6XgQB1'),
        n = b('Tg04N'),
        o = b('xoHbD');
    let p;
    const _q = _t => {
            const r = (0, h.inThanosMode)() ? 'stones' : 'balance';
            return _t.slice().sort((_t, d) => _t[r] === d[r] ? 0 : _t[r] > d[r] ? -1 : 1);
        },
        r = l.default.div(p || (p = (_t => _t)`
  max-width: ${ 0 };
  ${ 0 } min-width: 420px;
  flex: 1;
  min-height: 0;
  ${ 0 } display: flex;
  flex-direction: column;
`), _t => _t.customWidth ? _t.customMaxWidth : '420px', _t => _t.customWidth ? 'width:' + _t.customWidth + ';' : null, _t => _t.blockScroll ? null : 'overflow: scroll;');
    let s = class extends j.Component {
        render() {
            const _t = (0, h.inTeamMode)(),
                u = _q(_t ? this.props.players.teams : this.props.players.players),
                v = (0, h.inBossBattleMode)();
            return (0, f.jsx)(r, {
                customWidth: this.props.customWidth,
                customMaxWidth: this.props.customMaxWidth,
                blockScroll: this.props.blockScroll,
                className: this.props.customClassName,
                style: {
                    overflow: this.props.overflow ? 'visible' : 'auto',
                    animationDelay: v ? '0s' : '7.4s',
                    animationDuration: v ? '7.4s' : '1s'
                },
                children: (0, f.jsx)(h.HideIfTabbedAway, {
                    children: (0, f.jsx)(k.default, {
                        style: {
                            paddingTop: 11
                        },
                        children: u.map((u, v) => this.props.hideTop3 && v + 1 <= 3 ? null : (0, f.jsx)(n.default, {
                            position: v + 1,
                            data: u,
                            isPlayer: !_t,
                            gameGoal: this.props.gameOptions.goal,
                            themes: this.props.gameValues.availableThemes,
                            hidden: !this.props.showHidden && u.activePowerups.includes(g.PowerupNames.undercover),
                            hideName: !(!(0, h.inHiddenMode)() || this.props.gameValues.currentRoute !== m.GameStatus.gameplay),
                            hideBalance: !this.props.forceShowBalance && (this.props.gameValues.currentRoute === m.GameStatus.gameplay && !(!(0, h.inHiddenMode)() && !this.props.gameOptions.specialGameType.includes(o.CLASSIC)))
                        }, u.id || u.name))
                    })
                })
            });
        }
    };
    s = (0, e.__decorate)([
        (0, i.inject)('players', 'gameOptions', 'gameValues'),
        i.observer
    ], s);
    var _t = s;
}), b.register('/7zwG', function(c, d) {
    _M(c.exports, 'PowerupNames', function() {
        return b;
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
        fivePercentBot: '5 Percent Bot',
        giving: 'Giving',
        repurchasePowerups: 'repurchasePowerups',
        link: 'Link',
        deflector: 'Deflector',
        undercover: 'Undercover',
        firstStone: 'Reality Stone',
        secondStone: 'Soul Stone',
        thirdStone: 'Mind Stone',
        fourthStone: 'Space Stone',
        fifthStone: 'Time Stone',
        sixthStone: 'Power Stone'
    };
}), b.register('Tg04N', function(c, d) {
    _M(c.exports, 'getTeamPlayerNames', function() {
        return _A;
    }), _M(c.exports, 'default', function() {
        return _M;
    });
    var e = b('1bFPu'),
        f = b('0hzx+'),
        g = b('+gdru'),
        h = b('sgToH'),
        i = b('3rMVL'),
        j = b('hEZVH'),
        k = b('RMEzW'),
        l = b('rD3N6'),
        m = b('LEQ5w'),
        n = b('Axq+p'),
        o = b('6XgQB1'),
        p = b('c0jzk');
    let q, r, s, t, u, v, w, x, y, z = _M => _M;
    const _A = _M => {
            let B = '';
            return _M.forEach((d, b) => {
                B += d, b + 1 !== _M.length && (B += ', ');
            }), B;
        },
        B = n.default.div(q || (q = z`
  background: ${ 0 };
  color: ${ 0 };
  padding: 7px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
  flex: 1;
  min-height: 0;
  margin: 0px 15px 10px 15px;
  box-shadow: ${ 0 };
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.25s;
  transition: background 0.25s;
`), _M => _M.background, _M => _M.text, l.default.basic),
        C = n.default.div(r || (r = z`
  ${ 0 };
  font-size: ${ 0 }px;
`), k.default.black, _M => _M.large ? 34 : 23),
        D = n.default.div(s || (s = z`
  ${ 0 };
  font-size: ${ 0 }px;
  margin-left: 7px;
  margin-right: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`), k.default.bold, _M => _M.large ? 30 : 20),
        E = n.default.div(t || (t = z`
  font-size: ${ 0 }px;
`), _M => _M.large ? 30 : 20),
        F = n.default.div(u || (u = z`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`)),
        G = n.default.div(v || (v = z`
  display: flex;
  align-items: center;
`)),
        H = n.default.div(w || (w = z`
  height: ${ 0 }px;
  width: ${ 0 }px;
  border-radius: 4px;
  background: ${ 0 };
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`), _M => _M.large ? 37 : 25, _M => _M.large ? 37 : 25, _M => _M.background),
        I = n.default.div(x || (x = z`
  font-size: ${ 0 }px;
  ${ 0 };
`), _M => _M.large ? 37 : 25, k.default.bold),
        J = n.default.div(y || (y = z`
  font-size: ${ 0 }px;
  text-align: center;
`), _M => _M.large ? 24 : 16),
        K = 'takes the lead';
    class L extends m.Component {
        componentDidUpdate(_M) {
            if (this.props.gameGoal.type === o.GameGoal.race && this.props.data.balance >= this.props.gameGoal.value)
                (0, i.endGame)();
            else if (1 === this.props.position && 1 !== _M.position) {
                if (this.props.hidden)
                    return;
                if (this.props.isPlayer) {
                    const N = this.props.data;
                    (0, i.addActivityItem)({
                        name: (0, i.inHiddenMode)() ? 'Someone' : N.name,
                        action: K,
                        customTextColor: j.default.LightSuccessGreen
                    });
                } else {
                    const N = this.props.data;
                    (0, i.addActivityItem)({
                        name: N.id,
                        action: K,
                        customTextColor: j.default.LightSuccessGreen
                    });
                }
            }
        }
        render() {
            if (this.props.hidden)
                return null;
            const {
                position: M
            } = this.props;
            if (this.props.isPlayer) {
                const N = this.props.data,
                    O = this.getColors();
                return (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsxs)(B, {
                            style: {
                                cursor: 'pointer'
                            },
                            onClick: this.openDrawer,
                            ...O,
                            children: [
                                (0, f.jsxs)(C, {
                                    large: this.props.large,
                                    children: [
                                        M,
                                        '.'
                                    ]
                                }),
                                (0, f.jsx)(D, {
                                    large: this.props.large,
                                    children: this.props.hideName ? 'Someone' : N.name
                                }),
                                (0, f.jsx)(E, {
                                    large: this.props.large,
                                    children: this.props.hideBalance ? '' : null !== N.stones && void 0 !== N.stones ? `${ N.stones } ${ (0, i.plural)('stone', N.stones) }` : (0, i.getMoney)(N.balance)
                                })
                            ]
                        }),
                        (0, f.jsx)(h.default, {
                            maskClosable: !0,
                            closable: !1,
                            onClose: this.closeDrawer,
                            open: this.state.drawerVisible,
                            placement: 'bottom',
                            height: 'auto',
                            rootStyle: {
                                fontFamily: k.default.fontFamilyName,
                                color: j.default.Black
                            },
                            children: (0, f.jsx)(p.default, {
                                close: this.closeDrawer,
                                playerId: N.id,
                                playerName: N.name,
                                playerBalance: N.balance,
                                playerStones: N.stones
                            })
                        })
                    ]
                });
            }
            const N = this.props.data;
            return (0, f.jsxs)(B, {
                background: j.default.White,
                text: j.default.Black,
                children: [
                    (0, f.jsxs)(C, {
                        large: this.props.large,
                        children: [
                            M,
                            '.'
                        ]
                    }),
                    (0, f.jsxs)(F, {
                        children: [
                            (0, f.jsxs)(G, {
                                children: [
                                    (0, f.jsx)(H, {
                                        large: this.props.large,
                                        background: (0, i.getTeamColor)(N.id),
                                        children: N.icon && (0, f.jsx)('i', {
                                            className: N.icon,
                                            style: {
                                                color: N.color.text
                                            }
                                        })
                                    }),
                                    (0, f.jsx)(I, {
                                        large: this.props.large,
                                        children: (0, f.jsx)(g.default, {
                                            text: N.id
                                        })
                                    })
                                ]
                            }),
                            (0, f.jsx)(J, {
                                large: this.props.large,
                                children: this.getTeamPlayerNames()
                            })
                        ]
                    }),
                    (0, f.jsx)(E, {
                        large: this.props.large,
                        children: (0, i.getMoney)(N.balance)
                    })
                ]
            });
        }
        constructor(..._M) {
            super(..._M), (0, e.default)(this, 'state', {
                drawerVisible: !1
            }), (0, e.default)(this, 'openDrawer', () => this.setState({
                drawerVisible: !0
            })), (0, e.default)(this, 'closeDrawer', () => this.setState({
                drawerVisible: !1
            })), (0, e.default)(this, 'getTeamPlayerNames', () => {
                const _M = this.props.data;
                return _A(_M.players);
            }), (0, e.default)(this, 'getColors', () => {
                const M = this.props.data,
                    {
                        theme: N
                    } = M,
                    O = this.props.themes,
                    P = O.filter(M => M.name === N).length > 0 ? O.filter(M => M.name === N)[0] : O.filter(M => 'Default' === M.name)[0];
                return 'Default' === P.name ? {
                    background: j.default.White,
                    text: j.default.Black
                } : {
                    background: P.question.background,
                    text: P.question.text
                };
            });
        }
    }
    var _M = L;
}), b.register('+gdru', function(c, d) {
    _k(c.exports, 'default', function() {
        return _k;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('bgvr8'),
        h = b('2x11J'),
        i = b('LEQ5w');
    let j = class extends i.Component {
        componentDidUpdate(_k) {
            _k.text !== this.props.text && (this.setState({
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
                }) : void this.requestTranslation().then(_k => {
                    this.props.translations[this.props.text] = _k, this.setState({
                        text: _k
                    });
                }).catch();
        }
        render() {
            return this.buildString();
        }
        constructor(..._k) {
            super(..._k), (0, e.default)(this, 'state', {
                text: this.props.text
            }), (0, e.default)(this, 'buildString', () => {
                let _k = this.state.text;
                return this.props.suffix && (_k += this.props.suffix), _k;
            }), (0, e.default)(this, 'requestTranslation', async () => {
                try {
                    return (await g.default.post('/api/translate', {
                        to: this.props.gameOptions.language,
                        text: this.props.text
                    })).data;
                } catch (_p) {
                    return this.props.text;
                }
            });
        }
    };
    j = (0, f.__decorate)([
        (0, h.inject)('translations', 'gameOptions'),
        h.observer
    ], j);
    var _k = j;
}), b.register('rD3N6', function(c, d) {
    _p(c.exports, 'default', function() {
        return b;
    });
    var e = {
        basic: '0px 4px 33px -6px rgba(0, 0, 0, 0.46)',
        light: '0 4px 14px 0 rgba(0, 0, 0, 0.2)'
    };
}), b.register('c0jzk', function(c, d) {
    _p(c.exports, 'default', function() {
        return _p;
    });
    var e = b('1bFPu'),
        f = b('0hzx+'),
        g = b('ijg0s'),
        h = b('Li6uh'),
        i = b('3rMVL'),
        j = b('hEZVH'),
        k = b('LEQ5w'),
        l = b('Axq+p');
    let m;
    const n = _p => (0, f.jsx)(g.default, {
        title: _p.tooltip,
        placement: 'bottomRight',
        children: (0, f.jsx)(_q, {
            onClick: _p.handleClick,
            backgroundColor: _p.backgroundColor,
            children: (0, f.jsx)('i', {
                className: _p.icon
            })
        })
    });
    class o extends k.Component {
        render() {
            const _p = void 0 === this.props.playerBalance ? `${ this.props.playerStones } stones` : (0, i.getMoney)(this.props.playerBalance || 0);
            return (0, f.jsxs)('div', {
                style: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    (0, f.jsxs)('div', {
                        style: {
                            fontWeight: 'bold',
                            fontSize: 40,
                            flex: 1,
                            marginRight: 50,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        },
                        children: [
                            this.props.playerName,
                            ' ',
                            (0, f.jsxs)('span', {
                                style: {
                                    opacity: 0.8
                                },
                                children: [
                                    '(',
                                    _p,
                                    ')'
                                ]
                            })
                        ]
                    }),
                    (0, f.jsxs)('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        },
                        children: [
                            (0, f.jsx)(n, {
                                icon: 'fas fa-user-slash',
                                handleClick: this.kickPlayer,
                                tooltip: 'Remove From Game',
                                backgroundColor: '#c62828'
                            }),
                            (0, f.jsx)(n, {
                                icon: 'fas fa-plus',
                                handleClick: this.increaseBalance,
                                tooltip: 'Increase Balance by 10%',
                                backgroundColor: '#1b5e20'
                            }),
                            (0, f.jsx)(n, {
                                icon: 'fas fa-minus',
                                handleClick: this.decreaseBalance,
                                tooltip: 'Decrease Balance By 10%',
                                backgroundColor: '#ac1900'
                            }),
                            (0, f.jsx)(n, {
                                icon: 'fas fa-snowflake',
                                handleClick: this.freezePlayer,
                                tooltip: 'Freeze',
                                backgroundColor: '#424242'
                            })
                        ]
                    })
                ]
            });
        }
        constructor(..._r) {
            super(..._r), (0, e.default)(this, 'kickPlayer', () => {
                (0, i.banPlayer)(this.props.playerId), this.props.close();
            }), (0, e.default)(this, 'increaseBalance', () => {
                (0, i.send)(h.default.leaderboardChangeBalance, {
                    balancePercentageChange: 0.1,
                    playerId: this.props.playerId
                }), this.props.close();
            }), (0, e.default)(this, 'decreaseBalance', () => {
                (0, i.send)(h.default.leaderboardChangeBalance, {
                    balancePercentageChange: -0.1,
                    playerId: this.props.playerId
                }), this.props.close();
            }), (0, e.default)(this, 'freezePlayer', () => {
                (0, i.send)(h.default.leaderboardFreezePlayer, {
                    playerId: this.props.playerId
                }), this.props.close();
            });
        }
    }
    var _p = o;
    const _q = l.default.div(m || (m = (_r => _r)`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  display: flex;
  margin-right: 7px;
  justify-content: center;
  align-items: center;
  background: ${ 0 };
  color: ${ 0 };
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border-width: 4px;
  }
`), _r => _r.backgroundColor, j.default.White);
}), b.register('BAkC1', function(c, d) {
    _r(c.exports, 'default', function() {
        return _m;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('LEclU'),
        i = b('YU+VE');
    let j;
    const k = g.default.div(j || (j = (_r => _r)`
  min-height: 0;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`));
    class l extends f.Component {
        render() {
            return (0, e.jsxs)(k, {
                children: [
                    (0, e.jsx)(i.default, {}),
                    (0, e.jsx)(h.default, {})
                ]
            });
        }
    }
    var _m = l;
}), b.register('LEclU', function(c, d) {
    _r(c.exports, 'default', function() {
        return _r;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('rD3N6'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('R6gfH'),
        l = b('Axq+p'),
        m = b('4uam/'),
        n = b('3rMVL');
    let o;
    const p = l.default.div(o || (o = (_r => _r)`
  height: 45%;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 10px;
  box-shadow: ${ 0 };
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
`), h.default.basic);
    let q = class extends j.Component {
        render() {
            return this.getContent();
        }
        constructor(..._r) {
            super(..._r), (0, e.default)(this, 'getContent', () => this.props.withoutContainer ? this.getFeed() : (0, g.jsx)(p, {
                children: this.getFeed()
            })), (0, e.default)(this, 'getFeed', () => {
                const _r = this.props.gameValues.activityItems.slice().reverse();
                return (0, g.jsx)(k.default, {
                    enterAnimation: 'accordionVertical',
                    style: {
                        padding: 8
                    },
                    children: _r.map(_r => (0, g.jsx)(m.default, {
                        customFont: this.props.customFont,
                        item: _r
                    }, 'ai-' + _r.key))
                });
            });
        }
    };
    q = (0, f.__decorate)([
        (0, i.inject)('gameValues'),
        i.observer
    ], q);
    var _r = _r => (0, g.jsx)(n.HideIfTabbedAway, {
        children: (0, g.jsx)(q, {
            ..._r
        })
    });
}), b.register('4uam/', function(c, d) {
    _r(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('+gdru'),
        g = b('hEZVH'),
        h = b('RMEzW'),
        i = b('LEQ5w'),
        j = b('Axq+p');
    let k, l, m = _r => _r;
    const n = j.default.div(k || (k = m`
  color: ${ 0 };
  margin-bottom: 5px;
  font-size: 21px;
  padding: 5px;
  box-sizing: border-box;
`), g.default.White),
        o = j.default.span(l || (l = m`
  color: ${ 0 };
  font-weight: 800;
`), _r => _r.customColor ? _r.customColor : g.default.Gold);
    class p extends i.Component {
        render() {
            return (0, e.jsxs)(n, {
                style: {
                    fontFamily: this.props.customFont || h.default.fontFamilyName
                },
                children: [
                    (0, e.jsx)(o, {
                        customColor: this.props.item.customTextColor,
                        children: this.props.item.name + ' '
                    }),
                    (0, e.jsx)('span', {
                        children: (0, e.jsx)(f.default, {
                            text: this.props.item.action
                        })
                    })
                ]
            });
        }
    }
    var _q = p;
}), b.register('YU+VE', function(c, d) {
    _r(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('3rMVL'),
        g = b('rD3N6'),
        h = b('2x11J'),
        i = b('LEQ5w'),
        j = b('Axq+p'),
        k = b('B/Kc7'),
        l = b('S1NHD'),
        m = b('sjRDa');
    let n;
    const o = i.lazy(() => b('Bm7jt')),
        p = j.default.div(n || (n = (_r => _r)`
  height: 55%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 8px;
  box-shadow: ${ 0 };
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
`), g.default.basic);
    var _q = (0, h.observer)(() => {
        const {
            innerWidth: _r,
            innerHeight: s
        } = (0, l.useWindowSize)(), {
            players: t
        } = i.useContext(m.default), u = (0, f.inThanosMode)() ? t.totalStones : t.totalBalance;
        return (0, e.jsxs)(p, {
            id: 'gimkit-balance-tracker',
            children: [
                (0, e.jsx)(f.HideIfTabbedAway, {
                    children: (0, e.jsx)(k.default, {
                        width: _r,
                        height: s,
                        balance: u
                    })
                }),
                (0, e.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, e.jsx)(o, {
                        balance: u
                    })
                })
            ]
        });
    });
}), b.register('B/Kc7', function(c, d) {
    _x(c.exports, 'default', function() {
        return _x;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('3rMVL'),
        i = b('RMEzW'),
        j = b('rD3N6'),
        k = b('2x11J'),
        l = b('LEQ5w'),
        m = b('0xKZw'),
        n = b('Axq+p'),
        o = b('6XgQB1');
    let p, q, r = _x => _x;
    const s = _x => (0, h.getMoney)(_x),
        t = _x => `${ _x } ${ (0, h.plural)('stone', _x) }`,
        u = n.default.div(p || (p = r`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${ 0 };
`), i.default.black),
        v = n.default.div(q || (q = r`
  font-size: ${ 0 }px;
  background: rgba(0, 0, 0, 0.9);
  padding: 4vh 5vw;
  line-height: 1;
  border-radius: calc(1vw + 1vh);
  box-shadow: ${ 0 };
  z-index: 5;
`), _x => _x.fontSize, j.default.basic);
    let w = class extends l.Component {
        static getDerivedStateFromProps(_x, y) {
            return {
                lastBalance: y.currentBalance,
                currentBalance: _x.balance
            };
        }
        componentDidUpdate() {
            this.props.gameOptions.goal.type === o.GameGoal.allIn && this.state.currentBalance >= this.props.gameOptions.goal.value && (0, h.endGame)();
        }
        render() {
            const x = (0, h.inThanosMode)() ? t : s,
                y = (b = this.props.width, d = this.props.height, e = x(this.state.currentBalance).length, (b + d) / 2 / (e + (e < 3 ? 4 : 2)) * 0.9);
            var z, A, B;
            return (0, g.jsx)(u, {
                children: (0, g.jsx)(v, {
                    fontSize: y,
                    children: (0, g.jsx)(_d(m), {
                        start: this.state.lastBalance,
                        end: this.state.currentBalance,
                        formattingFn: (0, h.inThanosMode)() ? t : s,
                        duration: 0.6
                    })
                })
            });
        }
        constructor(..._c) {
            super(..._c), (0, e.default)(this, 'state', {
                lastBalance: 0,
                currentBalance: 0
            });
        }
    };
    w = (0, f.__decorate)([
        (0, k.inject)('gameOptions'),
        k.observer
    ], w);
    var _x = w;
}), b.register('0xKZw', function(_c, _d) {
    Object.defineProperty(_c.exports, '__esModule', {
        value: !0
    });
    var e = b('LEQ5w'),
        f = b('yO5St');

    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function(l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }

    function g(h) {
        for (var i = 1; i < arguments.length; i++) {
            var j = null != arguments[i] ? arguments[i] : {};
            i % 2 ? _r(Object(j), !0).forEach(function(k) {
                _g(h, k, j[k]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(j)) : _r(Object(j)).forEach(function(k) {
                Object.defineProperty(h, k, Object.getOwnPropertyDescriptor(j, k));
            });
        }
        return h;
    }

    function _g(h, i, j) {
        return i in h ? Object.defineProperty(h, i, {
            value: j,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : h[i] = j, h;
    }

    function g() {
        return g = Object.assign ? Object.assign.bind() : function(h) {
            for (var i = 1; i < arguments.length; i++) {
                var j = arguments[i];
                for (var k in j)
                    Object.prototype.hasOwnProperty.call(j, k) && (h[k] = j[k]);
            }
            return h;
        }, g.apply(this, arguments);
    }

    function g(h, i) {
        if (null == h)
            return {};
        var j, k, l = function(m, n) {
            if (null == m)
                return {};
            var o, p, q = {},
                _r = Object.keys(m);
            for (p = 0; p < _r.length; p++)
                o = _r[p], n.indexOf(o) >= 0 || (q[o] = m[o]);
            return q;
        }(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (l[j] = h[j]);
        }
        return l;
    }
    var g = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? e.useLayoutEffect : e.useEffect;

    function h(i) {
        var j = e.useRef(i);
        return g(function() {
            j.current = i;
        }), e.useCallback(function() {
            for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                l[m] = arguments[m];
            return j.current.apply(void 0, l);
        }, []);
    }
    var h = [
            'ref',
            'startOnMount',
            'enableReinitialize',
            'delay',
            'onEnd',
            'onStart',
            'onPauseResume',
            'onReset',
            'onUpdate'
        ],
        i = {
            decimal: '.',
            delay: null,
            prefix: '',
            suffix: '',
            duration: 2,
            start: 0,
            startOnMount: !0,
            enableReinitialize: !0
        },
        j = function(k) {
            var l = e.useMemo(function() {
                    return _F(_F({}, i), k);
                }, [k]),
                m = l.ref,
                n = l.startOnMount,
                o = l.enableReinitialize,
                p = l.delay,
                q = l.onEnd,
                r = l.onStart,
                s = l.onPauseResume,
                t = l.onReset,
                u = l.onUpdate,
                v = _I(l, h),
                w = e.useRef(),
                x = e.useRef(),
                y = e.useRef(!1),
                z = _K(function() {
                    return function(A, B) {
                        var C = B.decimal,
                            D = B.decimals,
                            E = B.duration,
                            _F = B.easingFn,
                            G = B.end,
                            H = B.formattingFn,
                            _I = B.numerals,
                            J = B.prefix,
                            _K = B.separator,
                            L = B.start,
                            M = B.suffix,
                            N = B.useEasing,
                            O = B.enableScrollSpy,
                            P = B.scrollSpyDelay,
                            Q = B.scrollSpyOnce;
                        return new f.CountUp(A, G, {
                            startVal: L,
                            duration: E,
                            decimal: C,
                            decimalPlaces: D,
                            easingFn: _F,
                            formattingFn: H,
                            numerals: _I,
                            separator: _K,
                            prefix: J,
                            suffix: M,
                            useEasing: N,
                            useGrouping: !!_K,
                            enableScrollSpy: O,
                            scrollSpyDelay: P,
                            scrollSpyOnce: Q
                        });
                    }('string' == typeof m ? m : m.current, v);
                }),
                A = _l(function(B) {
                    var C = w.current;
                    if (C && !B)
                        return C;
                    var D = z();
                    return w.current = D, D;
                }),
                B = _l(function() {
                    var C = function() {
                        return A(!0).start(function() {
                            null == q || q({
                                pauseResume: _C,
                                reset: _D,
                                start: _F,
                                update: _E
                            });
                        });
                    };
                    p && p > 0 ? x.current = setTimeout(C, 1000 * p) : C(), null == r || r({
                        pauseResume: _C,
                        reset: _D,
                        update: _E
                    });
                }),
                _C = _l(function() {
                    A().pauseResume(), null == s || s({
                        reset: _D,
                        start: _F,
                        update: _E
                    });
                }),
                _D = _l(function() {
                    A().el && (x.current && clearTimeout(x.current), A().reset(), null == t || t({
                        pauseResume: _C,
                        start: _F,
                        update: _E
                    }));
                }),
                _E = _l(function(F) {
                    A().update(F), null == u || u({
                        pauseResume: _C,
                        reset: _D,
                        start: _F
                    });
                }),
                _F = _l(function() {
                    _D(), B();
                }),
                G = _l(function(H) {
                    n && (H && _D(), B());
                });
            return e.useEffect(function() {
                y.current ? o && G(!0) : (y.current = !0, G());
            }, [
                o,
                y,
                G,
                p,
                k.start,
                k.suffix,
                k.prefix,
                k.duration,
                k.separator,
                k.decimals,
                k.decimal,
                k.formattingFn
            ]), e.useEffect(function() {
                return function() {
                    _D();
                };
            }, [_D]), {
                start: _F,
                pauseResume: _C,
                reset: _D,
                update: _E,
                getCountUp: A
            };
        },
        k = [
            'className',
            'redraw',
            'containerProps',
            'children',
            'style'
        ];
    _c.exports.default = function(l) {
        var m = l.className,
            n = l.redraw,
            o = l.containerProps,
            p = l.children,
            q = l.style,
            r = _t(l, k),
            s = e.useRef(null),
            t = e.useRef(!1),
            u = j(_q(_q({}, r), {}, {
                ref: s,
                startOnMount: 'function' != typeof p || 0 === l.delay,
                enableReinitialize: !1
            })),
            v = u.start,
            w = u.reset,
            x = u.update,
            y = u.pauseResume,
            z = u.getCountUp,
            A = _l(function() {
                v();
            }),
            B = _l(function(C) {
                l.preserveValue || w(), x(C);
            }),
            C = _l(function() {
                'function' != typeof l.children || s.current instanceof Element ? z() : console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
            });
        e.useEffect(function() {
            C();
        }, [C]), e.useEffect(function() {
            t.current && B(l.end);
        }, [
            l.end,
            B
        ]);
        var D = n && l;
        return e.useEffect(function() {
            n && t.current && A();
        }, [
            A,
            n,
            D
        ]), e.useEffect(function() {
            !n && t.current && A();
        }, [
            A,
            n,
            l.start,
            l.suffix,
            l.prefix,
            l.duration,
            l.separator,
            l.decimals,
            l.decimal,
            l.className,
            l.formattingFn
        ]), e.useEffect(function() {
            t.current = !0;
        }, []), 'function' == typeof p ? p({
            countUpRef: s,
            start: v,
            reset: w,
            update: x,
            pauseResume: y,
            getCountUp: z
        }) : e.createElement('span', _s({
            className: m,
            ref: s,
            style: q
        }, o), void 0 !== l.start ? z().formattingFn(l.start) : '');
    }, _c.exports.useCountUp = j;
}), b.register('yO5St', function(c, d) {
    _e(c.exports, 'CountUp', function() {
        return _j;
    }, function(_e) {
        return _j = _e;
    });
    var e = function() {
            return (e = Object.assign || function(f) {
                for (var g, h = 1, i = arguments.length; h < i; h++)
                    for (var _j in g = arguments[h])
                        Object.prototype.hasOwnProperty.call(g, _j) && (f[_j] = g[_j]);
                return f;
            }).apply(this, arguments);
        },
        f = function() {
            function g(h, i, j) {
                var k = this;
                this.endVal = i, this.options = j, this.version = '2.3.2', this.defaults = {
                    startVal: 0,
                    decimalPlaces: 0,
                    duration: 2,
                    useEasing: !0,
                    useGrouping: !0,
                    smartEasingThreshold: 999,
                    smartEasingAmount: 333,
                    separator: ',',
                    decimal: '.',
                    prefix: '',
                    suffix: '',
                    enableScrollSpy: !1,
                    scrollSpyDelay: 200,
                    scrollSpyOnce: !1
                }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = '', this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(l) {
                    k.startTime || (k.startTime = l);
                    var m = l - k.startTime;
                    k.remaining = k.duration - m, k.useEasing ? k.countDown ? k.frameVal = k.startVal - k.easingFn(m, 0, k.startVal - k.endVal, k.duration) : k.frameVal = k.easingFn(m, k.startVal, k.endVal - k.startVal, k.duration) : k.frameVal = k.startVal + (k.endVal - k.startVal) * (m / k.duration);
                    var n = k.countDown ? k.frameVal < k.endVal : k.frameVal > k.endVal;
                    k.frameVal = n ? k.endVal : k.frameVal, k.frameVal = Number(k.frameVal.toFixed(k.options.decimalPlaces)), k.printValue(k.frameVal), m < k.duration ? k.rAF = requestAnimationFrame(k.count) : null !== k.finalEndVal ? k.update(k.finalEndVal) : k.callback && k.callback();
                }, this.formatNumber = function(l) {
                    var m, n, o, p, _q = l < 0 ? '-' : '';
                    m = Math.abs(l).toFixed(k.options.decimalPlaces);
                    var r = (m += '').split('.');
                    if (n = r[0], o = r.length > 1 ? k.options.decimal + r[1] : '', k.options.useGrouping) {
                        p = '';
                        for (var _s = 0, _t = n.length; _s < _t; ++_s)
                            0 !== _s && _s % 3 == 0 && (p = k.options.separator + p), p = n[_t - _s - 1] + p;
                        n = p;
                    }
                    return k.options.numerals && k.options.numerals.length && (n = n.replace(/[0-9]/g, function(s) {
                        return k.options.numerals[+s];
                    }), o = o.replace(/[0-9]/g, function(s) {
                        return k.options.numerals[+s];
                    })), _q + k.options.prefix + n + o + k.options.suffix;
                }, this.easeOutExpo = function(l, m, n, o) {
                    return n * (1 - Math.pow(2, -10 * l / o)) * 1024 / 1023 + m;
                }, this.options = e(e({}, this.defaults), j), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, '' === this.options.separator && (this.options.useGrouping = !1), this.el = 'string' == typeof h ? document.getElementById(h) : h, this.el ? this.printValue(this.startVal) : this.error = '[CountUp] target is null or undefined', 'undefined' != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, h) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                    return k.handleScroll(k);
                }), window.onscroll = function() {
                    window.onScrollFns.forEach(function(l) {
                        return l();
                    });
                }, this.handleScroll(this)));
            }
            return _g.prototype.handleScroll = function(_g) {
                if (_g && window && !_g.once) {
                    var h = window.innerHeight + window.scrollY,
                        i = _g.el.getBoundingClientRect(),
                        j = i.top + i.height + window.pageYOffset;
                    j < h && j > window.scrollY && _g.paused ? (_g.paused = !1, setTimeout(function() {
                        return _g.start();
                    }, _g.options.scrollSpyDelay), _g.options.scrollSpyOnce && (_g.once = !0)) : window.scrollY > j && !_g.paused && _g.reset();
                }
            }, _g.prototype.determineDirectionAndSmartEasing = function() {
                var _g = this.finalEndVal ? this.finalEndVal : this.endVal;
                this.countDown = this.startVal > _g;
                var h = _g - this.startVal;
                if (Math.abs(h) > this.options.smartEasingThreshold && this.options.useEasing) {
                    this.finalEndVal = _g;
                    var i = this.countDown ? 1 : -1;
                    this.endVal = _g + i * this.options.smartEasingAmount, this.duration = this.duration / 2;
                } else
                    this.endVal = _g, this.finalEndVal = null;
                null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
            }, _g.prototype.start = function(_g) {
                this.error || (this.callback = _g, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
            }, _g.prototype.pauseResume = function() {
                this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
            }, _g.prototype.reset = function() {
                cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
            }, _g.prototype.update = function(_g) {
                cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(_g), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
            }, _g.prototype.printValue = function(_g) {
                var h = this.formattingFn(_g);
                'INPUT' === this.el.tagName ? this.el.value = h : 'text' === this.el.tagName || 'tspan' === this.el.tagName ? this.el.textContent = h : this.el.innerHTML = h;
            }, _g.prototype.ensureNumber = function(_g) {
                return 'number' == typeof _g && !isNaN(_g);
            }, _g.prototype.validateValue = function(_g) {
                var h = Number(_g);
                return this.ensureNumber(h) ? h : (this.error = '[CountUp] invalid start or end value: '.concat(_g), null);
            }, _i.prototype.resetDuration = function() {
                this.startTime = null, this.duration = 1000 * Number(this.options.duration), this.remaining = this.duration;
            }, _i;
        }();
}), b.register('S1NHD', function(c, d) {
    _i(c.exports, 'useWindowSize', function() {
        return _h;
    });
    var e = b('LEQ5w'),
        f = b('dGr6Q'),
        g = {
            innerHeight: null,
            innerWidth: null,
            outerHeight: null,
            outerWidth: null
        };

    function h() {
        return {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth
        };
    }

    function _h() {
        var _i = (0, e.useState)(function() {
                return 'undefined' != typeof window ? _h() : g;
            }),
            j = _i[0],
            k = _i[1];
        return (0, f.useIsomorphicEffect)(function() {
            function l() {
                k(_h());
            }
            if ('undefined' != typeof window)
                return window.addEventListener('resize', _i),
                    function() {
                        window.removeEventListener('resize', _i);
                    };
            console.warn('useWindowSize: window is undefined.');
        }, []), j;
    }
}), b.register('dGr6Q', function(c, d) {
    _c(c.exports, 'useIsomorphicEffect', function() {
        return _f;
    });
    var e = b('LEQ5w'),
        _f = 'undefined' == typeof window ? e.useEffect : e.useLayoutEffect;
}), b.register('sjRDa', function(c, d) {
    _c(c.exports, 'default', function() {
        return _g;
    });
    var e = b('LEQ5w'),
        f = b('e3EXx');
    var _g = e.createContext(f.default);
}), b.register('Bm7jt', function(_c, d) {
    _c.exports = import('./' + b('HmN9A').resolve('gBSGY')).then(() => b('9LbWH'));
}), b.register('vVA4Y', function(c, d) {
    _m(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('LEclU'),
        g = b('xEQXp');
    b('LEQ5w');
    var _h = b('Axq+p'),
        i = b('aqqAj'),
        j = b('+i8ep'),
        k = b('PMl60');
    let _l, m, n, o, p = _m => _m;
    var _q = () => ((0, j.useDidMount)(() => {
        (0, k.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    }), (0, e.jsxs)(_r, {
        children: [
            (0, e.jsx)(g.default, {}),
            (0, e.jsxs)(_s, {
                children: [
                    (0, e.jsx)(_t, {
                        children: (0, e.jsx)(i.default, {})
                    }),
                    (0, e.jsx)(_u, {
                        children: (0, e.jsx)(f.default, {
                            withoutContainer: !0
                        })
                    })
                ]
            })
        ]
    }));
    const _r = _h.default.div(_l || (_l = p`
  height: 100vh;
  width: 100%;
  display: flex;
  background: #151515;
  flex-direction: column;
`)),
        _s = _h.default.div(m || (m = p`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`)),
        _t = _h.default.div(n || (n = p`
  font-family: ${ 0 };
  height: 65%;
  width: 100%;
`), '\'Bowlby One SC\', cursive'),
        _u = _h.default.div(o || (o = p`
  height: 35%;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 7px;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`));
}), b.register('aqqAj', function(c, d) {
    _m(c.exports, 'getImage', function() {
        return _o;
    }), _m(c.exports, 'default', function() {
        return _q;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('3rMVL'),
        h = b('hEZVH'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('Axq+p'),
        l = b('6LUok');
    let m;
    const n = 'halloween-zombie',
        _o = _m => _m === n ? (0, g.getAssetPath)('zombie-head.svg') : (0, g.getAssetPath)('support.svg');
    let p = class extends j.Component {
        render() {
            return (0, f.jsx)(_r, {
                children: this.props.entities.defendingHomebase.map(_m => {
                    return (0, f.jsx)(l.default, {
                        backgroundColor: (c = _m.id, 'halloween-human' === c ? '#003c8f' : c === n ? '#494949' : h.default.Black),
                        color: h.default.White,
                        maxHealth: _m.maxHealth,
                        currentHealth: _m.health,
                        name: _m.name,
                        image: _o(_m.id)
                    }, `base-${ _m.id }`);
                    var q;
                })
            });
        }
    };
    p = (0, e.__decorate)([
        (0, i.inject)('entities'),
        i.observer
    ], p);
    var _q = p;
    const _r = k.default.div(m || (m = (_m => _m)`
  width: 100%;
  height: 100%;
  display: flex;
`));
}), b.register('6LUok', function(c, d) {
    _m(c.exports, 'default', function() {
        return _m;
    });
    var e = b('0hzx+'),
        f = b('+gdru'),
        g = b('8y7vq'),
        h = b('3rMVL'),
        i = b('RMEzW'),
        j = b('LEQ5w'),
        k = b('sHRDd');
    class l extends j.Component {
        render() {
            const _m = this.props,
                n = _m.currentHealth / _m.maxHealth * 100;
            return (0, e.jsxs)('div', {
                style: {
                    width: '50%',
                    height: '100%',
                    padding: 25,
                    boxSizing: 'border-box',
                    color: _m.color,
                    background: _m.backgroundColor,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: [
                    (0, e.jsx)('img', {
                        src: _m.image,
                        style: {
                            width: 150
                        }
                    }),
                    (0, e.jsx)('div', {
                        style: {
                            fontSize: 50
                        },
                        children: _m.name
                    }),
                    (0, e.jsx)(g.default, {
                        percent: n,
                        status: 'active',
                        showInfo: !1,
                        style: {
                            width: '80%',
                            maxWidth: 155,
                            zoom: 2.7,
                            marginTop: -9
                        },
                        trailColor: k.default.White,
                        strokeColor: '#66bb6a'
                    }),
                    (0, e.jsxs)('div', {
                        style: {
                            fontFamily: i.default.fontFamilyName,
                            fontWeight: 'bold',
                            fontSize: 18,
                            opacity: 0.7,
                            marginTop: -8
                        },
                        children: [
                            (0, h.numberWithCommas)(_m.currentHealth),
                            ' /',
                            ' ',
                            (0, h.numberWithCommas)(_m.maxHealth),
                            ' ',
                            (0, e.jsx)(f.default, {
                                text: 'health'
                            })
                        ]
                    })
                ]
            });
        }
    }
    var _m = l;
}), b.register('eNDcU', function(c, d) {
    _t(c.exports, 'default', function() {
        return _t;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('Yv86d'),
        i = b('3rMVL'),
        j = b('RMEzW'),
        k = b('2x11J'),
        l = b('LEQ5w'),
        m = b('Axq+p'),
        n = b('ovrEk'),
        o = b('UpkvO'),
        p = b('3w/WK'),
        q = b('xoM3L');
    let r, s = class extends l.Component {
        componentDidMount() {
            this.sound = (0, i.playSound)(h.default.lava.lavaRumble, {});
        }
        componentWillUnmount() {
            this.sound && (0, i.stopSound)(h.default.lava.lavaRumble);
        }
        render() {
            const {
                lava: _t
            } = this.props.entities;
            return _t ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsxs)(_u, {
                        children: [
                            (0, g.jsx)(p.default, {
                                buildHeight: _t.buildHeight,
                                lavaHeight: _t.lavaHeight,
                                seconds: _t.secondsLasted,
                                gameCode: this.props.gameValues.gameCode
                            }),
                            (0, g.jsx)(q.default, {
                                buildHeight: _t.buildHeight,
                                lavaHeight: _t.lavaHeight,
                                lavaSpeed: _t.lavaIncreaseSpeed,
                                buildsInProgress: _t.buildsInProgress
                            })
                        ]
                    }),
                    (0, g.jsx)(n.default, {}),
                    (0, g.jsx)(o.default, {})
                ]
            }) : null;
        }
        constructor(..._I) {
            super(..._I), (0, e.default)(this, 'sound', null);
        }
    };
    s = (0, f.__decorate)([
        (0, k.inject)('entities', 'gameValues'),
        k.observer
    ], s);
    var _t = s;
    const _u = m.default.div.attrs({
        className: 'animated fadeIn'
    })(r || (r = (_I => _I)`
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: 2;
  display: flex;
  font-family: ${ 0 };
`), j.default.fontFamilyName);
}), b.register('ovrEk', function(c, d) {
    _I(c.exports, 'default', function() {
        return _h;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('Axq+p');
    let g;
    var _h = () => (0, e.jsx)(_i, {
        children: (0, e.jsxs)('div', {
            className: 'lavaBackground',
            children: [
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {}),
                (0, e.jsx)('span', {})
            ]
        })
    });
    const _i = f.default.div(g || (g = (_I => _I)`
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
`));
}), b.register('UpkvO', function(c, d) {
    _I(c.exports, 'default', function() {
        return _p;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('RMEzW'),
        h = b('2x11J'),
        i = b('LEQ5w'),
        j = b('Axq+p');
    let k, l, m, n = _I => _I,
        o = class extends i.Component {
            render() {
                return this.props.entities.lava && this.props.entities.lava.lavaIncreasePaused ? (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(_r, {}),
                        (0, f.jsx)(_s, {
                            children: 'Lava Paused!'
                        })
                    ]
                }) : null;
            }
        };
    o = (0, e.__decorate)([
        (0, h.inject)('entities'),
        h.observer
    ], o);
    var _p = o;
    const _q = j.default.div.attrs({
            className: 'animated fadeIn'
        })(k || (k = n`
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
  font-family: ${ 0 };
`), g.default.fontFamilyName),
        _r = j.default.i.attrs({
            className: 'fas fa-pause-circle'
        })(l || (l = n`
  font-size: 100px;
  color: #f5f5f5;
`)),
        _s = j.default.div(m || (m = n`
  margin-left: 30px;
  font-size: 57px;
  font-weight: bold;
`));
}), b.register('3w/WK', function(c, d) {
    _I(c.exports, 'getTimerFromSeconds', function() {
        return _z;
    }), _I(c.exports, 'default', function() {
        return _A;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('fMFp4'),
        i = b('TwXYL'),
        j = b('3rMVL'),
        k = b('LEclU');
    let l, m, n, o, p, q, r, s, t, u, v, w, x, y = _I => _I;
    const _z = _I => {
        const A = (_I, A) => (Math.pow(10, A) + ~~_I).toString().substring(1),
            B = _I % 60;
        return `${ A(Math.floor(_I / 60), 2) }:${ A(B, 2) }`;
    };
    var _A = _I => {
        const {
            buildHeight: B,
            lavaHeight: C,
            seconds: D
        } = _I, E = !!('undefined' != typeof window && window && window.navigator && navigator.userAgent.indexOf('Firefox') > 0);
        f.useEffect(() => {
            B < C && (0, j.endGame)();
        }, [C]);
        const F = ((_I, _d) => {
                if (_d / _I > 0.8)
                    return Math.round(1.2 * _I);
                const G = Math.round(_I).toString().length;
                let H = '';
                for (let _I = 0; _I < G; _I++)
                    H += '9';
                let J = Number(H) + 1;
                return J *= 1.1, Math.round(J);
            })(B, C),
            G = Math.round(B / F * 100),
            H = Math.round(C / F * 100);
        return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(_B, {
                children: [
                    (0, e.jsxs)('div', {
                        className: 'maxWidth',
                        style: {
                            transform: 'translateY(156px)'
                        },
                        children: [
                            (0, e.jsx)(_d(h), {
                                fill: 'rgba(244,114,9,0.8)',
                                paused: !1,
                                options: {
                                    height: 10,
                                    amplitude: 8,
                                    speed: 0.45,
                                    points: 6
                                }
                            }),
                            (0, e.jsx)(i.motion.div, {
                                initial: {
                                    height: 0
                                },
                                animate: {
                                    height: `${ H + 1 }vh`
                                },
                                transition: {
                                    duration: 2
                                },
                                style: {
                                    width: '100%',
                                    marginTop: E ? -7 : -6.5,
                                    background: 'linear-gradient(180deg, rgba(244,114,9,0.8) 0%, rgba(208,8,8,0.8) 100%)'
                                }
                            })
                        ]
                    }),
                    (0, e.jsx)(_G, {
                        children: (0, e.jsxs)(_H, {
                            children: [
                                (0, e.jsxs)(_J, {
                                    children: [
                                        (0, e.jsxs)(_K, {
                                            children: [
                                                (0, j.numberWithCommas)(B),
                                                ' ',
                                                (0, j.plural)('block', B)
                                            ]
                                        }),
                                        (0, e.jsxs)(_L, {
                                            children: [
                                                (0, e.jsx)(_N, {}),
                                                (0, e.jsx)(_M, {
                                                    initial: {
                                                        height: 0
                                                    },
                                                    animate: {
                                                        height: `${ G }vh`
                                                    },
                                                    transition: {
                                                        duration: 2
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, e.jsx)(_I, {
                                    children: (0, e.jsx)(k.default, {
                                        withoutContainer: !0
                                    })
                                })
                            ]
                        })
                    }),
                    (0, e.jsx)(_C, {
                        children: (0, e.jsxs)(_D, {
                            children: [
                                (0, e.jsx)(_E, {
                                    children: _z(D)
                                }),
                                (0, e.jsxs)(_F, {
                                    children: [
                                        (0, e.jsx)('b', {
                                            children: 'Game Code:'
                                        }),
                                        ' ',
                                        _c.gameCode
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        });
    };
    const _B = g.default.div(l || (l = y`
  width: calc(100% - 350px);
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  overflow: hidden;
`)),
        _C = g.default.div(m || (m = y`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`)),
        _D = g.default.div(n || (n = y`
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
        _E = g.default.div(o || (o = y`
  font-size: 70px;
  line-height: 70px;
`)),
        _F = g.default.div(p || (p = y`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 5px;
`)),
        _G = g.default.div(q || (q = y`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
`)),
        _H = g.default.div(r || (r = y`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`)),
        _I = g.default.div(s || (s = y`
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
        _J = g.default.div(t || (t = y`
  transform: translateY(${ 0 }px);
  width: 250px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  z-index: -1;
`), 156),
        _K = g.default.div(u || (u = y`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
`)),
        _L = g.default.div(v || (v = y`
  background: url(${ 0 });
  background-size: 168px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px 0px 72px -21px rgba(194, 194, 194, 1);
  border-style: solid;
  border-width: 6px;
  border-color: rgba(255, 255, 255, 0.8);
  border-bottom-style: none;
  width: 100%;
`), (0, j.getAssetPath)('brickTexture.jpg')),
        _M = (0, g.default)(i.motion.div)(w || (w = y`
  width: 100%;
`)),
        _N = g.default.div(x || (x = y`
  width: 100%;
  height: ${ 0 }px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), 150);
}), b.register('fMFp4', function(_c, _d) {
    _c.exports, _c.exports = function(e, f) {
        function g(h) {
            return h && 'object' == typeof h && 'default' in h ? h : {
                default: h
            };
        }
        var g = a(e),
            h = a(f);

        function i(j, k) {
            for (var l = 0; l < k.length; l++) {
                var m = k[l];
                m.enumerable = m.enumerable || !1, m.configurable = !0, 'value' in m && (m.writable = !0), Object.defineProperty(j, m.key, m);
            }
        }

        function i(j, k, l) {
            return k in j ? Object.defineProperty(j, k, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : j[k] = l, j;
        }

        function i() {
            return (i = Object.assign || function(j) {
                for (var k = 1; k < arguments.length; k++) {
                    var l = arguments[k];
                    for (var m in l)
                        Object.prototype.hasOwnProperty.call(l, m) && (j[m] = l[m]);
                }
                return j;
            }).apply(this, arguments);
        }

        function i(j, k) {
            var l = Object.keys(j);
            if (Object.getOwnPropertySymbols) {
                var m = Object.getOwnPropertySymbols(j);
                k && (m = m.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(j, n).enumerable;
                })), l.push.apply(l, m);
            }
            return l;
        }

        function i(j) {
            return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
                return k.__proto__ || Object.getPrototypeOf(k);
            })(j);
        }

        function i(j, k) {
            return (i = Object.setPrototypeOf || function(l, m) {
                return l.__proto__ = m, l;
            })(j, k);
        }

        function i(j, k) {
            if (null == j)
                return {};
            var l, m, n = function(o, p) {
                if (null == o)
                    return {};
                var q, r, s = {},
                    t = Object.keys(o);
                for (r = 0; r < t.length; r++)
                    q = t[r], 0 <= p.indexOf(q) || (s[q] = o[q]);
                return s;
            }(j, k);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(j);
                for (m = 0; m < o.length; m++)
                    l = o[m], 0 <= k.indexOf(l) || Object.prototype.propertyIsEnumerable.call(j, l) && (n[l] = j[l]);
            }
            return n;
        }

        function i(j) {
            if (void 0 === j)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return j;
        }

        function i(j) {
            var k = function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ('function' == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                } catch (j) {
                    return !1;
                }
            }();
            return function() {
                var l, m = _p(j);
                if (k) {
                    var n = _p(this).constructor;
                    l = Reflect.construct(m, arguments, n);
                } else
                    l = m.apply(this, arguments);
                return function(n, o) {
                    return !o || 'object' != typeof o && 'function' != typeof o ? _m(n) : o;
                }(this, l);
            };
        }

        function i(j) {
            var k = j.options,
                l = _l(j, ['options']);
            return g.default.createElement(_i, _h({}, _j, k, l));
        }
        var _i = function() {
                ! function(j, k) {
                    if ('function' != typeof k && null !== k)
                        throw new TypeError('Super expression must either be null or a function');
                    j.prototype = Object.create(k && k.prototype, {
                        constructor: {
                            value: j,
                            writable: !0,
                            configurable: !0
                        }
                    }), k && _q(j, k);
                }(a, e.Component);
                var j = _n(a);

                function k(l) {
                    var m;
                    return function(n, o) {
                        if (!(n instanceof o))
                            throw new TypeError('Cannot call a class as a function');
                    }(this, k), _g(_m(m = j.call(this, l)), 'width', function() {
                        return m.container.current.offsetWidth;
                    }), _g(_m(m), 'height', function() {
                        return m.container.current.offsetHeight;
                    }), m.container = g.default.createRef(), m.state = {
                        path: ''
                    }, m.lastUpdate = 0, m.elapsed = 0, m.step = 0, m.update = m.update.bind(_m(m)), m;
                }
                return function(k, l, m) {
                    l && _p(k.prototype, l), m && _p(k, m);
                }(a, [{
                        key: 'calculateWavePoints',
                        value: function() {
                            for (var k = [], l = 0; l <= Math.max(this.props.points, 1); l++) {
                                var m = l / this.props.points * this.width(),
                                    n = (this.step + (l + l % this.props.points)) * this.props.speed * 100,
                                    o = Math.sin(n / 100) * this.props.amplitude,
                                    _p = Math.sin(n / 100) * o + this.props.height;
                                k.push({
                                    x: m,
                                    y: _p
                                });
                            }
                            return k;
                        }
                    },
                    {
                        key: 'buildPath',
                        value: function(k) {
                            function l(m, n) {
                                return ' C '.concat(m.x, ' ').concat(m.y, ' ').concat(m.x, ' ').concat(m.y, ' ').concat(n.x, ' ').concat(n.y);
                            }
                            var l = 'M '.concat(k[0].x, ' ').concat(k[0].y),
                                m = {
                                    x: (k[1].x - k[0].x) / 2,
                                    y: k[1].y - k[0].y + k[0].y + (k[1].y - k[0].y)
                                };
                            l += j(m, k[1]);
                            for (var n = m, o = 1; o < k.length - 1; o++)
                                l += j(n = {
                                    x: k[o].x - n.x + k[o].x,
                                    y: k[o].y - n.y + k[o].y
                                }, k[o + 1]);
                            return (l += ' L '.concat(this.width(), ' ').concat(this.height())) + ' L 0 '.concat(this.height(), ' Z');
                        }
                    },
                    {
                        key: 'redraw',
                        value: function() {
                            this.setState({
                                path: this.buildPath(this.calculateWavePoints())
                            });
                        }
                    },
                    {
                        key: 'draw',
                        value: function() {
                            if (!this.props.paused) {
                                var k = new Date();
                                this.elapsed += k - this.lastUpdate, this.lastUpdate = k;
                            }
                            this.step = this.elapsed * Math.PI / 1000, this.redraw();
                        }
                    },
                    {
                        key: 'update',
                        value: function() {
                            this.draw(), this.frameId && this.resume();
                        }
                    },
                    {
                        key: 'resume',
                        value: function() {
                            this.frameId = window.requestAnimationFrame(this.update), this.lastUpdate = new Date();
                        }
                    },
                    {
                        key: 'componentDidMount',
                        value: function() {
                            this.frameId || this.resume();
                        }
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function() {
                            window.cancelAnimationFrame(this.frameId), this.frameId = 0;
                        }
                    },
                    {
                        key: 'render',
                        value: function() {
                            var k = this.props,
                                l = k.style,
                                m = k.className,
                                n = k.fill,
                                o = (k.paused, k.children),
                                _p = k.id,
                                _q = (k.d, k.ref, _l(k, [
                                    'style',
                                    'className',
                                    'fill',
                                    'paused',
                                    'children',
                                    'id',
                                    'd',
                                    'ref'
                                ]));
                            return g.default.createElement('div', {
                                style: function(r) {
                                    for (var s = 1; s < arguments.length; s++) {
                                        var t = null != arguments[s] ? arguments[s] : {};
                                        s % 2 ? _i(Object(t), !0).forEach(function(u) {
                                            _g(r, u, t[u]);
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : _i(Object(t)).forEach(function(u) {
                                            Object.defineProperty(r, u, Object.getOwnPropertyDescriptor(t, u));
                                        });
                                    }
                                    return r;
                                }({
                                    width: '100%',
                                    display: 'inline-block'
                                }, l),
                                className: m,
                                id: _p,
                                ref: this.container
                            }, g.default.createElement('svg', {
                                width: '100%',
                                height: '100%',
                                version: '1.1',
                                xmlns: 'http://www.w3.org/2000/svg'
                            }, o, g.default.createElement('path', _h({
                                d: this.state.path,
                                fill: n
                            }, _q))));
                        }
                    }
                ]), a;
            }(),
            _j = {
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 3
            };
        return _o.defaultProps = {
            paused: !1,
            fill: '#fff'
        }, _o.propTypes = {
            paused: h.default.bool,
            fill: h.default.string,
            options: h.default.object
        }, _o;
    }(b('LEQ5w'), b('WPpLv'));
}), b.register('xoM3L', function(c, d) {
    _j(c.exports, 'default', function() {
        return _s;
    });
    var e = b('0hzx+'),
        f = b('VvyV1'),
        _g = b('ulE4q'),
        _h = b('fmVdR'),
        _i = b('Jjcl0'),
        j = b('Li6uh'),
        k = b('3rMVL'),
        _l = b('hEZVH'),
        _m = b('PMl60');
    b('LEQ5w');
    var _n = b('Axq+p'),
        _o = b('H4roK');
    let p, q, r = _j => _j;
    var _s = _j => (0, e.jsx)(_t, {
        children: (0, e.jsxs)(_u, {
            children: [
                (0, e.jsx)(_o.default, {
                    icon: 'fas fa-volcano',
                    title: 'Lava Height',
                    value: _j.lavaHeight,
                    label: (0, _m.plural)('block', _j.lavaHeight),
                    footer: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(_h.default, {
                                style: {
                                    background: _l.default.White,
                                    marginTop: 15,
                                    marginBottom: 15
                                }
                            }),
                            (0, e.jsx)(_g.default, {
                                onClick: () => {
                                    (0, k.send)(j.default.hostIncreaseLavaHeight, {
                                        amount: 0.1
                                    }), _i.default.success({
                                        message: 'Lava height increased by 10%!',
                                        placement: 'bottomRight'
                                    });
                                },
                                block: !0,
                                icon: (0, e.jsx)(f.default, {}),
                                type: 'primary',
                                children: 'Increase Lava Height by 10%'
                            })
                        ]
                    })
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, e.jsx)(_o.default, {
                    icon: 'fas fa-building',
                    title: 'Building Height',
                    value: _j.buildHeight,
                    label: (0, _m.plural)('block', _j.buildHeight)
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, e.jsx)(_o.default, {
                    icon: 'fas fa-tachometer-fast',
                    title: 'Lava Increase Speed',
                    value: _j.lavaSpeed,
                    label: `${ (0, _m.plural)('block', _j.lavaSpeed) } per second`
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, e.jsx)(_o.default, {
                    icon: 'fas fa-hammer',
                    title: 'Builds In Progress',
                    value: _j.buildsInProgress
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 30
                    }
                })
            ]
        })
    });
    const _t = _n.default.div(p || (p = r`
  width: 350px;
  height: 100%;
  overflow-y: auto;
  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: rgba(0, 0, 0, 0.2);
`)),
        _u = _n.default.div(q || (q = r`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
`));
}), b.register('VvyV1', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('jGPwZ'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'ArrowUpOutlined';
    var _j = f.forwardRef(i);
}), b.register('jGPwZ', function(c, d) {
    _z(c.exports, 'default', function() {
        return b;
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
                    d: 'M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z'
                }
            }]
        },
        name: 'arrow-up',
        theme: 'outlined'
    };
}), b.register('H4roK', function(c, d) {
    _z(c.exports, 'default', function() {
        return _p;
    });
    var e = b('0hzx+'),
        f = b('3rMVL');
    b('LEQ5w');
    var g = b('Axq+p');
    let h, i, j, k, l, m, n, o = _z => _z;
    var _p = _z => (0, e.jsxs)(_q, {
        children: [
            (0, e.jsxs)(_r, {
                children: [
                    (0, e.jsx)(_s, {
                        className: _z.icon
                    }),
                    (0, e.jsx)(_t, {
                        children: _z.title
                    })
                ]
            }),
            (0, e.jsxs)(_u, {
                children: [
                    (0, e.jsx)(_v, {
                        children: (0, f.numberWithCommas)(_z.value)
                    }),
                    _z.label ? (0, e.jsx)(_w, {
                        children: _z.label
                    }) : null,
                    _z.footer ? _z.footer : null
                ]
            })
        ]
    });
    const _q = g.default.div(h || (h = o`
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
        _r = g.default.div(i || (i = o`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 10px;
  padding-left: 20px;
`)),
        _s = g.default.i(j || (j = o`
  font-size: 15px;
  line-height: 15px;
  margin-right: 8px;
`)),
        _t = g.default.div(k || (k = o`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
`)),
        _u = g.default.div(l || (l = o`
  width: 100%;
  padding: 20px;
`)),
        _v = g.default.div(m || (m = o`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
`)),
        _w = g.default.div(n || (n = o`
  font-size: 16px;
  line-height: 16px;
  margin-top: 4px;
`));
}), b.register('oCa/T', function(c, d) {
    _z(c.exports, 'Container', function() {
        return _A;
    }), _z(c.exports, 'Content', function() {
        return _B;
    }), _z(c.exports, 'default', function() {
        return _z;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('hEZVH'),
        i = b('LEQ5w'),
        j = b('Axq+p'),
        k = b('urkHp'),
        l = b('iiotI'),
        m = b('R9rAP'),
        n = b('+yIKA'),
        o = b('eUoVu'),
        p = b('3rMVL'),
        q = b('Yv86d'),
        r = b('uqJZD'),
        s = b('2x11J'),
        t = b('ZGYFt'),
        u = b('PMl60');
    let v, w, x = _z => _z,
        y = class extends i.Component {
            componentDidMount() {
                (0, u.loadFont)('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'), setTimeout(() => {
                    (0, p.playSound)(q.default.imposter.spaceshipAmbience, {
                        volume: 0.16
                    });
                }, 1800);
            }
            render() {
                return (0, g.jsxs)(_A, {
                    children: [
                        (0, g.jsx)(k.default, {}),
                        (0, g.jsx)(_B, {
                            children: this.getContent()
                        })
                    ]
                });
            }
            constructor(..._z) {
                super(..._z), (0, e.default)(this, 'getContent', () => {
                    const {
                        status: _z
                    } = this.props.imposter;
                    return _z === t.ImposterStatus.intro ? (0, g.jsx)(r.default, {}) : _z === t.ImposterStatus.questions ? (0, g.jsx)(l.default, {}) : _z === t.ImposterStatus.discussion ? (0, g.jsx)(m.default, {}) : _z === t.ImposterStatus.voting ? (0, g.jsx)(n.default, {}) : _z === t.ImposterStatus.votingResult ? (0, g.jsx)(o.default, {}) : null;
                });
            }
        };
    y = (0, f.__decorate)([
        (0, s.inject)('imposter'),
        s.observer
    ], y);
    var _z = y;
    const _A = j.default.div(v || (v = x`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
  display: flex;
`), h.default.Black, h.default.White),
        _B = j.default.div(w || (w = x`
  flex: 1;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`));
}), b.register('urkHp', function(c, d) {
    _r(c.exports, 'default', function() {
        return _k;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('3rMVL');
    let i;
    class j extends f.Component {
        render() {
            return (0, e.jsxs)(_l, {
                children: [
                    (0, e.jsx)('div', {
                        className: 'stars'
                    }),
                    (0, e.jsx)('div', {
                        className: 'twinkling'
                    }),
                    (0, e.jsx)('div', {
                        className: 'clouds'
                    })
                ]
            });
        }
    }
    var _k = j;
    const _l = g.default.div(i || (i = (_r => _r)`
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
    background: #000 url('${ 0 }') repeat top
      center;
  }

  .twinkling {
    z-index: 1;
    background: transparent url('${ 0 }') repeat top
      center;
    animation: move-twink-back 200s linear infinite;
  }

  .clouds {
    z-index: 2;
    background:transparent url('${ 0 }') repeat top
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
`), (0, h.getAssetPath)('stars.png'), (0, h.getAssetPath)('twinkling.png'), (0, h.getAssetPath)('clouds.png'));
}), b.register('iiotI', function(c, d) {
    _r(c.exports, 'default', function() {
        return _r;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('3rMVL'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('Axq+p'),
        l = b('tpkn7'),
        m = b('eITA1');
    let n, o, p = _r => _r,
        q = class extends j.Component {
            componentDidUpdate() {
                this.checkForGameToEnd();
            }
            componentWillUnmount() {
                (0, h.getMusicTrack)().fade(0.27, 0, 100);
            }
            componentDidMount() {
                this.checkForGameToEnd(), this.shouldGameEnd() || (0, h.getMusicTrack)().fade(0, 0.27, 1000);
            }
            render() {
                return this.shouldGameEnd() ? null : (0, g.jsx)(_s, {
                    children: (0, g.jsxs)(_t, {
                        className: 'animated fadeIn',
                        children: [
                            (0, g.jsx)(l.default, {}),
                            (0, g.jsx)(m.default, {})
                        ]
                    })
                });
            }
            constructor(..._r) {
                super(..._r), (0, e.default)(this, 'checkForGameToEnd', () => {
                    this.shouldGameEnd() && (0, h.endGame)();
                }), (0, e.default)(this, 'shouldGameEnd', () => {
                    const {
                        meetingsLeft: _r,
                        impostersLeft: s
                    } = this.props.imposter;
                    return !_r || !s || _r < s;
                });
            }
        };
    q = (0, f.__decorate)([
        (0, i.inject)('imposter'),
        i.observer
    ], q);
    var _r = q;
    const _s = k.default.div(n || (n = p`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100vw;
`)),
        _t = k.default.div(o || (o = p`
  flex: 1;
  display: flex;
  overflow: hidden;
`));
}), b.register('tpkn7', function(c, d) {
    _B(c.exports, 'default', function() {
        return _B;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('fDlQt'),
        i = b('hEZVH'),
        j = b('LEQ5w'),
        k = b('Axq+p'),
        l = b('94edW'),
        m = b('+UyIc24'),
        n = b('ulE4q'),
        o = b('n1AK3'),
        p = b('2x11J'),
        q = b('3rMVL'),
        r = b('Li6uh'),
        s = b('+gdru');
    let t, u, v, w, x, y, z = _B => _B,
        A = class extends j.Component {
            render() {
                const _B = this.props.imposter.people.filter(_B => _B.markedAsClear);
                return (0, g.jsxs)(_C, {
                    children: [
                        (0, g.jsxs)(_D, {
                            children: [
                                this.canShowClearList() ? (0, g.jsx)(_F, {
                                    children: (0, g.jsx)(s.default, {
                                        text: h.imposterStrings.clearList
                                    })
                                }) : null,
                                _B.map(_B => (0, g.jsx)(_G, {
                                    children: _B.name
                                }, `clear-${ _B.id }`))
                            ]
                        }),
                        (0, g.jsxs)(_E, {
                            children: [
                                (0, g.jsx)(n.default, {
                                    size: 'large',
                                    block: !0,
                                    type: 'primary',
                                    icon: (0, g.jsx)(l.default, {}),
                                    style: {
                                        marginBottom: 10
                                    },
                                    onClick: o.default,
                                    children: (0, g.jsx)(s.default, {
                                        text: 'Call Meeting'
                                    })
                                }),
                                (0, g.jsx)(n.default, {
                                    block: !0,
                                    icon: (0, g.jsx)(m.default, {}),
                                    type: 'primary',
                                    onClick: this.endGameEarly,
                                    style: {
                                        background: i.default.BackgroundPurple,
                                        borderColor: i.default.BackgroundPurple
                                    },
                                    children: (0, g.jsx)(s.default, {
                                        text: 'End Game Early (Impostors Win)'
                                    })
                                }),
                                (0, g.jsxs)(_H, {
                                    children: [
                                        (0, g.jsxs)('b', {
                                            children: [
                                                (0, g.jsx)(s.default, {
                                                    text: 'Game Code'
                                                }),
                                                ':'
                                            ]
                                        }),
                                        ' ',
                                        this.props.gameValues.gameCode
                                    ]
                                })
                            ]
                        })
                    ]
                });
            }
            constructor(..._B) {
                super(..._B), (0, e.default)(this, 'canShowClearList', () => {
                    const {
                        modeOptions: _B
                    } = this.props.gameOptions;
                    return !(!_B || !_B.allowPublicInvestigations);
                }), (0, e.default)(this, 'endGameEarly', () => {
                    (0, q.send)(r.default.imposter.imposterWin);
                });
            }
        };
    A = (0, f.__decorate)([
        (0, p.inject)('imposter', 'gameValues', 'gameOptions'),
        p.observer
    ], A);
    var _B = A;
    const _C = k.default.div(t || (t = z`
  width: 350px;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
  font-family: ${ 0 };
  display: flex;
  flex-direction: column;
  border-right-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-right-width: 2px;
`), h.imposterFontName),
        _D = k.default.div(u || (u = z`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
`)),
        _E = k.default.div(v || (v = z`
  flex-shrink: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-top-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 2px;
`)),
        _F = k.default.div(w || (w = z`
  font-size: 44px;
  line-height: 44px;
  font-weight: bold;
  margin-bottom: 15px;
`)),
        _G = k.default.div(x || (x = z`
  background: rgba(0, 0, 0, 0.4);
  padding: 14px;
  font-size: 16px;
  line-height: 16px;
  border-style: solid;
  border-color: #388e3c;
  border-width: 2px;
  border-radius: 7px;
  color: ${ 0 };
  margin-bottom: 10px;
  width: 100%;
`), i.default.White),
        _H = k.default.div(y || (y = z`
  opacity: 0.9;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`));
}), b.register('fDlQt', function(c, d) {
    _j(c.exports, 'imposterStrings', function() {
        return b;
    }), _j(c.exports, 'imposterFontName', function() {
        return _f;
    });
    const e = {
            goal: 'Locate the impostors and vote them off the spaceship!',
            discussionHeader: 'Discussion Time',
            discussionDescription: 'Who is the impostor?',
            discussionActionWaiting: 'When everyone is finished discussing...',
            startVoting: 'Start Voting',
            voteHeader: 'Vote!',
            voteDescription: 'Vote out who you think the impostor is!',
            endVotingEarly: 'End Voting Early',
            clearList: 'Clear List',
            investigationLog: 'Investigation Log'
        },
        _f = '"Space Grotesk", monospace';
}), b.register('94edW', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('mwVxD'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'BulbOutlined';
    var _j = f.forwardRef(i);
}), b.register('mwVxD', function(c, d) {
    _t(c.exports, 'default', function() {
        return b;
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
                    d: 'M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z'
                }
            }]
        },
        name: 'bulb',
        theme: 'outlined'
    };
}), b.register('n1AK3', function(c, d) {
    _t(c.exports, 'default', function() {
        return _g;
    });
    var e = b('ZGYFt'),
        f = b('e3EXx');
    var _g = () => {
        f.default.imposter.status === e.ImposterStatus.questions && (f.default.imposter.status = e.ImposterStatus.discussion);
    };
}), b.register('eITA1', function(c, d) {
    _t(c.exports, 'default', function() {
        return _m;
    });
    var e = b('0hzx+'),
        f = b('fDlQt'),
        g = b('LEQ5w'),
        h = b('Axq+p'),
        i = b('citkW'),
        j = b('5VlPu');
    let k;
    class l extends g.Component {
        render() {
            return (0, e.jsxs)(_n, {
                children: [
                    (0, e.jsx)(j.default, {}),
                    (0, e.jsx)(i.default, {})
                ]
            });
        }
    }
    var _m = l;
    const _n = h.default.div(k || (k = (_t => _t)`
  flex: 1;
  overflow: hidden;
  font-family: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), f.imposterFontName);
}), b.register('citkW', function(c, d) {
    _t(c.exports, 'default', function() {
        return _p;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('LEclU'),
        h = b('Axq+p'),
        i = b('fDlQt'),
        j = b('+gdru');
    let k, l, m, n = _t => _t;
    class o extends f.Component {
        render() {
            return (0, e.jsxs)(_q, {
                children: [
                    (0, e.jsx)(_r, {
                        children: (0, e.jsx)(j.default, {
                            text: i.imposterStrings.investigationLog
                        })
                    }),
                    (0, e.jsx)(_s, {
                        children: (0, e.jsx)(g.default, {
                            withoutContainer: !0,
                            customFont: i.imposterFontName
                        })
                    })
                ]
            });
        }
    }
    var _p = o;
    const _q = h.default.div(k || (k = n`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 35px;
  overflow: hidden;
`)),
        _r = h.default.div(l || (l = n`
  font-size: 44px;
  line-height: 44px;
  font-weight: bold;
  margin-bottom: 15px;
`)),
        _s = h.default.div(m || (m = n`
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
`));
}), b.register('5VlPu', function(c, d) {
    _t(c.exports, 'default', function() {
        return _t;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('+gdru'),
        h = b('3rMVL'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('Axq+p');
    let l, m, n, o, p, q = _t => _t;
    const r = _t => (0, f.jsxs)(_w, {
        children: [
            (0, f.jsx)(_x, {
                children: _t.num
            }),
            (0, f.jsx)(_y, {
                children: (0, f.jsx)(g.default, {
                    text: `${ (0, h.plural)(_t.stat, _t.num) } left`
                })
            })
        ]
    });
    let s = class extends j.Component {
        render() {
            const {
                imposter: {
                    investigationsLeft: _t,
                    meetingsLeft: u,
                    impostersLeft: v
                }
            } = this.props;
            return (0, f.jsxs)(_u, {
                children: [
                    (0, f.jsx)(r, {
                        num: v,
                        stat: 'impostor'
                    }),
                    (0, f.jsx)(_v, {}),
                    (0, f.jsx)(r, {
                        num: u,
                        stat: 'meeting'
                    }),
                    (0, f.jsx)(_v, {}),
                    (0, f.jsx)(r, {
                        num: _t,
                        stat: 'investigation'
                    })
                ]
            });
        }
    };
    s = (0, e.__decorate)([
        (0, i.inject)('imposter'),
        i.observer
    ], s);
    var _t = s;
    const _u = k.default.div(l || (l = q`
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
        _v = k.default.div(m || (m = q`
  height: 100%;
  width: 3px;
  background: rgba(255, 255, 255, 0.2);
  margin-left: 35px;
  margin-right: 35px;
`)),
        _w = k.default.div(n || (n = q`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`)),
        _x = k.default.div(o || (o = q`
  font-size: 42px;
  line-height: 42px;
  font-weight: bold;
`)),
        _y = k.default.div(p || (p = q`
  font-size: 18px;
  line-height: 18px;
  margin-top: 10px;
`));
}), b.register('R9rAP', function(c, d) {
    _r(c.exports, 'Container', function() {
        return _B;
    }), _r(c.exports, 'ContentContainer', function() {
        return _C;
    }), _r(c.exports, 'Image', function() {
        return _D;
    }), _r(c.exports, 'Title', function() {
        return _E;
    }), _r(c.exports, 'Description', function() {
        return _F;
    }), _r(c.exports, 'Divider', function() {
        return _G;
    }), _r(c.exports, 'ActionText', function() {
        return _H;
    }), _r(c.exports, 'default', function() {
        return _A;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('ulE4q'),
        i = b('fDlQt'),
        j = b('+gdru'),
        k = b('Yv86d'),
        l = b('3rMVL'),
        m = b('hEZVH'),
        n = b('ZGYFt'),
        o = b('2x11J'),
        p = b('LEQ5w'),
        q = b('Axq+p');
    let r, s, t, u, v, w, x, y = _r => _r,
        z = class extends p.Component {
            componentDidMount() {
                k.default.imposter.spaceshipAmbience.fade(0.16, 0, 250), (0, l.playSound)(k.default.imposter.meetingBoom, {
                    volume: 0.7
                });
            }
            componentWillUnmount() {
                k.default.imposter.spaceshipAmbience.fade(0, 0.16, 2500);
            }
            render() {
                return (0, g.jsx)(_B, {
                    children: (0, g.jsxs)(_C, {
                        className: 'animated zoomInDown',
                        style: {
                            animationDelay: '0.6s',
                            animationDuration: '2.2s'
                        },
                        children: [
                            (0, g.jsx)(_D, {
                                src: (0, l.getAssetPath)('discussion.svg')
                            }),
                            (0, g.jsx)(_E, {
                                children: (0, g.jsx)(j.default, {
                                    text: i.imposterStrings.discussionHeader
                                })
                            }),
                            (0, g.jsx)(_F, {
                                children: (0, g.jsx)(j.default, {
                                    text: i.imposterStrings.discussionDescription
                                })
                            }),
                            (0, g.jsx)(_G, {}),
                            (0, g.jsx)(_H, {
                                children: (0, g.jsx)(j.default, {
                                    text: i.imposterStrings.discussionActionWaiting
                                })
                            }),
                            (0, g.jsx)(h.default, {
                                onClick: this.startVoting,
                                style: {
                                    height: 60
                                },
                                block: !0,
                                type: 'primary',
                                size: 'large',
                                children: i.imposterStrings.startVoting
                            })
                        ]
                    })
                });
            }
            constructor(..._r) {
                super(..._r), (0, e.default)(this, 'startVoting', () => this.props.imposter.status = n.ImposterStatus.voting);
            }
        };
    z = (0, f.__decorate)([
        (0, o.inject)('imposter'),
        o.observer
    ], z);
    var _A = z;
    const _B = q.default.div.attrs({
            className: 'maxWidth maxHeight scroll-y flex hc vc'
        })(r || (r = y`
  font-family: ${ 0 };
`), i.imposterFontName),
        _C = q.default.div.attrs({
            className: 'flex hc vc flex-column'
        })(s || (s = y`
  margin: 45px;
  background: rgba(255, 255, 255, 0.95);
  color: ${ 0 };
  padding: 60px;
  border-radius: 10px;
  max-width: 650px;
`), m.default.Black),
        _D = q.default.img(t || (t = y`
  height: 170px;
`)),
        _E = q.default.div(u || (u = y`
  font-size: 52px;
  margin-top: 15px;
  font-weight: 900;
`)),
        _F = q.default.div(v || (v = y`
  font-size: 24px;
  line-height: 24px;
  margin-top: 2px;
`)),
        _G = q.default.div(w || (w = y`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
  margin-top: 30px;
  margin-bottom: 30px;
`)),
        _H = q.default.div(x || (x = y`
  margin-bottom: 11px;
  font-size: 15px;
`));
}), b.register('+yIKA', function(c, d) {
    _r(c.exports, 'default', function() {
        return _r;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('ulE4q'),
        i = b('fDlQt'),
        j = b('+gdru'),
        k = b('Yv86d'),
        l = b('3rMVL'),
        m = b('ZGYFt'),
        n = b('2x11J'),
        o = b('LEQ5w'),
        p = b('R9rAP');
    let q = class extends o.Component {
        componentDidMount() {
            k.default.imposter.spaceshipAmbience.fade(0, 0.16, 1000);
        }
        componentDidUpdate() {
            0 !== this.props.imposter.votes && this.props.imposter.votes === this.possibleVotes() && this.endVoting();
        }
        componentWillUnmount() {
            this.props.imposter.votes = 0;
        }
        render() {
            const _r = this.possibleVotes();
            return (0, g.jsx)(p.Container, {
                children: (0, g.jsxs)(p.ContentContainer, {
                    children: [
                        (0, g.jsx)(p.Image, {
                            src: (0, l.getAssetPath)('vote.svg')
                        }),
                        (0, g.jsx)(p.Title, {
                            children: (0, g.jsx)(j.default, {
                                text: i.imposterStrings.voteHeader
                            })
                        }),
                        (0, g.jsx)(p.Description, {
                            children: (0, g.jsx)(j.default, {
                                text: i.imposterStrings.voteDescription
                            })
                        }),
                        (0, g.jsx)(p.Divider, {}),
                        (0, g.jsx)(p.ActionText, {
                            children: `${ this.props.imposter.votes }/${ _r } ${ (0, l.plural)('vote', _r) } in`
                        }),
                        (0, g.jsx)(h.default, {
                            onClick: this.endVoting,
                            style: {
                                height: 60
                            },
                            block: !0,
                            type: 'primary',
                            size: 'large',
                            children: i.imposterStrings.endVotingEarly
                        })
                    ]
                })
            });
        }
        constructor(..._x) {
            super(..._x), (0, e.default)(this, 'possibleVotes', () => this.props.imposter.people.filter(_x => !_x.votedOff).length), (0, e.default)(this, 'endVoting', () => {
                this.props.imposter.status = m.ImposterStatus.votingResult;
            });
        }
    };
    q = (0, f.__decorate)([
        (0, n.inject)('imposter'),
        n.observer
    ], q);
    var _r = q;
}), b.register('eUoVu', function(c, d) {
    _x(c.exports, 'Container', function() {
        return _y;
    }), _x(c.exports, 'Content', function() {
        return _z;
    }), _x(c.exports, 'default', function() {
        return _x;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('fDlQt'),
        i = b('LEQ5w'),
        j = b('Axq+p'),
        k = b('WXMQS'),
        l = b('qzoWQ'),
        m = b('v/v9T'),
        n = b('2x11J'),
        o = b('ZGYFt'),
        p = b('3rMVL'),
        q = b('Yv86d');
    let r, s, t, u = _x => _x;
    var v;
    (v = t || (t = {})).boom = 'boom', v.name = 'name', v.reveal = 'reveal', v.stats = 'stats';
    let w = class extends i.Component {
        componentDidMount() {
            (0, p.playSound)(q.default.eventBoom, {}), setTimeout(() => {
                this.setToName();
            }, 2200);
        }
        render() {
            return (0, g.jsx)(_y, {
                children: (0, g.jsx)(_z, {
                    children: this.getContent()
                })
            });
        }
        constructor(..._x) {
            super(..._x), (0, e.default)(this, 'state', {
                stage: t.boom
            }), (0, e.default)(this, 'setToName', () => this.setState({
                stage: t.name
            })), (0, e.default)(this, 'setToReveal', () => this.setState({
                stage: t.reveal
            })), (0, e.default)(this, 'setToStats', () => this.setState({
                stage: t.stats
            })), (0, e.default)(this, 'onFinish', () => {
                0 === this.props.imposter.impostersLeft || 0 === this.props.imposter.meetingsLeft || this.props.imposter.meetingsLeft < this.props.imposter.impostersLeft ? (0, p.endGame)() : (this.props.imposter.status = o.ImposterStatus.questions, this.props.imposter.meetingResults = null);
            }), (0, e.default)(this, 'getContent', () => {
                if (!this.props.imposter.meetingResults)
                    return null;
                const {
                    stage: _x
                } = this.state;
                return _x === t.boom ? null : _x === t.name ? (0, g.jsx)(l.default, {
                    onFinish: this.setToReveal,
                    name: this.props.imposter.meetingResults.name
                }) : _x === t.reveal ? (0, g.jsx)(k.default, {
                    onFinish: this.setToStats,
                    name: this.props.imposter.meetingResults.name,
                    wasImposter: this.props.imposter.meetingResults.wasImposter
                }) : (0, g.jsx)(m.default, {
                    onFinish: this.onFinish,
                    remainingImposters: this.props.imposter.impostersLeft,
                    meetingsLeft: this.props.imposter.meetingsLeft
                });
            });
        }
    };
    w = (0, f.__decorate)([
        (0, n.inject)('imposter'),
        n.observer
    ], w);
    var _x = w;
    const _y = j.default.div.attrs({
            className: 'maxWidth maxHeight flex vc'
        })(r || (r = u`
  font-family: ${ 0 };
  font-size: 36px;
  padding: 100px;
`), h.imposterFontName),
        _z = j.default.div(s || (s = u``));
}), b.register('WXMQS', function(c, d) {
    _g(c.exports, 'default', function() {
        return _i;
    });
    var e = b('0hzx+'),
        f = b('Yv86d'),
        g = b('3rMVL'),
        h = b('LEQ5w');
    var _i = _g => {
        const [j, k] = h.useState(!1);
        return h.useEffect(() => {
            setTimeout(() => {
                k(!0);
            }, 6770), (0, g.playSound)(f.default.imposter.tensionBuild, {
                volume: 0.53,
                onEnd: () => _g.onFinish(),
                onError: () => {
                    setTimeout(_g.onFinish, 10000);
                }
            });
        }, []), (0, e.jsxs)('div', {
            className: 'animated fadeIn',
            style: {
                animationDuration: '2s'
            },
            children: [
                _g.name,
                ' was',
                j && (_g.wasImposter ? ' an impostor.' : ' not an impostor.')
            ]
        });
    };
}), b.register('qzoWQ', function(c, d) {
    _g(c.exports, 'default', function() {
        return _i;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Yv86d'),
        h = b('S3tIB');
    var _i = _g => {
        const [j, k] = f.useState(!1);
        return (0, e.jsx)('div', {
            className: j ? 'animated fadeOut' : '',
            children: (0, e.jsx)(h.default, {
                text: `${ _g.name } was voted off the ship.`,
                sound: g.default.imposter.typing,
                soundDuration: 3600,
                onFinish: () => {
                    setTimeout(() => k(!0), 2000), setTimeout(_g.onFinish, 3000);
                }
            })
        });
    };
}), b.register('S3tIB', function(c, d) {
    _g(c.exports, 'default', function() {
        return _i;
    });
    var e = b('0hzx+'),
        f = b('3rMVL'),
        g = b('LEQ5w'),
        h = b('Ovnb5');
    var _i = _g => {
        g.useEffect(() => {
            _g.sound && (0, f.playSound)(_g.sound, {
                volume: _g.volume
            });
        }, []);
        const j = _g.text,
            k = _g.pace ? _g.pace : _g.soundDuration ? Math.round(_g.soundDuration / j.length) : 140;
        return (0, e.jsx)(h.WindupChildren, {
            onFinished: _g.onFinish,
            children: (0, e.jsx)(h.Pace, {
                ms: k,
                children: j
            })
        });
    };
}), b.register('Ovnb5', function(c, d) {
    _g(c.exports, 'Pace', function() {
        return _f;
    }), _g(c.exports, 'WindupChildren', function() {
        return _m;
    });
    var e = b('LEQ5w');
    b('0kaSB');

    function f(_g) {
        return 2 === _g.length;
    }

    function f(g) {
        return !!Array.isArray(g) && (3 === g.length && !(!Array.isArray(g[0]) || !Array.isArray(g[1])));
    }

    function f(g, h) {
        return [
            [],
            g.split(''),
            h
        ];
    }

    function f(g, h) {
        return [
            [],
            g,
            h
        ];
    }

    function f(g) {
        const [h, i] = g;
        return !(h.length > 0) && i.reduce((h, i) => _q(i) && _q(g) && h ? f(i) : h, !0);
    }

    function f([g, h]) {
        return 0 === h.length;
    }

    function f(g) {
        const h = _f(g);
        return _t(h) ? h : f(h);
    }

    function f(g) {
        if (_s(g))
            return g;
        const [h, i, j] = g, k = g => _q(g) ? f(g) : g;
        return [
            [],
            [
                ...h.map(k),
                ...i.map(k)
            ],
            j
        ];
    }

    function f([g, h]) {
        const i = h.reduce((g, h) => _q(h) && !_s(h) ? _f(h) : g, void 0);
        if (i)
            return i;
        return g[g.length - 1];
    }

    function _f(g) {
        const h = _n(g);
        return _q(h) ? _f(h) : h;
    }

    function f([g, h]) {
        const i = g.map(g => {
                if (_q(g)) {
                    const [j, k, l] = g;
                    return [
                        f(g),
                        l
                    ];
                }
                return g;
            }),
            [j] = h;
        if (_q(j) && !_s(j)) {
            const [k, l, m] = j;
            return [
                ...i,
                [
                    f(j),
                    m
                ]
            ];
        }
        return i;
    }

    function f([g, h]) {
        const [i] = h;
        return _q(i) ? f(i) : i;
    }

    function _f(g) {
        if (_t(g))
            return g;
        const [h, i, j] = g, [k, ...e] = i;
        if (_q(k)) {
            const l = _f(k);
            return _t(l) ? [
                [
                    ...h,
                    l
                ],
                e,
                j
            ] : [
                h,
                [
                    l,
                    ...e
                ],
                j
            ];
        }
        return [
            [
                ...h,
                k
            ],
            e,
            j
        ];
    }

    function f(g, h) {
        switch (g) {
            case '\u2014':
            case '\u2026':
                return 200;
            case '.':
            case ',':
                return 150;
            case '?':
            case '!':
                if ('!' !== h && '?' !== h)
                    return 150;
            case '-':
            case ' ':
            case '\n':
                return 0;
            default:
                return 20;
        }
    }
    const _f = ({
        children: g
    }) => _j(e).createElement(_j(e).Fragment, null, g);

    function h(i) {
        if (_t(i))
            return;
        const [_j, k, l] = i, [m] = k;
        return m && _q(m) ? h(m) : l.pace;
    }
    const h = ({
        children: i
    }) => _l(e).createElement(_l(e).Fragment, null, i);

    function j(k) {
        return k.type === h;
    }

    function j(k) {
        const [_l, m, n] = k, o = _n(k), [p] = m;
        let q = [];
        return o && _q(o) && q.push(...j(o)), p && _q(p) && !_s(p) && q.push(...j(p)), n.onChar && q.push(n.onChar), q;
    }

    function j(k) {
        return {
            windup: k,
            didFinishOnce: !1
        };
    }

    function j(k, l) {
        switch (l.type) {
            case 'replace':
                return _y(l.windup);
            case 'next':
                return {
                    ...k,
                    windup: _r(k.windup)
                };
            case 'rewind':
                return {
                    windup: _m(k.windup),
                        didFinishOnce: !1
                };
            case 'fast-forward':
                return {
                    ...k,
                    windup: _u(k.windup)
                };
            case 'finish':
                return {
                    ...k,
                    didFinishOnce: !0
                };
            default:
                return k;
        }
    }

    function j(k, l) {
        const [{
            windup: m,
            didFinishOnce: n
        }, o] = (0, e.useReducer)(_z, k, _y), p = (0, e.useRef)(null), _q = _t(m), r = (0, e.useCallback)(() => {
            _q || (p.current && clearTimeout(p.current), o({
                type: 'fast-forward'
            }));
        }, [_q]), s = (0, e.useCallback)(() => {
            p.current && clearTimeout(p.current), o({
                type: 'rewind'
            });
        }, []);
        return (0, e.useEffect)(() => {
            o({
                type: 'replace',
                windup: k
            });
        }, [k]), (0, e.useEffect)(() => {
            p.current && clearTimeout(p.current), l.skipped && o({
                type: 'fast-forward'
            }), !1 === l.skipped && o({
                type: 'rewind'
            });
        }, [l.skipped]), (0, e.useEffect)(() => {
            const t = _x(m),
                u = _o(m);
            t.length > 0 && u && t.forEach(t => {
                t(u);
            });
        }, [m]), (0, e.useEffect)(() => {
            if (!1 === n && _q) {
                const t = setTimeout(() => {
                    l.onFinished && l.onFinished(), o({
                        type: 'finish'
                    });
                }, 0);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [
            n,
            _q,
            l
        ]), (0, e.useEffect)(() => {
            if (!_q) {
                const t = _u(m) || _s,
                    u = _o(m),
                    v = _q(m);
                return p.current = setTimeout(() => {
                    o({
                        type: 'next'
                    });
                }, u ? t(u, v) : 0), () => {
                    p.current && clearTimeout(p.current);
                };
            }
        }, [
            m,
            _q
        ]), {
            windup: m,
            skip: r,
            rewind: s,
            isFinished: _q
        };
    }
    const j = [
        'area',
        'base',
        'br',
        'col',
        'command',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr'
    ];

    function k(l) {
        const m = _r(l) ? l[1] : l[2],
            n = _r(l) ? l[0] : _p(l),
            o = m.element || _v(e).Fragment;
        if (m.props && Object.keys(m.props).includes('children'))
            return _v(e).createElement(o, Object.assign({}, m.props));
        const p = n.reduce((l, _v) => {
            if ('string' == typeof _v) {
                const q = l.slice(0, l.length - 1),
                    r = l[l.length - 1];
                return r && 'string' == typeof r ? [
                    ...q,
                    r + _v
                ] : [
                    ...l,
                    _v
                ];
            }
            return [
                ...l,
                k(_v)
            ];
        }, []);
        return 'string' == typeof m.element && j.includes(m.element) ? _v(e).createElement(o, Object.assign({
            key: m.key
        }, m.props)) : _v(e).createElement(o, Object.assign({
            key: m.key
        }, m.props), p);
    }
    const k = ({}) => null;
    const l = _v(e).createContext({
        skip: () => {
            console.warn('Tried to use the useSkip hook outside of a WindupChildren component!!');
        },
        rewind: () => {
            console.warn('Tried to use the useRewind hook outside of a WindupChildren component!');
        },
        isFinished: !1
    });

    function m(n, o) {
        if ('string' == typeof o)
            return [
                ...n,
                ...o.split('')
            ];
        if ('number' == typeof o)
            return [
                ...n,
                ...o.toString().split('')
            ];
        if (!_v(e).isValidElement(o))
            return n;
        const {
            children: p,
            ...q
        } = o.props, _r = o.type === _f ? {
            pace: n => 'ms' in o.props ? o.props.ms : o.props.getPace(n)
        } : {};
        const _s = _w(o) ? {
                onChar: o.props.fn
            } : {},
            _t = o.key ? {
                key: o.key
            } : {};
        if (function(u) {
                return u.type === k;
            }(o))
            return [
                ...n,
                _t(' ', {
                    element: _v(e).Fragment,
                    ..._t,
                    props: {},
                    pace: () => o.props.ms
                })
            ];
        if (void 0 === p)
            return [
                ...n,
                _t(' ', {
                    element: o.type,
                    props: q,
                    ..._t,
                    ..._r,
                    ..._s
                })
            ];
        if ('string' == typeof p)
            return [
                ...n,
                _t(p, {
                    element: o.type,
                    props: q,
                    ..._t,
                    ..._r,
                    ..._s
                })
            ];
        if (p instanceof Function)
            return [
                ...n,
                _t(' ', {
                    element: o.type,
                    props: {
                        children: p,
                        ...q
                    },
                    ..._t,
                    ..._r,
                    ..._s
                })
            ];
        const _u = _v(e).Children.toArray(p).reduce(m, []).map(n => {
            if (_s(n)) {
                const [_v, w, x] = n;
                return [
                    _v,
                    w,
                    {
                        ..._r,
                        ..._s,
                        ...x
                    }
                ];
            }
            return n;
        });
        return [
            ...n,
            _i(_u, {
                element: o.type,
                props: q,
                ..._t,
                ..._r,
                ..._s
            })
        ];
    }

    function m(n) {
        return null == n ? '' : _s(e).Children.map(n, n => 'string' == typeof n ? n : 'number' == typeof n ? n.toString() : _s(e).isValidElement(n) ? `#${ n.key || '' }<${ m(n.props.children) }>` : '').join(',');
    }
    const _m = ({
        children: n,
        onFinished: o,
        skipped: p
    }) => {
        const q = function(r, _s) {
                return (0, e.useMemo)(r, [_G(_s)]);
            }(() => _i(_c(e).Children.toArray(n).reduce(_F, []), {
                element: void 0
            }), n),
            {
                windup: r,
                skip: _s,
                rewind: _t,
                isFinished: u
            } = _A(q, {
                onFinished: o,
                skipped: p
            });
        return _c(e).createElement(l.Provider, {
            value: {
                skip: _s,
                rewind: _t,
                isFinished: u
            }
        }, _C(r));
    };
}), b.register('0kaSB', function(_c, d) {
    function e(f, g, h) {
        const i = 'OffscreenCanvas' in window,
            j = document.createElement('canvas'),
            k = i ? j.transferControlToOffscreen() : j;
        k.width = g;
        const l = k.getContext('2d');
        if (l) {
            l.font = h;
            return f.split(' ').reduce((f, h) => {
                const [m] = f.slice(-1), n = [
                    ...m,
                    h
                ].join(' ');
                let {
                    width: o
                } = l.measureText(n);
                return o <= g ? [
                    ...f.slice(0, -1),
                    [
                        ...m,
                        h
                    ]
                ] : 0 === m.length ? [
                    ...f.slice(0, -1),
                    [h]
                ] : [
                    ...f,
                    [h]
                ];
            }, [
                []
            ]).map(f => f.join(' ')).join('\n');
        }
        return console.warn('No canvas context was found, so the string was left as is!'), f;
    }
    _f(_c.exports, 'default', function() {
        return _e;
    });
    var _e = function(_f, g, h) {
        if (function(i) {
                return Array.isArray(i);
            }(_f)) {
            return b(_f.join(''), g, h).split('').reduce((_f, g, h) => '\n' === g ? [
                ..._f,
                h
            ] : _f, []).reduce((_f, g) => function(i, j) {
                const {
                    indexToInsertInto: k,
                    localPosition: l
                } = j.reduce(({
                    indexToInsertInto: m,
                    localPosition: n,
                    lengthOfPreceding: o
                }, _e, _f) => {
                    const p = _e.length + o;
                    return !m && !n && i < p ? {
                        indexToInsertInto: _f,
                        localPosition: i - o,
                        lengthOfPreceding: p
                    } : {
                        indexToInsertInto: m,
                        localPosition: n,
                        lengthOfPreceding: p
                    };
                }, {
                    indexToInsertInto: 0,
                    localPosition: 0,
                    lengthOfPreceding: 0
                });
                return m.map((i, m) => m === n ? i.slice(0, o) + '\n' + i.slice(o) : i).map(i => i.split('\n').map((i, m, n) => m < n.length - 2 && m > 0 ? i.trim() : m < n.length - 2 ? i.trimRight() : m > 0 ? i.trimLeft() : i).join('\n'));
            }(g, _f), _f);
        }
        return b(_f, g, h);
    };
}), b.register('v/v9T', function(c, d) {
    _x(c.exports, 'default', function() {
        return _i;
    });
    var e = b('0hzx+'),
        _f = b('Yv86d'),
        g = b('3rMVL');
    b('LEQ5w');
    var h = b('S3tIB');
    var _i = _x => (0, e.jsx)(h.default, {
        text: 0 === _x.remainingImposters ? '0 impostors remain. Our research is saved!' : `${ _x.remainingImposters } ${ (0, g.plural)('impostor', _x.remainingImposters) } remain${ 1 === _x.remainingImposters ? 's' : '' }. ${ _x.meetingsLeft } ${ (0, g.plural)('meeting', _x.meetingsLeft) } left.`,
        sound: _f.default.imposter.typing,
        soundDuration: 3600,
        onFinish: () => {
            setTimeout(_x.onFinish, 2200);
        }
    });
}), b.register('uqJZD', function(c, d) {
    _x(c.exports, 'default', function() {
        return _w;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('Yv86d'),
        _i = b('3rMVL'),
        j = b('ZGYFt'),
        k = b('PMl60'),
        l = b('2x11J'),
        _m = b('LEQ5w'),
        _n = b('eUoVu'),
        _o = b('S3tIB'),
        _p = b('3WcZi'),
        _q = b('Axq+p'),
        _r = b('ulE4q');
    let _s;
    let t = class extends _m.Component {
        render() {
            return (0, g.jsx)(_v, {
                gameOptions: this.props.gameOptions,
                imposter: this.props.imposter
            });
        }
    };
    t = (0, f.__decorate)([
        (0, l.inject)('gameOptions', 'imposter'),
        l.observer
    ], t);
    class _u extends _m.Component {
        componentDidMount() {
            (0, _i.getMusicTrack)().fade(0, 0, 0), (0, _i.playSound)(h.default.imposter.spaceDoorOpen, {
                volume: 0.7
            }), this.props.setTimeout(() => {
                this.setState({
                    show: !0
                });
            }, 3800);
        }
        render() {
            return (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(_n.Container, {
                        children: (0, g.jsx)(_n.Content, {
                            className: this.state.exiting ? 'animated fadeOut' : '',
                            children: this.state.show ? (0, g.jsx)(_o.default, {
                                text: this.stages[this.state.stageIndex].text,
                                sound: h.default.imposter.typing,
                                soundDuration: 3600,
                                onFinish: this.nextStage
                            }, `imposter-intro-stage-${ this.state.stageIndex }`) : null
                        })
                    }),
                    (0, g.jsxs)(_x, {
                        children: [
                            (0, g.jsx)('div', {}),
                            (0, g.jsx)('div', {
                                children: (0, g.jsx)(_r.default, {
                                    type: 'primary',
                                    size: 'large',
                                    style: {
                                        marginTop: 15,
                                        marginRight: 15
                                    },
                                    onClick: this.close,
                                    children: 'Skip Instructions'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        constructor(..._x) {
            var v, w;
            super(..._x), (0, e.default)(this, 'state', {
                stageIndex: 0,
                show: !1,
                exiting: !1
            }), (0, e.default)(this, 'stages', (v = (0, k.getUser)().lastName, w = this.props.gameOptions.modeOptions.numberOfImposters, [{
                    text: `Crewmates, this is Captain ${ v } here. We're in big trouble.`
                },
                {
                    text: `It appears ${ w } ${ (0, k.plural)('impostor', w) } ${ 1 === w ? 'has' : 'have' } made it onto our spaceship in an attempt to steal our research.`
                },
                {
                    text: `To protect our research, we must eject ${ 1 === w ? 'this impostor' : 'these impostors' } immediately.`
                },
                {
                    text: `Run investigations and call a meeting to vote the ${ (0, k.plural)('impostor', w) } off the ship.`
                },
                {
                    text: 'Our mission is relying on you. Don\u2019t let me down.'
                }
            ])), (0, e.default)(this, 'close', () => this.props.imposter.status = j.ImposterStatus.questions), (0, e.default)(this, 'nextStage', () => {
                const _x = this.stages;
                this.props.setTimeout(() => {
                    _x[this.state.stageIndex + 1] ? (this.state.stageIndex + 1 === 1 && this.props.setTimeout(() => {
                        (0, _i.playSound)(h.default.imposter.mystery, {
                            volume: 0.64
                        });
                    }, 600), this.setState({
                        stageIndex: this.state.stageIndex + 1
                    })) : this.setState({
                        exiting: !0
                    }, () => {
                        this.props.setTimeout(() => {
                            this.close();
                        }, 1100);
                    });
                }, 2600);
            });
        }
    }
    const _v = _d(_p)(_u);
    var _w = t;
    const _x = _q.default.div(_s || (_s = (_c => _c)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`));
}), b.register('3WcZi', function(_c, _d) {
    var e = b('LEQ5w'),
        f = b('Bc/3a');
    _c.exports = f(e);
}), b.register('Bc/3a', function(c, d) {
    var e = b('8qdP7'),
        f = b('1jOLC'),
        g = b('7Z3Gf');
    c.exports = function(h) {
        var i = 'undefined' == typeof window ? a : window,
            j = function(k, l, m) {
                return function(n, o) {
                    var p = Array.prototype.slice.call(arguments, 2),
                        q = k(function() {
                            l.call(this, q), 'function' == typeof n && n.apply(this, p);
                        }.bind(this), o);
                    return this[m] ? this[m].push(q) : this[m] = [q], q;
                };
            },
            k = function(l, m) {
                return function(n) {
                    if (this[m]) {
                        var o = this[m].indexOf(n); -
                        1 !== o && this[m].splice(o, 1);
                    }
                    l(n);
                };
            },
            l = '_ReactTimeout_timeouts',
            m = k(i.clearTimeout, l),
            n = j(i.setTimeout, m, l),
            o = '_ReactTimeout_intervals',
            p = k(i.clearInterval, o),
            q = j(i.setInterval, function() {}, o),
            r = '_ReactTimeout_immediates',
            s = k(i.clearImmediate, r),
            t = j(i.setImmediate, s, r),
            u = '_ReactTimeout_rafs',
            v = k(i.cancelAnimationFrame, u),
            w = j(i.requestAnimationFrame, v, u),
            x = function(y) {
                return y && 'function' == typeof y.slice ? y.slice(0) : [];
            };
        return function(y) {
            var z = e({
                displayName: 'ReactTimeout',
                setTimeout: n,
                clearTimeout: m,
                setInterval: q,
                clearInterval: p,
                setImmediate: t,
                clearImmediate: s,
                requestAnimationFrame: w,
                cancelAnimationFrame: v,
                componentWillUnmount: function() {
                    x(this[l]).forEach(this.clearTimeout), x(this[o]).forEach(this.clearInterval), x(this[r]).forEach(this.clearImmediate), x(this[u]).forEach(this.cancelAnimationFrame);
                },
                getWrappedInstance: function() {
                    return this.wrappedInstance;
                },
                render: function() {
                    return h.createElement(y, f({}, this.props, {
                        ref: function(A) {
                            this.wrappedInstance = A;
                        }.bind(this),
                        setTimeout: this.setTimeout,
                        clearTimeout: this.clearTimeout,
                        setInterval: this.setInterval,
                        clearInterval: this.clearInterval,
                        setImmediate: this.setImmediate,
                        clearImmediate: this.clearImmediate,
                        requestAnimationFrame: this.requestAnimationFrame,
                        cancelAnimationFrame: this.cancelAnimationFrame
                    }));
                }
            });
            return g(z, y);
        };
    };
}), b.register('8qdP7', function(c, d) {
    var e = b('LEQ5w'),
        f = b('ivS3K');
    if (void 0 === e)
        throw Error('create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.');
    var g = new e.Component().updater;
    c.exports = f(e.Component, e.isValidElement, g);
}), b.register('ivS3K', function(c, d) {
    var e = b('1jOLC'),
        f = {};

    function g(h, i, j, k, l, m, n, o) {
        if (!h) {
            var p;
            if (void 0 === i)
                p = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
            else {
                var q = [
                        j,
                        k,
                        l,
                        m,
                        n,
                        o
                    ],
                    r = 0;
                (p = new Error(i.replace(/%s/g, function() {
                    return q[r++];
                }))).name = 'Invariant Violation';
            }
            throw p.framesToPop = 1, p;
        }
    }
    var g = 'mixins';
    c.exports = function(h, i, j) {
        var k = [],
            l = {
                mixins: 'DEFINE_MANY',
                statics: 'DEFINE_MANY',
                propTypes: 'DEFINE_MANY',
                contextTypes: 'DEFINE_MANY',
                childContextTypes: 'DEFINE_MANY',
                getDefaultProps: 'DEFINE_MANY_MERGED',
                getInitialState: 'DEFINE_MANY_MERGED',
                getChildContext: 'DEFINE_MANY_MERGED',
                render: 'DEFINE_ONCE',
                componentWillMount: 'DEFINE_MANY',
                componentDidMount: 'DEFINE_MANY',
                componentWillReceiveProps: 'DEFINE_MANY',
                shouldComponentUpdate: 'DEFINE_ONCE',
                componentWillUpdate: 'DEFINE_MANY',
                componentDidUpdate: 'DEFINE_MANY',
                componentWillUnmount: 'DEFINE_MANY',
                UNSAFE_componentWillMount: 'DEFINE_MANY',
                UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
                UNSAFE_componentWillUpdate: 'DEFINE_MANY',
                updateComponent: 'OVERRIDE_BASE'
            },
            m = {
                getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
            },
            n = {
                displayName: function(o, p) {
                    o.displayName = p;
                },
                mixins: function(o, p) {
                    if (p)
                        for (var q = 0; q < p.length; q++)
                            _o(o, p[q]);
                },
                childContextTypes: function(o, p) {
                    o.childContextTypes = e({}, o.childContextTypes, p);
                },
                contextTypes: function(o, p) {
                    o.contextTypes = e({}, o.contextTypes, p);
                },
                getDefaultProps: function(o, p) {
                    o.getDefaultProps ? o.getDefaultProps = _o(o.getDefaultProps, p) : o.getDefaultProps = p;
                },
                propTypes: function(o, p) {
                    o.propTypes = e({}, o.propTypes, p);
                },
                statics: function(o, p) {
                    ! function(q, r) {
                        if (!r)
                            return;
                        for (var s in r) {
                            var t = r[s];
                            if (r.hasOwnProperty(s)) {
                                if (_h(!(s in n), 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', s), s in q)
                                    return _h('DEFINE_MANY_MERGED' === (m.hasOwnProperty(s) ? m[s] : null), 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', s), void(q[s] = _o(q[s], t));
                                q[s] = t;
                            }
                        }
                    }(o, p);
                },
                autobind: function() {}
            };

        function o(p, q) {
            var r = l.hasOwnProperty(q) ? l[q] : null;
            _q.hasOwnProperty(q) && _h('OVERRIDE_BASE' === r, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', q), p && _h('DEFINE_MANY' === r || 'DEFINE_MANY_MERGED' === r, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', q);
        }

        function _o(p, q) {
            if (q) {
                _h('function' != typeof q, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.'), _h(!i(q), 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.');
                var r = p.prototype,
                    s = r.__reactAutoBindPairs;
                for (var t in (q.hasOwnProperty(g) && n.mixins(p, q.mixins), q))
                    if (q.hasOwnProperty(t) && t !== g) {
                        var u = q[t],
                            v = r.hasOwnProperty(t);
                        if (_o(v, t), n.hasOwnProperty(t))
                            n[t](p, u);
                        else {
                            var w = l.hasOwnProperty(t);
                            if ('function' == typeof u && !w && !v && !1 !== q.autobind)
                                s.push(t, u), r[t] = u;
                            else if (v) {
                                var x = l[t];
                                _h(w && ('DEFINE_MANY_MERGED' === x || 'DEFINE_MANY' === x), 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', x, t), 'DEFINE_MANY_MERGED' === x ? r[t] = _o(r[t], u) : 'DEFINE_MANY' === x && (r[t] = _o(r[t], u));
                            } else
                                r[t] = u;
                        }
                    }
            } else;
        }

        function o(p, q) {
            for (var r in (_h(p && q && 'object' == typeof p && 'object' == typeof q, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'), q))
                q.hasOwnProperty(r) && (_h(void 0 === p[r], 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', r), p[r] = q[r]);
            return p;
        }

        function _o(p, q) {
            return function() {
                var r = p.apply(this, arguments),
                    s = q.apply(this, arguments);
                if (null == r)
                    return s;
                if (null == s)
                    return r;
                var t = {};
                return _p(t, r), _p(t, s), t;
            };
        }

        function _o(p, q) {
            return function() {
                p.apply(this, arguments), q.apply(this, arguments);
            };
        }

        function o(p, q) {
            return q.bind(p);
        }
        var o = {
                componentDidMount: function() {
                    this.__isMounted = !0;
                }
            },
            p = {
                componentWillUnmount: function() {
                    this.__isMounted = !1;
                }
            },
            _q = {
                replaceState: function(r, s) {
                    this.updater.enqueueReplaceState(this, r, s);
                },
                isMounted: function() {
                    return !!this.__isMounted;
                }
            },
            r = function() {};
        return e(r.prototype, h.prototype, _q),
            function(s) {
                var t = function(u, v, w) {
                    this.__reactAutoBindPairs.length && function(x) {
                        for (var y = x.__reactAutoBindPairs, z = 0; z < y.length; z += 2) {
                            var A = y[z],
                                B = y[z + 1];
                            x[A] = _s(x, B);
                        }
                    }(this), this.props = u, this.context = v, this.refs = f, this.updater = w || j, this.state = null;
                    var x = this.getInitialState ? this.getInitialState() : null;
                    _h('object' == typeof x && !Array.isArray(x), '%s.getInitialState(): must return an object or null', t.displayName || 'ReactCompositeComponent'), this.state = x;
                };
                for (var u in (t.prototype = new r(), t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], k.forEach(_p.bind(null, t)), _p(t, o), _p(t, s), _p(t, p), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), _h(t.prototype.render, 'createClass(...): Class specification must implement a `render` method.'), l))
                    t.prototype[u] || (t.prototype[u] = null);
                return t;
            };
    };
}), b.register('7Z3Gf', function(c, d) {
    var e = {
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
        f = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        g = Object.defineProperty,
        _h = Object.getOwnPropertyNames,
        i = Object.getOwnPropertySymbols,
        j = Object.getOwnPropertyDescriptor,
        k = Object.getPrototypeOf,
        l = k && k(Object);
    c.exports = function c(m, n, _o) {
        if ('string' != typeof n) {
            if (l) {
                var _p = k(n);
                _p && _p !== l && c(m, _p, _o);
            }
            var _p = _h(n);
            i && (_p = _p.concat(i(n)));
            for (var q = 0; q < _p.length; ++q) {
                var r = _p[q];
                if (!(e[r] || f[r] || _o && _o[r])) {
                    var _s = j(n, r);
                    try {
                        g(m, r, _s);
                    } catch (c) {}
                }
            }
            return m;
        }
        return m;
    };
}), b.register('Q9mfL', function(c, d) {
    _x(c.exports, 'GRID_BACKGROUND_CSS', function() {
        return _v;
    }), _x(c.exports, 'default', function() {
        return _w;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('lYEVs'),
        h = b('Axq+p'),
        i = b('hEZVH'),
        j = b('FmMqd'),
        k = b('4Pp4R'),
        l = b('hkc4V'),
        m = b('2x11J'),
        n = b('sjRDa'),
        o = b('AuGOs'),
        p = b('Yv86d'),
        q = b('HMuOC'),
        r = b('PhJZT');
    let s, t, u = _x => _x;
    const _v = '\nbackground-color: #f1f2f3;\nbackground-image: linear-gradient(\n    to right,\n    rgba(0, 0, 0, 0.05) 1px,\n    transparent 1px\n  ),\n  linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);\n\nbackground-size: 45px 45px;\nbackground-position: center;\n';
    var _w = (0, m.observer)(() => {
        const {
            draw: {
                status: _x
            }
        } = f.useContext(n.default);
        f.useEffect(() => {
            p.default.draw.background.volume(q.DRAW_MODE_BACKGROUND_MUSIC_VOLUME);
        }, []);
        return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(_x, {
                children: [
                    (0, e.jsx)(r.default, {}),
                    (0, e.jsx)(_y, {
                        children: _x === o.DrawStatus.pickDrawer ? (0, e.jsx)(k.default, {}) : _x === o.DrawStatus.termSelection ? (0, e.jsx)(l.default, {}) : _x === o.DrawStatus.drawing ? (0, e.jsx)(g.default, {}) : _x === o.DrawStatus.results ? (0, e.jsx)(j.default, {}) : null
                    })
                ]
            })
        });
    });
    const _x = h.default.div.attrs({
            className: 'flex maxWidth flex-column'
        })(s || (s = u`
  height: 100vh;
  font-family: ${ 0 };
  color: ${ 0 };
  ${ 0 }
  overflow: hidden;
`), q.DRAW_MODE_FONT, i.default.Black, _v),
        _y = h.default.div.attrs({
            className: 'flex flex-column'
        })(t || (t = u`
  height: 100%;
  overflow: hidden;
`));
}), b.register('lYEVs', function(c, d) {
    _m(c.exports, 'default', function() {
        return _l;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('erxf9'),
        h = b('Axq+p'),
        i = b('KxGsP'),
        j = b('1+vjw');
    let k;
    var _l = () => {
        const [_m, n] = f.useState(!1);
        return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(_m, {
                className: _m ? 'animated fadeOut' : '',
                children: [
                    (0, e.jsx)(i.default, {
                        fadeOut: () => n(!0)
                    }),
                    (0, e.jsx)(j.default, {}),
                    (0, e.jsx)(g.default, {
                        isFadingOut: _m
                    })
                ]
            })
        });
    };
    const _m = h.default.div.attrs({
        className: 'flex maxWidth maxHeight'
    })(k || (k = (_J => _J)`
  justify-content: space-between;
  position: relative;
`));
}), b.register('erxf9', function(c, d) {
    _J(c.exports, 'default', function() {
        return _A;
    });
    var e = b('0hzx+'),
        f = b('hEZVH'),
        g = b('LEQ5w'),
        h = b('Axq+p'),
        i = b('OQm8Z'),
        j = b('idGo3'),
        k = b('2x11J'),
        l = b('sjRDa'),
        m = b('FgYUV'),
        n = b('YgAA2'),
        o = b('BXKZi0');
    let p, q, r, s, t, u, v = _J => _J;
    const w = {
            width: 667,
            height: 500
        },
        x = {
            width: 553,
            height: 400
        },
        _y = {
            width: 360,
            height: 270
        },
        _z = _J => {
            const A = _J.text.split(''),
                B = !A.includes('_') && _J.noTimeLeft;
            return (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(n.ConfettiContainer, {
                        style: {
                            zIndex: B ? 9 : 0
                        },
                        children: (0, e.jsx)(_B(m), {
                            config: n.confettiConfig,
                            active: B
                        })
                    }),
                    (0, e.jsx)(_G, {
                        children: A.map((_J, _B) => {
                            const C = `letter-${ _B }`;
                            return ' ' !== _J || B ? (0, e.jsx)(g.Fragment, {
                                children: _J
                            }, C) : (0, e.jsx)(g.Fragment, {
                                children: '\xA0\xA0\xA0'
                            }, C);
                        })
                    })
                ]
            });
        };
    var _A = (0, k.observer)(_J => {
        const {
            draw: {
                round: {
                    revealText: _B,
                    drawer: C,
                    secondsLeft: D
                }
            }
        } = g.useContext(l.default), E = g.useRef(null), [F, G] = (0, o.default)(E), H = g.useMemo(() => 0 === D, [D]), I = g.useMemo(() => {
            let _J = w;
            return (F < 790 || G < 700) && (_J = x), (F < 680 || G < 530) && (_J = _y), _J;
        }, [
            F,
            G
        ]);
        return (0, e.jsx)(_B, {
            className: _n.isFadingOut ? 'animated fadeOut' : '',
            children: (0, e.jsxs)(_C, {
                ref: E,
                children: [
                    (0, e.jsx)(_E, {
                        children: (0, e.jsx)(_z, {
                            text: _B,
                            noTimeLeft: H
                        })
                    }),
                    (0, e.jsx)(_D, {
                        style: {
                            width: I.width,
                            height: I.height
                        },
                        children: (0, e.jsx)(j.default, {
                            width: I.width,
                            height: I.height
                        })
                    }),
                    (0, e.jsxs)(_F, {
                        children: [
                            (0, e.jsx)('b', {
                                children: 'Drawer:'
                            }),
                            ' ',
                            C.name
                        ]
                    })
                ]
            })
        });
    });
    const _B = h.default.div(p || (p = v`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`)),
        _C = h.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column vc hc'
        })(q || (q = v`
  overflow: hidden;
  z-index: 1;
`)),
        _D = (0, h.default)(i.HandDrawnDiv)(r || (r = v`
  flex-shrink: 0;
  background: ${ 0 };
  overflow: hidden;
`), f.default.White),
        _E = h.default.div(s || (s = v`
  font-size: 45px;
  margin-bottom: 10px;
`)),
        _F = h.default.div(t || (t = v`
  font-size: 22px;
  margin-top: 10px;
`)),
        _G = h.default.span(u || (u = v``));
}), b.register('OQm8Z', function(c, d) {
    _n(c.exports, 'HandDrawnDiv', function() {
        return _g;
    });
    var e = b('hEZVH');
    let f;
    const _g = b('Axq+p').default.div(f || (f = (_n => _n)`
  border: solid
    ${ 0 }px
    ${ 0 };
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  -webkit-transform: translateZ(0); // needed in Safari for some weird reason
`), _n => void 0 !== _n.borderWidth ? _n.borderWidth : 3, e.default.Black);
}), b.register('idGo3', function(c, d) {
    _n(c.exports, 'default', function() {
        return _k;
    });
    var e = b('0hzx+'),
        f = b('sjRDa'),
        g = b('A6lcN'),
        h = b('YuT/D'),
        i = b('2x11J'),
        j = b('LEQ5w');
    var _k = (0, i.observer)(_n => {
        const {
            draw: l
        } = j.useContext(f.default), m = j.useRef();
        return j.useEffect(() => {
            const _n = (0, h.reaction)(() => l.latestLine, _n => {
                    var o;
                    _n && (null == m || null === (o = m.current) || void 0 === o || o.addLine(_n));
                }),
                o = (0, h.reaction)(() => l.round.drawingBase64, _n => {
                    var p;
                    _n && (null == m || null === (p = m.current) || void 0 === p || p.drawImage(_n));
                });
            return () => {
                _n(), o();
            };
        }, []), (0, e.jsx)(g.default, {
            ref: m,
            height: _c.height,
            width: _c.width,
            canEdit: !1
        });
    });
}), b.register('FgYUV', function(_c, d) {
    Object.defineProperty(_c.exports, '__esModule', {
        value: !0
    });
    var e, f = function() {
            function g(h, i) {
                for (var j = 0; j < i.length; j++) {
                    var k = i[j];
                    k.enumerable = k.enumerable || !1, k.configurable = !0, 'value' in k && (k.writable = !0), Object.defineProperty(h, k.key, k);
                }
            }
            return function(g, h, i) {
                return h && _c(g.prototype, h), i && _c(g, i), g;
            };
        }(),
        g = b('LEQ5w'),
        h = (e = g) && e.__esModule ? e : {
            default: e
        },
        i = b('V9HIq');
    var j = {
            position: 'relative'
        },
        k = function(l) {
            function m(n) {
                ! function(o, p) {
                    if (!(o instanceof p))
                        throw new TypeError('Cannot call a class as a function');
                }(this, m);
                var o = function(p, q) {
                    if (!p)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !q || 'object' != typeof q && 'function' != typeof q ? p : q;
                }(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, n));
                return o.setRef = o.setRef.bind(o), o;
            }
            return function(m, n) {
                if ('function' != typeof n && null !== n)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof n);
                m.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: m,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(m, n) : m.__proto__ = n);
            }(d, l), f(d, [{
                    key: 'componentWillReceiveProps',
                    value: function(m) {
                        m.active && !this.props.active && (0, i.confetti)(this.container, m.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(m) {
                        this.container = m;
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
            ]), d;
        }(g.Component);
    _c.exports.default = k;
}), b.register('V9HIq', function(c, d) {
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    }), c.exports.confetti = function(e) {
        var f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            g = Object.assign({}, _l, f),
            h = g.elementCount,
            i = g.colors,
            j = g.width,
            k = g.height,
            l = g.angle,
            m = g.spread,
            n = g.startVelocity,
            o = g.decay,
            p = g.duration,
            q = g.random,
            r = a(e, h, i, j, k),
            s = r.map(function(t) {
                return {
                    element: t,
                    physics: b(l, m, n, q)
                };
            });
        return _j(e, s, o, p);
    };

    function e(f, g, h, i, _j) {
        return Array.from({
            length: g
        }).map(function(k, _l) {
            var m = document.createElement('div'),
                n = h[_l % h.length];
            return m.style['background-color'] = n, m.style.width = i, m.style.height = _j, m.style.position = 'absolute', m.style.willChange = 'transform, opacity', f.appendChild(m), m;
        });
    }

    function e(f, g, h, i) {
        var j = f * (Math.PI / 180),
            k = g * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * i(),
            wobbleSpeed: 0.1 + 0.1 * i(),
            velocity: 0.5 * h + i() * h,
            angle2D: -j + (0.5 * k - i() * k),
            angle3D: -Math.PI / 4 + i() * (Math.PI / 2),
            tiltAngle: i() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * i()
        };
    }

    function e(f, g, h, i) {
        var j = void 0;
        return new Promise(function(k) {
            requestAnimationFrame(function _u(l) {
                j || (j = l);
                var m = j === l ? 0 : (l - j) / i;
                g.forEach(function(n) {
                    return function(o, p, q) {
                        o.physics.x += Math.cos(o.physics.angle2D) * o.physics.velocity, o.physics.y += Math.sin(o.physics.angle2D) * o.physics.velocity, o.physics.z += Math.sin(o.physics.angle3D) * o.physics.velocity, o.physics.wobble += o.physics.wobbleSpeed, o.physics.velocity *= q, o.physics.y += 3, o.physics.tiltAngle += o.physics.tiltAngleSpeed;
                        var r = o.physics,
                            s = r.x,
                            t = r.y,
                            _u = r.tiltAngle,
                            v = r.wobble,
                            w = 'translate3d(' + (s + 10 * Math.cos(v)) + 'px, ' + (t + 10 * Math.sin(v)) + 'px, 0) rotate3d(1, 1, 1, ' + _u + 'rad)';
                        o.element.style.transform = w, o.element.style.opacity = 1 - p;
                    }(n, m, h);
                }), l - j < i ? requestAnimationFrame(_f) : (g.forEach(function(n) {
                    if (n.element.parentNode === f)
                        return f.removeChild(n.element);
                }), k());
            });
        });
    }
    var e = {
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
}), b.register('YgAA2', function(c, d) {
    _I(c.exports, 'ConfettiContainer', function() {
        return _F;
    }), _I(c.exports, 'confettiConfig', function() {
        return _G;
    }), _I(c.exports, 'default', function() {
        return _I;
    });
    var e = b('1bFPu'),
        _f = b('0hzx+'),
        g = b('+gdru'),
        h = b('Tg04N'),
        i = b('Yv86d'),
        j = b('3rMVL'),
        k = b('hEZVH'),
        l = b('RMEzW'),
        m = b('rD3N6'),
        n = b('GT7Vh'),
        o = b('LEQ5w'),
        p = b('FgYUV'),
        q = b('Axq+p');
    let r, s, t, u, v, w, x, y = _I => _I;
    const z = q.default.div(r || (r = y`
  margin-top: 11.5%;
  animation-delay: ${ 0 }s;
  background: ${ 0 };
  color: ${ 0 };
  width: 240px;
  padding-bottom: 15px;
  position: relative;
  border-radius: 6px;
  box-shadow: ${ 0 };
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
`), _I => _I.animationDelay, _I => _I.colors.background, _I => _I.colors.text, m.default.basic),
        A = q.default.div(s || (s = y`
  position: absolute;
  top: -41px;
  left: 0;
  right: 0;
  margin: auto;
  width: 80px;
  height: 80px;
  background: ${ 0 };
  border-radius: 50%;
  font-size: 28px;
  color: ${ 0 };
  ${ 0 };
`), _I => _I.background, k.default.White, l.default.black),
        B = q.default.div(t || (t = y`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`)),
        C = q.default.div(u || (u = y`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 26px;
  ${ 0 };
`), l.default.black),
        D = q.default.div(v || (v = y`
  ${ 0 };
  width: 100%;
  font-size: 18px;
  margin-top: -4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`), l.default.bold),
        E = q.default.div(w || (w = y`
  ${ 0 };
  font-size: 14px;
  margin-left: 15px;
  margin-right: 15px;
`), l.default.normal),
        _F = q.default.div(x || (x = y`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        _G = {
            angle: 90,
            spread: 67,
            startVelocity: 60,
            elementCount: 50,
            decay: 0.87
        };
    class H extends o.Component {
        componentDidMount() {
            1 === this.props.position && setTimeout(() => {
                this.setState({
                    showConfetti: !0
                }), (0, j.inThanosMode)() || (0, j.inZombiesVsHumansMode)() || (0, j.playSound)(i.default.celebrate, {});
            }, 1000 * (this.getAnimationDelay() + 2.3));
        }
        render() {
            const _I = this.getColors();
            return (0, _f.jsxs)(_f.Fragment, {
                children: [
                    (0, _f.jsxs)(z, {
                        animationDelay: this.getAnimationDelay(),
                        colors: _I,
                        className: 'animated zoomInDown',
                        children: [
                            (0, _f.jsx)(A, {
                                background: this.getCircleBackground(),
                                children: (0, _f.jsx)(B, {
                                    children: this.getCircleMessage()
                                })
                            }),
                            (0, _f.jsx)(C, {
                                children: this.getMainName()
                            }),
                            (0, _f.jsx)(D, {
                                children: (0, j.getMoney)(this.props.snapshot.balance)
                            }),
                            (0, _f.jsx)(E, {
                                children: this.getDescription()
                            })
                        ]
                    }),
                    1 === this.props.position ? (0, _f.jsx)(_F, {
                        children: (0, _f.jsx)(_K(p), {
                            active: this.state.showConfetti,
                            config: _G
                        })
                    }) : null
                ]
            });
        }
        constructor(..._I) {
            super(..._I), (0, e.default)(this, 'state', {
                showConfetti: !1
            }), (0, e.default)(this, 'getColors', () => {
                const {
                    isPlayer: _I
                } = this.props;
                if (_I) {
                    const J = this.props.snapshot,
                        {
                            theme: _K
                        } = J,
                        L = this.props.themes,
                        M = L.filter(J => J.name === _K).length > 0 ? L.filter(J => J.name === _K)[0] : L.filter(J => 'Default' === J.name)[0];
                    return 'Default' === M.name ? {
                        background: k.default.White,
                        text: k.default.Black
                    } : {
                        background: M.question.background,
                        text: M.question.text
                    };
                }
                const J = this.props.snapshot;
                return {
                    background: (0, n.darken)(0.1, (0, j.getTeamColor)(J.id)),
                    text: k.default.White
                };
            }), (0, e.default)(this, 'getMainName', () => {
                const {
                    isPlayer: I
                } = this.props;
                if (I) {
                    return this.props.snapshot.name;
                }
                const J = this.props.snapshot;
                return (0, _f.jsx)(g.default, {
                    text: J.id
                });
            }), (0, e.default)(this, 'getDescription', () => {
                const {
                    isPlayer: I
                } = this.props;
                if (I)
                    return '';
                const J = this.props.snapshot;
                return (0, h.getTeamPlayerNames)(J.players);
            }), (0, e.default)(this, 'getAnimationDelay', () => {
                const {
                    position: I
                } = this.props;
                return 1 === I ? 4.6 : 2 === I ? 2.7 : 0;
            }), (0, e.default)(this, 'getCircleMessage', () => {
                const {
                    position: I
                } = this.props;
                return 1 === I ? '1st' : 2 === I ? '2nd' : '3rd';
            }), (0, e.default)(this, 'getCircleBackground', () => {
                const {
                    position: I
                } = this.props;
                return 1 === I ? 'conic-gradient(#edc800, #e3b600, #f3cf00, #ffe800, #ffe900, #ffeb00, #ffe000, #ebc500, #e0b100, #f1cc00, #fcdc00, #ffe500, #fad900, #eec200, #e7b900, #f7d300, #ffe800, #ffe300, #f5d100, #e6b900, #e3b600, #f4d000, #ffe400, #ebc600, #e3b600, #f6d500, #ffe900, #ffe90a, #edc800) content-box, linear-gradient(#f6d600, #f6d600) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box' : 2 === I ? 'conic-gradient(#d7d7d7, #c3c3c3, #cccccc, #c6c6c6, #d3d3d3, #d8d8d8, #d5d5d5, #d8d8d8, #d3d3d3, #c5c5c5, #c0c0c0, #bfbfbf, #d0d0d0, #d9d9d9, #d1d1d1, #c5c5c5, #c8c8c8, #d7d7d7, #d5d5d5, #cdcdcd, #c4c4c4, #d9d9d9, #cecece, #c5c5c5, #c5c5c5, #cdcdcd, #d8d8d8, #d9d9d9, #d7d7d7) content-box, linear-gradient(#d4d4d4, #d4d4d4) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box' : 'conic-gradient(#e6c9bf, #d2b5aa, #cbaea3, #d4b5ab, #e5c3bd, #d9c0b4, #d9bcb1, #c5a399, #e3c6bc, #e7cac0, #dec0b5, #d3b6ab, #cfada1, #d4b6ac, #e2c6c0, #e2c6c0, #d2b1a6, #d2b1a6, #d1b4a9, #e1c4ba, #e5c9be, #dec1b6, #d3b6ab, #ceb0a6, #cfada3, #d2b5aa, #dabdb2, #e5c9be, #e6c9bf) content-box, linear-gradient(#e5c9be, #e5c9be) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box';
            });
        }
    }
    var _I = H;
}), b.register('BXKZi0', function(c, d) {
    _k(c.exports, 'default', function() {
        return _h;
    });
    var e = b('LEQ5w'),
        f = b('+UcJ7'),
        g = b('dR/Gi');
    var _h = (_k, c) => {
        const [i, j] = e.useState(() => {
            var k, l;
            const m = _k && 'current' in _k ? _k.current : _k;
            return m ? [
                m.offsetWidth,
                m.offsetHeight
            ] : [
                null !== (k = null == c ? void 0 : c.initialWidth) && void 0 !== k ? k : 0,
                null !== (l = null == c ? void 0 : c.initialHeight) && void 0 !== l ? l : 0
            ];
        });
        return (0, g.default)(() => {
            const k = _k && 'current' in _k ? _k.current : _k;
            k && j([
                k.offsetWidth,
                k.offsetHeight
            ]);
        }, [_k]), (0, f.default)(_k, _k => {
            const k = _k.target;
            j([
                k.offsetWidth,
                k.offsetHeight
            ]);
        }), i;
    };
}), b.register('+UcJ7', function(c, d) {
    _k(c.exports, 'default', function() {
        return _k;
    });
    var e = b('iIbRn'),
        f = b('dR/Gi'),
        g = b('20TiJ'),
        h = b('18t62');
    let i;
    const j = () => i || (i = function() {
        const _k = new Map(),
            l = new(0, e.default)((0, h.default)((l, d) => {
                var m;
                if (1 === l.length)
                    null === (m = _k.get(l[0].target)) || void 0 === m || m(l[0], d);
                else
                    for (let n = 0; n < l.length; n++) {
                        var o;
                        null === (o = _k.get(l[n].target)) || void 0 === o || o(l[n], d);
                    }
            }));
        return {
            observer: l,
            subscribe(m, n) {
                l.observe(m), _k.set(m, n);
            },
            unsubscribe(m) {
                l.unobserve(m), _k.delete(m);
            }
        };
    }());
    var _k = function(l, m) {
        const n = j(),
            o = (0, g.default)(m);
        return (0, f.default)(() => {
            let p = !1;
            const q = l && 'current' in l ? l.current : l;
            if (q)
                return n.subscribe(q, (l, n) => {
                    p || o.current(l, n);
                }), () => {
                    p = !0, n.unsubscribe(q);
                };
        }, [
            l,
            n,
            o
        ]), n.observer;
    };
}), b.register('dR/Gi', function(c, d) {
    _f(c.exports, 'default', function() {
        return _e;
    });
    var _e = _c(b('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), b.register('20TiJ', function(_c, d) {
    _f(_c.exports, 'default', function() {
        return _f;
    });
    var e = b('LEQ5w');
    var _f = _f => {
        const g = e.useRef(_f);
        return e.useEffect(() => {
            g.current = _f;
        }), g;
    };
}), b.register('18t62', function(c, d) {
    _f(c.exports, 'default', function() {
        return b;
    });
    var e = function(_f) {
        var g = [],
            h = null,
            i = function() {
                for (var j = arguments.length, k = new Array(j), l = 0; l < j; l++)
                    k[l] = arguments[l];
                g = k, h || (h = requestAnimationFrame(function() {
                    h = null, _f.apply(void 0, g);
                }));
            };
        return i.cancel = function() {
            h && (cancelAnimationFrame(h), h = null);
        }, i;
    };
}), b.register('KxGsP', function(c, d) {
    _x(c.exports, 'Container', function() {
        return _w;
    }), _x(c.exports, 'default', function() {
        return _v;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('KKbtU'),
        i = b('OQm8Z'),
        j = b('hEZVH'),
        k = b('3rMVL'),
        l = b('2x11J'),
        m = b('sjRDa'),
        n = b('FRQ5V'),
        o = b('Li6uh'),
        p = b('Yv86d'),
        q = b('HMuOC');
    let r, s, t, u = _x => _x;
    var _v = (0, l.observer)(_x => {
        const {
            draw: w
        } = f.useContext(m.default);
        f.useEffect(() => {
            if (0 === w.round.secondsLeft) {
                let x;
                (0, k.musicIsOn)() && (x = setTimeout(() => {
                    p.default.draw.background.fade(p.default.draw.background.volume(), q.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 6000);
                }, 3500));
                const y = setTimeout(() => _x.fadeOut(), 6500),
                    z = setTimeout(() => {
                        (0, n.default)();
                    }, 8000);
                return () => {
                    clearTimeout(y), clearTimeout(z), x && clearTimeout(x);
                };
            }
        }, [w.round.secondsLeft]), f.useEffect(() => {
            if (p.default.draw.roundStart.play(), (0, k.musicIsOn)()) {
                p.default.draw.background.fade(p.default.draw.background.volume(), 0, 400);
                const _x = p.default.draw.funk,
                    y = 1.3,
                    z = 2,
                    A = w.round.secondsLeft,
                    B = 0.6,
                    C = _x.duration() - A - y - B - z;
                return _x.volume(0), _x.seek(C), setTimeout(() => {
                    _x.play(), _x.fade(0, q.DRAW_MODE_MUSIC_VOLUME, 9000);
                }, 1000 * B), () => {
                    _x.playing && _x.stop();
                };
            }
        }, []);
        return (0, e.jsxs)(_w, {
            children: [
                (0, e.jsx)('div', {
                    children: (0, e.jsx)(h.default, {
                        iconOnLeft: !0,
                        icon: (0, k.getAssetPath)('hand-drawn-clock.svg'),
                        value: w.round.secondsLeft
                    })
                }),
                (0, e.jsxs)('div', {
                    style: {
                        marginBottom: 4
                    },
                    className: w.round.secondsLeft ? '' : 'animated fadeOut',
                    children: [
                        (0, e.jsxs)(_x, {
                            onClick: () => {
                                w.showingFeed = !w.showingFeed;
                            },
                            children: [
                                w.showingFeed ? 'Hide' : 'Show',
                                ' Feed'
                            ]
                        }),
                        (0, e.jsx)(_x, {
                            onClick: () => {
                                (0, k.send)(o.default.draw.clear);
                            },
                            children: 'Clear Canvas'
                        }),
                        (0, e.jsx)(_y, {
                            onClick: n.default,
                            children: 'End Round Early'
                        })
                    ]
                })
            ]
        });
    });
    const _w = g.default.div.attrs({
            className: 'maxHeight flex flex-column'
        })(r || (r = u`
  padding: 20px 40px;
  z-index: 2;
  justify-content: space-between;
`)),
        _x = g.default.div(s || (s = u`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
  text-decoration: underline;
  cursor: pointer;
`)),
        _y = (0, g.default)(i.HandDrawnDiv).attrs({
            borderWidth: 2
        })(t || (t = u`
  text-transform: uppercase;
  cursor: pointer;
  line-height: 1;
  padding: 14px;
  font-size: 15px;
  background: ${ 0 };
`), j.default.White);
}), b.register('KKbtU', function(c, d) {
    _o(c.exports, 'default', function() {
        return _m;
    });
    var e = b('0hzx+'),
        f = b('hEZVH');
    b('LEQ5w');
    var g = b('Axq+p');
    let h, i, j, k, l = _o => _o;
    var _m = _o => (0, e.jsxs)(_n, {
        iconOnLeft: _o.iconOnLeft,
        children: [
            (0, e.jsx)(_o, {
                children: (0, e.jsx)(_p, {
                    src: _o.icon
                })
            }),
            (0, e.jsx)(_q, {
                children: _o.value
            })
        ]
    });
    const _n = g.default.div.attrs({
            className: 'flex flex-column'
        })(h || (h = l`
  align-items: ${ 0 };
`), _o => _o.iconOnLeft ? 'flex-start' : 'flex-end'),
        _o = g.default.div.attrs({
            className: 'flex hc vc'
        })(i || (i = l`
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 50%;
  border: solid 2px ${ 0 };
  background: ${ 0 };
  margin-bottom: -26px;
  position: relative;
`), f.default.Black, f.default.White),
        _p = g.default.img.attrs({
            className: 'maxWidth maxHeight'
        })(j || (j = l``)),
        _q = g.default.div.attrs({
            className: 'flex hc vc'
        })(k || (k = l`
  height: 100px;
  width: 100px;
  font-size: 31px;
  line-height: 1;
  border: solid 3px ${ 0 };
  background: ${ 0 };
  border-radius: 50%;
  margin-left: 6px;
`), f.default.Black, f.default.White);
}), b.register('FRQ5V', function(c, d) {
    _o(c.exports, 'default', function() {
        return _g;
    });
    var e = b('Li6uh'),
        f = b('3rMVL');
    var _g = () => {
        (0, f.send)(e.default.draw.endRound);
    };
}), b.register('HMuOC', function(c, d) {
    _o(c.exports, 'DRAW_MODE_MUSIC_VOLUME', function() {
        return b;
    }), _o(c.exports, 'DRAW_MODE_BACKGROUND_MUSIC_VOLUME', function() {
        return _f;
    }), _o(c.exports, 'DRAW_MODE_FONT', function() {
        return _g;
    });
    const e = 0.7,
        _f = 0.4,
        _g = '\'Pangolin\', sans-serif';
}), b.register('1+vjw', function(c, d) {
    _o(c.exports, 'default', function() {
        return _n;
    });
    var e = b('0hzx+'),
        f = b('3rMVL'),
        g = b('sjRDa'),
        h = b('2x11J'),
        i = b('LEQ5w'),
        j = b('KKbtU'),
        k = b('Owa9A'),
        l = b('KxGsP'),
        m = b('FRQ5V');
    var _n = (0, h.observer)(() => {
        var _o, p;
        const {
            draw: q
        } = i.useContext(g.default);
        i.useEffect(() => {
            var r, s, t;
            (null == q || null === (r = q.personCount) || void 0 === r ? void 0 : r.total) && (null == q || null === (s = q.personCount) || void 0 === s ? void 0 : s.total) === (null == q || null === (t = q.personCount) || void 0 === t ? void 0 : t.correct) && (q.everybodyGotLastRoundCorrect = !0, (0, m.default)());
        }, [
            null == q || null === (_o = q.personCount) || void 0 === _o ? void 0 : _o.total,
            null == q || null === (p = q.personCount) || void 0 === p ? void 0 : p.correct
        ]);
        return (0, e.jsxs)(l.Container, {
            children: [
                (0, e.jsx)('div', {
                    children: (0, e.jsx)(j.default, {
                        iconOnLeft: !1,
                        icon: (0, f.getAssetPath)('hand-drawn-check.svg'),
                        value: (null == q ? void 0 : q.personCount) ? null == q ? void 0 : q.personCount.correct : 0
                    })
                }),
                (0, e.jsx)('div', {
                    children: (0, e.jsx)(k.default, {})
                })
            ]
        });
    });
}), b.register('Owa9A', function(c, d) {
    _u(c.exports, 'default', function() {
        return _v;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('R6gfH'),
        h = b('Axq+p'),
        i = b('hEZVH'),
        j = b('fe6E3'),
        k = b('OQm8Z'),
        l = b('3rMVL'),
        m = b('2x11J'),
        n = b('+gdru'),
        o = b('YuT/D'),
        p = b('sjRDa');
    let q, r, s = _u => _u;
    const t = (0, m.observer)(() => {
        const {
            draw: _u
        } = f.useContext(p.default), [v, w] = f.useState([]), x = (0, j.debounce)(_u => {
            w(v => [
                ...v,
                _u
            ]);
        }, 120);
        f.useEffect(() => {
            const y = (0, o.reaction)(() => _u.latestFeedItem, _u => {
                _u && (_u => {
                    _u.important ? w(y => [
                        ...y,
                        _u
                    ]) : x(_u);
                })({
                    ..._u,
                    id: Date.now().toString() + Math.random().toString()
                });
            });
            return () => y();
        }, []);
        const y = f.useMemo(() => {
            let z = window.innerHeight;
            if (!z)
                return 2;
            z -= 200;
            const A = Math.floor(z / 43);
            return Math.max(A - 1, 2);
        }, []);
        return _u.showingFeed ? (0, e.jsx)(l.HideIfTabbedAway, {
            children: (0, e.jsx)('div', {
                style: {
                    position: 'relative'
                },
                children: (0, e.jsx)(g.default, {
                    enterAnimation: 'fade',
                    leaveAnimation: 'accordionVertical',
                    duration: 150,
                    children: (0, j.takeRight)(v, y).map(_u => (0, e.jsx)(_u, {
                        item: _u
                    }, `draw-feed-${ _u.id }`))
                })
            })
        }) : null;
    });
    class _u extends f.Component {
        render() {
            const {
                name: v,
                action: w,
                translateAllowed: x,
                nameColor: y,
                actionColor: z
            } = this.props.item;
            return (0, e.jsx)(_w, {
                children: (0, e.jsxs)(_x, {
                    children: [
                        v && (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)('b', {
                                    style: {
                                        color: y || i.default.Black
                                    },
                                    children: v
                                }),
                                '\xA0'
                            ]
                        }),
                        w && (0, e.jsx)('span', {
                            style: {
                                color: z || i.default.Black
                            },
                            children: x ? (0, e.jsx)(n.default, {
                                text: w
                            }) : w
                        })
                    ]
                })
            });
        }
    }
    var _v = t;
    const _w = (0, h.default)(k.HandDrawnDiv).attrs({
            className: 'flex vc',
            borderWidth: 2
        })(q || (q = s`
  width: 300px;
  margin-top: ${ 0 }px;
  height: ${ 0 }px;
  font-size: 16px;
  padding: 0px 14px;
  background: ${ 0 };
  // We need to remove the border radius in Safari, otherwise it acts strange
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      border-radius: 0px;
    }
  }
`), 8, 35, i.default.White),
        _x = h.default.span.attrs({
            className: 'maxWidth'
        })(r || (r = s`
  text-overflow: ellipsis;
  white-space: nowrap;
`));
}), b.register('FmMqd', function(c, d) {
    _t(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('0qu2j'),
        i = b('HjkV8'),
        j = b('vQ+ft'),
        k = b('3rMVL'),
        l = b('Yv86d'),
        m = b('HMuOC');
    let n, o, p = _t => _t;
    var _q = () => (f.useEffect(() => {
        (0, k.musicIsOn)() && l.default.draw.background.fade(l.default.draw.background.volume(), m.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 2000);
    }, []), (0, e.jsxs)(_r, {
        children: [
            (0, e.jsxs)(_s, {
                children: [
                    (0, e.jsx)(h.default, {}),
                    (0, e.jsx)(i.default, {})
                ]
            }),
            (0, e.jsx)(j.default, {})
        ]
    }));
    const _r = g.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column'
        })(n || (n = p``)),
        _s = g.default.div.attrs({
            className: 'flex animated fadeIn'
        })(o || (o = p`
  flex: 1;
  overflow: hidden;
  animation-duration: 2.2s;
`));
}), b.register('0qu2j', function(c, d) {
    _t(c.exports, 'default', function() {
        return _s;
    });
    var e = b('0hzx+'),
        f = b('A6lcN'),
        g = b('LEQ5w'),
        h = b('OQm8Z'),
        i = b('Axq+p'),
        j = b('BXKZi0'),
        k = b('sjRDa'),
        l = b('hEZVH'),
        m = b('+gdru');
    let n, o, p, q, r = _t => _t;
    var _s = () => {
        const {
            draw: {
                round: _t,
                everybodyGotLastRoundCorrect: u,
                drawingHistory: v
            }
        } = g.useContext(k.default);
        g.useEffect(() => {
            _t.drawingBase64 && v.push({
                image: _t.drawingBase64,
                name: _t.drawer.name,
                term: _t.term,
                index: v.length
            });
        }, []);
        const w = g.useRef(null),
            [x, y] = (0, j.default)(w),
            z = Math.min(x / 4, (y - 120) / 3),
            A = 4 * z,
            B = 3 * z;
        return (0, e.jsx)(_t, {
            children: (0, e.jsxs)(_u, {
                ref: w,
                children: [
                    (0, e.jsx)(_v, {
                        children: _t.term
                    }),
                    A && B ? (0, e.jsx)(h.HandDrawnDiv, {
                        style: {
                            width: A,
                            height: B
                        },
                        children: (0, e.jsx)(f.default, {
                            width: A,
                            height: B,
                            canEdit: !1,
                            initialImage: _t.drawingBase64
                        })
                    }) : null,
                    u ? (0, e.jsx)(_w, {
                        children: (0, e.jsx)(m.default, {
                            text: 'Everybody guessed correctly!'
                        })
                    }) : null
                ]
            })
        });
    };
    const _t = i.default.div.attrs({
            className: 'maxHeight'
        })(n || (n = r`
  width: 50%;
  padding: 30px;
  padding-right: 15px;
`)),
        _u = i.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column hc vc'
        })(o || (o = r``)),
        _v = i.default.div(p || (p = r`
  font-size: 40px;
  margin-bottom: 7px;
`)),
        _w = i.default.div(q || (q = r`
  background: ${ 0 };
  color: ${ 0 };
  margin-top: 16px;
  padding: 5px 20px;
  border-radius: 55px;
  font-size: 17px;
`), l.default.SuccessGreen, l.default.White);
}), b.register('HjkV8', function(c, d) {
    _t(c.exports, 'default', function() {
        return _s;
    });
    var e = b('0hzx+'),
        f = b('+gdru'),
        g = b('3rMVL'),
        h = b('sjRDa'),
        i = b('QWK7i'),
        j = b('2x11J'),
        k = b('LEQ5w'),
        l = b('Axq+p');
    let m, n, o, p, q = _t => _t;
    const r = _t => (0, e.jsxs)(_u, {
        children: [
            (0, e.jsx)(_v, {
                children: _t.name
            }),
            (0, e.jsxs)(_w, {
                children: [
                    '+ ',
                    (0, g.getMoney)(_t.amount)
                ]
            })
        ]
    });
    var _s = (0, j.observer)(() => {
        const {
            draw: {
                pointAdditions: _t
            }
        } = k.useContext(h.default);
        return (0, e.jsx)(_t, {
            children: _t.length ? (0, e.jsx)(e.Fragment, {
                children: _t.map(_t => (0, e.jsx)(r, {
                    name: _t.name,
                    amount: _t.amount
                }, `addition-${ _t.id }`))
            }) : (0, e.jsx)('div', {
                className: 'maxHeight maxWidth flex vc',
                children: (0, e.jsx)(_u, {
                    children: (0, e.jsx)('div', {
                        className: 'maxWidth',
                        style: {
                            textAlign: 'center'
                        },
                        children: (0, e.jsx)(f.default, {
                            text: 'Nobody was able to guess the term this time!'
                        })
                    })
                })
            })
        });
    });
    const _t = l.default.div.attrs({
            className: 'maxHeight scroll-y'
        })(m || (m = q`
  width: 50%;
  padding: 30px;
  padding-left: 15px;
`)),
        _u = l.default.div.attrs({
            className: 'maxWidth flex vc light-shadow'
        })(n || (n = q`
  background: rgba(255, 255, 255, 0.8);
  border-style: solid;
  border-width: 2px;
  border-color: ${ 0 };
  border-radius: 3px;
  padding: 30px 20px;
  margin-bottom: 10px;
  justify-content: space-between;
  font-size: 23px;
  line-height: 1;
  &:last-child {
    margin-bottom: 0px;
  }
`), i.default.Black),
        _v = l.default.div(o || (o = q`
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`)),
        _w = l.default.div(p || (p = q`
  color: #1b5e20;
  font-weight: bold;
  margin-left: 10px;
  flex-shrink: 0;
`));
}), b.register('QWK7i', function(c, d) {
    _p(c.exports, 'default', function() {
        return _e;
    });
    var _e = b('ibLRf19').default;
}), b.register('ibLRf19', function(c, d) {
    _p(c.exports, 'default', function() {
        return b;
    });
    var e = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), b.register('vQ+ft', function(c, d) {
    _p(c.exports, 'default', function() {
        return _o;
    });
    var e = b('0hzx+'),
        f = b('AIgxT'),
        g = b('ulE4q'),
        h = b('3rMVL'),
        i = b('AuGOs'),
        j = b('sjRDa'),
        k = b('2x11J'),
        l = b('LEQ5w'),
        m = b('Axq+p');
    let n;
    var _o = (0, k.observer)(() => {
        const {
            draw: _p
        } = l.useContext(j.default);
        return (0, e.jsxs)(_p, {
            children: [
                (0, e.jsx)(g.default, {
                    size: 'large',
                    type: 'primary',
                    style: {
                        marginRight: 15
                    },
                    icon: (0, e.jsx)(f.default, {}),
                    onClick: () => {
                        _p.status = i.DrawStatus.pickDrawer;
                    },
                    children: 'Start Next Round'
                }),
                (0, e.jsx)(g.default, {
                    type: 'link',
                    onClick: () => (0, h.endGame)(),
                    children: 'End Game'
                })
            ]
        });
    });
    const _p = m.default.div.attrs({
        className: 'maxWidth flex hc vc'
    })(n || (n = (_j => _j)`
  flex-shrink: 0;
  padding: 25px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 16px rgb(0 0 0 / 50%);
`));
}), b.register('AIgxT', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('yqz0G'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'TrophyOutlined';
    var _j = f.forwardRef(i);
}), b.register('yqz0G', function(c, d) {
    _v(c.exports, 'default', function() {
        return b;
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
                    d: 'M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z'
                }
            }]
        },
        name: 'trophy',
        theme: 'outlined'
    };
}), b.register('4Pp4R', function(c, d) {
    _v(c.exports, 'default', function() {
        return _u;
    });
    var e = b('0hzx+'),
        f = b('fmVdR'),
        g = b('+gdru'),
        h = b('3rMVL'),
        i = b('sjRDa'),
        j = b('QWK7i'),
        k = b('2x11J'),
        l = b('LEQ5w'),
        m = b('Axq+p'),
        n = b('3t1XR');
    let o, p, q, r, s, t = _v => _v;
    var _u = (0, k.observer)(() => {
        const {
            draw: _v
        } = l.useContext(i.default);
        return l.useEffect(() => {
            _v.personCount = null, _v.everybodyGotLastRoundCorrect = !1;
        }, []), (0, e.jsx)(_v, {
            children: (0, e.jsxs)(_w, {
                children: [
                    (0, e.jsx)(_x, {}),
                    (0, e.jsx)(_y, {
                        children: (0, e.jsx)(g.default, {
                            text: 'Who\'s drawing?'
                        })
                    }),
                    (0, e.jsx)(_z, {
                        children: (0, e.jsx)(g.default, {
                            text: 'Select the drawer for this round!'
                        })
                    }),
                    (0, e.jsx)(f.default, {}),
                    (0, e.jsx)(n.default, {})
                ]
            })
        });
    });
    const _v = m.default.div.attrs({
            className: 'maxWidth maxHeight scroll-y flex hc'
        })(o || (o = t`
  align-items: flex-start;
`)),
        _w = m.default.div.attrs({
            className: 'flex flex-column vc medium-shadow'
        })(p || (p = t`
  width: 80%;
  max-width: 690px;
  background: rgba(255, 255, 255, 0.9);
  border-style: solid;
  border-width: 3px;
  border-color: ${ 0 };
  border-radius: 8px;
  padding: 30px;
  margin: 20px;
`), j.default.Black),
        _x = m.default.img.attrs({
            src: (0, h.getAssetPath)('drawing.svg')
        })(q || (q = t`
  height: 160px;
  margin-bottom: 14px;
`)),
        _y = m.default.div(r || (r = t`
  font-size: 54px;
  font-weight: bold;
`)),
        _z = m.default.div(s || (s = t`
  font-size: 23px;
`));
}), b.register('3t1XR', function(c, d) {
    _v(c.exports, 'default', function() {
        return _u;
    });
    var e = b('0hzx+'),
        f = b('ulE4q'),
        g = b('Li6uh'),
        h = b('3rMVL'),
        i = b('sjRDa'),
        j = b('fe6E3'),
        k = b('2x11J'),
        l = b('LEQ5w'),
        m = b('Axq+p'),
        n = b('OQm8Z');
    let o, p, q, r, s = _v => _v;
    const t = _v => (0, e.jsxs)(_x, {
        children: [
            (0, e.jsx)(_y, {
                children: _v.name
            }),
            (0, e.jsx)(f.default, {
                type: 'dashed',
                onClick: _v.onSelect,
                children: 'Select'
            })
        ]
    });
    var _u = (0, k.observer)(() => {
        const {
            players: {
                players: _v
            }
        } = l.useContext(i.default), w = _v => {
            (0, h.send)(g.default.draw.createRound, _v);
        };
        return (0, e.jsxs)(_v, {
            children: [
                (0, e.jsxs)(_w, {
                    children: [
                        (0, e.jsxs)('div', {
                            className: 'flex vc',
                            children: [
                                (0, e.jsx)('img', {
                                    src: (0, h.getAssetPath)('dices.svg'),
                                    style: {
                                        height: 38
                                    }
                                }),
                                (0, e.jsx)('div', {
                                    style: {
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        marginLeft: 13
                                    },
                                    children: 'Random Student'
                                })
                            ]
                        }),
                        (0, e.jsx)(f.default, {
                            size: 'large',
                            type: 'primary',
                            onClick: () => {
                                if (!_v.length)
                                    return;
                                const x = (0, j.sample)(_v);
                                w(x.id);
                            },
                            children: 'Select'
                        })
                    ]
                }),
                _v.slice().sort((_v, w) => ((_v, w) => {
                    const x = _v.toLowerCase(),
                        y = w.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                })(_v.name, w.name)).map(_v => (0, e.jsx)(t, {
                    name: _v.name,
                    onSelect: () => w(_v.id)
                }, _v.id))
            ]
        });
    });
    const _v = m.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = s``)),
        _w = (0, m.default)(n.HandDrawnDiv).attrs({
            className: 'maxWidth flex vc'
        })(p || (p = s`
  justify-content: space-between;
  padding: 12px 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`)),
        _x = m.default.div.attrs({
            className: 'maxWidth flex vc'
        })(q || (q = s`
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
        _y = m.default.div(r || (r = s`
  font-size: 19px;
`));
}), b.register('hkc4V', function(c, d) {
    _s(c.exports, 'default', function() {
        return _r;
    });
    var e = b('0hzx+'),
        f = b('3rMVL'),
        g = b('sjRDa'),
        h = b('2x11J'),
        i = b('LEQ5w'),
        j = b('Axq+p'),
        k = b('OQm8Z');
    let l, m, n, o, p, q = _s => _s;
    var _r = (0, h.observer)(() => {
        var _s;
        const {
            draw: {
                round: t
            }
        } = i.useContext(g.default);
        return (null == t || null === (_s = t.drawer) || void 0 === _s ? void 0 : _s.name) ? (0, e.jsx)(_s, {
            children: (0, e.jsxs)(_t, {
                children: [
                    (0, e.jsx)(_u, {}),
                    (0, e.jsx)(_v, {
                        children: 'Get ready!'
                    }),
                    (0, e.jsxs)(_w, {
                        children: [
                            t.drawer.name,
                            ' is selecting a term...'
                        ]
                    })
                ]
            })
        }) : null;
    });
    const _s = j.default.div.attrs({
            className: 'maxWidth maxHeight flex hc vc'
        })(l || (l = q`
  padding: 30px;
  text-align: center;
`)),
        _t = (0, j.default)(k.HandDrawnDiv).attrs({
            className: 'flex hc vc flex-column medium-shadow'
        })(m || (m = q`
  height: 440px;
  width: 600px;
  background: rgba(255, 255, 255, 0.7);
`)),
        _u = j.default.img.attrs({
            src: (0, f.getAssetPath)('paint.svg')
        })(n || (n = q`
  height: 160px;
`)),
        _v = j.default.div(o || (o = q`
  margin-top: 20px;
  font-size: 68px;
  font-weight: bold;
`)),
        _w = j.default.div(p || (p = q`
  font-size: 30px;
  margin-top: --6px;
`));
}), b.register('PhJZT', function(c, d) {
    _x(c.exports, 'default', function() {
        return _w;
    });
    var e = b('0hzx+'),
        f = b('mFvD7'),
        g = b('ulE4q'),
        h = b('ijg0s'),
        i = b('Yv86d'),
        j = b('hEZVH'),
        k = b('RMEzW'),
        l = b('AuGOs'),
        m = b('sjRDa'),
        n = b('2x11J'),
        o = b('LEQ5w'),
        p = b('Axq+p'),
        q = b('HMuOC');
    let r, s, t, u, v = _x => _x;
    var _w = (0, n.observer)(() => {
        const {
            gameValues: {
                gameCode: _x
            },
            gameOptions: y,
            draw: z
        } = o.useContext(m.default);
        return (0, e.jsxs)(_x, {
            children: [
                (0, e.jsxs)(_y, {
                    children: [
                        (0, e.jsx)(_z, {}),
                        (0, e.jsxs)(_A, {
                            children: [
                                (0, e.jsx)('b', {
                                    children: 'Game Code:'
                                }),
                                ' ',
                                _x
                            ]
                        })
                    ]
                }),
                (0, e.jsx)('div', {
                    children: (0, e.jsx)(h.default, {
                        title: `Turn ${ y.music ? 'Off' : 'On' } Music`,
                        placement: 'left',
                        children: (0, e.jsx)(g.default, {
                            icon: (0, e.jsx)(f.default, {}),
                            type: 'primary',
                            shape: 'circle',
                            onClick: () => {
                                y.music ? (i.default.draw.background.volume(0), i.default.draw.funk.volume(0), y.music = !1) : (i.default.draw.background.volume(z.status === l.DrawStatus.drawing ? 0 : q.DRAW_MODE_BACKGROUND_MUSIC_VOLUME), i.default.draw.background.playing() || i.default.draw.background.play(), i.default.draw.funk.volume(q.DRAW_MODE_MUSIC_VOLUME), y.music = !0);
                            }
                        })
                    })
                })
            ]
        });
    });
    const _x = p.default.div.attrs({
            className: 'light-shadow flex vc'
        })(r || (r = v`
  flex-shrink: 0;
  color: ${ 0 };
  font-family: ${ 0 };
  font-size: 13px;
  background: ${ 0 };
  padding: 14px 19px;
  justify-content: space-between;
`), j.default.Black, k.default.fontFamilyName, j.default.White),
        _y = p.default.div(s || (s = v``)),
        _z = p.default.img.attrs({
            src: '/client/img/svgLogo.svg'
        })(t || (t = v`
  height: 22px;
`)),
        _A = p.default.div(u || (u = v`
  font-size: 14px;
  margin-top: 10px;
  line-height: 1;
  opacity: 0.7;
`));
}), b.register('cD5Jd', function(c, d) {
    _u(c.exports, 'default', function() {
        return _t;
    });
    var e = b('0hzx+'),
        f = b('OZFZ2'),
        g = b('LEQ5w'),
        h = b('Axq+p'),
        i = b('GBKUp'),
        j = b('pY27S'),
        k = b('c2f/y'),
        l = b('IXV11'),
        m = b('2x11J'),
        n = b('sjRDa'),
        o = b('FMB45'),
        p = b('UesAb');
    let q, r, s = _u => _u;
    var _t = (0, m.observer)(() => {
        const {
            pardy: _u
        } = g.useContext(n.default), v = () => {
            _u.screen = o.PardyScreen.home;
        }, w = !(!_u || !_u.currentRound || 'Finale' !== _u.currentRound.type) ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.2)';
        return (0, e.jsx)(f.AnimateSharedLayout, {
            children: (0, e.jsx)(p.default, {
                children: (0, e.jsxs)(_u, {
                    style: {
                        background: w
                    },
                    children: [
                        (0, e.jsx)(j.default, {}),
                        (0, e.jsx)(_v, {
                            children: _u.screen === o.PardyScreen.home ? (0, e.jsx)(i.default, {}) : _u.screen === o.PardyScreen.answer ? (0, e.jsx)(l.default, {
                                setToHomeScreen: v
                            }) : (0, e.jsx)(k.default, {
                                setToHomeScreen: v
                            })
                        })
                    ]
                })
            })
        });
    });
    const _u = h.default.div.attrs({
            className: 'flex flex-column'
        })(q || (q = s`
  font-family: 'Londrina Solid', cursive;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  div {
    overflow: hidden;
  }
`)),
        _v = h.default.div(r || (r = s`
  flex: 1;
  overflow: hidden;
`));
}), b.register('OZFZ2', function(c, d) {
    _k(c.exports, 'AnimateSharedLayout', function() {
        return _j;
    });
    var e = b('t3uQw'),
        f = b('LEQ5w'),
        g = b('mk5EJ'),
        h = b('xzELX');
    let i = 0;
    const _j = ({
        children: _k
    }) => (f.useEffect(() => {
        (0, e.warning)(!1, 'AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations');
    }, []), f.createElement(h.LayoutGroup, {
        id: (0, g.useConstant)(() => 'asl-' + i++)
    }, _k));
}), b.register('xzELX', function(c, d) {
    _l(c.exports, 'LayoutGroup', function() {
        return _k;
    });
    var e = b('LEQ5w'),
        f = (e = b('LEQ5w'), b('OelFa')),
        g = b('5gF4e'),
        h = b('v3o9Z'),
        i = b('rfY5W');
    const j = _l => !0 === _l,
        _k = ({
            children: _l,
            id: m,
            inheritId: n,
            inherit: o = !0
        }) => {
            void 0 !== n && (o = n);
            const p = (0, e.useContext)(f.LayoutGroupContext),
                q = (0, e.useContext)(g.DeprecatedLayoutGroupContext),
                [r, s] = (0, h.useForceUpdate)(),
                t = (0, e.useRef)(null),
                u = p.id || q;
            null === t.current && ((_l => j(!0 === _l) || 'id' === _l)(o) && u && (m = m ? u + '-' + m : u), t.current = {
                id: m,
                group: j(o) && p.group || (0, i.nodeGroup)()
            });
            const v = (0, e.useMemo)(() => ({
                ...t.current,
                forceRender: r
            }), [s]);
            return e.createElement(f.LayoutGroupContext.Provider, {
                value: v
            }, _l);
        };
}), b.register('5gF4e', function(c, d) {
    _i(c.exports, 'DeprecatedLayoutGroupContext', function() {
        return _e;
    });
    const _e = (0, b('LEQ5w').createContext)(null);
}), b.register('v3o9Z', function(c, d) {
    _i(c.exports, 'useForceUpdate', function() {
        return _h;
    });
    var e = b('bGU5Z'),
        f = b('LEQ5w'),
        g = b('u6iOF');

    function _h() {
        const _i = (0, g.useIsMounted)(),
            [j, k] = (0, f.useState)(0),
            l = (0, f.useCallback)(() => {
                _i.current && k(j + 1);
            }, [j]);
        return [
            (0, f.useCallback)(() => e.sync.postRender(l), [l]),
            j
        ];
    }
}), b.register('u6iOF', function(c, d) {
    _h(c.exports, 'useIsMounted', function() {
        return _g;
    });
    var e = b('LEQ5w'),
        f = b('wiv5g');

    function _g() {
        const _h = (0, e.useRef)(!1);
        return (0, f.useIsomorphicLayoutEffect)(() => (_h.current = !0, () => {
            _h.current = !1;
        }), []), _h;
    }
}), b.register('rfY5W', function(c, d) {
    _g(c.exports, 'nodeGroup', function() {
        return _f;
    });
    const e = _g => !_g.isLayoutDirty && _g.willUpdate(!1);

    function _f() {
        const _g = new Set(),
            h = new WeakMap(),
            i = () => _g.forEach(e);
        return {
            add: e => {
                _g.add(e), h.set(e, e.addEventListener('willUpdate', i));
            },
            remove: e => {
                var j;
                _g.delete(e), null === (j = h.get(e)) || void 0 === j || j(), h.delete(e), i();
            },
            dirty: i
        };
    }
}), b.register('GBKUp', function(c, d) {
    _r(c.exports, 'PardyHomeScreen', function() {
        return _n;
    }), _r(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('7yo70'),
        h = b('jxXLX'),
        i = b('Axq+p'),
        j = b('kJm9k'),
        k = b('TwXYL');
    let l, m, _n, o = _r => _r;
    var p;
    (p = _n || (_n = {})).board = 'board', p.rankings = 'rankings';
    var _q = () => {
        const [_r, s] = f.useState(_n.board);
        return (0, e.jsxs)(_r, {
            initial: {
                scale: 0.8,
                y: '20%',
                opacity: 0
            },
            animate: {
                scale: 1,
                y: 0,
                opacity: 1
            },
            transition: {
                duration: 0.7,
                ease: 'easeOut'
            },
            children: [
                (0, e.jsx)(_s, {
                    children: _r === _n.rankings ? (0, e.jsx)(h.default, {}) : (0, e.jsx)(g.default, {})
                }),
                (0, e.jsx)(j.default, {
                    screen: _r,
                    setToBoardScreen: () => s(_n.board),
                    setToRankingScreen: () => s(_n.rankings)
                })
            ]
        });
    };
    const _r = (0, i.default)(k.motion.div).attrs({
            className: 'flex maxWidth maxHeight flex-column'
        })(l || (l = o``)),
        _s = i.default.div(m || (m = o`
  flex: 1;
  z-index: 1;
  overflow: hidden;
`));
}), b.register('7yo70', function(c, d) {
    _m(c.exports, 'default', function() {
        return _l;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('NbYoq'),
        h = b('Axq+p'),
        i = b('2x11J'),
        j = b('sjRDa');
    let k;
    var _l = (0, i.observer)(() => {
        const {
            pardy: {
                board: _m
            }
        } = f.useContext(j.default);
        if (!_m)
            return null;
        const n = `${ Math.round(100 / _m.categories.length) }%`;
        return (0, e.jsx)(_m, {
            children: _m.categories.map((d, b) => (0, e.jsx)(g.default, {
                category: d,
                width: n,
                totalCategories: _m.categories.length,
                categoryIndex: b
            }, d.name))
        });
    });
    const _m = h.default.div.attrs({
        className: 'flex hc maxAll'
    })(k || (k = (_o => _o)`
  padding: 20px;
`));
}), b.register('NbYoq', function(c, d) {
    _o(c.exports, 'default', function() {
        return _t;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('1PBS4'),
        h = b('Axq+p'),
        i = b('hEZVH'),
        j = b('FMB45'),
        k = b('2x11J'),
        l = b('sjRDa'),
        m = b('3rMVL'),
        n = b('Yv86d');
    let o, p, q, r, s = _o => _o;
    var _t = (0, k.observer)(_o => {
        const {
            pardy: u
        } = f.useContext(l.default);
        return (0, e.jsxs)(_u, {
            width: _o.width,
            children: [
                (0, e.jsx)(_v, {
                    children: (0, e.jsx)(_w, {
                        children: _o.category.name
                    })
                }),
                (0, e.jsx)(_x, {
                    children: _o.category.items.map((d, b) => (0, e.jsx)(g.default, {
                        id: d.id,
                        amount: d.amount,
                        totalCategories: _o.totalCategories,
                        categoryIndex: _o.categoryIndex,
                        itemIndex: b,
                        onSelect: () => {
                            return b = d.id, n.default.pardy.music.fade(n.default.pardy.music.volume(), 0, 500), (0, m.playSound)(n.default.pardy.riser, {}), u.currentRound = {
                                type: 'Normal',
                                value: {
                                    category: _o.category.name,
                                    id: b
                                }
                            }, u.questionScreen = j.PardyQuestionScreen.preview, u.questionStatus = j.PardyQuestionStatus.preview, void(u.screen = j.PardyScreen.question);
                            var v;
                        },
                        disabled: u.disabledSections.includes(d.id)
                    }, `${ _o.category.name }-${ d.id }`))
                })
            ]
        });
    });
    const _u = h.default.div.attrs({
            className: 'flex flex-column vc'
        })(o || (o = s`
  height: 100%;
  width: ${ 0 };
  overflow: hidden;
`), _o => _o.width),
        _v = h.default.div.attrs({
            className: 'flex hc'
        })(p || (p = s`
  font-size: 32px;
  margin-bottom: 10px;
  flex-shrink: 0;
  text-shadow: 0px 3px 3px ${ 0 };
  width: 100%;
`), i.default.Black),
        _w = h.default.div(q || (q = s`
  max-width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`)),
        _x = h.default.div(r || (r = s`
  flex: 1;
  width: 100%;
`));
}), b.register('1PBS4', function(c, d) {
    _o(c.exports, 'default', function() {
        return _n;
    });
    var e = b('0hzx+'),
        f = b('3rMVL'),
        g = b('hEZVH');
    b('LEQ5w');
    var h = b('Axq+p'),
        i = b('TwXYL');
    let j, k, l, m = _o => _o;
    var _n = _o => {
        const o = ((_o, o, d) => {
                let p = !1,
                    q = !1;
                return _o < o || (p = !0), d < 5 || (q = !0), {
                    top: !0,
                    right: p,
                    bottom: q,
                    left: !0
                };
            })(_o.categoryIndex + 1, _o.totalCategories, _o.itemIndex + 1),
            p = _o => _o ? 2 : 0;
        return (0, e.jsx)(_o, {
            onClick: _o.disabled ? void 0 : _o.onSelect,
            style: {
                borderBottomWidth: p(o.bottom),
                borderTopWidth: p(o.top),
                borderLeftWidth: p(o.left),
                borderRightWidth: p(o.right),
                background: _o.disabled ? 'rgba(0,0,0,0.2' : 'transparent',
                cursor: _o.disabled ? 'not-allowed' : 'pointer'
            },
            children: (0, e.jsx)(_p, {
                style: {
                    opacity: _o.disabled ? 0.5 : 1,
                    pointerEvents: _o.disabled ? 'none' : 'auto'
                },
                layoutId: `item-${ _o.id }`,
                children: (0, e.jsx)(_q, {
                    layoutId: `item-${ _o.id }-amount`,
                    children: (0, f.getMoney)(_o.amount)
                })
            })
        });
    };
    const _o = h.default.div.attrs({
            className: 'flex hc vc'
        })(j || (j = m`
  background: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-color: ${ 0 };
  height: 20%;
  user-select: none;
`), g.default.White),
        _p = (0, h.default)(i.motion.div).attrs({
            className: 'maxAll flex-center'
        })(k || (k = m`
  text-shadow: 0px 2px 2px ${ 0 };
  transition: background 0.25s;
  font-size: 26px;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`), g.default.Black),
        _q = (0, h.default)(i.motion.div)(l || (l = m``));
}), b.register('jxXLX', function(c, d) {
    _o(c.exports, 'default', function() {
        return _n;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('LDv9i'),
        h = b('Axq+p'),
        i = b('2x11J'),
        j = b('sjRDa'),
        k = b('ApnZz'),
        l = b('PMl60');
    let m;
    var _n = (0, i.observer)(() => {
        const {
            players: _o,
            pardy: {
                powers: p
            }
        } = f.useContext(j.default), q = (0, k.leaderboardSorter)(_o.filteredPlayers), r = q[0], s = q.filter((_o, p) => 0 !== p), t = _o => {
            if (!_o)
                return null;
            const u = p.find(p => p.id === _o);
            return u ? u.background : null;
        };
        return (0, e.jsxs)('div', {
            className: 'flex flex-column maxHeight scroll-y',
            style: {
                padding: 50
            },
            children: [
                (0, e.jsx)('div', {
                    className: 'maxWidth flex hc',
                    style: {
                        marginTop: -10,
                        marginBottom: 40
                    },
                    children: r ? (0, e.jsx)(g.default, {
                        size: 'large',
                        place: '1st',
                        name: r.name,
                        amount: r.balance,
                        backgroundColor: t(r.power)
                    }) : null
                }),
                s && s.length ? (0, e.jsx)(_o, {
                    children: s.map((_o, p) => (0, e.jsx)(g.default, {
                        size: 'normal',
                        backgroundColor: t(_o.power),
                        name: _o.name,
                        amount: _o.balance,
                        place: (0, l.numberToRank)(p + 2)
                    }, _o.id))
                }) : null
            ]
        });
    });
    const _o = h.default.div.attrs({
        className: 'flex wrap hc vc'
    })(m || (m = (_B => _B)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
  justify-content: center;
`));
}), b.register('LDv9i', function(c, d) {
    _B(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('sHRDd'),
        g = b('b5kvC'),
        h = b('3rMVL'),
        i = b('RMEzW'),
        j = b('X133d');
    b('LEQ5w');
    var k = b('Axq+p');
    let l, m, n, o, p = _B => _B;
    var _q = _B => {
        const r = 'normal' === _B.size;
        return (0, e.jsxs)(_r, {
            className: r ? 'light-shadow' : 'medium-shadow',
            style: {
                width: r ? 300 : 600
            },
            children: [
                (0, e.jsx)(_s, {
                    children: _B.place
                }),
                (0, e.jsx)(_t, {
                    style: {
                        height: r ? 150 : 200,
                        backgroundColor: _B.backgroundColor || 'rgba(0,0,0,0.15)'
                    },
                    children: (0, e.jsx)(j.default, {
                        mode: 'single',
                        text: _B.name,
                        noBold: !0
                    })
                }),
                (0, e.jsx)(_u, {
                    children: (0, h.getMoney)(_B.amount)
                })
            ]
        });
    };
    const _r = k.default.div(l || (l = p`
  border-radius: 5px;
  border: 2px solid ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  max-width: 100%;
`), f.default.White, i.default.fontFamilyName, g.FontWeights.Bold),
        _s = k.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = p`
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 22px;
  border-bottom: 2px solid ${ 0 };
`), f.default.White),
        _t = k.default.div.attrs({
            className: 'flex hc vc maxWidth'
        })(n || (n = p`
  font-family: 'Londrina Solid', sans-serif;
  padding: 10px;
  text-shadow: #000 3px 3px 2px;
`)),
        _u = k.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = p`
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 22px;
  border-top: 2px solid ${ 0 };
`), f.default.White);
}), b.register('kJm9k', function(c, d) {
    _B(c.exports, 'default', function() {
        return _j;
    });
    var e = b('0hzx+'),
        f = b('ulE4q');
    b('LEQ5w');
    var g = b('Axq+p'),
        h = b('GBKUp');
    let i;
    var _j = _B => (0, e.jsxs)(_k, {
        children: [
            (0, e.jsx)(f.default, {
                type: _B.screen === h.PardyHomeScreen.board ? 'primary' : 'default',
                onClick: _B.setToBoardScreen,
                style: {
                    width: 140,
                    marginRight: 10
                },
                children: 'Board'
            }),
            (0, e.jsx)(f.default, {
                type: _B.screen === h.PardyHomeScreen.rankings ? 'primary' : 'default',
                onClick: _B.setToRankingScreen,
                style: {
                    width: 140
                },
                children: 'Rankings'
            })
        ]
    });
    const _k = g.default.div.attrs({
        className: 'flex hc vc'
    })(i || (i = (_B => _B)`
  flex-shrink: 0;
  height: 60px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  z-index: 2;
`));
}), b.register('pY27S', function(c, d) {
    _B(c.exports, 'default', function() {
        return _C;
    });
    var e = b('0hzx+'),
        f = b('/rAT0'),
        g = b('Yv86d'),
        h = b('3rMVL'),
        i = b('hEZVH'),
        j = b('rD3N6'),
        k = b('sjRDa'),
        l = b('FMB45'),
        m = b('TwXYL'),
        n = b('2x11J'),
        o = b('LEQ5w'),
        p = b('Axq+p'),
        q = b('7Vnm/'),
        r = b('flLKD'),
        s = b('lNW1W');
    let t, u, v, w, x, y, z = _B => _B;
    const A = (0, n.observer)(() => {
            const {
                gameValues: {
                    gameCode: _B
                },
                pardy: {
                    screen: C,
                    questionScreen: D,
                    questionStatus: E,
                    currentRound: F
                },
                gameOptions: G
            } = o.useContext(k.default), H = o.useMemo(() => C === l.PardyScreen.home, [C]), I = o.useCallback(() => {
                (0, h.endGame)();
            }, []), J = [{
                    key: 'skip-to-finale',
                    label: 'Skip To Finale',
                    onClick: s.default,
                    disabled: !H
                },
                {
                    key: 'toggle-music',
                    label: G.music ? 'Mute' : 'Enable Music',
                    onClick: () => {
                        const K = !G.music;
                        if (G.music = K, K)
                            if (C === l.PardyScreen.question && D === l.PardyQuestionScreen.question && E === l.PardyQuestionStatus.ask)
                                g.default.pardy.countdown.volume(q.default.countdownVolume);
                            else {
                                const L = C === l.PardyScreen.home,
                                    M = C === l.PardyScreen.answer,
                                    N = F && 'Finale' === F.type,
                                    O = D === l.PardyQuestionScreen.question && E === l.PardyQuestionStatus.timesUp;
                                (L || M || N || O) && (N ? g.default.pardy.finaleMusic.volume(q.default.finaleMusicVolume) : g.default.pardy.music.volume(q.default.musicVolume));
                            }
                        else
                            g.default.pardy.music.volume(0), g.default.pardy.countdown.volume(0), g.default.pardy.finaleMusic.volume(0);
                    }
                }
            ];
            return (0, e.jsxs)(_D, {
                children: [
                    (0, e.jsxs)(_E, {
                        children: [
                            'Code: ',
                            _B
                        ]
                    }),
                    (0, e.jsx)(_B, {}),
                    (0, e.jsx)(_I, {
                        children: (0, e.jsx)(f.default.Button, {
                            onClick: I,
                            menu: {
                                items: J
                            },
                            children: 'End Game'
                        })
                    })
                ]
            });
        }),
        _B = (0, n.observer)(() => {
            const {
                pardy: C
            } = o.useContext(k.default), D = (() => {
                const {
                    currentRound: E
                } = C;
                if (!E)
                    return null;
                if ('Finale' === E.type)
                    return 'The Finale';
                const F = (0, r.default)();
                return F && F.categoryName && F.amount ? `${ F.categoryName } - ${ (0, h.getMoney)(F.amount) }` : null;
            })(), E = !D || (C.screen === l.PardyScreen.home || C.questionScreen === l.PardyQuestionScreen.finale || C.questionScreen === l.PardyQuestionScreen.preview);
            return (0, e.jsx)(_F, {
                children: (0, e.jsxs)(m.motion.div, {
                    initial: {
                        y: -50
                    },
                    animate: {
                        y: E ? -50 : 0
                    },
                    transition: {
                        duration: 1,
                        ease: 'anticipate'
                    },
                    className: 'maxWidth',
                    children: [
                        (0, e.jsx)(_H, {
                            children: D || ''
                        }),
                        (0, e.jsx)(_G, {
                            children: (0, e.jsx)('img', {
                                src: (0, h.getAssetPath)('pardyLogo.png'),
                                style: {
                                    height: 45
                                }
                            })
                        })
                    ]
                })
            });
        });
    var _C = A;
    const _D = p.default.div.attrs({
            className: 'flex vc'
        })(t || (t = z`
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: ${ 0 };
  padding: 20px;
  box-shadow: ${ 0 };
  flex-shrink: 0;
  z-index: 2;
`), i.default.White, j.default.basic),
        _E = p.default.div(u || (u = z`
  flex-shrink: 0;
  width: ${ 0 }px;
`), 125),
        _F = p.default.div(v || (v = z`
  flex: 1;
  height: ${ 0 }px;
  overflow: hidden;
`), 50),
        _G = p.default.div.attrs({
            className: 'flex-center'
        })(w || (w = z`
  height: ${ 0 }px;
`), 50),
        _H = p.default.div.attrs({
            className: 'flex-center maxWidth'
        })(x || (x = z`
  height: ${ 0 }px;
  font-size: 22px;
  font-weight: 400;
`), 50),
        _I = p.default.div.attrs({
            className: 'flex'
        })(y || (y = z`
  flex-shrink: 0;
  width: ${ 0 }px;
  justify-content: flex-end;
`), 125);
}), b.register('7Vnm/', function(c, d) {
    _g(c.exports, 'default', function() {
        return b;
    });
    var e = {
        musicVolume: 0.25,
        finaleMusicVolume: 0.45,
        countdownVolume: 0.4
    };
}), b.register('flLKD', function(c, d) {
    _g(c.exports, 'default', function() {
        return _f;
    });
    var e = b('e3EXx');
    var _f = () => {
        const {
            currentRound: _g,
            board: h,
            finaleQuestionId: i
        } = e.default.pardy;
        if ('Finale' === _g.type)
            return {
                questionId: i
            };
        const {
            id: j,
            category: k
        } = _g.value, l = h.categories.find(_g => _g.name === k);
        if (!l)
            return null;
        const m = l.items.find(_g => _g.id === j);
        return m ? {
            categoryItemId: m.id,
            amount: m.amount,
            categoryName: l.name,
            questionId: m.questionId
        } : null;
    };
}), b.register('lNW1W', function(c, d) {
    _w(c.exports, 'default', function() {
        return _g;
    });
    var e = b('FMB45'),
        f = b('e3EXx');
    var _g = () => {
        f.default.pardy.currentRound = {
            type: 'Finale',
            value: void 0
        }, f.default.pardy.questionScreen = e.PardyQuestionScreen.finale, f.default.pardy.questionStatus = e.PardyQuestionStatus.preview, f.default.pardy.screen = e.PardyScreen.question;
    };
}), b.register('c2f/y', function(c, d) {
    _w(c.exports, 'default', function() {
        return _m;
    });
    var e = b('0hzx+'),
        f = b('sjRDa'),
        g = b('FMB45'),
        h = b('2x11J'),
        i = b('LEQ5w'),
        j = b('vo0K1'),
        k = b('A25X6'),
        l = b('WzNLj');
    var _m = (0, h.observer)(_w => {
        const {
            pardy: n
        } = i.useContext(f.default), o = () => {
            n.questionScreen = g.PardyQuestionScreen.question;
        };
        return n.questionScreen === g.PardyQuestionScreen.preview ? (0, e.jsx)(k.default, {
            setToQuestionScreen: o
        }) : n.questionScreen === g.PardyQuestionScreen.finale ? (0, e.jsx)(l.default, {
            setToQuestionScreen: o
        }) : (0, e.jsx)(j.default, {});
    });
}), b.register('vo0K1', function(c, d) {
    _w(c.exports, 'default', function() {
        return _v;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('EzFN0'),
        i = b('QcBcN'),
        j = b('9N5/L'),
        k = b('TwXYL'),
        l = b('2x11J'),
        m = b('sjRDa'),
        n = b('FMB45'),
        o = b('flLKD'),
        p = b('Yv86d'),
        q = b('3rMVL');
    let r, s, t = _w => _w;
    const u = {
        out: {
            opacity: 0,
            y: '-50%',
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
            x: '-100%'
        }
    };
    var _v = (0, l.observer)(() => {
        const {
            pardy: _w
        } = f.useContext(m.default), [x, y] = f.useState(0), [z, A] = f.useState(!1), B = f.useMemo(() => !(0, o.default)().categoryItemId, []);
        f.useEffect(() => {
            _w.questionScreen = n.PardyQuestionScreen.question;
            const C = (0, o.default)();
            C.categoryItemId && _w.disabledSections.push(C.categoryItemId);
        }, []);
        const C = x => {
            _w.questionStatus = n.PardyQuestionStatus.timesUp, x && ((0, q.playSound)(p.default.pardy.complete, {}), p.default.pardy.countdown.fade(p.default.pardy.countdown.volume(), 0, 600));
        };
        return (0, e.jsx)(_w, {
            children: (0, e.jsxs)(_x, {
                initial: u.out,
                animate: z ? u.movingOut : u.in,
                onAnimationComplete: () => {
                    z && (_w.screen = n.PardyScreen.answer);
                },
                transition: {
                    duration: 0.7,
                    ease: 'easeOut'
                },
                children: [
                    (0, e.jsx)(h.default, {
                        setToAskScreen: () => _w.questionStatus = n.PardyQuestionStatus.ask,
                        setToTimesUpScreen: C,
                        spaceBetweenQuestionAndEdgeOfContainer: x,
                        inFinale: B
                    }),
                    (0, e.jsx)(i.default, {
                        onSpaceBetweenChanged: _w => y(_w)
                    }),
                    (0, e.jsx)(j.default, {
                        animateOut: () => {
                            A(!0), setTimeout(() => {
                                (0, q.playSound)(p.default.pardy.swoosh, {});
                            }, 200);
                        },
                        spaceBetweenQuestionAndEdgeOfContainer: x,
                        setToTimesUpScreen: C
                    })
                ]
            })
        });
    });
    const _w = g.default.div.attrs({
            className: 'maxWidth maxHeight'
        })(r || (r = t`
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
`)),
        _x = (0, g.default)(k.motion.div).attrs({
            className: 'maxWidth maxHeight flex flex-column'
        })(s || (s = t`
  overflow: hidden;
`));
}), b.register('EzFN0', function(c, d) {
    _x(c.exports, 'default', function() {
        return _p;
    });
    var e = b('0hzx+'),
        f = b('sjRDa'),
        g = b('FMB45'),
        h = b('OZFZ2'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('Axq+p'),
        l = b('upaCp'),
        m = b('Lxki1'),
        n = b('zEGDM');
    let o;
    var _p = (0, i.observer)(_x => {
        const {
            pardy: {
                questionStatus: q
            }
        } = j.useContext(f.default), [r, s] = j.useState(!1), t = q => {
            q && s(!0), _x.setToTimesUpScreen(q);
        };
        return (0, e.jsx)(h.AnimateSharedLayout, {
            children: (0, e.jsx)(_q, {
                children: q === g.PardyQuestionStatus.preview ? (0, e.jsx)(m.default, {
                    setToAskScreen: _x.setToAskScreen,
                    spaceBetweenQuestionAndEdgeOfContainer: _x.spaceBetweenQuestionAndEdgeOfContainer
                }) : q === g.PardyQuestionStatus.timesUp ? (0, e.jsx)(n.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: _x.spaceBetweenQuestionAndEdgeOfContainer,
                    everybodyAnswered: r,
                    inFinale: _x.inFinale
                }) : q === g.PardyQuestionStatus.ask ? (0, e.jsx)(l.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: _x.spaceBetweenQuestionAndEdgeOfContainer,
                    setToTimesUpScreen: t
                }) : null
            })
        });
    });
    const _q = k.default.div.attrs({
        className: 'maxWidth'
    })(o || (o = (_x => _x)`
  height: 25%;
`));
}), b.register('upaCp', function(c, d) {
    _x(c.exports, 'default', function() {
        return _s;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('6rFPC'),
        h = b('Axq+p'),
        i = b('TwXYL'),
        j = b('2x11J'),
        k = b('sjRDa'),
        l = b('7Vnm/'),
        m = b('Yv86d'),
        n = b('3rMVL');
    let o, p, q, r = _x => _x;
    var _s = (0, j.observer)(_x => {
        const {
            pardy: {
                playersAnswered: t,
                playerCount: u
            },
            gameOptions: v
        } = f.useContext(k.default), w = v.modeOptions;
        f.useEffect(() => {
            t === u && u && _x.setToTimesUpScreen(!0);
        }, [
            t,
            u
        ]), f.useEffect(() => {
            (0, n.playSound)(m.default.pardy.roundStart, {});
            const _x = m.default.pardy.countdown;
            _x.stop();
            const y = w.questionDuration,
                z = _x.duration() - y - 6 - 0.6;
            _x.volume(0), _x.seek(z), setTimeout(() => {
                _x.play(), _x.fade(0, (0, n.musicIsOn)() ? l.default.countdownVolume : 0, 2700);
            }, 600);
        }, []);
        const x = f.useMemo(() => w.questionDuration, []);
        return (0, e.jsx)(_t, {
            children: (0, e.jsxs)(_u, {
                style: {
                    marginTop: _g.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [
                    (0, e.jsx)(g.default, {
                        seconds: x,
                        onFinish: _g.setToTimesUpScreen
                    }),
                    (0, e.jsxs)(_v, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.7
                        },
                        children: [
                            t,
                            '/',
                            u,
                            ' answered'
                        ]
                    })
                ]
            })
        });
    });
    const _t = h.default.div.attrs({
            className: 'maxWidth maxHeight flex vc hc'
        })(o || (o = r``)),
        _u = h.default.div.attrs({
            className: 'flex vc'
        })(p || (p = r`
  justify-content: space-between;
  width: 90%;
  opacity: 0.9;
`)),
        _v = (0, h.default)(i.motion.div)(q || (q = r`
  font-size: 24px;
`));
}), b.register('6rFPC', function(c, d) {
    _g(c.exports, 'default', function() {
        return _k;
    });
    var e = b('0hzx+'),
        f = b('VURM9'),
        g = b('TwXYL'),
        h = b('LEQ5w'),
        i = b('Axq+p');
    let j;
    var _k = _g => {
        const [l, m] = h.useState(_g.seconds);
        return (0, f.useIntervalWhen)(() => {
            l ? (m(_g => _g - 1), _g.onTick && _g.onTick()) : _g.onFinish();
        }, 1000), (0, e.jsx)(_l, {
            layoutId: 'time-circle',
            transition: {
                duration: 0.5
            },
            style: _g.style,
            children: l
        });
    };
    const _l = (0, i.default)(g.motion.div).attrs({
        className: 'flex hc vc'
    })(j || (j = (_g => _g)`
  height: 70px;
  width: 70px;
  font-size: 32px;
  border: 3px solid;
  border-radius: 50%;
  line-height: 1;
`));
}), b.register('VURM9', function(c, d) {
    _g(c.exports, 'useIntervalWhen', function() {
        return _f;
    });
    var e = b('LEQ5w');

    function _f(_g, h, i, j) {
        void 0 === h && (h = 0), void 0 === i && (i = !0), void 0 === j && (j = !1);
        var k = (0, e.useRef)();

        function l() {
            k.current && k.current();
        }
        (0, e.useEffect)(function() {
            k.current = _g;
        }), (0, e.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (i) {
                    j && _g();
                    var l = window.setInterval(_g, h);
                    return function() {
                        window.clearInterval(l);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            i,
            h
        ]);
    }
}), b.register('Lxki1', function(c, d) {
    _h(c.exports, 'default', function() {
        return _k;
    });
    var e = b('0hzx+'),
        f = b('Yv86d'),
        _g = b('3rMVL');
    b('LEQ5w');
    var h = b('Axq+p'),
        i = b('6rFPC');
    let j;
    var _k = _h => (0, e.jsx)(_l, {
        children: (0, e.jsx)(i.default, {
            seconds: 3,
            onFinish: _h.setToAskScreen,
            style: {
                marginTop: _h.spaceBetweenQuestionAndEdgeOfContainer
            },
            onTick: () => {
                (0, _g.playSound)(f.default.pardy.tick, {});
            }
        })
    });
    const _l = h.default.div.attrs({
        className: 'flex maxWidth maxHeight hc vc'
    })(j || (j = (_h => _h)``));
}), b.register('zEGDM', function(c, d) {
    _h(c.exports, 'default', function() {
        return _s;
    });
    var e = b('0hzx+'),
        f = b('YgAA2'),
        g = b('LEQ5w'),
        h = b('Axq+p'),
        i = b('FgYUV'),
        j = b('b5kvC'),
        k = b('TwXYL'),
        l = b('3rMVL'),
        m = b('Yv86d'),
        n = b('7Vnm/');
    let o, p, q, r = _h => _h;
    var _s = _h => {
        const [t, u] = g.useState(!1);
        return g.useEffect(() => {
            u(!0), setTimeout(() => {
                if ((0, l.musicIsOn)()) {
                    const v = _h.inFinale ? m.default.pardy.finaleMusic : m.default.pardy.music;
                    v.fade(v.volume(), _h.inFinale ? n.default.finaleMusicVolume : n.default.musicVolume, 1000);
                }
            }, 2500);
        }, []), (0, e.jsx)(_t, {
            children: (0, e.jsxs)(_u, {
                style: {
                    marginTop: _h.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [
                    (0, e.jsx)(f.ConfettiContainer, {
                        style: {
                            zIndex: 0
                        },
                        children: (0, e.jsx)(_c(i), {
                            active: t,
                            config: f.confettiConfig
                        })
                    }),
                    (0, e.jsx)(_v, {
                        initial: {
                            scale: 0,
                            opacity: 0.3
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        transition: {
                            ease: 'anticipate',
                            duration: 0.3
                        },
                        children: _h.everybodyAnswered ? 'Everybody answered!' : 'Time\'s up!'
                    })
                ]
            })
        });
    };
    const _t = h.default.div.attrs({
            className: 'flex maxWidth maxHeight vc hc'
        })(o || (o = r``)),
        _u = h.default.div(p || (p = r``)),
        _v = (0, h.default)(k.motion.div)(q || (q = r`
  font-size: 36px;
  font-weight: ${ 0 };
`), j.FontWeights.Bold);
}), b.register('QcBcN', function(_c, d) {
    _h(_c.exports, 'PardyQuestionContainer', function() {
        return _r;
    }), _h(_c.exports, 'PardyQuestionContent', function() {
        return _s;
    }), _h(_c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('BXKZi0'),
        g = b('w8Dki'),
        h = b('VSAwN'),
        i = b('T4lH8'),
        j = b('2x11J'),
        k = b('LEQ5w'),
        l = b('Axq+p'),
        m = b('VW6SA');
    let n, o, p = _h => _h;
    var _q = (0, j.observer)(_h => {
        const r = k.useRef(),
            [, s] = (0, f.default)(r),
            t = k.useRef(),
            [, u] = (0, f.default)(t),
            v = k.useMemo(m.default, []);
        if (!v)
            return null;
        k.useEffect(() => {
            const w = (s - u) / 2;
            _h.onSpaceBetweenChanged(w);
        }, [
            s,
            u
        ]);
        return (0, e.jsx)(_r, {
            ref: r,
            children: (0, e.jsx)(_s, {
                ref: t,
                children: v.text ? v.audio || v.image ? (0, e.jsx)(i.default, {
                    text: v.text,
                    image: v.image,
                    audio: v.audio,
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, e.jsx)(h.default, {
                    text: v.text || 'Question',
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, e.jsx)(g.default, {
                    image: v.image,
                    audio: v.audio,
                    latex: v.latex
                })
            })
        });
    });
    const _r = l.default.div.attrs({
            className: 'flex hc vc'
        })(n || (n = p`
  height: 50%;
  overflow: hidden;
`)),
        _s = l.default.div.attrs({
            className: 'flex hc'
        })(o || (o = p`
  font-size: 48px;
  width: 90%;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.13);
  text-align: center;
  overflow: hidden;
  height: 90%;
`));
}), b.register('VW6SA', function(c, d) {
    _h(c.exports, 'default', function() {
        return _g;
    });
    var e = b('e3EXx'),
        f = b('flLKD');
    var _g = () => {
        const _h = (0, f.default)();
        if (!_h)
            return null;
        return e.default.kit.questions.find(c => c._id === _h.questionId);
    };
}), b.register('9N5/L', function(c, d) {
    _u(c.exports, 'default', function() {
        return _n;
    });
    var e = b('0hzx+'),
        f = b('sjRDa'),
        g = b('FMB45'),
        h = b('2x11J'),
        i = b('LEQ5w'),
        j = b('Axq+p'),
        k = b('PM+5A'),
        l = b('v+7kN');
    let m;
    var _n = (0, h.observer)(_u => {
        const {
            pardy: {
                questionStatus: o
            }
        } = i.useContext(f.default);
        return (0, e.jsx)(_o, {
            children: o === g.PardyQuestionStatus.ask ? (0, e.jsx)(k.default, {
                spaceBetweenQuestionAndEdgeOfContainer: _u.spaceBetweenQuestionAndEdgeOfContainer,
                setToTimesUpScreen: () => _u.setToTimesUpScreen(!0)
            }) : o === g.PardyQuestionStatus.timesUp ? (0, e.jsx)(l.default, {
                spaceBetweenQuestionAndEdgeOfContainer: _u.spaceBetweenQuestionAndEdgeOfContainer,
                animateOut: _u.animateOut
            }) : null
        });
    });
    const _o = j.default.div.attrs({
        className: 'maxWidth flex hc'
    })(m || (m = (_u => _u)`
  height: 25%;
`));
}), b.register('PM+5A', function(c, d) {
    _u(c.exports, 'default', function() {
        return _l;
    });
    var e = b('0hzx+'),
        f = b('ulE4q'),
        g = b('TwXYL');
    b('LEQ5w');
    var h = b('Axq+p');
    let i, j, k = _u => _u;
    var _l = _u => (0, e.jsx)(_m, {
        children: (0, e.jsx)(_n, {
            style: {
                marginBottom: _u.spaceBetweenQuestionAndEdgeOfContainer
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 0.7
            },
            children: (0, e.jsx)(f.default, {
                onClick: _u.setToTimesUpScreen,
                type: 'primary',
                size: 'large',
                children: 'End Round Early'
            })
        })
    });
    const _m = h.default.div.attrs({
            className: 'flex maxWidth maxHeight vc'
        })(i || (i = k`
  justify-content: flex-end;
  width: 90%;
`)),
        _n = (0, h.default)(g.motion.div)(j || (j = k``));
}), b.register('v+7kN', function(c, d) {
    _u(c.exports, 'default', function() {
        return _n;
    });
    var e = b('0hzx+'),
        f = b('TwXYL');
    b('LEQ5w');
    var g = b('Axq+p'),
        h = b('6FPOE');
    let i, j, k, l = _u => _u;
    const m = {
        out: {
            opacity: 0,
            y: 60
        },
        in: {
            opacity: 1,
            y: 0
        }
    };
    var _n = _u => (0, e.jsx)(_o, {
        children: (0, e.jsx)(_p, {
            style: {
                marginBottom: _u.spaceBetweenQuestionAndEdgeOfContainer
            },
            children: (0, e.jsx)(_q, {
                initial: m.out,
                animate: m.in,
                transition: {
                    duration: 0.7,
                    delay: 1.3
                },
                children: (0, e.jsx)(h.default, {
                    delay: 2.5,
                    duration: 3.1,
                    onLoad: _u.animateOut
                })
            })
        })
    });
    const _o = g.default.div.attrs({
            className: 'flex maxWidth maxHeight hc vc'
        })(i || (i = l``)),
        _p = g.default.div(j || (j = l`
  width: 90%;
`)),
        _q = (0, g.default)(f.motion.div).attrs({
            className: 'maxWidth'
        })(k || (k = l``));
}), b.register('6FPOE', function(c, d) {
    _u(c.exports, 'default', function() {
        return _i;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('TwXYL'),
        g = b('Axq+p');
    let h;
    var _i = _u => (0, e.jsx)(_j, {
        style: {
            height: _u.height || 15
        },
        children: (0, e.jsx)(f.motion.div, {
            initial: {
                width: 0
            },
            animate: {
                width: '100%'
            },
            transition: {
                delay: _u.delay,
                duration: _u.duration,
                ease: 'easeInOut'
            },
            onAnimationComplete: _u.onLoad,
            style: {
                background: 'rgba(255, 255, 255, 0.7)',
                height: '100%'
            }
        })
    });
    const _j = g.default.div.attrs({
        className: 'maxWidth'
    })(h || (h = (_u => _u)`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  overflow: hidden;
`));
}), b.register('A25X6', function(c, d) {
    _u(c.exports, 'default', function() {
        return _B;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('TwXYL'),
        h = b('Axq+p'),
        i = b('sHRDd'),
        j = b('3rMVL'),
        k = b('6FPOE'),
        l = b('2x11J'),
        m = b('flLKD'),
        n = b('sjRDa'),
        o = b('FMB45'),
        p = b('Yv86d');
    let q, r, s, t, u, v, w, x, y = _u => _u;
    const z = {
            out: {
                opacity: 0,
                y: 30
            },
            in: {
                opacity: 1,
                y: -30
            }
        },
        A = {
            in: {
                opacity: 1,
                y: 0
            },
            out: {
                opacity: 0,
                y: '100%'
            }
        };
    var _B = (0, l.observer)(_u => {
        const {
            pardy: C
        } = f.useContext(n.default), [D, E] = f.useState(!1), [F, G] = f.useState(!1), H = f.useMemo(m.default, []);
        f.useEffect(() => {
            C.questionScreen = o.PardyQuestionScreen.preview;
        }, []);
        return H && H.categoryItemId && H.categoryName ? (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(_C, {
                    children: (0, e.jsx)(_D, {
                        layoutId: `item-${ H.categoryItemId }`,
                        transition: {
                            duration: 0.9
                        },
                        children: (0, e.jsxs)(_E, {
                            initial: A.in,
                            animate: F ? A.out : A.in,
                            transition: {
                                delay: 0.3,
                                duration: 0.7
                            },
                            onAnimationComplete: () => {
                                F && _u.setToQuestionScreen();
                            },
                            children: [
                                (0, e.jsx)(_G, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: H.categoryName
                                }),
                                (0, e.jsx)(_H, {
                                    layoutId: `item-${ H.categoryItemId }-amount`,
                                    transition: {
                                        duration: 0.9
                                    },
                                    children: (0, j.getMoney)(H.amount)
                                })
                            ]
                        })
                    })
                }),
                (0, e.jsx)(_I, {
                    children: (0, e.jsx)(_J, {
                        initial: z.out,
                        animate: D ? z.out : z.in,
                        transition: {
                            delay: D ? 0 : 0.5,
                            duration: 0.5
                        },
                        children: (0, e.jsx)(k.default, {
                            delay: 1.2,
                            duration: 1.4,
                            onLoad: () => {
                                E(!0), G(!0), setTimeout(() => {
                                    (0, j.playSound)(p.default.pardy.swoosh, {});
                                }, 200);
                            }
                        })
                    })
                })
            ]
        }) : null;
    });
    const _C = h.default.div.attrs({
            className: 'flex hc vc maxWidth maxHeight'
        })(q || (q = y``)),
        _D = (0, h.default)(g.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(r || (r = y`
  background: rgba(0, 0, 0, 0.2);
`)),
        _E = (0, h.default)(g.motion.div).attrs({
            className: 'flex flex-column hc vc maxWidth maxHeight'
        })(s || (s = y``)),
        F = (0, h.default)(g.motion.div)(t || (t = y`
  text-shadow: 0px 5px 5px ${ 0 };
`), i.default.Black),
        _G = (0, h.default)(F)(u || (u = y`
  font-size: 42px;
`)),
        _H = (0, h.default)(F)(v || (v = y`
  font-size: 142px;
`)),
        _I = h.default.div.attrs({
            className: 'maxWidth flex hc'
        })(w || (w = y`
  position: absolute;
  bottom: 0;
  left: 0;
`)),
        _J = (0, h.default)(g.motion.div)(x || (x = y`
  width: 80%;
`));
}), b.register('WzNLj', function(c, d) {
    _u(c.exports, 'ANIMATING_OUT_DURATION', function() {
        return _z;
    }), _u(c.exports, 'default', function() {
        return _A;
    });
    var e = b('0hzx+'),
        f = b('b5kvC'),
        g = b('Yv86d'),
        h = b('3rMVL'),
        i = b('sjRDa'),
        j = b('FMB45'),
        k = b('TwXYL'),
        l = b('2x11J'),
        m = b('LEQ5w'),
        n = b('Axq+p'),
        o = b('7Vnm/'),
        p = b('Wbxab'),
        q = b('DGeL4');
    h = b('3rMVL');
    let r, s, t, u, v, w = _u => _u;
    const x = {
            out: {
                opacity: 0,
                background: 'rgba(0,0,0,0)'
            },
            in: {
                opacity: 1,
                background: 'rgba(15,12,41, 1)'
            },
            movingOut: {
                opacity: 1,
                background: 'rgba(0,0,0,0.2)'
            }
        },
        y = {
            out: {
                opacity: 0,
                y: -70,
                scale: 0.9
            },
            in: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            movingOut: {
                y: '100%',
                scale: 1,
                opacity: 0
            }
        },
        _z = 0.7;
    var _A = (0, l.observer)(_u => {
        const {
            pardy: B
        } = m.useContext(i.default), [C, D] = m.useState(!1);
        m.useEffect(() => {
            B.questionScreen = j.PardyQuestionScreen.finale;
        }, []), m.useEffect(() => (g.default.pardy.music.fade(g.default.pardy.music.volume(), 0, 1000), setTimeout(() => {
            (0, h.playSound)(g.default.pardy.finaleMusic, {
                volume: (0, h.musicIsOn)() ? o.default.finaleMusicVolume : 0,
                fadeInDuration: 3000
            });
        }, 600), () => {
            g.default.pardy.finaleMusic.fade(g.default.pardy.finaleMusic.volume(), 0, 1500);
        }), []);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(_B, {
                    initial: x.out,
                    animate: C ? x.movingOut : x.in,
                    transition: {
                        duration: C ? _z : 0.5
                    },
                    onAnimationComplete: () => {
                        C && _u.setToQuestionScreen();
                    },
                    children: (0, e.jsxs)(_C, {
                        initial: y.out,
                        animate: C ? y.movingOut : y.in,
                        transition: {
                            duration: C ? _z : 1.4,
                            delay: C ? 0 : 3,
                            ease: 'easeOut'
                        },
                        children: [
                            (0, e.jsx)(_D, {
                                children: 'The Finale'
                            }),
                            (0, e.jsxs)(_E, {
                                children: [
                                    (0, e.jsx)(_F, {
                                        children: 'You will be asked one more question'
                                    }),
                                    (0, e.jsx)(_F, {
                                        children: 'Make your bet on whether or not you\'ll answer correctly'
                                    }),
                                    (0, e.jsx)(_F, {
                                        children: 'Bet as much or as little as you want; the maximum is your current cash amount'
                                    }),
                                    (0, e.jsx)(_F, {
                                        children: 'Powers are disabled for The Finale'
                                    })
                                ]
                            }),
                            (0, e.jsx)(p.default, {
                                exit: () => {
                                    D(!0), setTimeout(() => {
                                        (0, h.playSound)(g.default.pardy.swoosh, {});
                                    }, 200);
                                }
                            })
                        ]
                    })
                }),
                (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(q.default, {
                            animatingOut: C
                        }),
                        (0, e.jsx)(q.default, {
                            animatingOut: C
                        }),
                        (0, e.jsx)(q.default, {
                            animatingOut: C
                        }),
                        (0, e.jsx)(q.default, {
                            animatingOut: C
                        })
                    ]
                })
            ]
        });
    });
    const _B = (0, n.default)(k.motion.div).attrs({
            className: 'maxWidth maxHeight scroll-y'
        })(r || (r = w``)),
        _C = (0, n.default)(k.motion.div).attrs({
            className: 'maxWidth flex hc vc flex-column'
        })(s || (s = w`
  min-height: 100%;
  padding: 20px;
  z-index: 3;
`)),
        _D = n.default.div(t || (t = w`
  text-transform: uppercase;
  font-size: 94px;
  font-weight: ${ 0 };
  text-decoration: underline;
  margin-bottom: 20px;
`), f.FontWeights.UltraBold),
        _E = n.default.ul(u || (u = w`
  font-size: 26px;
  font-weight: ${ 0 };
`), f.FontWeights.Normal),
        _F = n.default.li(v || (v = w``));
}), b.register('Wbxab', function(c, d) {
    _u(c.exports, 'default', function() {
        return _o;
    });
    var e = b('0hzx+'),
        f = b('ulE4q'),
        g = b('b5kvC'),
        h = b('sjRDa'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('Axq+p');
    let l, m, n = _u => _u;
    var _o = (0, i.observer)(_u => {
        const {
            pardy: p
        } = j.useContext(h.default);
        return (0, e.jsxs)(_p, {
            children: [
                (0, e.jsxs)(_q, {
                    children: [
                        p.betsPlaced,
                        '/',
                        p.playerCount,
                        ' bets placed'
                    ]
                }),
                (0, e.jsx)(f.default, {
                    onClick: _u.exit,
                    size: 'large',
                    type: 'primary',
                    style: {
                        height: 50,
                        width: 220
                    },
                    children: 'Begin The Finale'
                })
            ]
        });
    });
    const _p = k.default.div.attrs({
            className: 'maxWidth flex vcc'
        })(l || (l = n`
  max-width: 900px;
  justify-content: space-between;
  margin-top: 40px;
`)),
        _q = k.default.div(m || (m = n`
  font-size: 24px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold);
}), b.register('DGeL4', function(c, d) {
    _u(c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('VURM9'),
        g = b('Lwb9P'),
        h = b('TwXYL'),
        i = b('gk6FN'),
        j = b('fe6E3'),
        k = b('LEQ5w'),
        l = b('Axq+p'),
        m = b('WzNLj');
    let n, o, p = _u => _u;
    var _q = _u => {
        const {
            x: r,
            y: s
        } = _t((0, j.random)(4000, 9000));
        return (0, e.jsx)(_r, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: _u.animatingOut ? 0 : 1
            },
            transition: {
                duration: _u.animatingOut ? m.ANIMATING_OUT_DURATION : 1.4
            },
            children: (0, e.jsx)(_s, {
                style: {
                    x: r,
                    y: s
                }
            })
        });
    };
    const _r = (0, l.default)(h.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(n || (n = p`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`)),
        _s = (0, l.default)(h.motion.div)(o || (o = p`
  height: 220px;
  width: 220px;
  border-radius: 50%;
  filter: blur(4px);
  background: #fff59d;
  opacity: 0.2;
`)),
        _t = (_u = 5000) => {
            const v = (0, i.useMotionValue)(0),
                w = (0, i.useMotionValue)(0),
                x = window.innerWidth,
                y = window.innerHeight,
                z = f => {
                    const A = (0, j.random)(0, x),
                        B = (0, j.random)(0, y);
                    f ? (v.set(A), w.set(B)) : ((0, g.animate)(v, A, {
                        duration: _u / 1000,
                        ease: 'easeInOut'
                    }), (0, g.animate)(w, B, {
                        duration: _u / 1000,
                        ease: 'easeInOut'
                    }));
                };
            return k.useEffect(() => {
                z(!0), z();
            }, []), (0, f.useIntervalWhen)(z, _u), {
                x: v,
                y: w
            };
        };
}), b.register('gk6FN', function(c, d) {
    _j(c.exports, 'useMotionValue', function() {
        return _i;
    });
    var e = b('LEQ5w'),
        f = b('dssd5'),
        g = b('v1rLj'),
        h = b('mk5EJ');

    function _i(_j) {
        const k = (0, h.useConstant)(() => (0, f.motionValue)(_j)),
            {
                isStatic: l
            } = (0, e.useContext)(g.MotionConfigContext);
        if (l) {
            const [, m] = (0, e.useState)(_j);
            (0, e.useEffect)(() => k.on('change', m), []);
        }
        return k;
    }
}), b.register('IXV11', function(c, d) {
    _A(c.exports, 'default', function() {
        return _r;
    });
    var e = b('0hzx+'),
        f = b('Yv86d'),
        g = b('3rMVL'),
        h = b('TwXYL'),
        i = b('LEQ5w'),
        j = b('Axq+p'),
        k = b('GgVqO'),
        l = b('u++9a'),
        m = b('PU+WA');
    let n, o, p = _A => _A;
    const q = {
        initial: {
            x: '100%',
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
            y: '-80%',
            x: 0,
            opacity: 1,
            scale: 0.8
        }
    };
    var _r = _A => {
        const [s, t] = i.useState(!1), [u, v] = i.useState(0), w = {
            out: {
                background: n = '#388e3c',
                opacity: 0
            },
            in: {
                background: n,
                opacity: 1
            }
        };
        var x;
        return (0, e.jsx)(_s, {
            initial: {
                background: 'rgba(0, 0, 0, 0.2)',
                opacity: 1
            },
            animate: s ? w.out : w.in,
            transition: {
                delay: s ? 0 : 0.2,
                duration: 0.7,
                ease: 'easeOut'
            },
            onAnimationComplete: () => {
                s && _A.setToHomeScreen();
            },
            children: (0, e.jsxs)(_t, {
                initial: q.initial,
                animate: s ? q.out : q.in,
                transition: {
                    duration: 0.7,
                    ease: 'easeOut'
                },
                children: [
                    (0, e.jsx)(m.default, {
                        spaceBetweenContentAndEdgeOfContainer: u
                    }),
                    (0, e.jsx)(k.default, {
                        onSpaceBetweenChanged: v
                    }),
                    (0, e.jsx)(l.default, {
                        spaceBetweenContentAndEdgeOfContainer: u,
                        exit: () => {
                            t(!0), setTimeout(() => {
                                (0, g.playSound)(f.default.pardy.swoosh, {});
                            }, 200);
                        }
                    })
                ]
            })
        });
    };
    const _s = (0, j.default)(h.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(n || (n = p`
  overflow: hidden;
`)),
        _t = (0, j.default)(h.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(o || (o = p``));
}), b.register('GgVqO', function(c, d) {
    _A(c.exports, 'default', function() {
        return _l;
    });
    var e = b('0hzx+'),
        f = b('BXKZi0'),
        g = b('VSAwN'),
        h = b('w8Dki'),
        i = b('LEQ5w'),
        j = b('QcBcN'),
        k = b('VW6SA');
    var _l = _A => {
        const m = i.useRef(),
            [, n] = (0, f.default)(m),
            o = i.useRef(),
            [, p] = (0, f.default)(o);
        i.useEffect(() => {
            const q = (n - p) / 2;
            _A.onSpaceBetweenChanged(q);
        }, [
            n,
            p
        ]);
        const q = i.useMemo(k.default, []);
        if (!q)
            return null;
        const r = q.answers.find(_A => _A.correct);
        return (0, e.jsx)(j.PardyQuestionContainer, {
            ref: m,
            children: (0, e.jsx)(j.PardyQuestionContent, {
                ref: o,
                children: r ? r.text ? (0, e.jsx)(g.default, {
                    text: r.text,
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, e.jsx)(h.default, {
                    image: r.image,
                    latex: r.latex
                }) : (0, e.jsx)(g.default, {
                    text: 'No Correct Answer!',
                    noBold: !0
                })
            })
        });
    };
}), b.register('u++9a', function(c, d) {
    _A(c.exports, 'default', function() {
        return _s;
    });
    var e = b('0hzx+'),
        f = b('ulE4q'),
        g = b('3rMVL'),
        h = b('sjRDa'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('Axq+p'),
        l = b('lNW1W');
    let m, n, o, p, q, r = _A => _A;
    var _s = (0, i.observer)(_A => {
        const {
            pardy: {
                playerCount: t,
                playersAnsweredCorrectly: u,
                nameOfFirstPlayerToAnswerCorrectly: v,
                board: w,
                disabledSections: x,
                currentRound: y
            }
        } = j.useContext(h.default), z = j.useMemo(() => {
            if ('Finale' === y.type)
                return {
                    text: 'View Final Results',
                    handler: () => {
                        (0, g.endGame)();
                    }
                };
            let A = 0;
            return w.categories.forEach(_A => {
                _A.items.forEach(() => A += 1);
            }), x.length >= A ? {
                text: 'Continue to The Finale',
                handler: () => {
                    (0, l.default)();
                }
            } : {
                text: 'Continue',
                handler: () => {
                    _A.exit();
                }
            };
        }, []);
        return (0, e.jsx)(_t, {
            children: (0, e.jsxs)(_u, {
                style: {
                    marginBottom: _A.spaceBetweenContentAndEdgeOfContainer
                },
                children: [
                    (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsxs)(_v, {
                                children: [
                                    u,
                                    '/',
                                    t,
                                    ' answered correctly'
                                ]
                            }),
                            v ? (0, e.jsxs)(_w, {
                                children: [
                                    v,
                                    ' was the first to answer correctly!'
                                ]
                            }) : null
                        ]
                    }),
                    (0, e.jsx)(_x, {
                        children: (0, e.jsx)(f.default, {
                            type: 'primary',
                            size: 'large',
                            style: {
                                width: 170
                            },
                            onClick: z.handler,
                            children: z.text
                        })
                    })
                ]
            })
        });
    });
    const _t = k.default.div.attrs({
            className: 'maxWidth flex vc hc'
        })(m || (m = r`
  height: 25%;
`)),
        _u = k.default.div.attrs({
            className: 'flex'
        })(n || (n = r`
  width: 90%;
  justify-content: space-between;
  align-items: flex-end;
`)),
        _v = k.default.div(o || (o = r`
  font-weight: 400;
  font-size: 22px;
`)),
        _w = k.default.div(p || (p = r`
  font-weight: 300;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
`)),
        _x = k.default.div(q || (q = r``));
}), b.register('PU+WA', function(c, d) {
    _A(c.exports, 'default', function() {
        return _k;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('Axq+p');
    let g, h, i, j = _A => _A;
    var _k = _A => (0, e.jsx)(_l, {
        children: (0, e.jsx)(_m, {
            style: {
                marginTop: _A.spaceBetweenContentAndEdgeOfContainer
            },
            children: (0, e.jsx)(_n, {
                children: 'Answer:'
            })
        })
    });
    const _l = f.default.div.attrs({
            className: 'maxWidth flex vc hc'
        })(g || (g = j`
  height: 25%;
`)),
        _m = f.default.div(h || (h = j``)),
        _n = f.default.div(i || (i = j`
  font-size: 32px;
`));
}), b.register('UesAb', function(c, d) {
    _A(c.exports, 'default', function() {
        return _j;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('Axq+p');
    let g, h, i = _A => _A;
    var _j = _A => (0, e.jsxs)(_k, {
        children: [
            (0, e.jsx)('div', {
                className: 'area',
                children: (0, e.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, e.jsx)('li', {}),
                        (0, e.jsx)('li', {}),
                        (0, e.jsx)('li', {}),
                        (0, e.jsx)('li', {}),
                        (0, e.jsx)('li', {}),
                        (0, e.jsx)('li', {}),
                        (0, e.jsx)('li', {}),
                        (0, e.jsx)('li', {}),
                        (0, e.jsx)('li', {}),
                        (0, e.jsx)('li', {})
                    ]
                })
            }),
            (0, e.jsx)(_l, {
                children: _A.children
            })
        ]
    });
    const _k = f.default.div(g || (g = i`
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
        _l = f.default.div.attrs({
            className: 'maxAll'
        })(h || (h = i`
  position: absolute;
  top: 0;
  left: 0;
`));
}), b.register('DsT4y', function(c, d) {
    _A(c.exports, 'default', function() {
        return _z;
    });
    var e = b('0hzx+'),
        f = b('RMEzW'),
        g = b('LEQ5w'),
        h = b('Axq+p'),
        i = b('xzBrG'),
        j = b('y8HX+'),
        k = b('A+7F9'),
        l = b('v9v42'),
        m = b('2x11J'),
        n = b('uvSHU'),
        o = b('3rMVL'),
        p = b('Yv86d'),
        q = b('HMuOC'),
        r = b('kd2GK'),
        s = b('sjRDa'),
        t = b('7Vnm/');
    let u, v, w = _A => _A;
    const x = h.default.div(u || (u = w`
  height: 100vh;
  width: 100%;
  font-family: ${ 0 };
  display: flex;
  animation-duration: 0.5s;
`), f.default.fontFamilyName),
        y = h.default.div.attrs({
            className: 'animated fadeIn'
        })(v || (v = w`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`));
    var _z = (0, m.observer)(() => {
        const {
            ui: _A
        } = g.useContext(s.default);
        g.useEffect(() => {
            if ((0, o.musicIsOn)() && (0, o.inDrawMode)() && (0, o.playSound)(p.default.draw.background, {
                    volume: q.DRAW_MODE_BACKGROUND_MUSIC_VOLUME
                }), (0, o.inPardyMode)()) {
                const B = p.default.pardy.music;
                (0, o.playSound)(B, {
                    volume: (0, o.musicIsOn)() ? t.default.musicVolume : 0
                });
            }
            (0, o.inLavaMode)() && (_A.backgroundColor = '#ac1900'), (0, o.inImposterMode)() && (_A.backgroundColor = '#000a12'), (0, o.inDrawMode)() && (_A.backgroundColor = '#f1f2f3');
        }, []);
        const B = g.useMemo(() => (0, o.inPardyMode)() ? r.default : g.Fragment, []);
        return _A.showingLavaPreScreen ? (0, e.jsx)(n.default, {}) : (0, e.jsx)(B, {
            children: (0, e.jsxs)(x, {
                children: [
                    (0, e.jsxs)(y, {
                        children: [
                            (0, e.jsx)(j.default, {}),
                            (0, e.jsx)(l.default, {}),
                            (0, e.jsx)(k.default, {})
                        ]
                    }),
                    (0, e.jsx)(i.default, {})
                ]
            })
        });
    });
}), b.register('xzBrG', function(c, d) {
    _A(c.exports, 'default', function() {
        return _A;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('oXQNI'),
        i = b('YRlpt'),
        j = b('3rMVL'),
        k = b('RMEzW'),
        l = b('2x11J'),
        m = b('LEQ5w'),
        n = b('Axq+p'),
        o = b('6XgQB1');
    let p, q, r, s, t = _A => _A;
    const u = (_A, c) => {
            const v = _A.name.toUpperCase(),
                w = c.name.toUpperCase();
            return v < w ? -1 : v > w ? 1 : 0;
        },
        v = n.default.div(p || (p = t`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3px;
`)),
        w = n.default.img.attrs({
            src: `${ (0, j.getAssetPath)('power-fight.svg') }`
        })(q || (q = t`
  height: 136px;
  margin-bottom: 12px;
  margin-top: 8px;
`)),
        x = n.default.h2(r || (r = t`
  font-size: 44px;
  font-family: 'Product Sans';
  font-weight: bold;
  margin-bottom: 3px;
`)),
        y = n.default.div(s || (s = t`
  display: flex;
  flex-wrap: wrap;
`));
    let z = class extends m.Component {
        render() {
            if (!this.props.gameValues.showBossBattleModal)
                return null;
            const _A = this.props.players.filteredPlayers.reverse();
            return (0, g.jsxs)(i.default, {
                open: this.props.gameValues.showBossBattleModal,
                footer: null,
                maskClosable: !1,
                closable: !1,
                keyboard: !1,
                children: [
                    (0, g.jsxs)(v, {
                        children: [
                            (0, g.jsx)(w, {
                                className: 'animated pulse infinite'
                            }),
                            (0, g.jsx)(x, {
                                children: 'Choose The Boss'
                            })
                        ]
                    }),
                    (0, g.jsx)('div', {
                        children: (0, g.jsx)(y, {
                            children: _A.sort(u).map(_A => (0, g.jsx)(h.default, {
                                'data-id': _A.id,
                                style: {
                                    display: 'flex',
                                    fontFamily: k.default.fontFamilyName,
                                    margin: '4px',
                                    fontSize: '17px',
                                    color: 'black'
                                },
                                bodyStyle: {
                                    padding: '10px 24px'
                                },
                                hoverable: !0,
                                onClick: this.handleClick,
                                children: (0, g.jsx)('span', {
                                    children: _A.name
                                })
                            }, _A.id))
                        })
                    })
                ]
            });
        }
        constructor(..._c) {
            super(..._c), (0, e.default)(this, 'handleClick', _c => {
                this.props.gameValues.bossId = _c.currentTarget.dataset.id, this.props.gameValues.currentRoute = o.GameStatus.teams;
            });
        }
    };
    z = (0, f.__decorate)([
        (0, l.inject)('engine', 'players', 'gameValues'),
        l.observer
    ], z);
    var _A = z;
}), b.register('y8HX+', function(c, d) {
    _c(c.exports, 'default', function() {
        return _p;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('2x11J'),
        i = b('LEQ5w'),
        j = b('3rMVL'),
        k = b('hEZVH'),
        l = b('4q/AQ'),
        m = b('1P5ls'),
        n = b('cH8qQ');
    let o = class extends i.Component {
        render() {
            return (0, g.jsx)(m.default, {
                theme: {
                    algorithm: n.default.darkAlgorithm,
                    token: {
                        colorBgBase: '#301C56'
                    }
                },
                children: (0, g.jsx)(l.default, {
                    gameCode: this.props.gameValues.gameCode,
                    background: this.getContainerBackground(),
                    color: this.getContainerColor(),
                    height: 220
                })
            });
        }
        constructor(..._c) {
            super(..._c), (0, e.default)(this, 'getContainerBackground', () => (0, j.inDrawMode)() ? 'rgba(0,0,0,0.1)' : 'rgba(0, 0, 0, 0.4)'), (0, e.default)(this, 'getContainerColor', () => (0, j.inDrawMode)() ? k.default.Black : k.default.White);
        }
    };
    o = (0, f.__decorate)([
        (0, h.inject)('gameValues'),
        h.observer
    ], o);
    var _p = o;
}), b.register('4q/AQ', function(c, d) {
    _c(c.exports, 'default', function() {
        return _u;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('2GeW4'),
        g = b('Axq+p'),
        h = b('PMl60'),
        i = b('jlX4s16'),
        j = b('MSsQO'),
        k = b('DzGwD'),
        l = b('3Bibb'),
        m = b('6CIVV'),
        n = b('led8j'),
        o = b('b5kvC'),
        p = b('vShe/');
    let q, r, s, t = _c => _c;
    var _u = _c => {
        const {
            gameCode: v
        } = _c, w = () => `${ (0, h.getDomain)() }/join?gc=${ v }`, x = () => {
            _c(i)(w()), j.default.success('Game link copied');
        };
        var y, z, A;
        return (0, e.jsxs)(_v, {
            style: {
                background: null !== (y = _c.background) && void 0 !== y ? y : 'rgba(48, 28, 86, 0.9)',
                color: null !== (z = _c.color) && void 0 !== z ? z : p.default.White,
                height: null !== (A = _c.height) && void 0 !== A ? A : 'auto'
            },
            children: [
                (0, e.jsxs)(_w, {
                    children: [
                        'Go to ',
                        (0, e.jsx)('b', {
                            children: window && window.location ? window.location.hostname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0] + '/join' : ''
                        }),
                        ' and enter code'
                    ]
                }),
                _c.gameCode ? (0, e.jsx)(k.default, {
                    overlayInnerStyle: {
                        padding: 20
                    },
                    content: (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsx)(l.default, {
                                value: w(),
                                size: 350,
                                bordered: !1
                            }),
                            (0, e.jsx)(n.default, {
                                block: !0,
                                onClick: x,
                                customFontWeight: o.FontWeights.Bold,
                                type: 'success',
                                style: {
                                    marginTop: 11
                                },
                                ariaLabel: 'Copy Join Link',
                                children: 'Copy Join Link'
                            })
                        ]
                    }),
                    children: (0, e.jsx)(_x, {
                        onClick: x,
                        children: v
                    })
                }) : (0, e.jsx)('div', {
                    className: 'flex-center',
                    style: {
                        height: 106,
                        marginTop: 13
                    },
                    children: (0, e.jsx)(m.default, {
                        size: 'large'
                    })
                })
            ]
        });
    };
    const _v = (0, g.default)(f.default).attrs({
            className: 'medium-shadow flex-column flex-center maxWidth'
        })(q || (q = t`
  line-height: 1;
  padding: 25px 40px;
`)),
        _w = g.default.div(r || (r = t`
  font-size: 32px;
`)),
        _x = g.default.div(s || (s = t`
  font-size: 106px;
  margin-top: 13px;
  font-weight: ${ 0 };
  cursor: pointer;
`), o.FontWeights.UltraBold);
}), b.register('2GeW4', function(_c, d) {
    _c(_c.exports, 'default', function() {
        return _f;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var _f = _c => {
        const g = g => {
            g.stopPropagation(), _c.onClick && _c.onClick(g);
        };
        return (0, e.jsx)('div', {
            style: {
                ..._c.style || {},
                pointerEvents: _c.disable ? 'none' : 'all'
            },
            className: _c.className,
            onMouseDown: g,
            onTouchStart: g,
            children: _c.children
        });
    };
}), b.register('jlX4s16', function(_c, d) {
    var e = b('RnV2k27'),
        f = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    _c.exports = function(g, h) {
        var i, j, k, l, m, n, o = !1;
        h || (h = {}), i = h.debug || !1;
        try {
            if (k = e(), l = document.createRange(), m = document.getSelection(), (n = document.createElement('span')).textContent = g, n.ariaHidden = 'true', n.style.all = 'unset', n.style.position = 'fixed', n.style.top = 0, n.style.clip = 'rect(0, 0, 0, 0)', n.style.whiteSpace = 'pre', n.style.webkitUserSelect = 'text', n.style.MozUserSelect = 'text', n.style.msUserSelect = 'text', n.style.userSelect = 'text', n.addEventListener('copy', function(p) {
                    if (p.stopPropagation(), h.format)
                        if (p.preventDefault(), void 0 === p.clipboardData) {
                            i && console.warn('unable to use e.clipboardData'), i && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var q = f[h.format] || f.default;
                            window.clipboardData.setData(q, g);
                        } else
                            p.clipboardData.clearData(), p.clipboardData.setData(h.format, g);
                    h.onCopy && (p.preventDefault(), h.onCopy(p.clipboardData));
                }), document.body.appendChild(n), l.selectNodeContents(n), m.addRange(l), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            o = !0;
        } catch (e) {
            i && console.error('unable to copy using execCommand: ', e), i && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(h.format || 'text', g), h.onCopy && h.onCopy(window.clipboardData), o = !0;
            } catch (e) {
                i && console.error('unable to copy using clipboardData: ', e), i && console.error('falling back to prompt'), j = function(p) {
                    var q = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return p.replace(/#{\s*key\s*}/g, q);
                }('message' in h ? h.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(j, g);
            }
        } finally {
            m && ('function' == typeof m.removeRange ? m.removeRange(l) : m.removeAllRanges()), n && document.body.removeChild(n), k();
        }
        return o;
    };
}), b.register('RnV2k27', function(c, d) {
    c.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount)
            return function() {};
        for (var f = document.activeElement, g = [], h = 0; h < e.rangeCount; h++)
            g.push(e.getRangeAt(h));
        switch (f.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                f.blur();
                break;
            default:
                f = null;
        }
        return e.removeAllRanges(),
            function() {
                'Caret' === e.type && e.removeAllRanges(), e.rangeCount || g.forEach(function(i) {
                    e.addRange(i);
                }), f && f.focus();
            };
    };
}), b.register('DzGwD', function(c, d) {
    _e(c.exports, 'default', function() {
        return _u;
    }, function(_e) {
        return _u = _e;
    });
    var e = b('JrtKP'),
        f = b('LEQ5w'),
        g = b('1P5ls'),
        h = b('ijg0s'),
        i = b('fLB6s'),
        j = b('GaHpv'),
        k = b('0RCFm'),
        l = b('zRcGn'),
        m = function(n, o) {
            var p = {};
            for (var q in n)
                Object.prototype.hasOwnProperty.call(n, q) && o.indexOf(q) < 0 && (p[q] = n[q]);
            if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (q = Object.getOwnPropertySymbols(n); r < q.length; r++)
                    o.indexOf(q[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, q[r]) && (p[q[r]] = n[q[r]]);
            }
            return p;
        };
    const n = _e => {
            let {
                title: o,
                content: p,
                prefixCls: q
            } = _e;
            return o || p ? f.createElement(f.Fragment, null, o && f.createElement('div', {
                className: `${ q }-title`
            }, (0, i.getRenderPropValue)(o)), f.createElement('div', {
                className: `${ q }-inner-content`
            }, (0, i.getRenderPropValue)(p))) : null;
        },
        o = f.forwardRef((_e, c) => {
            var p, q;
            const {
                prefixCls: r,
                title: s,
                content: t,
                overlayClassName: _u,
                placement: v = 'top',
                trigger: w = 'hover',
                mouseEnterDelay: x = 0.1,
                mouseLeaveDelay: y = 0.1,
                overlayStyle: z = {},
                arrowPointAtCenter: A,
                arrow: B
            } = _e, C = m(_e, [
                'prefixCls',
                'title',
                'content',
                'overlayClassName',
                'placement',
                'trigger',
                'mouseEnterDelay',
                'mouseLeaveDelay',
                'overlayStyle',
                'arrowPointAtCenter',
                'arrow'
            ]), {
                getPrefixCls: D
            } = f.useContext(g.ConfigContext), E = D('popover', r), [F, G] = (0, l.default)(E), H = D(), I = _c(e)(_u, G), J = null !== (q = null !== (p = 'boolean' != typeof B && (null == B ? void 0 : B.arrowPointAtCenter)) && void 0 !== p ? p : A) && void 0 !== q && q, K = null != B ? B : {
                arrowPointAtCenter: J
            };
            return F(f.createElement(h.default, Object.assign({
                placement: v,
                arrow: K,
                trigger: w,
                mouseEnterDelay: x,
                mouseLeaveDelay: y,
                overlayStyle: z
            }, C, {
                prefixCls: E,
                overlayClassName: I,
                ref: c,
                overlay: f.createElement(n, {
                    prefixCls: E,
                    title: s,
                    content: t
                }),
                transitionName: (0, j.getTransitionName)(H, 'zoom-big', C.transitionName),
                'data-popover-inject': !0
            })));
        });
    o._InternalPanelDoNotUseOrYouWillBeFired = k.default;
    var p = o;
}), b.register('fLB6s', function(_c, d) {
    _e(_c.exports, 'getRenderPropValue', function() {
        return b;
    });
    const e = _e => _e ? 'function' == typeof _e ? _e() : _e : null;
}), b.register('0RCFm', function(c, d) {
    _e(c.exports, 'getOverlay', function() {
        return _l;
    }, function(_e) {
        return _l = _e;
    }), _e(c.exports, 'RawPurePanel', function() {
        return _m;
    }, function(_e) {
        return _m = _e;
    }), _e(c.exports, 'default', function() {
        return _m;
    }, function(_e) {
        return _m = _e;
    });
    var e = b('LEQ5w'),
        f = b('JrtKP'),
        g = b('4a/hT'),
        h = b('1P5ls'),
        i = b('zRcGn'),
        j = b('fLB6s'),
        k = function(l, m) {
            var n = {};
            for (var o in l)
                Object.prototype.hasOwnProperty.call(l, o) && m.indexOf(o) < 0 && (n[o] = l[o]);
            if (null != l && 'function' == typeof Object.getOwnPropertySymbols) {
                var p = 0;
                for (o = Object.getOwnPropertySymbols(l); p < o.length; p++)
                    m.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(l, o[p]) && (n[o[p]] = l[o[p]]);
            }
            return n;
        };
    const _l = (_n, _o, c) => {
        if (_o || c)
            return e.createElement(e.Fragment, null, _o && e.createElement('div', {
                className: `${ _n }-title`
            }, (0, j.getRenderPropValue)(_o)), e.createElement('div', {
                className: `${ _n }-inner-content`
            }, (0, j.getRenderPropValue)(c)));
    };

    function _m(_n) {
        const {
            hashId: o,
            prefixCls: p,
            className: q,
            style: r,
            placement: s = 'top',
            title: t,
            content: u,
            children: v
        } = _n;
        return e.createElement('div', {
            className: _o(f)(o, p, `${ p }-pure`, `${ p }-placement-${ s }`, q),
            style: r
        }, e.createElement(g.Popup, Object.assign({}, _n, {
            className: o,
            prefixCls: p
        }), v || _l(p, t, u)));
    }

    function _m(n) {
        const {
            prefixCls: _o
        } = n, p = k(n, ['prefixCls']), {
            getPrefixCls: q
        } = e.useContext(h.ConfigContext), r = q('popover', _o), [s, t] = (0, i.default)(r);
        return s(e.createElement(_v, Object.assign({}, p, {
            prefixCls: r,
            hashId: t
        })));
    }
}), b.register('zRcGn', function(c, d) {
    _y(c.exports, 'default', function() {
        return _v;
    });
    var e = b('USVCQ'),
        f = b('XC0UB'),
        g = b('l+IVY'),
        h = b('ndmtK'),
        i = b('7hbGU'),
        j = b('Su/HH');
    const k = _y => {
            const {
                componentCls: l,
                popoverBg: m,
                popoverColor: n,
                width: o,
                fontWeightStrong: p,
                popoverPadding: q,
                boxShadowSecondary: r,
                colorTextHeading: s,
                borderRadiusLG: t,
                zIndexPopup: u,
                marginXS: _v,
                colorBgElevated: w
            } = _y;
            return [{
                    [l]: Object.assign(Object.assign({}, (0, i.resetComponent)(_y)), {
                        position: 'absolute',
                        top: 0,
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        zIndex: u,
                        fontWeight: 'normal',
                        whiteSpace: 'normal',
                        textAlign: 'start',
                        cursor: 'auto',
                        userSelect: 'text',
                        '--antd-arrow-background-color': w,
                        '&-rtl': {
                            direction: 'rtl'
                        },
                        '&-hidden': {
                            display: 'none'
                        },
                        [`${ l }-content`]: {
                            position: 'relative'
                        },
                        [`${ l }-inner`]: {
                            backgroundColor: m,
                            backgroundClip: 'padding-box',
                            borderRadius: t,
                            boxShadow: r,
                            padding: q
                        },
                        [`${ l }-title`]: {
                            minWidth: o,
                            marginBottom: _v,
                            color: s,
                            fontWeight: p
                        },
                        [`${ l }-inner-content`]: {
                            color: n
                        }
                    })
                },
                (0, j.default)(_y, {
                    colorBg: 'var(--antd-arrow-background-color)'
                }),
                {
                    [`${ l }-pure`]: {
                        position: 'relative',
                        maxWidth: 'none',
                        [`${ l }-content`]: {
                            display: 'inline-block'
                        }
                    }
                }
            ];
        },
        l = _y => {
            const {
                componentCls: m
            } = _y;
            return {
                [m]: h.PresetColors.map(d => {
                    const n = _y[`${ d }-6`];
                    return {
                        [`&${ m }-${ d }`]: {
                            '--antd-arrow-background-color': n,
                            [`${ m }-inner`]: {
                                backgroundColor: n
                            },
                            [`${ m }-arrow`]: {
                                background: 'transparent'
                            }
                        }
                    };
                })
            };
        },
        m = _y => {
            const {
                componentCls: n,
                lineWidth: o,
                lineType: p,
                colorSplit: q,
                paddingSM: r,
                controlHeight: s,
                fontSize: t,
                lineHeight: u,
                padding: v
            } = _y, w = s - Math.round(t * u);
            return {
                [n]: {
                    [`${ n }-inner`]: {
                        padding: 0
                    },
                    [`${ n }-title`]: {
                        margin: 0,
                        padding: `${ w / 2 }px ${ v }px ${ w / 2 - o }px`,
                        borderBottom: `${ o }px ${ p } ${ q }`
                    },
                    [`${ n }-inner-content`]: {
                        padding: `${ r }px ${ v }px`
                    }
                }
            };
        };
    var n = (0, f.default)('Popover', _y => {
        const {
            colorBgElevated: o,
            colorText: p,
            wireframe: q
        } = _y, r = (0, g.merge)(_y, {
            popoverBg: o,
            popoverColor: p,
            popoverPadding: 12
        });
        return [
            k(r),
            l(r),
            q && m(r),
            (0, e.initZoomMotion)(r, 'zoom-big')
        ];
    }, _y => {
        let {
            zIndexPopupBase: o
        } = _y;
        return {
            zIndexPopup: o + 30,
            width: 177
        };
    });
}), b.register('led8j', function(c, d) {
    _y(c.exports, 'default', function() {
        return _l;
    });
    var e = b('0hzx+'),
        f = b('GT7Vh'),
        g = b('LEQ5w'),
        h = b('Axq+p'),
        i = b('b5kvC'),
        j = b('vShe/');
    let k;
    var _l = _y => {
        const m = _y.size || 'default',
            n = g.useMemo(() => _y.customColor ? _y.customColor : _y.disabled ? '#546e7a' : 'success' === _y.type ? '#2e7d32' : 'danger' === _y.type ? '#c62828' : '#3f51b5', [
                _y.disabled,
                _y.type,
                _y.customColor
            ]),
            o = g.useMemo(() => (0, f.darken)(0.1, n), [n]),
            p = g.useMemo(() => 'small' === m || 'default' === m ? 14 : 20, [m]),
            q = g.useMemo(() => 'small' === m ? 6 : 'default' === m ? 8 : 12, [m]),
            r = g.useMemo(() => {
                const s = 'small' === m ? '8px' : '12px';
                return _y.customHorizontalPadding ? `${ s } ${ _y.customHorizontalPadding }px` : 'small' === m ? `${ s } 24px` : 'default' === m ? `${ s } 28px` : `${ s } 42px`;
            }, [
                m,
                _y.customHorizontalPadding
            ]),
            s = g.useMemo(() => 'small' === m ? 41 : 49, [m]),
            t = g.useMemo(() => _y.customFontWeight ? _y.customFontWeight : 'large' === m ? i.FontWeights.Bold : i.FontWeights.Normal, [
                _y.customFontWeight,
                m
            ]),
            u = () => {
                _y.disabled || _y.onClick && _y.onClick();
            };
        return (0, e.jsx)(_m, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: s
            }, _y.style || {}),
            children: (0, e.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': _y.ariaLabel,
                onClick: _y.usePointerDownEvent ? void 0 : u,
                onPointerDown: _y.usePointerDownEvent ? u : void 0,
                style: {
                    cursor: _y.disabled ? 'not-allowed' : 'pointer',
                    width: _y.block ? '100%' : 'auto'
                },
                children: [
                    (0, e.jsx)('span', {
                        className: 'btn-shadow',
                        style: {
                            borderRadius: q
                        }
                    }),
                    (0, e.jsx)('span', {
                        className: 'btn-edge',
                        style: {
                            background: o,
                            borderRadius: q
                        }
                    }),
                    (0, e.jsx)('span', {
                        className: 'btn-front',
                        style: {
                            background: n,
                            fontSize: p,
                            borderRadius: q,
                            padding: r,
                            fontWeight: t
                        },
                        children: _y.children
                    })
                ]
            })
        });
    };
    const _m = h.default.div.attrs({
        className: 'flex'
    })(k || (k = (_y => _y)`
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
    color: ${ 0 };
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
`), j.default.White);
}), b.register('vShe/', function(c, d) {
    _y(c.exports, 'default', function() {
        return b;
    });
    var e = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), b.register('A+7F9', function(c, d) {
    _y(c.exports, 'default', function() {
        return _y;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('+gdru'),
        i = b('3rMVL'),
        j = b('2x11J'),
        k = b('LEQ5w'),
        l = b('Axq+p'),
        m = b('6XgQB1'),
        n = b('fDlQt'),
        o = b('hEZVH'),
        p = b('CJCpN'),
        q = b('LvSG/'),
        r = b('UPWYN'),
        s = b('qCdZI'),
        t = b('AIgxT'),
        u = b('gCqar24');
    let v;
    const w = l.default.div(v || (v = (_y => _y)`
  padding: 18px;
  width: 100%;
  background: ${ 0 };
  color: ${ 0 };
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`), _y => _y.background, _y => _y.color);
    let x = class extends k.Component {
        render() {
            const _y = (() => {
                const {
                    goal: {
                        type: z
                    }
                } = this.props.gameOptions;
                return (0, i.inThanosMode)() || (0, i.inZombiesVsHumansMode)() || (0, i.inLavaMode)() ? p.default : (0, i.inImposterMode)() ? s.default : (0, i.inDrawMode)() ? r.default : (0, i.inPardyMode)() ? t.default : z === m.GameGoal.time ? q.default : z === m.GameGoal.race ? t.default : z === m.GameGoal.allIn ? u.default : p.default;
            })();
            return (0, g.jsxs)(w, {
                background: this.getContainerBackground(),
                color: this.getContainerColor(),
                children: [
                    (0, g.jsx)(_y, {
                        style: {
                            marginRight: 7
                        }
                    }),
                    (0, g.jsx)(h.default, {
                        text: this.getMessage()
                    })
                ]
            });
        }
        constructor(..._y) {
            super(..._y), (0, e.default)(this, 'getContainerBackground', () => (0, i.inDrawMode)() ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.4)'), (0, e.default)(this, 'getContainerColor', () => (0, i.inDrawMode)() ? o.default.Black : o.default.White), (0, e.default)(this, 'getNoun', _y => {
                let y = 'player';
                return (0, i.inTeamMode)() && (y = 'team'), _y && (y += 's'), y;
            }), (0, e.default)(this, 'getMessage', () => {
                const _y = this.props.gameOptions.goal,
                    {
                        type: z,
                        value: A
                    } = _y;
                return (0, i.inThanosMode)() ? 'Be the first to acquire all 6 Infinity Stones!' : (0, i.inZombiesVsHumansMode)() ? 'Be the last team to survive!' : (0, i.inLavaMode)() ? 'Work together to stay above the lava as long as you can!' : (0, i.inImposterMode)() ? n.imposterStrings.goal : (0, i.inDrawMode)() ? 'Guess student drawings to earn the most points!' : (0, i.inPardyMode)() ? 'Answer questions correctly & choose the right power to come out on top!' : z === m.GameGoal.time ? `Try to make as much money as you can in ${ (0, i.numberWithCommas)(A) } ${ (0, i.plural)('minute', A) }!` : z === m.GameGoal.race ? `The first ${ this.getNoun() } to earn ${ (0, i.getMoney)(A) } wins!` : z === m.GameGoal.allIn ? `The game ends once the combined balance of all ${ this.getNoun(!0) } reaches ${ (0, i.getMoney)(A) }!` : '';
            });
        }
    };
    x = (0, f.__decorate)([
        (0, j.inject)('gameOptions'),
        j.observer
    ], x);
    var _y = x;
}), b.register('CJCpN', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('v47zB'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CheckOutlined';
    var _j = f.forwardRef(i);
}), b.register('v47zB', function(c, d) {
    _j(c.exports, 'default', function() {
        return b;
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
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), b.register('LvSG/', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('yXL4x'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'ClockCircleOutlined';
    var _j = f.forwardRef(i);
}), b.register('yXL4x', function(c, d) {
    _j(c.exports, 'default', function() {
        return b;
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
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z'
                    }
                }
            ]
        },
        name: 'clock-circle',
        theme: 'outlined'
    };
}), b.register('UPWYN', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('7Bmmg'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'HighlightOutlined';
    var _j = f.forwardRef(i);
}), b.register('7Bmmg', function(c, d) {
    _j(c.exports, 'default', function() {
        return b;
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
                    d: 'M957.6 507.4L603.2 158.2a7.9 7.9 0 00-11.2 0L353.3 393.4a8.03 8.03 0 00-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 00-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0011.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0011.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z'
                }
            }]
        },
        name: 'highlight',
        theme: 'outlined'
    };
}), b.register('qCdZI', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('E9PPH'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'RocketOutlined';
    var _j = f.forwardRef(i);
}), b.register('E9PPH', function(c, d) {
    _j(c.exports, 'default', function() {
        return b;
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
                    d: 'M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z'
                }
            }]
        },
        name: 'rocket',
        theme: 'outlined'
    };
}), b.register('gCqar24', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('skUox22'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'UsergroupAddOutlined';
    var _j = f.forwardRef(i);
}), b.register('skUox22', function(c, d) {
    _p(c.exports, 'default', function() {
        return b;
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
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), b.register('v9v42', function(c, d) {
    _p(c.exports, 'default', function() {
        return _v;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('2x11J'),
        i = b('LEQ5w'),
        j = b('Axq+p'),
        k = b('r1/1U'),
        l = b('d5c+7'),
        m = b('hEZVH'),
        n = b('3rMVL');
    let o, p, q, r = _p => _p;
    const s = j.default.div.attrs({
            className: 'scroll-y'
        })(o || (o = r`
  flex: 1;
  min-height: 0;
  color: ${ 0 };
`), _p => _p.color),
        t = j.default.div(p || (p = r`
  width: 100%;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 10px;
`)),
        u = j.default.div(q || (q = r`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 15px;
`));
    let _v = class extends i.Component {
        render() {
            return (0, g.jsx)(s, {
                color: this.getContainerColor(),
                children: (0, g.jsxs)(t, {
                    children: [
                        (0, g.jsx)(l.default, {
                            amountOfPlayers: this.props.players.filteredPlayers.length
                        }),
                        (0, g.jsx)(u, {
                            children: this.props.players.filteredPlayers.reverse().map(_p => (0, g.jsx)(k.default, {
                                player: _p
                            }, _p.id))
                        })
                    ]
                })
            });
        }
        constructor(..._p) {
            super(..._p), (0, e.default)(this, 'getContainerColor', () => (0, n.inDrawMode)() ? m.default.Black : m.default.White);
        }
    };
    _v = (0, f.__decorate)([
        (0, h.inject)('players'),
        h.observer
    ], _v);
}), b.register('r1/1U', function(c, d) {
    _p(c.exports, 'default', function() {
        return _p;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('ijg0s'),
        i = b('3rMVL'),
        j = b('RMEzW'),
        k = b('2x11J'),
        l = b('LEQ5w');
    let m;
    const n = b('Axq+p').default.div(m || (m = (_p => _p)`
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 5px;
  font-size: 33px;
  margin: 6px 12px 6px 0px;
  border: ${ 0 };
  ${ 0 };
  cursor: pointer;
  &:hover {
    text-decoration: line-through;
  }
`), _p => _p.showBorder ? '2px solid' : 'none', j.default.normal);
    let o = class extends l.Component {
        render() {
            const {
                player: _p
            } = this.props;
            return (0, g.jsx)(n, {
                onClick: this.banPlayer,
                showBorder: this.shouldShowBorder,
                children: (0, g.jsx)(h.default, {
                    title: 'Remove from Game',
                    children: _p.name
                })
            });
        }
        constructor(..._w) {
            super(..._w), (0, e.default)(this, 'shouldShowBorder', (0, i.inDrawMode)()), (0, e.default)(this, 'banPlayer', () => (0, i.banPlayer)(this.props.player.id));
        }
    };
    o = (0, f.__decorate)([
        (0, k.inject)('kit', 'gameOptions'),
        k.observer
    ], o);
    var _p = o;
}), b.register('d5c+7', function(c, d) {
    _w(c.exports, 'default', function() {
        return _p;
    });
    var e = b('0hzx+'),
        f = b('3rMVL'),
        g = b('RMEzW'),
        h = b('LEQ5w'),
        i = b('Axq+p'),
        j = b('Ijh8Y');
    let k, l, m = _w => _w;
    const n = i.default.div(k || (k = m`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`)),
        o = i.default.div(l || (l = m`
  ${ 0 };
  font-size: 28px;
`), g.default.black);
    var _p = _w => {
        const {
            amountOfPlayers: q
        } = _w, r = h.useMemo(() => (0, f.inPardyMode)() ? 'contestant' : 'player', []);
        return (0, e.jsxs)(n, {
            children: [
                (0, e.jsx)(o, {
                    children: `${ q } ${ (0, f.plural)(r, q) }`
                }),
                (0, e.jsx)(j.default, {})
            ]
        });
    };
}), b.register('Ijh8Y', function(c, d) {
    _w(c.exports, 'default', function() {
        return _w;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('3rMVL'),
        i = b('hEZVH'),
        j = b('RMEzW'),
        k = b('rD3N6'),
        l = b('2x11J'),
        m = b('GT7Vh'),
        n = b('LEQ5w'),
        o = b('Axq+p'),
        p = b('6XgQB1');
    let q, r, s = _w => _w;
    const t = o.default.div(q || (q = s`
  display: flex;
  align-items: center;
`)),
        u = o.default.div(r || (r = s`
  padding: 6px 14px 6px 14px;
  border-radius: 4px;
  background: ${ 0 };
  color: ${ 0 };
  ${ 0 };
  font-size: 24px;
  box-shadow: ${ 0 };
  transition: all 0.23s;
  cursor: ${ 0 };
  &:hover {
    background: ${ 0 };
    transform: scale(1.04);
  }
`), _w => _w.disabled ? i.default.DisabledGray : _w.customColor || i.default.SuccessGreen, i.default.White, j.default.black, k.default.basic, _w => _w.disabled ? 'not-allowed' : 'pointer', _w => _w.disabled ? i.default.DisabledGray : (0, m.lighten)(0.1, _w.customColor || i.default.SuccessGreen));
    let v = class extends n.Component {
        render() {
            const _w = this.getButtonInfo();
            let x = () => null;
            return _w.disabled || (x = this.handleClick), (0, g.jsx)(t, {
                children: (0, g.jsx)(u, {
                    onClick: x,
                    disabled: _w.disabled,
                    children: _w.text
                })
            });
        }
        constructor(..._w) {
            super(..._w), (0, e.default)(this, 'playerCount', () => this.props.players.filteredPlayers.length), (0, e.default)(this, 'handleClickCallback', () => {
                !(0, h.inBossBattleMode)() || this.props.onTeamScreen ? !(0, h.inTeamMode)() || this.props.onTeamScreen ? (0, h.inBossBattleMode)() ? this.props.ui.showingBossPreScreen = !0 : (0, h.inZombiesVsHumansMode)() ? this.props.ui.showingHumansVsZombiesPreScreen = !0 : (0, h.inLavaMode)() ? this.props.ui.showingLavaPreScreen = !0 : this.props.gameValues.currentRoute = p.GameStatus.gameplay : this.props.gameValues.currentRoute = p.GameStatus.teams : this.props.gameValues.showBossBattleModal = !this.props.gameValues.showBossBattleModal;
            }), (0, e.default)(this, 'handleClick', () => {
                this.handleClickCallback();
            }), (0, e.default)(this, 'getButtonInfo', () => {
                const _w = this.playerCount(),
                    x = this.props.gameOptions;
                let y = 'player';
                if ((0, h.inPardyMode)() && (y = 'contestant'), (0, h.inBossBattleMode)() || (0, h.inZombiesVsHumansMode)()) {
                    const z = ((0, h.inBossBattleMode)() ? 3 : 2) - _w;
                    return z > 0 && (0, h.inProduction)() ? {
                        disabled: !0,
                        text: `${ z } more ${ (0, h.plural)(y, z) } needed`
                    } : this.props.onTeamScreen ? {
                        disabled: !1,
                        text: 'Start Game'
                    } : {
                        disabled: !1,
                        text: 'Next'
                    };
                }
                if ((0, h.inImposterMode)()) {
                    const z = Math.max(3, 2 * x.modeOptions.numberOfImposters) - _w;
                    if (z > 0 && (0, h.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ z } more ${ (0, h.plural)(y, z) } needed`
                        };
                }
                if ((0, h.inDrawMode)()) {
                    const z = 2 - _w;
                    if (z > 0 && (0, h.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ z } more ${ (0, h.plural)(y, z) } needed`
                        };
                }
                if ((0, h.inThanosMode)()) {
                    const z = 2 - _w;
                    if (z > 0 && (0, h.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ z } more ${ (0, h.plural)(y, z) } needed`
                        };
                }
                if ((0, h.inTeamMode)() && !this.props.onTeamScreen) {
                    const z = 2 * (x.modeOptions.playersPerTeam || 4) - _w;
                    return z > 0 && (0, h.inProduction)() ? {
                        disabled: !0,
                        text: `${ z } more ${ (0, h.plural)(y, z) } needed`
                    } : {
                        disabled: !1,
                        text: 'Make Teams'
                    };
                }
                return {
                    disabled: 0 === _w && (0, h.inProduction)(),
                    text: 'Start Game'
                };
            });
        }
    };
    v = (0, f.__decorate)([
        (0, l.inject)('gameOptions', 'gameValues', 'players', 'kit', 'ui'),
        l.observer
    ], v);
    var _w = v;
}), b.register('uvSHU', function(c, d) {
    _B(c.exports, 'default', function() {
        return _s;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('Yv86d'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('Axq+p'),
        l = b('6XgQB1'),
        m = b('PMl60');
    let n, o, p, q = _B => _B;
    let r = class extends j.Component {
        componentDidMount() {
            (0, m.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), h.default.lava.pantherShort.unload(), h.default.lava.pantherShort.load(), h.default.lava.pantherShort.on('load', () => {
                this.startGame(), h.default.lava.pantherShort.play();
            }), h.default.lava.pantherShort.on('loaderror', this.startGame), h.default.lava.pantherShort.on('playerror', this.startGame);
        }
        render() {
            return (0, g.jsx)(_t, {
                children: (0, g.jsx)(_u, {
                    children: (0, g.jsx)(_v, {
                        children: this.state.content
                    })
                })
            });
        }
        constructor(..._B) {
            super(..._B), (0, e.default)(this, 'state', {
                content: ''
            }), (0, e.default)(this, 'getStages', () => [{
                    content: '',
                    delay: 697
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'The Lava is Rising!'
                    }),
                    delay: 3200
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'Work together to keep your building above the lava'
                    }),
                    delay: 3200
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'Purchase builds in the shop'
                    }),
                    delay: 3200
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'Survive as long as you can!'
                    }),
                    delay: 2500
                },
                {
                    content: (0, g.jsx)('div', {
                        className: 'animated zoomInDown',
                        style: {
                            zoom: 1.4
                        },
                        children: 'The Floor Is Lava!'
                    }),
                    delay: 5000
                }
            ]), (0, e.default)(this, 'setStage', _B => {
                const s = this.getStages()[_B];
                if (!s)
                    return this.props.gameValues.currentRoute = l.GameStatus.gameplay, void(this.props.ui.showingLavaPreScreen = !1);
                this.setState({
                    content: s.content
                }), setTimeout(() => this.setStage(_B + 1), s.delay);
            }), (0, e.default)(this, 'startGame', () => {
                this.setStage(0);
            });
        }
    };
    r = (0, f.__decorate)([
        (0, i.inject)('gameValues', 'ui'),
        i.observer
    ], r);
    var _s = r;
    const _t = k.default.div(n || (n = q`
  background: linear-gradient(182deg, #c86300, #dd3725);
  background-size: 400% 400%;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`)),
        _u = k.default.div(o || (o = q`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 65px;
  padding: 50px;
  font-family: ${ 0 };
  text-align: center;
`), '\'Bowlby One SC\', cursive'),
        _v = k.default.div(p || (p = q`
  max-width: 800px;
`));
}), b.register('HTTWT', function(c, d) {
    _B(c.exports, 'default', function() {
        return _k;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('2x11J'),
        h = b('LEQ5w'),
        i = b('keBOo');
    let j = class extends h.Component {
        render() {
            return this.props.gameValues.thanosValues ? (0, f.jsx)(i.default, {}) : null;
        }
    };
    j = (0, e.__decorate)([
        (0, g.inject)('gameValues'),
        g.observer
    ], j);
    var _k = j;
}), b.register('keBOo', function(c, d) {
    _B(c.exports, 'Container', function() {
        return _w;
    }), _B(c.exports, 'default', function() {
        return _B;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('Yv86d'),
        i = b('3rMVL'),
        j = b('hEZVH'),
        k = b('RMEzW'),
        l = b('fe6E3'),
        m = b('2x11J'),
        n = b('LEQ5w'),
        o = b('Axq+p'),
        p = b('6XgQB1'),
        q = b('GFspR');
    let r, s, t = _B => _B;
    const u = _B => new Promise(c => setTimeout(() => c(), _B)),
        v = _B => {
            let w = '';
            return _B.forEach((d, b) => {
                w += d, b + 1 !== _B.length && (w += ', ');
            }), w;
        },
        _w = o.default.div(r || (r = t`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${ 0 };
  color: ${ 0 };
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  overflow: scroll;
  ${ 0 }
`), j.default.Black, j.default.White, k.default.normal),
        x = o.default.div(s || (s = t`
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
    let y;
    var z;
    (z = y || (y = {})).countdown = 'Countdown', z.results = 'Results', z.final = 'Final';
    let A = class extends n.Component {
        componentDidMount() {
            h.default.thanos.thanos.stop(), this.props.gameValues.currentRoute = p.GameStatus.results, h.default.eventBoom.play();
            let _B = !1;
            const C = this.props.gameValues.thanosValues.showAt,
                D = setInterval(() => {
                    const E = Math.round((C - Date.now()) / 1000);
                    if (E <= 0)
                        return this.showResults(), clearInterval(D);
                    8 !== E || _B || (_B = !0, h.default.suspense.play()), this.setState({
                        secondsLeft: E
                    });
                }, 200);
        }
        render() {
            return (0, g.jsx)(_w, {
                children: (0, g.jsx)(x, {
                    children: this.getContent()
                })
            });
        }
        constructor(..._B) {
            super(..._B), (0, e.default)(this, 'state', {
                stage: y.countdown,
                secondsLeft: 0,
                survivesResult: null
            }), (0, e.default)(this, 'getContent', () => this.state.stage === y.results ? (0, g.jsx)(q.default, {
                ...this.state.survivesResult
            }, this.state.survivesResult.id + '-parent') : this.state.stage === y.countdown ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)('div', {
                        style: {
                            fontSize: 25
                        },
                        children: 'The snap is about to happen...'
                    }),
                    (0, g.jsxs)('div', {
                        style: {
                            fontSize: 119,
                            fontWeight: 900
                        },
                        children: [
                            '0:',
                            this.state.secondsLeft < 10 ? `0${ this.state.secondsLeft }` : this.state.secondsLeft
                        ]
                    })
                ]
            }) : this.state.stage === y.final ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)('img', {
                        src: (0, i.getAssetPath)('gauntlet.svg'),
                        style: {
                            height: 121
                        },
                        className: 'animated pulse infinite'
                    }),
                    (0, g.jsxs)('div', {
                        style: {
                            fontSize: 29
                        },
                        children: [
                            (0, g.jsx)('span', {
                                style: {
                                    color: 'gold'
                                },
                                children: 'Winner:'
                            }),
                            ' ',
                            (0, g.jsx)('span', {
                                style: {
                                    fontWeight: 900
                                },
                                children: this.props.gameValues.thanosValues.winner.name
                            })
                        ]
                    }),
                    (0, g.jsx)('div', {
                        style: {
                            height: 6
                        }
                    }),
                    (0, g.jsxs)('div', {
                        children: [
                            (0, g.jsxs)('div', {
                                style: {
                                    maxWidth: 460
                                },
                                children: [
                                    (0, g.jsx)('b', {
                                        style: {
                                            color: '#a5d6a7'
                                        },
                                        children: 'Survived The Snap:'
                                    }),
                                    ` ${ v(this.props.gameValues.thanosValues.saved.map(_B => _B.name)) }`
                                ]
                            }),
                            (0, g.jsx)('div', {
                                style: {
                                    height: 12
                                }
                            }),
                            (0, g.jsxs)('div', {
                                style: {
                                    maxWidth: 460
                                },
                                children: [
                                    (0, g.jsx)('b', {
                                        style: {
                                            color: '#ef9a9a'
                                        },
                                        children: 'Snapped:'
                                    }),
                                    ` ${ v(this.props.gameValues.thanosValues.snapped.map(_B => _B.name)) }`
                                ]
                            })
                        ]
                    })
                ]
            }) : null), (0, e.default)(this, 'showResults', async () => {
                const _B = [];
                this.props.gameValues.thanosValues.saved.forEach(c => _B.push({
                    survives: !0,
                    id: c.id,
                    name: c.name
                })), this.props.gameValues.thanosValues.snapped.forEach(c => _B.push({
                    survives: !1,
                    id: c.id,
                    name: c.name
                }));
                const C = (0, l.shuffle)(_B);
                for (let D = 0; D < C.length; D++)
                    0 === D && h.default.eventBoom.play(), this.setState({
                        survivesResult: C[D],
                        stage: y.results
                    }), await u(4000);
                h.default.eventBoom.play(), this.setState({
                    stage: y.final
                });
            });
        }
    };
    A = (0, f.__decorate)([(0, m.inject)('gameValues')], A);
    var _B = A;
}), b.register('GFspR', function(c, d) {
    _r(c.exports, 'default', function() {
        return _j;
    });
    var e = b('1bFPu'),
        f = b('0hzx+'),
        g = b('Yv86d'),
        h = b('LEQ5w');
    class i extends h.Component {
        componentDidMount() {
            this.props.survives ? setTimeout(() => {
                g.default.thanos.successDing.play(), this.setState({
                    showSurvived: !0
                });
            }, 1200) : setTimeout(() => {
                this.setState({
                    startHide: !0
                }), g.default.thanos.wind.play();
            }, 1400), setTimeout(() => {
                this.props.survives || this.setState({
                    show: !1
                });
            }, 3700);
        }
        render() {
            return this.state.show ? (0, f.jsxs)('div', {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    animationDelay: '0.5s',
                    animationDuration: this.props.survives ? '0.3s' : this.state.startHide ? '2s' : '0.3s'
                },
                className: 'animated ' + (this.props.survives ? 'fadeIn' : this.state.startHide ? 'fadeOut' : 'fadeIn'),
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            fontSize: 65,
                            fontWeight: 900
                        },
                        children: this.props.name
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            opacity: this.state.showSurvived ? 1 : 0,
                            transition: 'opacity 0.3s',
                            fontSize: 22,
                            color: '#a5d6a7'
                        },
                        children: 'survived the snap!'
                    }, this.props.id + '-secondary')
                ]
            }, this.props.id) : null;
        }
        constructor(..._r) {
            super(..._r), (0, e.default)(this, 'state', {
                showSurvived: !1,
                startHide: !1,
                show: !0
            });
        }
    }
    var _j = i;
}), b.register('kW/Ne', function(c, d) {
    _r(c.exports, 'default', function() {
        return _z;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('Yv86d'),
        i = b('3rMVL'),
        j = b('RMEzW'),
        k = b('YuT/D'),
        l = b('2x11J'),
        m = b('LEQ5w'),
        n = b('Axq+p'),
        o = b('xE1cc'),
        p = b('N7iqF'),
        q = b('OUxss'),
        r = b('ohue7'),
        s = b('BKio2'),
        t = b('DKAN6'),
        u = b('WXPkn'),
        v = b('Ewu2C');
    let w;
    const x = n.default.div(w || (w = (_r => _r)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${ 0 };
`), j.default.normal);
    let y = class extends m.Component {
        componentDidMount() {
            (0, k.when)(() => !!this.props.players.finalResults, () => {
                this.setState({
                    show: !0
                }), (0, i.inThanosMode)() || (0, i.inBossBattleMode)() || (0, i.inZombiesVsHumansMode)() || (0, i.inLavaMode)() || (0, i.inImposterMode)() || (0, i.inDrawMode)() || (0, i.inPardyMode)() || h.default.winner.play();
            });
        }
        render() {
            return this.state.show ? (0, i.inLavaMode)() ? (0, g.jsx)(s.default, {}) : (0, g.jsx)(x, {
                children: this.getContent()
            }) : (0, g.jsx)(x, {});
        }
        constructor(..._r) {
            super(..._r), (0, e.default)(this, 'state', {
                show: !1
            }), (0, e.default)(this, 'getContent', _r => (0, i.inBossBattleMode)() && !_r ? (0, g.jsx)(g.Fragment, {
                children: (0, g.jsx)(o.default, {
                    contentWhenComplete: this.getContent(!0)
                })
            }) : (0, i.inZombiesVsHumansMode)() ? (0, g.jsx)(p.default, {}) : (0, i.inImposterMode)() ? (0, g.jsx)(t.default, {}) : (0, i.inDrawMode)() ? (0, g.jsx)(u.default, {}) : (0, i.inPardyMode)() ? (0, g.jsx)(v.default, {}) : (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(q.default, {}),
                    (0, g.jsx)(r.default, {})
                ]
            }));
        }
    };
    y = (0, f.__decorate)([(0, l.inject)('players')], y);
    var _z = y;
}), b.register('xE1cc', function(c, d) {
    _r(c.exports, 'default', function() {
        return _r;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('Yv86d'),
        i = b('hEZVH'),
        j = b('2x11J'),
        k = b('LEQ5w'),
        l = b('Axq+p'),
        m = b('PMl60');
    let n;
    const o = 'The Boss',
        p = _r => (0, g.jsx)('div', {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: _r.backgroundColor,
                padding: 35,
                boxSizing: 'border-box',
                animationDuration: '12s',
                animationDelay: '3s',
                flexDirection: 'column'
            },
            className: 'animated fadeIn',
            children: _r.children
        });
    let q = class extends k.Component {
        componentDidMount() {
            (0, m.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
            const _r = h.default.eventBoom;
            _r.volume(1), _r.play(), _r.on('play', this.handlePlay), _r.on('loaderror', this.handlePlay), _r.on('playerror', this.handlePlay);
        }
        render() {
            return this.state.showFinalContent ? this.props.contentWhenComplete : (0, g.jsx)(_s, {
                children: this.getContent()
            });
        }
        constructor(..._r) {
            super(..._r), (0, e.default)(this, 'state', {
                showContent: !1,
                showFinalContent: !1
            }), (0, e.default)(this, 'handlePlay', () => {
                setTimeout(() => {
                    this.setState({
                        showContent: !0
                    });
                    (this.bossWon() ? h.default.bossBattle.darkAmbience : h.default.bossBattle.award).play(), setTimeout(() => {
                        this.setState({
                            showFinalContent: !0
                        });
                    }, 15000);
                }, 2000);
            }), (0, e.default)(this, 'getContent', () => this.state.showContent ? this.bossWon() ? (0, g.jsxs)(p, {
                backgroundColor: '#424242',
                children: [
                    (0, g.jsxs)('div', {
                        children: [
                            this.getBossName(),
                            ' Wins!'
                        ]
                    }),
                    (0, g.jsx)('div', {
                        style: {
                            fontSize: 58
                        },
                        children: 'The Challengers Defeated!'
                    })
                ]
            }) : (0, g.jsxs)(p, {
                backgroundColor: '#2e7d32',
                children: [
                    ' ',
                    (0, g.jsx)('div', {
                        children: 'The Challengers Win!'
                    }),
                    (0, g.jsxs)('div', {
                        style: {
                            fontSize: 58
                        },
                        children: [
                            this.getBossName(),
                            ' Defeated!'
                        ]
                    })
                ]
            }) : null), (0, e.default)(this, 'getBossName', () => {
                let _r = 'The Boss';
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const s = this.props.players.teams.find(_r => _r.id === o);
                    s && s.players[0] && (_r = s.players[0]);
                }
                return _r;
            }), (0, e.default)(this, 'bossWon', () => {
                let r = !0;
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const s = this.props.players.teams.find(r => r.id === o);
                    if (s) {
                        const t = s.balance,
                            u = this.props.players.teams.find(r => r.id !== o);
                        u && u.balance > t && (r = !1);
                    }
                }
                return r;
            });
        }
    };
    q = (0, f.__decorate)([
        (0, j.inject)('players'),
        j.observer
    ], q);
    var _r = q;
    const _s = l.default.div(n || (n = (_v => _v)`
  height: 100%;
  width: 100%;
  background: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${ 0 };
  font-size: 72px;
  text-align: center;
`), i.default.Black, '\'Bowlby One SC\', cursive');
}), b.register('N7iqF', function(c, d) {
    _v(c.exports, 'default', function() {
        return _v;
    }), _v(c.exports, 'BackgroundMove', function() {
        return _w;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('Tg04N'),
        h = b('OUxss'),
        i = b('+gdru'),
        j = b('Yv86d'),
        k = b('2x11J'),
        l = b('LEQ5w'),
        m = b('Axq+p'),
        n = b('keBOo'),
        o = b('aqqAj'),
        p = b('PMl60');
    let q, r, s, t = _v => _v;
    let u = class extends l.Component {
        componentDidMount() {
            (0, p.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), j.default.boom.play(), setTimeout(() => {
                j.default.fanfare.play();
            }, 8000);
        }
        render() {
            const _v = this.props.gameValues.defendingHomebaseResults;
            return _v ? (0, f.jsx)(n.Container, {
                children: (0, f.jsx)(_x, {
                    className: 'animated fadeIn',
                    style: {
                        animationDuration: '12s',
                        animationDelay: '8s'
                    },
                    children: (0, f.jsxs)(_y, {
                        children: [
                            (0, f.jsx)(h.default, {}),
                            (0, f.jsxs)('div', {
                                style: {
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    padding: 35,
                                    boxSizing: 'border-box',
                                    animationDelay: '14s',
                                    animationDuration: '6s'
                                },
                                className: 'animated zoomInDown',
                                children: [
                                    (0, f.jsx)('div', {
                                        style: {
                                            fontSize: 40,
                                            opacity: 0.7
                                        },
                                        children: (0, f.jsx)(i.default, {
                                            text: `${ _v.loser.name } Defeated!`
                                        })
                                    }),
                                    (0, f.jsx)('img', {
                                        src: (0, o.getImage)(_v.winner.id),
                                        style: {
                                            height: 150,
                                            marginTop: 20
                                        },
                                        className: 'animated pulse infinite'
                                    }),
                                    (0, f.jsx)('div', {
                                        style: {
                                            fontSize: 91
                                        },
                                        children: (0, f.jsx)(i.default, {
                                            text: `${ _v.winner.name } Win!`
                                        })
                                    }),
                                    (0, f.jsxs)('div', {
                                        style: {
                                            fontSize: 20
                                        },
                                        children: [
                                            (0, f.jsx)(i.default, {
                                                text: 'Congratulations'
                                            }),
                                            ' ',
                                            (0, g.getTeamPlayerNames)(_v.winnerPlayerNames),
                                            '!'
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }) : null;
        }
    };
    u = (0, e.__decorate)([
        (0, k.inject)('gameValues'),
        k.observer
    ], u);
    var _v = u;
    const _w = (0, m.keyframes)(q || (q = t`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`)),
        _x = m.default.div(r || (r = t`
  font-family: ${ 0 };
  height: 100%;
  width: 100%;
`), '\'Bowlby One SC\', cursive'),
        _y = m.default.div(s || (s = t`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(270deg, #020a29, #087d17, #b67509);
  background-size: 600% 600%;
  animation: ${ 0 } 21s ease infinite;
  text-align: center;
`), _w);
}), b.register('OUxss', function(c, d) {
    _j(c.exports, 'default', function() {
        return _C;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('UPWYN'),
        i = b('gVBQO'),
        j = b('OZJG1'),
        k = b('ulE4q'),
        l = b('zush7'),
        m = b('Li6uh'),
        n = b('3rMVL'),
        o = b('RMEzW'),
        p = b('rD3N6'),
        q = b('2x11J'),
        r = b('LEQ5w'),
        s = b('Axq+p'),
        t = b('hEZVH');
    let u, v, w, x = _j => _j;
    const y = s.default.div(u || (u = x`
  background: rgba(0, 0, 0, 0.6);
  color: ${ 0 };
  width: 100%;
  height: 81px;
  box-shadow: ${ 0 };
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;
  z-index: 999;
  ${ 0 };
`), t.default.White, p.default.basic, o.default.bold),
        z = s.default.div(v || (v = x`
  width: 33% !important;
  ${ 0 };
`), _j => _j.customCSS ? _j.customCSS : null),
        A = s.default.div(w || (w = x`
  font-size: 32px;
`));
    let B = class extends r.Component {
        render() {
            return (0, g.jsxs)(y, {
                children: [
                    (0, g.jsx)(z, {
                        style: {
                            textAlign: 'left'
                        },
                        children: this.props.gameOptions.clapping && !(0, n.inImposterMode)() ? (0, g.jsxs)(A, {
                            children: [
                                (0, l.getClappingEmoji)(),
                                ' ',
                                (0, n.numberWithCommas)(this.props.gameValues.clapCount)
                            ]
                        }) : (0, g.jsx)('div', {})
                    }),
                    this.props.hideLogo ? (0, g.jsx)('div', {}) : (0, n.inPardyMode)() ? (0, g.jsx)('img', {
                        src: (0, n.getAssetPath)('pardyLogo.png'),
                        style: {
                            height: 45
                        }
                    }) : (0, g.jsx)('img', {
                        src: '/client/img/svgLogoWhite.svg',
                        style: {
                            height: 41
                        }
                    }),
                    (0, g.jsx)(z, {
                        customCSS: '\n            display: flex;\n            justify-content: flex-end;',
                        children: (0, g.jsxs)('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                this.props.gameValues.reportId ? (0, g.jsx)(k.default, {
                                    onClick: this.openReport,
                                    icon: (0, g.jsx)(j.default, {}),
                                    size: 'large',
                                    type: 'primary',
                                    style: {
                                        marginRight: 10
                                    },
                                    children: 'View Report'
                                }) : null,
                                (0, n.inDrawMode)() && (0, g.jsx)(k.default, {
                                    icon: (0, g.jsx)(h.default, {}),
                                    size: 'large',
                                    type: 'primary',
                                    onClick: this.openDrawingModal,
                                    style: {
                                        marginRight: 10
                                    },
                                    children: 'View Drawings'
                                }),
                                (0, g.jsx)(k.default, {
                                    onClick: this.playAgain,
                                    loading: this.state.loadingPlayAgain,
                                    icon: (0, g.jsx)(i.default, {}),
                                    size: 'large',
                                    type: 'primary',
                                    children: 'Play Again'
                                })
                            ]
                        })
                    })
                ]
            });
        }
        constructor(..._j) {
            super(..._j), (0, e.default)(this, 'state', {
                loadingPlayAgain: !1
            }), (0, e.default)(this, 'openDrawingModal', () => {
                this.props.draw.drawingsModalOpen = !0;
            }), (0, e.default)(this, 'openReport', () => {
                window.open('/report/' + this.props.gameValues.reportId);
            }), (0, e.default)(this, 'playAgain', () => {
                this.state.loadingPlayAgain || (this.setState({
                    loadingPlayAgain: !0
                }), (0, n.send)(m.default.playAgain), setTimeout(() => {
                    this.setState({
                        loadingPlayAgain: !1
                    });
                }, 5000));
            });
        }
    };
    B = (0, f.__decorate)([
        (0, q.inject)('gameOptions', 'gameValues', 'draw'),
        q.observer
    ], B);
    var _C = B;
}), b.register('gVBQO', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('X06Q7'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'RedoOutlined';
    var _j = f.forwardRef(i);
}), b.register('X06Q7', function(c, d) {
    _j(c.exports, 'default', function() {
        return b;
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
                    d: 'M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z'
                }
            }]
        },
        name: 'redo',
        theme: 'outlined'
    };
}), b.register('OZJG1', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('+mrfc'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'SolutionOutlined';
    var _j = f.forwardRef(i);
}), b.register('+mrfc', function(c, d) {
    _s(c.exports, 'default', function() {
        return b;
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
                    d: 'M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z'
                }
            }]
        },
        name: 'solution',
        theme: 'outlined'
    };
}), b.register('zush7', function(c, d) {
    _s(c.exports, 'getClappingEmoji', function() {
        return b;
    });
    const e = () => '\uD83D\uDC4F';
}), b.register('ohue7', function(c, d) {
    _s(c.exports, 'default', function() {
        return _s;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('ApnZz'),
        h = b('YgAA2'),
        i = b('3rMVL'),
        j = b('2x11J'),
        k = b('LEQ5w'),
        l = b('Axq+p');
    let m, n, o = _s => _s;
    const p = l.default.div.attrs({
            className: 'scroll-y'
        })(m || (m = o`
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: center;
  min-height: 0;
`)),
        q = l.default.div(n || (n = o`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  max-width: 100vw;
`));
    let r = class extends k.Component {
        render() {
            const _s = (0, i.inTeamMode)(),
                t = (0, i.inBossBattleMode)(),
                u = (0, g.leaderboardSorter)(this.props.players.finalResults);
            let v, w, x;
            return u[0] && (v = u[0]), u[1] && (w = u[1]), u[2] && (x = u[2]), (0, f.jsxs)(p, {
                children: [
                    !t && (0, f.jsxs)(q, {
                        children: [
                            x ? (0, f.jsx)(h.default, {
                                snapshot: x,
                                isPlayer: !_s,
                                position: 3,
                                themes: this.props.gameValues.availableThemes
                            }) : null,
                            v ? (0, f.jsx)(h.default, {
                                snapshot: v,
                                isPlayer: !_s,
                                position: 1,
                                themes: this.props.gameValues.availableThemes
                            }) : null,
                            w ? (0, f.jsx)(h.default, {
                                snapshot: w,
                                isPlayer: !_s,
                                position: 2,
                                themes: this.props.gameValues.availableThemes
                            }) : null
                        ]
                    }),
                    (0, f.jsx)(g.default, {
                        customWidth: '881px',
                        customMaxWidth: '90%',
                        blockScroll: !0,
                        hideTop3: !t,
                        showHidden: !0,
                        overflow: !0,
                        customClassName: t ? 'animated zoomInDown' : 'animated fadeIn'
                    })
                ]
            });
        }
    };
    r = (0, e.__decorate)([
        (0, j.inject)('players', 'gameValues', 'gameOptions'),
        j.observer
    ], r);
    var _s = r;
}), b.register('BKio2', function(c, d) {
    _z(c.exports, 'default', function() {
        return _z;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('LEQ5w'),
        i = b('OUxss'),
        j = b('Axq+p'),
        k = b('1kMPe'),
        l = b('RMEzW'),
        m = b('YiQNi'),
        n = b('N7iqF'),
        o = b('Df1t8'),
        p = b('Yv86d'),
        q = b('hEZVH'),
        r = b('3rMVL'),
        s = b('2x11J');
    let t, u, v, w, x = _z => _z,
        y = class extends h.Component {
            componentDidMount() {
                (0, r.playSound)(p.default.boom, {
                    volume: 0.6
                }), setTimeout(() => {
                    (0, r.playSound)(p.default.lava.egyptFanfare, {
                        volume: 0.5
                    });
                }, 5500), setTimeout(() => {
                    this.setState({
                        stage: 1
                    });
                }, 6000), this.props.gameOptions.music && setTimeout(() => {
                    p.default.lava.panther.fade(0, 0.25, 1000);
                }, 16000);
            }
            render() {
                const {
                    lava: _z
                } = this.props.entities;
                return 0 !== this.state.stage && _z ? (0, g.jsx)(_A, {
                    children: (0, g.jsx)(_B, {
                        children: (0, g.jsxs)(_C, {
                            children: [
                                (0, g.jsx)('div', {
                                    className: 'maxWidth',
                                    style: {
                                        flexShrink: 0,
                                        zIndex: 2
                                    },
                                    children: (0, g.jsx)(i.default, {})
                                }),
                                (0, g.jsxs)(_D, {
                                    children: [
                                        (0, g.jsx)(k.default, {
                                            seconds: _z.secondsLasted
                                        }),
                                        (0, g.jsx)(m.default, {
                                            buildHeight: _z.buildHeight,
                                            pieceCount: _z.buildPieces
                                        }),
                                        (0, g.jsx)(o.default, {})
                                    ]
                                })
                            ]
                        })
                    })
                }) : (0, g.jsx)('div', {
                    style: {
                        height: '100vh',
                        width: '100%',
                        background: q.default.Black
                    }
                });
            }
            constructor(..._z) {
                super(..._z), (0, e.default)(this, 'state', {
                    stage: 0
                });
            }
        };
    y = (0, f.__decorate)([
        (0, s.inject)('gameOptions', 'entities'),
        s.observer
    ], y);
    var _z = y;
    const _A = j.default.div.attrs({
            className: 'maxWidth'
        })(t || (t = x`
  height: 100vh;
  background: ${ 0 };
`), q.default.Black),
        _B = j.default.div.attrs({
            className: 'maxWidth maxHeight animated fadeIn'
        })(u || (u = x`
  animation-duration: 6s;
`)),
        _C = j.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column'
        })(v || (v = x`
  overflow: hidden;
  background: linear-gradient(285deg, #a62a16, #b5761f, #2f2d2a);
  background-size: 600% 600%;
  animation: ${ 0 } 10s ease infinite;
  font-family: ${ 0 };
`), n.BackgroundMove, l.default.fontFamilyName),
        _D = j.default.div.attrs({
            className: 'flex flex-column vc maxWidth animated fadeInDown'
        })(w || (w = x`
  flex: 1;
  z-index: 1;
  overflow-y: auto;
  padding-bottom: 50px;
  animation-duration: 8.2s;
`));
}), b.register('1kMPe', function(c, d) {
    _z(c.exports, 'default', function() {
        return _n;
    });
    var e = b('0hzx+'),
        f = b('3rMVL');
    b('LEQ5w');
    var g = b('Axq+p'),
        h = b('3w/WK');
    let i, j, k, l, m = _z => _z;
    var _n = _z => (0, e.jsxs)(_o, {
        children: [
            (0, e.jsx)(_r, {
                style: {
                    marginRight: 70,
                    transform: 'rotate(-16deg)'
                }
            }),
            (0, e.jsxs)('div', {
                children: [
                    (0, e.jsx)(_p, {
                        children: 'Lava Survival Time:'
                    }),
                    (0, e.jsx)(_q, {
                        children: (0, h.getTimerFromSeconds)(_z.seconds)
                    })
                ]
            }),
            (0, e.jsx)(_r, {
                style: {
                    marginLeft: 70,
                    transform: 'rotate(16deg)'
                }
            })
        ]
    });
    const _o = g.default.div.attrs({
            className: 'flex hc vc animated zoomInDown'
        })(i || (i = m`
  width: 100%;
  margin-top: 70px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  animation-delay: 7.7s;
  animation-duration: 1.5;
`)),
        _p = g.default.div(j || (j = m`
  font-size: 28px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.9);
`)),
        _q = g.default.div(k || (k = m`
  font-size: 146px;
  line-height: 146px;
  font-weight: bold;
  margin-top: 9px;
`)),
        _r = g.default.img.attrs({
            src: (0, f.getAssetPath)('medal.svg')
        })(l || (l = m`
  height: 105px;
  opacity: 0.8;
`));
}), b.register('YiQNi', function(c, d) {
    _z(c.exports, 'default', function() {
        return _l;
    });
    var e = b('0hzx+'),
        f = b('PMl60');
    b('LEQ5w');
    var g = b('Axq+p'),
        h = b('H4roK');
    let i, j, k = _z => _z;
    var _l = _z => (0, e.jsxs)(_m, {
        children: [
            (0, e.jsx)(_n, {
                children: (0, e.jsx)(h.default, {
                    icon: 'fas fa-building',
                    title: 'Building Height',
                    value: _z.buildHeight,
                    label: (0, f.plural)('block', _z.buildHeight)
                })
            }),
            (0, e.jsx)('div', {
                style: {
                    width: 35
                }
            }),
            (0, e.jsx)(_n, {
                children: (0, e.jsx)(h.default, {
                    icon: 'fas fa-tally',
                    title: 'Building Pieces',
                    value: _z.pieceCount,
                    label: (0, f.plural)('piece', _z.pieceCount)
                })
            })
        ]
    });
    const _m = g.default.div.attrs({
            className: 'flex vc hc maxWidth'
        })(i || (i = k`
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
`)),
        _n = g.default.div(j || (j = k`
  width: 350px;
`));
}), b.register('Df1t8', function(c, d) {
    _z(c.exports, 'default', function() {
        return _m;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('2x11J'),
        h = b('LEQ5w'),
        i = b('Axq+p'),
        j = b('Tg04N');
    let k, l = class extends h.Component {
        render() {
            return (0, f.jsxs)(_n, {
                children: [
                    (0, f.jsx)('b', {
                        children: 'Builders:'
                    }),
                    ' ',
                    (0, j.getTeamPlayerNames)(this.props.players.players.map(_z => _z.name))
                ]
            });
        }
    };
    l = (0, e.__decorate)([
        (0, g.inject)('players'),
        g.observer
    ], l);
    var _m = l;
    const _n = i.default.div(k || (k = (_z => _z)`
  width: 90%;
  max-width: 732px;
  font-size: 21px;
  opacity: 0.8;
  margin-top: 50px;
`));
}), b.register('DKAN6', function(c, d) {
    _z(c.exports, 'default', function() {
        return _n;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('oCa/T'),
        h = b('urkHp'),
        i = b('OUxss'),
        j = b('ncAX4'),
        k = b('Axq+p');
    let l;
    class m extends f.Component {
        render() {
            return (0, e.jsx)(g.Container, {
                children: (0, e.jsxs)(_o, {
                    children: [
                        (0, e.jsx)(h.default, {}),
                        (0, e.jsxs)(g.Content, {
                            style: {
                                flexDirection: 'column'
                            },
                            className: 'maxHeight',
                            children: [
                                (0, e.jsx)('div', {
                                    className: 'maxWidth',
                                    style: {
                                        flexShrink: 0
                                    },
                                    children: (0, e.jsx)(i.default, {
                                        hideLogo: !0
                                    })
                                }),
                                (0, e.jsx)('div', {
                                    style: {
                                        flex: 1
                                    },
                                    className: 'scroll-y',
                                    children: (0, e.jsx)(j.default, {})
                                })
                            ]
                        })
                    ]
                })
            });
        }
    }
    var _n = m;
    const _o = k.default.div.attrs({
        className: 'flex animated fadeIn'
    })(l || (l = (_z => _z)`
  flex: 1;
  animation-duration: 1.8s;
`));
}), b.register('ncAX4', function(c, d) {
    _z(c.exports, 'default', function() {
        return _z;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('fDlQt'),
        i = b('Li6uh'),
        j = b('Yv86d'),
        k = b('3rMVL'),
        l = b('ZGYFt'),
        m = b('2x11J'),
        n = b('LEQ5w'),
        o = b('Axq+p'),
        p = b('Tg04N');
    let q, r, s, t, u, v, w, x = _z => _z,
        y = class extends n.Component {
            componentDidMount() {
                (0, k.send)(i.default.imposter.requestPeople), this.impostersWon() ? (0, k.playSound)(j.default.imposter.imposterWin, {
                    volume: 0.8
                }) : (0, k.playSound)(j.default.imposter.crewmateWin, {
                    volume: 0.6
                });
            }
            render() {
                const _z = this.impostersWon(),
                    A = this.imposterNames();
                return (0, g.jsxs)(_A, {
                    children: [
                        (0, g.jsxs)(_B, {
                            children: [
                                _z ? 'Impostors' : 'Crewmates',
                                ' Win'
                            ]
                        }),
                        (0, g.jsxs)(_C, {
                            children: [
                                (0, g.jsx)(_D, {
                                    style: {
                                        background: _z ? '#d32f2f' : '#4caf50'
                                    }
                                }),
                                (0, g.jsx)(_E, {
                                    children: (0, g.jsx)(_F, {
                                        src: (0, k.getAssetPath)(_z ? 'astronaut2.svg' : 'astronaut.svg')
                                    })
                                })
                            ]
                        }),
                        (0, g.jsxs)(_G, {
                            children: [
                                (0, g.jsxs)('b', {
                                    children: [
                                        (0, k.plural)('Impostor', this.props.imposter.people.filter(_z => _z.role === l.PersonRole.imposter).length),
                                        ':'
                                    ]
                                }),
                                ' ',
                                A
                            ]
                        })
                    ]
                });
            }
            constructor(..._A) {
                super(..._A), (0, e.default)(this, 'impostersWon', () => this.props.imposter.impostersLeft >= 1), (0, e.default)(this, 'imposterNames', () => (0, p.getTeamPlayerNames)(this.props.imposter.people.filter(_A => _A.role === l.PersonRole.imposter).map(_A => _A.name)));
            }
        };
    y = (0, f.__decorate)([
        (0, m.inject)('imposter'),
        m.observer
    ], y);
    var _z = y;
    const _A = o.default.div.attrs({
            className: 'flex flex-column vc animated fadeIn'
        })(q || (q = x`
  animation-duration: 12s;
  padding: 100px;
  padding-top: 25px;
  font-family: ${ 0 };
  text-align: center;
`), h.imposterFontName),
        _B = o.default.div(r || (r = x`
  font-size: 75px;
  font-weight: 700;
`)),
        _C = o.default.div(s || (s = x`
  height: 250px;
  width: 300px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 75px;
`)),
        _D = o.default.div.attrs({
            className: 'maxWidth maxHeight animated pulse infinite'
        })(t || (t = x`
  border-radius: 50%;
  animation-duration: 2.5s;
  filter: blur(50px);
`)),
        _E = o.default.div.attrs({
            className: 'flex maxWidth hc vc'
        })(u || (u = x`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`)),
        _F = o.default.img(v || (v = x`
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.4));
  height: 160px;
`)),
        _G = o.default.div(w || (w = x`
  font-size: 24px;
`));
}), b.register('WXPkn', function(c, d) {
    _A(c.exports, 'default', function() {
        return _A;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('OUxss'),
        h = b('Axq+p'),
        i = b('Q9mfL'),
        j = b('hEZVH'),
        k = b('osD0+'),
        l = b('Tivpp'),
        m = b('2x11J'),
        n = b('ApnZz'),
        o = b('sjRDa'),
        p = b('3rMVL'),
        q = b('Yv86d'),
        r = b('YgAA2'),
        s = b('FgYUV'),
        t = b('HMuOC'),
        u = b('/VuAS');
    let v, w, x, y = _A => _A;
    const z = (0, m.observer)(() => {
        const {
            players: {
                finalResults: _A
            }
        } = f.useContext(o.default), [B, C] = f.useState(!1), [D, E] = f.useState(!1), [F, G] = f.useState(!1);
        f.useEffect(() => {
            (0, p.playSound)(q.default.draw.winner, {
                volume: 0.8
            }), setTimeout(() => {
                C(!0), setTimeout(() => {
                    E(!0);
                }, 600), setTimeout(() => {
                    G(!0), (0, p.musicIsOn)() && setTimeout(() => {
                        q.default.draw.background.fade(0, t.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 1500);
                    }, 2000);
                }, 2000);
            }, 2300);
        }, []);
        const H = (0, n.leaderboardSorter)(_A),
            I = H.length ? H[0] : null,
            J = H.filter((_A, _c) => _c > 0);
        return (0, e.jsxs)(_B, {
            children: [
                (0, e.jsx)(g.default, {}),
                (0, e.jsxs)(_C, {
                    children: [
                        I ? (0, e.jsxs)('div', {
                            className: 'maxWidth vc flex-column',
                            style: {
                                display: B ? 'flex' : 'none'
                            },
                            children: [
                                (0, e.jsx)(r.ConfettiContainer, {
                                    children: (0, e.jsx)(_c(s), {
                                        active: D,
                                        config: r.confettiConfig
                                    })
                                }),
                                (0, e.jsx)(k.default, {
                                    name: I.name,
                                    amount: I.balance
                                })
                            ]
                        }) : null,
                        J && J.length && F ? (0, e.jsxs)('div', {
                            className: 'maxWidth animated fadeIn flex flex-column vc',
                            children: [
                                (0, e.jsx)(_D, {}),
                                (0, e.jsx)(l.default, {
                                    people: J
                                })
                            ]
                        }) : null
                    ]
                }),
                (0, e.jsx)(u.default, {})
            ]
        });
    });
    var _A = (0, m.observer)(() => {
        const {
            players: {
                finalResults: B
            }
        } = f.useContext(o.default);
        return B ? (0, e.jsx)(z, {}) : null;
    });
    const _B = h.default.div.attrs({
            className: 'flex flex-column scroll-y'
        })(v || (v = y`
  flex: 1;
  font-family: ${ 0 };
  color: ${ 0 };
  ${ 0 }
`), t.DRAW_MODE_FONT, j.default.Black, i.GRID_BACKGROUND_CSS),
        _C = h.default.div.attrs({
            className: 'scroll-y flex vc flex-column'
        })(w || (w = y`
  flex: 1;
  padding: 40px 0px;
`)),
        _D = h.default.div(x || (x = y`
  width: 95%;
  max-width: 1200px;
  margin: 40px 0px;
  background: ${ 0 };
  border-radius: 23%;
  flex-shrink: 0;
  height: 2px;
`), j.default.Black);
}), b.register('osD0+', function(_c, d) {
    _G(_c.exports, 'default', function() {
        return _q;
    });
    var e = b('0hzx+'),
        f = b('3rMVL'),
        g = b('hEZVH');
    b('LEQ5w');
    var h = b('Axq+p'),
        i = b('OQm8Z');
    let j, k, l, m, n, o, p = _G => _G;
    var _q = _G => (0, e.jsxs)(_r, {
        children: [
            (0, e.jsx)(_s, {
                children: (0, e.jsx)(_t, {})
            }),
            (0, e.jsxs)(_u, {
                children: [
                    (0, e.jsx)(_v, {
                        children: _G.name
                    }),
                    (0, e.jsx)(_w, {
                        children: (0, f.getMoney)(_G.amount)
                    })
                ]
            })
        ]
    });
    const _r = h.default.div.attrs({
            className: 'flex vc flex-column animated zoomInDown'
        })(j || (j = p`
  width: 90%;
  max-width: 580px;
`)),
        _s = h.default.div.attrs({
            className: 'flex hc vc light-shadow'
        })(k || (k = p`
  height: 162px;
  width: 162px;
  background: ${ 0 };
  border-style: solid;
  border-width: 3px;
  border-color: ${ 0 };
  border-radius: 50%;
  z-index: 2;
  margin-bottom: -60px;
  transform: rotate(352deg);
`), g.default.White, g.default.Black),
        _t = h.default.img.attrs({
            src: (0, f.getAssetPath)('hand-drawn-trophy.svg')
        })(l || (l = p`
  height: 93px;
`)),
        _u = (0, h.default)(i.HandDrawnDiv).attrs({
            className: 'maxWidth flex flex-column vc medium-shadow'
        })(m || (m = p`
  padding: 30px;
  padding-top: 65px;
  background: ${ 0 };
`), g.default.White),
        _v = h.default.div(n || (n = p`
  font-size: 53px;
  font-weight: bold;
`)),
        _w = h.default.div(o || (o = p`
  font-size: 24px;
`));
}), b.register('Tivpp', function(c, d) {
    _G(c.exports, 'default', function() {
        return _r;
    });
    var e = b('0hzx+'),
        f = b('3rMVL'),
        g = b('hEZVH'),
        h = b('PMl60');
    b('LEQ5w');
    var i = b('Axq+p');
    let j, k, l, m, n, o, p = _G => _G;
    const q = _G => (0, e.jsxs)(_t, {
        children: [
            (0, e.jsxs)(_u, {
                children: [
                    (0, e.jsx)(_v, {
                        children: (0, h.numberToRank)(_G.place)
                    }),
                    (0, e.jsx)(_w, {
                        children: _G.name
                    })
                ]
            }),
            (0, e.jsx)(_x, {
                children: (0, f.getMoney)(_G.amount)
            })
        ]
    });
    var _r = _G => (0, e.jsx)(_s, {
        children: _G.people.map((_G, c) => (0, e.jsx)(q, {
            name: _G.name,
            amount: _G.balance,
            place: c + 2
        }, `draw-leaderboard-${ _G.id }`))
    });
    const _s = i.default.div(j || (j = p`
  width: 90%;
  max-width: 780px;
`)),
        _t = i.default.div.attrs({
            className: 'flex vc maxWidth light-shadow'
        })(k || (k = p`
  justify-content: space-between;
  padding: 10px 20px;
  background: ${ 0 };
  border-style: solid;
  border-color: ${ 0 };
  border-width: 2px;
  border-radius: 4px;
  line-height: 1;
  margin-bottom: 10px;
`), g.default.White, g.default.Black),
        _u = i.default.div.attrs({
            className: 'flex vc'
        })(l || (l = p`
  margin-right: 20px;
`)),
        _v = i.default.div.attrs({
            className: 'flex hc vc'
        })(m || (m = p`
  height: 50px;
  width: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: ${ 0 };
  border-radius: 50%;
  font-size: 13px;
`), g.default.Black),
        _w = i.default.div(n || (n = p`
  font-size: 21px;
  margin-left: 12px;
  font-weight: bold;
`)),
        _x = i.default.div(o || (o = p`
  font-size: 18px;
`));
}), b.register('/VuAS', function(c, d) {
    _G(c.exports, 'default', function() {
        return _F;
    });
    var e = b('0hzx+'),
        f = b('ulE4q'),
        g = b('fmVdR'),
        h = b('YRlpt'),
        i = b('b5kvC'),
        j = b('INKb2'),
        k = b('hEZVH'),
        l = b('RMEzW'),
        m = b('sjRDa'),
        n = b('gs4MT'),
        o = b('PMl60'),
        p = b('2x11J'),
        q = b('LEQ5w'),
        r = b('Axq+p');
    let s, t, u, v, w, x, y, z, A, B, C, D = _G => _G;
    const E = _G => {
        const [F, G] = q.useState(!1), [H, I] = q.useState(!1);
        return (0, e.jsxs)(_G, {
            children: [
                (0, e.jsxs)(_M, {
                    children: [
                        (0, e.jsxs)('div', {
                            children: [
                                (0, e.jsx)(_O, {
                                    children: _G.term
                                }),
                                (0, e.jsx)(_P, {
                                    children: _G.name
                                })
                            ]
                        }),
                        (0, e.jsx)(_N, {
                            children: _G.canPublish ? (0, e.jsx)(f.default, {
                                onClick: () => {
                                    F || H || (G(!0), (0, o.request)({
                                        url: '/api/v1/fun/draw-that/add',
                                        method: 'post',
                                        data: {
                                            term: _G.term,
                                            image: _G.image
                                        },
                                        success: () => {
                                            I(!0);
                                        },
                                        error: () => (0, j.throwError)({
                                            title: 'Error publishing'
                                        }),
                                        both: () => G(!1)
                                    }));
                                },
                                type: 'primary',
                                loading: F,
                                disabled: H,
                                children: H ? 'Published' : 'Publish'
                            }) : null
                        })
                    ]
                }),
                (0, e.jsx)(_Q, {
                    src: _G.image
                })
            ]
        });
    };
    var _F = (0, p.observer)(() => {
        const {
            draw: _G
        } = q.useContext(m.default), H = (0, o.getUser)(), I = !(!H || (0, o.isStudent)(H) || !(0, o.isUpgraded)(H) || H.freeTrial && H.freeTrial.currentlyOnFreeTrial), J = (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(_L, {
                    children: 'View drawings from your students down below!'
                }),
                (0, e.jsxs)(_L, {
                    children: [
                        'Publish some drawings to our global',
                        ' ',
                        (0, e.jsx)('a', {
                            href: n.DRAW_THAT_GALLERY,
                            target: '_blank',
                            children: (0, e.jsx)('b', {
                                children: 'Draw That Art Gallery!'
                            })
                        })
                    ]
                }),
                (0, e.jsx)(_L, {
                    children: 'While their name will not be shared, please get the drawer\'s permission before publishing to the gallery.'
                })
            ]
        }), K = (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(_L, {
                    children: 'View drawings from your students down below!'
                }),
                (0, e.jsxs)(_L, {
                    children: [
                        'Checkout our',
                        ' ',
                        (0, e.jsx)('a', {
                            href: n.DRAW_THAT_GALLERY,
                            target: '_blank',
                            children: (0, e.jsx)('b', {
                                children: 'Draw That Art Gallery'
                            })
                        }),
                        ' ',
                        'to view drawings from classes around the world!'
                    ]
                }),
                (0, e.jsx)(_L, {
                    children: 'For safety purposes, only paying subscribers can contribute art to the gallery.'
                })
            ]
        });
        return (0, e.jsxs)(h.default, {
            open: _G.drawingsModalOpen,
            closable: !0,
            onCancel: () => {
                _G.drawingsModalOpen = !1;
            },
            style: {
                top: 20,
                fontFamily: l.default.fontFamilyName,
                color: k.default.Black
            },
            footer: null,
            children: [
                (0, e.jsxs)(_H, {
                    children: [
                        (0, e.jsx)(_I, {}),
                        (0, e.jsx)(_J, {
                            children: 'Drawings'
                        }),
                        (0, e.jsx)(_K, {
                            children: I ? J : K
                        }),
                        (0, e.jsx)(f.default, {
                            block: !0,
                            type: 'primary',
                            target: '_blank',
                            href: n.DRAW_THAT_GALLERY,
                            children: 'Visit Draw That Art Gallery'
                        })
                    ]
                }),
                (0, e.jsx)(g.default, {}),
                _G.drawingHistory.map((_G, H) => (0, e.jsx)(E, {
                    image: _G.image,
                    name: _G.name,
                    term: _G.term,
                    canPublish: I
                }, `drawing-history-${ _G.index }`))
            ]
        });
    });
    const _G = r.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(s || (s = D`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        _H = r.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(t || (t = D`
  background: #fff3e0;
  padding: 20px;
  border-radius: 5px;
`)),
        _I = r.default.img.attrs({
            src: '/client/img/drawThat/art-gallery.svg'
        })(u || (u = D`
  height: 65px;
`)),
        _J = r.default.div(v || (v = D`
  font-size: 30px;
  margin-top: 6px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        _K = r.default.ul(w || (w = D`
  margin-top: 4px;
  font-size: 14px;
  li {
    margin-bottom: 5px;
  }
`)),
        _L = r.default.li(x || (x = D`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        _M = r.default.div.attrs({
            className: 'maxWidth flex vc'
        })(y || (y = D`
  justify-content: space-between;
  margin-bottom: 10px;
`)),
        _N = r.default.div(z || (z = D`
  margin-left: 15px;
`)),
        _O = r.default.div(A || (A = D`
  font-size: 22px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        _P = r.default.div(B || (B = D`
  font-size: 14px;
  opacity: 0.7;
`)),
        _Q = r.default.img.attrs({
            className: 'maxWidth'
        })(C || (C = D`
  border: 2px solid #e8e8e8;
  border-radius: 4px;
`));
}), b.register('Ewu2C', function(c, d) {
    _x(c.exports, 'default', function() {
        return _w;
    });
    var e = b('0hzx+'),
        f = b('sHRDd'),
        g = b('b5kvC'),
        h = b('Yv86d'),
        i = b('sjRDa'),
        j = b('PMl60'),
        k = b('TwXYL'),
        l = b('2x11J'),
        m = b('LEQ5w'),
        n = b('Axq+p'),
        o = b('OUxss'),
        p = b('UesAb'),
        q = b('ZU6Qc'),
        r = b('kA2pa');
    let s, t, u, v = _x => _x;
    var _w = (0, l.observer)(() => {
        const {
            players: {
                players: _x
            }
        } = m.useContext(i.default);
        m.useEffect(() => {
            h.default.pardy.countdown.stop(), h.default.pardy.music.fade(h.default.pardy.music.volume(), 0, 400), h.default.pardy.finaleMusic.fade(h.default.pardy.finaleMusic.volume(), 0, 400);
        }, []);
        const [y, z] = (0, j.useBoolean)(!(_x.length >= 2));
        return (0, e.jsx)(_x, {
            children: (0, e.jsx)(p.default, {
                children: (0, e.jsxs)(_y, {
                    children: [
                        (0, e.jsx)(o.default, {}),
                        (0, e.jsx)(_z, {
                            children: y ? (0, e.jsx)(q.default, {}) : (0, e.jsx)(r.default, {
                                setToLeaderboardScreen: z
                            })
                        })
                    ]
                })
            })
        });
    });
    const _x = n.default.div.attrs({
            className: 'flex'
        })(s || (s = v`
  flex: 1;
  background: ${ 0 };
  font-family: 'Londrina Solid', cursive;
  font-weight: ${ 0 };
  overflow: hidden;
`), f.default.Black, g.FontWeights.Light),
        _y = (0, n.default)(k.motion.div).attrs({
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 1.4
            },
            className: 'flex flex-column maxAll'
        })(t || (t = v`
  overflow: hidden;
`)),
        _z = n.default.div(u || (u = v`
  flex: 1;
  overflow: hidden;
`));
}), b.register('ZU6Qc', function(c, d) {
    _I(c.exports, 'default', function() {
        return _j;
    });
    var e = b('0hzx+');
    b('LEQ5w');
    var f = b('jxXLX'),
        g = b('Axq+p'),
        h = b('TwXYL');
    let i;
    var _j = () => (0, e.jsx)(_k, {
        initial: {
            x: '100%'
        },
        animate: {
            x: '0%'
        },
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        },
        children: (0, e.jsx)(f.default, {})
    });
    const _k = (0, g.default)(h.motion.div).attrs({
        className: 'maxAll'
    })(i || (i = (_I => _I)``));
}), b.register('kA2pa', function(c, d) {
    _I(c.exports, 'default', function() {
        return _D;
    });
    var e = b('0hzx+'),
        f = b('fmVdR'),
        g = b('b5kvC'),
        h = b('LEQ5w'),
        i = b('Axq+p'),
        j = b('0xKZw'),
        k = b('3rMVL'),
        l = b('FgYUV'),
        m = b('YgAA2'),
        n = b('TwXYL'),
        o = b('2x11J'),
        p = b('sjRDa'),
        q = b('ApnZz'),
        r = b('fe6E3'),
        s = b('Yv86d'),
        t = b('7Vnm/'),
        u = b('v88Hz');
    let v, w, x, y, z, A, B = _I => _I;
    const C = _I => (0, e.jsxs)(_G, {
        style: {
            background: _I.isWinner ? '#005005' : 'rgba(0, 0, 0, 0.6)'
        },
        className: _I.isWinner ? 'animated tada' : '',
        children: [
            (0, e.jsxs)(_H, {
                children: [
                    'Contestant ',
                    _I.contestantType
                ]
            }),
            (0, e.jsx)(_I, {
                children: _I.contestantName
            }),
            (0, e.jsx)(f.default, {
                style: {
                    margin: '12px 0px'
                }
            }),
            (0, e.jsx)(_J, {
                children: (0, e.jsx)(_J(j), {
                    start: 0,
                    end: _I.balance,
                    formattingFn: k.getMoney,
                    duration: 6.5,
                    delay: 1.8,
                    onEnd: _I.handleCountEnd
                })
            })
        ]
    });
    var _D = (0, o.observer)(_I => {
        const {
            players: {
                players: E
            }
        } = h.useContext(p.default), [F, G] = h.useState(!1), H = h.useMemo(() => {
            const _I = (0, q.leaderboardSorter)(E),
                _J = [];
            return _I[0] && _J.push(_I[0]), _I[1] && _J.push(_I[1]), (0, r.shuffle)(_J);
        }, []);
        h.useEffect(() => {
            H && 2 === H.length || _s.setToLeaderboardScreen();
        }, [H]), h.useEffect(() => {
            setTimeout(() => {
                (0, k.playSound)(s.default.pardy.drumRoll, {
                    volume: 0.7
                });
            }, 1000);
        }, []);
        if (!H || 2 !== H.length)
            return null;
        const I = H[0].balance > H[1].balance;
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(_E, {
                    initial: {
                        y: '100%',
                        x: '0'
                    },
                    animate: {
                        y: '0%',
                        x: F ? '-100%' : '0%'
                    },
                    transition: {
                        delay: F ? 2.3 : 0.5,
                        duration: F ? 0.6 : 1.2,
                        ease: F ? 'easeIn' : 'easeOut'
                    },
                    onAnimationComplete: () => {
                        F && _s.setToLeaderboardScreen();
                    },
                    children: (0, e.jsx)(u.default, {
                        children: (0, e.jsxs)(_F, {
                            children: [
                                (0, e.jsx)(C, {
                                    contestantType: 'A',
                                    contestantName: H[0].name,
                                    balance: H[0].balance,
                                    handleCountEnd: () => {
                                        (0, k.playSound)(s.default.celebrate, {}), setTimeout(() => {
                                            (0, k.musicIsOn)() && s.default.pardy.music.fade(s.default.pardy.music.volume(), t.default.musicVolume, 1000);
                                        }, 1000), G(!0), setTimeout(() => {
                                            (0, k.playSound)(s.default.pardy.swoosh, {});
                                        }, 2000);
                                    },
                                    isWinner: !!F && I
                                }),
                                (0, e.jsx)(C, {
                                    contestantType: 'B',
                                    contestantName: H[1].name,
                                    balance: H[1].balance,
                                    isWinner: !!F && !I
                                })
                            ]
                        })
                    })
                }),
                (0, e.jsx)(m.ConfettiContainer, {
                    children: (0, e.jsx)(_c(l), {
                        active: F,
                        config: m.confettiConfig
                    })
                })
            ]
        });
    });
    const _E = (0, i.default)(n.motion.div).attrs({
            className: 'maxAll'
        })(v || (v = B``)),
        _F = i.default.div.attrs({
            className: 'flex-center maxAll'
        })(w || (w = B`
  padding: 30px;
`)),
        _G = i.default.div.attrs({
            className: 'medium-shadow'
        })(x || (x = B`
  border: 3px solid;
  border-radius: 6px;
  padding: 25px;
  width: 350px;
  margin: 10px;
  flex-shrink: 0;
  animation-duration: 1.4s;
  transition: background 0.8s;
`)),
        _H = i.default.div(y || (y = B`
  font-style: italic;
  text-transform: uppercase;
  font-size: 18px;
`)),
        _I = i.default.div(z || (z = B`
  font-size: 32px;
  font-weight: ${ 0 };
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`), g.FontWeights.Normal),
        _J = i.default.div(A || (A = B`
  font-size: 32px;
`));
}), b.register('v88Hz', function(_c, d) {
    _s(_c.exports, 'default', function() {
        return _m;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w'),
        g = b('Axq+p'),
        h = b('BXKZi0');
    let i, j, k, l = _s => _s;
    var _m = _s => {
        const n = f.useRef(null),
            [o, p] = (0, h.default)(n),
            q = Math.min(o / 800, p / 450);
        let r = 450 * q;
        isNaN(r) && (r = 0);
        let s = 800 * q;
        return isNaN(s) && (s = 0), (0, e.jsx)(_n, {
            ref: n,
            children: (0, e.jsx)(_o, {
                style: {
                    height: r,
                    width: s
                },
                children: (0, e.jsx)(_p, {
                    style: {
                        transform: `scale(${ q })`
                    },
                    children: _s.children
                })
            })
        });
    };
    const _n = g.default.div(i || (i = l`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        _o = g.default.div(j || (j = l``)),
        _p = g.default.div(k || (k = l`
  height: ${ 0 }px;
  width: ${ 0 }px;
  transform-origin: top left;
  display: flex;
  justify-content: center;
  align-items: center;
`), 450, 800);
}), b.register('ZKCsJ', function(c, d) {
    _s(c.exports, 'default', function() {
        return _r;
    });
    var e = b('0hzx+'),
        f = b('FpbFp'),
        g = b('sHRDd'),
        h = b('sjRDa'),
        i = b('cU0hM'),
        j = b('PMl60'),
        k = b('2x11J'),
        l = b('LEQ5w'),
        m = b('Axq+p'),
        n = b('3rMVL'),
        o = b('aBrDe'),
        p = b('J5Z+a');
    let q;
    var _r = (0, k.observer)(() => {
        const {
            engine: _s,
            gameValues: t,
            metadata: u
        } = l.useContext(h.default), v = (0, n.getQueryVariable)('id'), [w, x] = (0, j.useBoolean)(!1);
        return l.useEffect(() => {
            (0, p.default)(v, {
                onSuccess: () => {
                    x(), (0, o.default)();
                },
                onError: _s => {
                    _s && _s.message && _s.message.text ? t.roomIntentErrorMessage = _s.message.text : t.roomIntentErrorMessage = 'There was an error. Please refresh and try again.';
                }
            });
        }, []), l.useEffect(() => {
            _s.joinedRoom && w && u.hasReceivedHostStaticState && (t.currentRoute = i.GameStatus.join);
        }, [
            w,
            _s.joinedRoom,
            u.hasReceivedHostStaticState
        ]), (0, e.jsx)(_s, {
            children: (0, e.jsx)(f.default, {
                style: {
                    color: g.default.White
                },
                size: 84
            }, 'setup-loader')
        });
    });
    const _s = m.default.div.attrs({
        className: 'maxAll flex-center flex-column'
    })(q || (q = (_m => _m)`
  color: ${ 0 };
`), g.default.White);
}), b.register('FpbFp', function(c, d) {
    _m(c.exports, 'default', function() {
        return _s;
    });
    var e = b('r98tK1'),
        f = b('GepBD'),
        g = b('LEQ5w');
    b('WPpLv');
    var h = b('cO49c'),
        i = b('QvROH'),
        j = b('mmS5q'),
        k = 44;

    function l(_m) {
        var n, o, p;
        return n = _m, o = 0, p = 1, _m = (Math.min(Math.max(o, n), p) - o) / (p - o), _m = (_m -= 1) * _m * _m + 1;
    }
    var l = g.forwardRef(function(m, n) {
            var o, p = m.classes,
                q = m.className,
                r = m.color,
                _s = void 0 === r ? 'primary' : r,
                t = m.disableShrink,
                u = void 0 !== t && t,
                v = m.size,
                w = void 0 === v ? 40 : v,
                x = m.style,
                y = m.thickness,
                z = void 0 === y ? 3.6 : y,
                A = m.value,
                B = void 0 === A ? 0 : A,
                C = m.variant,
                D = void 0 === C ? 'indeterminate' : C,
                E = (0, f.default)(m, [
                    'classes',
                    'className',
                    'color',
                    'disableShrink',
                    'size',
                    'style',
                    'thickness',
                    'value',
                    'variant'
                ]),
                F = {},
                G = {},
                H = {};
            if ('determinate' === D || 'static' === D) {
                var I = 2 * Math.PI * ((k - z) / 2);
                F.strokeDasharray = I.toFixed(3), H['aria-valuenow'] = Math.round(B), 'static' === D ? (F.strokeDashoffset = ''.concat(((100 - B) / 100 * I).toFixed(3), 'px'), G.transform = 'rotate(-90deg)') : (F.strokeDashoffset = ''.concat((o = (100 - B) / 100, o * o * I).toFixed(3), 'px'), G.transform = 'rotate('.concat((270 * _m(B / 70)).toFixed(3), 'deg)'));
            }
            return g.createElement('div', (0, e.default)({
                className: (0, h.default)(p.root, q, 'inherit' !== _s && p['color'.concat((0, j.default)(_s))], {
                    indeterminate: p.indeterminate,
                    static: p.static
                } [D]),
                style: (0, e.default)({
                    width: w,
                    height: w
                }, G, x),
                ref: n,
                role: 'progressbar'
            }, H, E), g.createElement('svg', {
                className: p.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(k, ' ').concat(k)
            }, g.createElement('circle', {
                className: (0, h.default)(p.circle, u && p.circleDisableShrink, {
                    indeterminate: p.circleIndeterminate,
                    static: p.circleStatic
                } [D]),
                style: F,
                cx: k,
                cy: k,
                r: (k - z) / 2,
                fill: 'none',
                strokeWidth: z
            })));
        }),
        m = (0, i.default)(function(n) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: n.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: n.palette.primary.main
                },
                colorSecondary: {
                    color: n.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: n.transitions.create('stroke-dashoffset')
                },
                circleIndeterminate: {
                    animation: '$circular-dash 1.4s ease-in-out infinite',
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: '0px'
                },
                '@keyframes circular-rotate': {
                    '0%': {
                        transformOrigin: '50% 50%'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                },
                '@keyframes circular-dash': {
                    '0%': {
                        strokeDasharray: '1px, 200px',
                        strokeDashoffset: '0px'
                    },
                    '50%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-15px'
                    },
                    '100%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-125px'
                    }
                },
                circleDisableShrink: {
                    animation: 'none'
                }
            };
        }, {
            name: 'MuiCircularProgress',
            flip: !1
        })(l);
}), b.register('cU0hM', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    let _m;
    var n;
    _j(c.exports, 'GameStatus', function() {
        return i;
    }), (f = e || (e = {})).multipleChoice = 'mc', f.textInput = 'text', (h = g || (g = {})).public = 'public', h.private = 'private', (j = i || (i = {})).setup = 'setup', j.join = 'join', j.teams = 'teams', j.gameplay = 'gameplay', j.results = 'results', (l = k || (k = {})).classic = 'classic', l.team = 'team', (n = _m || (_m = {})).time = 'time', n.race = 'race', n.allIn = 'allIn';
}), b.register('aBrDe', function(c, d) {
    _j(c.exports, 'default', function() {
        return _f;
    });
    var e = b('/Becs');
    var _f = () => {
        (0, e.default)().then().catch(_j => !1);
    };
}), b.register('/Becs', function(c, d) {
    _j(c.exports, 'default', function() {
        return _i;
    });
    var e = b('3rMVL'),
        f = b('eZLP8'),
        g = b('areiM'),
        h = b('PMl60');
    var _i = async () => {
        try {
            const _j = await (0, f.default)();
            await (0, g.default)({
                createOptions: {
                    serverUrl: _j.serverUrl,
                    roomType: 'LiveGame',
                    options: {
                        intentId: (0, e.getQueryVariable)('id'),
                        authToken: (0, h.isLoggedIn)() ? (0, h.getUser)().token : ''
                    }
                }
            });
        } catch (_i) {
            console.log({
                errorCreatingGame: _i
            });
        }
    };
}), b.register('eZLP8', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('e3EXx'),
        f = b('PMl60'),
        g = b('6XgQB1');
    var _h = async () => {
        try {
            e.default.engine.findingServerForGame = !0;
            let _i = '';
            try {
                const j = await new Promise((_i, j) => {
                    (0, f.request)({
                        url: '/api/matchmaker/find-server-to-host-game',
                        data: {
                            source: g.ExperienceSource.original
                        },
                        success: j => {
                            _i(j);
                        },
                        error: _i => {
                            j(_i);
                        }
                    });
                });
                if (!j || !j.url)
                    throw 'No server response';
                _i = j.url;
            } catch (_i) {
                throw e.default.engine.errorFindingServerForGame = !0, e.default.engine.findingServerForGame = !1, _i;
            }
            if (e.default.engine.findingServerForGame = !1, !_i)
                throw new Error('No Server URL');
            return {
                serverUrl: _i
            };
        } catch (_j) {
            throw _j;
        }
    };
}), b.register('areiM', function(c, d) {
    _j(c.exports, 'default', function() {
        return _h;
    });
    var e = b('T2fy6'),
        f = b('e3EXx'),
        g = b('Y+cL5');
    var _h = _j => {
        const {
            joinOptions: i,
            createOptions: j
        } = _j;
        if (!i && !j)
            return;
        const k = () => {
            f.default.engine.attemptingToConnect = !1, f.default.engine.hasConnected = !1, f.default.engine.connected = !1, f.default.engine.connectionError = !1, f.default.engine.joinedRoom = !1, f.default.engine.attemptingToJoinRoom = !1, f.default.engine.errorJoiningRoom = !1, f.default.engine.roomError = null;
        };
        k(), f.default.engine.attemptingToConnect = !0;
        const l = new(0, e.Client)(i ? i.serverUrl : j.serverUrl, {
                transports: ['websocket'],
                clientIdSuffix: '-host'
            }),
            m = l.onConnectError.add(i => {
                console.log({
                    connectionError: i
                }), _j.onConnectError && _j.onConnectError(i), _j.disposeOnError && k(), f.default.engine.connectionError = !0, f.default.engine.attemptingToConnect = !1;
            });
        l.onConnect.add(() => {
            m(), f.default.engine.client = l, f.default.engine.connected = !0, f.default.engine.hasConnected = !0, f.default.engine.attemptingToConnect = !1, f.default.engine.attemptingToJoinRoom = !0, l.onConnectError.add(() => {
                f.default.engine.connectionError = !0;
            }), l.onConnect.add(() => {
                f.default.engine.connected = !0, f.default.engine.connectionError = !1, f.default.engine.attemptingToConnect = !1, f.default.engine.attemptingToJoinRoom = !0;
            }), l.onReconnect.add(() => {
                f.default.engine.connected = !0, f.default.engine.connectionError = !1, f.default.engine.attemptingToConnect = !1, f.default.engine.attemptingToJoinRoom = !0;
            }), f.default.engine.attemptingToJoinRoom = !0;
            const n = i ? l.joinRoom(i.roomId, i.options) : l.createRoom(j.roomType, j.options);
            n.onJoinAttempt.add(() => {
                f.default.engine.attemptingToJoinRoom = !0;
            }), n.onJoinError.add(i => {
                console.log({
                    roomJoinError: i
                }), _j.onRoomJoinError && _j.onRoomJoinError(i), f.default.engine.roomError = i, f.default.engine.errorJoiningRoom = !0, f.default.engine.attemptingToJoinRoom = !1;
            });
            const o = n.onJoinError.add(() => {
                _j.disposeOnError && k();
            });
            n.onJoin.add(() => {
                (0, g.default)(n), _j.onRoomJoin && _j.onRoomJoin();
            }, !0), n.onJoin.add(() => {
                o(), f.default.engine.joinedRoom = !0, f.default.engine.attemptingToJoinRoom = !1, f.default.engine.game || (f.default.engine.game = n);
            }), n.onLeave.add(() => {
                f.default.engine.joinedRoom = !1;
            });
        }, !0), l.onDisconnect.add(() => {
            f.default.engine.attemptingToConnect = !0, f.default.engine.connected = !1, _j.onDisconnect && _j.onDisconnect();
        });
    };
}), b.register('Y+cL5', function(c, d) {
    _j(c.exports, 'default', function() {
        return _q;
    });
    var e = b('YRlpt'),
        f = b('Yv86d'),
        g = b('3rMVL'),
        h = b('e3EXx'),
        i = b('dtjwL'),
        j = b('YZeoS'),
        k = b('RIbmr'),
        l = b('n1AK3'),
        m = b('0Sg56'),
        n = b('BFjCf'),
        o = b('PMl60');
    const p = _j => {
        f.default[_j] && Object.keys(f.default[_j]).forEach(c => {
            f.default[_j][c] && f.default[_j][c].load && f.default[_j][c].load();
        });
    };
    var _q = _j => {
        const r = m.default.map(_j => _j());
        _j.onMessage.add((d, b) => {
            const s = {
                action: d,
                payload: b
            };
            if (s.action !== i.default.stateUpdate)
                if (s.action !== i.default.viewableGameCode) {
                    if (s.action === i.default.hostStaticState) {
                        if (h.default.metadata.hasReceivedHostStaticState)
                            return;
                        return Object.keys(b.options || {}).forEach(_j => {
                            h.default.gameOptions[_j] = b.options[_j];
                        }), h.default.gameValues.availableThemes.replace(b.themes), h.default.gameValues.gameCode = b.gameCode, Object.keys(f.default).forEach(_j => {
                            f.default[_j] && f.default[_j].load && f.default[_j].load();
                        }), (0, g.inImposterMode)() && p('imposter'), (0, g.inThanosMode)() && p('thanos'), (0, g.inLavaMode)() && p('lava'), (0, g.inBossBattleMode)() && p('bossBattle'), (0, g.inDrawMode)() && (p('draw'), (0, o.loadFont)('https://fonts.googleapis.com/css2?family=Pangolin&display=swap')), (0, g.inPardyMode)() && ((0, o.loadFont)('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap'), p('pardy')), (0, n.default)(_j), void(h.default.metadata.hasReceivedHostStaticState = !0);
                    }
                    if (s.action !== i.default.newActivityItem)
                        if (s.action !== i.default.newPlayerStats)
                            if (s.action !== i.default.specialSongPlayed)
                                if (s.action !== i.default.updatedPlayerLeaderboard)
                                    if (s.action !== i.default.updatedTeamLeaderboard)
                                        if (s.action !== i.default.clapCount)
                                            if (s.action !== i.default.thanosResults)
                                                if (s.action !== i.default.defendingHomebases) {
                                                    if (s.action === i.default.defendingHomebaseResults)
                                                        return h.default.gameValues.defendingHomebaseResults = b, void(0, g.endGame)(!0);
                                                    if (s.action !== i.default.playAgainIntentId)
                                                        if (s.action === i.default.errorModal && e.default.error({
                                                                title: b.title,
                                                                content: b.content
                                                            }), s.action !== i.default.setReportId) {
                                                            if (s.action !== i.default.lavaResults)
                                                                return s.action === i.default.imposter.quickStats ? (h.default.imposter.impostersLeft = b.impostersLeft, h.default.imposter.meetingsLeft = b.meetingsLeft, void(h.default.imposter.investigationsLeft = b.investigationsLeft)) : void(s.action !== i.default.imposter.people ? s.action !== i.default.imposter.meetingResults ? s.action !== i.default.imposter.callAMeeting ? s.action !== i.default.imposter.voteCount ? s.action !== i.default.draw.line ? s.action !== i.default.draw.feedItem ? s.action !== i.default.draw.personCount ? s.action !== i.default.draw.pointAdditions || h.default.draw.pointAdditions.replace(b) : h.default.draw.personCount = b : h.default.draw.latestFeedItem = b : h.default.draw.latestLine = b : h.default.imposter.votes = b : (0, l.default)() : h.default.imposter.meetingResults = b : h.default.imposter.people.replace(b));
                                                            h.default.entities.lava = b;
                                                        } else
                                                            h.default.gameValues.reportId = b.reportId;
                                                    else
                                                        window.location.href = `/host?id=${ b }`;
                                                } else
                                                    h.default.entities.defendingHomebase.replace(b);
                    else
                        h.default.gameValues.thanosValues = b;
                    else
                        h.default.gameValues.clapCount = b;
                    else
                        'final' === b.key ? h.default.players.finalResults.replace(b.items) : h.default.players.teams.replace(b.items);
                    else
                        'final' === b.key ? h.default.players.finalResults.replace(b.items) : h.default.players.players.replace(b.items);
                    else {
                        if (!b.audioFile || !b.background)
                            return;
                        (0, g.startSpecialSong)(b.audioFile, b.background);
                    } else
                        h.default.stats.playerStats.push(s.payload);
                    else
                        (0, g.addActivityItem)(s.payload);
                } else
                    h.default.gameValues.gameCode = b;
            else
                (0, j.default)(b.type, b.value, r);
        }), (0, k.default)(_j);
    };
}), b.register('dtjwL', function(c, d) {
    _j(c.exports, 'default', function() {
        return b;
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
}), b.register('YZeoS', function(c, d) {
    _j(c.exports, 'default', function() {
        return _g;
    });
    var e = b('e3EXx'),
        f = b('o9hEA');
    var _g = (_j, c, d) => {
        if (_j === f.default.gameStatus)
            return void(e.default.gameValues.currentRoute !== c && (e.default.gameValues.currentRoute = c));
        const h = d.find(c => c.key === _j);
        h && h.listener.applyPatches(c);
    };
}), b.register('o9hEA', function(c, d) {
    _j(c.exports, 'default', function() {
        return b;
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
}), b.register('RIbmr', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('3rMVL'),
        f = b('e3EXx'),
        g = b('6XgQB1'),
        h = b('Li6uh');
    const i = _j => {
        const j = f.default.gameValues.currentRoute;
        if (j === g.GameStatus.join)
            return _j.send(h.default.requestPlayerLeaderboard), void setTimeout(() => i(_j), 1000);
        if (j === g.GameStatus.teams)
            return _j.send(h.default.requestTeamLeaderboard), void setTimeout(() => i(_j), 4700);
        if (j === g.GameStatus.gameplay) {
            if ((0, e.inLavaMode)())
                return;
            return (0, e.inImposterMode)() ? _j.send(h.default.imposter.requestPeople) : (0, e.inZombiesVsHumansMode)() ? _j.send(h.default.requestDefendingHomebase) : (0, e.inTeamMode)() ? _j.send(h.default.requestTeamLeaderboard) : _j.send(h.default.requestPlayerLeaderboard), void setTimeout(() => i(_j), 2500);
        }
        j !== g.GameStatus.results && setTimeout(() => i(_j), 1000);
    };
    var _j = i;
}), b.register('0Sg56', function(c, d) {
    _j(c.exports, 'default', function() {
        return _h;
    }), b('Ewffd');
    var e = b('oMqe8'),
        f = b('ORz0f');
    b('a/Kqq');
    var g = b('R8kXK');
    var _h = [
        e.default,
        f.default,
        g.default
    ];
}), b.register('Ewffd', function(c, d) {
    _j(c.exports, 'Round', function() {
        return b('oMqe8').default;
    }), _j(c.exports, 'Status', function() {
        return b('ORz0f').default;
    });
    b('oMqe8'), b('ORz0f');
}), b.register('oMqe8', function(c, d) {
    _j(c.exports, 'default', function() {
        return _i;
    });
    var e = b('e3EXx'),
        f = b('eedQ8'),
        g = b('o9hEA');
    const h = [
        'secondsLeft',
        'term',
        'drawer',
        'drawingBase64',
        'revealText'
    ];
    var _i = () => {
        const _j = new(0, f.default)();
        return h.forEach(c => {
            _j.onPropChange(c, _j => {
                e.default.draw.round[c] = _j;
            });
        }), {
            key: g.default.draw.round,
            listener: _j
        };
    };
}), b.register('ORz0f', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('e3EXx'),
        f = b('eedQ8'),
        g = b('o9hEA');
    var _h = () => {
        const _i = new(0, f.default)();
        return _i.onPropChange('value', _i => {
            e.default.draw.status = _i;
        }), {
            key: g.default.draw.status,
            listener: _i
        };
    };
}), b.register('a/Kqq', function(c, d) {
    _j(c.exports, 'PardyState', function() {
        return b('R8kXK').default;
    });
    b('R8kXK');
}), b.register('R8kXK', function(c, d) {
    _j(c.exports, 'default', function() {
        return _i;
    });
    var e = b('e3EXx'),
        f = b('eedQ8'),
        g = b('o9hEA');
    const h = [
        'board',
        'powers',
        'finaleQuestionId',
        'playerCount',
        'betsPlaced',
        'playersAnswered',
        'playersAnsweredCorrectly',
        'nameOfFirstPlayerToAnswerCorrectly'
    ];
    var _i = () => {
        const _j = new(0, f.default)();
        return h.forEach(c => {
            _j.onPropChange(c, _j => {
                'powers' === c ? e.default.pardy.powers.replace(_j) : e.default.pardy[c] = _j;
            });
        }), {
            key: g.default.pardy.state,
            listener: _j
        };
    };
}), b.register('BFjCf', function(c, d) {
    _t(c.exports, 'default', function() {
        return _j;
    });
    var e = b('3rMVL'),
        f = b('YuT/D'),
        g = b('e3EXx'),
        h = b('Li6uh'),
        i = b('6XgQB1');
    var _j = _t => {
        (0, f.reaction)(() => g.default.gameValues.currentRoute, c => {
            i.GameStatus.gameplay, _t.send(h.default.newGameStatus, c);
        }), (0, e.inImposterMode)() && (0, f.reaction)(() => g.default.imposter.status, c => _t.send(h.default.imposter.status, c)), (0, e.inPardyMode)() && ((0, f.reaction)(() => g.default.pardy.currentRound, c => {
            _t.send(h.default.pardy.setNewRoundDetails, c);
        }), (0, f.reaction)(() => g.default.pardy.screen, c => {
            _t.send(h.default.pardy.setScreen, c);
        }), (0, f.reaction)(() => g.default.pardy.questionScreen, c => {
            _t.send(h.default.pardy.setQuestionScreen, c);
        }), (0, f.reaction)(() => g.default.pardy.questionStatus, c => {
            _t.send(h.default.pardy.setQuestionStatus, c);
        }));
    };
}), b.register('J5Z+a', function(c, d) {
    _t(c.exports, 'default', function() {
        return _g;
    });
    var e = b('PMl60'),
        f = b('e3EXx');
    var _g = (_t, c) => {
        (0, e.request)({
            url: `/api/matchmaker/intent/live-game/summary/${ _t }`,
            success: _t => {
                f.default.kit.questions = _t.questions, f.default.metadata.currentGameIsUsingGroups = !!_t.usingGroups, c.onSuccess && c.onSuccess();
            },
            error: _t => {
                c.onError && c.onError(_t);
            }
        });
    };
}), b.register('SUeUf', function(c, d) {
    _t(c.exports, 'default', function() {
        return _t;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('Li6uh'),
        i = b('3rMVL'),
        j = b('2x11J'),
        k = b('LEQ5w'),
        l = b('Axq+p'),
        m = b('ar59h'),
        n = b('E0QD2'),
        o = b('PdU/j'),
        p = b('VE8AA');
    let q;
    const r = l.default.div(q || (q = (_t => _t)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`));
    let s = class extends k.Component {
        componentDidMount() {
            (0, i.inBossBattleMode)() ? this.makeBossBattleTeams(): this.makeTeams(!0);
        }
        render() {
            const _t = !(0, i.inBossBattleMode)();
            return this.props.ui.showingBossPreScreen ? (0, g.jsx)(m.default, {}) : this.props.ui.showingHumansVsZombiesPreScreen ? (0, g.jsx)(n.default, {}) : (0, g.jsxs)(r, {
                children: [
                    (0, g.jsx)(o.default, {
                        reshuffle: _t ? this.makeTeams : null
                    }),
                    (0, g.jsx)(p.default, {})
                ]
            });
        }
        constructor(..._v) {
            super(..._v), (0, e.default)(this, 'makeBossBattleTeams', () => {
                this.props.engine.game.send(h.default.makeTeams, {
                    boss: this.props.gameValues.bossId
                });
            }), (0, e.default)(this, 'makeTeams', _v => {
                this.props.engine.game.send(h.default.makeTeams);
            });
        }
    };
    s = (0, f.__decorate)([
        (0, j.inject)('engine', 'gameOptions', 'gameValues', 'ui'),
        j.observer
    ], s);
    var _t = s;
}), b.register('ar59h', function(c, d) {
    _v(c.exports, 'default', function() {
        return _v;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('YgAA2'),
        i = b('Yv86d'),
        j = b('2x11J'),
        k = b('LEQ5w'),
        l = b('FgYUV'),
        m = b('Axq+p'),
        n = b('6XgQB1'),
        o = b('3rMVL'),
        p = b('PMl60');
    let q, r, s, t = _v => _v;
    let u = class extends k.Component {
        componentDidMount() {
            (0, p.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), (0, o.playSound)(i.default.bossBattle.getAmped, {
                volume: 0.45,
                onPlay: () => {
                    this.startGame();
                },
                onError: () => this.startGame()
            });
        }
        render() {
            return (0, g.jsx)(_x, {
                children: (0, g.jsxs)(_y, {
                    children: [
                        (0, g.jsx)(h.ConfettiContainer, {
                            children: (0, g.jsx)(_v(l), {
                                config: h.confettiConfig,
                                active: this.state.confettiActive
                            })
                        }),
                        (0, g.jsx)(_v(l), {
                            config: h.confettiConfig,
                            active: this.state.confettiActive
                        }),
                        this.state.content
                    ]
                })
            });
        }
        constructor(..._v) {
            super(..._v), (0, e.default)(this, 'state', {
                content: '',
                confettiActive: !1
            }), (0, e.default)(this, 'getStages', () => [{
                    content: '',
                    delay: 697
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'Are You Ready...'
                    }),
                    delay: 2470
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'To Battle...'
                    }),
                    delay: 2470
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'The Biggest...'
                    }),
                    delay: 1300
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'Baddest...'
                    }),
                    delay: 1100
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'Boss'
                    }),
                    delay: 1200
                },
                {
                    content: (0, g.jsx)('div', {
                        children: 'Ever?'
                    }),
                    delay: 1300
                },
                {
                    content: (0, g.jsxs)('div', {
                        children: [
                            (0, g.jsx)('div', {
                                style: {
                                    zoom: 1.6
                                },
                                children: this.getBossName()
                            }),
                            (0, g.jsx)('div', {
                                style: {
                                    zoom: 0.7,
                                    marginBottom: 32
                                },
                                children: 'vs.'
                            }),
                            'The Challengers'
                        ]
                    }),
                    delay: 5000
                }
            ]), (0, e.default)(this, 'setStage', _v => {
                const _v = this.getStages(),
                    w = _v[_v];
                if (!w)
                    return this.props.gameValues.currentRoute = n.GameStatus.gameplay, void(this.props.ui.showingBossPreScreen = !1);
                _v + 1 === _v.length && this.setState({
                    confettiActive: !0
                }), this.setState({
                    content: w.content
                }), setTimeout(() => this.setStage(_v + 1), w.delay);
            }), (0, e.default)(this, 'startGame', () => {
                this.setStage(0);
            }), (0, e.default)(this, 'getBossName', () => {
                let _v = 'The Boss';
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const w = this.props.players.teams.find(_v => 'The Boss' === _v.id);
                    w && w.players[0] && (_v = w.players[0]);
                }
                return _v;
            });
        }
    };
    u = (0, f.__decorate)([
        (0, j.inject)('players', 'gameValues', 'ui'),
        j.observer
    ], u);
    var _v = u;
    const w = (0, m.keyframes)(q || (q = t`
  from {
    transform: scale(0.7);
  }
  to {
    transform: scale(1);
  }
`)),
        _x = m.default.div(r || (r = t`
  background: #b53d00;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`)),
        _y = m.default.div(s || (s = t`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 65px;
  font-family: ${ 0 };
  text-align: center;
  animation: ${ 0 } 12s ease-in-out;
`), '\'Bowlby One SC\', cursive', w);
}), b.register('E0QD2', function(c, d) {
    _x(c.exports, 'default', function() {
        return _s;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('Yv86d'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('+gdru'),
        l = b('Axq+p'),
        m = b('6XgQB1'),
        n = b('PMl60');
    let o, p, q = _x => _x;
    let r = class extends j.Component {
        componentDidMount() {
            (0, n.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), h.default.engagingSuspense.unload(), h.default.engagingSuspense.load(), h.default.engagingSuspense.on('load', () => {
                this.startGame(), h.default.engagingSuspense.play();
            }), h.default.engagingSuspense.on('loaderror', this.startGame), h.default.engagingSuspense.on('playerror', this.startGame);
        }
        render() {
            return (0, g.jsx)(_t, {
                children: (0, g.jsx)(_u, {
                    children: this.state.content
                })
            });
        }
        constructor(..._x) {
            super(..._x), (0, e.default)(this, 'state', {
                content: ''
            }), (0, e.default)(this, 'getStages', () => [{
                    content: '',
                    delay: 1300
                },
                {
                    content: (0, g.jsx)('div', {
                        children: (0, g.jsx)(k.default, {
                            text: 'Protect your team!'
                        })
                    }),
                    delay: 2800
                },
                {
                    content: (0, g.jsx)('div', {
                        children: (0, g.jsx)(k.default, {
                            text: 'Don\'t run out of health!'
                        })
                    }),
                    delay: 2900
                },
                {
                    content: (0, g.jsx)('div', {
                        children: (0, g.jsx)(k.default, {
                            text: 'Purchase team upgrades in the shop!'
                        })
                    }),
                    delay: 2900
                },
                {
                    content: (0, g.jsx)('div', {
                        children: (0, g.jsx)(k.default, {
                            text: 'Upgrade your team\'s health!'
                        })
                    }),
                    delay: 2800
                },
                {
                    content: (0, g.jsx)('div', {
                        children: (0, g.jsx)(k.default, {
                            text: 'Sabotage the other team!'
                        })
                    }),
                    delay: 2800
                },
                {
                    content: (0, g.jsx)('div', {
                        children: (0, g.jsx)(k.default, {
                            text: 'Last team remaining wins!'
                        })
                    }),
                    delay: 2200
                },
                {
                    content: (0, g.jsxs)('div', {
                        style: {
                            zoom: 1.4
                        },
                        className: 'animated zoomInDown',
                        children: [
                            (0, g.jsx)('div', {
                                children: 'Humans'
                            }),
                            (0, g.jsx)('div', {
                                children: 'vs.'
                            }),
                            (0, g.jsx)('div', {
                                children: 'Zombies'
                            })
                        ]
                    }),
                    delay: 5000
                }
            ]), (0, e.default)(this, 'setStage', _x => {
                const s = this.getStages()[_x];
                if (!s)
                    return this.props.gameValues.currentRoute = m.GameStatus.gameplay, void(this.props.ui.showingHumansVsZombiesPreScreen = !1);
                this.setState({
                    content: s.content
                }), setTimeout(() => this.setStage(_x + 1), s.delay);
            }), (0, e.default)(this, 'startGame', () => {
                this.setStage(0);
            });
        }
    };
    r = (0, f.__decorate)([
        (0, i.inject)('players', 'gameValues', 'ui'),
        i.observer
    ], r);
    var _s = r;
    const _t = l.default.div(o || (o = q`
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
        _u = l.default.div(p || (p = q`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 50px;
  box-sizing: border-box;
  width: 100vw;
  font-size: 65px;
  font-family: ${ 0 };
  text-align: center;
`), '\'Bowlby One SC\', cursive');
}), b.register('PdU/j', function(c, d) {
    _x(c.exports, 'HEADER_HEIGHT', function() {
        return _r;
    }), _x(c.exports, 'default', function() {
        return _w;
    });
    var e = b('0hzx+'),
        f = b('gVBQO'),
        g = b('ulE4q'),
        h = b('3rMVL'),
        i = b('RMEzW'),
        j = b('rD3N6'),
        k = b('LEQ5w'),
        l = b('Axq+p'),
        m = b('Ijh8Y');
    let n, o, p, q = _x => _x;
    const _r = '83px',
        s = l.default.div(n || (n = q`
  height: ${ 0 };
  width: 100%;
  box-shadow: ${ 0 };
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
`), _r, j.default.basic),
        t = l.default.div(o || (o = q`
  ${ 0 };
  font-size: 38px;
`), i.default.black),
        u = l.default.div(p || (p = q`
  display: flex;
  align-items: center;
`));
    class v extends k.Component {
        render() {
            return (0, e.jsxs)(s, {
                children: [
                    (0, e.jsx)(t, {
                        children: !(0, h.inZombiesVsHumansMode)() && 'Teams'
                    }),
                    (0, e.jsxs)(u, {
                        children: [
                            this.props.reshuffle && (0, e.jsx)(g.default, {
                                type: 'primary',
                                icon: (0, e.jsx)(f.default, {}),
                                style: {
                                    fontFamily: i.default.fontFamilyName,
                                    marginRight: 10
                                },
                                onClick: this.props.reshuffle,
                                children: 'Reshuffle'
                            }),
                            (0, e.jsx)(m.default, {
                                onTeamScreen: !0
                            })
                        ]
                    })
                ]
            });
        }
    }
    var _w = v;
}), b.register('VE8AA', function(c, d) {
    _x(c.exports, 'default', function() {
        return _p;
    });
    var e = b('csYze'),
        f = b('0hzx+'),
        g = b('6CIVV'),
        h = b('2x11J'),
        i = b('LEQ5w'),
        j = b('Axq+p'),
        k = b('PdU/j'),
        l = b('7kMA0');
    let m;
    const n = j.default.div(m || (m = (_x => _x)`
  max-height: calc(100vh - ${ 0 });
  width: 100%;
  padding: 10px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`), k.HEADER_HEIGHT);
    let o = class extends i.Component {
        render() {
            return (0, f.jsx)(n, {
                children: this.props.players.teams && this.props.players.teams.length ? this.props.players.teams.map(_x => (0, f.jsx)(l.default, {
                    team: _x
                }, _x.id)) : (0, f.jsx)(g.default, {
                    style: {
                        marginTop: 10
                    },
                    size: 'large'
                })
            });
        }
    };
    o = (0, e.__decorate)([
        (0, h.inject)('players'),
        h.observer
    ], o);
    var _p = o;
}), b.register('7kMA0', function(c, d) {
    _x(c.exports, 'default', function() {
        return _x;
    });
    var e = b('0hzx+'),
        f = b('fmVdR'),
        g = b('+gdru'),
        h = b('3rMVL'),
        i = b('hEZVH'),
        j = b('RMEzW'),
        k = b('rD3N6'),
        l = b('LEQ5w'),
        m = b('Axq+p');
    let n, o, p, q, r = _x => _x;
    const s = m.default.div(n || (n = r`
  width: 324px;
  margin: 12px;
  background: ${ 0 };
  padding: 10px;
  border-radius: 4px;
  box-shadow: ${ 0 };
  color: ${ 0 };
`), i.default.White, k.default.basic, i.default.Black),
        t = m.default.div(o || (o = r`
  height: 36px;
  width: 36px;
  margin-right: 6px;
  border-radius: 5px;
  background-color: ${ 0 };

  display: flex;
  align-items: center;
  justify-content: center;
`), _x => _x.background),
        u = m.default.div(p || (p = r`
  ${ 0 };
  font-size: 23px;
  display: flex;
  align-items: center;
`), j.default.black),
        v = m.default.div(q || (q = r`
  ${ 0 };
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
`), j.default.bold);
    class w extends l.Component {
        render() {
            const {
                team: _x
            } = this.props;
            return (0, e.jsxs)(s, {
                children: [
                    (0, e.jsxs)(u, {
                        children: [
                            (0, e.jsx)(t, {
                                background: (0, h.getTeamColor)(_x.id),
                                children: _x.icon && (0, e.jsx)('i', {
                                    className: _x.icon,
                                    style: {
                                        color: _x.color.text
                                    }
                                })
                            }),
                            (0, e.jsx)(g.default, {
                                text: _x.id
                            })
                        ]
                    }),
                    (0, e.jsx)(f.default, {
                        style: {
                            marginTop: 7,
                            marginBottom: 7
                        }
                    }),
                    _x.players.map(c => (0, e.jsx)(v, {
                        children: c
                    }, _x.balance + c))
                ]
            });
        }
    }
    var _x = w;
}), b.register('s4Jsn', function(c, d) {
    _w(c.exports, 'default', function() {
        return _w;
    });
    var e = b('1bFPu'),
        f = b('csYze'),
        g = b('0hzx+'),
        h = b('f6oyN'),
        i = b('ulE4q'),
        j = b('fmVdR'),
        k = b('sgToH'),
        l = b('YRlpt'),
        m = b('6CIVV'),
        n = b('2x11J'),
        o = b('LEQ5w'),
        p = b('eMvHi'),
        q = b('hEZVH'),
        r = b('RMEzW'),
        s = b('6XgQB1'),
        t = b('gs4MT');
    const u = 'https://status.gimkit.com';
    let v = class extends o.Component {
        render() {
            const {
                engine: _w,
                gameValues: x
            } = this.props, y = ((_w, x) => !((!x.roomIntentErrorMessage || x.currentRoute !== s.GameStatus.setup) && !_w.errorFindingServerForGame && (x.currentRoute === s.GameStatus.results || !_w.connectionError && (x.currentRoute === s.GameStatus.setup || !_w.game || !_w.errorJoiningRoom && _w.joinedRoom))))(_w, x);
            return x.currentRoute === s.GameStatus.setup ? (0, g.jsx)(l.default, {
                open: y,
                closable: !1,
                footer: null,
                width: 700,
                centered: !0,
                bodyStyle: {
                    padding: 40
                },
                children: this.getContent()
            }) : (0, g.jsx)(k.default, {
                open: y,
                placement: 'bottom',
                closable: !1,
                height: 'auto',
                children: this.getContent()
            });
        }
        constructor(..._w) {
            super(..._w), (0, e.default)(this, 'getLoading', () => {
                const {
                    engine: _w,
                    gameValues: x
                } = this.props;
                return (!x.roomIntentErrorMessage || x.currentRoute !== s.GameStatus.setup) && (!_w.errorJoiningRoom && (!_w.errorFindingServerForGame && !(!_w.game && _w.connectionError)));
            }), (0, e.default)(this, 'getContent', () => {
                const w = this.getLoading();
                return (0, g.jsxs)('div', {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        fontFamily: r.default.fontFamilyName,
                        color: q.default.Black,
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        w && (0, g.jsx)(m.default, {
                            size: 'large',
                            style: {
                                marginBottom: 10
                            }
                        }),
                        !w && (0, g.jsxs)(g.Fragment, {
                            children: [
                                (0, g.jsx)(h.default, {
                                    style: {
                                        color: 'red',
                                        fontSize: 51
                                    }
                                }),
                                (0, g.jsx)(j.default, {})
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
                    engine: w,
                    gameValues: x
                } = this.props;
                if (x.roomIntentErrorMessage && x.currentRoute === s.GameStatus.setup)
                    return (0, g.jsxs)('div', {
                        className: 'flex-center flex-column',
                        children: [
                            (0, g.jsx)('div', {
                                children: x.roomIntentErrorMessage
                            }),
                            (0, g.jsx)(i.default, {
                                size: 'large',
                                type: 'primary',
                                style: {
                                    height: 50,
                                    width: 300,
                                    marginTop: 30
                                },
                                href: t.DASHBOARD,
                                children: (0, g.jsx)('div', {
                                    className: 'maxAll flex-center',
                                    children: 'Back To Dashboard'
                                })
                            })
                        ]
                    });
                if (w.errorFindingServerForGame)
                    return (0, g.jsxs)('span', {
                        children: [
                            'We couldn\'t find any available game servers. Gimkit might be down. Check ',
                            (0, g.jsx)('a', {
                                href: u,
                                children: u
                            }),
                            ' for more info.'
                        ]
                    });
                if (!w.game && w.connectionError)
                    return (0, g.jsxs)('span', {
                        children: [
                            'Your network is blocking connection to our game servers. Get more details on how to fix this ',
                            (0, g.jsx)('a', {
                                href: 'https://www.gimkit.com/connection',
                                children: 'here.'
                            })
                        ]
                    });
                if (w.errorJoiningRoom) {
                    const y = (0, p.default)(w.roomError);
                    return (0, g.jsxs)('span', {
                        children: [
                            (0, g.jsx)('span', {
                                style: {
                                    fontSize: 23
                                },
                                children: y.title
                            }),
                            (0, g.jsx)('br', {}),
                            (0, g.jsx)('span', {
                                style: {
                                    fontWeight: 'normal',
                                    fontSize: 18
                                },
                                children: y.description
                            })
                        ]
                    });
                }
                return w.attemptingToConnect ? (0, g.jsxs)('span', {
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
                }) : w.attemptingToJoinRoom ? (0, g.jsxs)('span', {
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
    v = (0, f.__decorate)([
        (0, n.inject)('engine', 'gameValues'),
        n.observer
    ], v);
    var _w = v;
}), b.register('f6oyN', function(c, d) {
    _j(c.exports, 'default', function() {
        return _j;
    });
    var e = b('fbkyQ'),
        f = b('LEQ5w'),
        g = b('R6BYy'),
        h = b('sLVIW'),
        i = function(_j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, _j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CloseCircleOutlined';
    var _j = f.forwardRef(i);
}), b.register('R6BYy', function(c, d) {
    _m(c.exports, 'default', function() {
        return b;
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
}), b.register('eMvHi', function(c, d) {
    _m(c.exports, 'default', function() {
        return b;
    });
    var e = _m => {
        let f = 'Error joining game',
            g = '';
        return _m && _m.includes && _m.includes('No data found') ? (f = 'All done', g = 'You were disconnected for too long, so we closed down the game you were hosting.') : g = `Error message - ${ JSON.stringify(_m) }`, {
            title: f,
            description: g
        };
    };
}), b.register('KJQEo', function(c, d) {
    _m(c.exports, 'default', function() {
        return _l;
    });
    var e = b('0hzx+'),
        f = b('ulE4q'),
        g = b('gs4MT'),
        h = b('Pe45g'),
        i = b('2x11J'),
        j = b('LEQ5w'),
        k = b('sjRDa');
    var _l = (0, i.observer)(() => {
        const {
            ui: _m
        } = j.useContext(k.default);
        return _m.showingClassTip ? (0, e.jsx)(h.default, {
            imageUrl: '/client/img/tips/class.jpeg',
            title: 'Keep games safe with classes',
            description: (0, e.jsxs)(e.Fragment, {
                children: [
                    'When you set up classes, nobody outside your class will be able to join live games. Plus, classes make it impossible for students to join with anything but their real name.',
                    (0, e.jsx)(f.default, {
                        href: g.NEW_CLASS,
                        target: '_blank',
                        block: !0,
                        type: 'primary',
                        style: {
                            marginTop: 20
                        },
                        children: 'Create a class (opens in a new tab)'
                    })
                ]
            }),
            autoCloseDuration: 25
        }) : null;
    });
}), b.register('Pe45g', function(c, d) {
    _i(c.exports, 'default', function() {
        return _v;
    });
    var e = b('0hzx+'),
        f = b('sHRDd'),
        g = b('b5kvC'),
        h = b('LEQ5w'),
        i = b('Z/8fU'),
        j = b('Axq+p'),
        k = b('TwXYL');
    let l, m, n, o, p, q, r, s, t = _i => _i;
    const u = _i => {
        const [v, w] = h.useState(!0), [x, y] = h.useState(!1);
        h.useEffect(() => {
            y(!0);
        }, []), h.useEffect(() => {
            const z = setTimeout(() => {
                g();
            }, 1000 * _i.autoCloseDuration);
            return () => clearTimeout(z);
        }, []);
        const z = () => y(!1);
        return v ? (0, e.jsxs)(_w, {
            onAnimationComplete: () => {
                x || w(!1);
            },
            initial: {
                bottom: 0,
                opacity: 0
            },
            animate: {
                bottom: x ? 20 : 0,
                opacity: x ? 1 : 0
            },
            transition: {
                type: 'spring',
                stiffness: 120
            },
            children: [
                (0, e.jsxs)(_x, {
                    children: [
                        (0, e.jsx)(_A, {
                            src: _i.imageUrl
                        }),
                        (0, e.jsx)(_y, {
                            onClick: z,
                            children: (0, e.jsx)(_z, {})
                        })
                    ]
                }),
                (0, e.jsxs)(_B, {
                    children: [
                        (0, e.jsx)(_C, {
                            children: _i.title
                        }),
                        (0, e.jsx)(_D, {
                            children: _i.description
                        })
                    ]
                })
            ]
        }) : null;
    };
    var _v = _i => (0, i.createPortal)((0, e.jsx)(u, {
        ..._i
    }), document.body);
    const _w = (0, j.default)(k.motion.div).attrs({
            className: 'medium-shadow'
        })(l || (l = t`
  position: absolute;
  right: 20px;
  width: 350px;
  background: ${ 0 };
  border-radius: 6px;
  color: ${ 0 };
  overflow: hidden;
  font-family: ${ 0 };
  z-index: 99999999;
`), f.default.White, f.default.Black, g.Fonts.SFPro),
        _x = j.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = t`
  position: relative;
`)),
        _y = j.default.div.attrs({
            className: 'flex hc vc'
        })(n || (n = t`
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
        _z = j.default.i.attrs({
            className: 'fal fa-times'
        })(o || (o = t``)),
        _A = j.default.img.attrs({
            className: 'maxWidth'
        })(p || (p = t``)),
        _B = j.default.div(q || (q = t`
  padding: 20px;
`)),
        _C = j.default.div(r || (r = t`
  font-size: 22px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        _D = j.default.div(s || (s = t`
  font-size: 15px;
  margin-top: 7px;
`));
}), b.register('kRwUk25', function(c, d) {
    _i(c.exports, 'default', function() {
        return _h;
    });
    var e = b('TTc70'),
        f = b('LEQ5w'),
        g = b('1P5ls');

    function _h(_i, j, k) {
        return function(l) {
            const {
                prefixCls: m,
                style: n
            } = l, o = f.useRef(null), [p, q] = f.useState(0), [r, s] = f.useState(0), [t, u] = (0, e.default)(!1, {
                value: l.open
            }), {
                getPrefixCls: v
            } = f.useContext(g.ConfigContext), w = v(j || 'select', m);
            return f.useEffect(() => {
                if (u(!0), 'undefined' != typeof ResizeObserver) {
                    const x = new ResizeObserver(x => {
                            const y = x[0].target;
                            q(y.offsetHeight + 8), s(y.offsetWidth);
                        }),
                        y = setInterval(() => {
                            var z;
                            const A = k ? `.${ k(w) }` : `.${ w }-dropdown`,
                                B = null === (z = o.current) || void 0 === z ? void 0 : z.querySelector(A);
                            B && (clearInterval(y), x.observe(B));
                        }, 10);
                    return () => {
                        clearInterval(y), x.disconnect();
                    };
                }
            }, []), f.createElement(g.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, f.createElement('div', {
                ref: o,
                style: {
                    paddingBottom: p,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: r
                }
            }, f.createElement(_i, Object.assign({}, l, {
                style: Object.assign(Object.assign({}, n), {
                    margin: 0
                }),
                open: t,
                visible: t,
                getPopupContainer: () => o.current
            }))));
        };
    }
}), b.register('N9LXh20', function(c, d) {
    _e(c.exports, 'initMoveMotion', function() {
        return _n;
    });
    var e = b('wC0DT'),
        f = b('4vKB9');
    const g = new(0, e.Keyframes)('antMoveDownIn', {
            '0%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        h = new(0, e.Keyframes)('antMoveDownOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        i = new(0, e.Keyframes)('antMoveLeftIn', {
            '0%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        j = new(0, e.Keyframes)('antMoveLeftOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        k = new(0, e.Keyframes)('antMoveRightIn', {
            '0%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        l = new(0, e.Keyframes)('antMoveRightOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        m = {
            'move-up': {
                inKeyframes: new(0, e.Keyframes)('antMoveUpIn', {
                    '0%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, e.Keyframes)('antMoveUpOut', {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    },
                    '100%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    }
                })
            },
            'move-down': {
                inKeyframes: g,
                outKeyframes: h
            },
            'move-left': {
                inKeyframes: i,
                outKeyframes: j
            },
            'move-right': {
                inKeyframes: k,
                outKeyframes: l
            }
        },
        _n = (_e, c) => {
            const {
                antCls: o
            } = _e, p = `${ o }-${ c }`, {
                inKeyframes: q,
                outKeyframes: r
            } = m[c];
            return [
                (0, f.initMotion)(p, q, r, _e.motionDurationMid),
                {
                    [`\n        ${ p }-enter,\n        ${ p }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _e.motionEaseOutCirc
                    },
                    [`${ p }-leave`]: {
                        animationTimingFunction: _e.motionEaseInOutCirc
                    }
                }
            ];
        };
}), b.register('cvto726', function(c, d) {
    _e(c.exports, 'SpaceContext', function() {
        return _n;
    }, function(_e) {
        return _n = _e;
    }), _e(c.exports, 'default', function() {
        return _v;
    }, function(_e) {
        return _v = _e;
    });
    var e = b('JrtKP'),
        f = b('Ug51y0'),
        g = b('LEQ5w'),
        h = b('1P5ls'),
        i = b('4gObz26'),
        j = b('VqIM2'),
        k = b('P8P+826'),
        l = b('/xlT+'),
        m = function(n, o) {
            var p = {};
            for (var q in n)
                Object.prototype.hasOwnProperty.call(n, q) && o.indexOf(q) < 0 && (p[q] = n[q]);
            if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (q = Object.getOwnPropertySymbols(n); r < q.length; r++)
                    o.indexOf(q[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, q[r]) && (p[q[r]] = n[q[r]]);
            }
            return p;
        };
    const _n = g.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        o = {
            small: 8,
            middle: 16,
            large: 24
        };
    const p = _H => {
        const {
            getPrefixCls: q,
            space: r,
            direction: s
        } = g.useContext(h.ConfigContext), {
            size: t = (null == r ? void 0 : r.size) || 'small',
            align: u,
            className: _v,
            rootClassName: w,
            children: x,
            direction: y = 'horizontal',
            prefixCls: z,
            split: A,
            style: B,
            wrap: C = !1
        } = _H, D = m(_H, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap'
        ]), E = (0, i.default)(), [F, G] = g.useMemo(() => (Array.isArray(t) ? t : [
            t,
            t
        ]).map(_H => function(_H) {
            return 'string' == typeof _H ? o[_H] : _H || 0;
        }(_h)), [t]), H = (0, f.default)(x, {
            keepEmpty: !0
        }), I = void 0 === u && 'horizontal' === y ? 'center' : u, J = q('space', z), [K, L] = (0, l.default)(J), M = _c(e)(J, L, `${ J }-${ y }`, {
            [`${ J }-rtl`]: 'rtl' === s,
            [`${ J }-align-${ I }`]: I
        }, _v, w), N = `${ J }-item`, O = 'rtl' === s ? 'marginLeft' : 'marginRight';
        let P = 0;
        const Q = H.map((_h, _c) => {
                null != _h && (P = _c);
                const R = _h && _h.key || `${ N }-${ _c }`;
                return g.createElement(k.default, {
                    className: N,
                    key: R,
                    direction: y,
                    index: _c,
                    marginDirection: O,
                    split: A,
                    wrap: C
                }, _h);
            }),
            R = g.useMemo(() => ({
                horizontalSize: F,
                verticalSize: G,
                latestIndex: P,
                supportFlexGap: E
            }), [
                F,
                G,
                P,
                E
            ]);
        if (0 === H.length)
            return null;
        const S = {};
        return C && (S.flexWrap = 'wrap', E || (S.marginBottom = -G)), E && (S.columnGap = F, S.rowGap = G), K(g.createElement('div', Object.assign({
            className: M,
            style: Object.assign(Object.assign({}, S), B)
        }, D), g.createElement(_n.Provider, {
            value: R
        }, Q)));
    };
    p.Compact = j.default;
    var q = p;
}), b.register('4gObz26', function(_c, d) {
    _h(_c.exports, 'default', function() {
        return _g;
    });
    var e = b('LEQ5w'),
        f = b('XPzGa'),
        _g = () => {
            const [_h, i] = e.useState(!1);
            return e.useEffect(() => {
                i((0, f.detectFlexGapSupported)());
            }, []), _h;
        };
}), b.register('P8P+826', function(c, d) {
    _h(c.exports, 'default', function() {
        return _g;
    });
    var e = b('LEQ5w'),
        f = b('cvto726');

    function _g(_h) {
        let {
            className: i,
            direction: j,
            index: k,
            marginDirection: l,
            children: m,
            split: n,
            wrap: o
        } = _h;
        const {
            horizontalSize: p,
            verticalSize: q,
            latestIndex: r,
            supportFlexGap: s
        } = e.useContext(f.SpaceContext);
        let t = {};
        return s || ('vertical' === j ? k < r && (t = {
            marginBottom: p / (n ? 2 : 1)
        }) : t = Object.assign(Object.assign({}, k < r && {
            [l]: p / (n ? 2 : 1)
        }), o && {
            paddingBottom: q
        })), null == m ? null : e.createElement(e.Fragment, null, e.createElement('div', {
            className: i,
            style: t
        }, m), k < r && n && e.createElement('span', {
            className: `${ i }-split`,
            style: t
        }, n));
    }
}), b.register('x8CoD', function(c, d) {
    _c(c.exports, 'getCloudinaryUrl', function() {
        return b;
    });
    const e = _c => {
            const f = _f(_c);
            return f ? _c.includes('/video/upload') ? `https://${ _g }/video/upload/${ f }` : `https://${ _g }/image/upload/f_auto,fl_lossy,q_auto/${ f }` : _c;
        },
        _f = _c => {
            if (!_j.some(c => _c.includes(c)))
                return null;
            if (_c.includes(_h) && !_c.includes(`/${ _i }/`))
                return null;
            const g = _c.split('/');
            if (!g || !g.length || g.length < 2)
                return null;
            const h = g[g.length - 2],
                i = g[g.length - 1];
            return h && i && h.startsWith('v') ? `${ h }/${ i }` : null;
        },
        _g = 'media.gimkit.com',
        _h = 'res.cloudinary.com',
        _i = 'gimkit-production',
        _j = [
            _g,
            _h
        ];
}), b.register('JtnSG', function(c, d) {
    _c(c.exports, 'default', function() {
        return _h;
    });
    var e = b('0hzx+'),
        f = b('LEQ5w');
    const g = f.lazy(() => b('am6fB'));
    var _h = _c => (0, e.jsx)(f.Suspense, {
        fallback: _c.fallback || null,
        children: (0, e.jsx)(g, {
            latex: _c.latex
        })
    });
}), b.register('am6fB', function(_c, d) {
    _c.exports = Promise.all([
        import('./' + b('HmN9A').resolve('emcKB')),
        import('./' + b('HmN9A').resolve('5OCdz'))
    ]).then(() => b('vZVkZ'));
}), b.register('CO72t', function(c, d) {
    c.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
}), b.register('XE5Pm', function(c, d) {});