function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('.....', function(e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), a(e.exports, 'default', function() {
        return _j;
    });
    var h = d('.....');
    d('.....');
    var i = d('.....');
    var _j = () => (0, h.jsx)(h.Fragment, {
        children: (0, h.jsx)(i.default, {})
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _g;
    });
    var _g = d('.....').default;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    var _m = () => (0, g.jsx)(l.default.Provider, {
        value: i.default,
        children: (0, g.jsxs)(h.Provider, {
            ...i.default,
            children: [
                (0, g.jsx)(k.Title, {
                    title: 'Host',
                    description: 'Host a game of Gimkit, an online strategic game show for the classroom.'
                }),
                (0, g.jsx)(j.default, {})
            ]
        })
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....');
    var _v = {
        kit: new(0, l.default)(),
        players: new(0, m.default)(),
        gameValues: new(0, k.default)(),
        gameOptions: new(0, j.default)(),
        engine: new(0, g.default)(),
        stats: new(0, o.default)(),
        translations: new(0, p.default)(),
        powerups: new(0, n.default)(),
        ui: new(0, q.default)(),
        entities: new(0, h.default)(),
        events: new(0, i.default)(),
        imposter: new(0, r.default)(),
        draw: new(0, s.default)(),
        pardy: new(0, t.default)(),
        metadata: new(0, u.default)()
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'game', void 0), (0, g.__decorate)([h.observable], i.prototype, 'client', void 0), (0, g.__decorate)([h.observable], i.prototype, 'findingServerForGame', void 0), (0, g.__decorate)([h.observable], i.prototype, 'errorFindingServerForGame', void 0), (0, g.__decorate)([h.observable], i.prototype, 'attemptingToConnect', void 0), (0, g.__decorate)([h.observable], i.prototype, 'hasConnected', void 0), (0, g.__decorate)([h.observable], i.prototype, 'connected', void 0), (0, g.__decorate)([h.observable], i.prototype, 'connectionError', void 0), (0, g.__decorate)([h.observable], i.prototype, 'joinedRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'attemptingToJoinRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'errorJoiningRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'roomError', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.defendingHomebase = h.observable.array(), this.lava = null, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'defendingHomebase', void 0), (0, g.__decorate)([h.observable], i.prototype, 'lava', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = class {};
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
            }, this.specialGameType = h.observable.array(), this.currency = '$', this.language = 'en', this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.joinInLate = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.music = !0, this.modeOptions = {}, this.setGameOptionsFromStorage = (k, l) => {
                Object.keys(k).forEach(m => {
                    null !== this[m] && ('group' !== m && 'specialGameType' !== m && 'modeOptions' !== m || l) && (this[m] = k[m]);
                });
            }, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], j.prototype, 'type', void 0), (0, g.__decorate)([h.observable], j.prototype, 'goal', void 0), (0, g.__decorate)([h.observable], j.prototype, 'specialGameType', void 0), (0, g.__decorate)([h.observable], j.prototype, 'currency', void 0), (0, g.__decorate)([h.observable], j.prototype, 'language', void 0), (0, g.__decorate)([h.observable], j.prototype, 'startingCash', void 0), (0, g.__decorate)([h.observable], j.prototype, 'handicap', void 0), (0, g.__decorate)([h.observable], j.prototype, 'clapping', void 0), (0, g.__decorate)([h.observable], j.prototype, 'joinInLate', void 0), (0, g.__decorate)([h.observable], j.prototype, 'powerups', void 0), (0, g.__decorate)([h.observable], j.prototype, 'themes', void 0), (0, g.__decorate)([h.observable], j.prototype, 'cleanPowerupsOnly', void 0), (0, g.__decorate)([h.observable], j.prototype, 'allowGoogleTranslate', void 0), (0, g.__decorate)([h.observable], j.prototype, 'music', void 0), (0, g.__decorate)([h.observable], j.prototype, 'modeOptions', void 0), (0, g.__decorate)([h.action.bound], j.prototype, 'setGameOptionsFromStorage', void 0), (0, g.__decorate)([h.computed], j.prototype, 'formattedGameOptions', null);
    var _k = j;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    class k {
        constructor() {
            (0, g.default)(this, 'availableThemes', i.observable.array()), this.currentRoute = j.GameStatus.setup, this.gameCode = '', this.clapCount = 0, this.reportId = '', this.activityItems = i.observable.array(), this.thanosValues = null, this.bossId = null, this.showBossBattleModal = !1, this.gameEndDate = 0, this.defendingHomebaseResults = null, this.roomIntentErrorMessage = '', (0, i.makeObservable)(this);
        }
    }
    (0, h.__decorate)([i.observable], k.prototype, 'currentRoute', void 0), (0, h.__decorate)([i.observable], k.prototype, 'gameCode', void 0), (0, h.__decorate)([i.observable], k.prototype, 'clapCount', void 0), (0, h.__decorate)([i.observable], k.prototype, 'reportId', void 0), (0, h.__decorate)([i.observable], k.prototype, 'activityItems', void 0), (0, h.__decorate)([i.observable], k.prototype, 'thanosValues', void 0), (0, h.__decorate)([i.observable], k.prototype, 'bossId', void 0), (0, h.__decorate)([i.observable], k.prototype, 'showBossBattleModal', void 0), (0, h.__decorate)([i.observable], k.prototype, 'gameEndDate', void 0), (0, h.__decorate)([i.observable], k.prototype, 'defendingHomebaseResults', void 0), (0, h.__decorate)([i.observable], k.prototype, 'roomIntentErrorMessage', void 0);
    var _l = k;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');
    var _h = class {
        constructor() {
            (0, g.default)(this, 'questions', []);
        }
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....');
    const i = (j, k) => j + k.balance,
        j = (k, l) => k + l.stones;
    class k {
        get filteredPlayers() {
            return this.players.filter(l => 'Player [Still Entering Name]' !== l.name);
        }
        get totalStones() {
            return this.players.reduce(j, 0);
        }
        get totalBalance() {
            return this.teams.length ? this.teams.reduce(i, 0) : this.players.reduce(i, 0);
        }
        constructor() {
            this.players = h.observable.array([]), this.teams = h.observable.array(), this.finalResults = h.observable.array(), (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], k.prototype, 'players', void 0), (0, g.__decorate)([h.observable], k.prototype, 'teams', void 0), (0, g.__decorate)([h.observable], k.prototype, 'finalResults', void 0), (0, g.__decorate)([h.computed], k.prototype, 'filteredPlayers', null), (0, g.__decorate)([h.computed], k.prototype, 'totalStones', null), (0, g.__decorate)([h.computed], k.prototype, 'totalBalance', null);
    var _l = k;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.specialSongIsPlaying = !1, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'specialSongIsPlaying', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.playerStats = h.observable.array(), (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'playerStats', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    class j {
        constructor() {
            this.backgroundColor = i.default.BackgroundPurple, this.showingBossPreScreen = !1, this.showingLavaPreScreen = !1, this.showingHumansVsZombiesPreScreen = !1, this.snowing = !1, this.showingClassTip = !1, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], j.prototype, 'backgroundColor', void 0), (0, g.__decorate)([h.observable], j.prototype, 'showingBossPreScreen', void 0), (0, g.__decorate)([h.observable], j.prototype, 'showingLavaPreScreen', void 0), (0, g.__decorate)([h.observable], j.prototype, 'showingHumansVsZombiesPreScreen', void 0), (0, g.__decorate)([h.observable], j.prototype, 'snowing', void 0), (0, g.__decorate)([h.observable], j.prototype, 'showingClassTip', void 0);
    var _k = j;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
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
}), d.register('.....', function(e, f) {
    a(e.exports, 'PersonRole', function() {
        return _i;
    }), a(e.exports, 'ImposterStatus', function() {
        return _k;
    }), a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....');
    let _i;
    var j;
    let _k;
    var l;
    (j = _i || (_i = {})).detective = 'detective', j.imposter = 'imposter', (l = _k || (_k = {})).intro = 'intro', l.questions = 'questions', l.discussion = 'discussion', l.voting = 'voting', l.votingResult = 'votingResult';
    class m {
        constructor() {
            this.status = _k.intro, this.meetingsLeft = 5, this.investigationsLeft = 0, this.impostersLeft = 0, this.votes = 0, this.meetingResults = null, this.people = h.observable.array(), (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], m.prototype, 'status', void 0), (0, g.__decorate)([h.observable], m.prototype, 'meetingsLeft', void 0), (0, g.__decorate)([h.observable], m.prototype, 'investigationsLeft', void 0), (0, g.__decorate)([h.observable], m.prototype, 'impostersLeft', void 0), (0, g.__decorate)([h.observable], m.prototype, 'votes', void 0), (0, g.__decorate)([h.observable], m.prototype, 'meetingResults', void 0), (0, g.__decorate)([h.observable], m.prototype, 'people', void 0);
    var _n = m;
}), d.register('.....', function(e, f) {
    a(e.exports, 'DrawStatus', function() {
        return _i;
    }), a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....');
    let _i;
    var j;
    (j = _i || (_i = {})).pickDrawer = 'pickDrawer', j.termSelection = 'termSelection', j.drawing = 'drawing', j.results = 'results';
    class k {
        constructor() {
            this.status = _i.pickDrawer, this.round = {
                term: '',
                secondsLeft: 999,
                drawingBase64: '',
                revealText: '',
                drawer: {
                    id: '',
                    name: ''
                }
            }, this.latestLine = null, this.latestFeedItem = null, this.personCount = null, this.everybodyGotLastRoundCorrect = !1, this.showingFeed = !0, this.pointAdditions = h.observable.array(), this.drawingHistory = h.observable.array(), this.drawingsModalOpen = !1, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], k.prototype, 'status', void 0), (0, g.__decorate)([h.observable], k.prototype, 'round', void 0), (0, g.__decorate)([h.observable], k.prototype, 'latestLine', void 0), (0, g.__decorate)([h.observable], k.prototype, 'latestFeedItem', void 0), (0, g.__decorate)([h.observable], k.prototype, 'personCount', void 0), (0, g.__decorate)([h.observable], k.prototype, 'everybodyGotLastRoundCorrect', void 0), (0, g.__decorate)([h.observable], k.prototype, 'showingFeed', void 0), (0, g.__decorate)([h.observable], k.prototype, 'pointAdditions', void 0), (0, g.__decorate)([h.observable], k.prototype, 'drawingHistory', void 0), (0, g.__decorate)([h.observable], k.prototype, 'drawingsModalOpen', void 0);
    var _l = k;
}), d.register('.....', function(e, f) {
    a(e.exports, 'PardyScreen', function() {
        return _i;
    }), a(e.exports, 'PardyQuestionScreen', function() {
        return _k;
    }), a(e.exports, 'PardyQuestionStatus', function() {
        return _m;
    }), a(e.exports, 'default', function() {
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
            this.screen = _i.home, this.questionScreen = _k.preview, this.questionStatus = _m.preview, this.currentRound = null, this.disabledSections = h.observable.array(), this.board = null, this.powers = h.observable.array(), this.playerCount = 0, this.betsPlaced = 0, this.playersAnswered = 0, this.playersAnsweredCorrectly = 0, this.nameOfFirstPlayerToAnswerCorrectly = '', (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], o.prototype, 'screen', void 0), (0, g.__decorate)([h.observable], o.prototype, 'questionScreen', void 0), (0, g.__decorate)([h.observable], o.prototype, 'questionStatus', void 0), (0, g.__decorate)([h.observable], o.prototype, 'currentRound', void 0), (0, g.__decorate)([h.observable], o.prototype, 'disabledSections', void 0), (0, g.__decorate)([h.observable], o.prototype, 'board', void 0), (0, g.__decorate)([h.observable], o.prototype, 'powers', void 0), (0, g.__decorate)([h.observable], o.prototype, 'finaleQuestionId', void 0), (0, g.__decorate)([h.observable], o.prototype, 'playerCount', void 0), (0, g.__decorate)([h.observable], o.prototype, 'betsPlaced', void 0), (0, g.__decorate)([h.observable], o.prototype, 'playersAnswered', void 0), (0, g.__decorate)([h.observable], o.prototype, 'playersAnsweredCorrectly', void 0), (0, g.__decorate)([h.observable], o.prototype, 'nameOfFirstPlayerToAnswerCorrectly', void 0);
    var _p = o;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....');
    class i {
        constructor() {
            this.hasReceivedHostStaticState = !1, this.currentGameIsUsingGroups = !1, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'hasReceivedHostStaticState', void 0), (0, g.__decorate)([h.observable], i.prototype, 'currentGameIsUsingGroups', void 0);
    var _j = i;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    const p = (0, i.observer)(() => {
            const {
                ui: {
                    backgroundColor: q
                },
                gameValues: {
                    currentRoute: r
                }
            } = j.useContext(m.default), s = r === n.GameStatus.setup || r === n.GameStatus.join;
            return (0, g.jsx)(_q, {
                backgroundColor: q,
                instantAnimateBackground: s,
                children: (0, g.jsx)(l.default, {})
            });
        }),
        _q = k.default.div(o || (o = (r => r)`
  min-height: 100vh;
  width: 100%;
  color: ${ 0 };
  background: ${ 0 };
  transition: background ${ 0 }s;
  display: flex;
  flex-direction: column;
`), h.default.White, r => r.backgroundColor, r => r.instantAnimateBackground ? 0 : 0.5);
    var _r = p;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    var _s = () => (0, g.jsxs)(g.Fragment, {
        children: [
            (0, g.jsx)(i.default, {
                route: h.GameStatus.gameplay,
                component: k.default
            }),
            (0, g.jsx)(i.default, {
                route: h.GameStatus.join,
                component: l.default
            }),
            (0, g.jsx)(i.default, {
                route: h.GameStatus.results,
                component: n.default
            }),
            (0, g.jsx)(i.default, {
                route: h.GameStatus.setup,
                component: o.default
            }),
            (0, g.jsx)(i.default, {
                route: h.GameStatus.teams,
                component: p.default
            }),
            (0, g.jsx)(m.default, {}),
            (0, g.jsx)(j.default, {}),
            (0, g.jsx)(r.default, {}),
            (0, g.jsx)(q.default, {})
        ]
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    let k = class extends j.Component {
        render() {
            const {
                route: l
            } = this.props;
            if (this.props.gameValues.currentRoute !== l)
                return null;
            const m = this.props.component;
            return (0, h.jsx)(m, {});
        }
    };
    k = (0, g.__decorate)([
        (0, i.inject)('gameValues'),
        i.observer
    ], k);
    var _l = k;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
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
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                hasShown: !1
            });
        }
    }
    var _l = k;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
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
    const x = o.default.div(w || (w = (y => y)`
  height: 100vh;
  width: 100%;
  font-family: ${ 0 };
  display: flex;
  flex-direction: column;
`), k.default.fontFamilyName);
    let y = class extends n.Component {
        componentDidMount() {
            if (this.props.blockComponentDidMountScript)
                return;
            (0, i.addActivityItem)({
                name: 'The Game',
                action: 'has started!',
                customTextColor: j.default.LightSuccessGreen
            });
            const z = (0, i.getMusicTrack)();
            this.props.gameOptions.music && (z.playing() || (0, i.inDrawMode)() || (0, i.inPardyMode)() || z.play()), (0, l.reaction)(() => this.props.gameOptions.music, A => {
                A ? z.playing() || (0, i.inDrawMode)() || (0, i.inPardyMode)() || z.play() : (0, i.inPardyMode)() || z.pause();
            });
        }
        render() {
            return (0, i.inZombiesVsHumansMode)() ? (0, h.jsx)(r.default, {}) : (0, i.inLavaMode)() ? (0, h.jsx)(s.default, {}) : (0, i.inImposterMode)() ? (0, h.jsx)(t.default, {}) : (0, i.inDrawMode)() ? (0, h.jsx)(u.default, {}) : (0, i.inPardyMode)() ? (0, h.jsx)(v.default, {}) : (0, h.jsxs)(x, {
                children: [
                    (0, h.jsx)(p.default, {}),
                    (0, h.jsx)(q.default, {})
                ]
            });
        }
    };
    y = (0, g.__decorate)([
        (0, m.inject)('gameOptions'),
        m.observer
    ], y);
    var _z = y;
}), d.register('.....', function(e, f) {
    a(e.exports, 'plural', function() {
        return _s;
    }), a(e.exports, 'numberWithCommas', function() {
        return _t;
    }), a(e.exports, 'getMoney', function() {
        return _u;
    }), a(e.exports, 'inDrawMode', function() {
        return _O;
    }), a(e.exports, 'banPlayer', function() {
        return _v;
    }), a(e.exports, 'addActivityItem', function() {
        return _w;
    }), a(e.exports, 'inTeamMode', function() {
        return _x;
    }), a(e.exports, 'getTeamColor', function() {
        return _y;
    }), a(e.exports, 'endGame', function() {
        return _z;
    }), a(e.exports, 'inThanosMode', function() {
        return _I;
    }), a(e.exports, 'inZombiesVsHumansMode', function() {
        return _L;
    }), a(e.exports, 'getMusicTrack', function() {
        return _A;
    }), a(e.exports, 'inImposterMode', function() {
        return _N;
    }), a(e.exports, 'inLavaMode', function() {
        return _M;
    }), a(e.exports, 'startSpecialSong', function() {
        return _B;
    }), a(e.exports, 'getAssetPath', function() {
        return _R;
    }), a(e.exports, 'getQueryVariable', function() {
        return _C;
    }), a(e.exports, 'playSound', function() {
        return _D;
    }), a(e.exports, 'stopSound', function() {
        return _E;
    }), a(e.exports, 'send', function() {
        return _F;
    }), a(e.exports, 'HideIfTabbedAway', function() {
        return _G;
    }), a(e.exports, 'musicIsOn', function() {
        return _H;
    }), a(e.exports, 'inHiddenMode', function() {
        return _J;
    }), a(e.exports, 'inBossBattleMode', function() {
        return _K;
    }), a(e.exports, 'inPardyMode', function() {
        return _P;
    }), a(e.exports, 'inProduction', function() {
        return _Q;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'),
        i = (d('.....'), d('.....')),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = d('.....'),
        p = d('.....'),
        q = d('.....');
    const r = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        },
        _s = (t, u, v) => 1 === u ? t : v || t + 's',
        _t = u => u.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        _u = v => {
            const w = Math.round(v);
            return _O() ? `${ _t(w) } ${ _s('point', w) }` : (w < 0 ? '-' : '') + j.default.gameOptions.currency + _t(Math.abs(w));
        },
        _v = w => {
            j.default.engine.game.send(l.default.kickPlayer, w), j.default.players.players.replace(j.default.players.players.filter(x => x.id !== w)), j.default.ui.showingClassTip || j.default.metadata.currentGameIsUsingGroups || (j.default.ui.showingClassTip = !0);
        },
        _w = x => {
            j.default.gameValues.activityItems.replace([
                ...(0, o.takeRight)(j.default.gameValues.activityItems, 22),
                {
                    ...x,
                    key: r() + r() + '-' + r() + '-' + r() + '-' + r()
                }
            ]);
        },
        _x = () => [
            q.TEAMS,
            m.HUMAN_ZOMBIE_DEFENDING_HOMEBASE,
            m.BOSS_BATTLE
        ].includes(j.default.gameOptions.specialGameType[0]),
        _y = z => {
            const A = j.default.players.teams.findIndex(B => B.id === z);
            return -1 !== A ? j.default.players.teams[A].color.background : i.default.White;
        },
        _z = A => {
            if ((_I() || _L()) && !A)
                return;
            const B = _A();
            _N() || B.fade(h.MUSIC_VOLUME, 0, 1000), setTimeout(() => {
                _x() ? j.default.engine.game.send(l.default.requestTeamLeaderboard, 'final') : j.default.engine.game.send(l.default.requestPlayerLeaderboard, 'final'), j.default.gameValues.currentRoute = k.GameStatus.results;
            }, 500);
        };
    const _A = () => _I() ? h.default.thanos.thanos : _L() ? h.default.halloween : _M() ? h.default.lava.panther : _N() ? h.default.imposter.mysteriousCase : _O() ? h.default.draw.background : h.default.realityShow,
        _B = (C, D) => {
            const E = j.default.gameOptions.music,
                F = _A();
            j.default.powerups.specialSongIsPlaying || (E && F.fade(h.MUSIC_VOLUME, 0, 1000), setTimeout(() => {
                const G = new(0, n.Howl)({
                    src: [_R(C)],
                    volume: 0.9
                });
                G.play(), j.default.powerups.specialSongIsPlaying = !0;
                const H = String(j.default.ui.backgroundColor);
                j.default.ui.backgroundColor = D, G.on('end', () => {
                    j.default.powerups.specialSongIsPlaying = !1, j.default.ui.backgroundColor = H, E && j.default.gameValues.currentRoute === k.GameStatus.gameplay && F.fade(0, h.MUSIC_VOLUME, 1000);
                });
            }, 1000));
        },
        _C = D => {
            const E = window.location.search.substring(1).split('&');
            for (let F = 0; F < E.length; F++) {
                const G = E[F].split('=');
                if (G[0] === D)
                    return G[1];
            }
            return null;
        },
        _D = (E, F) => {
            const G = () => {
                F.onEnd && F.onEnd();
            };
            void 0 !== F.volume ? E.volume(F.volume) : E.volume(1), F.fadeIn && E.volume(0), E.play(), F.fadeIn && E.fade(0, void 0 !== F.volume ? F.volume : 1, F.fadeInDuration || 1000), E.once('play', () => {
                F.onPlay && F.onPlay(), F.fadeOut && setTimeout(() => {
                    E.fade(F.volume || 1, 0, 1000);
                }, 1000 * (E.duration() - 1));
            });
            const H = () => {
                F.onError ? F.onError() : G();
            };
            return E.once('end', G), E.once('loaderror', H), E.once('playerror', H), E;
        },
        _E = (F, G, H = 1000) => {
            G ? (F.fade(F.volume(), 0, H), setTimeout(() => F.stop(), H)) : F.stop();
        },
        _F = (G, H) => {
            const I = j.default.engine.game;
            I && I.send(G, H);
        },
        _G = H => (0, p.default)() ? (0, g.jsx)(g.Fragment, {
            children: H.children
        }) : (0, g.jsx)('div', {}),
        _H = () => !0 === j.default.gameOptions.music,
        _I = () => j.default.gameOptions.specialGameType.includes(m.THANOS),
        _J = () => j.default.gameOptions.specialGameType.includes(m.HIDDEN),
        _K = () => j.default.gameOptions.specialGameType.includes(m.BOSS_BATTLE),
        _L = () => j.default.gameOptions.specialGameType.includes(m.HUMAN_ZOMBIE_DEFENDING_HOMEBASE),
        _M = () => j.default.gameOptions.specialGameType.includes(m.LAVA),
        _N = () => j.default.gameOptions.specialGameType.includes(m.IMPOSTER),
        _O = () => j.default.gameOptions.specialGameType.includes(m.DRAW),
        _P = () => j.default.gameOptions.specialGameType.includes(m.PARDY);

    function _Q() {
        return !0;
    }

    function _R(S) {
        return '/assets/host/' + S;
    }
}), d.register('.....', function(e, f) {
    a(e.exports, 'MUSIC_VOLUME', function() {
        return _i;
    }), a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....');
    const _i = 0.45,
        j = !1,
        k = l => new(0, g.Howl)({
            src: [(0, h.getAssetPath)(`${ l }.mp3`)],
            preload: j
        });
    var _l = {
        realityShow: new(0, g.Howl)({
            src: [(0, h.getAssetPath)('reality-show.mp3')],
            loop: !0,
            volume: _i,
            preload: j
        }),
        thanos: {
            thanos: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('thanos.mp3')],
                loop: !0,
                volume: _i,
                preload: j
            }),
            wind: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('wind.mp3')],
                preload: j
            }),
            successDing: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('successDing.mp3')],
                preload: j
            })
        },
        winner: new(0, g.Howl)({
            src: [(0, h.getAssetPath)('winner.mp3')],
            preload: j
        }),
        celebrate: new(0, g.Howl)({
            src: [(0, h.getAssetPath)('celebrate.mp3')],
            preload: j
        }),
        bossBattle: {
            darkAmbience: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('darkAmbience.mp3')],
                preload: j
            }),
            award: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('award.mp3')],
                volume: 0.7,
                preload: j
            }),
            getAmped: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('getAmped.mp3')],
                preload: j
            })
        },
        imposter: {
            tensionBuild: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('tensionBuild.mp3')],
                preload: j,
                volume: 0.7
            }),
            spaceshipAmbience: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('spaceshipAmbience.mp3')],
                preload: j,
                loop: !0
            }),
            typing: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('typing.mp3')],
                preload: j
            }),
            crewmateWin: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('crewmateWin.mp3')],
                preload: j
            }),
            imposterWin: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('imposterWin.mp3')],
                preload: j
            }),
            meetingBoom: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('meetingBoom.mp3')],
                preload: j
            }),
            mystery: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('mystery.mp3')],
                preload: j
            }),
            spaceDoorOpen: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('spaceDoorOpen.mp3')],
                preload: j
            }),
            mysteriousCase: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('mysteriousCase.mp3')],
                preload: j,
                loop: !0
            })
        },
        draw: {
            roundStart: new(0, g.Howl)({
                src: (0, h.getAssetPath)('roundStart.mp3'),
                preload: j
            }),
            funk: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('drawFunk.mp3')],
                preload: j
            }),
            winner: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('drawWinner.mp3')],
                preload: j
            }),
            background: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('drawBackground.mp3')],
                preload: j,
                loop: !0
            })
        },
        pardy: {
            music: new(0, g.Howl)({
                src: (0, h.getAssetPath)('pardyMusic.mp3'),
                preload: j,
                loop: !0
            }),
            riser: k('pardyRiser'),
            countdown: k('pardyCountdown'),
            tick: k('pardyTick'),
            swoosh: k('pardySwoosh'),
            roundStart: k('roundStart'),
            complete: k('pardyComplete'),
            finaleMusic: new(0, g.Howl)({
                src: (0, h.getAssetPath)('pardyFinaleMusic.mp3'),
                preload: j,
                loop: !0
            }),
            drumRoll: k('pardyDrumRoll')
        },
        eventBoom: new(0, g.Howl)({
            src: [(0, h.getAssetPath)('eventBoom.wav')],
            preload: j
        }),
        suspense: new(0, g.Howl)({
            src: [(0, h.getAssetPath)('suspense.wav')],
            volume: 0.45,
            preload: j
        }),
        halloween: new(0, g.Howl)({
            src: [(0, h.getAssetPath)('halloween.mp3')],
            loop: !0,
            volume: _i,
            preload: j
        }),
        engagingSuspense: new(0, g.Howl)({
            src: [(0, h.getAssetPath)('engagingSuspense.mp3')],
            preload: j
        }),
        fanfare: new(0, g.Howl)({
            src: [(0, h.getAssetPath)('fanfare.mp3')],
            preload: j
        }),
        boom: new(0, g.Howl)({
            src: [(0, h.getAssetPath)('boom.mp3')],
            preload: j
        }),
        lava: {
            panther: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('panther.mp3')],
                loop: !0,
                preload: j,
                volume: 0.25
            }),
            pantherShort: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('pantherShort.mp3')],
                preload: j,
                volume: 0.4
            }),
            lavaRumble: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('lavaRumble.mp3')],
                loop: !0,
                preload: j
            }),
            egyptFanfare: new(0, g.Howl)({
                src: [(0, h.getAssetPath)('egyptFanfare.mp3')],
                preload: j,
                volume: 0.5
            })
        }
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
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
}), d.register('.....', function(e, f) {
    a(e.exports, 'THANOS', function() {
        return d;
    }), a(e.exports, 'HIDDEN', function() {
        return _h;
    }), a(e.exports, 'BOSS_BATTLE', function() {
        return _i;
    }), a(e.exports, 'SHOP_QR_SCAN', function() {
        return _j;
    }), a(e.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _k;
    }), a(e.exports, 'LAVA', function() {
        return _l;
    }), a(e.exports, 'IMPOSTER', function() {
        return _m;
    }), a(e.exports, 'DRAW', function() {
        return _n;
    }), a(e.exports, 'COMEBACK', function() {
        return _o;
    }), a(e.exports, 'PARDY', function() {
        return _p;
    });
    const g = 'THANOS',
        _h = 'HIDDEN',
        _i = 'BOSS_BATTLE',
        _j = 'SHOP_QR_SCAN',
        _k = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _l = 'LAVA',
        _m = 'IMPOSTER',
        _n = 'DRAW',
        _o = 'COMEBACK',
        _p = 'PARDY';
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = function(j, k) {
            if (Array.isArray(j))
                return j;
            if (Symbol.iterator in Object(j))
                return function(l, m) {
                    var n = [],
                        o = !0,
                        p = !1,
                        q = void 0;
                    try {
                        for (var r, s = l[Symbol.iterator](); !(o = (r = s.next()).done) && (n.push(r.value), !m || n.length !== m); o = !0);
                    } catch (l) {
                        p = !0, q = l;
                    } finally {
                        try {
                            !o && s.return && s.return();
                        } finally {
                            if (p)
                                throw q;
                        }
                    }
                    return n;
                }(j, k);
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        },
        j = h.isSupported && h.visibility,
        _k = function() {
            var l = (0, h.getHandlerArgs)(),
                m = i(l, 1)[0],
                n = (0, g.useState)(m),
                o = i(n, 2),
                p = o[0],
                q = o[1];
            return (0, g.useEffect)(function() {
                if (j) {
                    var r = function() {
                        var s = (0, h.getHandlerArgs)(),
                            t = i(s, 1)[0];
                        q(t);
                    };
                    return document.addEventListener(h.visibility.event, r),
                        function() {
                            document.removeEventListener(h.visibility.event, r);
                        };
                }
            }, []), p;
        };
}), d.register('.....', function(e, f) {
    a(e.exports, 'isSupported', function() {
        return _i;
    }), a(e.exports, 'visibility', function() {
        return _j;
    }), a(e.exports, 'getHandlerArgs', function() {
        return _k;
    });
    var g = 'undefined' != typeof document,
        h = [{
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
        _i = g && Boolean(document.addEventListener),
        _j = function() {
            if (!_i)
                return null;
            var k = !0,
                l = !1,
                m = void 0;
            try {
                for (var n, o = h[Symbol.iterator](); !(k = (n = o.next()).done); k = !0) {
                    var p = n.value;
                    if (p.hidden in document)
                        return p;
                }
            } catch (k) {
                l = !0, m = k;
            } finally {
                try {
                    !k && o.return && o.return();
                } finally {
                    if (l)
                        throw m;
                }
            }
            return null;
        }(),
        _k = function() {
            if (!_j)
                return [
                    !0,
                    'visible'
                ];
            var l = _j.hidden,
                m = _j.state;
            return [
                !document[l],
                document[m]
            ];
        };
}), d.register('.....', function(e, f) {
    a(e.exports, 'CLASSIC', function() {
        return d;
    }), a(e.exports, 'TEAMS', function() {
        return _h;
    }), a(e.exports, 'THANOS', function() {
        return _i;
    }), a(e.exports, 'BOSS_BATTLE', function() {
        return _j;
    }), a(e.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _k;
    }), a(e.exports, 'LAVA', function() {
        return _l;
    }), a(e.exports, 'IMPOSTER', function() {
        return _m;
    }), a(e.exports, 'DRAW', function() {
        return _n;
    }), a(e.exports, 'PARDY', function() {
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
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....');
    const u = v => (0, i.jsxs)('span', {
        children: [
            v.minutes,
            ':',
            v.seconds
        ]
    });
    let v = class extends m.Component {
        componentDidMount() {
            this.props.gameValues.gameEndDate || (this.props.gameValues.gameEndDate = this.state.startDate + 60000 * this.props.gameOptions.goal.value);
        }
        render() {
            const w = this.getGameGoalText();
            return (0, i.jsxs)(q.Container, {
                children: [
                    (0, i.jsxs)(q.HeaderSectionContainer, {
                        customCSS: '\n          display: flex;\n          align-items: center;\n        ',
                        children: [
                            (0, i.jsx)('img', {
                                src: '/client/img/svgLogoWhite.svg',
                                style: {
                                    height: 30
                                }
                            }),
                            this.props.gameOptions.joinInLate ? (0, i.jsx)(j.default, {
                                title: 'Game Code (Click to enlarge)',
                                children: (0, i.jsx)(q.GameCode, {
                                    onClick: this.toggleLargeCode,
                                    showLargeCode: this.state.showLargeCode,
                                    children: this.props.gameValues.gameCode
                                })
                            }) : null
                        ]
                    }),
                    (0, i.jsx)(q.HeaderSectionContainer, {
                        customWidth: 50,
                        children: !(0, k.inZombiesVsHumansMode)() && (0, i.jsx)(q.Goal, {
                            children: (0, k.inThanosMode)() ? 'Collect All 6 Infinity Stones' : 'TIME' === w ? this.timeRender() : w
                        })
                    }),
                    (0, i.jsx)(q.HeaderSectionContainer, {
                        customCSS: '\n          justify-content: flex-end;\n          display: flex;\n        ',
                        children: (0, i.jsxs)('div', {
                            style: {
                                display: 'flex'
                            },
                            children: [
                                !(0, k.inProduction)() && (0, i.jsx)(p.default, {
                                    onClick: this.newGame,
                                    icon: (0, i.jsx)(r.default, {}),
                                    tooltipMessage: '[DEV] Start New Game'
                                }),
                                (0, i.jsx)(p.default, {
                                    onClick: this.toggleMusic,
                                    icon: (0, i.jsx)(t.default, {}),
                                    tooltipMessage: 'Toggle Music'
                                }),
                                !(0, k.inThanosMode)() && !(0, k.inZombiesVsHumansMode)() && (0, i.jsx)(p.default, {
                                    onClick: this.endGame,
                                    icon: (0, i.jsx)(s.default, {}),
                                    tooltipMessage: 'End Game'
                                })
                            ]
                        })
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                startDate: Date.now(),
                showLargeCode: !1
            }), (0, g.default)(this, 'toggleLargeCode', () => this.setState({
                showLargeCode: !this.state.showLargeCode
            })), (0, g.default)(this, 'endGame', () => {
                (0, k.endGame)(!0);
            }), (0, g.default)(this, 'toggleMusic', () => {
                this.props.gameOptions.music = !this.props.gameOptions.music;
            }), (0, g.default)(this, 'newGame', () => {
                this.props.engine.game.send('DEV_NEW_GAME'), setTimeout(() => window.location.reload(), 200);
            }), (0, g.default)(this, 'timeRender', () => this.props.gameValues.gameEndDate ? (0, i.jsx)(b(n), {
                renderer: u,
                onComplete: k.endGame,
                date: this.props.gameValues.gameEndDate
            }) : null), (0, g.default)(this, 'getGameGoalText', () => {
                const {
                    gameOptions: {
                        goal: w
                    }
                } = this.props;
                return w.type === o.GameGoal.allIn ? `Reach ${ (0, k.getMoney)(w.value) }` : w.type === o.GameGoal.race ? `First to ${ (0, k.getMoney)(w.value) }` : w.type === o.GameGoal.time ? 'TIME' : '';
            });
        }
    };
    v = (0, h.__decorate)([
        (0, l.inject)('gameValues', 'gameOptions', 'ui', 'engine'),
        l.observer
    ], v);
    var _w = v;
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    }), e.exports.getTimeDifference = e.exports.zeroPad = void 0;
    var g = Object.assign || function(h) {
            for (var i = 1; i < arguments.length; i++) {
                var j = arguments[i];
                for (var k in j)
                    Object.prototype.hasOwnProperty.call(j, k) && (h[k] = j[k]);
            }
            return h;
        },
        h = function() {
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
        i = _k(d('.....')),
        j = _k(d('.....'));

    function _k(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    var l = e.exports.zeroPad = function(m) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            if (0 === n)
                return m;
            var o = String(m);
            return o.length >= n ? o : ('0'.repeat(n) + o).slice(-1 * n);
        },
        m = e.exports.getTimeDifference = function(n) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                p = o.now,
                q = void 0 === p ? Date.now : p,
                r = o.precision,
                s = void 0 === r ? 0 : r,
                t = o.controlled,
                u = void 0 !== t && t,
                v = 'string' == typeof n ? new Date(n) : n,
                w = parseInt(1000 * (Math.max(0, u ? v : v - q()) / 1000).toFixed(Math.max(0, Math.min(20, s))), 10),
                x = w / 1000;
            return {
                total: w,
                days: Math.floor(x / 86400),
                hours: Math.floor(x / 3600 % 24),
                minutes: Math.floor(x / 60 % 60),
                seconds: Math.floor(x % 60),
                milliseconds: Number((x % 1 * 1000).toFixed()),
                completed: w <= 0
            };
        },
        n = function(o) {
            function p(q) {
                ! function(r, s) {
                    if (!(r instanceof s))
                        throw new TypeError('Cannot call a class as a function');
                }(this, p);
                var r = function(s, t) {
                    if (!s)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !t || 'object' != typeof t && 'function' != typeof t ? s : t;
                }(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, q));
                _o.call(r);
                var s = r.props,
                    t = s.date,
                    u = s.now,
                    v = s.precision,
                    w = s.controlled;
                return r.mounted = !1, r.state = g({}, m(t, {
                    now: u,
                    precision: v,
                    controlled: w
                })), r;
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
            }(p, o), s(p, [{
                    key: 'componentDidMount',
                    value: function() {
                        this.mounted = !0, this.props.controlled || (this.interval = setInterval(this.tick, this.props.intervalDelay));
                    }
                },
                {
                    key: 'componentWillReceiveProps',
                    value: function(w) {
                        var x = w.date,
                            y = w.now,
                            z = w.precision,
                            A = w.controlled;
                        this.setDeltaState(m(x, {
                            now: y,
                            precision: z,
                            controlled: A
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
                    value: function(w) {
                        !this.state.completed && w.completed && (this.clearInterval(), this.props.onComplete && this.props.onComplete(w)), this.mounted && this.setState(g({}, w));
                    }
                },
                {
                    key: 'getFormattedDelta',
                    value: function() {
                        var w = this.state,
                            x = w.days,
                            y = w.hours,
                            z = this.state,
                            A = z.minutes,
                            B = z.seconds,
                            C = this.props,
                            D = C.daysInHours,
                            E = C.zeroPadLength;
                        return D ? (y = w(y + 24 * x, E), x = null) : y = w(y, Math.min(2, E)), {
                            days: x,
                            hours: y,
                            minutes: w(A, Math.min(2, E)),
                            seconds: w(B, Math.min(2, E))
                        };
                    }
                },
                {
                    key: 'clearInterval',
                    value: function(w) {
                        function x() {
                            return w.apply(this, arguments);
                        }
                        return x.toString = function() {
                            return w.toString();
                        }, x;
                    }(function() {
                        clearInterval(this.interval), delete this.interval;
                    })
                },
                {
                    key: 'render',
                    value: function() {
                        var w = this.getFormattedDelta();
                        if (this.props.renderer)
                            return this.props.renderer(g({}, this.props, this.state, w));
                        if (this.state.completed && this.props.children) {
                            var x = g({}, this.props, this.state, w);
                            return delete x.children, t.default.cloneElement(this.props.children, {
                                countdown: x
                            });
                        }
                        var y = w.days,
                            z = w.hours,
                            A = w.minutes,
                            B = w.seconds;
                        return t.default.createElement('span', null, y, null != y ? ':' : '', z, ':', A, ':', B);
                    }
                }
            ]), p;
        }(i.default.Component),
        _o = function() {
            var p = this;
            this.tick = function() {
                var q = p.props,
                    r = q.date,
                    s = q.now,
                    t = q.precision,
                    u = q.controlled,
                    v = q.onTick,
                    w = m(r, {
                        now: s,
                        precision: t,
                        controlled: u
                    });
                p.setDeltaState(g({}, w)), v && w.total > 0 && v(w);
            };
        };
    e.exports.default = n, n.propTypes = {
        date: j.default.oneOfType([
            j.default.instanceOf(Date),
            j.default.string,
            j.default.number
        ]).isRequired,
        daysInHours: j.default.bool,
        zeroPadLength: j.default.number,
        controlled: j.default.bool,
        intervalDelay: j.default.number,
        precision: j.default.number,
        children: j.default.any,
        renderer: j.default.func,
        now: j.default.func,
        onTick: j.default.func,
        onComplete: j.default.func
    }, n.defaultProps = {
        daysInHours: !1,
        zeroPadLength: 2,
        controlled: !1,
        intervalDelay: 1000,
        precision: 0,
        children: null
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var _j = k => (0, g.jsx)(i.default, {
        placement: 'leftBottom',
        title: k.tooltipMessage,
        children: (0, g.jsx)(h.default, {
            style: {
                marginLeft: 5
            },
            onClick: k.onClick,
            type: 'primary',
            shape: 'circle',
            icon: k.icon,
            size: 'large'
        })
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'Container', function() {
        return _n;
    }), a(e.exports, 'GameCode', function() {
        return _o;
    }), a(e.exports, 'Goal', function() {
        return _p;
    }), a(e.exports, 'HeaderSectionContainer', function() {
        return _q;
    });
    var g = d('.....'),
        h = d('.....');
    let i, j, k, l, m = n => n;
    const _n = h.default.div(i || (i = m`
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
        _o = h.default.div(j || (j = m`
  padding: 6px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  font-family: ${ 0 };
  ${ 0 }
`), g.default.fontFamilyName, p => p.showLargeCode ? '\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.9);\n    z-index: 99999;\n    font-size: 150px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  ' : null),
        _p = h.default.div(k || (k = m`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  font-size: 29px;
  ${ 0 };
`), g.default.black),
        _q = h.default.div(l || (l = m`
  ${ 0 }
  width: ${ 0 }%;
;
`), r => r.customCSS ? r.customCSS : '', r => r.customWidth ? r.customWidth : 25);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'EnterOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'enter',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'LogoutOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'SoundOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z'
                }
            }]
        },
        name: 'sound',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m;
    const n = j.default.div(m || (m = (o => o)`
  min-height: 0;
  flex: 1;
  display: flex;
  min-height: 0;
`));
    class o extends i.Component {
        render() {
            return (0, g.jsxs)(n, {
                children: [
                    (0, g.jsx)(k.default, {
                        forceShowBalance: (0, h.inThanosMode)()
                    }),
                    (0, g.jsx)(l.default, {})
                ]
            });
        }
    }
    var _p = o;
}), d.register('.....', function(e, f) {
    a(e.exports, 'leaderboardSorter', function() {
        return _s;
    }), a(e.exports, 'default', function() {
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
    let r;
    const _s = t => {
            const u = (0, j.inThanosMode)() ? 'stones' : 'balance';
            return t.slice().sort((v, w) => v[u] === w[u] ? 0 : v[u] > w[u] ? -1 : 1);
        },
        t = n.default.div(r || (r = (u => u)`
  max-width: ${ 0 };
  ${ 0 } min-width: 420px;
  flex: 1;
  min-height: 0;
  ${ 0 } display: flex;
  flex-direction: column;
`), u => u.customWidth ? u.customMaxWidth : '420px', u => u.customWidth ? 'width:' + u.customWidth + ';' : null, u => u.blockScroll ? null : 'overflow: scroll;');
    let u = class extends l.Component {
        render() {
            const v = (0, j.inTeamMode)(),
                w = _s(v ? this.props.players.teams : this.props.players.players),
                x = (0, j.inBossBattleMode)();
            return (0, h.jsx)(t, {
                customWidth: this.props.customWidth,
                customMaxWidth: this.props.customMaxWidth,
                blockScroll: this.props.blockScroll,
                className: this.props.customClassName,
                style: {
                    overflow: this.props.overflow ? 'visible' : 'auto',
                    animationDelay: x ? '0s' : '7.4s',
                    animationDuration: x ? '7.4s' : '1s'
                },
                children: (0, h.jsx)(j.HideIfTabbedAway, {
                    children: (0, h.jsx)(m.default, {
                        style: {
                            paddingTop: 11
                        },
                        children: w.map((y, z) => this.props.hideTop3 && z + 1 <= 3 ? null : (0, h.jsx)(p.default, {
                            position: z + 1,
                            data: y,
                            isPlayer: !v,
                            gameGoal: this.props.gameOptions.goal,
                            themes: this.props.gameValues.availableThemes,
                            hidden: !this.props.showHidden && y.activePowerups.includes(i.PowerupNames.undercover),
                            hideName: !(!(0, j.inHiddenMode)() || this.props.gameValues.currentRoute !== o.GameStatus.gameplay),
                            hideBalance: !this.props.forceShowBalance && (this.props.gameValues.currentRoute === o.GameStatus.gameplay && !(!(0, j.inHiddenMode)() && !this.props.gameOptions.specialGameType.includes(q.CLASSIC)))
                        }, y.id || y.name))
                    })
                })
            });
        }
    };
    u = (0, g.__decorate)([
        (0, k.inject)('players', 'gameOptions', 'gameValues'),
        k.observer
    ], u);
    var _v = u;
}), d.register('.....', function(e, f) {
    a(e.exports, 'PowerupNames', function() {
        return d;
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
}), d.register('.....', function(e, f) {
    a(e.exports, 'getTeamPlayerNames', function() {
        return _C;
    }), a(e.exports, 'default', function() {
        return _O;
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
    const _C = D => {
            let E = '';
            return D.forEach((F, G) => {
                E += F, G + 1 !== D.length && (E += ', ');
            }), E;
        },
        D = p.default.div(s || (s = B`
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
`), E => E.background, E => E.text, n.default.basic),
        E = p.default.div(t || (t = B`
  ${ 0 };
  font-size: ${ 0 }px;
`), m.default.black, F => F.large ? 34 : 23),
        F = p.default.div(u || (u = B`
  ${ 0 };
  font-size: ${ 0 }px;
  margin-left: 7px;
  margin-right: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`), m.default.bold, G => G.large ? 30 : 20),
        G = p.default.div(v || (v = B`
  font-size: ${ 0 }px;
`), H => H.large ? 30 : 20),
        H = p.default.div(w || (w = B`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`)),
        I = p.default.div(x || (x = B`
  display: flex;
  align-items: center;
`)),
        J = p.default.div(y || (y = B`
  height: ${ 0 }px;
  width: ${ 0 }px;
  border-radius: 4px;
  background: ${ 0 };
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`), K => K.large ? 37 : 25, K => K.large ? 37 : 25, K => K.background),
        K = p.default.div(z || (z = B`
  font-size: ${ 0 }px;
  ${ 0 };
`), L => L.large ? 37 : 25, m.default.bold),
        L = p.default.div(A || (A = B`
  font-size: ${ 0 }px;
  text-align: center;
`), M => M.large ? 24 : 16),
        M = 'takes the lead';
    class N extends o.Component {
        componentDidUpdate(O) {
            if (this.props.gameGoal.type === q.GameGoal.race && this.props.data.balance >= this.props.gameGoal.value)
                (0, k.endGame)();
            else if (1 === this.props.position && 1 !== O.position) {
                if (this.props.hidden)
                    return;
                if (this.props.isPlayer) {
                    const P = this.props.data;
                    (0, k.addActivityItem)({
                        name: (0, k.inHiddenMode)() ? 'Someone' : P.name,
                        action: M,
                        customTextColor: l.default.LightSuccessGreen
                    });
                } else {
                    const Q = this.props.data;
                    (0, k.addActivityItem)({
                        name: Q.id,
                        action: M,
                        customTextColor: l.default.LightSuccessGreen
                    });
                }
            }
        }
        render() {
            if (this.props.hidden)
                return null;
            const {
                position: O
            } = this.props;
            if (this.props.isPlayer) {
                const P = this.props.data,
                    Q = this.getColors();
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsxs)(D, {
                            style: {
                                cursor: 'pointer'
                            },
                            onClick: this.openDrawer,
                            ...Q,
                            children: [
                                (0, h.jsxs)(E, {
                                    large: this.props.large,
                                    children: [
                                        O,
                                        '.'
                                    ]
                                }),
                                (0, h.jsx)(F, {
                                    large: this.props.large,
                                    children: this.props.hideName ? 'Someone' : P.name
                                }),
                                (0, h.jsx)(G, {
                                    large: this.props.large,
                                    children: this.props.hideBalance ? '' : null !== P.stones && void 0 !== P.stones ? `${ P.stones } ${ (0, k.plural)('stone', P.stones) }` : (0, k.getMoney)(P.balance)
                                })
                            ]
                        }),
                        (0, h.jsx)(j.default, {
                            maskClosable: !0,
                            closable: !1,
                            onClose: this.closeDrawer,
                            open: this.state.drawerVisible,
                            placement: 'bottom',
                            height: 'auto',
                            rootStyle: {
                                fontFamily: m.default.fontFamilyName,
                                color: l.default.Black
                            },
                            children: (0, h.jsx)(r.default, {
                                close: this.closeDrawer,
                                playerId: P.id,
                                playerName: P.name,
                                playerBalance: P.balance,
                                playerStones: P.stones
                            })
                        })
                    ]
                });
            }
            const R = this.props.data;
            return (0, h.jsxs)(D, {
                background: l.default.White,
                text: l.default.Black,
                children: [
                    (0, h.jsxs)(E, {
                        large: this.props.large,
                        children: [
                            O,
                            '.'
                        ]
                    }),
                    (0, h.jsxs)(H, {
                        children: [
                            (0, h.jsxs)(I, {
                                children: [
                                    (0, h.jsx)(J, {
                                        large: this.props.large,
                                        background: (0, k.getTeamColor)(R.id),
                                        children: R.icon && (0, h.jsx)('i', {
                                            className: R.icon,
                                            style: {
                                                color: R.color.text
                                            }
                                        })
                                    }),
                                    (0, h.jsx)(K, {
                                        large: this.props.large,
                                        children: (0, h.jsx)(i.default, {
                                            text: R.id
                                        })
                                    })
                                ]
                            }),
                            (0, h.jsx)(L, {
                                large: this.props.large,
                                children: this.getTeamPlayerNames()
                            })
                        ]
                    }),
                    (0, h.jsx)(G, {
                        large: this.props.large,
                        children: (0, k.getMoney)(R.balance)
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                drawerVisible: !1
            }), (0, g.default)(this, 'openDrawer', () => this.setState({
                drawerVisible: !0
            })), (0, g.default)(this, 'closeDrawer', () => this.setState({
                drawerVisible: !1
            })), (0, g.default)(this, 'getTeamPlayerNames', () => {
                const O = this.props.data;
                return _C(O.players);
            }), (0, g.default)(this, 'getColors', () => {
                const O = this.props.data,
                    {
                        theme: P
                    } = O,
                    Q = this.props.themes,
                    R = Q.filter(S => S.name === P).length > 0 ? Q.filter(S => S.name === P)[0] : Q.filter(S => 'Default' === S.name)[0];
                return 'Default' === R.name ? {
                    background: l.default.White,
                    text: l.default.Black
                } : {
                    background: R.question.background,
                    text: R.question.text
                };
            });
        }
    }
    var _O = N;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l = class extends k.Component {
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
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                text: this.props.text
            }), (0, g.default)(this, 'buildString', () => {
                let m = this.state.text;
                return this.props.suffix && (m += this.props.suffix), m;
            }), (0, g.default)(this, 'requestTranslation', async () => {
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
    l = (0, h.__decorate)([
        (0, j.inject)('translations', 'gameOptions'),
        j.observer
    ], l);
    var _m = l;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
        basic: '0px 4px 33px -6px rgba(0, 0, 0, 0.46)',
        light: '0 4px 14px 0 rgba(0, 0, 0, 0.2)'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    const p = q => (0, h.jsx)(i.default, {
        title: q.tooltip,
        placement: 'bottomRight',
        children: (0, h.jsx)(_s, {
            onClick: q.handleClick,
            backgroundColor: q.backgroundColor,
            children: (0, h.jsx)('i', {
                className: q.icon
            })
        })
    });
    class q extends m.Component {
        render() {
            const r = void 0 === this.props.playerBalance ? `${ this.props.playerStones } stones` : (0, k.getMoney)(this.props.playerBalance || 0);
            return (0, h.jsxs)('div', {
                style: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    (0, h.jsxs)('div', {
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
                            (0, h.jsxs)('span', {
                                style: {
                                    opacity: 0.8
                                },
                                children: [
                                    '(',
                                    r,
                                    ')'
                                ]
                            })
                        ]
                    }),
                    (0, h.jsxs)('div', {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        },
                        children: [
                            (0, h.jsx)(p, {
                                icon: 'fas fa-user-slash',
                                handleClick: this.kickPlayer,
                                tooltip: 'Remove From Game',
                                backgroundColor: '#c62828'
                            }),
                            (0, h.jsx)(p, {
                                icon: 'fas fa-plus',
                                handleClick: this.increaseBalance,
                                tooltip: 'Increase Balance by 10%',
                                backgroundColor: '#1b5e20'
                            }),
                            (0, h.jsx)(p, {
                                icon: 'fas fa-minus',
                                handleClick: this.decreaseBalance,
                                tooltip: 'Decrease Balance By 10%',
                                backgroundColor: '#ac1900'
                            }),
                            (0, h.jsx)(p, {
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
        constructor(...a) {
            super(...a), (0, g.default)(this, 'kickPlayer', () => {
                (0, k.banPlayer)(this.props.playerId), this.props.close();
            }), (0, g.default)(this, 'increaseBalance', () => {
                (0, k.send)(j.default.leaderboardChangeBalance, {
                    balancePercentageChange: 0.1,
                    playerId: this.props.playerId
                }), this.props.close();
            }), (0, g.default)(this, 'decreaseBalance', () => {
                (0, k.send)(j.default.leaderboardChangeBalance, {
                    balancePercentageChange: -0.1,
                    playerId: this.props.playerId
                }), this.props.close();
            }), (0, g.default)(this, 'freezePlayer', () => {
                (0, k.send)(j.default.leaderboardFreezePlayer, {
                    playerId: this.props.playerId
                }), this.props.close();
            });
        }
    }
    var _r = q;
    const _s = n.default.div(o || (o = (t => t)`
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
`), t => t.backgroundColor, l.default.White);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l;
    const m = i.default.div(l || (l = (n => n)`
  min-height: 0;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`));
    class n extends h.Component {
        render() {
            return (0, g.jsxs)(m, {
                children: [
                    (0, g.jsx)(k.default, {}),
                    (0, g.jsx)(j.default, {})
                ]
            });
        }
    }
    var _o = n;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    const r = n.default.div(q || (q = (s => s)`
  height: 45%;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 10px;
  box-shadow: ${ 0 };
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
`), j.default.basic);
    let s = class extends l.Component {
        render() {
            return this.getContent();
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'getContent', () => this.props.withoutContainer ? this.getFeed() : (0, i.jsx)(r, {
                children: this.getFeed()
            })), (0, g.default)(this, 'getFeed', () => {
                const t = this.props.gameValues.activityItems.slice().reverse();
                return (0, i.jsx)(m.default, {
                    enterAnimation: 'accordionVertical',
                    style: {
                        padding: 8
                    },
                    children: t.map(u => (0, i.jsx)(o.default, {
                        customFont: this.props.customFont,
                        item: u
                    }, 'ai-' + u.key))
                });
            });
        }
    };
    s = (0, h.__decorate)([
        (0, k.inject)('gameValues'),
        k.observer
    ], s);
    var _t = u => (0, i.jsx)(p.HideIfTabbedAway, {
        children: (0, i.jsx)(s, {
            ...u
        })
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m, n, o = p => p;
    const p = l.default.div(m || (m = o`
  color: ${ 0 };
  margin-bottom: 5px;
  font-size: 21px;
  padding: 5px;
  box-sizing: border-box;
`), i.default.White),
        q = l.default.span(n || (n = o`
  color: ${ 0 };
  font-weight: 800;
`), r => r.customColor ? r.customColor : i.default.Gold);
    class r extends k.Component {
        render() {
            return (0, g.jsxs)(p, {
                style: {
                    fontFamily: this.props.customFont || j.default.fontFamilyName
                },
                children: [
                    (0, g.jsx)(q, {
                        customColor: this.props.item.customTextColor,
                        children: this.props.item.name + ' '
                    }),
                    (0, g.jsx)('span', {
                        children: (0, g.jsx)(h.default, {
                            text: this.props.item.action
                        })
                    })
                ]
            });
        }
    }
    var _s = r;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        o = d('.....');
    let p;
    const q = k.lazy(() => d('.....')),
        r = l.default.div(p || (p = (s => s)`
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
`), i.default.basic);
    var _s = (0, j.observer)(() => {
        const {
            innerWidth: t,
            innerHeight: u
        } = (0, n.useWindowSize)(), {
            players: v
        } = k.useContext(o.default), w = (0, h.inThanosMode)() ? v.totalStones : v.totalBalance;
        return (0, g.jsxs)(r, {
            id: 'gimkit-balance-tracker',
            children: [
                (0, g.jsx)(h.HideIfTabbedAway, {
                    children: (0, g.jsx)(m.default, {
                        width: t,
                        height: u,
                        balance: w
                    })
                }),
                (0, g.jsx)(k.Suspense, {
                    fallback: null,
                    children: (0, g.jsx)(q, {
                        balance: w
                    })
                })
            ]
        });
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....');
    let r, s, t = u => u;
    const u = v => (0, j.getMoney)(v),
        v = w => `${ w } ${ (0, j.plural)('stone', w) }`,
        w = p.default.div(r || (r = t`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${ 0 };
`), k.default.black),
        x = p.default.div(s || (s = t`
  font-size: ${ 0 }px;
  background: rgba(0, 0, 0, 0.9);
  padding: 4vh 5vw;
  line-height: 1;
  border-radius: calc(1vw + 1vh);
  box-shadow: ${ 0 };
  z-index: 5;
`), y => y.fontSize, l.default.basic);
    let y = class extends n.Component {
        static getDerivedStateFromProps(z, A) {
            return {
                lastBalance: A.currentBalance,
                currentBalance: z.balance
            };
        }
        componentDidUpdate() {
            this.props.gameOptions.goal.type === q.GameGoal.allIn && this.state.currentBalance >= this.props.gameOptions.goal.value && (0, j.endGame)();
        }
        render() {
            const z = (0, j.inThanosMode)() ? v : u,
                A = (d = this.props.width, f = this.props.height, g = z(this.state.currentBalance).length, (d + f) / 2 / (g + (g < 3 ? 4 : 2)) * 0.9);
            var B, C, D;
            return (0, i.jsx)(w, {
                children: (0, i.jsx)(x, {
                    fontSize: A,
                    children: (0, i.jsx)(b(o), {
                        start: this.state.lastBalance,
                        end: this.state.currentBalance,
                        formattingFn: (0, j.inThanosMode)() ? v : u,
                        duration: 0.6
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                lastBalance: 0,
                currentBalance: 0
            });
        }
    };
    y = (0, h.__decorate)([
        (0, m.inject)('gameOptions'),
        m.observer
    ], y);
    var _z = y;
}), d.register('.....', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g = d('.....'),
        h = d('.....');

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

    function l(m) {
        for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2 ? i(Object(o), !0).forEach(function(p) {
                _o(m, p, o[p]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach(function(p) {
                Object.defineProperty(m, p, Object.getOwnPropertyDescriptor(o, p));
            });
        }
        return m;
    }

    function _o(p, q, r) {
        return q in p ? Object.defineProperty(p, q, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : p[q] = r, p;
    }

    function p() {
        return p = Object.assign ? Object.assign.bind() : function(q) {
            for (var r = 1; r < arguments.length; r++) {
                var s = arguments[r];
                for (var t in s)
                    Object.prototype.hasOwnProperty.call(s, t) && (q[t] = s[t]);
            }
            return q;
        }, p.apply(this, arguments);
    }

    function q(r, s) {
        if (null == r)
            return {};
        var t, u, v = function(w, x) {
            if (null == w)
                return {};
            var y, z, A = {},
                B = Object.keys(w);
            for (z = 0; z < B.length; z++)
                y = B[z], x.indexOf(y) >= 0 || (A[y] = w[y]);
            return A;
        }(r, s);
        if (Object.getOwnPropertySymbols) {
            var w = Object.getOwnPropertySymbols(r);
            for (u = 0; u < i.length; u++)
                t = i[u], s.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(r, t) && (v[t] = r[t]);
        }
        return v;
    }
    var v = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? t.useLayoutEffect : t.useEffect;

    function w(x) {
        var y = t.useRef(x);
        return v(function() {
            y.current = x;
        }), t.useCallback(function() {
            for (var z = arguments.length, A = new Array(z), B = 0; B < z; B++)
                A[B] = arguments[B];
            return y.current.apply(void 0, A);
        }, []);
    }
    var y = [
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
        z = {
            decimal: '.',
            delay: null,
            prefix: '',
            suffix: '',
            duration: 2,
            start: 0,
            startOnMount: !0,
            enableReinitialize: !0
        },
        A = function(B) {
            var C = t.useMemo(function() {
                    return l(l({}, z), B);
                }, [B]),
                D = C.ref,
                E = C.startOnMount,
                F = C.enableReinitialize,
                G = C.delay,
                H = C.onEnd,
                I = C.onStart,
                J = C.onPauseResume,
                K = C.onReset,
                L = C.onUpdate,
                M = q(C, y),
                N = t.useRef(),
                O = t.useRef(),
                P = t.useRef(!1),
                Q = w(function() {
                    return function(R, S) {
                        var T = S.decimal,
                            U = S.decimals,
                            V = S.duration,
                            W = S.easingFn,
                            X = S.end,
                            Y = S.formattingFn,
                            Z = S.numerals,
                            $ = S.prefix,
                            ab = S.separator,
                            bb = S.start,
                            cb = S.suffix,
                            db = S.useEasing,
                            eb = S.enableScrollSpy,
                            fb = S.scrollSpyDelay,
                            gb = S.scrollSpyOnce;
                        return new v.CountUp(R, X, {
                            startVal: bb,
                            duration: V,
                            decimal: T,
                            decimalPlaces: U,
                            easingFn: W,
                            formattingFn: Y,
                            numerals: Z,
                            separator: ab,
                            prefix: $,
                            suffix: cb,
                            useEasing: db,
                            useGrouping: !!ab,
                            enableScrollSpy: eb,
                            scrollSpyDelay: fb,
                            scrollSpyOnce: gb
                        });
                    }('string' == typeof D ? D : D.current, M);
                }),
                R = w(function(S) {
                    var T = N.current;
                    if (T && !S)
                        return T;
                    var U = Q();
                    return N.current = U, U;
                }),
                S = w(function() {
                    var T = function() {
                        return R(!0).start(function() {
                            null == H || H({
                                pauseResume: _T,
                                reset: _U,
                                start: _W,
                                update: _V
                            });
                        });
                    };
                    G && G > 0 ? O.current = setTimeout(T, 1000 * G) : T(), null == I || I({
                        pauseResume: _T,
                        reset: _U,
                        update: _V
                    });
                }),
                _T = w(function() {
                    R().pauseResume(), null == J || J({
                        reset: _U,
                        start: _W,
                        update: _V
                    });
                }),
                _U = w(function() {
                    R().el && (O.current && clearTimeout(O.current), R().reset(), null == K || K({
                        pauseResume: _T,
                        start: _W,
                        update: _V
                    }));
                }),
                _V = w(function(W) {
                    R().update(W), null == L || L({
                        pauseResume: _T,
                        reset: _U,
                        start: _W
                    });
                }),
                _W = w(function() {
                    _U(), S();
                }),
                X = w(function(Y) {
                    E && (Y && _U(), S());
                });
            return t.useEffect(function() {
                P.current ? F && X(!0) : (P.current = !0, X());
            }, [
                F,
                P,
                X,
                G,
                B.start,
                B.suffix,
                B.prefix,
                B.duration,
                B.separator,
                B.decimals,
                B.decimal,
                B.formattingFn
            ]), t.useEffect(function() {
                return function() {
                    _U();
                };
            }, [_U]), {
                start: _W,
                pauseResume: _T,
                reset: _U,
                update: _V,
                getCountUp: R
            };
        },
        B = [
            'className',
            'redraw',
            'containerProps',
            'children',
            'style'
        ];
    e.exports.default = function(C) {
        var D = C.className,
            E = C.redraw,
            F = C.containerProps,
            G = C.children,
            H = C.style,
            I = q(C, B),
            J = t.useRef(null),
            K = t.useRef(!1),
            L = A(l(l({}, I), {}, {
                ref: J,
                startOnMount: 'function' != typeof G || 0 === C.delay,
                enableReinitialize: !1
            })),
            M = L.start,
            N = L.reset,
            O = L.update,
            P = L.pauseResume,
            Q = L.getCountUp,
            R = w(function() {
                M();
            }),
            S = w(function(T) {
                C.preserveValue || N(), O(T);
            }),
            T = w(function() {
                'function' != typeof C.children || J.current instanceof Element ? Q() : console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
            });
        t.useEffect(function() {
            T();
        }, [T]), t.useEffect(function() {
            K.current && S(C.end);
        }, [
            C.end,
            S
        ]);
        var U = E && C;
        return t.useEffect(function() {
            E && K.current && R();
        }, [
            R,
            E,
            U
        ]), t.useEffect(function() {
            !E && K.current && R();
        }, [
            R,
            E,
            C.start,
            C.suffix,
            C.prefix,
            C.duration,
            C.separator,
            C.decimals,
            C.decimal,
            C.className,
            C.formattingFn
        ]), t.useEffect(function() {
            K.current = !0;
        }, []), 'function' == typeof G ? G({
            countUpRef: J,
            start: M,
            reset: N,
            update: O,
            pauseResume: P,
            getCountUp: Q
        }) : t.createElement('span', p({
            className: D,
            ref: J,
            style: H
        }, F), void 0 !== C.start ? Q().formattingFn(C.start) : '');
    }, e.exports.useCountUp = A;
}), d.register('.....', function(e, f) {
    a(e.exports, 'CountUp', function() {
        return _h;
    }, function(g) {
        return _h = g;
    });
    var g = function() {
            return (g = Object.assign || function(h) {
                for (var i, j = 1, k = arguments.length; j < k; j++)
                    for (var l in i = arguments[j])
                        Object.prototype.hasOwnProperty.call(i, l) && (h[l] = i[l]);
                return h;
            }).apply(this, arguments);
        },
        _h = function() {
            function i(j, k, l) {
                var m = this;
                this.endVal = k, this.options = l, this.version = '2.3.2', this.defaults = {
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
                }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = '', this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(n) {
                    m.startTime || (m.startTime = n);
                    var o = n - m.startTime;
                    m.remaining = m.duration - o, m.useEasing ? m.countDown ? m.frameVal = m.startVal - m.easingFn(o, 0, m.startVal - m.endVal, m.duration) : m.frameVal = m.easingFn(o, m.startVal, m.endVal - m.startVal, m.duration) : m.frameVal = m.startVal + (m.endVal - m.startVal) * (o / m.duration);
                    var p = m.countDown ? m.frameVal < m.endVal : m.frameVal > m.endVal;
                    m.frameVal = p ? m.endVal : m.frameVal, m.frameVal = Number(m.frameVal.toFixed(m.options.decimalPlaces)), m.printValue(m.frameVal), o < m.duration ? m.rAF = requestAnimationFrame(m.count) : null !== m.finalEndVal ? m.update(m.finalEndVal) : m.callback && m.callback();
                }, this.formatNumber = function(n) {
                    var o, p, q, r, s = n < 0 ? '-' : '';
                    o = Math.abs(n).toFixed(m.options.decimalPlaces);
                    var t = (o += '').split('.');
                    if (p = t[0], q = t.length > 1 ? m.options.decimal + t[1] : '', m.options.useGrouping) {
                        r = '';
                        for (var u = 0, v = p.length; u < v; ++u)
                            0 !== u && u % 3 == 0 && (r = m.options.separator + r), r = p[v - u - 1] + r;
                        p = r;
                    }
                    return m.options.numerals && m.options.numerals.length && (p = p.replace(/[0-9]/g, function(w) {
                        return m.options.numerals[+w];
                    }), q = q.replace(/[0-9]/g, function(w) {
                        return m.options.numerals[+w];
                    })), s + m.options.prefix + p + q + m.options.suffix;
                }, this.easeOutExpo = function(n, o, p, q) {
                    return p * (1 - Math.pow(2, -10 * n / q)) * 1024 / 1023 + o;
                }, this.options = g(g({}, this.defaults), l), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(k), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, '' === this.options.separator && (this.options.useGrouping = !1), this.el = 'string' == typeof j ? document.getElementById(j) : j, this.el ? this.printValue(this.startVal) : this.error = '[CountUp] target is null or undefined', 'undefined' != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, j) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                    return m.handleScroll(m);
                }), window.onscroll = function() {
                    window.onScrollFns.forEach(function(n) {
                        return n();
                    });
                }, this.handleScroll(this)));
            }
            return i.prototype.handleScroll = function(k) {
                if (k && window && !k.once) {
                    var l = window.innerHeight + window.scrollY,
                        m = k.el.getBoundingClientRect(),
                        n = m.top + m.height + window.pageYOffset;
                    n < l && n > window.scrollY && k.paused ? (k.paused = !1, setTimeout(function() {
                        return k.start();
                    }, k.options.scrollSpyDelay), k.options.scrollSpyOnce && (k.once = !0)) : window.scrollY > n && !k.paused && k.reset();
                }
            }, i.prototype.determineDirectionAndSmartEasing = function() {
                var k = this.finalEndVal ? this.finalEndVal : this.endVal;
                this.countDown = this.startVal > k;
                var l = k - this.startVal;
                if (Math.abs(l) > this.options.smartEasingThreshold && this.options.useEasing) {
                    this.finalEndVal = k;
                    var m = this.countDown ? 1 : -1;
                    this.endVal = k + m * this.options.smartEasingAmount, this.duration = this.duration / 2;
                } else
                    this.endVal = k, this.finalEndVal = null;
                null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
            }, i.prototype.start = function(k) {
                this.error || (this.callback = k, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
            }, i.prototype.pauseResume = function() {
                this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
            }, i.prototype.reset = function() {
                cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
            }, i.prototype.update = function(k) {
                cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(k), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
            }, i.prototype.printValue = function(k) {
                var l = this.formattingFn(k);
                'INPUT' === this.el.tagName ? this.el.value = l : 'text' === this.el.tagName || 'tspan' === this.el.tagName ? this.el.textContent = l : this.el.innerHTML = l;
            }, i.prototype.ensureNumber = function(k) {
                return 'number' == typeof k && !isNaN(k);
            }, i.prototype.validateValue = function(k) {
                var l = Number(k);
                return this.ensureNumber(l) ? l : (this.error = '[CountUp] invalid start or end value: '.concat(k), null);
            }, i.prototype.resetDuration = function() {
                this.startTime = null, this.duration = 1000 * Number(this.options.duration), this.remaining = this.duration;
            }, i;
        }();
}), d.register('.....', function(e, f) {
    a(e.exports, 'useWindowSize', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = {
            innerHeight: null,
            innerWidth: null,
            outerHeight: null,
            outerWidth: null
        };

    function j() {
        return {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth
        };
    }

    function _k() {
        var l = (0, g.useState)(function() {
                return 'undefined' != typeof window ? j() : i;
            }),
            m = l[0],
            n = l[1];
        return (0, h.useIsomorphicEffect)(function() {
            function o() {
                n(j());
            }
            if ('undefined' != typeof window)
                return window.addEventListener('resize', o),
                    function() {
                        window.removeEventListener('resize', o);
                    };
            console.warn('useWindowSize: window is undefined.');
        }, []), m;
    }
}), d.register('.....', function(e, f) {
    a(e.exports, 'useIsomorphicEffect', function() {
        return _h;
    });
    var g = d('.....'),
        _h = 'undefined' == typeof window ? g.useEffect : g.useLayoutEffect;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    var _i = g.createContext(h.default);
}), d.register('.....', function(e, f) {
    e.exports = import('./' + d('.....').resolve('gBSGY')).then(() => d('.....'));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n, o, p, q, r = s => s;
    var _s = () => ((0, l.useDidMount)(() => {
        (0, m.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    }), (0, g.jsxs)(_t, {
        children: [
            (0, g.jsx)(i.default, {}),
            (0, g.jsxs)(_u, {
                children: [
                    (0, g.jsx)(_v, {
                        children: (0, g.jsx)(k.default, {})
                    }),
                    (0, g.jsx)(_w, {
                        children: (0, g.jsx)(h.default, {
                            withoutContainer: !0
                        })
                    })
                ]
            })
        ]
    }));
    const _t = j.default.div(n || (n = r`
  height: 100vh;
  width: 100%;
  display: flex;
  background: #151515;
  flex-direction: column;
`)),
        _u = j.default.div(o || (o = r`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`)),
        _v = j.default.div(p || (p = r`
  font-family: ${ 0 };
  height: 65%;
  width: 100%;
`), '\'Bowlby One SC\', cursive'),
        _w = j.default.div(q || (q = r`
  height: 35%;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 7px;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'getImage', function() {
        return _q;
    }), a(e.exports, 'default', function() {
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
    const p = 'halloween-zombie',
        _q = r => r === p ? (0, i.getAssetPath)('zombie-head.svg') : (0, i.getAssetPath)('support.svg');
    let r = class extends l.Component {
        render() {
            return (0, h.jsx)(_t, {
                children: this.props.entities.defendingHomebase.map(s => {
                    return (0, h.jsx)(n.default, {
                        backgroundColor: (e = s.id, 'halloween-human' === e ? '#003c8f' : e === p ? '#494949' : j.default.Black),
                        color: j.default.White,
                        maxHealth: s.maxHealth,
                        currentHealth: s.health,
                        name: s.name,
                        image: _q(s.id)
                    }, `base-${ s.id }`);
                    var t;
                })
            });
        }
    };
    r = (0, g.__decorate)([
        (0, k.inject)('entities'),
        k.observer
    ], r);
    var _s = r;
    const _t = m.default.div(o || (o = (u => u)`
  width: 100%;
  height: 100%;
  display: flex;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    class n extends l.Component {
        render() {
            const o = this.props,
                p = o.currentHealth / o.maxHealth * 100;
            return (0, g.jsxs)('div', {
                style: {
                    width: '50%',
                    height: '100%',
                    padding: 25,
                    boxSizing: 'border-box',
                    color: o.color,
                    background: o.backgroundColor,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: [
                    (0, g.jsx)('img', {
                        src: o.image,
                        style: {
                            width: 150
                        }
                    }),
                    (0, g.jsx)('div', {
                        style: {
                            fontSize: 50
                        },
                        children: o.name
                    }),
                    (0, g.jsx)(i.default, {
                        percent: p,
                        status: 'active',
                        showInfo: !1,
                        style: {
                            width: '80%',
                            maxWidth: 155,
                            zoom: 2.7,
                            marginTop: -9
                        },
                        trailColor: m.default.White,
                        strokeColor: '#66bb6a'
                    }),
                    (0, g.jsxs)('div', {
                        style: {
                            fontFamily: k.default.fontFamilyName,
                            fontWeight: 'bold',
                            fontSize: 18,
                            opacity: 0.7,
                            marginTop: -8
                        },
                        children: [
                            (0, j.numberWithCommas)(o.currentHealth),
                            ' /',
                            ' ',
                            (0, j.numberWithCommas)(o.maxHealth),
                            ' ',
                            (0, g.jsx)(h.default, {
                                text: 'health'
                            })
                        ]
                    })
                ]
            });
        }
    }
    var _o = n;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....'),
        r = d('.....'),
        s = d('.....');
    let t, u = class extends n.Component {
        componentDidMount() {
            this.sound = (0, k.playSound)(j.default.lava.lavaRumble, {});
        }
        componentWillUnmount() {
            this.sound && (0, k.stopSound)(j.default.lava.lavaRumble);
        }
        render() {
            const {
                lava: v
            } = this.props.entities;
            return v ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(_w, {
                        children: [
                            (0, i.jsx)(r.default, {
                                buildHeight: v.buildHeight,
                                lavaHeight: v.lavaHeight,
                                seconds: v.secondsLasted,
                                gameCode: this.props.gameValues.gameCode
                            }),
                            (0, i.jsx)(s.default, {
                                buildHeight: v.buildHeight,
                                lavaHeight: v.lavaHeight,
                                lavaSpeed: v.lavaIncreaseSpeed,
                                buildsInProgress: v.buildsInProgress
                            })
                        ]
                    }),
                    (0, i.jsx)(p.default, {}),
                    (0, i.jsx)(q.default, {})
                ]
            }) : null;
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'sound', null);
        }
    };
    u = (0, h.__decorate)([
        (0, m.inject)('entities', 'gameValues'),
        m.observer
    ], u);
    var _v = u;
    const _w = o.default.div.attrs({
        className: 'animated fadeIn'
    })(t || (t = (x => x)`
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: 2;
  display: flex;
  font-family: ${ 0 };
`), l.default.fontFamilyName);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....');
    let i;
    var _j = () => (0, g.jsx)(_k, {
        children: (0, g.jsxs)('div', {
            className: 'lavaBackground',
            children: [
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {}),
                (0, g.jsx)('span', {})
            ]
        })
    });
    const _k = h.default.div(i || (i = (l => l)`
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
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m, n, o, p = q => q,
        q = class extends k.Component {
            render() {
                return this.props.entities.lava && this.props.entities.lava.lavaIncreasePaused ? (0, h.jsxs)(_s, {
                    children: [
                        (0, h.jsx)(_t, {}),
                        (0, h.jsx)(_u, {
                            children: 'Lava Paused!'
                        })
                    ]
                }) : null;
            }
        };
    q = (0, g.__decorate)([
        (0, j.inject)('entities'),
        j.observer
    ], q);
    var _r = q;
    const _s = l.default.div.attrs({
            className: 'animated fadeIn'
        })(m || (m = p`
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
`), i.default.fontFamilyName),
        _t = l.default.i.attrs({
            className: 'fas fa-pause-circle'
        })(n || (n = p`
  font-size: 100px;
  color: #f5f5f5;
`)),
        _u = l.default.div(o || (o = p`
  margin-left: 30px;
  font-size: 57px;
  font-weight: bold;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'getTimerFromSeconds', function() {
        return _B;
    }), a(e.exports, 'default', function() {
        return _C;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n, o, p, q, r, s, t, u, v, w, x, y, z, A = B => B;
    const _B = C => {
        const D = (E, F) => (Math.pow(10, F) + ~~E).toString().substring(1),
            E = C % 60;
        return `${ D(Math.floor(C / 60), 2) }:${ D(E, 2) }`;
    };
    var _C = D => {
        const {
            buildHeight: E,
            lavaHeight: F,
            seconds: G
        } = D, H = !!('undefined' != typeof window && window && window.navigator && navigator.userAgent.indexOf('Firefox') > 0);
        h.useEffect(() => {
            E < F && (0, l.endGame)();
        }, [F]);
        const I = ((J, K) => {
                if (K / J > 0.8)
                    return Math.round(1.2 * J);
                const L = Math.round(J).toString().length;
                let M = '';
                for (let N = 0; N < L; N++)
                    M += '9';
                let O = Number(M) + 1;
                return O *= 1.1, Math.round(O);
            })(E, F),
            J = Math.round(E / I * 100),
            K = Math.round(F / I * 100);
        return (0, g.jsx)(g.Fragment, {
            children: (0, g.jsxs)(_D, {
                children: [
                    (0, g.jsxs)('div', {
                        className: 'maxWidth',
                        style: {
                            transform: 'translateY(156px)'
                        },
                        children: [
                            (0, g.jsx)(b(j), {
                                fill: 'rgba(244,114,9,0.8)',
                                paused: !1,
                                options: {
                                    height: 10,
                                    amplitude: 8,
                                    speed: 0.45,
                                    points: 6
                                }
                            }),
                            (0, g.jsx)(k.motion.div, {
                                initial: {
                                    height: 0
                                },
                                animate: {
                                    height: `${ K + 1 }vh`
                                },
                                transition: {
                                    duration: 2
                                },
                                style: {
                                    width: '100%',
                                    marginTop: H ? -7 : -6.5,
                                    background: 'linear-gradient(180deg, rgba(244,114,9,0.8) 0%, rgba(208,8,8,0.8) 100%)'
                                }
                            })
                        ]
                    }),
                    (0, g.jsx)(_I, {
                        children: (0, g.jsxs)(_J, {
                            children: [
                                (0, g.jsxs)(_L, {
                                    children: [
                                        (0, g.jsxs)(_M, {
                                            children: [
                                                (0, l.numberWithCommas)(E),
                                                ' ',
                                                (0, l.plural)('block', E)
                                            ]
                                        }),
                                        (0, g.jsxs)(_N, {
                                            children: [
                                                (0, g.jsx)(_P, {}),
                                                (0, g.jsx)(_O, {
                                                    initial: {
                                                        height: 0
                                                    },
                                                    animate: {
                                                        height: `${ J }vh`
                                                    },
                                                    transition: {
                                                        duration: 2
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, g.jsx)(_K, {
                                    children: (0, g.jsx)(m.default, {
                                        withoutContainer: !0
                                    })
                                })
                            ]
                        })
                    }),
                    (0, g.jsx)(_E, {
                        children: (0, g.jsxs)(_F, {
                            children: [
                                (0, g.jsx)(_G, {
                                    children: _B(G)
                                }),
                                (0, g.jsxs)(_H, {
                                    children: [
                                        (0, g.jsx)('b', {
                                            children: 'Game Code:'
                                        }),
                                        ' ',
                                        D.gameCode
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        });
    };
    const _D = i.default.div(n || (n = A`
  width: calc(100% - 350px);
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  overflow: hidden;
`)),
        _E = i.default.div(o || (o = A`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`)),
        _F = i.default.div(p || (p = A`
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
        _G = i.default.div(q || (q = A`
  font-size: 70px;
  line-height: 70px;
`)),
        _H = i.default.div(r || (r = A`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 5px;
`)),
        _I = i.default.div(s || (s = A`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
`)),
        _J = i.default.div(t || (t = A`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`)),
        _K = i.default.div(u || (u = A`
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
        _L = i.default.div(v || (v = A`
  transform: translateY(${ 0 }px);
  width: 250px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  z-index: -1;
`), 156),
        _M = i.default.div(w || (w = A`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
`)),
        _N = i.default.div(x || (x = A`
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
`), (0, l.getAssetPath)('brickTexture.jpg')),
        _O = (0, i.default)(k.motion.div)(y || (y = A`
  width: 100%;
`)),
        _P = i.default.div(z || (z = A`
  width: 100%;
  height: ${ 0 }px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), 150);
}), d.register('.....', function(e, f) {
    e.exports, e.exports = function(g, h) {
        function i(j) {
            return j && 'object' == typeof j && 'default' in j ? j : {
                default: j
            };
        }
        var j = i(g),
            k = i(h);

        function l(m, n) {
            for (var o = 0; i < n.length; i++) {
                var p = n[i];
                p.enumerable = p.enumerable || !1, p.configurable = !0, 'value' in p && (p.writable = !0), Object.defineProperty(m, p.key, p);
            }
        }

        function o(p, q, r) {
            return q in p ? Object.defineProperty(p, q, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : p[q] = r, p;
        }

        function p() {
            return (p = Object.assign || function(q) {
                for (var r = 1; r < arguments.length; r++) {
                    var s = arguments[r];
                    for (var t in s)
                        Object.prototype.hasOwnProperty.call(s, t) && (q[t] = s[t]);
                }
                return q;
            }).apply(this, arguments);
        }

        function q(r, s) {
            var t = Object.keys(r);
            if (Object.getOwnPropertySymbols) {
                var u = Object.getOwnPropertySymbols(r);
                s && (u = u.filter(function(v) {
                    return Object.getOwnPropertyDescriptor(r, v).enumerable;
                })), i.push.apply(i, u);
            }
            return i;
        }

        function t(u) {
            return (t = Object.setPrototypeOf ? Object.getPrototypeOf : function(v) {
                return v.__proto__ || Object.getPrototypeOf(v);
            })(u);
        }

        function u(v, w) {
            return (u = Object.setPrototypeOf || function(x, y) {
                return x.__proto__ = y, x;
            })(v, w);
        }

        function v(w, x) {
            if (null == w)
                return {};
            var y, z, A = function(B, C) {
                if (null == B)
                    return {};
                var D, E, F = {},
                    G = Object.keys(B);
                for (E = 0; E < G.length; E++)
                    D = G[E], 0 <= C.indexOf(D) || (F[D] = B[D]);
                return F;
            }(w, x);
            if (Object.getOwnPropertySymbols) {
                var B = Object.getOwnPropertySymbols(w);
                for (z = 0; z < l.length; z++)
                    i = l[z], 0 <= x.indexOf(i) || Object.prototype.propertyIsEnumerable.call(w, i) && (A[i] = w[i]);
            }
            return A;
        }

        function A(B) {
            if (void 0 === B)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return B;
        }

        function B(C) {
            var D = function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ('function' == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                } catch (C) {
                    return !1;
                }
            }();
            return function() {
                var E, F = t(C);
                if (D) {
                    var G = t(this).constructor;
                    E = Reflect.construct(F, arguments, G);
                } else
                    E = F.apply(this, arguments);
                return function(H, I) {
                    return !I || 'object' != typeof I && 'function' != typeof I ? A(H) : I;
                }(this, E);
            };
        }

        function D(E) {
            var F = E.options,
                G = v(E, ['options']);
            return z.default.createElement(_G, p({}, _H, F, i));
        }
        var _G = function() {
                ! function(H, I) {
                    if ('function' != typeof I && null !== I)
                        throw new TypeError('Super expression must either be null or a function');
                    H.prototype = Object.create(I && I.prototype, {
                        constructor: {
                            value: H,
                            writable: !0,
                            configurable: !0
                        }
                    }), I && u(H, I);
                }(i, g.Component);
                var H = B(i);

                function I(J) {
                    var K;
                    return function(L, M) {
                        if (!(L instanceof M))
                            throw new TypeError('Cannot call a class as a function');
                    }(this, I), o(A(K = H.call(this, J)), 'width', function() {
                        return K.container.current.offsetWidth;
                    }), o(A(K), 'height', function() {
                        return K.container.current.offsetHeight;
                    }), K.container = z.default.createRef(), K.state = {
                        path: ''
                    }, K.lastUpdate = 0, K.elapsed = 0, K.step = 0, K.update = K.update.bind(A(K)), K;
                }
                return function(K, L, M) {
                    L && l(K.prototype, L), M && l(K, M);
                }(I, [{
                        key: 'calculateWavePoints',
                        value: function() {
                            for (var K = [], L = 0; L <= Math.max(this.props.points, 1); L++) {
                                var M = L / this.props.points * this.width(),
                                    N = (this.step + (L + L % this.props.points)) * this.props.speed * 100,
                                    O = Math.sin(N / 100) * this.props.amplitude,
                                    P = Math.sin(N / 100) * O + this.props.height;
                                K.push({
                                    x: M,
                                    y: P
                                });
                            }
                            return K;
                        }
                    },
                    {
                        key: 'buildPath',
                        value: function(K) {
                            function L(M, N) {
                                return ' C '.concat(M.x, ' ').concat(M.y, ' ').concat(M.x, ' ').concat(M.y, ' ').concat(N.x, ' ').concat(N.y);
                            }
                            var M = 'M '.concat(K[0].x, ' ').concat(K[0].y),
                                N = {
                                    x: (K[1].x - K[0].x) / 2,
                                    y: K[1].y - K[0].y + K[0].y + (K[1].y - K[0].y)
                                };
                            M += L(N, K[1]);
                            for (var O = N, P = 1; P < K.length - 1; P++)
                                M += L(O = {
                                    x: K[P].x - O.x + K[P].x,
                                    y: K[P].y - O.y + K[P].y
                                }, K[P + 1]);
                            return (M += ' L '.concat(this.width(), ' ').concat(this.height())) + ' L 0 '.concat(this.height(), ' Z');
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
                                var K = new Date();
                                this.elapsed += K - this.lastUpdate, this.lastUpdate = K;
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
                            var K = this.props,
                                L = K.style,
                                M = K.className,
                                N = K.fill,
                                O = (K.paused, K.children),
                                P = K.id,
                                Q = (K.d, K.ref, v(K, [
                                    'style',
                                    'className',
                                    'fill',
                                    'paused',
                                    'children',
                                    'id',
                                    'd',
                                    'ref'
                                ]));
                            return z.default.createElement('div', {
                                style: function(R) {
                                    for (var S = 1; S < arguments.length; S++) {
                                        var T = null != arguments[S] ? arguments[S] : {};
                                        S % 2 ? q(Object(T), !0).forEach(function(U) {
                                            o(R, U, T[U]);
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(T)) : q(Object(T)).forEach(function(U) {
                                            Object.defineProperty(R, U, Object.getOwnPropertyDescriptor(T, U));
                                        });
                                    }
                                    return R;
                                }({
                                    width: '100%',
                                    display: 'inline-block'
                                }, L),
                                className: M,
                                id: P,
                                ref: this.container
                            }, z.default.createElement('svg', {
                                width: '100%',
                                height: '100%',
                                version: '1.1',
                                xmlns: 'http://www.w3.org/2000/svg'
                            }, O, z.default.createElement('path', p({
                                d: this.state.path,
                                fill: N
                            }, Q))));
                        }
                    }
                ]), I;
            }(),
            _H = {
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 3
            };
        return D.defaultProps = {
            paused: !1,
            fill: '#fff'
        }, D.propTypes = {
            paused: A.default.bool,
            fill: A.default.string,
            options: A.default.object
        }, D;
    }(d('.....'), d('.....'));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    d('.....');
    var p = d('.....'),
        q = d('.....');
    let r, s, t = u => u;
    var _u = v => (0, g.jsx)(_v, {
        children: (0, g.jsxs)(_w, {
            children: [
                (0, g.jsx)(q.default, {
                    icon: 'fas fa-volcano',
                    title: 'Lava Height',
                    value: v.lavaHeight,
                    label: (0, o.plural)('block', v.lavaHeight),
                    footer: (0, g.jsxs)(g.Fragment, {
                        children: [
                            (0, g.jsx)(j.default, {
                                style: {
                                    background: n.default.White,
                                    marginTop: 15,
                                    marginBottom: 15
                                }
                            }),
                            (0, g.jsx)(i.default, {
                                onClick: () => {
                                    (0, m.send)(l.default.hostIncreaseLavaHeight, {
                                        amount: 0.1
                                    }), k.default.success({
                                        message: 'Lava height increased by 10%!',
                                        placement: 'bottomRight'
                                    });
                                },
                                block: !0,
                                icon: (0, g.jsx)(h.default, {}),
                                type: 'primary',
                                children: 'Increase Lava Height by 10%'
                            })
                        ]
                    })
                }),
                (0, g.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, g.jsx)(q.default, {
                    icon: 'fas fa-building',
                    title: 'Building Height',
                    value: v.buildHeight,
                    label: (0, o.plural)('block', v.buildHeight)
                }),
                (0, g.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, g.jsx)(q.default, {
                    icon: 'fas fa-tachometer-fast',
                    title: 'Lava Increase Speed',
                    value: v.lavaSpeed,
                    label: `${ (0, o.plural)('block', v.lavaSpeed) } per second`
                }),
                (0, g.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, g.jsx)(q.default, {
                    icon: 'fas fa-hammer',
                    title: 'Builds In Progress',
                    value: v.buildsInProgress
                }),
                (0, g.jsx)('div', {
                    style: {
                        height: 30
                    }
                })
            ]
        })
    });
    const _v = p.default.div(r || (r = t`
  width: 350px;
  height: 100%;
  overflow-y: auto;
  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: rgba(0, 0, 0, 0.2);
`)),
        _w = p.default.div(s || (s = t`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'ArrowUpOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z'
                }
            }]
        },
        name: 'arrow-up',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....');
    let j, k, l, m, n, o, p, q = r => r;
    var _r = s => (0, g.jsxs)(_s, {
        children: [
            (0, g.jsxs)(_t, {
                children: [
                    (0, g.jsx)(_u, {
                        className: s.icon
                    }),
                    (0, g.jsx)(_v, {
                        children: s.title
                    })
                ]
            }),
            (0, g.jsxs)(_w, {
                children: [
                    (0, g.jsx)(_x, {
                        children: (0, h.numberWithCommas)(s.value)
                    }),
                    s.label ? (0, g.jsx)(_y, {
                        children: s.label
                    }) : null,
                    s.footer ? s.footer : null
                ]
            })
        ]
    });
    const _s = i.default.div(j || (j = q`
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
        _t = i.default.div(k || (k = q`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 10px;
  padding-left: 20px;
`)),
        _u = i.default.i(l || (l = q`
  font-size: 15px;
  line-height: 15px;
  margin-right: 8px;
`)),
        _v = i.default.div(m || (m = q`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
`)),
        _w = i.default.div(n || (n = q`
  width: 100%;
  padding: 20px;
`)),
        _x = i.default.div(o || (o = q`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
`)),
        _y = i.default.div(p || (p = q`
  font-size: 16px;
  line-height: 16px;
  margin-top: 4px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'Container', function() {
        return _C;
    }), a(e.exports, 'Content', function() {
        return _D;
    }), a(e.exports, 'default', function() {
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
        w = d('.....');
    let x, y, z = A => A,
        A = class extends k.Component {
            componentDidMount() {
                (0, w.loadFont)('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'), setTimeout(() => {
                    (0, r.playSound)(s.default.imposter.spaceshipAmbience, {
                        volume: 0.16
                    });
                }, 1800);
            }
            render() {
                return (0, i.jsxs)(_C, {
                    children: [
                        (0, i.jsx)(m.default, {}),
                        (0, i.jsx)(_D, {
                            children: this.getContent()
                        })
                    ]
                });
            }
            constructor(...a) {
                super(...a), (0, g.default)(this, 'getContent', () => {
                    const {
                        status: B
                    } = this.props.imposter;
                    return B === v.ImposterStatus.intro ? (0, i.jsx)(t.default, {}) : B === v.ImposterStatus.questions ? (0, i.jsx)(n.default, {}) : B === v.ImposterStatus.discussion ? (0, i.jsx)(o.default, {}) : B === v.ImposterStatus.voting ? (0, i.jsx)(p.default, {}) : B === v.ImposterStatus.votingResult ? (0, i.jsx)(q.default, {}) : null;
                });
            }
        };
    A = (0, h.__decorate)([
        (0, u.inject)('imposter'),
        u.observer
    ], A);
    var _B = A;
    const _C = l.default.div(x || (x = z`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
  display: flex;
`), j.default.Black, j.default.White),
        _D = l.default.div(y || (y = z`
  flex: 1;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    let k;
    class l extends h.Component {
        render() {
            return (0, g.jsxs)(_n, {
                children: [
                    (0, g.jsx)('div', {
                        className: 'stars'
                    }),
                    (0, g.jsx)('div', {
                        className: 'twinkling'
                    }),
                    (0, g.jsx)('div', {
                        className: 'clouds'
                    })
                ]
            });
        }
    }
    var _m = l;
    const _n = i.default.div(k || (k = (o => o)`
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
`), (0, j.getAssetPath)('stars.png'), (0, j.getAssetPath)('twinkling.png'), (0, j.getAssetPath)('clouds.png'));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let p, q, r = s => s,
        s = class extends l.Component {
            componentDidUpdate() {
                this.checkForGameToEnd();
            }
            componentWillUnmount() {
                (0, j.getMusicTrack)().fade(0.27, 0, 100);
            }
            componentDidMount() {
                this.checkForGameToEnd(), this.shouldGameEnd() || (0, j.getMusicTrack)().fade(0, 0.27, 1000);
            }
            render() {
                return this.shouldGameEnd() ? null : (0, i.jsx)(_u, {
                    children: (0, i.jsxs)(_v, {
                        className: 'animated fadeIn',
                        children: [
                            (0, i.jsx)(n.default, {}),
                            (0, i.jsx)(o.default, {})
                        ]
                    })
                });
            }
            constructor(...a) {
                super(...a), (0, g.default)(this, 'checkForGameToEnd', () => {
                    this.shouldGameEnd() && (0, j.endGame)();
                }), (0, g.default)(this, 'shouldGameEnd', () => {
                    const {
                        meetingsLeft: t,
                        impostersLeft: u
                    } = this.props.imposter;
                    return !t || !u || t < u;
                });
            }
        };
    s = (0, h.__decorate)([
        (0, k.inject)('imposter'),
        k.observer
    ], s);
    var _t = s;
    const _u = m.default.div(p || (p = r`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100vw;
`)),
        _v = m.default.div(q || (q = r`
  flex: 1;
  display: flex;
  overflow: hidden;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        u = d('.....');
    let v, w, x, y, z, A, B = C => C,
        C = class extends l.Component {
            render() {
                const D = this.props.imposter.people.filter(E => E.markedAsClear);
                return (0, i.jsxs)(_E, {
                    children: [
                        (0, i.jsxs)(_F, {
                            children: [
                                this.canShowClearList() ? (0, i.jsx)(_H, {
                                    children: (0, i.jsx)(u.default, {
                                        text: j.imposterStrings.clearList
                                    })
                                }) : null,
                                D.map(E => (0, i.jsx)(_I, {
                                    children: E.name
                                }, `clear-${ E.id }`))
                            ]
                        }),
                        (0, i.jsxs)(_G, {
                            children: [
                                (0, i.jsx)(p.default, {
                                    size: 'large',
                                    block: !0,
                                    type: 'primary',
                                    icon: (0, i.jsx)(n.default, {}),
                                    style: {
                                        marginBottom: 10
                                    },
                                    onClick: q.default,
                                    children: (0, i.jsx)(u.default, {
                                        text: 'Call Meeting'
                                    })
                                }),
                                (0, i.jsx)(p.default, {
                                    block: !0,
                                    icon: (0, i.jsx)(o.default, {}),
                                    type: 'primary',
                                    onClick: this.endGameEarly,
                                    style: {
                                        background: k.default.BackgroundPurple,
                                        borderColor: k.default.BackgroundPurple
                                    },
                                    children: (0, i.jsx)(u.default, {
                                        text: 'End Game Early (Impostors Win)'
                                    })
                                }),
                                (0, i.jsxs)(_J, {
                                    children: [
                                        (0, i.jsxs)('b', {
                                            children: [
                                                (0, i.jsx)(u.default, {
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
            constructor(...a) {
                super(...a), (0, g.default)(this, 'canShowClearList', () => {
                    const {
                        modeOptions: D
                    } = this.props.gameOptions;
                    return !(!D || !D.allowPublicInvestigations);
                }), (0, g.default)(this, 'endGameEarly', () => {
                    (0, s.send)(t.default.imposter.imposterWin);
                });
            }
        };
    C = (0, h.__decorate)([
        (0, r.inject)('imposter', 'gameValues', 'gameOptions'),
        r.observer
    ], C);
    var _D = C;
    const _E = m.default.div(v || (v = B`
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
`), j.imposterFontName),
        _F = m.default.div(w || (w = B`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
`)),
        _G = m.default.div(x || (x = B`
  flex-shrink: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-top-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 2px;
`)),
        _H = m.default.div(y || (y = B`
  font-size: 44px;
  line-height: 44px;
  font-weight: bold;
  margin-bottom: 15px;
`)),
        _I = m.default.div(z || (z = B`
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
`), k.default.White),
        _J = m.default.div(A || (A = B`
  opacity: 0.9;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'imposterStrings', function() {
        return d;
    }), a(e.exports, 'imposterFontName', function() {
        return _h;
    });
    const g = {
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
        _h = '"Space Grotesk", monospace';
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'BulbOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z'
                }
            }]
        },
        name: 'bulb',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    var _i = () => {
        h.default.imposter.status === g.ImposterStatus.questions && (h.default.imposter.status = g.ImposterStatus.discussion);
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m;
    class n extends i.Component {
        render() {
            return (0, g.jsxs)(_p, {
                children: [
                    (0, g.jsx)(l.default, {}),
                    (0, g.jsx)(k.default, {})
                ]
            });
        }
    }
    var _o = n;
    const _p = j.default.div(m || (m = (q => q)`
  flex: 1;
  overflow: hidden;
  font-family: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), h.imposterFontName);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m, n, o, p = q => q;
    class q extends h.Component {
        render() {
            return (0, g.jsxs)(_s, {
                children: [
                    (0, g.jsx)(_t, {
                        children: (0, g.jsx)(l.default, {
                            text: k.imposterStrings.investigationLog
                        })
                    }),
                    (0, g.jsx)(_u, {
                        children: (0, g.jsx)(i.default, {
                            withoutContainer: !0,
                            customFont: k.imposterFontName
                        })
                    })
                ]
            });
        }
    }
    var _r = q;
    const _s = j.default.div(m || (m = p`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 35px;
  overflow: hidden;
`)),
        _t = j.default.div(n || (n = p`
  font-size: 44px;
  line-height: 44px;
  font-weight: bold;
  margin-bottom: 15px;
`)),
        _u = j.default.div(o || (o = p`
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
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _v;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n, o, p, q, r, s = t => t;
    const t = u => (0, h.jsxs)(_y, {
        children: [
            (0, h.jsx)(_z, {
                children: u.num
            }),
            (0, h.jsx)(_A, {
                children: (0, h.jsx)(i.default, {
                    text: `${ (0, j.plural)(u.stat, u.num) } left`
                })
            })
        ]
    });
    let u = class extends l.Component {
        render() {
            const {
                imposter: {
                    investigationsLeft: v,
                    meetingsLeft: w,
                    impostersLeft: x
                }
            } = this.props;
            return (0, h.jsxs)(_w, {
                children: [
                    (0, h.jsx)(t, {
                        num: x,
                        stat: 'impostor'
                    }),
                    (0, h.jsx)(_x, {}),
                    (0, h.jsx)(t, {
                        num: w,
                        stat: 'meeting'
                    }),
                    (0, h.jsx)(_x, {}),
                    (0, h.jsx)(t, {
                        num: v,
                        stat: 'investigation'
                    })
                ]
            });
        }
    };
    u = (0, g.__decorate)([
        (0, k.inject)('imposter'),
        k.observer
    ], u);
    var _v = u;
    const _w = m.default.div(n || (n = s`
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
        _x = m.default.div(o || (o = s`
  height: 100%;
  width: 3px;
  background: rgba(255, 255, 255, 0.2);
  margin-left: 35px;
  margin-right: 35px;
`)),
        _y = m.default.div(p || (p = s`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`)),
        _z = m.default.div(q || (q = s`
  font-size: 42px;
  line-height: 42px;
  font-weight: bold;
`)),
        _A = m.default.div(r || (r = s`
  font-size: 18px;
  line-height: 18px;
  margin-top: 10px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'Container', function() {
        return _D;
    }), a(e.exports, 'ContentContainer', function() {
        return _E;
    }), a(e.exports, 'Image', function() {
        return _F;
    }), a(e.exports, 'Title', function() {
        return _G;
    }), a(e.exports, 'Description', function() {
        return _H;
    }), a(e.exports, 'Divider', function() {
        return _I;
    }), a(e.exports, 'ActionText', function() {
        return _J;
    }), a(e.exports, 'default', function() {
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
        s = d('.....');
    let t, u, v, w, x, y, z, A = B => B,
        B = class extends r.Component {
            componentDidMount() {
                m.default.imposter.spaceshipAmbience.fade(0.16, 0, 250), (0, n.playSound)(m.default.imposter.meetingBoom, {
                    volume: 0.7
                });
            }
            componentWillUnmount() {
                m.default.imposter.spaceshipAmbience.fade(0, 0.16, 2500);
            }
            render() {
                return (0, i.jsx)(_D, {
                    children: (0, i.jsxs)(_E, {
                        className: 'animated zoomInDown',
                        style: {
                            animationDelay: '0.6s',
                            animationDuration: '2.2s'
                        },
                        children: [
                            (0, i.jsx)(_F, {
                                src: (0, n.getAssetPath)('discussion.svg')
                            }),
                            (0, i.jsx)(_G, {
                                children: (0, i.jsx)(l.default, {
                                    text: k.imposterStrings.discussionHeader
                                })
                            }),
                            (0, i.jsx)(_H, {
                                children: (0, i.jsx)(l.default, {
                                    text: k.imposterStrings.discussionDescription
                                })
                            }),
                            (0, i.jsx)(_I, {}),
                            (0, i.jsx)(_J, {
                                children: (0, i.jsx)(l.default, {
                                    text: k.imposterStrings.discussionActionWaiting
                                })
                            }),
                            (0, i.jsx)(j.default, {
                                onClick: this.startVoting,
                                style: {
                                    height: 60
                                },
                                block: !0,
                                type: 'primary',
                                size: 'large',
                                children: k.imposterStrings.startVoting
                            })
                        ]
                    })
                });
            }
            constructor(...a) {
                super(...a), (0, g.default)(this, 'startVoting', () => this.props.imposter.status = p.ImposterStatus.voting);
            }
        };
    B = (0, h.__decorate)([
        (0, q.inject)('imposter'),
        q.observer
    ], B);
    var _C = B;
    const _D = s.default.div.attrs({
            className: 'maxWidth maxHeight scroll-y flex hc vc'
        })(t || (t = A`
  font-family: ${ 0 };
`), k.imposterFontName),
        _E = s.default.div.attrs({
            className: 'flex hc vc flex-column'
        })(u || (u = A`
  margin: 45px;
  background: rgba(255, 255, 255, 0.95);
  color: ${ 0 };
  padding: 60px;
  border-radius: 10px;
  max-width: 650px;
`), o.default.Black),
        _F = s.default.img(v || (v = A`
  height: 170px;
`)),
        _G = s.default.div(w || (w = A`
  font-size: 52px;
  margin-top: 15px;
  font-weight: 900;
`)),
        _H = s.default.div(x || (x = A`
  font-size: 24px;
  line-height: 24px;
  margin-top: 2px;
`)),
        _I = s.default.div(y || (y = A`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
  margin-top: 30px;
  margin-bottom: 30px;
`)),
        _J = s.default.div(z || (z = A`
  margin-bottom: 11px;
  font-size: 15px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....'),
        r = d('.....');
    let s = class extends q.Component {
        componentDidMount() {
            m.default.imposter.spaceshipAmbience.fade(0, 0.16, 1000);
        }
        componentDidUpdate() {
            0 !== this.props.imposter.votes && this.props.imposter.votes === this.possibleVotes() && this.endVoting();
        }
        componentWillUnmount() {
            this.props.imposter.votes = 0;
        }
        render() {
            const t = this.possibleVotes();
            return (0, i.jsx)(r.Container, {
                children: (0, i.jsxs)(r.ContentContainer, {
                    children: [
                        (0, i.jsx)(r.Image, {
                            src: (0, n.getAssetPath)('vote.svg')
                        }),
                        (0, i.jsx)(r.Title, {
                            children: (0, i.jsx)(l.default, {
                                text: k.imposterStrings.voteHeader
                            })
                        }),
                        (0, i.jsx)(r.Description, {
                            children: (0, i.jsx)(l.default, {
                                text: k.imposterStrings.voteDescription
                            })
                        }),
                        (0, i.jsx)(r.Divider, {}),
                        (0, i.jsx)(r.ActionText, {
                            children: `${ this.props.imposter.votes }/${ t } ${ (0, n.plural)('vote', t) } in`
                        }),
                        (0, i.jsx)(j.default, {
                            onClick: this.endVoting,
                            style: {
                                height: 60
                            },
                            block: !0,
                            type: 'primary',
                            size: 'large',
                            children: k.imposterStrings.endVotingEarly
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'possibleVotes', () => this.props.imposter.people.filter(t => !t.votedOff).length), (0, g.default)(this, 'endVoting', () => {
                this.props.imposter.status = o.ImposterStatus.votingResult;
            });
        }
    };
    s = (0, h.__decorate)([
        (0, p.inject)('imposter'),
        p.observer
    ], s);
    var _t = s;
}), d.register('.....', function(e, f) {
    a(e.exports, 'Container', function() {
        return _A;
    }), a(e.exports, 'Content', function() {
        return _B;
    }), a(e.exports, 'default', function() {
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
    let t, u, v, w = x => x;
    var x;
    (x = v || (v = {})).boom = 'boom', x.name = 'name', x.reveal = 'reveal', x.stats = 'stats';
    let y = class extends k.Component {
        componentDidMount() {
            (0, r.playSound)(s.default.eventBoom, {}), setTimeout(() => {
                this.setToName();
            }, 2200);
        }
        render() {
            return (0, i.jsx)(_A, {
                children: (0, i.jsx)(_B, {
                    children: this.getContent()
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                stage: v.boom
            }), (0, g.default)(this, 'setToName', () => this.setState({
                stage: v.name
            })), (0, g.default)(this, 'setToReveal', () => this.setState({
                stage: v.reveal
            })), (0, g.default)(this, 'setToStats', () => this.setState({
                stage: v.stats
            })), (0, g.default)(this, 'onFinish', () => {
                0 === this.props.imposter.impostersLeft || 0 === this.props.imposter.meetingsLeft || this.props.imposter.meetingsLeft < this.props.imposter.impostersLeft ? (0, r.endGame)() : (this.props.imposter.status = q.ImposterStatus.questions, this.props.imposter.meetingResults = null);
            }), (0, g.default)(this, 'getContent', () => {
                if (!this.props.imposter.meetingResults)
                    return null;
                const {
                    stage: z
                } = this.state;
                return z === v.boom ? null : z === v.name ? (0, i.jsx)(n.default, {
                    onFinish: this.setToReveal,
                    name: this.props.imposter.meetingResults.name
                }) : z === v.reveal ? (0, i.jsx)(m.default, {
                    onFinish: this.setToStats,
                    name: this.props.imposter.meetingResults.name,
                    wasImposter: this.props.imposter.meetingResults.wasImposter
                }) : (0, i.jsx)(o.default, {
                    onFinish: this.onFinish,
                    remainingImposters: this.props.imposter.impostersLeft,
                    meetingsLeft: this.props.imposter.meetingsLeft
                });
            });
        }
    };
    y = (0, h.__decorate)([
        (0, p.inject)('imposter'),
        p.observer
    ], y);
    var _z = y;
    const _A = l.default.div.attrs({
            className: 'maxWidth maxHeight flex vc'
        })(t || (t = w`
  font-family: ${ 0 };
  font-size: 36px;
  padding: 100px;
`), j.imposterFontName),
        _B = l.default.div(u || (u = w``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    var _k = l => {
        const [m, n] = j.useState(!1);
        return j.useEffect(() => {
            setTimeout(() => {
                n(!0);
            }, 6770), (0, i.playSound)(h.default.imposter.tensionBuild, {
                volume: 0.53,
                onEnd: () => l.onFinish(),
                onError: () => {
                    setTimeout(l.onFinish, 10000);
                }
            });
        }, []), (0, g.jsxs)('div', {
            className: 'animated fadeIn',
            style: {
                animationDuration: '2s'
            },
            children: [
                l.name,
                ' was',
                m && (l.wasImposter ? ' an impostor.' : ' not an impostor.')
            ]
        });
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    var _k = l => {
        const [m, n] = h.useState(!1);
        return (0, g.jsx)('div', {
            className: m ? 'animated fadeOut' : '',
            children: (0, g.jsx)(j.default, {
                text: `${ l.name } was voted off the ship.`,
                sound: i.default.imposter.typing,
                soundDuration: 3600,
                onFinish: () => {
                    setTimeout(() => n(!0), 2000), setTimeout(l.onFinish, 3000);
                }
            })
        });
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    var _k = l => {
        i.useEffect(() => {
            l.sound && (0, h.playSound)(l.sound, {
                volume: l.volume
            });
        }, []);
        const m = l.text,
            n = l.pace ? l.pace : l.soundDuration ? Math.round(l.soundDuration / m.length) : 140;
        return (0, g.jsx)(j.WindupChildren, {
            onFinished: l.onFinish,
            children: (0, g.jsx)(j.Pace, {
                ms: n,
                children: m
            })
        });
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'Pace', function() {
        return _B;
    }), a(e.exports, 'WindupChildren', function() {
        return _db;
    });
    var g = d('.....');
    d('.....');

    function h(i) {
        return 2 === i.length;
    }

    function i(j) {
        return !!Array.isArray(j) && (3 === j.length && !(!Array.isArray(j[0]) || !Array.isArray(j[1])));
    }

    function j(k, l) {
        return [
            [],
            k.split(''),
            l
        ];
    }

    function k(l, m) {
        return [
            [],
            l,
            m
        ];
    }

    function l(m) {
        const [n, o] = m;
        return !(n.length > 0) && o.reduce((p, q) => i(q) && i(m) && p ? l(q) : p, !0);
    }

    function m([n, o]) {
        return 0 === o.length;
    }

    function n(o) {
        const p = _y(o);
        return m(p) ? p : n(p);
    }

    function p(q) {
        if (l(q))
            return q;
        const [r, s, t] = q, u = v => i(v) ? p(v) : v;
        return [
            [],
            [
                ...r.map(u),
                ...s.map(u)
            ],
            t
        ];
    }

    function r([s, t]) {
        const u = t.reduce((v, w) => i(w) && !l(w) ? _t(w) : v, void 0);
        if (u)
            return u;
        return s[s.length - 1];
    }

    function _t(u) {
        const v = r(u);
        return i(v) ? _t(v) : v;
    }

    function v([w, x]) {
        const y = w.map(z => {
                if (i(z)) {
                    const [A, B, C] = z;
                    return [
                        v(z),
                        C
                    ];
                }
                return z;
            }),
            [z] = x;
        if (i(z) && !l(z)) {
            const [A, B, C] = z;
            return [
                ...y,
                [
                    v(z),
                    C
                ]
            ];
        }
        return y;
    }

    function x([y, z]) {
        const [A] = z;
        return i(A) ? x(A) : A;
    }

    function _y(z) {
        if (m(z))
            return z;
        const [A, B, C] = z, [D, ...g] = B;
        if (i(D)) {
            const E = _y(D);
            return m(z) ? [
                [
                    ...A,
                    z
                ],
                g,
                C
            ] : [
                A,
                [
                    z,
                    ...g
                ],
                C
            ];
        }
        return [
            [
                ...A,
                D
            ],
            g,
            C
        ];
    }

    function A(B, C) {
        switch (B) {
            case '\u2014':
            case '\u2026':
                return 200;
            case '.':
            case ',':
                return 150;
            case '?':
            case '!':
                if ('!' !== C && '?' !== C)
                    return 150;
            case '-':
            case ' ':
            case '\n':
                return 0;
            default:
                return 20;
        }
    }
    const _B = ({
        children: C
    }) => v(g).createElement(v(g).Fragment, null, C);

    function C(D) {
        if (m(D))
            return;
        const [E, F, G] = D, [H] = F;
        return H && i(H) ? C(H) : G.pace;
    }
    const D = ({
        children: E
    }) => v(g).createElement(v(g).Fragment, null, E);

    function E(F) {
        return F.type === D;
    }

    function F(G) {
        const [H, I, J] = G, K = r(G), [L] = I;
        let M = [];
        return K && i(K) && M.push(...F(K)), L && i(L) && !l(L) && M.push(...F(L)), J.onChar && M.push(J.onChar), M;
    }

    function H(I) {
        return {
            windup: I,
            didFinishOnce: !1
        };
    }

    function I(J, K) {
        switch (K.type) {
            case 'replace':
                return H(K.windup);
            case 'next':
                return {
                    ...J,
                    windup: _y(J.windup)
                };
            case 'rewind':
                return {
                    windup: p(J.windup),
                        didFinishOnce: !1
                };
            case 'fast-forward':
                return {
                    ...J,
                    windup: n(J.windup)
                };
            case 'finish':
                return {
                    ...J,
                    didFinishOnce: !0
                };
            default:
                return J;
        }
    }

    function J(K, L) {
        const [{
            windup: M,
            didFinishOnce: N
        }, O] = (0, g.useReducer)(I, K, H), P = (0, g.useRef)(null), Q = m(M), R = (0, g.useCallback)(() => {
            i || (h.current && clearTimeout(h.current), O({
                type: 'fast-forward'
            }));
        }, [i]), S = (0, g.useCallback)(() => {
            h.current && clearTimeout(h.current), O({
                type: 'rewind'
            });
        }, []);
        return (0, g.useEffect)(() => {
            O({
                type: 'replace',
                windup: K
            });
        }, [K]), (0, g.useEffect)(() => {
            h.current && clearTimeout(h.current), L.skipped && O({
                type: 'fast-forward'
            }), !1 === L.skipped && O({
                type: 'rewind'
            });
        }, [L.skipped]), (0, g.useEffect)(() => {
            const T = F(M),
                U = _t(M);
            T.length > 0 && U && T.forEach(V => {
                V(U);
            });
        }, [M]), (0, g.useEffect)(() => {
            if (!1 === N && i) {
                const T = setTimeout(() => {
                    L.onFinished && L.onFinished(), O({
                        type: 'finish'
                    });
                }, 0);
                return () => {
                    clearTimeout(T);
                };
            }
        }, [
            N,
            i,
            L
        ]), (0, g.useEffect)(() => {
            if (!i) {
                const T = C(M) || A,
                    U = _t(M),
                    V = x(M);
                return h.current = setTimeout(() => {
                    O({
                        type: 'next'
                    });
                }, U ? T(U, V) : 0), () => {
                    h.current && clearTimeout(h.current);
                };
            }
        }, [
            M,
            i
        ]), {
            windup: M,
            skip: j,
            rewind: k,
            isFinished: i
        };
    }
    const O = [
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

    function P(Q) {
        const R = h(Q) ? Q[1] : Q[2],
            S = h(Q) ? Q[0] : v(Q),
            T = R.element || v(g).Fragment;
        if (R.props && Object.keys(R.props).includes('children'))
            return v(g).createElement(T, Object.assign({}, R.props));
        const U = S.reduce((V, W) => {
            if ('string' == typeof W) {
                const X = V.slice(0, V.length - 1),
                    Y = V[V.length - 1];
                return Y && 'string' == typeof Y ? [
                    ...X,
                    Y + W
                ] : [
                    ...V,
                    W
                ];
            }
            return [
                ...V,
                P(W)
            ];
        }, []);
        return 'string' == typeof R.element && O.includes(R.element) ? v(g).createElement(T, Object.assign({
            key: R.key
        }, R.props)) : v(g).createElement(T, Object.assign({
            key: R.key
        }, R.props), i);
    }
    const U = ({}) => null;
    const V = v(g).createContext({
        skip: () => {
            console.warn('Tried to use the useSkip hook outside of a WindupChildren component!!');
        },
        rewind: () => {
            console.warn('Tried to use the useRewind hook outside of a WindupChildren component!');
        },
        isFinished: !1
    });

    function W(X, Y) {
        if ('string' == typeof Y)
            return [
                ...X,
                ...Y.split('')
            ];
        if ('number' == typeof Y)
            return [
                ...X,
                ...Y.toString().split('')
            ];
        if (!v(g).isValidElement(Y))
            return X;
        const {
            children: Z,
            ...$
        } = Y.props, ab = Y.type === _B ? {
            pace: bb => 'ms' in Y.props ? Y.props.ms : Y.props.getPace(bb)
        } : {};
        const bb = E(Y) ? {
                onChar: Y.props.fn
            } : {},
            cb = Y.key ? {
                key: Y.key
            } : {};
        if (function(db) {
                return db.type === U;
            }(Y))
            return [
                ...X,
                j(' ', {
                    element: v(g).Fragment,
                    ...m,
                    props: {},
                    pace: () => Y.props.ms
                })
            ];
        if (void 0 === Z)
            return [
                ...X,
                j(' ', {
                    element: Y.type,
                    props: $,
                    ...m,
                    ...h,
                    ...l
                })
            ];
        if ('string' == typeof Z)
            return [
                ...X,
                j(Z, {
                    element: Y.type,
                    props: $,
                    ...m,
                    ...h,
                    ...l
                })
            ];
        if (Z instanceof Function)
            return [
                ...X,
                j(' ', {
                    element: Y.type,
                    props: {
                        children: Z,
                        ...$
                    },
                    ...m,
                    ...h,
                    ...l
                })
            ];
        const db = v(g).Children.toArray(Z).reduce(W, []).map(eb => {
            if (i(eb)) {
                const [fb, gb, hb] = eb;
                return [
                    fb,
                    gb,
                    {
                        ...h,
                        ...l,
                        ...hb
                    }
                ];
            }
            return eb;
        });
        return [
            ...X,
            k(n, {
                element: Y.type,
                props: $,
                ...m,
                ...h,
                ...l
            })
        ];
    }

    function cb(db) {
        return null == db ? '' : v(g).Children.map(db, eb => 'string' == typeof eb ? eb : 'number' == typeof eb ? eb.toString() : v(g).isValidElement(eb) ? `#${ eb.key || '' }<${ cb(eb.props.children) }>` : '').join(',');
    }
    const _db = ({
        children: eb,
        onFinished: fb,
        skipped: gb
    }) => {
        const hb = function(ib, jb) {
                return (0, g.useMemo)(ib, [cb(jb)]);
            }(() => k(v(g).Children.toArray(eb).reduce(W, []), {
                element: void 0
            }), eb),
            {
                windup: ib,
                skip: jb,
                rewind: kb,
                isFinished: lb
            } = J(hb, {
                onFinished: fb,
                skipped: gb
            });
        return v(g).createElement(V.Provider, {
            value: {
                skip: jb,
                rewind: kb,
                isFinished: lb
            }
        }, P(ib));
    };
}), d.register('.....', function(e, f) {
    function g(h, i, j) {
        const k = 'OffscreenCanvas' in window,
            l = document.createElement('canvas'),
            m = g ? l.transferControlToOffscreen() : l;
        m.width = i;
        const n = m.getContext('2d');
        if (n) {
            n.font = j;
            return h.split(' ').reduce((o, p) => {
                const [q] = o.slice(-1), r = [
                    ...q,
                    p
                ].join(' ');
                let {
                    width: s
                } = n.measureText(r);
                return s <= i ? [
                    ...o.slice(0, -1),
                    [
                        ...q,
                        p
                    ]
                ] : 0 === q.length ? [
                    ...o.slice(0, -1),
                    [p]
                ] : [
                    ...o,
                    [p]
                ];
            }, [
                []
            ]).map(o => o.join(' ')).join('\n');
        }
        return console.warn('No canvas context was found, so the string was left as is!'), h;
    }
    a(e.exports, 'default', function() {
        return l;
    });
    var l = function(m, n, o) {
        if (function(p) {
                return Array.isArray(p);
            }(m)) {
            return g(m.join(''), n, o).split('').reduce((p, q, r) => '\n' === q ? [
                ...p,
                r
            ] : p, []).reduce((p, q) => function(r, s) {
                const {
                    indexToInsertInto: t,
                    localPosition: u
                } = s.reduce(({
                    indexToInsertInto: v,
                    localPosition: w,
                    lengthOfPreceding: x
                }, y, z) => {
                    const A = y.length + x;
                    return !v && !w && r < A ? {
                        indexToInsertInto: z,
                        localPosition: r - x,
                        lengthOfPreceding: A
                    } : {
                        indexToInsertInto: v,
                        localPosition: w,
                        lengthOfPreceding: A
                    };
                }, {
                    indexToInsertInto: 0,
                    localPosition: 0,
                    lengthOfPreceding: 0
                });
                return s.map((v, w) => w === t ? v.slice(0, u) + '\n' + v.slice(u) : v).map(v => v.split('\n').map((w, x, y) => x < y.length - 2 && x > 0 ? w.trim() : x < y.length - 2 ? w.trimRight() : x > 0 ? w.trimLeft() : w).join('\n'));
            }(q, p), m);
        }
        return g(m, n, o);
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....');
    var _k = l => (0, g.jsx)(j.default, {
        text: 0 === l.remainingImposters ? '0 impostors remain. Our research is saved!' : `${ l.remainingImposters } ${ (0, i.plural)('impostor', l.remainingImposters) } remain${ 1 === l.remainingImposters ? 's' : '' }. ${ l.meetingsLeft } ${ (0, i.plural)('meeting', l.meetingsLeft) } left.`,
        sound: h.default.imposter.typing,
        soundDuration: 3600,
        onFinish: () => {
            setTimeout(l.onFinish, 2200);
        }
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        r = d('.....'),
        s = d('.....'),
        t = d('.....');
    let u;
    let v = class extends o.Component {
        render() {
            return (0, i.jsx)(_x, {
                gameOptions: this.props.gameOptions,
                imposter: this.props.imposter
            });
        }
    };
    v = (0, h.__decorate)([
        (0, n.inject)('gameOptions', 'imposter'),
        n.observer
    ], v);
    class w extends o.Component {
        componentDidMount() {
            (0, k.getMusicTrack)().fade(0, 0, 0), (0, k.playSound)(j.default.imposter.spaceDoorOpen, {
                volume: 0.7
            }), this.props.setTimeout(() => {
                this.setState({
                    show: !0
                });
            }, 3800);
        }
        render() {
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(p.Container, {
                        children: (0, i.jsx)(p.Content, {
                            className: this.state.exiting ? 'animated fadeOut' : '',
                            children: this.state.show ? (0, i.jsx)(q.default, {
                                text: this.stages[this.state.stageIndex].text,
                                sound: j.default.imposter.typing,
                                soundDuration: 3600,
                                onFinish: this.nextStage
                            }, `imposter-intro-stage-${ this.state.stageIndex }`) : null
                        })
                    }),
                    (0, i.jsxs)(_z, {
                        children: [
                            (0, i.jsx)('div', {}),
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(t.default, {
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
        constructor(...a) {
            var x, y;
            super(...a), (0, g.default)(this, 'state', {
                stageIndex: 0,
                show: !1,
                exiting: !1
            }), (0, g.default)(this, 'stages', (x = (0, m.getUser)().lastName, y = this.props.gameOptions.modeOptions.numberOfImposters, [{
                    text: `Crewmates, this is Captain ${ x } here. We're in big trouble.`
                },
                {
                    text: `It appears ${ y } ${ (0, m.plural)('impostor', y) } ${ 1 === y ? 'has' : 'have' } made it onto our spaceship in an attempt to steal our research.`
                },
                {
                    text: `To protect our research, we must eject ${ 1 === y ? 'this impostor' : 'these impostors' } immediately.`
                },
                {
                    text: `Run investigations and call a meeting to vote the ${ (0, m.plural)('impostor', y) } off the ship.`
                },
                {
                    text: 'Our mission is relying on you. Don\u2019t let me down.'
                }
            ])), (0, g.default)(this, 'close', () => this.props.imposter.status = l.ImposterStatus.questions), (0, g.default)(this, 'nextStage', () => {
                const z = this.stages;
                this.props.setTimeout(() => {
                    z[this.state.stageIndex + 1] ? (this.state.stageIndex + 1 === 1 && this.props.setTimeout(() => {
                        (0, k.playSound)(j.default.imposter.mystery, {
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
    const _x = b(r)(w);
    var _y = v;
    const _z = s.default.div(u || (u = (A => A)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`));
}), d.register('.....', function(e, f) {
    var g = d('.....'),
        h = d('.....');
    e.exports = h(g);
}), d.register('.....', function(e, f) {
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    e.exports = function(j) {
        var k = 'undefined' == typeof window ? c : window,
            l = function(m, n, o) {
                return function(p, q) {
                    var r = Array.prototype.slice.call(arguments, 2),
                        s = m(function() {
                            n.call(this, s), 'function' == typeof p && p.apply(this, r);
                        }.bind(this), q);
                    return this[o] ? this[o].push(s) : this[o] = [s], s;
                };
            },
            m = function(n, o) {
                return function(p) {
                    if (this[o]) {
                        var q = this[o].indexOf(p); -
                        1 !== q && this[o].splice(q, 1);
                    }
                    n(p);
                };
            },
            n = '_ReactTimeout_timeouts',
            o = m(k.clearTimeout, n),
            p = l(k.setTimeout, o, n),
            q = '_ReactTimeout_intervals',
            r = m(k.clearInterval, q),
            s = l(k.setInterval, function() {}, q),
            t = '_ReactTimeout_immediates',
            u = m(k.clearImmediate, t),
            v = l(k.setImmediate, u, t),
            w = '_ReactTimeout_rafs',
            x = m(k.cancelAnimationFrame, w),
            y = l(k.requestAnimationFrame, x, w),
            z = function(A) {
                return A && 'function' == typeof A.slice ? A.slice(0) : [];
            };
        return function(A) {
            var B = g({
                displayName: 'ReactTimeout',
                setTimeout: p,
                clearTimeout: o,
                setInterval: s,
                clearInterval: r,
                setImmediate: v,
                clearImmediate: u,
                requestAnimationFrame: y,
                cancelAnimationFrame: x,
                componentWillUnmount: function() {
                    z(this[n]).forEach(this.clearTimeout), z(this[q]).forEach(this.clearInterval), z(this[t]).forEach(this.clearImmediate), z(this[w]).forEach(this.cancelAnimationFrame);
                },
                getWrappedInstance: function() {
                    return this.wrappedInstance;
                },
                render: function() {
                    return j.createElement(A, h({}, this.props, {
                        ref: function(C) {
                            this.wrappedInstance = C;
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
            return i(B, A);
        };
    };
}), d.register('.....', function(e, f) {
    var g = d('.....'),
        h = d('.....');
    if (void 0 === g)
        throw Error('create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.');
    var i = new g.Component().updater;
    e.exports = h(g.Component, g.isValidElement, i);
}), d.register('.....', function(e, f) {
    var g = d('.....'),
        h = {};

    function i(j, k, l, m, n, o, p, q) {
        if (!j) {
            var r;
            if (void 0 === k)
                r = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
            else {
                var s = [
                        l,
                        m,
                        n,
                        o,
                        p,
                        q
                    ],
                    t = 0;
                (r = new Error(k.replace(/%s/g, function() {
                    return s[t++];
                }))).name = 'Invariant Violation';
            }
            throw r.framesToPop = 1, r;
        }
    }
    var m = 'mixins';
    e.exports = function(n, o, p) {
        var q = [],
            r = {
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
            s = {
                getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
            },
            t = {
                displayName: function(u, v) {
                    u.displayName = v;
                },
                mixins: function(u, v) {
                    if (v)
                        for (var w = 0; w < v.length; w++)
                            _w(u, v[w]);
                },
                childContextTypes: function(u, v) {
                    u.childContextTypes = g({}, u.childContextTypes, v);
                },
                contextTypes: function(u, v) {
                    u.contextTypes = g({}, u.contextTypes, v);
                },
                getDefaultProps: function(u, v) {
                    u.getDefaultProps ? u.getDefaultProps = _G(u.getDefaultProps, v) : u.getDefaultProps = v;
                },
                propTypes: function(u, v) {
                    u.propTypes = g({}, u.propTypes, v);
                },
                statics: function(u, v) {
                    ! function(w, x) {
                        if (!x)
                            return;
                        for (var y in x) {
                            var z = x[y];
                            if (x.hasOwnProperty(y)) {
                                if (i(!(y in t), 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', y), y in w)
                                    return i('DEFINE_MANY_MERGED' === (s.hasOwnProperty(y) ? s[y] : null), 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', y), void(w[y] = _G(w[y], z));
                                w[y] = z;
                            }
                        }
                    }(u, v);
                },
                autobind: function() {}
            };

        function u(v, w) {
            var x = r.hasOwnProperty(w) ? r[w] : null;
            _L.hasOwnProperty(w) && i('OVERRIDE_BASE' === x, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', w), v && i('DEFINE_MANY' === x || 'DEFINE_MANY_MERGED' === x, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', w);
        }

        function _w(x, y) {
            if (y) {
                i('function' != typeof y, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.'), i(!o(y), 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.');
                var z = x.prototype,
                    A = z.__reactAutoBindPairs;
                for (var B in (y.hasOwnProperty(m) && t.mixins(x, y.mixins), y))
                    if (y.hasOwnProperty(B) && B !== m) {
                        var C = y[B],
                            D = z.hasOwnProperty(B);
                        if (u(_w, B), t.hasOwnProperty(B))
                            t[B](x, C);
                        else {
                            var E = r.hasOwnProperty(B);
                            if ('function' == typeof C && !E && !_w && !1 !== y.autobind)
                                A.push(B, C), z[B] = C;
                            else if (_w) {
                                var F = r[B];
                                i(E && ('DEFINE_MANY_MERGED' === F || 'DEFINE_MANY' === F), 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', F, B), 'DEFINE_MANY_MERGED' === F ? z[B] = _G(z[B], C) : 'DEFINE_MANY' === F && (z[B] = _H(z[B], C));
                            } else
                                z[B] = C;
                        }
                    }
            } else;
        }

        function E(F, G) {
            for (var H in (i(F && G && 'object' == typeof F && 'object' == typeof G, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'), G))
                G.hasOwnProperty(H) && (i(void 0 === F[H], 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', H), F[H] = G[H]);
            return F;
        }

        function _G(H, I) {
            return function() {
                var J = H.apply(this, arguments),
                    K = I.apply(this, arguments);
                if (null == J)
                    return K;
                if (null == K)
                    return J;
                var L = {};
                return E(L, J), E(L, K), L;
            };
        }

        function _H(I, J) {
            return function() {
                I.apply(this, arguments), J.apply(this, arguments);
            };
        }

        function I(J, K) {
            return K.bind(J);
        }
        var J = {
                componentDidMount: function() {
                    this.__isMounted = !0;
                }
            },
            K = {
                componentWillUnmount: function() {
                    this.__isMounted = !1;
                }
            },
            _L = {
                replaceState: function(M, N) {
                    this.updater.enqueueReplaceState(this, M, N);
                },
                isMounted: function() {
                    return !!this.__isMounted;
                }
            },
            M = function() {};
        return H(M.prototype, n.prototype, _L),
            function(N) {
                var O = function(P, Q, R) {
                    this.__reactAutoBindPairs.length && function(S) {
                        for (var T = S.__reactAutoBindPairs, U = 0; U < T.length; U += 2) {
                            var V = T[U],
                                W = T[U + 1];
                            S[V] = I(S, W);
                        }
                    }(this), this.props = P, this.context = Q, this.refs = A, this.updater = R || z, this.state = null;
                    var S = this.getInitialState ? this.getInitialState() : null;
                    i('object' == typeof S && !Array.isArray(S), '%s.getInitialState(): must return an object or null', O.displayName || 'ReactCompositeComponent'), this.state = S;
                };
                for (var P in (O.prototype = new M(), O.prototype.constructor = O, O.prototype.__reactAutoBindPairs = [], B.forEach(_w.bind(null, O)), _w(O, J), _w(O, N), _w(O, K), O.getDefaultProps && (O.defaultProps = O.getDefaultProps()), i(O.prototype.render, 'createClass(...): Class specification must implement a `render` method.'), r))
                    O.prototype[P] || (O.prototype[P] = null);
                return O;
            };
    };
}), d.register('.....', function(e, f) {
    var g = {
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
        h = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        i = Object.defineProperty,
        j = Object.getOwnPropertyNames,
        k = Object.getOwnPropertySymbols,
        l = Object.getOwnPropertyDescriptor,
        m = Object.getPrototypeOf,
        n = m && m(Object);
    e.exports = function e(o, p, q) {
        if ('string' != typeof p) {
            if (n) {
                var r = m(p);
                r && r !== n && e(o, r, q);
            }
            var s = j(p);
            k && (s = s.concat(k(p)));
            for (var t = 0; t < s.length; ++t) {
                var u = s[t];
                if (!(g[u] || h[u] || q && q[u])) {
                    var v = l(p, u);
                    try {
                        i(o, u, v);
                    } catch (e) {}
                }
            }
            return o;
        }
        return o;
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'GRID_BACKGROUND_CSS', function() {
        return _x;
    }), a(e.exports, 'default', function() {
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
        r = d('.....'),
        s = d('.....'),
        t = d('.....');
    let u, v, w = x => x;
    const _x = '\nbackground-color: #f1f2f3;\nbackground-image: linear-gradient(\n    to right,\n    rgba(0, 0, 0, 0.05) 1px,\n    transparent 1px\n  ),\n  linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);\n\nbackground-size: 45px 45px;\nbackground-position: center;\n';
    var _y = (0, o.observer)(() => {
        const {
            draw: {
                status: z
            }
        } = h.useContext(p.default);
        h.useEffect(() => {
            r.default.draw.background.volume(s.DRAW_MODE_BACKGROUND_MUSIC_VOLUME);
        }, []);
        return (0, g.jsx)(g.Fragment, {
            children: (0, g.jsxs)(_z, {
                children: [
                    (0, g.jsx)(t.default, {}),
                    (0, g.jsx)(_A, {
                        children: z === q.DrawStatus.pickDrawer ? (0, g.jsx)(m.default, {}) : z === q.DrawStatus.termSelection ? (0, g.jsx)(n.default, {}) : z === q.DrawStatus.drawing ? (0, g.jsx)(i.default, {}) : z === q.DrawStatus.results ? (0, g.jsx)(l.default, {}) : null
                    })
                ]
            })
        });
    });
    const _z = j.default.div.attrs({
            className: 'flex maxWidth flex-column'
        })(u || (u = w`
  height: 100vh;
  font-family: ${ 0 };
  color: ${ 0 };
  ${ 0 }
  overflow: hidden;
`), s.DRAW_MODE_FONT, k.default.Black, _x),
        _A = j.default.div.attrs({
            className: 'flex flex-column'
        })(v || (v = w`
  height: 100%;
  overflow: hidden;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m;
    var _n = () => {
        const [o, p] = h.useState(!1);
        return (0, g.jsx)(g.Fragment, {
            children: (0, g.jsxs)(_o, {
                className: o ? 'animated fadeOut' : '',
                children: [
                    (0, g.jsx)(k.default, {
                        fadeOut: () => p(!0)
                    }),
                    (0, g.jsx)(l.default, {}),
                    (0, g.jsx)(i.default, {
                        isFadingOut: o
                    })
                ]
            })
        });
    };
    const _o = j.default.div.attrs({
        className: 'flex maxWidth maxHeight'
    })(m || (m = (p => p)`
  justify-content: space-between;
  position: relative;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....');
    let r, s, t, u, v, w, x = y => y;
    const y = {
            width: 667,
            height: 500
        },
        z = {
            width: 553,
            height: 400
        },
        A = {
            width: 360,
            height: 270
        },
        B = C => {
            const D = C.text.split(''),
                E = !D.includes('_') && C.noTimeLeft;
            return (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(p.ConfettiContainer, {
                        style: {
                            zIndex: E ? 9 : 0
                        },
                        children: (0, g.jsx)(b(o), {
                            config: p.confettiConfig,
                            active: E
                        })
                    }),
                    (0, g.jsx)(_I, {
                        children: D.map((F, G) => {
                            const H = `letter-${ G }`;
                            return ' ' !== F || E ? (0, g.jsx)(i.Fragment, {
                                children: F
                            }, H) : (0, g.jsx)(i.Fragment, {
                                children: '\xA0\xA0\xA0'
                            }, H);
                        })
                    })
                ]
            });
        };
    var _C = (0, m.observer)(D => {
        const {
            draw: {
                round: {
                    revealText: E,
                    drawer: F,
                    secondsLeft: G
                }
            }
        } = i.useContext(n.default), H = i.useRef(null), [I, J] = (0, q.default)(H), K = i.useMemo(() => 0 === G, [G]), L = i.useMemo(() => {
            let M = y;
            return (I < 790 || J < 700) && (M = z), (I < 680 || J < 530) && (M = A), M;
        }, [
            I,
            J
        ]);
        return (0, g.jsx)(_D, {
            className: D.isFadingOut ? 'animated fadeOut' : '',
            children: (0, g.jsxs)(_E, {
                ref: H,
                children: [
                    (0, g.jsx)(_G, {
                        children: (0, g.jsx)(B, {
                            text: E,
                            noTimeLeft: K
                        })
                    }),
                    (0, g.jsx)(_F, {
                        style: {
                            width: L.width,
                            height: L.height
                        },
                        children: (0, g.jsx)(l.default, {
                            width: L.width,
                            height: L.height
                        })
                    }),
                    (0, g.jsxs)(_H, {
                        children: [
                            (0, g.jsx)('b', {
                                children: 'Drawer:'
                            }),
                            ' ',
                            F.name
                        ]
                    })
                ]
            })
        });
    });
    const _D = j.default.div(r || (r = x`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`)),
        _E = j.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column vc hc'
        })(s || (s = x`
  overflow: hidden;
  z-index: 1;
`)),
        _F = (0, j.default)(k.HandDrawnDiv)(t || (t = x`
  flex-shrink: 0;
  background: ${ 0 };
  overflow: hidden;
`), h.default.White),
        _G = j.default.div(u || (u = x`
  font-size: 45px;
  margin-bottom: 10px;
`)),
        _H = j.default.div(v || (v = x`
  font-size: 22px;
  margin-top: 10px;
`)),
        _I = j.default.span(w || (w = x``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'HandDrawnDiv', function() {
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
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    var _m = (0, k.observer)(n => {
        const {
            draw: o
        } = l.useContext(h.default), p = l.useRef();
        return l.useEffect(() => {
            const q = (0, j.reaction)(() => o.latestLine, r => {
                    var s;
                    r && (null == p || null === (s = p.current) || void 0 === s || s.addLine(r));
                }),
                r = (0, j.reaction)(() => o.round.drawingBase64, s => {
                    var t;
                    s && (null == p || null === (t = p.current) || void 0 === t || t.drawImage(s));
                });
            return () => {
                q(), r();
            };
        }, []), (0, g.jsx)(i.default, {
            ref: p,
            height: n.height,
            width: n.width,
            canEdit: !1
        });
    });
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
    a(e.exports, 'ConfettiContainer', function() {
        return _H;
    }), a(e.exports, 'confettiConfig', function() {
        return _I;
    }), a(e.exports, 'default', function() {
        return _K;
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
    let t, u, v, w, x, y, z, A = B => B;
    const B = s.default.div(t || (t = A`
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
`), C => C.animationDelay, C => C.colors.background, C => C.colors.text, o.default.basic),
        C = s.default.div(u || (u = A`
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
`), D => D.background, m.default.White, n.default.black),
        D = s.default.div(v || (v = A`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`)),
        E = s.default.div(w || (w = A`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 26px;
  ${ 0 };
`), n.default.black),
        F = s.default.div(x || (x = A`
  ${ 0 };
  width: 100%;
  font-size: 18px;
  margin-top: -4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`), n.default.bold),
        G = s.default.div(y || (y = A`
  ${ 0 };
  font-size: 14px;
  margin-left: 15px;
  margin-right: 15px;
`), n.default.normal),
        _H = s.default.div(z || (z = A`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        _I = {
            angle: 90,
            spread: 67,
            startVelocity: 60,
            elementCount: 50,
            decay: 0.87
        };
    class J extends q.Component {
        componentDidMount() {
            1 === this.props.position && setTimeout(() => {
                this.setState({
                    showConfetti: !0
                }), (0, l.inThanosMode)() || (0, l.inZombiesVsHumansMode)() || (0, l.playSound)(k.default.celebrate, {});
            }, 1000 * (this.getAnimationDelay() + 2.3));
        }
        render() {
            const K = this.getColors();
            return (0, h.jsxs)(h.Fragment, {
                children: [
                    (0, h.jsxs)(B, {
                        animationDelay: this.getAnimationDelay(),
                        colors: K,
                        className: 'animated zoomInDown',
                        children: [
                            (0, h.jsx)(C, {
                                background: this.getCircleBackground(),
                                children: (0, h.jsx)(D, {
                                    children: this.getCircleMessage()
                                })
                            }),
                            (0, h.jsx)(E, {
                                children: this.getMainName()
                            }),
                            (0, h.jsx)(F, {
                                children: (0, l.getMoney)(this.props.snapshot.balance)
                            }),
                            (0, h.jsx)(G, {
                                children: this.getDescription()
                            })
                        ]
                    }),
                    1 === this.props.position ? (0, h.jsx)(_H, {
                        children: (0, h.jsx)(b(r), {
                            active: this.state.showConfetti,
                            config: _I
                        })
                    }) : null
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                showConfetti: !1
            }), (0, g.default)(this, 'getColors', () => {
                const {
                    isPlayer: K
                } = this.props;
                if (K) {
                    const L = this.props.snapshot,
                        {
                            theme: M
                        } = L,
                        N = this.props.themes,
                        O = N.filter(P => P.name === M).length > 0 ? N.filter(P => P.name === M)[0] : N.filter(P => 'Default' === P.name)[0];
                    return 'Default' === O.name ? {
                        background: m.default.White,
                        text: m.default.Black
                    } : {
                        background: O.question.background,
                        text: O.question.text
                    };
                }
                const P = this.props.snapshot;
                return {
                    background: (0, p.darken)(0.1, (0, l.getTeamColor)(P.id)),
                    text: m.default.White
                };
            }), (0, g.default)(this, 'getMainName', () => {
                const {
                    isPlayer: K
                } = this.props;
                if (K) {
                    return this.props.snapshot.name;
                }
                const L = this.props.snapshot;
                return (0, h.jsx)(i.default, {
                    text: L.id
                });
            }), (0, g.default)(this, 'getDescription', () => {
                const {
                    isPlayer: K
                } = this.props;
                if (K)
                    return '';
                const L = this.props.snapshot;
                return (0, j.getTeamPlayerNames)(L.players);
            }), (0, g.default)(this, 'getAnimationDelay', () => {
                const {
                    position: K
                } = this.props;
                return 1 === K ? 4.6 : 2 === K ? 2.7 : 0;
            }), (0, g.default)(this, 'getCircleMessage', () => {
                const {
                    position: K
                } = this.props;
                return 1 === K ? '1st' : 2 === K ? '2nd' : '3rd';
            }), (0, g.default)(this, 'getCircleBackground', () => {
                const {
                    position: K
                } = this.props;
                return 1 === K ? 'conic-gradient(#edc800, #e3b600, #f3cf00, #ffe800, #ffe900, #ffeb00, #ffe000, #ebc500, #e0b100, #f1cc00, #fcdc00, #ffe500, #fad900, #eec200, #e7b900, #f7d300, #ffe800, #ffe300, #f5d100, #e6b900, #e3b600, #f4d000, #ffe400, #ebc600, #e3b600, #f6d500, #ffe900, #ffe90a, #edc800) content-box, linear-gradient(#f6d600, #f6d600) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box' : 2 === K ? 'conic-gradient(#d7d7d7, #c3c3c3, #cccccc, #c6c6c6, #d3d3d3, #d8d8d8, #d5d5d5, #d8d8d8, #d3d3d3, #c5c5c5, #c0c0c0, #bfbfbf, #d0d0d0, #d9d9d9, #d1d1d1, #c5c5c5, #c8c8c8, #d7d7d7, #d5d5d5, #cdcdcd, #c4c4c4, #d9d9d9, #cecece, #c5c5c5, #c5c5c5, #cdcdcd, #d8d8d8, #d9d9d9, #d7d7d7) content-box, linear-gradient(#d4d4d4, #d4d4d4) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box' : 'conic-gradient(#e6c9bf, #d2b5aa, #cbaea3, #d4b5ab, #e5c3bd, #d9c0b4, #d9bcb1, #c5a399, #e3c6bc, #e7cac0, #dec0b5, #d3b6ab, #cfada1, #d4b6ac, #e2c6c0, #e2c6c0, #d2b1a6, #d2b1a6, #d1b4a9, #e1c4ba, #e5c9be, #dec1b6, #d3b6ab, #ceb0a6, #cfada3, #d2b5aa, #dabdb2, #e5c9be, #e6c9bf) content-box, linear-gradient(#e5c9be, #e5c9be) padding-box, radial-gradient(rgba(120, 120, 120, 0.9), rgba(120, 120, 120, 0) 70%) 50% bottom/80% 0.46875em no-repeat border-box';
            });
        }
    }
    var _K = J;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
        return _g;
    });
    var _g = b(d('.....'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
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
    a(e.exports, 'Container', function() {
        return _y;
    }), a(e.exports, 'default', function() {
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
        s = d('.....');
    let t, u, v, w = x => x;
    var _x = (0, n.observer)(y => {
        const {
            draw: z
        } = h.useContext(o.default);
        h.useEffect(() => {
            if (0 === z.round.secondsLeft) {
                let A;
                (0, m.musicIsOn)() && (A = setTimeout(() => {
                    r.default.draw.background.fade(r.default.draw.background.volume(), s.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 6000);
                }, 3500));
                const B = setTimeout(() => y.fadeOut(), 6500),
                    C = setTimeout(() => {
                        (0, p.default)();
                    }, 8000);
                return () => {
                    clearTimeout(B), clearTimeout(C), A && clearTimeout(A);
                };
            }
        }, [z.round.secondsLeft]), h.useEffect(() => {
            if (r.default.draw.roundStart.play(), (0, m.musicIsOn)()) {
                r.default.draw.background.fade(r.default.draw.background.volume(), 0, 400);
                const A = r.default.draw.funk,
                    B = 1.3,
                    C = 2,
                    D = z.round.secondsLeft,
                    E = 0.6,
                    F = A.duration() - D - B - E - C;
                return A.volume(0), A.seek(F), setTimeout(() => {
                    A.play(), A.fade(0, s.DRAW_MODE_MUSIC_VOLUME, 9000);
                }, 1000 * E), () => {
                    A.playing && A.stop();
                };
            }
        }, []);
        return (0, g.jsxs)(_y, {
            children: [
                (0, g.jsx)('div', {
                    children: (0, g.jsx)(j.default, {
                        iconOnLeft: !0,
                        icon: (0, m.getAssetPath)('hand-drawn-clock.svg'),
                        value: z.round.secondsLeft
                    })
                }),
                (0, g.jsxs)('div', {
                    style: {
                        marginBottom: 4
                    },
                    className: z.round.secondsLeft ? '' : 'animated fadeOut',
                    children: [
                        (0, g.jsxs)(_z, {
                            onClick: () => {
                                z.showingFeed = !z.showingFeed;
                            },
                            children: [
                                z.showingFeed ? 'Hide' : 'Show',
                                ' Feed'
                            ]
                        }),
                        (0, g.jsx)(_z, {
                            onClick: () => {
                                (0, m.send)(q.default.draw.clear);
                            },
                            children: 'Clear Canvas'
                        }),
                        (0, g.jsx)(_A, {
                            onClick: p.default,
                            children: 'End Round Early'
                        })
                    ]
                })
            ]
        });
    });
    const _y = i.default.div.attrs({
            className: 'maxHeight flex flex-column'
        })(t || (t = w`
  padding: 20px 40px;
  z-index: 2;
  justify-content: space-between;
`)),
        _z = i.default.div(u || (u = w`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
  text-decoration: underline;
  cursor: pointer;
`)),
        _A = (0, i.default)(k.HandDrawnDiv).attrs({
            borderWidth: 2
        })(v || (v = w`
  text-transform: uppercase;
  cursor: pointer;
  line-height: 1;
  padding: 14px;
  font-size: 15px;
  background: ${ 0 };
`), l.default.White);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....');
    let j, k, l, m, n = o => o;
    var _o = p => (0, g.jsxs)(_p, {
        iconOnLeft: p.iconOnLeft,
        children: [
            (0, g.jsx)(_q, {
                children: (0, g.jsx)(_r, {
                    src: p.icon
                })
            }),
            (0, g.jsx)(_s, {
                children: p.value
            })
        ]
    });
    const _p = i.default.div.attrs({
            className: 'flex flex-column'
        })(j || (j = n`
  align-items: ${ 0 };
`), q => q.iconOnLeft ? 'flex-start' : 'flex-end'),
        _q = i.default.div.attrs({
            className: 'flex hc vc'
        })(k || (k = n`
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 50%;
  border: solid 2px ${ 0 };
  background: ${ 0 };
  margin-bottom: -26px;
  position: relative;
`), h.default.Black, h.default.White),
        _r = i.default.img.attrs({
            className: 'maxWidth maxHeight'
        })(l || (l = n``)),
        _s = i.default.div.attrs({
            className: 'flex hc vc'
        })(m || (m = n`
  height: 100px;
  width: 100px;
  font-size: 31px;
  line-height: 1;
  border: solid 3px ${ 0 };
  background: ${ 0 };
  border-radius: 50%;
  margin-left: 6px;
`), h.default.Black, h.default.White);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    var _i = () => {
        (0, h.send)(g.default.draw.endRound);
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'DRAW_MODE_MUSIC_VOLUME', function() {
        return d;
    }), a(e.exports, 'DRAW_MODE_BACKGROUND_MUSIC_VOLUME', function() {
        return _h;
    }), a(e.exports, 'DRAW_MODE_FONT', function() {
        return _i;
    });
    const g = 0.7,
        _h = 0.4,
        _i = '\'Pangolin\', sans-serif';
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    var _p = (0, j.observer)(() => {
        var q, r;
        const {
            draw: s
        } = k.useContext(i.default);
        k.useEffect(() => {
            var t, u, v;
            (null == s || null === (t = s.personCount) || void 0 === t ? void 0 : t.total) && (null == s || null === (u = s.personCount) || void 0 === u ? void 0 : u.total) === (null == s || null === (v = s.personCount) || void 0 === v ? void 0 : v.correct) && (s.everybodyGotLastRoundCorrect = !0, (0, o.default)());
        }, [
            null == s || null === (q = s.personCount) || void 0 === q ? void 0 : q.total,
            null == s || null === (r = s.personCount) || void 0 === r ? void 0 : r.correct
        ]);
        return (0, g.jsxs)(n.Container, {
            children: [
                (0, g.jsx)('div', {
                    children: (0, g.jsx)(l.default, {
                        iconOnLeft: !1,
                        icon: (0, h.getAssetPath)('hand-drawn-check.svg'),
                        value: (null == s ? void 0 : s.personCount) ? null == s ? void 0 : s.personCount.correct : 0
                    })
                }),
                (0, g.jsx)('div', {
                    children: (0, g.jsx)(m.default, {})
                })
            ]
        });
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let s, t, u = v => v;
    const v = (0, o.observer)(() => {
        const {
            draw: w
        } = h.useContext(r.default), [x, y] = h.useState([]), z = (0, l.debounce)(A => {
            y(B => [
                ...B,
                A
            ]);
        }, 120);
        h.useEffect(() => {
            const A = (0, q.reaction)(() => w.latestFeedItem, B => {
                B && (C => {
                    C.important ? y(D => [
                        ...D,
                        C
                    ]) : z(C);
                })({
                    ...B,
                    id: Date.now().toString() + Math.random().toString()
                });
            });
            return () => A();
        }, []);
        const A = h.useMemo(() => {
            let B = window.innerHeight;
            if (!B)
                return 2;
            B -= 200;
            const C = Math.floor(B / 43);
            return Math.max(C - 1, 2);
        }, []);
        return w.showingFeed ? (0, g.jsx)(n.HideIfTabbedAway, {
            children: (0, g.jsx)('div', {
                style: {
                    position: 'relative'
                },
                children: (0, g.jsx)(i.default, {
                    enterAnimation: 'fade',
                    leaveAnimation: 'accordionVertical',
                    duration: 150,
                    children: (0, l.takeRight)(x, A).map(B => (0, g.jsx)(_w, {
                        item: B
                    }, `draw-feed-${ B.id }`))
                })
            })
        }) : null;
    });
    class _w extends h.Component {
        render() {
            const {
                name: x,
                action: y,
                translateAllowed: z,
                nameColor: A,
                actionColor: B
            } = this.props.item;
            return (0, g.jsx)(_y, {
                children: (0, g.jsxs)(_z, {
                    children: [
                        x && (0, g.jsxs)(g.Fragment, {
                            children: [
                                (0, g.jsx)('b', {
                                    style: {
                                        color: A || k.default.Black
                                    },
                                    children: x
                                }),
                                '\xA0'
                            ]
                        }),
                        y && (0, g.jsx)('span', {
                            style: {
                                color: B || k.default.Black
                            },
                            children: z ? (0, g.jsx)(p.default, {
                                text: y
                            }) : y
                        })
                    ]
                })
            });
        }
    }
    var _x = v;
    const _y = (0, j.default)(m.HandDrawnDiv).attrs({
            className: 'flex vc',
            borderWidth: 2
        })(s || (s = u`
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
`), 8, 35, k.default.White),
        _z = j.default.span.attrs({
            className: 'maxWidth'
        })(t || (t = u`
  text-overflow: ellipsis;
  white-space: nowrap;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        o = d('.....');
    let p, q, r = s => s;
    var _s = () => (h.useEffect(() => {
        (0, m.musicIsOn)() && n.default.draw.background.fade(n.default.draw.background.volume(), o.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 2000);
    }, []), (0, g.jsxs)(_t, {
        children: [
            (0, g.jsxs)(_u, {
                children: [
                    (0, g.jsx)(j.default, {}),
                    (0, g.jsx)(k.default, {})
                ]
            }),
            (0, g.jsx)(l.default, {})
        ]
    }));
    const _t = i.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column'
        })(p || (p = r``)),
        _u = i.default.div.attrs({
            className: 'flex animated fadeIn'
        })(q || (q = r`
  flex: 1;
  overflow: hidden;
  animation-duration: 2.2s;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let p, q, r, s, t = u => u;
    var _u = () => {
        const {
            draw: {
                round: v,
                everybodyGotLastRoundCorrect: w,
                drawingHistory: x
            }
        } = i.useContext(m.default);
        i.useEffect(() => {
            v.drawingBase64 && x.push({
                image: v.drawingBase64,
                name: v.drawer.name,
                term: v.term,
                index: x.length
            });
        }, []);
        const y = i.useRef(null),
            [z, A] = (0, l.default)(y),
            B = Math.min(z / 4, (A - 120) / 3),
            C = 4 * B,
            D = 3 * B;
        return (0, g.jsx)(_v, {
            children: (0, g.jsxs)(_w, {
                ref: y,
                children: [
                    (0, g.jsx)(_x, {
                        children: v.term
                    }),
                    C && D ? (0, g.jsx)(j.HandDrawnDiv, {
                        style: {
                            width: C,
                            height: D
                        },
                        children: (0, g.jsx)(h.default, {
                            width: C,
                            height: D,
                            canEdit: !1,
                            initialImage: v.drawingBase64
                        })
                    }) : null,
                    w ? (0, g.jsx)(_y, {
                        children: (0, g.jsx)(o.default, {
                            text: 'Everybody guessed correctly!'
                        })
                    }) : null
                ]
            })
        });
    };
    const _v = k.default.div.attrs({
            className: 'maxHeight'
        })(p || (p = t`
  width: 50%;
  padding: 30px;
  padding-right: 15px;
`)),
        _w = k.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column hc vc'
        })(q || (q = t``)),
        _x = k.default.div(r || (r = t`
  font-size: 40px;
  margin-bottom: 7px;
`)),
        _y = k.default.div(s || (s = t`
  background: ${ 0 };
  color: ${ 0 };
  margin-top: 16px;
  padding: 5px 20px;
  border-radius: 55px;
  font-size: 17px;
`), n.default.SuccessGreen, n.default.White);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let o, p, q, r, s = t => t;
    const t = u => (0, g.jsxs)(_w, {
        children: [
            (0, g.jsx)(_x, {
                children: u.name
            }),
            (0, g.jsxs)(_y, {
                children: [
                    '+ ',
                    (0, i.getMoney)(u.amount)
                ]
            })
        ]
    });
    var _u = (0, l.observer)(() => {
        const {
            draw: {
                pointAdditions: v
            }
        } = m.useContext(j.default);
        return (0, g.jsx)(_v, {
            children: v.length ? (0, g.jsx)(g.Fragment, {
                children: v.map(w => (0, g.jsx)(t, {
                    name: w.name,
                    amount: w.amount
                }, `addition-${ w.id }`))
            }) : (0, g.jsx)('div', {
                className: 'maxHeight maxWidth flex vc',
                children: (0, g.jsx)(_w, {
                    children: (0, g.jsx)('div', {
                        className: 'maxWidth',
                        style: {
                            textAlign: 'center'
                        },
                        children: (0, g.jsx)(h.default, {
                            text: 'Nobody was able to guess the term this time!'
                        })
                    })
                })
            })
        });
    });
    const _v = n.default.div.attrs({
            className: 'maxHeight scroll-y'
        })(o || (o = s`
  width: 50%;
  padding: 30px;
  padding-left: 15px;
`)),
        _w = n.default.div.attrs({
            className: 'maxWidth flex vc light-shadow'
        })(p || (p = s`
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
`), k.default.Black),
        _x = n.default.div(q || (q = s`
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`)),
        _y = n.default.div(r || (r = s`
  color: #1b5e20;
  font-weight: bold;
  margin-left: 10px;
  flex-shrink: 0;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _g;
    });
    var _g = d('.....').default;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let p;
    var _q = (0, m.observer)(() => {
        const {
            draw: r
        } = n.useContext(l.default);
        return (0, g.jsxs)(_r, {
            children: [
                (0, g.jsx)(i.default, {
                    size: 'large',
                    type: 'primary',
                    style: {
                        marginRight: 15
                    },
                    icon: (0, g.jsx)(h.default, {}),
                    onClick: () => {
                        r.status = k.DrawStatus.pickDrawer;
                    },
                    children: 'Start Next Round'
                }),
                (0, g.jsx)(i.default, {
                    type: 'link',
                    onClick: () => (0, j.endGame)(),
                    children: 'End Game'
                })
            ]
        });
    });
    const _r = o.default.div.attrs({
        className: 'maxWidth flex hc vc'
    })(p || (p = (s => s)`
  flex-shrink: 0;
  padding: 25px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 16px rgb(0 0 0 / 50%);
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'TrophyOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z'
                }
            }]
        },
        name: 'trophy',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        o = d('.....'),
        p = d('.....');
    let q, r, s, t, u, v = w => w;
    var _w = (0, m.observer)(() => {
        const {
            draw: x
        } = n.useContext(k.default);
        return n.useEffect(() => {
            x.personCount = null, x.everybodyGotLastRoundCorrect = !1;
        }, []), (0, g.jsx)(_x, {
            children: (0, g.jsxs)(_y, {
                children: [
                    (0, g.jsx)(_z, {}),
                    (0, g.jsx)(_A, {
                        children: (0, g.jsx)(i.default, {
                            text: 'Who\'s drawing?'
                        })
                    }),
                    (0, g.jsx)(_B, {
                        children: (0, g.jsx)(i.default, {
                            text: 'Select the drawer for this round!'
                        })
                    }),
                    (0, g.jsx)(h.default, {}),
                    (0, g.jsx)(p.default, {})
                ]
            })
        });
    });
    const _x = o.default.div.attrs({
            className: 'maxWidth maxHeight scroll-y flex hc'
        })(q || (q = v`
  align-items: flex-start;
`)),
        _y = o.default.div.attrs({
            className: 'flex flex-column vc medium-shadow'
        })(r || (r = v`
  width: 80%;
  max-width: 690px;
  background: rgba(255, 255, 255, 0.9);
  border-style: solid;
  border-width: 3px;
  border-color: ${ 0 };
  border-radius: 8px;
  padding: 30px;
  margin: 20px;
`), l.default.Black),
        _z = o.default.img.attrs({
            src: (0, j.getAssetPath)('drawing.svg')
        })(s || (s = v`
  height: 160px;
  margin-bottom: 14px;
`)),
        _A = o.default.div(t || (t = v`
  font-size: 54px;
  font-weight: bold;
`)),
        _B = o.default.div(u || (u = v`
  font-size: 23px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        o = d('.....'),
        p = d('.....');
    let q, r, s, t, u = v => v;
    const v = w => (0, g.jsxs)(_z, {
        children: [
            (0, g.jsx)(_A, {
                children: w.name
            }),
            (0, g.jsx)(h.default, {
                type: 'dashed',
                onClick: w.onSelect,
                children: 'Select'
            })
        ]
    });
    var _w = (0, m.observer)(() => {
        const {
            players: {
                players: x
            }
        } = n.useContext(k.default), y = z => {
            (0, j.send)(i.default.draw.createRound, z);
        };
        return (0, g.jsxs)(_x, {
            children: [
                (0, g.jsxs)(_y, {
                    children: [
                        (0, g.jsxs)('div', {
                            className: 'flex vc',
                            children: [
                                (0, g.jsx)('img', {
                                    src: (0, j.getAssetPath)('dices.svg'),
                                    style: {
                                        height: 38
                                    }
                                }),
                                (0, g.jsx)('div', {
                                    style: {
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        marginLeft: 13
                                    },
                                    children: 'Random Student'
                                })
                            ]
                        }),
                        (0, g.jsx)(h.default, {
                            size: 'large',
                            type: 'primary',
                            onClick: () => {
                                if (!x.length)
                                    return;
                                const z = (0, l.sample)(x);
                                y(z.id);
                            },
                            children: 'Select'
                        })
                    ]
                }),
                x.slice().sort((z, A) => ((B, C) => {
                    const D = B.toLowerCase(),
                        E = C.toLowerCase();
                    return D < E ? -1 : D > E ? 1 : 0;
                })(z.name, A.name)).map(z => (0, g.jsx)(v, {
                    name: z.name,
                    onSelect: () => y(z.id)
                }, z.id))
            ]
        });
    });
    const _x = o.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = u``)),
        _y = (0, o.default)(p.HandDrawnDiv).attrs({
            className: 'maxWidth flex vc'
        })(r || (r = u`
  justify-content: space-between;
  padding: 12px 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`)),
        _z = o.default.div.attrs({
            className: 'maxWidth flex vc'
        })(s || (s = u`
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
        _A = o.default.div(t || (t = u`
  font-size: 19px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n, o, p, q, r, s = t => t;
    var _t = (0, j.observer)(() => {
        var u;
        const {
            draw: {
                round: v
            }
        } = k.useContext(i.default);
        return (null == v || null === (u = v.drawer) || void 0 === u ? void 0 : u.name) ? (0, g.jsx)(_u, {
            children: (0, g.jsxs)(_v, {
                children: [
                    (0, g.jsx)(_w, {}),
                    (0, g.jsx)(_x, {
                        children: 'Get ready!'
                    }),
                    (0, g.jsxs)(_y, {
                        children: [
                            v.drawer.name,
                            ' is selecting a term...'
                        ]
                    })
                ]
            })
        }) : null;
    });
    const _u = l.default.div.attrs({
            className: 'maxWidth maxHeight flex hc vc'
        })(n || (n = s`
  padding: 30px;
  text-align: center;
`)),
        _v = (0, l.default)(m.HandDrawnDiv).attrs({
            className: 'flex hc vc flex-column medium-shadow'
        })(o || (o = s`
  height: 440px;
  width: 600px;
  background: rgba(255, 255, 255, 0.7);
`)),
        _w = l.default.img.attrs({
            src: (0, h.getAssetPath)('paint.svg')
        })(p || (p = s`
  height: 160px;
`)),
        _x = l.default.div(q || (q = s`
  margin-top: 20px;
  font-size: 68px;
  font-weight: bold;
`)),
        _y = l.default.div(r || (r = s`
  font-size: 30px;
  margin-top: --6px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        r = d('.....'),
        s = d('.....');
    let t, u, v, w, x = y => y;
    var _y = (0, p.observer)(() => {
        const {
            gameValues: {
                gameCode: z
            },
            gameOptions: A,
            draw: B
        } = q.useContext(o.default);
        return (0, g.jsxs)(_z, {
            children: [
                (0, g.jsxs)(_A, {
                    children: [
                        (0, g.jsx)(_B, {}),
                        (0, g.jsxs)(_C, {
                            children: [
                                (0, g.jsx)('b', {
                                    children: 'Game Code:'
                                }),
                                ' ',
                                z
                            ]
                        })
                    ]
                }),
                (0, g.jsx)('div', {
                    children: (0, g.jsx)(j.default, {
                        title: `Turn ${ A.music ? 'Off' : 'On' } Music`,
                        placement: 'left',
                        children: (0, g.jsx)(i.default, {
                            icon: (0, g.jsx)(h.default, {}),
                            type: 'primary',
                            shape: 'circle',
                            onClick: () => {
                                A.music ? (k.default.draw.background.volume(0), k.default.draw.funk.volume(0), A.music = !1) : (k.default.draw.background.volume(B.status === n.DrawStatus.drawing ? 0 : s.DRAW_MODE_BACKGROUND_MUSIC_VOLUME), k.default.draw.background.playing() || k.default.draw.background.play(), k.default.draw.funk.volume(s.DRAW_MODE_MUSIC_VOLUME), A.music = !0);
                            }
                        })
                    })
                })
            ]
        });
    });
    const _z = r.default.div.attrs({
            className: 'light-shadow flex vc'
        })(t || (t = x`
  flex-shrink: 0;
  color: ${ 0 };
  font-family: ${ 0 };
  font-size: 13px;
  background: ${ 0 };
  padding: 14px 19px;
  justify-content: space-between;
`), l.default.Black, m.default.fontFamilyName, l.default.White),
        _A = r.default.div(u || (u = x``)),
        _B = r.default.img.attrs({
            src: '/client/img/svgLogo.svg'
        })(v || (v = x`
  height: 22px;
`)),
        _C = r.default.div(w || (w = x`
  font-size: 14px;
  margin-top: 10px;
  line-height: 1;
  opacity: 0.7;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....'),
        r = d('.....');
    let s, t, u = v => v;
    var _v = (0, o.observer)(() => {
        const {
            pardy: w
        } = i.useContext(p.default), x = () => {
            w.screen = q.PardyScreen.home;
        }, y = !(!w || !w.currentRound || 'Finale' !== w.currentRound.type) ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.2)';
        return (0, g.jsx)(h.AnimateSharedLayout, {
            children: (0, g.jsx)(r.default, {
                children: (0, g.jsxs)(_w, {
                    style: {
                        background: y
                    },
                    children: [
                        (0, g.jsx)(l.default, {}),
                        (0, g.jsx)(_x, {
                            children: w.screen === q.PardyScreen.home ? (0, g.jsx)(k.default, {}) : w.screen === q.PardyScreen.answer ? (0, g.jsx)(n.default, {
                                setToHomeScreen: x
                            }) : (0, g.jsx)(m.default, {
                                setToHomeScreen: x
                            })
                        })
                    ]
                })
            })
        });
    });
    const _w = j.default.div.attrs({
            className: 'flex flex-column'
        })(s || (s = u`
  font-family: 'Londrina Solid', cursive;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  div {
    overflow: hidden;
  }
`)),
        _x = j.default.div(t || (t = u`
  flex: 1;
  overflow: hidden;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'AnimateSharedLayout', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    let k = 0;
    const _l = ({
        children: m
    }) => (h.useEffect(() => {
        (0, g.warning)(!1, 'AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations');
    }, []), h.createElement(j.LayoutGroup, {
        id: (0, i.useConstant)(() => 'asl-' + k++)
    }, m));
}), d.register('.....', function(e, f) {
    a(e.exports, 'LayoutGroup', function() {
        return _m;
    });
    var g = d('.....'),
        h = (g = d('.....'), d('.....')),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    const l = m => !0 === m,
        _m = ({
            children: n,
            id: o,
            inheritId: p,
            inherit: q = !0
        }) => {
            void 0 !== p && (q = p);
            const r = (0, g.useContext)(h.LayoutGroupContext),
                s = (0, g.useContext)(i.DeprecatedLayoutGroupContext),
                [t, u] = (0, j.useForceUpdate)(),
                v = (0, g.useRef)(null),
                w = r.id || s;
            null === v.current && ((x => l(!0 === x) || 'id' === x)(q) && w && (o = o ? w + '-' + o : w), v.current = {
                id: o,
                group: l(q) && r.group || (0, k.nodeGroup)()
            });
            const x = (0, g.useMemo)(() => ({
                ...v.current,
                forceRender: t
            }), [u]);
            return g.createElement(h.LayoutGroupContext.Provider, {
                value: x
            }, n);
        };
}), d.register('.....', function(e, f) {
    a(e.exports, 'DeprecatedLayoutGroupContext', function() {
        return _g;
    });
    const _g = (0, d('.....').createContext)(null);
}), d.register('.....', function(e, f) {
    a(e.exports, 'useForceUpdate', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');

    function _j() {
        const k = (0, i.useIsMounted)(),
            [l, m] = (0, h.useState)(0),
            n = (0, h.useCallback)(() => {
                k.current && m(l + 1);
            }, [l]);
        return [
            (0, h.useCallback)(() => g.sync.postRender(n), [n]),
            l
        ];
    }
}), d.register('.....', function(e, f) {
    a(e.exports, 'useIsMounted', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');

    function _i() {
        const j = (0, g.useRef)(!1);
        return (0, h.useIsomorphicLayoutEffect)(() => (j.current = !0, () => {
            j.current = !1;
        }), []), j;
    }
}), d.register('.....', function(e, f) {
    a(e.exports, 'nodeGroup', function() {
        return _h;
    });
    const g = h => !h.isLayoutDirty && h.willUpdate(!1);

    function _h() {
        const i = new Set(),
            j = new WeakMap(),
            k = () => i.forEach(g);
        return {
            add: l => {
                i.add(l), j.set(l, l.addEventListener('willUpdate', k));
            },
            remove: l => {
                var m;
                i.delete(l), null === (m = j.get(l)) || void 0 === m || m(), j.delete(l), k();
            },
            dirty: k
        };
    }
}), d.register('.....', function(e, f) {
    a(e.exports, 'PardyHomeScreen', function() {
        return _p;
    }), a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n, o, _p, q = r => r;
    var r;
    (r = _p || (_p = {})).board = 'board', r.rankings = 'rankings';
    var _s = () => {
        const [t, u] = h.useState(_p.board);
        return (0, g.jsxs)(_t, {
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
                (0, g.jsx)(_u, {
                    children: t === _p.rankings ? (0, g.jsx)(j.default, {}) : (0, g.jsx)(i.default, {})
                }),
                (0, g.jsx)(l.default, {
                    screen: t,
                    setToBoardScreen: () => u(_p.board),
                    setToRankingScreen: () => u(_p.rankings)
                })
            ]
        });
    };
    const _t = (0, k.default)(m.motion.div).attrs({
            className: 'flex maxWidth maxHeight flex-column'
        })(n || (n = q``)),
        _u = k.default.div(o || (o = q`
  flex: 1;
  z-index: 1;
  overflow: hidden;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m;
    var _n = (0, k.observer)(() => {
        const {
            pardy: {
                board: o
            }
        } = h.useContext(l.default);
        if (!o)
            return null;
        const p = `${ Math.round(100 / o.categories.length) }%`;
        return (0, g.jsx)(_o, {
            children: o.categories.map((q, r) => (0, g.jsx)(i.default, {
                category: q,
                width: p,
                totalCategories: o.categories.length,
                categoryIndex: r
            }, q.name))
        });
    });
    const _o = j.default.div.attrs({
        className: 'flex hc maxAll'
    })(m || (m = (p => p)`
  padding: 20px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        p = d('.....');
    let q, r, s, t, u = v => v;
    var _v = (0, m.observer)(w => {
        const {
            pardy: x
        } = h.useContext(n.default);
        return (0, g.jsxs)(_w, {
            width: w.width,
            children: [
                (0, g.jsx)(_x, {
                    children: (0, g.jsx)(_y, {
                        children: w.category.name
                    })
                }),
                (0, g.jsx)(_z, {
                    children: w.category.items.map((y, z) => (0, g.jsx)(i.default, {
                        id: y.id,
                        amount: y.amount,
                        totalCategories: w.totalCategories,
                        categoryIndex: w.categoryIndex,
                        itemIndex: z,
                        onSelect: () => {
                            return z = y.id, p.default.pardy.music.fade(p.default.pardy.music.volume(), 0, 500), (0, o.playSound)(p.default.pardy.riser, {}), x.currentRound = {
                                type: 'Normal',
                                value: {
                                    category: w.category.name,
                                    id: z
                                }
                            }, x.questionScreen = l.PardyQuestionScreen.preview, x.questionStatus = l.PardyQuestionStatus.preview, void(x.screen = l.PardyScreen.question);
                            var A;
                        },
                        disabled: x.disabledSections.includes(y.id)
                    }, `${ w.category.name }-${ y.id }`))
                })
            ]
        });
    });
    const _w = j.default.div.attrs({
            className: 'flex flex-column vc'
        })(q || (q = u`
  height: 100%;
  width: ${ 0 };
  overflow: hidden;
`), x => x.width),
        _x = j.default.div.attrs({
            className: 'flex hc'
        })(r || (r = u`
  font-size: 32px;
  margin-bottom: 10px;
  flex-shrink: 0;
  text-shadow: 0px 3px 3px ${ 0 };
  width: 100%;
`), k.default.Black),
        _y = j.default.div(s || (s = u`
  max-width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`)),
        _z = j.default.div(t || (t = u`
  flex: 1;
  width: 100%;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....');
    let l, m, n, o = p => p;
    var _p = q => {
        const r = ((s, t, u) => {
                let v = !1,
                    w = !1;
                return s < t || (v = !0), u < 5 || (w = !0), {
                    top: !0,
                    right: v,
                    bottom: w,
                    left: !0
                };
            })(q.categoryIndex + 1, q.totalCategories, q.itemIndex + 1),
            s = t => t ? 2 : 0;
        return (0, g.jsx)(_q, {
            onClick: q.disabled ? void 0 : q.onSelect,
            style: {
                borderBottomWidth: s(r.bottom),
                borderTopWidth: s(r.top),
                borderLeftWidth: s(r.left),
                borderRightWidth: s(r.right),
                background: q.disabled ? 'rgba(0,0,0,0.2' : 'transparent',
                cursor: q.disabled ? 'not-allowed' : 'pointer'
            },
            children: (0, g.jsx)(_r, {
                style: {
                    opacity: q.disabled ? 0.5 : 1,
                    pointerEvents: q.disabled ? 'none' : 'auto'
                },
                layoutId: `item-${ q.id }`,
                children: (0, g.jsx)(_s, {
                    layoutId: `item-${ q.id }-amount`,
                    children: (0, h.getMoney)(q.amount)
                })
            })
        });
    };
    const _q = j.default.div.attrs({
            className: 'flex hc vc'
        })(l || (l = o`
  background: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-color: ${ 0 };
  height: 20%;
  user-select: none;
`), i.default.White),
        _r = (0, j.default)(k.motion.div).attrs({
            className: 'maxAll flex-center'
        })(m || (m = o`
  text-shadow: 0px 2px 2px ${ 0 };
  transition: background 0.25s;
  font-size: 26px;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`), i.default.Black),
        _s = (0, j.default)(k.motion.div)(n || (n = o``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let o;
    var _p = (0, k.observer)(() => {
        const {
            players: q,
            pardy: {
                powers: r
            }
        } = h.useContext(l.default), s = (0, m.leaderboardSorter)(q.filteredPlayers), t = s[0], u = s.filter((v, w) => 0 !== w), v = w => {
            if (!w)
                return null;
            const x = r.find(y => y.id === w);
            return x ? x.background : null;
        };
        return (0, g.jsxs)('div', {
            className: 'flex flex-column maxHeight scroll-y',
            style: {
                padding: 50
            },
            children: [
                (0, g.jsx)('div', {
                    className: 'maxWidth flex hc',
                    style: {
                        marginTop: -10,
                        marginBottom: 40
                    },
                    children: t ? (0, g.jsx)(i.default, {
                        size: 'large',
                        place: '1st',
                        name: t.name,
                        amount: t.balance,
                        backgroundColor: v(t.power)
                    }) : null
                }),
                u && u.length ? (0, g.jsx)(_q, {
                    children: u.map((w, x) => (0, g.jsx)(i.default, {
                        size: 'normal',
                        backgroundColor: v(w.power),
                        name: w.name,
                        amount: w.balance,
                        place: (0, n.numberToRank)(x + 2)
                    }, w.id))
                }) : null
            ]
        });
    });
    const _q = j.default.div.attrs({
        className: 'flex wrap hc vc'
    })(o || (o = (r => r)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
  justify-content: center;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    d('.....');
    var m = d('.....');
    let n, o, p, q, r = s => s;
    var _s = t => {
        const u = 'normal' === t.size;
        return (0, g.jsxs)(_t, {
            className: u ? 'light-shadow' : 'medium-shadow',
            style: {
                width: u ? 300 : 600
            },
            children: [
                (0, g.jsx)(_u, {
                    children: t.place
                }),
                (0, g.jsx)(_v, {
                    style: {
                        height: u ? 150 : 200,
                        backgroundColor: t.backgroundColor || 'rgba(0,0,0,0.15)'
                    },
                    children: (0, g.jsx)(l.default, {
                        mode: 'single',
                        text: t.name,
                        noBold: !0
                    })
                }),
                (0, g.jsx)(_w, {
                    children: (0, j.getMoney)(t.amount)
                })
            ]
        });
    };
    const _t = m.default.div(n || (n = r`
  border-radius: 5px;
  border: 2px solid ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  max-width: 100%;
`), h.default.White, k.default.fontFamilyName, i.FontWeights.Bold),
        _u = m.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = r`
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 22px;
  border-bottom: 2px solid ${ 0 };
`), h.default.White),
        _v = m.default.div.attrs({
            className: 'flex hc vc maxWidth'
        })(p || (p = r`
  font-family: 'Londrina Solid', sans-serif;
  padding: 10px;
  text-shadow: #000 3px 3px 2px;
`)),
        _w = m.default.div.attrs({
            className: 'maxWidth'
        })(q || (q = r`
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 22px;
  border-top: 2px solid ${ 0 };
`), h.default.White);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....'),
        j = d('.....');
    let k;
    var _l = m => (0, g.jsxs)(_m, {
        children: [
            (0, g.jsx)(h.default, {
                type: m.screen === j.PardyHomeScreen.board ? 'primary' : 'default',
                onClick: m.setToBoardScreen,
                style: {
                    width: 140,
                    marginRight: 10
                },
                children: 'Board'
            }),
            (0, g.jsx)(h.default, {
                type: m.screen === j.PardyHomeScreen.rankings ? 'primary' : 'default',
                onClick: m.setToRankingScreen,
                style: {
                    width: 140
                },
                children: 'Rankings'
            })
        ]
    });
    const _m = i.default.div.attrs({
        className: 'flex hc vc'
    })(k || (k = (n => n)`
  flex-shrink: 0;
  height: 60px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  z-index: 2;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let v, w, x, y, z, A, B = C => C;
    const C = (0, p.observer)(() => {
            const {
                gameValues: {
                    gameCode: D
                },
                pardy: {
                    screen: E,
                    questionScreen: F,
                    questionStatus: G,
                    currentRound: H
                },
                gameOptions: I
            } = q.useContext(m.default), J = q.useMemo(() => E === n.PardyScreen.home, [E]), K = q.useCallback(() => {
                (0, j.endGame)();
            }, []), L = [{
                    key: 'skip-to-finale',
                    label: 'Skip To Finale',
                    onClick: u.default,
                    disabled: !J
                },
                {
                    key: 'toggle-music',
                    label: I.music ? 'Mute' : 'Enable Music',
                    onClick: () => {
                        const M = !I.music;
                        if (I.music = M, M)
                            if (E === n.PardyScreen.question && F === n.PardyQuestionScreen.question && G === n.PardyQuestionStatus.ask)
                                i.default.pardy.countdown.volume(s.default.countdownVolume);
                            else {
                                const N = E === n.PardyScreen.home,
                                    O = E === n.PardyScreen.answer,
                                    P = H && 'Finale' === H.type,
                                    Q = F === n.PardyQuestionScreen.question && G === n.PardyQuestionStatus.timesUp;
                                (N || O || P || Q) && (P ? i.default.pardy.finaleMusic.volume(s.default.finaleMusicVolume) : i.default.pardy.music.volume(s.default.musicVolume));
                            }
                        else
                            i.default.pardy.music.volume(0), i.default.pardy.countdown.volume(0), i.default.pardy.finaleMusic.volume(0);
                    }
                }
            ];
            return (0, g.jsxs)(_F, {
                children: [
                    (0, g.jsxs)(_G, {
                        children: [
                            'Code: ',
                            D
                        ]
                    }),
                    (0, g.jsx)(_D, {}),
                    (0, g.jsx)(_K, {
                        children: (0, g.jsx)(h.default.Button, {
                            onClick: K,
                            menu: {
                                items: L
                            },
                            children: 'End Game'
                        })
                    })
                ]
            });
        }),
        _D = (0, p.observer)(() => {
            const {
                pardy: E
            } = q.useContext(m.default), F = (() => {
                const {
                    currentRound: G
                } = E;
                if (!G)
                    return null;
                if ('Finale' === G.type)
                    return 'The Finale';
                const H = (0, t.default)();
                return H && H.categoryName && H.amount ? `${ H.categoryName } - ${ (0, j.getMoney)(H.amount) }` : null;
            })(), G = !F || (E.screen === n.PardyScreen.home || E.questionScreen === n.PardyQuestionScreen.finale || E.questionScreen === n.PardyQuestionScreen.preview);
            return (0, g.jsx)(_H, {
                children: (0, g.jsxs)(o.motion.div, {
                    initial: {
                        y: -50
                    },
                    animate: {
                        y: G ? -50 : 0
                    },
                    transition: {
                        duration: 1,
                        ease: 'anticipate'
                    },
                    className: 'maxWidth',
                    children: [
                        (0, g.jsx)(_J, {
                            children: F || ''
                        }),
                        (0, g.jsx)(_I, {
                            children: (0, g.jsx)('img', {
                                src: (0, j.getAssetPath)('pardyLogo.png'),
                                style: {
                                    height: 45
                                }
                            })
                        })
                    ]
                })
            });
        });
    var _E = C;
    const _F = r.default.div.attrs({
            className: 'flex vc'
        })(v || (v = B`
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: ${ 0 };
  padding: 20px;
  box-shadow: ${ 0 };
  flex-shrink: 0;
  z-index: 2;
`), k.default.White, l.default.basic),
        _G = r.default.div(w || (w = B`
  flex-shrink: 0;
  width: ${ 0 }px;
`), 125),
        _H = r.default.div(x || (x = B`
  flex: 1;
  height: ${ 0 }px;
  overflow: hidden;
`), 50),
        _I = r.default.div.attrs({
            className: 'flex-center'
        })(y || (y = B`
  height: ${ 0 }px;
`), 50),
        _J = r.default.div.attrs({
            className: 'flex-center maxWidth'
        })(z || (z = B`
  height: ${ 0 }px;
  font-size: 22px;
  font-weight: 400;
`), 50),
        _K = r.default.div.attrs({
            className: 'flex'
        })(A || (A = B`
  flex-shrink: 0;
  width: ${ 0 }px;
  justify-content: flex-end;
`), 125);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
        musicVolume: 0.25,
        finaleMusicVolume: 0.45,
        countdownVolume: 0.4
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');
    var _h = () => {
        const {
            currentRound: i,
            board: j,
            finaleQuestionId: k
        } = g.default.pardy;
        if ('Finale' === i.type)
            return {
                questionId: k
            };
        const {
            id: l,
            category: m
        } = i.value, n = j.categories.find(o => o.name === m);
        if (!n)
            return null;
        const o = n.items.find(p => p.id === l);
        return o ? {
            categoryItemId: o.id,
            amount: o.amount,
            categoryName: n.name,
            questionId: o.questionId
        } : null;
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    var _i = () => {
        h.default.pardy.currentRound = {
            type: 'Finale',
            value: void 0
        }, h.default.pardy.questionScreen = g.PardyQuestionScreen.finale, h.default.pardy.questionStatus = g.PardyQuestionStatus.preview, h.default.pardy.screen = g.PardyScreen.question;
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    var _o = (0, j.observer)(p => {
        const {
            pardy: q
        } = k.useContext(h.default), r = () => {
            q.questionScreen = i.PardyQuestionScreen.question;
        };
        return q.questionScreen === i.PardyQuestionScreen.preview ? (0, g.jsx)(m.default, {
            setToQuestionScreen: r
        }) : q.questionScreen === i.PardyQuestionScreen.finale ? (0, g.jsx)(n.default, {
            setToQuestionScreen: r
        }) : (0, g.jsx)(l.default, {});
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        s = d('.....');
    let t, u, v = w => w;
    const w = {
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
    var _x = (0, n.observer)(() => {
        const {
            pardy: y
        } = h.useContext(o.default), [z, A] = h.useState(0), [B, C] = h.useState(!1), D = h.useMemo(() => !(0, q.default)().categoryItemId, []);
        h.useEffect(() => {
            y.questionScreen = p.PardyQuestionScreen.question;
            const E = (0, q.default)();
            E.categoryItemId && y.disabledSections.push(E.categoryItemId);
        }, []);
        const E = F => {
            y.questionStatus = p.PardyQuestionStatus.timesUp, F && ((0, s.playSound)(r.default.pardy.complete, {}), r.default.pardy.countdown.fade(r.default.pardy.countdown.volume(), 0, 600));
        };
        return (0, g.jsx)(_y, {
            children: (0, g.jsxs)(_z, {
                initial: w.out,
                animate: B ? w.movingOut : w.in,
                onAnimationComplete: () => {
                    B && (y.screen = p.PardyScreen.answer);
                },
                transition: {
                    duration: 0.7,
                    ease: 'easeOut'
                },
                children: [
                    (0, g.jsx)(j.default, {
                        setToAskScreen: () => y.questionStatus = p.PardyQuestionStatus.ask,
                        setToTimesUpScreen: E,
                        spaceBetweenQuestionAndEdgeOfContainer: z,
                        inFinale: D
                    }),
                    (0, g.jsx)(k.default, {
                        onSpaceBetweenChanged: F => A(F)
                    }),
                    (0, g.jsx)(l.default, {
                        animateOut: () => {
                            C(!0), setTimeout(() => {
                                (0, s.playSound)(r.default.pardy.swoosh, {});
                            }, 200);
                        },
                        spaceBetweenQuestionAndEdgeOfContainer: z,
                        setToTimesUpScreen: E
                    })
                ]
            })
        });
    });
    const _y = i.default.div.attrs({
            className: 'maxWidth maxHeight'
        })(t || (t = v`
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
`)),
        _z = (0, i.default)(m.motion.div).attrs({
            className: 'maxWidth maxHeight flex flex-column'
        })(u || (u = v`
  overflow: hidden;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    var _r = (0, k.observer)(s => {
        const {
            pardy: {
                questionStatus: t
            }
        } = l.useContext(h.default), [u, v] = l.useState(!1), w = x => {
            x && v(!0), s.setToTimesUpScreen(x);
        };
        return (0, g.jsx)(j.AnimateSharedLayout, {
            children: (0, g.jsx)(_s, {
                children: t === i.PardyQuestionStatus.preview ? (0, g.jsx)(o.default, {
                    setToAskScreen: s.setToAskScreen,
                    spaceBetweenQuestionAndEdgeOfContainer: s.spaceBetweenQuestionAndEdgeOfContainer
                }) : t === i.PardyQuestionStatus.timesUp ? (0, g.jsx)(p.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: s.spaceBetweenQuestionAndEdgeOfContainer,
                    everybodyAnswered: u,
                    inFinale: s.inFinale
                }) : t === i.PardyQuestionStatus.ask ? (0, g.jsx)(n.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: s.spaceBetweenQuestionAndEdgeOfContainer,
                    setToTimesUpScreen: w
                }) : null
            })
        });
    });
    const _s = m.default.div.attrs({
        className: 'maxWidth'
    })(q || (q = (t => t)`
  height: 25%;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let q, r, s, t = u => u;
    var _u = (0, l.observer)(v => {
        const {
            pardy: {
                playersAnswered: w,
                playerCount: x
            },
            gameOptions: y
        } = h.useContext(m.default), z = y.modeOptions;
        h.useEffect(() => {
            w === x && x && v.setToTimesUpScreen(!0);
        }, [
            w,
            x
        ]), h.useEffect(() => {
            (0, p.playSound)(o.default.pardy.roundStart, {});
            const A = o.default.pardy.countdown;
            A.stop();
            const B = z.questionDuration,
                C = A.duration() - B - 6 - 0.6;
            A.volume(0), A.seek(C), setTimeout(() => {
                A.play(), A.fade(0, (0, p.musicIsOn)() ? n.default.countdownVolume : 0, 2700);
            }, 600);
        }, []);
        const A = h.useMemo(() => z.questionDuration, []);
        return (0, g.jsx)(_v, {
            children: (0, g.jsxs)(_w, {
                style: {
                    marginTop: v.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [
                    (0, g.jsx)(i.default, {
                        seconds: A,
                        onFinish: v.setToTimesUpScreen
                    }),
                    (0, g.jsxs)(_x, {
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
                            w,
                            '/',
                            x,
                            ' answered'
                        ]
                    })
                ]
            })
        });
    });
    const _v = j.default.div.attrs({
            className: 'maxWidth maxHeight flex vc hc'
        })(q || (q = t``)),
        _w = j.default.div.attrs({
            className: 'flex vc'
        })(r || (r = t`
  justify-content: space-between;
  width: 90%;
  opacity: 0.9;
`)),
        _x = (0, j.default)(k.motion.div)(s || (s = t`
  font-size: 24px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    let l;
    var _m = n => {
        const [o, p] = j.useState(n.seconds);
        return (0, h.useIntervalWhen)(() => {
            o ? (p(q => q - 1), n.onTick && n.onTick()) : n.onFinish();
        }, 1000), (0, g.jsx)(_n, {
            layoutId: 'time-circle',
            transition: {
                duration: 0.5
            },
            style: n.style,
            children: o
        });
    };
    const _n = (0, k.default)(i.motion.div).attrs({
        className: 'flex hc vc'
    })(l || (l = (o => o)`
  height: 70px;
  width: 70px;
  font-size: 32px;
  border: 3px solid;
  border-radius: 50%;
  line-height: 1;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'useIntervalWhen', function() {
        return _h;
    });
    var g = d('.....');

    function _h(i, j, k, l) {
        void 0 === j && (j = 0), void 0 === k && (k = !0), void 0 === l && (l = !1);
        var m = (0, g.useRef)();

        function n() {
            _h.current && _h.current();
        }
        (0, g.useEffect)(function() {
            _h.current = i;
        }), (0, g.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (k) {
                    l && n();
                    var o = window.setInterval(n, j);
                    return function() {
                        window.clearInterval(o);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            k,
            j
        ]);
    }
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....');
    let l;
    var _m = n => (0, g.jsx)(_n, {
        children: (0, g.jsx)(k.default, {
            seconds: 3,
            onFinish: n.setToAskScreen,
            style: {
                marginTop: n.spaceBetweenQuestionAndEdgeOfContainer
            },
            onTick: () => {
                (0, i.playSound)(h.default.pardy.tick, {});
            }
        })
    });
    const _n = j.default.div.attrs({
        className: 'flex maxWidth maxHeight hc vc'
    })(l || (l = (o => o)``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let q, r, s, t = u => u;
    var _u = v => {
        const [w, x] = i.useState(!1);
        return i.useEffect(() => {
            x(!0), setTimeout(() => {
                if ((0, n.musicIsOn)()) {
                    const y = v.inFinale ? o.default.pardy.finaleMusic : o.default.pardy.music;
                    y.fade(y.volume(), v.inFinale ? p.default.finaleMusicVolume : p.default.musicVolume, 1000);
                }
            }, 2500);
        }, []), (0, g.jsx)(_v, {
            children: (0, g.jsxs)(_w, {
                style: {
                    marginTop: v.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [
                    (0, g.jsx)(h.ConfettiContainer, {
                        style: {
                            zIndex: 0
                        },
                        children: (0, g.jsx)(b(k), {
                            active: w,
                            config: h.confettiConfig
                        })
                    }),
                    (0, g.jsx)(_x, {
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
                        children: v.everybodyAnswered ? 'Everybody answered!' : 'Time\'s up!'
                    })
                ]
            })
        });
    };
    const _v = j.default.div.attrs({
            className: 'flex maxWidth maxHeight vc hc'
        })(q || (q = t``)),
        _w = j.default.div(r || (r = t``)),
        _x = (0, j.default)(m.motion.div)(s || (s = t`
  font-size: 36px;
  font-weight: ${ 0 };
`), l.FontWeights.Bold);
}), d.register('.....', function(e, f) {
    a(e.exports, 'PardyQuestionContainer', function() {
        return _t;
    }), a(e.exports, 'PardyQuestionContent', function() {
        return _u;
    }), a(e.exports, 'default', function() {
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
        o = d('.....');
    let p, q, r = s => s;
    var _s = (0, l.observer)(t => {
        const u = m.useRef(),
            [, v] = (0, h.default)(u),
            w = m.useRef(),
            [, x] = (0, h.default)(w),
            y = m.useMemo(o.default, []);
        if (!y)
            return null;
        m.useEffect(() => {
            const z = (v - x) / 2;
            t.onSpaceBetweenChanged(z);
        }, [
            v,
            x
        ]);
        return (0, g.jsx)(_t, {
            ref: u,
            children: (0, g.jsx)(_u, {
                ref: w,
                children: y.text ? y.audio || y.image ? (0, g.jsx)(k.default, {
                    text: y.text,
                    image: y.image,
                    audio: y.audio,
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, g.jsx)(j.default, {
                    text: y.text || 'Question',
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, g.jsx)(i.default, {
                    image: y.image,
                    audio: y.audio,
                    latex: y.latex
                })
            })
        });
    });
    const _t = n.default.div.attrs({
            className: 'flex hc vc'
        })(p || (p = r`
  height: 50%;
  overflow: hidden;
`)),
        _u = n.default.div.attrs({
            className: 'flex hc'
        })(q || (q = r`
  font-size: 48px;
  width: 90%;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.13);
  text-align: center;
  overflow: hidden;
  height: 90%;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    var _i = () => {
        const j = (0, h.default)();
        if (!j)
            return null;
        return g.default.kit.questions.find(k => k._id === j.questionId);
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let o;
    var _p = (0, j.observer)(q => {
        const {
            pardy: {
                questionStatus: r
            }
        } = k.useContext(h.default);
        return (0, g.jsx)(_q, {
            children: r === i.PardyQuestionStatus.ask ? (0, g.jsx)(m.default, {
                spaceBetweenQuestionAndEdgeOfContainer: q.spaceBetweenQuestionAndEdgeOfContainer,
                setToTimesUpScreen: () => q.setToTimesUpScreen(!0)
            }) : r === i.PardyQuestionStatus.timesUp ? (0, g.jsx)(n.default, {
                spaceBetweenQuestionAndEdgeOfContainer: q.spaceBetweenQuestionAndEdgeOfContainer,
                animateOut: q.animateOut
            }) : null
        });
    });
    const _q = l.default.div.attrs({
        className: 'maxWidth flex hc'
    })(o || (o = (r => r)`
  height: 25%;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....');
    let k, l, m = n => n;
    var _n = o => (0, g.jsx)(_o, {
        children: (0, g.jsx)(_p, {
            style: {
                marginBottom: o.spaceBetweenQuestionAndEdgeOfContainer
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
            children: (0, g.jsx)(h.default, {
                onClick: o.setToTimesUpScreen,
                type: 'primary',
                size: 'large',
                children: 'End Round Early'
            })
        })
    });
    const _o = j.default.div.attrs({
            className: 'flex maxWidth maxHeight vc'
        })(k || (k = m`
  justify-content: flex-end;
  width: 90%;
`)),
        _p = (0, j.default)(i.motion.div)(l || (l = m``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....'),
        j = d('.....');
    let k, l, m, n = o => o;
    const o = {
        out: {
            opacity: 0,
            y: 60
        },
        in: {
            opacity: 1,
            y: 0
        }
    };
    var _p = q => (0, g.jsx)(_q, {
        children: (0, g.jsx)(_r, {
            style: {
                marginBottom: q.spaceBetweenQuestionAndEdgeOfContainer
            },
            children: (0, g.jsx)(_s, {
                initial: o.out,
                animate: o.in,
                transition: {
                    duration: 0.7,
                    delay: 1.3
                },
                children: (0, g.jsx)(j.default, {
                    delay: 2.5,
                    duration: 3.1,
                    onLoad: q.animateOut
                })
            })
        })
    });
    const _q = i.default.div.attrs({
            className: 'flex maxWidth maxHeight hc vc'
        })(k || (k = n``)),
        _r = i.default.div(l || (l = n`
  width: 90%;
`)),
        _s = (0, i.default)(h.motion.div).attrs({
            className: 'maxWidth'
        })(m || (m = n``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'),
        i = d('.....');
    let j;
    var _k = l => (0, g.jsx)(_l, {
        style: {
            height: l.height || 15
        },
        children: (0, g.jsx)(h.motion.div, {
            initial: {
                width: 0
            },
            animate: {
                width: '100%'
            },
            transition: {
                delay: l.delay,
                duration: l.duration,
                ease: 'easeInOut'
            },
            onAnimationComplete: l.onLoad,
            style: {
                background: 'rgba(255, 255, 255, 0.7)',
                height: '100%'
            }
        })
    });
    const _l = i.default.div.attrs({
        className: 'maxWidth'
    })(j || (j = (m => m)`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  overflow: hidden;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        r = d('.....');
    let s, t, u, v, w, x, y, z, A = B => B;
    const B = {
            out: {
                opacity: 0,
                y: 30
            },
            in: {
                opacity: 1,
                y: -30
            }
        },
        C = {
            in: {
                opacity: 1,
                y: 0
            },
            out: {
                opacity: 0,
                y: '100%'
            }
        };
    var _D = (0, n.observer)(E => {
        const {
            pardy: F
        } = h.useContext(p.default), [G, H] = h.useState(!1), [I, J] = h.useState(!1), K = h.useMemo(o.default, []);
        h.useEffect(() => {
            F.questionScreen = q.PardyQuestionScreen.preview;
        }, []);
        return K && K.categoryItemId && K.categoryName ? (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(_E, {
                    children: (0, g.jsx)(_F, {
                        layoutId: `item-${ K.categoryItemId }`,
                        transition: {
                            duration: 0.9
                        },
                        children: (0, g.jsxs)(_G, {
                            initial: C.in,
                            animate: I ? C.out : C.in,
                            transition: {
                                delay: 0.3,
                                duration: 0.7
                            },
                            onAnimationComplete: () => {
                                I && E.setToQuestionScreen();
                            },
                            children: [
                                (0, g.jsx)(_I, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: K.categoryName
                                }),
                                (0, g.jsx)(_J, {
                                    layoutId: `item-${ K.categoryItemId }-amount`,
                                    transition: {
                                        duration: 0.9
                                    },
                                    children: (0, l.getMoney)(K.amount)
                                })
                            ]
                        })
                    })
                }),
                (0, g.jsx)(_K, {
                    children: (0, g.jsx)(_L, {
                        initial: B.out,
                        animate: G ? B.out : B.in,
                        transition: {
                            delay: G ? 0 : 0.5,
                            duration: 0.5
                        },
                        children: (0, g.jsx)(m.default, {
                            delay: 1.2,
                            duration: 1.4,
                            onLoad: () => {
                                H(!0), J(!0), setTimeout(() => {
                                    (0, l.playSound)(r.default.pardy.swoosh, {});
                                }, 200);
                            }
                        })
                    })
                })
            ]
        }) : null;
    });
    const _E = j.default.div.attrs({
            className: 'flex hc vc maxWidth maxHeight'
        })(s || (s = A``)),
        _F = (0, j.default)(i.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(t || (t = A`
  background: rgba(0, 0, 0, 0.2);
`)),
        _G = (0, j.default)(i.motion.div).attrs({
            className: 'flex flex-column hc vc maxWidth maxHeight'
        })(u || (u = A``)),
        H = (0, j.default)(i.motion.div)(v || (v = A`
  text-shadow: 0px 5px 5px ${ 0 };
`), k.default.Black),
        _I = (0, j.default)(H)(w || (w = A`
  font-size: 42px;
`)),
        _J = (0, j.default)(H)(x || (x = A`
  font-size: 142px;
`)),
        _K = j.default.div.attrs({
            className: 'maxWidth flex hc'
        })(y || (y = A`
  position: absolute;
  bottom: 0;
  left: 0;
`)),
        _L = (0, j.default)(i.motion.div)(z || (z = A`
  width: 80%;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'ANIMATING_OUT_DURATION', function() {
        return _B;
    }), a(e.exports, 'default', function() {
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
        s = d('.....');
    j = d('.....');
    let t, u, v, w, x, y = z => z;
    const z = {
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
        A = {
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
        _B = 0.7;
    var _C = (0, n.observer)(D => {
        const {
            pardy: E
        } = o.useContext(k.default), [F, G] = o.useState(!1);
        o.useEffect(() => {
            E.questionScreen = l.PardyQuestionScreen.finale;
        }, []), o.useEffect(() => (i.default.pardy.music.fade(i.default.pardy.music.volume(), 0, 1000), setTimeout(() => {
            (0, j.playSound)(i.default.pardy.finaleMusic, {
                volume: (0, j.musicIsOn)() ? q.default.finaleMusicVolume : 0,
                fadeInDuration: 3000
            });
        }, 600), () => {
            i.default.pardy.finaleMusic.fade(i.default.pardy.finaleMusic.volume(), 0, 1500);
        }), []);
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(_D, {
                    initial: z.out,
                    animate: F ? z.movingOut : z.in,
                    transition: {
                        duration: F ? _B : 0.5
                    },
                    onAnimationComplete: () => {
                        F && D.setToQuestionScreen();
                    },
                    children: (0, g.jsxs)(_E, {
                        initial: A.out,
                        animate: F ? A.movingOut : A.in,
                        transition: {
                            duration: F ? _B : 1.4,
                            delay: F ? 0 : 3,
                            ease: 'easeOut'
                        },
                        children: [
                            (0, g.jsx)(_F, {
                                children: 'The Finale'
                            }),
                            (0, g.jsxs)(_G, {
                                children: [
                                    (0, g.jsx)(_H, {
                                        children: 'You will be asked one more question'
                                    }),
                                    (0, g.jsx)(_H, {
                                        children: 'Make your bet on whether or not you\'ll answer correctly'
                                    }),
                                    (0, g.jsx)(_H, {
                                        children: 'Bet as much or as little as you want; the maximum is your current cash amount'
                                    }),
                                    (0, g.jsx)(_H, {
                                        children: 'Powers are disabled for The Finale'
                                    })
                                ]
                            }),
                            (0, g.jsx)(r.default, {
                                exit: () => {
                                    G(!0), setTimeout(() => {
                                        (0, j.playSound)(i.default.pardy.swoosh, {});
                                    }, 200);
                                }
                            })
                        ]
                    })
                }),
                (0, g.jsxs)(g.Fragment, {
                    children: [
                        (0, g.jsx)(s.default, {
                            animatingOut: F
                        }),
                        (0, g.jsx)(s.default, {
                            animatingOut: F
                        }),
                        (0, g.jsx)(s.default, {
                            animatingOut: F
                        }),
                        (0, g.jsx)(s.default, {
                            animatingOut: F
                        })
                    ]
                })
            ]
        });
    });
    const _D = (0, p.default)(m.motion.div).attrs({
            className: 'maxWidth maxHeight scroll-y'
        })(t || (t = y``)),
        _E = (0, p.default)(m.motion.div).attrs({
            className: 'maxWidth flex hc vc flex-column'
        })(u || (u = y`
  min-height: 100%;
  padding: 20px;
  z-index: 3;
`)),
        _F = p.default.div(v || (v = y`
  text-transform: uppercase;
  font-size: 94px;
  font-weight: ${ 0 };
  text-decoration: underline;
  margin-bottom: 20px;
`), h.FontWeights.UltraBold),
        _G = p.default.ul(w || (w = y`
  font-size: 26px;
  font-weight: ${ 0 };
`), h.FontWeights.Normal),
        _H = p.default.li(x || (x = y``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _q;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n, o, p = q => q;
    var _q = (0, k.observer)(r => {
        const {
            pardy: s
        } = l.useContext(j.default);
        return (0, g.jsxs)(_r, {
            children: [
                (0, g.jsxs)(_s, {
                    children: [
                        s.betsPlaced,
                        '/',
                        s.playerCount,
                        ' bets placed'
                    ]
                }),
                (0, g.jsx)(h.default, {
                    onClick: r.exit,
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
    const _r = m.default.div.attrs({
            className: 'maxWidth flex vcc'
        })(n || (n = p`
  max-width: 900px;
  justify-content: space-between;
  margin-top: 40px;
`)),
        _s = m.default.div(o || (o = p`
  font-size: 24px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        o = d('.....');
    let p, q, r = s => s;
    var _s = t => {
        const {
            x: u,
            y: v
        } = _v((0, l.random)(4000, 9000));
        return (0, g.jsx)(_t, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: t.animatingOut ? 0 : 1
            },
            transition: {
                duration: t.animatingOut ? o.ANIMATING_OUT_DURATION : 1.4
            },
            children: (0, g.jsx)(_u, {
                style: {
                    x: u,
                    y: v
                }
            })
        });
    };
    const _t = (0, n.default)(j.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(p || (p = r`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`)),
        _u = (0, n.default)(j.motion.div)(q || (q = r`
  height: 220px;
  width: 220px;
  border-radius: 50%;
  filter: blur(4px);
  background: #fff59d;
  opacity: 0.2;
`)),
        _v = (w = 5000) => {
            const x = (0, k.useMotionValue)(0),
                y = (0, k.useMotionValue)(0),
                z = window.innerWidth,
                A = window.innerHeight,
                B = C => {
                    const D = (0, l.random)(0, z),
                        E = (0, l.random)(0, A);
                    C ? (x.set(D), y.set(E)) : ((0, i.animate)(x, D, {
                        duration: w / 1000,
                        ease: 'easeInOut'
                    }), (0, i.animate)(y, E, {
                        duration: w / 1000,
                        ease: 'easeInOut'
                    }));
                };
            return m.useEffect(() => {
                B(!0), B();
            }, []), (0, h.useIntervalWhen)(B, w), {
                x: x,
                y: y
            };
        };
}), d.register('.....', function(e, f) {
    a(e.exports, 'useMotionValue', function() {
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
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    const s = {
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
    var _t = u => {
        const [v, w] = k.useState(!1), [x, y] = k.useState(0), z = {
            out: {
                background: p = '#388e3c',
                opacity: 0
            },
            in: {
                background: p,
                opacity: 1
            }
        };
        var A;
        return (0, g.jsx)(_u, {
            initial: {
                background: 'rgba(0, 0, 0, 0.2)',
                opacity: 1
            },
            animate: v ? z.out : z.in,
            transition: {
                delay: v ? 0 : 0.2,
                duration: 0.7,
                ease: 'easeOut'
            },
            onAnimationComplete: () => {
                v && u.setToHomeScreen();
            },
            children: (0, g.jsxs)(_v, {
                initial: s.initial,
                animate: v ? s.out : s.in,
                transition: {
                    duration: 0.7,
                    ease: 'easeOut'
                },
                children: [
                    (0, g.jsx)(o.default, {
                        spaceBetweenContentAndEdgeOfContainer: x
                    }),
                    (0, g.jsx)(m.default, {
                        onSpaceBetweenChanged: y
                    }),
                    (0, g.jsx)(n.default, {
                        spaceBetweenContentAndEdgeOfContainer: x,
                        exit: () => {
                            w(!0), setTimeout(() => {
                                (0, i.playSound)(h.default.pardy.swoosh, {});
                            }, 200);
                        }
                    })
                ]
            })
        });
    };
    const _u = (0, l.default)(j.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(p || (p = r`
  overflow: hidden;
`)),
        _v = (0, l.default)(j.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(q || (q = r``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    var _n = o => {
        const p = k.useRef(),
            [, q] = (0, h.default)(p),
            r = k.useRef(),
            [, s] = (0, h.default)(r);
        k.useEffect(() => {
            const t = (q - s) / 2;
            o.onSpaceBetweenChanged(t);
        }, [
            q,
            s
        ]);
        const t = k.useMemo(m.default, []);
        if (!t)
            return null;
        const u = t.answers.find(v => v.correct);
        return (0, g.jsx)(l.PardyQuestionContainer, {
            ref: p,
            children: (0, g.jsx)(l.PardyQuestionContent, {
                ref: r,
                children: u ? u.text ? (0, g.jsx)(i.default, {
                    text: u.text,
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, g.jsx)(j.default, {
                    image: u.image,
                    latex: u.latex
                }) : (0, g.jsx)(i.default, {
                    text: 'No Correct Answer!',
                    noBold: !0
                })
            })
        });
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let o, p, q, r, s, t = u => u;
    var _u = (0, k.observer)(v => {
        const {
            pardy: {
                playerCount: w,
                playersAnsweredCorrectly: x,
                nameOfFirstPlayerToAnswerCorrectly: y,
                board: z,
                disabledSections: A,
                currentRound: B
            }
        } = l.useContext(j.default), C = l.useMemo(() => {
            if ('Finale' === B.type)
                return {
                    text: 'View Final Results',
                    handler: () => {
                        (0, i.endGame)();
                    }
                };
            let D = 0;
            return z.categories.forEach(E => {
                E.items.forEach(() => D += 1);
            }), A.length >= D ? {
                text: 'Continue to The Finale',
                handler: () => {
                    (0, n.default)();
                }
            } : {
                text: 'Continue',
                handler: () => {
                    v.exit();
                }
            };
        }, []);
        return (0, g.jsx)(_v, {
            children: (0, g.jsxs)(_w, {
                style: {
                    marginBottom: v.spaceBetweenContentAndEdgeOfContainer
                },
                children: [
                    (0, g.jsxs)('div', {
                        children: [
                            (0, g.jsxs)(_x, {
                                children: [
                                    x,
                                    '/',
                                    w,
                                    ' answered correctly'
                                ]
                            }),
                            y ? (0, g.jsxs)(_y, {
                                children: [
                                    y,
                                    ' was the first to answer correctly!'
                                ]
                            }) : null
                        ]
                    }),
                    (0, g.jsx)(_z, {
                        children: (0, g.jsx)(h.default, {
                            type: 'primary',
                            size: 'large',
                            style: {
                                width: 170
                            },
                            onClick: C.handler,
                            children: C.text
                        })
                    })
                ]
            })
        });
    });
    const _v = m.default.div.attrs({
            className: 'maxWidth flex vc hc'
        })(o || (o = t`
  height: 25%;
`)),
        _w = m.default.div.attrs({
            className: 'flex'
        })(p || (p = t`
  width: 90%;
  justify-content: space-between;
  align-items: flex-end;
`)),
        _x = m.default.div(q || (q = t`
  font-weight: 400;
  font-size: 22px;
`)),
        _y = m.default.div(r || (r = t`
  font-weight: 300;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
`)),
        _z = m.default.div(s || (s = t``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....');
    let i, j, k, l = m => m;
    var _m = n => (0, g.jsx)(_n, {
        children: (0, g.jsx)(_o, {
            style: {
                marginTop: n.spaceBetweenContentAndEdgeOfContainer
            },
            children: (0, g.jsx)(_p, {
                children: 'Answer:'
            })
        })
    });
    const _n = h.default.div.attrs({
            className: 'maxWidth flex vc hc'
        })(i || (i = l`
  height: 25%;
`)),
        _o = h.default.div(j || (j = l``)),
        _p = h.default.div(k || (k = l`
  font-size: 32px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....');
    let i, j, k = l => l;
    var _l = m => (0, g.jsxs)(_m, {
        children: [
            (0, g.jsx)('div', {
                className: 'area',
                children: (0, g.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, g.jsx)('li', {}),
                        (0, g.jsx)('li', {}),
                        (0, g.jsx)('li', {}),
                        (0, g.jsx)('li', {}),
                        (0, g.jsx)('li', {}),
                        (0, g.jsx)('li', {}),
                        (0, g.jsx)('li', {}),
                        (0, g.jsx)('li', {}),
                        (0, g.jsx)('li', {}),
                        (0, g.jsx)('li', {})
                    ]
                })
            }),
            (0, g.jsx)(_n, {
                children: m.children
            })
        ]
    });
    const _m = h.default.div(i || (i = k`
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
        _n = h.default.div.attrs({
            className: 'maxAll'
        })(j || (j = k`
  position: absolute;
  top: 0;
  left: 0;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        v = d('.....');
    let w, x, y = z => z;
    const z = j.default.div(w || (w = y`
  height: 100vh;
  width: 100%;
  font-family: ${ 0 };
  display: flex;
  animation-duration: 0.5s;
`), h.default.fontFamilyName),
        A = j.default.div.attrs({
            className: 'animated fadeIn'
        })(x || (x = y`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`));
    var _B = (0, o.observer)(() => {
        const {
            ui: C
        } = i.useContext(u.default);
        i.useEffect(() => {
            if ((0, q.musicIsOn)() && (0, q.inDrawMode)() && (0, q.playSound)(r.default.draw.background, {
                    volume: s.DRAW_MODE_BACKGROUND_MUSIC_VOLUME
                }), (0, q.inPardyMode)()) {
                const D = r.default.pardy.music;
                (0, q.playSound)(D, {
                    volume: (0, q.musicIsOn)() ? v.default.musicVolume : 0
                });
            }
            (0, q.inLavaMode)() && (D.backgroundColor = '#ac1900'), (0, q.inImposterMode)() && (D.backgroundColor = '#000a12'), (0, q.inDrawMode)() && (D.backgroundColor = '#f1f2f3');
        }, []);
        const D = i.useMemo(() => (0, q.inPardyMode)() ? t.default : i.Fragment, []);
        return C.showingLavaPreScreen ? (0, g.jsx)(p.default, {}) : (0, g.jsx)(D, {
            children: (0, g.jsxs)(z, {
                children: [
                    (0, g.jsxs)(A, {
                        children: [
                            (0, g.jsx)(l.default, {}),
                            (0, g.jsx)(n.default, {}),
                            (0, g.jsx)(m.default, {})
                        ]
                    }),
                    (0, g.jsx)(k.default, {})
                ]
            })
        });
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....');
    let r, s, t, u, v = w => w;
    const w = (x, y) => {
            const z = x.name.toUpperCase(),
                A = y.name.toUpperCase();
            return z < A ? -1 : z > A ? 1 : 0;
        },
        x = p.default.div(r || (r = v`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3px;
`)),
        y = p.default.img.attrs({
            src: `${ (0, l.getAssetPath)('power-fight.svg') }`
        })(s || (s = v`
  height: 136px;
  margin-bottom: 12px;
  margin-top: 8px;
`)),
        z = p.default.h2(t || (t = v`
  font-size: 44px;
  font-family: 'Product Sans';
  font-weight: bold;
  margin-bottom: 3px;
`)),
        A = p.default.div(u || (u = v`
  display: flex;
  flex-wrap: wrap;
`));
    let B = class extends o.Component {
        render() {
            if (!this.props.gameValues.showBossBattleModal)
                return null;
            const C = this.props.players.filteredPlayers.reverse();
            return (0, i.jsxs)(k.default, {
                open: this.props.gameValues.showBossBattleModal,
                footer: null,
                maskClosable: !1,
                closable: !1,
                keyboard: !1,
                children: [
                    (0, i.jsxs)(x, {
                        children: [
                            (0, i.jsx)(y, {
                                className: 'animated pulse infinite'
                            }),
                            (0, i.jsx)(z, {
                                children: 'Choose The Boss'
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(A, {
                            children: C.sort(w).map(D => (0, i.jsx)(j.default, {
                                'data-id': D.id,
                                style: {
                                    display: 'flex',
                                    fontFamily: m.default.fontFamilyName,
                                    margin: '4px',
                                    fontSize: '17px',
                                    color: 'black'
                                },
                                bodyStyle: {
                                    padding: '10px 24px'
                                },
                                hoverable: !0,
                                onClick: this.handleClick,
                                children: (0, i.jsx)('span', {
                                    children: D.name
                                })
                            }, D.id))
                        })
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'handleClick', C => {
                this.props.gameValues.bossId = C.currentTarget.dataset.id, this.props.gameValues.currentRoute = q.GameStatus.teams;
            });
        }
    };
    B = (0, h.__decorate)([
        (0, n.inject)('engine', 'players', 'gameValues'),
        n.observer
    ], B);
    var _C = B;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let q = class extends k.Component {
        render() {
            return (0, i.jsx)(o.default, {
                theme: {
                    algorithm: p.default.darkAlgorithm,
                    token: {
                        colorBgBase: '#301C56'
                    }
                },
                children: (0, i.jsx)(n.default, {
                    gameCode: this.props.gameValues.gameCode,
                    background: this.getContainerBackground(),
                    color: this.getContainerColor(),
                    height: 220
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'getContainerBackground', () => (0, l.inDrawMode)() ? 'rgba(0,0,0,0.1)' : 'rgba(0, 0, 0, 0.4)'), (0, g.default)(this, 'getContainerColor', () => (0, l.inDrawMode)() ? m.default.Black : m.default.White);
        }
    };
    q = (0, h.__decorate)([
        (0, j.inject)('gameValues'),
        j.observer
    ], q);
    var _r = q;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _w;
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
        o = d('.....'),
        p = d('.....'),
        q = d('.....'),
        r = d('.....');
    let s, t, u, v = w => w;
    var _w = x => {
        const {
            gameCode: y
        } = x, z = () => `${ (0, j.getDomain)() }/join?gc=${ y }`, A = () => {
            b(k)(z()), l.default.success('Game link copied');
        };
        var B, C, D;
        return (0, g.jsxs)(_x, {
            style: {
                background: null !== (B = x.background) && void 0 !== B ? B : 'rgba(48, 28, 86, 0.9)',
                color: null !== (C = x.color) && void 0 !== C ? C : r.default.White,
                height: null !== (D = x.height) && void 0 !== D ? D : 'auto'
            },
            children: [
                (0, g.jsxs)(_y, {
                    children: [
                        'Go to ',
                        (0, g.jsx)('b', {
                            children: window && window.location ? window.location.hostname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0] + '/join' : ''
                        }),
                        ' and enter code'
                    ]
                }),
                x.gameCode ? (0, g.jsx)(m.default, {
                    overlayInnerStyle: {
                        padding: 20
                    },
                    content: (0, g.jsxs)('div', {
                        children: [
                            (0, g.jsx)(n.default, {
                                value: z(),
                                size: 350,
                                bordered: !1
                            }),
                            (0, g.jsx)(p.default, {
                                block: !0,
                                onClick: A,
                                customFontWeight: q.FontWeights.Bold,
                                type: 'success',
                                style: {
                                    marginTop: 11
                                },
                                ariaLabel: 'Copy Join Link',
                                children: 'Copy Join Link'
                            })
                        ]
                    }),
                    children: (0, g.jsx)(_z, {
                        onClick: A,
                        children: y
                    })
                }) : (0, g.jsx)('div', {
                    className: 'flex-center',
                    style: {
                        height: 106,
                        marginTop: 13
                    },
                    children: (0, g.jsx)(o.default, {
                        size: 'large'
                    })
                })
            ]
        });
    };
    const _x = (0, i.default)(h.default).attrs({
            className: 'medium-shadow flex-column flex-center maxWidth'
        })(s || (s = v`
  line-height: 1;
  padding: 25px 40px;
`)),
        _y = i.default.div(t || (t = v`
  font-size: 32px;
`)),
        _z = i.default.div(u || (u = v`
  font-size: 106px;
  margin-top: 13px;
  font-weight: ${ 0 };
  cursor: pointer;
`), q.FontWeights.UltraBold);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');
    d('.....');
    var _h = i => {
        const j = k => {
            k.stopPropagation(), i.onClick && i.onClick(k);
        };
        return (0, g.jsx)('div', {
            style: {
                ...i.style || {},
                pointerEvents: i.disable ? 'none' : 'all'
            },
            className: i.className,
            onMouseDown: j,
            onTouchStart: j,
            children: i.children
        });
    };
}), d.register('.....', function(e, f) {
    var g = d('.....'),
        h = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    e.exports = function(i, j) {
        var k, l, m, n, o, p, q = !1;
        j || (j = {}), k = j.debug || !1;
        try {
            if (m = g(), n = document.createRange(), o = document.getSelection(), (p = document.createElement('span')).textContent = i, p.ariaHidden = 'true', p.style.all = 'unset', p.style.position = 'fixed', p.style.top = 0, p.style.clip = 'rect(0, 0, 0, 0)', p.style.whiteSpace = 'pre', p.style.webkitUserSelect = 'text', p.style.MozUserSelect = 'text', p.style.msUserSelect = 'text', p.style.userSelect = 'text', p.addEventListener('copy', function(r) {
                    if (r.stopPropagation(), j.format)
                        if (r.preventDefault(), void 0 === r.clipboardData) {
                            k && console.warn('unable to use e.clipboardData'), k && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var s = h[j.format] || h.default;
                            window.clipboardData.setData(s, i);
                        } else
                            r.clipboardData.clearData(), r.clipboardData.setData(j.format, i);
                    j.onCopy && (r.preventDefault(), j.onCopy(r.clipboardData));
                }), document.body.appendChild(p), n.selectNodeContents(p), o.addRange(n), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            q = !0;
        } catch (g) {
            k && console.error('unable to copy using execCommand: ', g), k && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(j.format || 'text', i), j.onCopy && j.onCopy(window.clipboardData), q = !0;
            } catch (g) {
                k && console.error('unable to copy using clipboardData: ', g), k && console.error('falling back to prompt'), l = function(r) {
                    var s = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return r.replace(/#{\s*key\s*}/g, s);
                }('message' in j ? j.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(l, i);
            }
        } finally {
            o && ('function' == typeof o.removeRange ? o.removeRange(n) : o.removeAllRanges()), p && document.body.removeChild(p), m();
        }
        return q;
    };
}), d.register('.....', function(e, f) {
    e.exports = function() {
        var g = document.getSelection();
        if (!g.rangeCount)
            return function() {};
        for (var h = document.activeElement, i = [], j = 0; j < g.rangeCount; j++)
            i.push(g.getRangeAt(j));
        switch (h.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                h.blur();
                break;
            default:
                h = null;
        }
        return g.removeAllRanges(),
            function() {
                'Caret' === g.type && g.removeAllRanges(), g.rangeCount || i.forEach(function(k) {
                    g.addRange(k);
                }), h && h.focus();
            };
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    }, function(g) {
        return _r = g;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = function(p, q) {
            var r = {};
            for (var s in p)
                Object.prototype.hasOwnProperty.call(p, s) && q.indexOf(s) < 0 && (r[s] = p[s]);
            if (null != p && 'function' == typeof Object.getOwnPropertySymbols) {
                var t = 0;
                for (s = Object.getOwnPropertySymbols(p); t < s.length; t++)
                    q.indexOf(s[t]) < 0 && Object.prototype.propertyIsEnumerable.call(p, s[t]) && (r[s[t]] = p[s[t]]);
            }
            return r;
        };
    const p = q => {
            let {
                title: r,
                content: s,
                prefixCls: t
            } = q;
            return r || s ? h.createElement(h.Fragment, null, r && h.createElement('div', {
                className: `${ t }-title`
            }, (0, k.getRenderPropValue)(r)), h.createElement('div', {
                className: `${ t }-inner-content`
            }, (0, k.getRenderPropValue)(s))) : null;
        },
        q = h.forwardRef((r, s) => {
            var t, u;
            const {
                prefixCls: v,
                title: w,
                content: x,
                overlayClassName: y,
                placement: z = 'top',
                trigger: A = 'hover',
                mouseEnterDelay: B = 0.1,
                mouseLeaveDelay: C = 0.1,
                overlayStyle: D = {},
                arrowPointAtCenter: E,
                arrow: F
            } = r, G = o(r, [
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
                getPrefixCls: H
            } = h.useContext(i.ConfigContext), I = H('popover', v), [J, K] = (0, n.default)(I), L = H(), M = b(g)(y, K), N = null !== (u = null !== (t = 'boolean' != typeof F && (null == F ? void 0 : F.arrowPointAtCenter)) && void 0 !== t ? t : E) && void 0 !== u && u, O = null != F ? F : {
                arrowPointAtCenter: N
            };
            return J(h.createElement(j.default, Object.assign({
                placement: z,
                arrow: O,
                trigger: A,
                mouseEnterDelay: B,
                mouseLeaveDelay: C,
                overlayStyle: D
            }, G, {
                prefixCls: I,
                overlayClassName: M,
                ref: s,
                overlay: h.createElement(p, {
                    prefixCls: I,
                    title: w,
                    content: x
                }),
                transitionName: (0, l.getTransitionName)(L, 'zoom-big', G.transitionName),
                'data-popover-inject': !0
            })));
        });
    q._InternalPanelDoNotUseOrYouWillBeFired = m.default;
    var _r = q;
}), d.register('.....', function(e, f) {
    a(e.exports, 'getRenderPropValue', function() {
        return d;
    });
    const g = h => h ? 'function' == typeof h ? h() : h : null;
}), d.register('.....', function(e, f) {
    a(e.exports, 'getOverlay', function() {
        return _n;
    }, function(g) {
        return _n = g;
    }), a(e.exports, 'RawPurePanel', function() {
        return _o;
    }, function(g) {
        return _o = g;
    }), a(e.exports, 'default', function() {
        return _w;
    }, function(g) {
        return _w = g;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
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
    const _n = (o, p, q) => {
        if (p || q)
            return g.createElement(g.Fragment, null, p && g.createElement('div', {
                className: `${ o }-title`
            }, (0, l.getRenderPropValue)(p)), g.createElement('div', {
                className: `${ o }-inner-content`
            }, (0, l.getRenderPropValue)(q)));
    };

    function _o(p) {
        const {
            hashId: q,
            prefixCls: r,
            className: s,
            style: t,
            placement: u = 'top',
            title: v,
            content: w,
            children: x
        } = p;
        return g.createElement('div', {
            className: b(h)(q, r, `${ r }-pure`, `${ r }-placement-${ u }`, s),
            style: t
        }, g.createElement(i.Popup, Object.assign({}, p, {
            className: q,
            prefixCls: r
        }), _o || _n(r, v, w)));
    }

    function _w(x) {
        const {
            prefixCls: y
        } = x, z = w(x, ['prefixCls']), {
            getPrefixCls: A
        } = g.useContext(t.ConfigContext), B = A('popover', y), [C, D] = (0, k.default)(B);
        return C(g.createElement(_o, Object.assign({}, z, {
            prefixCls: B,
            hashId: D
        })));
    }
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    const m = n => {
            const {
                componentCls: o,
                popoverBg: p,
                popoverColor: q,
                width: r,
                fontWeightStrong: s,
                popoverPadding: t,
                boxShadowSecondary: u,
                colorTextHeading: v,
                borderRadiusLG: w,
                zIndexPopup: x,
                marginXS: y,
                colorBgElevated: z
            } = n;
            return [{
                    [o]: Object.assign(Object.assign({}, (0, k.resetComponent)(n)), {
                        position: 'absolute',
                        top: 0,
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        zIndex: x,
                        fontWeight: 'normal',
                        whiteSpace: 'normal',
                        textAlign: 'start',
                        cursor: 'auto',
                        userSelect: 'text',
                        '--antd-arrow-background-color': z,
                        '&-rtl': {
                            direction: 'rtl'
                        },
                        '&-hidden': {
                            display: 'none'
                        },
                        [`${ o }-content`]: {
                            position: 'relative'
                        },
                        [`${ o }-inner`]: {
                            backgroundColor: p,
                            backgroundClip: 'padding-box',
                            borderRadius: w,
                            boxShadow: u,
                            padding: t
                        },
                        [`${ o }-title`]: {
                            minWidth: r,
                            marginBottom: y,
                            color: v,
                            fontWeight: s
                        },
                        [`${ o }-inner-content`]: {
                            color: q
                        }
                    })
                },
                (0, l.default)(n, {
                    colorBg: 'var(--antd-arrow-background-color)'
                }),
                {
                    [`${ o }-pure`]: {
                        position: 'relative',
                        maxWidth: 'none',
                        [`${ o }-content`]: {
                            display: 'inline-block'
                        }
                    }
                }
            ];
        },
        n = o => {
            const {
                componentCls: p
            } = o;
            return {
                [p]: j.PresetColors.map(q => {
                    const r = o[`${ q }-6`];
                    return {
                        [`&${ p }-${ q }`]: {
                            '--antd-arrow-background-color': r,
                            [`${ p }-inner`]: {
                                backgroundColor: r
                            },
                            [`${ p }-arrow`]: {
                                background: 'transparent'
                            }
                        }
                    };
                })
            };
        },
        o = p => {
            const {
                componentCls: q,
                lineWidth: r,
                lineType: s,
                colorSplit: t,
                paddingSM: u,
                controlHeight: v,
                fontSize: w,
                lineHeight: x,
                padding: y
            } = p, z = v - Math.round(w * x);
            return {
                [q]: {
                    [`${ q }-inner`]: {
                        padding: 0
                    },
                    [`${ q }-title`]: {
                        margin: 0,
                        padding: `${ z / 2 }px ${ y }px ${ z / 2 - r }px`,
                        borderBottom: `${ r }px ${ s } ${ t }`
                    },
                    [`${ q }-inner-content`]: {
                        padding: `${ u }px ${ y }px`
                    }
                }
            };
        };
    var _p = (0, h.default)('Popover', q => {
        const {
            colorBgElevated: r,
            colorText: s,
            wireframe: t
        } = q, u = (0, i.merge)(q, {
            popoverBg: r,
            popoverColor: s,
            popoverPadding: 12
        });
        return [
            m(u),
            n(u),
            t && o(u),
            (0, g.initZoomMotion)(u, 'zoom-big')
        ];
    }, q => {
        let {
            zIndexPopupBase: r
        } = q;
        return {
            zIndexPopup: r + 30,
            width: 177
        };
    });
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m;
    var _n = o => {
        const p = o.size || 'default',
            q = i.useMemo(() => o.customColor ? o.customColor : o.disabled ? '#546e7a' : 'success' === o.type ? '#2e7d32' : 'danger' === o.type ? '#c62828' : '#3f51b5', [
                o.disabled,
                o.type,
                o.customColor
            ]),
            r = i.useMemo(() => (0, h.darken)(0.1, q), [q]),
            s = i.useMemo(() => 'small' === p || 'default' === p ? 14 : 20, [p]),
            t = i.useMemo(() => 'small' === p ? 6 : 'default' === p ? 8 : 12, [p]),
            u = i.useMemo(() => {
                const v = 'small' === p ? '8px' : '12px';
                return o.customHorizontalPadding ? `${ v } ${ o.customHorizontalPadding }px` : 'small' === p ? `${ v } 24px` : 'default' === p ? `${ v } 28px` : `${ v } 42px`;
            }, [
                p,
                o.customHorizontalPadding
            ]),
            v = i.useMemo(() => 'small' === p ? 41 : 49, [p]),
            w = i.useMemo(() => o.customFontWeight ? o.customFontWeight : 'large' === p ? k.FontWeights.Bold : k.FontWeights.Normal, [
                o.customFontWeight,
                p
            ]),
            x = () => {
                o.disabled || o.onClick && o.onClick();
            };
        return (0, g.jsx)(_o, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: v
            }, o.style || {}),
            children: (0, g.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': o.ariaLabel,
                onClick: o.usePointerDownEvent ? void 0 : x,
                onPointerDown: o.usePointerDownEvent ? x : void 0,
                style: {
                    cursor: o.disabled ? 'not-allowed' : 'pointer',
                    width: o.block ? '100%' : 'auto'
                },
                children: [
                    (0, g.jsx)('span', {
                        className: 'btn-shadow',
                        style: {
                            borderRadius: t
                        }
                    }),
                    (0, g.jsx)('span', {
                        className: 'btn-edge',
                        style: {
                            background: r,
                            borderRadius: t
                        }
                    }),
                    (0, g.jsx)('span', {
                        className: 'btn-front',
                        style: {
                            background: q,
                            fontSize: s,
                            borderRadius: t,
                            padding: u,
                            fontWeight: w
                        },
                        children: o.children
                    })
                ]
            })
        });
    };
    const _o = j.default.div.attrs({
        className: 'flex'
    })(m || (m = (p => p)`
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
`), l.default.White);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        v = d('.....'),
        w = d('.....');
    let x;
    const y = n.default.div(x || (x = (z => z)`
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
`), z => z.background, z => z.color);
    let z = class extends m.Component {
        render() {
            const A = (() => {
                const {
                    goal: {
                        type: B
                    }
                } = this.props.gameOptions;
                return (0, k.inThanosMode)() || (0, k.inZombiesVsHumansMode)() || (0, k.inLavaMode)() ? r.default : (0, k.inImposterMode)() ? u.default : (0, k.inDrawMode)() ? t.default : (0, k.inPardyMode)() ? v.default : B === o.GameGoal.time ? s.default : B === o.GameGoal.race ? v.default : B === o.GameGoal.allIn ? w.default : r.default;
            })();
            return (0, i.jsxs)(y, {
                background: this.getContainerBackground(),
                color: this.getContainerColor(),
                children: [
                    (0, i.jsx)(A, {
                        style: {
                            marginRight: 7
                        }
                    }),
                    (0, i.jsx)(j.default, {
                        text: this.getMessage()
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'getContainerBackground', () => (0, k.inDrawMode)() ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.4)'), (0, g.default)(this, 'getContainerColor', () => (0, k.inDrawMode)() ? q.default.Black : q.default.White), (0, g.default)(this, 'getNoun', A => {
                let B = 'player';
                return (0, k.inTeamMode)() && (B = 'team'), A && (B += 's'), B;
            }), (0, g.default)(this, 'getMessage', () => {
                const A = this.props.gameOptions.goal,
                    {
                        type: B,
                        value: C
                    } = A;
                return (0, k.inThanosMode)() ? 'Be the first to acquire all 6 Infinity Stones!' : (0, k.inZombiesVsHumansMode)() ? 'Be the last team to survive!' : (0, k.inLavaMode)() ? 'Work together to stay above the lava as long as you can!' : (0, k.inImposterMode)() ? p.imposterStrings.goal : (0, k.inDrawMode)() ? 'Guess student drawings to earn the most points!' : (0, k.inPardyMode)() ? 'Answer questions correctly & choose the right power to come out on top!' : B === o.GameGoal.time ? `Try to make as much money as you can in ${ (0, k.numberWithCommas)(C) } ${ (0, k.plural)('minute', C) }!` : B === o.GameGoal.race ? `The first ${ this.getNoun() } to earn ${ (0, k.getMoney)(C) } wins!` : B === o.GameGoal.allIn ? `The game ends once the combined balance of all ${ this.getNoun(!0) } reaches ${ (0, k.getMoney)(C) }!` : '';
            });
        }
    };
    z = (0, h.__decorate)([
        (0, l.inject)('gameOptions'),
        l.observer
    ], z);
    var _A = z;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'CheckOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'ClockCircleOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'HighlightOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M957.6 507.4L603.2 158.2a7.9 7.9 0 00-11.2 0L353.3 393.4a8.03 8.03 0 00-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 00-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0011.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0011.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z'
                }
            }]
        },
        name: 'highlight',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'RocketOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z'
                }
            }]
        },
        name: 'rocket',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'UsergroupAddOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        p = d('.....');
    let q, r, s, t = u => u;
    const u = l.default.div.attrs({
            className: 'scroll-y'
        })(q || (q = t`
  flex: 1;
  min-height: 0;
  color: ${ 0 };
`), v => v.color),
        v = l.default.div(r || (r = t`
  width: 100%;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 10px;
`)),
        w = l.default.div(s || (s = t`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 15px;
`));
    let _x = class extends k.Component {
        render() {
            return (0, i.jsx)(u, {
                color: this.getContainerColor(),
                children: (0, i.jsxs)(v, {
                    children: [
                        (0, i.jsx)(n.default, {
                            amountOfPlayers: this.props.players.filteredPlayers.length
                        }),
                        (0, i.jsx)(w, {
                            children: this.props.players.filteredPlayers.reverse().map(y => (0, i.jsx)(m.default, {
                                player: y
                            }, y.id))
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'getContainerColor', () => (0, p.inDrawMode)() ? o.default.Black : o.default.White);
        }
    };
    _x = (0, h.__decorate)([
        (0, j.inject)('players'),
        j.observer
    ], _x);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
`), q => q.showBorder ? '2px solid' : 'none', l.default.normal);
    let q = class extends n.Component {
        render() {
            const {
                player: r
            } = this.props;
            return (0, i.jsx)(p, {
                onClick: this.banPlayer,
                showBorder: this.shouldShowBorder,
                children: (0, i.jsx)(j.default, {
                    title: 'Remove from Game',
                    children: r.name
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'shouldShowBorder', (0, k.inDrawMode)()), (0, g.default)(this, 'banPlayer', () => (0, k.banPlayer)(this.props.player.id));
        }
    };
    q = (0, h.__decorate)([
        (0, m.inject)('kit', 'gameOptions'),
        m.observer
    ], q);
    var _r = q;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m, n, o = p => p;
    const p = k.default.div(m || (m = o`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`)),
        q = k.default.div(n || (n = o`
  ${ 0 };
  font-size: 28px;
`), i.default.black);
    var _r = s => {
        const {
            amountOfPlayers: t
        } = s, u = j.useMemo(() => (0, h.inPardyMode)() ? 'contestant' : 'player', []);
        return (0, g.jsxs)(p, {
            children: [
                (0, g.jsx)(q, {
                    children: `${ t } ${ (0, h.plural)(u, t) }`
                }),
                (0, g.jsx)(l.default, {})
            ]
        });
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let s, t, u = v => v;
    const v = q.default.div(s || (s = u`
  display: flex;
  align-items: center;
`)),
        w = q.default.div(t || (t = u`
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
`), x => x.disabled ? k.default.DisabledGray : x.customColor || k.default.SuccessGreen, k.default.White, l.default.black, m.default.basic, x => x.disabled ? 'not-allowed' : 'pointer', x => x.disabled ? k.default.DisabledGray : (0, o.lighten)(0.1, x.customColor || k.default.SuccessGreen));
    let x = class extends p.Component {
        render() {
            const y = this.getButtonInfo();
            let z = () => null;
            return y.disabled || (z = this.handleClick), (0, i.jsx)(v, {
                children: (0, i.jsx)(w, {
                    onClick: z,
                    disabled: y.disabled,
                    children: y.text
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'playerCount', () => this.props.players.filteredPlayers.length), (0, g.default)(this, 'handleClickCallback', () => {
                !(0, j.inBossBattleMode)() || this.props.onTeamScreen ? !(0, j.inTeamMode)() || this.props.onTeamScreen ? (0, j.inBossBattleMode)() ? this.props.ui.showingBossPreScreen = !0 : (0, j.inZombiesVsHumansMode)() ? this.props.ui.showingHumansVsZombiesPreScreen = !0 : (0, j.inLavaMode)() ? this.props.ui.showingLavaPreScreen = !0 : this.props.gameValues.currentRoute = r.GameStatus.gameplay : this.props.gameValues.currentRoute = r.GameStatus.teams : this.props.gameValues.showBossBattleModal = !this.props.gameValues.showBossBattleModal;
            }), (0, g.default)(this, 'handleClick', () => {
                this.handleClickCallback();
            }), (0, g.default)(this, 'getButtonInfo', () => {
                const y = this.playerCount(),
                    z = this.props.gameOptions;
                let A = 'player';
                if ((0, j.inPardyMode)() && (A = 'contestant'), (0, j.inBossBattleMode)() || (0, j.inZombiesVsHumansMode)()) {
                    const B = ((0, j.inBossBattleMode)() ? 3 : 2) - y;
                    return B > 0 && (0, j.inProduction)() ? {
                        disabled: !0,
                        text: `${ B } more ${ (0, j.plural)(A, B) } needed`
                    } : this.props.onTeamScreen ? {
                        disabled: !1,
                        text: 'Start Game'
                    } : {
                        disabled: !1,
                        text: 'Next'
                    };
                }
                if ((0, j.inImposterMode)()) {
                    const C = Math.max(3, 2 * B.modeOptions.numberOfImposters) - y;
                    if (C > 0 && (0, j.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ C } more ${ (0, j.plural)(A, C) } needed`
                        };
                }
                if ((0, j.inDrawMode)()) {
                    const D = 2 - y;
                    if (D > 0 && (0, j.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ D } more ${ (0, j.plural)(A, D) } needed`
                        };
                }
                if ((0, j.inThanosMode)()) {
                    const E = 2 - y;
                    if (E > 0 && (0, j.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ E } more ${ (0, j.plural)(A, E) } needed`
                        };
                }
                if ((0, j.inTeamMode)() && !this.props.onTeamScreen) {
                    const F = 2 * (E.modeOptions.playersPerTeam || 4) - y;
                    return F > 0 && (0, j.inProduction)() ? {
                        disabled: !0,
                        text: `${ F } more ${ (0, j.plural)(A, F) } needed`
                    } : {
                        disabled: !1,
                        text: 'Make Teams'
                    };
                }
                return {
                    disabled: 0 === y && (0, j.inProduction)(),
                    text: 'Start Game'
                };
            });
        }
    };
    x = (0, h.__decorate)([
        (0, n.inject)('gameOptions', 'gameValues', 'players', 'kit', 'ui'),
        n.observer
    ], x);
    var _y = x;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let p, q, r, s = t => t;
    let t = class extends l.Component {
        componentDidMount() {
            (0, o.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), j.default.lava.pantherShort.unload(), j.default.lava.pantherShort.load(), j.default.lava.pantherShort.on('load', () => {
                this.startGame(), j.default.lava.pantherShort.play();
            }), j.default.lava.pantherShort.on('loaderror', this.startGame), j.default.lava.pantherShort.on('playerror', this.startGame);
        }
        render() {
            return (0, i.jsx)(_v, {
                children: (0, i.jsx)(_w, {
                    children: (0, i.jsx)(_x, {
                        children: this.state.content
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                content: ''
            }), (0, g.default)(this, 'getStages', () => [{
                    content: '',
                    delay: 697
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'The Lava is Rising!'
                    }),
                    delay: 3200
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'Work together to keep your building above the lava'
                    }),
                    delay: 3200
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'Purchase builds in the shop'
                    }),
                    delay: 3200
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'Survive as long as you can!'
                    }),
                    delay: 2500
                },
                {
                    content: (0, i.jsx)('div', {
                        className: 'animated zoomInDown',
                        style: {
                            zoom: 1.4
                        },
                        children: 'The Floor Is Lava!'
                    }),
                    delay: 5000
                }
            ]), (0, g.default)(this, 'setStage', u => {
                const v = this.getStages()[u];
                if (!v)
                    return this.props.gameValues.currentRoute = n.GameStatus.gameplay, void(this.props.ui.showingLavaPreScreen = !1);
                this.setState({
                    content: v.content
                }), setTimeout(() => this.setStage(u + 1), v.delay);
            }), (0, g.default)(this, 'startGame', () => {
                this.setStage(0);
            });
        }
    };
    t = (0, h.__decorate)([
        (0, k.inject)('gameValues', 'ui'),
        k.observer
    ], t);
    var _u = t;
    const _v = m.default.div(p || (p = s`
  background: linear-gradient(182deg, #c86300, #dd3725);
  background-size: 400% 400%;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`)),
        _w = m.default.div(q || (q = s`
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
        _x = m.default.div(r || (r = s`
  max-width: 800px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'Container', function() {
        return _y;
    }), a(e.exports, 'default', function() {
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
        s = d('.....');
    let t, u, v = w => w;
    const w = x => new Promise(y => setTimeout(() => y(), x)),
        x = y => {
            let z = '';
            return y.forEach((A, B) => {
                z += A, B + 1 !== y.length && (z += ', ');
            }), z;
        },
        _y = q.default.div(t || (t = v`
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
`), l.default.Black, l.default.White, m.default.normal),
        z = q.default.div(u || (u = v`
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
    let A;
    var B;
    (B = A || (A = {})).countdown = 'Countdown', B.results = 'Results', B.final = 'Final';
    let C = class extends p.Component {
        componentDidMount() {
            j.default.thanos.thanos.stop(), this.props.gameValues.currentRoute = r.GameStatus.results, j.default.eventBoom.play();
            let D = !1;
            const E = this.props.gameValues.thanosValues.showAt,
                F = setInterval(() => {
                    const G = Math.round((E - Date.now()) / 1000);
                    if (G <= 0)
                        return this.showResults(), clearInterval(F);
                    8 !== G || D || (D = !0, j.default.suspense.play()), this.setState({
                        secondsLeft: G
                    });
                }, 200);
        }
        render() {
            return (0, i.jsx)(_y, {
                children: (0, i.jsx)(z, {
                    children: this.getContent()
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                stage: A.countdown,
                secondsLeft: 0,
                survivesResult: null
            }), (0, g.default)(this, 'getContent', () => this.state.stage === A.results ? (0, i.jsx)(s.default, {
                ...this.state.survivesResult
            }, this.state.survivesResult.id + '-parent') : this.state.stage === A.countdown ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        style: {
                            fontSize: 25
                        },
                        children: 'The snap is about to happen...'
                    }),
                    (0, i.jsxs)('div', {
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
            }) : this.state.stage === A.final ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('img', {
                        src: (0, k.getAssetPath)('gauntlet.svg'),
                        style: {
                            height: 121
                        },
                        className: 'animated pulse infinite'
                    }),
                    (0, i.jsxs)('div', {
                        style: {
                            fontSize: 29
                        },
                        children: [
                            (0, i.jsx)('span', {
                                style: {
                                    color: 'gold'
                                },
                                children: 'Winner:'
                            }),
                            ' ',
                            (0, i.jsx)('span', {
                                style: {
                                    fontWeight: 900
                                },
                                children: this.props.gameValues.thanosValues.winner.name
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        style: {
                            height: 6
                        }
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)('div', {
                                style: {
                                    maxWidth: 460
                                },
                                children: [
                                    (0, i.jsx)('b', {
                                        style: {
                                            color: '#a5d6a7'
                                        },
                                        children: 'Survived The Snap:'
                                    }),
                                    ` ${ x(this.props.gameValues.thanosValues.saved.map(D => D.name)) }`
                                ]
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    height: 12
                                }
                            }),
                            (0, i.jsxs)('div', {
                                style: {
                                    maxWidth: 460
                                },
                                children: [
                                    (0, i.jsx)('b', {
                                        style: {
                                            color: '#ef9a9a'
                                        },
                                        children: 'Snapped:'
                                    }),
                                    ` ${ x(this.props.gameValues.thanosValues.snapped.map(D => D.name)) }`
                                ]
                            })
                        ]
                    })
                ]
            }) : null), (0, g.default)(this, 'showResults', async () => {
                const D = [];
                this.props.gameValues.thanosValues.saved.forEach(E => D.push({
                    survives: !0,
                    id: E.id,
                    name: E.name
                })), this.props.gameValues.thanosValues.snapped.forEach(E => D.push({
                    survives: !1,
                    id: E.id,
                    name: E.name
                }));
                const E = (0, n.shuffle)(D);
                for (let F = 0; F < E.length; F++)
                    0 === F && j.default.eventBoom.play(), this.setState({
                        survivesResult: E[F],
                        stage: A.results
                    }), await w(4000);
                j.default.eventBoom.play(), this.setState({
                    stage: A.final
                });
            });
        }
    };
    C = (0, h.__decorate)([(0, o.inject)('gameValues')], C);
    var _D = C;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    class k extends j.Component {
        componentDidMount() {
            this.props.survives ? setTimeout(() => {
                i.default.thanos.successDing.play(), this.setState({
                    showSurvived: !0
                });
            }, 1200) : setTimeout(() => {
                this.setState({
                    startHide: !0
                }), i.default.thanos.wind.play();
            }, 1400), setTimeout(() => {
                this.props.survives || this.setState({
                    show: !1
                });
            }, 3700);
        }
        render() {
            return this.state.show ? (0, h.jsxs)('div', {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    animationDelay: '0.5s',
                    animationDuration: this.props.survives ? '0.3s' : this.state.startHide ? '2s' : '0.3s'
                },
                className: 'animated ' + (this.props.survives ? 'fadeIn' : this.state.startHide ? 'fadeOut' : 'fadeIn'),
                children: [
                    (0, h.jsx)('div', {
                        style: {
                            fontSize: 65,
                            fontWeight: 900
                        },
                        children: this.props.name
                    }),
                    (0, h.jsx)('div', {
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
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                showSurvived: !1,
                startHide: !1,
                show: !0
            });
        }
    }
    var _l = k;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        x = d('.....');
    let y;
    const z = p.default.div(y || (y = (A => A)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${ 0 };
`), l.default.normal);
    let A = class extends o.Component {
        componentDidMount() {
            (0, m.when)(() => !!this.props.players.finalResults, () => {
                this.setState({
                    show: !0
                }), (0, k.inThanosMode)() || (0, k.inBossBattleMode)() || (0, k.inZombiesVsHumansMode)() || (0, k.inLavaMode)() || (0, k.inImposterMode)() || (0, k.inDrawMode)() || (0, k.inPardyMode)() || j.default.winner.play();
            });
        }
        render() {
            return this.state.show ? (0, k.inLavaMode)() ? (0, i.jsx)(u.default, {}) : (0, i.jsx)(z, {
                children: this.getContent()
            }) : (0, i.jsx)(z, {});
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                show: !1
            }), (0, g.default)(this, 'getContent', B => (0, k.inBossBattleMode)() && !B ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(q.default, {
                    contentWhenComplete: this.getContent(!0)
                })
            }) : (0, k.inZombiesVsHumansMode)() ? (0, i.jsx)(r.default, {}) : (0, k.inImposterMode)() ? (0, i.jsx)(v.default, {}) : (0, k.inDrawMode)() ? (0, i.jsx)(w.default, {}) : (0, k.inPardyMode)() ? (0, i.jsx)(x.default, {}) : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.default, {}),
                    (0, i.jsx)(t.default, {})
                ]
            }));
        }
    };
    A = (0, h.__decorate)([(0, n.inject)('players')], A);
    var _B = A;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let p;
    const q = 'The Boss',
        r = s => (0, i.jsx)('div', {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: s.backgroundColor,
                padding: 35,
                boxSizing: 'border-box',
                animationDuration: '12s',
                animationDelay: '3s',
                flexDirection: 'column'
            },
            className: 'animated fadeIn',
            children: s.children
        });
    let s = class extends m.Component {
        componentDidMount() {
            (0, o.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
            const t = j.default.eventBoom;
            t.volume(1), t.play(), t.on('play', this.handlePlay), t.on('loaderror', this.handlePlay), t.on('playerror', this.handlePlay);
        }
        render() {
            return this.state.showFinalContent ? this.props.contentWhenComplete : (0, i.jsx)(_u, {
                children: this.getContent()
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                showContent: !1,
                showFinalContent: !1
            }), (0, g.default)(this, 'handlePlay', () => {
                setTimeout(() => {
                    this.setState({
                        showContent: !0
                    });
                    (this.bossWon() ? j.default.bossBattle.darkAmbience : j.default.bossBattle.award).play(), setTimeout(() => {
                        this.setState({
                            showFinalContent: !0
                        });
                    }, 15000);
                }, 2000);
            }), (0, g.default)(this, 'getContent', () => this.state.showContent ? this.bossWon() ? (0, i.jsxs)(r, {
                backgroundColor: '#424242',
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            this.getBossName(),
                            ' Wins!'
                        ]
                    }),
                    (0, i.jsx)('div', {
                        style: {
                            fontSize: 58
                        },
                        children: 'The Challengers Defeated!'
                    })
                ]
            }) : (0, i.jsxs)(r, {
                backgroundColor: '#2e7d32',
                children: [
                    ' ',
                    (0, i.jsx)('div', {
                        children: 'The Challengers Win!'
                    }),
                    (0, i.jsxs)('div', {
                        style: {
                            fontSize: 58
                        },
                        children: [
                            this.getBossName(),
                            ' Defeated!'
                        ]
                    })
                ]
            }) : null), (0, g.default)(this, 'getBossName', () => {
                let t = 'The Boss';
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const u = this.props.players.teams.find(v => v.id === q);
                    u && u.players[0] && (t = u.players[0]);
                }
                return t;
            }), (0, g.default)(this, 'bossWon', () => {
                let t = !0;
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const u = this.props.players.teams.find(v => v.id === q);
                    if (u) {
                        const v = u.balance,
                            w = this.props.players.teams.find(x => x.id !== q);
                        w && w.balance > v && (t = !1);
                    }
                }
                return t;
            });
        }
    };
    s = (0, h.__decorate)([
        (0, l.inject)('players'),
        l.observer
    ], s);
    var _t = s;
    const _u = n.default.div(p || (p = (v => v)`
  height: 100%;
  width: 100%;
  background: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${ 0 };
  font-size: 72px;
  text-align: center;
`), k.default.Black, '\'Bowlby One SC\', cursive');
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    }), a(e.exports, 'BackgroundMove', function() {
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
    let s, t, u, v = w => w;
    let w = class extends n.Component {
        componentDidMount() {
            (0, r.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), l.default.boom.play(), setTimeout(() => {
                l.default.fanfare.play();
            }, 8000);
        }
        render() {
            const x = this.props.gameValues.defendingHomebaseResults;
            return x ? (0, h.jsx)(p.Container, {
                children: (0, h.jsx)(_z, {
                    className: 'animated fadeIn',
                    style: {
                        animationDuration: '12s',
                        animationDelay: '8s'
                    },
                    children: (0, h.jsxs)(_A, {
                        children: [
                            (0, h.jsx)(j.default, {}),
                            (0, h.jsxs)('div', {
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
                                    (0, h.jsx)('div', {
                                        style: {
                                            fontSize: 40,
                                            opacity: 0.7
                                        },
                                        children: (0, h.jsx)(k.default, {
                                            text: `${ x.loser.name } Defeated!`
                                        })
                                    }),
                                    (0, h.jsx)('img', {
                                        src: (0, q.getImage)(x.winner.id),
                                        style: {
                                            height: 150,
                                            marginTop: 20
                                        },
                                        className: 'animated pulse infinite'
                                    }),
                                    (0, h.jsx)('div', {
                                        style: {
                                            fontSize: 91
                                        },
                                        children: (0, h.jsx)(k.default, {
                                            text: `${ x.winner.name } Win!`
                                        })
                                    }),
                                    (0, h.jsxs)('div', {
                                        style: {
                                            fontSize: 20
                                        },
                                        children: [
                                            (0, h.jsx)(k.default, {
                                                text: 'Congratulations'
                                            }),
                                            ' ',
                                            (0, i.getTeamPlayerNames)(x.winnerPlayerNames),
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
    w = (0, g.__decorate)([
        (0, m.inject)('gameValues'),
        m.observer
    ], w);
    var _x = w;
    const _y = (0, o.keyframes)(s || (s = v`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`)),
        _z = o.default.div(t || (t = v`
  font-family: ${ 0 };
  height: 100%;
  width: 100%;
`), '\'Bowlby One SC\', cursive'),
        _A = o.default.div(u || (u = v`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(270deg, #020a29, #087d17, #b67509);
  background-size: 600% 600%;
  animation: ${ 0 } 21s ease infinite;
  text-align: center;
`), _y);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        u = d('.....'),
        v = d('.....');
    let w, x, y, z = A => A;
    const A = u.default.div(w || (w = z`
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
`), v.default.White, r.default.basic, q.default.bold),
        B = u.default.div(x || (x = z`
  width: 33% !important;
  ${ 0 };
`), C => C.customCSS ? C.customCSS : null),
        C = u.default.div(y || (y = z`
  font-size: 32px;
`));
    let D = class extends t.Component {
        render() {
            return (0, i.jsxs)(A, {
                children: [
                    (0, i.jsx)(B, {
                        style: {
                            textAlign: 'left'
                        },
                        children: this.props.gameOptions.clapping && !(0, p.inImposterMode)() ? (0, i.jsxs)(C, {
                            children: [
                                (0, n.getClappingEmoji)(),
                                ' ',
                                (0, p.numberWithCommas)(this.props.gameValues.clapCount)
                            ]
                        }) : (0, i.jsx)('div', {})
                    }),
                    this.props.hideLogo ? (0, i.jsx)('div', {}) : (0, p.inPardyMode)() ? (0, i.jsx)('img', {
                        src: (0, p.getAssetPath)('pardyLogo.png'),
                        style: {
                            height: 45
                        }
                    }) : (0, i.jsx)('img', {
                        src: '/client/img/svgLogoWhite.svg',
                        style: {
                            height: 41
                        }
                    }),
                    (0, i.jsx)(B, {
                        customCSS: '\n            display: flex;\n            justify-content: flex-end;',
                        children: (0, i.jsxs)('div', {
                            style: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                this.props.gameValues.reportId ? (0, i.jsx)(m.default, {
                                    onClick: this.openReport,
                                    icon: (0, i.jsx)(l.default, {}),
                                    size: 'large',
                                    type: 'primary',
                                    style: {
                                        marginRight: 10
                                    },
                                    children: 'View Report'
                                }) : null,
                                (0, p.inDrawMode)() && (0, i.jsx)(m.default, {
                                    icon: (0, i.jsx)(j.default, {}),
                                    size: 'large',
                                    type: 'primary',
                                    onClick: this.openDrawingModal,
                                    style: {
                                        marginRight: 10
                                    },
                                    children: 'View Drawings'
                                }),
                                (0, i.jsx)(m.default, {
                                    onClick: this.playAgain,
                                    loading: this.state.loadingPlayAgain,
                                    icon: (0, i.jsx)(k.default, {}),
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
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                loadingPlayAgain: !1
            }), (0, g.default)(this, 'openDrawingModal', () => {
                this.props.draw.drawingsModalOpen = !0;
            }), (0, g.default)(this, 'openReport', () => {
                window.open('/report/' + this.props.gameValues.reportId);
            }), (0, g.default)(this, 'playAgain', () => {
                this.state.loadingPlayAgain || (this.setState({
                    loadingPlayAgain: !0
                }), (0, p.send)(o.default.playAgain), setTimeout(() => {
                    this.setState({
                        loadingPlayAgain: !1
                    });
                }, 5000));
            });
        }
    };
    D = (0, h.__decorate)([
        (0, s.inject)('gameOptions', 'gameValues', 'draw'),
        s.observer
    ], D);
    var _E = D;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'RedoOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z'
                }
            }]
        },
        name: 'redo',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    k.displayName = 'SolutionOutlined';
    var _l = h.forwardRef(k);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
                    d: 'M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z'
                }
            }]
        },
        name: 'solution',
        theme: 'outlined'
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'getClappingEmoji', function() {
        return d;
    });
    const g = () => '\uD83D\uDC4F';
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let o, p, q = r => r;
    const r = n.default.div.attrs({
            className: 'scroll-y'
        })(o || (o = q`
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: center;
  min-height: 0;
`)),
        s = n.default.div(p || (p = q`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  max-width: 100vw;
`));
    let t = class extends m.Component {
        render() {
            const u = (0, k.inTeamMode)(),
                v = (0, k.inBossBattleMode)(),
                w = (0, i.leaderboardSorter)(this.props.players.finalResults);
            let x, y, z;
            return w[0] && (x = w[0]), w[1] && (y = w[1]), w[2] && (z = w[2]), (0, h.jsxs)(r, {
                children: [
                    !v && (0, h.jsxs)(s, {
                        children: [
                            z ? (0, h.jsx)(j.default, {
                                snapshot: z,
                                isPlayer: !u,
                                position: 3,
                                themes: this.props.gameValues.availableThemes
                            }) : null,
                            x ? (0, h.jsx)(j.default, {
                                snapshot: x,
                                isPlayer: !u,
                                position: 1,
                                themes: this.props.gameValues.availableThemes
                            }) : null,
                            y ? (0, h.jsx)(j.default, {
                                snapshot: y,
                                isPlayer: !u,
                                position: 2,
                                themes: this.props.gameValues.availableThemes
                            }) : null
                        ]
                    }),
                    (0, h.jsx)(i.default, {
                        customWidth: '881px',
                        customMaxWidth: '90%',
                        blockScroll: !0,
                        hideTop3: !v,
                        showHidden: !0,
                        overflow: !0,
                        customClassName: v ? 'animated zoomInDown' : 'animated fadeIn'
                    })
                ]
            });
        }
    };
    t = (0, g.__decorate)([
        (0, l.inject)('players', 'gameValues', 'gameOptions'),
        l.observer
    ], t);
    var _u = t;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        u = d('.....');
    let v, w, x, y, z = A => A,
        A = class extends j.Component {
            componentDidMount() {
                (0, t.playSound)(r.default.boom, {
                    volume: 0.6
                }), setTimeout(() => {
                    (0, t.playSound)(r.default.lava.egyptFanfare, {
                        volume: 0.5
                    });
                }, 5500), setTimeout(() => {
                    this.setState({
                        stage: 1
                    });
                }, 6000), this.props.gameOptions.music && setTimeout(() => {
                    r.default.lava.panther.fade(0, 0.25, 1000);
                }, 16000);
            }
            render() {
                const {
                    lava: B
                } = this.props.entities;
                return 0 !== this.state.stage && B ? (0, i.jsx)(_C, {
                    children: (0, i.jsx)(_D, {
                        children: (0, i.jsxs)(_E, {
                            children: [
                                (0, i.jsx)('div', {
                                    className: 'maxWidth',
                                    style: {
                                        flexShrink: 0,
                                        zIndex: 2
                                    },
                                    children: (0, i.jsx)(k.default, {})
                                }),
                                (0, i.jsxs)(_F, {
                                    children: [
                                        (0, i.jsx)(m.default, {
                                            seconds: B.secondsLasted
                                        }),
                                        (0, i.jsx)(o.default, {
                                            buildHeight: B.buildHeight,
                                            pieceCount: B.buildPieces
                                        }),
                                        (0, i.jsx)(q.default, {})
                                    ]
                                })
                            ]
                        })
                    })
                }) : (0, i.jsx)('div', {
                    style: {
                        height: '100vh',
                        width: '100%',
                        background: s.default.Black
                    }
                });
            }
            constructor(...a) {
                super(...a), (0, g.default)(this, 'state', {
                    stage: 0
                });
            }
        };
    A = (0, h.__decorate)([
        (0, u.inject)('gameOptions', 'entities'),
        u.observer
    ], A);
    var _B = A;
    const _C = l.default.div.attrs({
            className: 'maxWidth'
        })(v || (v = z`
  height: 100vh;
  background: ${ 0 };
`), s.default.Black),
        _D = l.default.div.attrs({
            className: 'maxWidth maxHeight animated fadeIn'
        })(w || (w = z`
  animation-duration: 6s;
`)),
        _E = l.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column'
        })(x || (x = z`
  overflow: hidden;
  background: linear-gradient(285deg, #a62a16, #b5761f, #2f2d2a);
  background-size: 600% 600%;
  animation: ${ 0 } 10s ease infinite;
  font-family: ${ 0 };
`), p.BackgroundMove, n.default.fontFamilyName),
        _F = l.default.div.attrs({
            className: 'flex flex-column vc maxWidth animated fadeInDown'
        })(y || (y = z`
  flex: 1;
  z-index: 1;
  overflow-y: auto;
  padding-bottom: 50px;
  animation-duration: 8.2s;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....'),
        j = d('.....');
    let k, l, m, n, o = p => p;
    var _p = q => (0, g.jsxs)(_q, {
        children: [
            (0, g.jsx)(_t, {
                style: {
                    marginRight: 70,
                    transform: 'rotate(-16deg)'
                }
            }),
            (0, g.jsxs)('div', {
                children: [
                    (0, g.jsx)(_r, {
                        children: 'Lava Survival Time:'
                    }),
                    (0, g.jsx)(_s, {
                        children: (0, j.getTimerFromSeconds)(q.seconds)
                    })
                ]
            }),
            (0, g.jsx)(_t, {
                style: {
                    marginLeft: 70,
                    transform: 'rotate(16deg)'
                }
            })
        ]
    });
    const _q = i.default.div.attrs({
            className: 'flex hc vc animated zoomInDown'
        })(k || (k = o`
  width: 100%;
  margin-top: 70px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  animation-delay: 7.7s;
  animation-duration: 1.5;
`)),
        _r = i.default.div(l || (l = o`
  font-size: 28px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.9);
`)),
        _s = i.default.div(m || (m = o`
  font-size: 146px;
  line-height: 146px;
  font-weight: bold;
  margin-top: 9px;
`)),
        _t = i.default.img.attrs({
            src: (0, h.getAssetPath)('medal.svg')
        })(n || (n = o`
  height: 105px;
  opacity: 0.8;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....'),
        j = d('.....');
    let k, l, m = n => n;
    var _n = o => (0, g.jsxs)(_o, {
        children: [
            (0, g.jsx)(_p, {
                children: (0, g.jsx)(j.default, {
                    icon: 'fas fa-building',
                    title: 'Building Height',
                    value: o.buildHeight,
                    label: (0, h.plural)('block', o.buildHeight)
                })
            }),
            (0, g.jsx)('div', {
                style: {
                    width: 35
                }
            }),
            (0, g.jsx)(_p, {
                children: (0, g.jsx)(j.default, {
                    icon: 'fas fa-tally',
                    title: 'Building Pieces',
                    value: o.pieceCount,
                    label: (0, h.plural)('piece', o.pieceCount)
                })
            })
        ]
    });
    const _o = i.default.div.attrs({
            className: 'flex vc hc maxWidth'
        })(k || (k = m`
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
`)),
        _p = i.default.div(l || (l = m`
  width: 350px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....');
    let m, n = class extends j.Component {
        render() {
            return (0, h.jsxs)(_p, {
                children: [
                    (0, h.jsx)('b', {
                        children: 'Builders:'
                    }),
                    ' ',
                    (0, l.getTeamPlayerNames)(this.props.players.players.map(o => o.name))
                ]
            });
        }
    };
    n = (0, g.__decorate)([
        (0, i.inject)('players'),
        i.observer
    ], n);
    var _o = n;
    const _p = k.default.div(m || (m = (q => q)`
  width: 90%;
  max-width: 732px;
  font-size: 21px;
  opacity: 0.8;
  margin-top: 50px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n;
    class o extends h.Component {
        render() {
            return (0, g.jsx)(i.Container, {
                children: (0, g.jsxs)(_q, {
                    children: [
                        (0, g.jsx)(j.default, {}),
                        (0, g.jsxs)(i.Content, {
                            style: {
                                flexDirection: 'column'
                            },
                            className: 'maxHeight',
                            children: [
                                (0, g.jsx)('div', {
                                    className: 'maxWidth',
                                    style: {
                                        flexShrink: 0
                                    },
                                    children: (0, g.jsx)(k.default, {
                                        hideLogo: !0
                                    })
                                }),
                                (0, g.jsx)('div', {
                                    style: {
                                        flex: 1
                                    },
                                    className: 'scroll-y',
                                    children: (0, g.jsx)(l.default, {})
                                })
                            ]
                        })
                    ]
                })
            });
        }
    }
    var _p = o;
    const _q = m.default.div.attrs({
        className: 'flex animated fadeIn'
    })(n || (n = (r => r)`
  flex: 1;
  animation-duration: 1.8s;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        r = d('.....');
    let s, t, u, v, w, x, y, z = A => A,
        A = class extends p.Component {
            componentDidMount() {
                (0, m.send)(k.default.imposter.requestPeople), this.impostersWon() ? (0, m.playSound)(l.default.imposter.imposterWin, {
                    volume: 0.8
                }) : (0, m.playSound)(l.default.imposter.crewmateWin, {
                    volume: 0.6
                });
            }
            render() {
                const B = this.impostersWon(),
                    C = this.imposterNames();
                return (0, i.jsxs)(_C, {
                    children: [
                        (0, i.jsxs)(_D, {
                            children: [
                                B ? 'Impostors' : 'Crewmates',
                                ' Win'
                            ]
                        }),
                        (0, i.jsxs)(_E, {
                            children: [
                                (0, i.jsx)(_F, {
                                    style: {
                                        background: B ? '#d32f2f' : '#4caf50'
                                    }
                                }),
                                (0, i.jsx)(_G, {
                                    children: (0, i.jsx)(_H, {
                                        src: (0, m.getAssetPath)(B ? 'astronaut2.svg' : 'astronaut.svg')
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(_I, {
                            children: [
                                (0, i.jsxs)('b', {
                                    children: [
                                        (0, m.plural)('Impostor', this.props.imposter.people.filter(D => D.role === n.PersonRole.imposter).length),
                                        ':'
                                    ]
                                }),
                                ' ',
                                C
                            ]
                        })
                    ]
                });
            }
            constructor(...a) {
                super(...a), (0, g.default)(this, 'impostersWon', () => this.props.imposter.impostersLeft >= 1), (0, g.default)(this, 'imposterNames', () => (0, r.getTeamPlayerNames)(this.props.imposter.people.filter(B => B.role === n.PersonRole.imposter).map(B => B.name)));
            }
        };
    A = (0, h.__decorate)([
        (0, o.inject)('imposter'),
        o.observer
    ], A);
    var _B = A;
    const _C = q.default.div.attrs({
            className: 'flex flex-column vc animated fadeIn'
        })(s || (s = z`
  animation-duration: 12s;
  padding: 100px;
  padding-top: 25px;
  font-family: ${ 0 };
  text-align: center;
`), j.imposterFontName),
        _D = q.default.div(t || (t = z`
  font-size: 75px;
  font-weight: 700;
`)),
        _E = q.default.div(u || (u = z`
  height: 250px;
  width: 300px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 75px;
`)),
        _F = q.default.div.attrs({
            className: 'maxWidth maxHeight animated pulse infinite'
        })(v || (v = z`
  border-radius: 50%;
  animation-duration: 2.5s;
  filter: blur(50px);
`)),
        _G = q.default.div.attrs({
            className: 'flex maxWidth hc vc'
        })(w || (w = z`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`)),
        _H = q.default.img(x || (x = z`
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.4));
  height: 160px;
`)),
        _I = q.default.div(y || (y = z`
  font-size: 24px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        u = d('.....'),
        v = d('.....'),
        w = d('.....');
    let x, y, z, A = B => B;
    const B = (0, o.observer)(() => {
        const {
            players: {
                finalResults: C
            }
        } = h.useContext(q.default), [D, E] = h.useState(!1), [F, G] = h.useState(!1), [H, I] = h.useState(!1);
        h.useEffect(() => {
            (0, r.playSound)(s.default.draw.winner, {
                volume: 0.8
            }), setTimeout(() => {
                E(!0), setTimeout(() => {
                    G(!0);
                }, 600), setTimeout(() => {
                    I(!0), (0, r.musicIsOn)() && setTimeout(() => {
                        s.default.draw.background.fade(0, v.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 1500);
                    }, 2000);
                }, 2000);
            }, 2300);
        }, []);
        const J = (0, p.leaderboardSorter)(C),
            K = J.length ? J[0] : null,
            L = J.filter((M, N) => N > 0);
        return (0, g.jsxs)(_D, {
            children: [
                (0, g.jsx)(i.default, {}),
                (0, g.jsxs)(_E, {
                    children: [
                        K ? (0, g.jsxs)('div', {
                            className: 'maxWidth vc flex-column',
                            style: {
                                display: D ? 'flex' : 'none'
                            },
                            children: [
                                (0, g.jsx)(t.ConfettiContainer, {
                                    children: (0, g.jsx)(b(u), {
                                        active: F,
                                        config: t.confettiConfig
                                    })
                                }),
                                (0, g.jsx)(m.default, {
                                    name: K.name,
                                    amount: K.balance
                                })
                            ]
                        }) : null,
                        L && L.length && H ? (0, g.jsxs)('div', {
                            className: 'maxWidth animated fadeIn flex flex-column vc',
                            children: [
                                (0, g.jsx)(_F, {}),
                                (0, g.jsx)(n.default, {
                                    people: L
                                })
                            ]
                        }) : null
                    ]
                }),
                (0, g.jsx)(w.default, {})
            ]
        });
    });
    var _C = (0, o.observer)(() => {
        const {
            players: {
                finalResults: D
            }
        } = h.useContext(q.default);
        return D ? (0, g.jsx)(B, {}) : null;
    });
    const _D = j.default.div.attrs({
            className: 'flex flex-column scroll-y'
        })(x || (x = A`
  flex: 1;
  font-family: ${ 0 };
  color: ${ 0 };
  ${ 0 }
`), v.DRAW_MODE_FONT, l.default.Black, k.GRID_BACKGROUND_CSS),
        _E = j.default.div.attrs({
            className: 'scroll-y flex vc flex-column'
        })(y || (y = A`
  flex: 1;
  padding: 40px 0px;
`)),
        _F = j.default.div(z || (z = A`
  width: 95%;
  max-width: 1200px;
  margin: 40px 0px;
  background: ${ 0 };
  border-radius: 23%;
  flex-shrink: 0;
  height: 2px;
`), l.default.Black);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....');
    let l, m, n, o, p, q, r = s => s;
    var _s = t => (0, g.jsxs)(_t, {
        children: [
            (0, g.jsx)(_u, {
                children: (0, g.jsx)(_v, {})
            }),
            (0, g.jsxs)(_w, {
                children: [
                    (0, g.jsx)(_x, {
                        children: t.name
                    }),
                    (0, g.jsx)(_y, {
                        children: (0, h.getMoney)(t.amount)
                    })
                ]
            })
        ]
    });
    const _t = j.default.div.attrs({
            className: 'flex vc flex-column animated zoomInDown'
        })(l || (l = r`
  width: 90%;
  max-width: 580px;
`)),
        _u = j.default.div.attrs({
            className: 'flex hc vc light-shadow'
        })(m || (m = r`
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
`), i.default.White, i.default.Black),
        _v = j.default.img.attrs({
            src: (0, h.getAssetPath)('hand-drawn-trophy.svg')
        })(n || (n = r`
  height: 93px;
`)),
        _w = (0, j.default)(k.HandDrawnDiv).attrs({
            className: 'maxWidth flex flex-column vc medium-shadow'
        })(o || (o = r`
  padding: 30px;
  padding-top: 65px;
  background: ${ 0 };
`), i.default.White),
        _x = j.default.div(p || (p = r`
  font-size: 53px;
  font-weight: bold;
`)),
        _y = j.default.div(q || (q = r`
  font-size: 24px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    d('.....');
    var k = d('.....');
    let l, m, n, o, p, q, r = s => s;
    const s = t => (0, g.jsxs)(_v, {
        children: [
            (0, g.jsxs)(_w, {
                children: [
                    (0, g.jsx)(_x, {
                        children: (0, j.numberToRank)(t.place)
                    }),
                    (0, g.jsx)(_y, {
                        children: t.name
                    })
                ]
            }),
            (0, g.jsx)(_z, {
                children: (0, h.getMoney)(t.amount)
            })
        ]
    });
    var _t = u => (0, g.jsx)(_u, {
        children: u.people.map((v, w) => (0, g.jsx)(s, {
            name: v.name,
            amount: v.balance,
            place: w + 2
        }, `draw-leaderboard-${ v.id }`))
    });
    const _u = k.default.div(l || (l = r`
  width: 90%;
  max-width: 780px;
`)),
        _v = k.default.div.attrs({
            className: 'flex vc maxWidth light-shadow'
        })(m || (m = r`
  justify-content: space-between;
  padding: 10px 20px;
  background: ${ 0 };
  border-style: solid;
  border-color: ${ 0 };
  border-width: 2px;
  border-radius: 4px;
  line-height: 1;
  margin-bottom: 10px;
`), i.default.White, i.default.Black),
        _w = k.default.div.attrs({
            className: 'flex vc'
        })(n || (n = r`
  margin-right: 20px;
`)),
        _x = k.default.div.attrs({
            className: 'flex hc vc'
        })(o || (o = r`
  height: 50px;
  width: 50px;
  border-style: solid;
  border-width: 2px;
  border-color: ${ 0 };
  border-radius: 50%;
  font-size: 13px;
`), i.default.Black),
        _y = k.default.div(p || (p = r`
  font-size: 21px;
  margin-left: 12px;
  font-weight: bold;
`)),
        _z = k.default.div(q || (q = r`
  font-size: 18px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        t = d('.....');
    let u, v, w, x, y, z, A, B, C, D, E, F = G => G;
    const G = H => {
        const [I, J] = s.useState(!1), [K, L] = s.useState(!1);
        return (0, g.jsxs)(_I, {
            children: [
                (0, g.jsxs)(_O, {
                    children: [
                        (0, g.jsxs)('div', {
                            children: [
                                (0, g.jsx)(_Q, {
                                    children: H.term
                                }),
                                (0, g.jsx)(_R, {
                                    children: H.name
                                })
                            ]
                        }),
                        (0, g.jsx)(_P, {
                            children: H.canPublish ? (0, g.jsx)(h.default, {
                                onClick: () => {
                                    I || K || (J(!0), (0, q.request)({
                                        url: '/api/v1/fun/draw-that/add',
                                        method: 'post',
                                        data: {
                                            term: H.term,
                                            image: H.image
                                        },
                                        success: () => {
                                            L(!0);
                                        },
                                        error: () => (0, l.throwError)({
                                            title: 'Error publishing'
                                        }),
                                        both: () => J(!1)
                                    }));
                                },
                                type: 'primary',
                                loading: I,
                                disabled: K,
                                children: K ? 'Published' : 'Publish'
                            }) : null
                        })
                    ]
                }),
                (0, g.jsx)(_S, {
                    src: H.image
                })
            ]
        });
    };
    var _H = (0, r.observer)(() => {
        const {
            draw: I
        } = s.useContext(o.default), J = (0, q.getUser)(), K = !(!J || (0, q.isStudent)(J) || !(0, q.isUpgraded)(J) || J.freeTrial && J.freeTrial.currentlyOnFreeTrial), L = (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(_N, {
                    children: 'View drawings from your students down below!'
                }),
                (0, g.jsxs)(_N, {
                    children: [
                        'Publish some drawings to our global',
                        ' ',
                        (0, g.jsx)('a', {
                            href: p.DRAW_THAT_GALLERY,
                            target: '_blank',
                            children: (0, g.jsx)('b', {
                                children: 'Draw That Art Gallery!'
                            })
                        })
                    ]
                }),
                (0, g.jsx)(_N, {
                    children: 'While their name will not be shared, please get the drawer\'s permission before publishing to the gallery.'
                })
            ]
        }), M = (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(_N, {
                    children: 'View drawings from your students down below!'
                }),
                (0, g.jsxs)(_N, {
                    children: [
                        'Checkout our',
                        ' ',
                        (0, g.jsx)('a', {
                            href: p.DRAW_THAT_GALLERY,
                            target: '_blank',
                            children: (0, g.jsx)('b', {
                                children: 'Draw That Art Gallery'
                            })
                        }),
                        ' ',
                        'to view drawings from classes around the world!'
                    ]
                }),
                (0, g.jsx)(_N, {
                    children: 'For safety purposes, only paying subscribers can contribute art to the gallery.'
                })
            ]
        });
        return (0, g.jsxs)(j.default, {
            open: I.drawingsModalOpen,
            closable: !0,
            onCancel: () => {
                I.drawingsModalOpen = !1;
            },
            style: {
                top: 20,
                fontFamily: n.default.fontFamilyName,
                color: m.default.Black
            },
            footer: null,
            children: [
                (0, g.jsxs)(_J, {
                    children: [
                        (0, g.jsx)(_K, {}),
                        (0, g.jsx)(_L, {
                            children: 'Drawings'
                        }),
                        (0, g.jsx)(_M, {
                            children: K ? L : M
                        }),
                        (0, g.jsx)(h.default, {
                            block: !0,
                            type: 'primary',
                            target: '_blank',
                            href: p.DRAW_THAT_GALLERY,
                            children: 'Visit Draw That Art Gallery'
                        })
                    ]
                }),
                (0, g.jsx)(i.default, {}),
                I.drawingHistory.map((N, O) => (0, g.jsx)(G, {
                    image: N.image,
                    name: N.name,
                    term: N.term,
                    canPublish: K
                }, `drawing-history-${ N.index }`))
            ]
        });
    });
    const _I = t.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(u || (u = F`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        _J = t.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(v || (v = F`
  background: #fff3e0;
  padding: 20px;
  border-radius: 5px;
`)),
        _K = t.default.img.attrs({
            src: '/client/img/drawThat/art-gallery.svg'
        })(w || (w = F`
  height: 65px;
`)),
        _L = t.default.div(x || (x = F`
  font-size: 30px;
  margin-top: 6px;
  font-weight: ${ 0 };
`), k.FontWeights.Bold),
        _M = t.default.ul(y || (y = F`
  margin-top: 4px;
  font-size: 14px;
  li {
    margin-bottom: 5px;
  }
`)),
        _N = t.default.li(z || (z = F`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        _O = t.default.div.attrs({
            className: 'maxWidth flex vc'
        })(A || (A = F`
  justify-content: space-between;
  margin-bottom: 10px;
`)),
        _P = t.default.div(B || (B = F`
  margin-left: 15px;
`)),
        _Q = t.default.div(C || (C = F`
  font-size: 22px;
  font-weight: ${ 0 };
`), k.FontWeights.Bold),
        _R = t.default.div(D || (D = F`
  font-size: 14px;
  opacity: 0.7;
`)),
        _S = t.default.img.attrs({
            className: 'maxWidth'
        })(E || (E = F`
  border: 2px solid #e8e8e8;
  border-radius: 4px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        r = d('.....'),
        s = d('.....'),
        t = d('.....');
    let u, v, w, x = y => y;
    var _y = (0, n.observer)(() => {
        const {
            players: {
                players: z
            }
        } = o.useContext(k.default);
        o.useEffect(() => {
            j.default.pardy.countdown.stop(), j.default.pardy.music.fade(j.default.pardy.music.volume(), 0, 400), j.default.pardy.finaleMusic.fade(j.default.pardy.finaleMusic.volume(), 0, 400);
        }, []);
        const [A, B] = (0, l.useBoolean)(!(z.length >= 2));
        return (0, g.jsx)(_z, {
            children: (0, g.jsx)(r.default, {
                children: (0, g.jsxs)(_A, {
                    children: [
                        (0, g.jsx)(q.default, {}),
                        (0, g.jsx)(_B, {
                            children: A ? (0, g.jsx)(s.default, {}) : (0, g.jsx)(t.default, {
                                setToLeaderboardScreen: B
                            })
                        })
                    ]
                })
            })
        });
    });
    const _z = p.default.div.attrs({
            className: 'flex'
        })(u || (u = x`
  flex: 1;
  background: ${ 0 };
  font-family: 'Londrina Solid', cursive;
  font-weight: ${ 0 };
  overflow: hidden;
`), h.default.Black, i.FontWeights.Light),
        _A = (0, p.default)(m.motion.div).attrs({
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
        })(v || (v = x`
  overflow: hidden;
`)),
        _B = p.default.div(w || (w = x`
  flex: 1;
  overflow: hidden;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....');
    d('.....');
    var h = d('.....'),
        i = d('.....'),
        j = d('.....');
    let k;
    var _l = () => (0, g.jsx)(_m, {
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
        children: (0, g.jsx)(h.default, {})
    });
    const _m = (0, i.default)(j.motion.div).attrs({
        className: 'maxAll'
    })(k || (k = (n => n)``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....'),
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....'),
        w = d('.....');
    let x, y, z, A, B, C, D = E => E;
    const E = F => (0, g.jsxs)(_I, {
        style: {
            background: F.isWinner ? '#005005' : 'rgba(0, 0, 0, 0.6)'
        },
        className: F.isWinner ? 'animated tada' : '',
        children: [
            (0, g.jsxs)(_J, {
                children: [
                    'Contestant ',
                    F.contestantType
                ]
            }),
            (0, g.jsx)(_K, {
                children: F.contestantName
            }),
            (0, g.jsx)(h.default, {
                style: {
                    margin: '12px 0px'
                }
            }),
            (0, g.jsx)(_L, {
                children: (0, g.jsx)(b(l), {
                    start: 0,
                    end: F.balance,
                    formattingFn: m.getMoney,
                    duration: 6.5,
                    delay: 1.8,
                    onEnd: F.handleCountEnd
                })
            })
        ]
    });
    var _F = (0, q.observer)(G => {
        const {
            players: {
                players: H
            }
        } = j.useContext(r.default), [I, J] = j.useState(!1), K = j.useMemo(() => {
            const L = (0, s.leaderboardSorter)(H),
                M = [];
            return L[0] && M.push(L[0]), L[1] && M.push(L[1]), (0, t.shuffle)(M);
        }, []);
        j.useEffect(() => {
            K && 2 === K.length || G.setToLeaderboardScreen();
        }, [K]), j.useEffect(() => {
            setTimeout(() => {
                (0, m.playSound)(u.default.pardy.drumRoll, {
                    volume: 0.7
                });
            }, 1000);
        }, []);
        if (!K || 2 !== K.length)
            return null;
        const L = K[0].balance > K[1].balance;
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(_G, {
                    initial: {
                        y: '100%',
                        x: '0'
                    },
                    animate: {
                        y: '0%',
                        x: I ? '-100%' : '0%'
                    },
                    transition: {
                        delay: I ? 2.3 : 0.5,
                        duration: I ? 0.6 : 1.2,
                        ease: I ? 'easeIn' : 'easeOut'
                    },
                    onAnimationComplete: () => {
                        I && G.setToLeaderboardScreen();
                    },
                    children: (0, g.jsx)(w.default, {
                        children: (0, g.jsxs)(_H, {
                            children: [
                                (0, g.jsx)(E, {
                                    contestantType: 'A',
                                    contestantName: K[0].name,
                                    balance: K[0].balance,
                                    handleCountEnd: () => {
                                        (0, m.playSound)(u.default.celebrate, {}), setTimeout(() => {
                                            (0, m.musicIsOn)() && u.default.pardy.music.fade(u.default.pardy.music.volume(), v.default.musicVolume, 1000);
                                        }, 1000), J(!0), setTimeout(() => {
                                            (0, m.playSound)(u.default.pardy.swoosh, {});
                                        }, 2000);
                                    },
                                    isWinner: !!I && L
                                }),
                                (0, g.jsx)(E, {
                                    contestantType: 'B',
                                    contestantName: K[1].name,
                                    balance: K[1].balance,
                                    isWinner: !!I && !L
                                })
                            ]
                        })
                    })
                }),
                (0, g.jsx)(o.ConfettiContainer, {
                    children: (0, g.jsx)(b(n), {
                        active: I,
                        config: o.confettiConfig
                    })
                })
            ]
        });
    });
    const _G = (0, k.default)(p.motion.div).attrs({
            className: 'maxAll'
        })(x || (x = D``)),
        _H = k.default.div.attrs({
            className: 'flex-center maxAll'
        })(y || (y = D`
  padding: 30px;
`)),
        _I = k.default.div.attrs({
            className: 'medium-shadow'
        })(z || (z = D`
  border: 3px solid;
  border-radius: 6px;
  padding: 25px;
  width: 350px;
  margin: 10px;
  flex-shrink: 0;
  animation-duration: 1.4s;
  transition: background 0.8s;
`)),
        _J = k.default.div(A || (A = D`
  font-style: italic;
  text-transform: uppercase;
  font-size: 18px;
`)),
        _K = k.default.div(B || (B = D`
  font-size: 32px;
  font-weight: ${ 0 };
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`), i.FontWeights.Normal),
        _L = k.default.div(C || (C = D`
  font-size: 32px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    let k, l, m, n = o => o;
    var _o = p => {
        const q = h.useRef(null),
            [r, s] = (0, j.default)(q),
            t = Math.min(r / 800, s / 450);
        let u = 450 * t;
        isNaN(u) && (u = 0);
        let v = 800 * t;
        return isNaN(v) && (v = 0), (0, g.jsx)(_p, {
            ref: q,
            children: (0, g.jsx)(_q, {
                style: {
                    height: u,
                    width: v
                },
                children: (0, g.jsx)(_r, {
                    style: {
                        transform: `scale(${ t })`
                    },
                    children: p.children
                })
            })
        });
    };
    const _p = i.default.div(k || (k = n`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        _q = i.default.div(l || (l = n``)),
        _r = i.default.div(m || (m = n`
  height: ${ 0 }px;
  width: ${ 0 }px;
  transform-origin: top left;
  display: flex;
  justify-content: center;
  align-items: center;
`), 450, 800);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....'),
        r = d('.....');
    let s;
    var _t = (0, m.observer)(() => {
        const {
            engine: u,
            gameValues: v,
            metadata: w
        } = n.useContext(j.default), x = (0, p.getQueryVariable)('id'), [y, z] = (0, l.useBoolean)(!1);
        return n.useEffect(() => {
            (0, r.default)(x, {
                onSuccess: () => {
                    z(), (0, q.default)();
                },
                onError: A => {
                    A && A.message && A.message.text ? v.roomIntentErrorMessage = A.message.text : v.roomIntentErrorMessage = 'There was an error. Please refresh and try again.';
                }
            });
        }, []), n.useEffect(() => {
            u.joinedRoom && y && w.hasReceivedHostStaticState && (v.currentRoute = k.GameStatus.join);
        }, [
            y,
            u.joinedRoom,
            w.hasReceivedHostStaticState
        ]), (0, g.jsx)(_u, {
            children: (0, g.jsx)(h.default, {
                style: {
                    color: i.default.White
                },
                size: 84
            }, 'setup-loader')
        });
    });
    const _u = o.default.div.attrs({
        className: 'maxAll flex-center flex-column'
    })(s || (s = (v => v)`
  color: ${ 0 };
`), i.default.White);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    d('.....');
    var j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = 44;

    function n(o) {
        var p, q, r;
        return p = o, q = 0, r = 1, o = (Math.min(Math.max(q, p), r) - q) / (r - q), o = (o -= 1) * o * o + 1;
    }
    var r = i.forwardRef(function(s, t) {
            var u, v = s.classes,
                w = s.className,
                x = s.color,
                y = void 0 === x ? 'primary' : x,
                z = s.disableShrink,
                A = void 0 !== z && z,
                B = s.size,
                C = void 0 === B ? 40 : B,
                D = s.style,
                E = s.thickness,
                F = void 0 === E ? 3.6 : E,
                G = s.value,
                H = void 0 === G ? 0 : G,
                I = s.variant,
                J = void 0 === I ? 'indeterminate' : I,
                K = (0, h.default)(s, [
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
                L = {},
                M = {},
                N = {};
            if ('determinate' === J || 'static' === J) {
                var O = 2 * Math.PI * ((m - F) / 2);
                L.strokeDasharray = O.toFixed(3), N['aria-valuenow'] = Math.round(H), 'static' === J ? (L.strokeDashoffset = ''.concat(((100 - H) / 100 * O).toFixed(3), 'px'), M.transform = 'rotate(-90deg)') : (L.strokeDashoffset = ''.concat((u = (100 - H) / 100, u * u * O).toFixed(3), 'px'), M.transform = 'rotate('.concat((270 * n(H / 70)).toFixed(3), 'deg)'));
            }
            return i.createElement('div', (0, g.default)({
                className: (0, j.default)(v.root, w, 'inherit' !== y && v['color'.concat((0, l.default)(y))], {
                    indeterminate: v.indeterminate,
                    static: v.static
                } [J]),
                style: (0, g.default)({
                    width: C,
                    height: C
                }, M, D),
                ref: t,
                role: 'progressbar'
            }, N, K), i.createElement('svg', {
                className: v.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(m, ' ').concat(m)
            }, i.createElement('circle', {
                className: (0, j.default)(v.circle, A && v.circleDisableShrink, {
                    indeterminate: v.circleIndeterminate,
                    static: v.circleStatic
                } [J]),
                style: L,
                cx: m,
                cy: m,
                r: (m - F) / 2,
                fill: 'none',
                strokeWidth: F
            })));
        }),
        _s = (0, k.default)(function(t) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: t.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: t.palette.primary.main
                },
                colorSecondary: {
                    color: t.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: t.transitions.create('stroke-dashoffset')
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
        })(r);
}), d.register('.....', function(e, f) {
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    let m;
    var n;
    let o;
    var p;
    a(e.exports, 'GameStatus', function() {
        return k;
    }), (h = g || (g = {})).multipleChoice = 'mc', h.textInput = 'text', (j = i || (i = {})).public = 'public', j.private = 'private', (l = k || (k = {})).setup = 'setup', l.join = 'join', l.teams = 'teams', l.gameplay = 'gameplay', l.results = 'results', (n = m || (m = {})).classic = 'classic', n.team = 'team', (p = o || (o = {})).time = 'time', p.race = 'race', p.allIn = 'allIn';
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _h;
    });
    var g = d('.....');
    var _h = () => {
        (0, g.default)().then().catch(i => !1);
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    var _k = async () => {
        try {
            const l = await (0, h.default)();
            await (0, i.default)({
                createOptions: {
                    serverUrl: l.serverUrl,
                    roomType: 'LiveGame',
                    options: {
                        intentId: (0, g.getQueryVariable)('id'),
                        authToken: (0, j.isLoggedIn)() ? (0, j.getUser)().token : ''
                    }
                }
            });
        } catch (l) {
            console.log({
                errorCreatingGame: l
            });
        }
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    var _j = async () => {
        try {
            g.default.engine.findingServerForGame = !0;
            let k = '';
            try {
                const l = await new Promise((m, n) => {
                    (0, h.request)({
                        url: '/api/matchmaker/find-server-to-host-game',
                        data: {
                            source: i.ExperienceSource.original
                        },
                        success: o => {
                            m(o);
                        },
                        error: o => {
                            n(o);
                        }
                    });
                });
                if (!l || !l.url)
                    throw 'No server response';
                k = l.url;
            } catch (k) {
                throw g.default.engine.errorFindingServerForGame = !0, g.default.engine.findingServerForGame = !1, k;
            }
            if (g.default.engine.findingServerForGame = !1, !k)
                throw new Error('No Server URL');
            return {
                serverUrl: k
            };
        } catch (a) {
            throw a;
        }
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    var _j = k => {
        const {
            joinOptions: l,
            createOptions: m
        } = k;
        if (!l && !m)
            return;
        const n = () => {
            h.default.engine.attemptingToConnect = !1, h.default.engine.hasConnected = !1, h.default.engine.connected = !1, h.default.engine.connectionError = !1, h.default.engine.joinedRoom = !1, h.default.engine.attemptingToJoinRoom = !1, h.default.engine.errorJoiningRoom = !1, h.default.engine.roomError = null;
        };
        n(), h.default.engine.attemptingToConnect = !0;
        const o = new(0, g.Client)(l ? l.serverUrl : m.serverUrl, {
                transports: ['websocket'],
                clientIdSuffix: '-host'
            }),
            p = o.onConnectError.add(q => {
                console.log({
                    connectionError: q
                }), k.onConnectError && k.onConnectError(q), k.disposeOnError && n(), h.default.engine.connectionError = !0, h.default.engine.attemptingToConnect = !1;
            });
        o.onConnect.add(() => {
            p(), h.default.engine.client = o, h.default.engine.connected = !0, h.default.engine.hasConnected = !0, h.default.engine.attemptingToConnect = !1, h.default.engine.attemptingToJoinRoom = !0, o.onConnectError.add(() => {
                h.default.engine.connectionError = !0;
            }), o.onConnect.add(() => {
                h.default.engine.connected = !0, h.default.engine.connectionError = !1, h.default.engine.attemptingToConnect = !1, h.default.engine.attemptingToJoinRoom = !0;
            }), o.onReconnect.add(() => {
                h.default.engine.connected = !0, h.default.engine.connectionError = !1, h.default.engine.attemptingToConnect = !1, h.default.engine.attemptingToJoinRoom = !0;
            }), h.default.engine.attemptingToJoinRoom = !0;
            const q = l ? o.joinRoom(l.roomId, l.options) : o.createRoom(m.roomType, m.options);
            q.onJoinAttempt.add(() => {
                h.default.engine.attemptingToJoinRoom = !0;
            }), q.onJoinError.add(r => {
                console.log({
                    roomJoinError: r
                }), k.onRoomJoinError && k.onRoomJoinError(r), h.default.engine.roomError = r, h.default.engine.errorJoiningRoom = !0, h.default.engine.attemptingToJoinRoom = !1;
            });
            const r = q.onJoinError.add(() => {
                k.disposeOnError && n();
            });
            q.onJoin.add(() => {
                (0, i.default)(q), k.onRoomJoin && k.onRoomJoin();
            }, !0), q.onJoin.add(() => {
                r(), h.default.engine.joinedRoom = !0, h.default.engine.attemptingToJoinRoom = !1, h.default.engine.game || (h.default.engine.game = q);
            }), q.onLeave.add(() => {
                h.default.engine.joinedRoom = !1;
            });
        }, !0), o.onDisconnect.add(() => {
            h.default.engine.attemptingToConnect = !0, h.default.engine.connected = !1, k.onDisconnect && k.onDisconnect();
        });
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    const r = s => {
        h.default[s] && Object.keys(h.default[s]).forEach(t => {
            h.default[s][t] && h.default[s][t].load && h.default[s][t].load();
        });
    };
    var _s = t => {
        const u = o.default.map(v => v());
        t.onMessage.add((v, w) => {
            const x = {
                action: v,
                payload: w
            };
            if (x.action !== k.default.stateUpdate)
                if (x.action !== k.default.viewableGameCode) {
                    if (x.action === k.default.hostStaticState) {
                        if (j.default.metadata.hasReceivedHostStaticState)
                            return;
                        return Object.keys(w.options || {}).forEach(y => {
                            j.default.gameOptions[y] = w.options[y];
                        }), j.default.gameValues.availableThemes.replace(w.themes), j.default.gameValues.gameCode = w.gameCode, Object.keys(h.default).forEach(y => {
                            h.default[y] && h.default[y].load && h.default[y].load();
                        }), (0, i.inImposterMode)() && r('imposter'), (0, i.inThanosMode)() && r('thanos'), (0, i.inLavaMode)() && r('lava'), (0, i.inBossBattleMode)() && r('bossBattle'), (0, i.inDrawMode)() && (r('draw'), (0, q.loadFont)('https://fonts.googleapis.com/css2?family=Pangolin&display=swap')), (0, i.inPardyMode)() && ((0, q.loadFont)('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap'), r('pardy')), (0, p.default)(t), void(j.default.metadata.hasReceivedHostStaticState = !0);
                    }
                    if (x.action !== k.default.newActivityItem)
                        if (x.action !== k.default.newPlayerStats)
                            if (x.action !== k.default.specialSongPlayed)
                                if (x.action !== k.default.updatedPlayerLeaderboard)
                                    if (x.action !== k.default.updatedTeamLeaderboard)
                                        if (x.action !== k.default.clapCount)
                                            if (x.action !== k.default.thanosResults)
                                                if (x.action !== k.default.defendingHomebases) {
                                                    if (x.action === k.default.defendingHomebaseResults)
                                                        return j.default.gameValues.defendingHomebaseResults = w, void(0, i.endGame)(!0);
                                                    if (x.action !== k.default.playAgainIntentId)
                                                        if (x.action === k.default.errorModal && g.default.error({
                                                                title: w.title,
                                                                content: w.content
                                                            }), x.action !== k.default.setReportId) {
                                                            if (x.action !== k.default.lavaResults)
                                                                return x.action === k.default.imposter.quickStats ? (j.default.imposter.impostersLeft = w.impostersLeft, j.default.imposter.meetingsLeft = w.meetingsLeft, void(j.default.imposter.investigationsLeft = w.investigationsLeft)) : void(x.action !== k.default.imposter.people ? x.action !== k.default.imposter.meetingResults ? x.action !== k.default.imposter.callAMeeting ? x.action !== k.default.imposter.voteCount ? x.action !== k.default.draw.line ? x.action !== k.default.draw.feedItem ? x.action !== k.default.draw.personCount ? x.action !== k.default.draw.pointAdditions || j.default.draw.pointAdditions.replace(w) : j.default.draw.personCount = w : j.default.draw.latestFeedItem = w : j.default.draw.latestLine = w : j.default.imposter.votes = w : (0, n.default)() : j.default.imposter.meetingResults = w : j.default.imposter.people.replace(w));
                                                            j.default.entities.lava = w;
                                                        } else
                                                            j.default.gameValues.reportId = w.reportId;
                                                    else
                                                        window.location.href = `/host?id=${ w }`;
                                                } else
                                                    j.default.entities.defendingHomebase.replace(w);
                    else
                        j.default.gameValues.thanosValues = w;
                    else
                        j.default.gameValues.clapCount = w;
                    else
                        'final' === w.key ? j.default.players.finalResults.replace(w.items) : j.default.players.teams.replace(w.items);
                    else
                        'final' === w.key ? j.default.players.finalResults.replace(w.items) : j.default.players.players.replace(w.items);
                    else {
                        if (!w.audioFile || !w.background)
                            return;
                        (0, i.startSpecialSong)(w.audioFile, w.background);
                    } else
                        j.default.stats.playerStats.push(x.payload);
                    else
                        (0, i.addActivityItem)(x.payload);
                } else
                    j.default.gameValues.gameCode = w;
            else
                (0, l.default)(w.type, w.value, u);
        }), (0, m.default)(t);
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    var _i = (j, k, l) => {
        if (j === h.default.gameStatus)
            return void(g.default.gameValues.currentRoute !== k && (g.default.gameValues.currentRoute = k));
        const m = l.find(n => n.key === j);
        m && m.listener.applyPatches(k);
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....');
    const k = l => {
        const m = h.default.gameValues.currentRoute;
        if (m === i.GameStatus.join)
            return l.send(j.default.requestPlayerLeaderboard), void setTimeout(() => k(l), 1000);
        if (m === i.GameStatus.teams)
            return l.send(j.default.requestTeamLeaderboard), void setTimeout(() => k(l), 4700);
        if (m === i.GameStatus.gameplay) {
            if ((0, g.inLavaMode)())
                return;
            return (0, g.inImposterMode)() ? l.send(j.default.imposter.requestPeople) : (0, g.inZombiesVsHumansMode)() ? l.send(j.default.requestDefendingHomebase) : (0, g.inTeamMode)() ? l.send(j.default.requestTeamLeaderboard) : l.send(j.default.requestPlayerLeaderboard), void setTimeout(() => k(l), 2500);
        }
        m !== i.GameStatus.results && setTimeout(() => k(l), 1000);
    };
    var _l = k;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    }), d('.....');
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = d('.....');
    var _j = [
        g.default,
        h.default,
        i.default
    ];
}), d.register('.....', function(e, f) {
    a(e.exports, 'Round', function() {
        return d('.....').default;
    }), a(e.exports, 'Status', function() {
        return d('.....').default;
    });
    d('.....'), d('.....');
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
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
    a(e.exports, 'PardyState', function() {
        return d('.....').default;
    });
    d('.....');
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');
    const j = [
        'board',
        'powers',
        'finaleQuestionId',
        'playerCount',
        'betsPlaced',
        'playersAnswered',
        'playersAnsweredCorrectly',
        'nameOfFirstPlayerToAnswerCorrectly'
    ];
    var _k = () => {
        const l = new(0, h.default)();
        return j.forEach(m => {
            l.onPropChange(m, n => {
                'powers' === m ? g.default.pardy.powers.replace(n) : g.default.pardy[m] = n;
            });
        }), {
            key: i.default.pardy.state,
            listener: l
        };
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....');
    var _l = m => {
        (0, h.reaction)(() => i.default.gameValues.currentRoute, n => {
            k.GameStatus.gameplay, m.send(j.default.newGameStatus, n);
        }), (0, g.inImposterMode)() && (0, h.reaction)(() => i.default.imposter.status, n => m.send(j.default.imposter.status, n)), (0, g.inPardyMode)() && ((0, h.reaction)(() => i.default.pardy.currentRound, n => {
            m.send(j.default.pardy.setNewRoundDetails, n);
        }), (0, h.reaction)(() => i.default.pardy.screen, n => {
            m.send(j.default.pardy.setScreen, n);
        }), (0, h.reaction)(() => i.default.pardy.questionScreen, n => {
            m.send(j.default.pardy.setQuestionScreen, n);
        }), (0, h.reaction)(() => i.default.pardy.questionStatus, n => {
            m.send(j.default.pardy.setQuestionStatus, n);
        }));
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');
    var _i = (j, k) => {
        (0, g.request)({
            url: `/api/matchmaker/intent/live-game/summary/${ j }`,
            success: l => {
                h.default.kit.questions = l.questions, h.default.metadata.currentGameIsUsingGroups = !!l.usingGroups, k.onSuccess && k.onSuccess();
            },
            error: l => {
                k.onError && k.onError(l);
            }
        });
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        q = d('.....'),
        r = d('.....');
    let s;
    const t = n.default.div(s || (s = (u => u)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`));
    let u = class extends m.Component {
        componentDidMount() {
            (0, k.inBossBattleMode)() ? this.makeBossBattleTeams(): this.makeTeams(!0);
        }
        render() {
            const v = !(0, k.inBossBattleMode)();
            return this.props.ui.showingBossPreScreen ? (0, i.jsx)(o.default, {}) : this.props.ui.showingHumansVsZombiesPreScreen ? (0, i.jsx)(p.default, {}) : (0, i.jsxs)(t, {
                children: [
                    (0, i.jsx)(q.default, {
                        reshuffle: v ? this.makeTeams : null
                    }),
                    (0, i.jsx)(r.default, {})
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'makeBossBattleTeams', () => {
                this.props.engine.game.send(j.default.makeTeams, {
                    boss: this.props.gameValues.bossId
                });
            }), (0, g.default)(this, 'makeTeams', v => {
                this.props.engine.game.send(j.default.makeTeams);
            });
        }
    };
    u = (0, h.__decorate)([
        (0, l.inject)('engine', 'gameOptions', 'gameValues', 'ui'),
        l.observer
    ], u);
    var _v = u;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let s, t, u, v = w => w;
    let w = class extends m.Component {
        componentDidMount() {
            (0, r.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), (0, q.playSound)(k.default.bossBattle.getAmped, {
                volume: 0.45,
                onPlay: () => {
                    this.startGame();
                },
                onError: () => this.startGame()
            });
        }
        render() {
            return (0, i.jsx)(_z, {
                children: (0, i.jsxs)(_A, {
                    children: [
                        (0, i.jsx)(j.ConfettiContainer, {
                            children: (0, i.jsx)(b(n), {
                                config: j.confettiConfig,
                                active: this.state.confettiActive
                            })
                        }),
                        (0, i.jsx)(b(n), {
                            config: j.confettiConfig,
                            active: this.state.confettiActive
                        }),
                        this.state.content
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                content: '',
                confettiActive: !1
            }), (0, g.default)(this, 'getStages', () => [{
                    content: '',
                    delay: 697
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'Are You Ready...'
                    }),
                    delay: 2470
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'To Battle...'
                    }),
                    delay: 2470
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'The Biggest...'
                    }),
                    delay: 1300
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'Baddest...'
                    }),
                    delay: 1100
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'Boss'
                    }),
                    delay: 1200
                },
                {
                    content: (0, i.jsx)('div', {
                        children: 'Ever?'
                    }),
                    delay: 1300
                },
                {
                    content: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('div', {
                                style: {
                                    zoom: 1.6
                                },
                                children: this.getBossName()
                            }),
                            (0, i.jsx)('div', {
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
            ]), (0, g.default)(this, 'setStage', x => {
                const y = this.getStages(),
                    z = y[x];
                if (!z)
                    return this.props.gameValues.currentRoute = p.GameStatus.gameplay, void(this.props.ui.showingBossPreScreen = !1);
                x + 1 === y.length && this.setState({
                    confettiActive: !0
                }), this.setState({
                    content: z.content
                }), setTimeout(() => this.setStage(x + 1), z.delay);
            }), (0, g.default)(this, 'startGame', () => {
                this.setStage(0);
            }), (0, g.default)(this, 'getBossName', () => {
                let x = 'The Boss';
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const y = this.props.players.teams.find(z => 'The Boss' === z.id);
                    y && y.players[0] && (x = y.players[0]);
                }
                return x;
            });
        }
    };
    w = (0, h.__decorate)([
        (0, l.inject)('players', 'gameValues', 'ui'),
        l.observer
    ], w);
    var _x = w;
    const y = (0, o.keyframes)(s || (s = v`
  from {
    transform: scale(0.7);
  }
  to {
    transform: scale(1);
  }
`)),
        _z = o.default.div(t || (t = v`
  background: #b53d00;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`)),
        _A = o.default.div(u || (u = v`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 65px;
  font-family: ${ 0 };
  text-align: center;
  animation: ${ 0 } 12s ease-in-out;
`), '\'Bowlby One SC\', cursive', y);
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    let t = class extends l.Component {
        componentDidMount() {
            (0, p.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), j.default.engagingSuspense.unload(), j.default.engagingSuspense.load(), j.default.engagingSuspense.on('load', () => {
                this.startGame(), j.default.engagingSuspense.play();
            }), j.default.engagingSuspense.on('loaderror', this.startGame), j.default.engagingSuspense.on('playerror', this.startGame);
        }
        render() {
            return (0, i.jsx)(_v, {
                children: (0, i.jsx)(_w, {
                    children: this.state.content
                })
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'state', {
                content: ''
            }), (0, g.default)(this, 'getStages', () => [{
                    content: '',
                    delay: 1300
                },
                {
                    content: (0, i.jsx)('div', {
                        children: (0, i.jsx)(m.default, {
                            text: 'Protect your team!'
                        })
                    }),
                    delay: 2800
                },
                {
                    content: (0, i.jsx)('div', {
                        children: (0, i.jsx)(m.default, {
                            text: 'Don\'t run out of health!'
                        })
                    }),
                    delay: 2900
                },
                {
                    content: (0, i.jsx)('div', {
                        children: (0, i.jsx)(m.default, {
                            text: 'Purchase team upgrades in the shop!'
                        })
                    }),
                    delay: 2900
                },
                {
                    content: (0, i.jsx)('div', {
                        children: (0, i.jsx)(m.default, {
                            text: 'Upgrade your team\'s health!'
                        })
                    }),
                    delay: 2800
                },
                {
                    content: (0, i.jsx)('div', {
                        children: (0, i.jsx)(m.default, {
                            text: 'Sabotage the other team!'
                        })
                    }),
                    delay: 2800
                },
                {
                    content: (0, i.jsx)('div', {
                        children: (0, i.jsx)(m.default, {
                            text: 'Last team remaining wins!'
                        })
                    }),
                    delay: 2200
                },
                {
                    content: (0, i.jsxs)('div', {
                        style: {
                            zoom: 1.4
                        },
                        className: 'animated zoomInDown',
                        children: [
                            (0, i.jsx)('div', {
                                children: 'Humans'
                            }),
                            (0, i.jsx)('div', {
                                children: 'vs.'
                            }),
                            (0, i.jsx)('div', {
                                children: 'Zombies'
                            })
                        ]
                    }),
                    delay: 5000
                }
            ]), (0, g.default)(this, 'setStage', u => {
                const v = this.getStages()[u];
                if (!v)
                    return this.props.gameValues.currentRoute = o.GameStatus.gameplay, void(this.props.ui.showingHumansVsZombiesPreScreen = !1);
                this.setState({
                    content: v.content
                }), setTimeout(() => this.setStage(u + 1), v.delay);
            }), (0, g.default)(this, 'startGame', () => {
                this.setStage(0);
            });
        }
    };
    t = (0, h.__decorate)([
        (0, k.inject)('players', 'gameValues', 'ui'),
        k.observer
    ], t);
    var _u = t;
    const _v = n.default.div(q || (q = s`
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
        _w = n.default.div(r || (r = s`
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
}), d.register('.....', function(e, f) {
    a(e.exports, 'HEADER_HEIGHT', function() {
        return _t;
    }), a(e.exports, 'default', function() {
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
    let p, q, r, s = t => t;
    const _t = '83px',
        u = n.default.div(p || (p = s`
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
`), _t, l.default.basic),
        v = n.default.div(q || (q = s`
  ${ 0 };
  font-size: 38px;
`), k.default.black),
        w = n.default.div(r || (r = s`
  display: flex;
  align-items: center;
`));
    class x extends m.Component {
        render() {
            return (0, g.jsxs)(u, {
                children: [
                    (0, g.jsx)(v, {
                        children: !(0, j.inZombiesVsHumansMode)() && 'Teams'
                    }),
                    (0, g.jsxs)(w, {
                        children: [
                            this.props.reshuffle && (0, g.jsx)(i.default, {
                                type: 'primary',
                                icon: (0, g.jsx)(h.default, {}),
                                style: {
                                    fontFamily: k.default.fontFamilyName,
                                    marginRight: 10
                                },
                                onClick: this.props.reshuffle,
                                children: 'Reshuffle'
                            }),
                            (0, g.jsx)(o.default, {
                                onTeamScreen: !0
                            })
                        ]
                    })
                ]
            });
        }
    }
    var _y = x;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    const p = l.default.div(o || (o = (q => q)`
  max-height: calc(100vh - ${ 0 });
  width: 100%;
  padding: 10px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`), m.HEADER_HEIGHT);
    let q = class extends k.Component {
        render() {
            return (0, h.jsx)(p, {
                children: this.props.players.teams && this.props.players.teams.length ? this.props.players.teams.map(r => (0, h.jsx)(n.default, {
                    team: r
                }, r.id)) : (0, h.jsx)(i.default, {
                    style: {
                        marginTop: 10
                    },
                    size: 'large'
                })
            });
        }
    };
    q = (0, g.__decorate)([
        (0, j.inject)('players'),
        j.observer
    ], q);
    var _r = q;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        o = d('.....');
    let p, q, r, s, t = u => u;
    const u = o.default.div(p || (p = t`
  width: 324px;
  margin: 12px;
  background: ${ 0 };
  padding: 10px;
  border-radius: 4px;
  box-shadow: ${ 0 };
  color: ${ 0 };
`), k.default.White, m.default.basic, k.default.Black),
        v = o.default.div(q || (q = t`
  height: 36px;
  width: 36px;
  margin-right: 6px;
  border-radius: 5px;
  background-color: ${ 0 };

  display: flex;
  align-items: center;
  justify-content: center;
`), w => w.background),
        w = o.default.div(r || (r = t`
  ${ 0 };
  font-size: 23px;
  display: flex;
  align-items: center;
`), l.default.black),
        x = o.default.div(s || (s = t`
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
`), l.default.bold);
    class y extends n.Component {
        render() {
            const {
                team: z
            } = this.props;
            return (0, g.jsxs)(u, {
                children: [
                    (0, g.jsxs)(w, {
                        children: [
                            (0, g.jsx)(v, {
                                background: (0, j.getTeamColor)(z.id),
                                children: z.icon && (0, g.jsx)('i', {
                                    className: z.icon,
                                    style: {
                                        color: z.color.text
                                    }
                                })
                            }),
                            (0, g.jsx)(i.default, {
                                text: z.id
                            })
                        ]
                    }),
                    (0, g.jsx)(h.default, {
                        style: {
                            marginTop: 7,
                            marginBottom: 7
                        }
                    }),
                    z.players.map(A => (0, g.jsx)(x, {
                        children: A
                    }, z.balance + A))
                ]
            });
        }
    }
    var _z = y;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
        r = d('.....'),
        s = d('.....'),
        t = d('.....'),
        u = d('.....'),
        v = d('.....');
    const w = 'https://status.gimkit.com';
    let x = class extends q.Component {
        render() {
            const {
                engine: y,
                gameValues: z
            } = this.props, A = ((B, C) => !((!C.roomIntentErrorMessage || C.currentRoute !== u.GameStatus.setup) && !B.errorFindingServerForGame && (C.currentRoute === u.GameStatus.results || !B.connectionError && (C.currentRoute === u.GameStatus.setup || !B.game || !B.errorJoiningRoom && B.joinedRoom))))(y, z);
            return z.currentRoute === u.GameStatus.setup ? (0, i.jsx)(n.default, {
                open: A,
                closable: !1,
                footer: null,
                width: 700,
                centered: !0,
                bodyStyle: {
                    padding: 40
                },
                children: this.getContent()
            }) : (0, i.jsx)(m.default, {
                open: A,
                placement: 'bottom',
                closable: !1,
                height: 'auto',
                children: this.getContent()
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'getLoading', () => {
                const {
                    engine: y,
                    gameValues: z
                } = this.props;
                return (!z.roomIntentErrorMessage || z.currentRoute !== u.GameStatus.setup) && (!y.errorJoiningRoom && (!y.errorFindingServerForGame && !(!y.game && y.connectionError)));
            }), (0, g.default)(this, 'getContent', () => {
                const y = this.getLoading();
                return (0, i.jsxs)('div', {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        fontFamily: t.default.fontFamilyName,
                        color: s.default.Black,
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    children: [
                        y && (0, i.jsx)(o.default, {
                            size: 'large',
                            style: {
                                marginBottom: 10
                            }
                        }),
                        !y && (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(j.default, {
                                    style: {
                                        color: 'red',
                                        fontSize: 51
                                    }
                                }),
                                (0, i.jsx)(l.default, {})
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
                    engine: y,
                    gameValues: z
                } = this.props;
                if (z.roomIntentErrorMessage && z.currentRoute === u.GameStatus.setup)
                    return (0, i.jsxs)('div', {
                        className: 'flex-center flex-column',
                        children: [
                            (0, i.jsx)('div', {
                                children: z.roomIntentErrorMessage
                            }),
                            (0, i.jsx)(k.default, {
                                size: 'large',
                                type: 'primary',
                                style: {
                                    height: 50,
                                    width: 300,
                                    marginTop: 30
                                },
                                href: v.DASHBOARD,
                                children: (0, i.jsx)('div', {
                                    className: 'maxAll flex-center',
                                    children: 'Back To Dashboard'
                                })
                            })
                        ]
                    });
                if (y.errorFindingServerForGame)
                    return (0, i.jsxs)('span', {
                        children: [
                            'We couldn\'t find any available game servers. Gimkit might be down. Check ',
                            (0, i.jsx)('a', {
                                href: w,
                                children: w
                            }),
                            ' for more info.'
                        ]
                    });
                if (!y.game && y.connectionError)
                    return (0, i.jsxs)('span', {
                        children: [
                            'Your network is blocking connection to our game servers. Get more details on how to fix this ',
                            (0, i.jsx)('a', {
                                href: 'https://www.gimkit.com/connection',
                                children: 'here.'
                            })
                        ]
                    });
                if (y.errorJoiningRoom) {
                    const A = (0, r.default)(y.roomError);
                    return (0, i.jsxs)('span', {
                        children: [
                            (0, i.jsx)('span', {
                                style: {
                                    fontSize: 23
                                },
                                children: A.title
                            }),
                            (0, i.jsx)('br', {}),
                            (0, i.jsx)('span', {
                                style: {
                                    fontWeight: 'normal',
                                    fontSize: 18
                                },
                                children: A.description
                            })
                        ]
                    });
                }
                return y.attemptingToConnect ? (0, i.jsxs)('span', {
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
                }) : y.attemptingToJoinRoom ? (0, i.jsxs)('span', {
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
    x = (0, h.__decorate)([
        (0, p.inject)('engine', 'gameValues'),
        p.observer
    ], x);
    var _y = x;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
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
    a(e.exports, 'default', function() {
        return d;
    });
    var g = h => {
        let i = 'Error joining game',
            j = '';
        return h && h.includes && h.includes('No data found') ? (i = 'All done', j = 'You were disconnected for too long, so we closed down the game you were hosting.') : j = `Error message - ${ JSON.stringify(h) }`, {
            title: i,
            description: j
        };
    };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    var _n = (0, k.observer)(() => {
        const {
            ui: o
        } = l.useContext(m.default);
        return o.showingClassTip ? (0, g.jsx)(j.default, {
            imageUrl: '/client/img/tips/class.jpeg',
            title: 'Keep games safe with classes',
            description: (0, g.jsxs)(g.Fragment, {
                children: [
                    'When you set up classes, nobody outside your class will be able to join live games. Plus, classes make it impossible for students to join with anything but their real name.',
                    (0, g.jsx)(h.default, {
                        href: i.NEW_CLASS,
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
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n, o, p, q, r, s, t, u, v = w => w;
    const w = x => {
        const [y, z] = j.useState(!0), [A, B] = j.useState(!1);
        j.useEffect(() => {
            B(!0);
        }, []), j.useEffect(() => {
            const C = setTimeout(() => {
                i();
            }, 1000 * x.autoCloseDuration);
            return () => clearTimeout(C);
        }, []);
        const C = () => B(!1);
        return y ? (0, g.jsxs)(_y, {
            onAnimationComplete: () => {
                A || z(!1);
            },
            initial: {
                bottom: 0,
                opacity: 0
            },
            animate: {
                bottom: A ? 20 : 0,
                opacity: A ? 1 : 0
            },
            transition: {
                type: 'spring',
                stiffness: 120
            },
            children: [
                (0, g.jsxs)(_z, {
                    children: [
                        (0, g.jsx)(_C, {
                            src: x.imageUrl
                        }),
                        (0, g.jsx)(_A, {
                            onClick: C,
                            children: (0, g.jsx)(_B, {})
                        })
                    ]
                }),
                (0, g.jsxs)(_D, {
                    children: [
                        (0, g.jsx)(_E, {
                            children: x.title
                        }),
                        (0, g.jsx)(_F, {
                            children: x.description
                        })
                    ]
                })
            ]
        }) : null;
    };
    var _x = y => (0, k.createPortal)((0, g.jsx)(w, {
        ...y
    }), document.body);
    const _y = (0, l.default)(m.motion.div).attrs({
            className: 'medium-shadow'
        })(n || (n = v`
  position: absolute;
  right: 20px;
  width: 350px;
  background: ${ 0 };
  border-radius: 6px;
  color: ${ 0 };
  overflow: hidden;
  font-family: ${ 0 };
  z-index: 99999999;
`), h.default.White, h.default.Black, i.Fonts.SFPro),
        _z = l.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = v`
  position: relative;
`)),
        _A = l.default.div.attrs({
            className: 'flex hc vc'
        })(p || (p = v`
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
        _B = l.default.i.attrs({
            className: 'fal fa-times'
        })(q || (q = v``)),
        _C = l.default.img.attrs({
            className: 'maxWidth'
        })(r || (r = v``)),
        _D = l.default.div(s || (s = v`
  padding: 20px;
`)),
        _E = l.default.div(t || (t = v`
  font-size: 22px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        _F = l.default.div(u || (u = v`
  font-size: 15px;
  margin-top: 7px;
`));
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....');

    function _j(k, l, m) {
        return function(n) {
            const {
                prefixCls: o,
                style: p
            } = n, q = h.useRef(null), [r, s] = h.useState(0), [t, u] = h.useState(0), [v, w] = (0, g.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: x
            } = h.useContext(i.ConfigContext), y = x(l || 'select', o);
            return h.useEffect(() => {
                if (w(!0), 'undefined' != typeof ResizeObserver) {
                    const z = new ResizeObserver(A => {
                            const B = A[0].target;
                            s(B.offsetHeight + 8), u(B.offsetWidth);
                        }),
                        A = setInterval(() => {
                            var B;
                            const C = m ? `.${ m(y) }` : `.${ y }-dropdown`,
                                D = null === (B = q.current) || void 0 === B ? void 0 : B.querySelector(C);
                            D && (clearInterval(A), z.observe(D));
                        }, 10);
                    return () => {
                        clearInterval(A), z.disconnect();
                    };
                }
            }, []), h.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, h.createElement('div', {
                ref: q,
                style: {
                    paddingBottom: r,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: t
                }
            }, h.createElement(k, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, p), {
                    margin: 0
                }),
                open: v,
                visible: v,
                getPopupContainer: () => q.current
            }))));
        };
    }
}), d.register('.....', function(e, f) {
    a(e.exports, 'initMoveMotion', function() {
        return _p;
    });
    var g = d('.....'),
        h = d('.....');
    const i = new(0, g.Keyframes)('antMoveDownIn', {
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
        j = new(0, g.Keyframes)('antMoveDownOut', {
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
        k = new(0, g.Keyframes)('antMoveLeftIn', {
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
        l = new(0, g.Keyframes)('antMoveLeftOut', {
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
        m = new(0, g.Keyframes)('antMoveRightIn', {
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
        n = new(0, g.Keyframes)('antMoveRightOut', {
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
        o = {
            'move-up': {
                inKeyframes: new(0, g.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new(0, g.Keyframes)('antMoveUpOut', {
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
                inKeyframes: i,
                outKeyframes: j
            },
            'move-left': {
                inKeyframes: k,
                outKeyframes: l
            },
            'move-right': {
                inKeyframes: m,
                outKeyframes: n
            }
        },
        _p = (q, r) => {
            const {
                antCls: s
            } = q, t = `${ s }-${ r }`, {
                inKeyframes: u,
                outKeyframes: v
            } = o[r];
            return [
                (0, h.initMotion)(t, u, v, q.motionDurationMid),
                {
                    [`\n        ${ t }-enter,\n        ${ t }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: q.motionEaseOutCirc
                    },
                    [`${ t }-leave`]: {
                        animationTimingFunction: q.motionEaseInOutCirc
                    }
                }
            ];
        };
}), d.register('.....', function(e, f) {
    a(e.exports, 'SpaceContext', function() {
        return _p;
    }, function(g) {
        return _p = g;
    }), a(e.exports, 'default', function() {
        return _s;
    }, function(g) {
        return _s = g;
    });
    var g = d('.....'),
        h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....'),
        n = d('.....'),
        o = function(p, q) {
            var r = {};
            for (var s in p)
                Object.prototype.hasOwnProperty.call(p, s) && q.indexOf(s) < 0 && (r[s] = p[s]);
            if (null != p && 'function' == typeof Object.getOwnPropertySymbols) {
                var t = 0;
                for (s = Object.getOwnPropertySymbols(p); t < s.length; t++)
                    q.indexOf(s[t]) < 0 && Object.prototype.propertyIsEnumerable.call(p, s[t]) && (r[s[t]] = p[s[t]]);
            }
            return r;
        };
    const _p = i.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        q = {
            small: 8,
            middle: 16,
            large: 24
        };
    const r = s => {
        const {
            getPrefixCls: t,
            space: u,
            direction: v
        } = i.useContext(j.ConfigContext), {
            size: w = (null == u ? void 0 : u.size) || 'small',
            align: x,
            className: y,
            rootClassName: z,
            children: A,
            direction: B = 'horizontal',
            prefixCls: C,
            split: D,
            style: E,
            wrap: F = !1
        } = s, G = o(s, [
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
        ]), H = (0, k.default)(), [I, J] = i.useMemo(() => (Array.isArray(w) ? w : [
            w,
            w
        ]).map(K => function(L) {
            return 'string' == typeof L ? q[L] : L || 0;
        }(K)), [w]), K = (0, h.default)(A, {
            keepEmpty: !0
        }), L = void 0 === x && 'horizontal' === B ? 'center' : x, M = t('space', C), [N, O] = (0, n.default)(M), P = b(g)(M, O, `${ M }-${ B }`, {
            [`${ M }-rtl`]: 'rtl' === v,
            [`${ M }-align-${ L }`]: L
        }, y, z), Q = `${ M }-item`, R = 'rtl' === v ? 'marginLeft' : 'marginRight';
        let S = 0;
        const T = K.map((U, V) => {
                null != U && (S = V);
                const W = U && U.key || `${ Q }-${ V }`;
                return i.createElement(m.default, {
                    className: Q,
                    key: W,
                    direction: B,
                    index: V,
                    marginDirection: R,
                    split: D,
                    wrap: F
                }, U);
            }),
            U = i.useMemo(() => ({
                horizontalSize: I,
                verticalSize: J,
                latestIndex: S,
                supportFlexGap: H
            }), [
                I,
                J,
                S,
                H
            ]);
        if (0 === K.length)
            return null;
        const V = {};
        return F && (V.flexWrap = 'wrap', H || (V.marginBottom = -J)), H && (V.columnGap = I, V.rowGap = J), N(i.createElement('div', Object.assign({
            className: P,
            style: Object.assign(Object.assign({}, V), E)
        }, G), i.createElement(_p.Provider, {
            value: U
        }, T)));
    };
    r.Compact = l.default;
    var _s = r;
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....'),
        _i = () => {
            const [j, k] = g.useState(!1);
            return g.useEffect(() => {
                k((0, h.detectFlexGapSupported)());
            }, []), j;
        };
}), d.register('.....', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('.....'),
        h = d('.....');

    function _i(j) {
        let {
            className: k,
            direction: l,
            index: m,
            marginDirection: n,
            children: o,
            split: p,
            wrap: q
        } = j;
        const {
            horizontalSize: r,
            verticalSize: s,
            latestIndex: t,
            supportFlexGap: u
        } = g.useContext(h.SpaceContext);
        let v = {};
        return u || ('vertical' === l ? m < t && (v = {
            marginBottom: r / (p ? 2 : 1)
        }) : v = Object.assign(Object.assign({}, m < t && {
            [n]: r / (p ? 2 : 1)
        }), q && {
            paddingBottom: s
        })), null == o ? null : g.createElement(g.Fragment, null, g.createElement('div', {
            className: k,
            style: v
        }, o), m < t && p && g.createElement('span', {
            className: `${ k }-split`,
            style: v
        }, p));
    }
}), d.register('.....', function(e, f) {
    a(e.exports, 'getCloudinaryUrl', function() {
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
    a(e.exports, 'default', function() {
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
    e.exports = function(g) {
        return g && g.__esModule ? g : {
            default: g
        };
    };
}), d.register('.....', function(e, f) {});