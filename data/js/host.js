function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('uPF4C', function(b, c) {
    var e;
    e = b.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return h;
    });
    var f = d('8kSQZ');
    d('uPP4W');
    var g = d('SPqOR');
    var h = () => (0, f.jsx)(f.Fragment, {
        children: (0, f.jsx)(g.default, {})
    });
}), d.register('SPqOR', function(b, c) {
    a(b.exports, 'default', function() {
        return e;
    });
    var e = d('9sZwH').default;
}), d.register('9sZwH', function(b, c) {
    a(b.exports, 'default', function() {
        return k;
    });
    var e = d('8kSQZ'),
        f = d('Vlfxs');
    d('uPP4W');
    var g = d('6G/rR'),
        h = d('mQ9Dk'),
        i = d('PjB0f'),
        j = d('hM8sf');
    var k = () => (0, e.jsx)(j.default.Provider, {
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
}), d.register('6G/rR', function(b, c) {
    a(b.exports, 'default', function() {
        return t;
    });
    var e = d('D2s/V'),
        f = d('EDNAG'),
        g = d('cmhRe'),
        h = d('Lxtm9'),
        i = d('F6UBk'),
        j = d('HSOCo'),
        k = d('Jb6qJ'),
        l = d('27tUj'),
        m = d('W5WCb'),
        n = d('LdzZ/'),
        o = d('unqyd'),
        p = d('axhrt'),
        q = d('pQmpW'),
        r = d('41n4U'),
        s = d('+RgVA');
    var t = {
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
}), d.register('D2s/V', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'game', void 0), (0, e.__decorate)([f.observable], g.prototype, 'client', void 0), (0, e.__decorate)([f.observable], g.prototype, 'findingServerForGame', void 0), (0, e.__decorate)([f.observable], g.prototype, 'errorFindingServerForGame', void 0), (0, e.__decorate)([f.observable], g.prototype, 'attemptingToConnect', void 0), (0, e.__decorate)([f.observable], g.prototype, 'hasConnected', void 0), (0, e.__decorate)([f.observable], g.prototype, 'connected', void 0), (0, e.__decorate)([f.observable], g.prototype, 'connectionError', void 0), (0, e.__decorate)([f.observable], g.prototype, 'joinedRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'attemptingToJoinRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'errorJoiningRoom', void 0), (0, e.__decorate)([f.observable], g.prototype, 'roomError', void 0);
    var h = i;
}), d.register('EDNAG', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.defendingHomebase = f.observable.array(), this.lava = null, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'defendingHomebase', void 0), (0, e.__decorate)([f.observable], g.prototype, 'lava', void 0);
    var h = i;
}), d.register('cmhRe', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var e = class {};
}), d.register('Lxtm9', function(b, c) {
    a(b.exports, 'default', function() {
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
            }, this.specialGameType = f.observable.array(), this.currency = '$', this.language = 'en', this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.joinInLate = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.music = !0, this.modeOptions = {}, this.setGameOptionsFromStorage = (a, b) => {
                Object.keys(a).forEach(c => {
                    null !== this[c] && ('group' !== c && 'specialGameType' !== c && 'modeOptions' !== c || b) && (this[c] = a[c]);
                });
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], h.prototype, 'type', void 0), (0, e.__decorate)([f.observable], h.prototype, 'goal', void 0), (0, e.__decorate)([f.observable], h.prototype, 'specialGameType', void 0), (0, e.__decorate)([f.observable], h.prototype, 'currency', void 0), (0, e.__decorate)([f.observable], h.prototype, 'language', void 0), (0, e.__decorate)([f.observable], h.prototype, 'startingCash', void 0), (0, e.__decorate)([f.observable], h.prototype, 'handicap', void 0), (0, e.__decorate)([f.observable], h.prototype, 'clapping', void 0), (0, e.__decorate)([f.observable], h.prototype, 'joinInLate', void 0), (0, e.__decorate)([f.observable], h.prototype, 'powerups', void 0), (0, e.__decorate)([f.observable], h.prototype, 'themes', void 0), (0, e.__decorate)([f.observable], h.prototype, 'cleanPowerupsOnly', void 0), (0, e.__decorate)([f.observable], h.prototype, 'allowGoogleTranslate', void 0), (0, e.__decorate)([f.observable], h.prototype, 'music', void 0), (0, e.__decorate)([f.observable], h.prototype, 'modeOptions', void 0), (0, e.__decorate)([f.action.bound], h.prototype, 'setGameOptionsFromStorage', void 0), (0, e.__decorate)([f.computed], h.prototype, 'formattedGameOptions', null);
    var i = j;
}), d.register('F6UBk', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('UnUp5'),
        h = d('PDLD/2');
    class i {
        constructor() {
            (0, e.default)(this, 'availableThemes', g.observable.array()), this.currentRoute = h.GameStatus.setup, this.gameCode = '', this.clapCount = 0, this.reportId = '', this.activityItems = g.observable.array(), this.thanosValues = null, this.bossId = null, this.showBossBattleModal = !1, this.gameEndDate = 0, this.defendingHomebaseResults = null, this.roomIntentErrorMessage = '', (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], i.prototype, 'currentRoute', void 0), (0, f.__decorate)([g.observable], i.prototype, 'gameCode', void 0), (0, f.__decorate)([g.observable], i.prototype, 'clapCount', void 0), (0, f.__decorate)([g.observable], i.prototype, 'reportId', void 0), (0, f.__decorate)([g.observable], i.prototype, 'activityItems', void 0), (0, f.__decorate)([g.observable], i.prototype, 'thanosValues', void 0), (0, f.__decorate)([g.observable], i.prototype, 'bossId', void 0), (0, f.__decorate)([g.observable], i.prototype, 'showBossBattleModal', void 0), (0, f.__decorate)([g.observable], i.prototype, 'gameEndDate', void 0), (0, f.__decorate)([g.observable], i.prototype, 'defendingHomebaseResults', void 0), (0, f.__decorate)([g.observable], i.prototype, 'roomIntentErrorMessage', void 0);
    var j = k;
}), d.register('HSOCo', function(b, c) {
    a(b.exports, 'default', function() {
        return f;
    });
    var e = d('UM8oI');
    var f = class {
        constructor() {
            (0, e.default)(this, 'questions', []);
        }
    };
}), d.register('Jb6qJ', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    const g = (a, b) => a + b.balance,
        h = (a, b) => a + b.stones;
    class i {
        get filteredPlayers() {
            return this.players.filter(a => 'Player [Still Entering Name]' !== a.name);
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
    var j = k;
}), d.register('27tUj', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.specialSongIsPlaying = !1, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'specialSongIsPlaying', void 0);
    var h = i;
}), d.register('W5WCb', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.playerStats = f.observable.array(), (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'playerStats', void 0);
    var h = i;
}), d.register('LdzZ/', function(b, c) {
    a(b.exports, 'default', function() {
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
}), d.register('unqyd', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('6gioo'),
        f = d('UnUp5'),
        g = d('t5mrz');
    class h {
        constructor() {
            this.backgroundColor = g.default.BackgroundPurple, this.showingBossPreScreen = !1, this.showingLavaPreScreen = !1, this.showingHumansVsZombiesPreScreen = !1, this.snowing = !1, this.showingClassTip = !1, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], h.prototype, 'backgroundColor', void 0), (0, e.__decorate)([f.observable], h.prototype, 'showingBossPreScreen', void 0), (0, e.__decorate)([f.observable], h.prototype, 'showingLavaPreScreen', void 0), (0, e.__decorate)([f.observable], h.prototype, 'showingHumansVsZombiesPreScreen', void 0), (0, e.__decorate)([f.observable], h.prototype, 'snowing', void 0), (0, e.__decorate)([f.observable], h.prototype, 'showingClassTip', void 0);
    var i = j;
}), d.register('t5mrz', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
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
}), d.register('axhrt', function(b, c) {
    a(b.exports, 'PersonRole', function() {
        return g;
    }), a(b.exports, 'ImposterStatus', function() {
        return i;
    }), a(b.exports, 'default', function() {
        return l;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    let g;
    var h;
    let i;
    var j;
    (h = g || (g = {})).detective = 'detective', h.imposter = 'imposter', (j = i || (i = {})).intro = 'intro', j.questions = 'questions', j.discussion = 'discussion', j.voting = 'voting', j.votingResult = 'votingResult';
    class k {
        constructor() {
            this.status = i.intro, this.meetingsLeft = 5, this.investigationsLeft = 0, this.impostersLeft = 0, this.votes = 0, this.meetingResults = null, this.people = f.observable.array(), (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], k.prototype, 'status', void 0), (0, e.__decorate)([f.observable], k.prototype, 'meetingsLeft', void 0), (0, e.__decorate)([f.observable], k.prototype, 'investigationsLeft', void 0), (0, e.__decorate)([f.observable], k.prototype, 'impostersLeft', void 0), (0, e.__decorate)([f.observable], k.prototype, 'votes', void 0), (0, e.__decorate)([f.observable], k.prototype, 'meetingResults', void 0), (0, e.__decorate)([f.observable], k.prototype, 'people', void 0);
    var l = m;
}), d.register('pQmpW', function(b, c) {
    a(b.exports, 'DrawStatus', function() {
        return g;
    }), a(b.exports, 'default', function() {
        return j;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    let g;
    var h;
    (h = g || (g = {})).pickDrawer = 'pickDrawer', h.termSelection = 'termSelection', h.drawing = 'drawing', h.results = 'results';
    class i {
        constructor() {
            this.status = g.pickDrawer, this.round = {
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
    var j = k;
}), d.register('41n4U', function(b, c) {
    a(b.exports, 'PardyScreen', function() {
        return g;
    }), a(b.exports, 'PardyQuestionScreen', function() {
        return i;
    }), a(b.exports, 'PardyQuestionStatus', function() {
        return k;
    }), a(b.exports, 'default', function() {
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
            this.screen = g.home, this.questionScreen = i.preview, this.questionStatus = k.preview, this.currentRound = null, this.disabledSections = f.observable.array(), this.board = null, this.powers = f.observable.array(), this.playerCount = 0, this.betsPlaced = 0, this.playersAnswered = 0, this.playersAnsweredCorrectly = 0, this.nameOfFirstPlayerToAnswerCorrectly = '', (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], m.prototype, 'screen', void 0), (0, e.__decorate)([f.observable], m.prototype, 'questionScreen', void 0), (0, e.__decorate)([f.observable], m.prototype, 'questionStatus', void 0), (0, e.__decorate)([f.observable], m.prototype, 'currentRound', void 0), (0, e.__decorate)([f.observable], m.prototype, 'disabledSections', void 0), (0, e.__decorate)([f.observable], m.prototype, 'board', void 0), (0, e.__decorate)([f.observable], m.prototype, 'powers', void 0), (0, e.__decorate)([f.observable], m.prototype, 'finaleQuestionId', void 0), (0, e.__decorate)([f.observable], m.prototype, 'playerCount', void 0), (0, e.__decorate)([f.observable], m.prototype, 'betsPlaced', void 0), (0, e.__decorate)([f.observable], m.prototype, 'playersAnswered', void 0), (0, e.__decorate)([f.observable], m.prototype, 'playersAnsweredCorrectly', void 0), (0, e.__decorate)([f.observable], m.prototype, 'nameOfFirstPlayerToAnswerCorrectly', void 0);
    var n = o;
}), d.register('+RgVA', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('6gioo'),
        f = d('UnUp5');
    class g {
        constructor() {
            this.hasReceivedHostStaticState = !1, this.currentGameIsUsingGroups = !1, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'hasReceivedHostStaticState', void 0), (0, e.__decorate)([f.observable], g.prototype, 'currentGameIsUsingGroups', void 0);
    var h = i;
}), d.register('mQ9Dk', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('t5mrz'),
        g = d('Vlfxs'),
        h = d('uPP4W'),
        i = d('h99Nu'),
        j = d('+oLzd'),
        k = d('hM8sf'),
        l = d('PDLD/2');
    let m;
    const n = (0, g.observer)(() => {
            const {
                ui: {
                    backgroundColor: o
                },
                gameValues: {
                    currentRoute: p
                }
            } = h.useContext(k.default), q = p === l.GameStatus.setup || p === l.GameStatus.join;
            return (0, e.jsx)(o, {
                backgroundColor: o,
                instantAnimateBackground: q,
                children: (0, e.jsx)(j.default, {})
            });
        }),
        o = i.default.div(m || (m = (a => a)`
  min-height: 100vh;
  width: 100%;
  color: ${ 0 };
  background: ${ 0 };
  transition: background ${ 0 }s;
  display: flex;
  flex-direction: column;
`), f.default.White, a => a.backgroundColor, a => a.instantAnimateBackground ? 0 : 0.5);
    var p = q;
}), d.register('+oLzd', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('PDLD/2');
    d('uPP4W');
    var g = d('gV4K/'),
        h = d('AxMZm'),
        i = d('ocZKQ'),
        j = d('SURf1'),
        k = d('BiWtn'),
        l = d('T01qO'),
        m = d('k9Cyd'),
        n = d('JrozK'),
        o = d('AU4G3'),
        p = d('Mibyl');
    var q = () => (0, e.jsxs)(e.Fragment, {
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
}), d.register('gV4K/', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('Vlfxs'),
        h = d('uPP4W');
    let i = class extends h.Component {
        render() {
            const {
                route: j
            } = this.props;
            if (this.props.gameValues.currentRoute !== j)
                return null;
            const k = this.props.component;
            return (0, f.jsx)(k, {});
        }
    };
    i = (0, e.__decorate)([
        (0, g.inject)('gameValues'),
        g.observer
    ], i);
    var j = k;
}), d.register('AxMZm', function(b, c) {
    a(b.exports, 'default', function() {
        return k;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('Vlfxs'),
        h = d('uPP4W'),
        i = d('J1MWY');
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
}), d.register('J1MWY', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('uPP4W'),
        h = d('AvBIL');
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
}), d.register('AvBIL', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('6G/rR'),
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
}), d.register('ocZKQ', function(b, c) {
    a(b.exports, 'default', function() {
        return x;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('1MpQD'),
        h = d('t5mrz'),
        i = d('0iTfX'),
        j = d('UnUp5'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('6KrRo'),
        o = d('j7vB1'),
        p = d('loQxd'),
        q = d('pES3K'),
        r = d('ZwDmc'),
        s = d('hIaqD'),
        t = d('+JcpN');
    let u;
    const v = m.default.div(u || (u = (a => a)`
  height: 100vh;
  width: 100%;
  font-family: ${ 0 };
  display: flex;
  flex-direction: column;
`), i.default.fontFamilyName);
    let w = class extends l.Component {
        componentDidMount() {
            if (this.props.blockComponentDidMountScript)
                return;
            (0, g.addActivityItem)({
                name: 'The Game',
                action: 'has started!',
                customTextColor: h.default.LightSuccessGreen
            });
            const x = (0, g.getMusicTrack)();
            this.props.gameOptions.music && (x.playing() || (0, g.inDrawMode)() || (0, g.inPardyMode)() || x.play()), (0, j.reaction)(() => this.props.gameOptions.music, b => {
                b ? x.playing() || (0, g.inDrawMode)() || (0, g.inPardyMode)() || x.play() : (0, g.inPardyMode)() || x.pause();
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
    var x = y;
}), d.register('1MpQD', function(b, c) {
    a(b.exports, 'plural', function() {
        return q;
    }), a(b.exports, 'numberWithCommas', function() {
        return r;
    }), a(b.exports, 'getMoney', function() {
        return s;
    }), a(b.exports, 'inDrawMode', function() {
        return N;
    }), a(b.exports, 'banPlayer', function() {
        return t;
    }), a(b.exports, 'addActivityItem', function() {
        return u;
    }), a(b.exports, 'inTeamMode', function() {
        return v;
    }), a(b.exports, 'getTeamColor', function() {
        return w;
    }), a(b.exports, 'endGame', function() {
        return x;
    }), a(b.exports, 'inThanosMode', function() {
        return H;
    }), a(b.exports, 'inZombiesVsHumansMode', function() {
        return K;
    }), a(b.exports, 'getMusicTrack', function() {
        return y;
    }), a(b.exports, 'inImposterMode', function() {
        return M;
    }), a(b.exports, 'inLavaMode', function() {
        return L;
    }), a(b.exports, 'startSpecialSong', function() {
        return z;
    }), a(b.exports, 'getAssetPath', function() {
        return Q;
    }), a(b.exports, 'getQueryVariable', function() {
        return A;
    }), a(b.exports, 'playSound', function() {
        return B;
    }), a(b.exports, 'stopSound', function() {
        return C;
    }), a(b.exports, 'send', function() {
        return E;
    }), a(b.exports, 'HideIfTabbedAway', function() {
        return F;
    }), a(b.exports, 'musicIsOn', function() {
        return G;
    }), a(b.exports, 'inHiddenMode', function() {
        return I;
    }), a(b.exports, 'inBossBattleMode', function() {
        return J;
    }), a(b.exports, 'inPardyMode', function() {
        return O;
    }), a(b.exports, 'inProduction', function() {
        return P;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('25lmu'),
        g = (d('qLBdK'), d('t5mrz')),
        h = d('6G/rR'),
        i = d('PDLD/2'),
        j = d('8D3j3'),
        k = d('s0hjF'),
        l = d('6yrsF'),
        m = d('4/f+U'),
        n = d('6VUtq'),
        o = d('0wOVz');
    const p = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        },
        q = (a, b, c) => 1 === b ? a : c || a + 's',
        r = a => a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        s = a => {
            const t = Math.round(a);
            return N() ? `${ r(t) } ${ q('point', t) }` : (t < 0 ? '-' : '') + h.default.gameOptions.currency + r(Math.abs(t));
        },
        t = a => {
            h.default.engine.game.send(j.default.kickPlayer, a), h.default.players.players.replace(h.default.players.players.filter(b => b.id !== a)), h.default.ui.showingClassTip || h.default.metadata.currentGameIsUsingGroups || (h.default.ui.showingClassTip = !0);
        },
        u = a => {
            h.default.gameValues.activityItems.replace([
                ...(0, m.takeRight)(h.default.gameValues.activityItems, 22),
                {
                    ...a,
                    key: p() + p() + '-' + p() + '-' + p() + '-' + p()
                }
            ]);
        },
        v = () => [
            o.TEAMS,
            k.HUMAN_ZOMBIE_DEFENDING_HOMEBASE,
            k.BOSS_BATTLE
        ].includes(h.default.gameOptions.specialGameType[0]),
        w = a => {
            const x = h.default.players.teams.findIndex(x => x.id === a);
            return -1 !== x ? h.default.players.teams[x].color.background : g.default.White;
        },
        x = a => {
            if ((H() || K()) && !a)
                return;
            const y = y();
            M() || y.fade(f.MUSIC_VOLUME, 0, 1000), setTimeout(() => {
                v() ? h.default.engine.game.send(j.default.requestTeamLeaderboard, 'final') : h.default.engine.game.send(j.default.requestPlayerLeaderboard, 'final'), h.default.gameValues.currentRoute = i.GameStatus.results;
            }, 500);
        };
    const y = () => H() ? f.default.thanos.thanos : K() ? f.default.halloween : L() ? f.default.lava.panther : M() ? f.default.imposter.mysteriousCase : N() ? f.default.draw.background : f.default.realityShow,
        z = (a, b) => {
            const A = h.default.gameOptions.music,
                B = y();
            h.default.powerups.specialSongIsPlaying || (A && B.fade(f.MUSIC_VOLUME, 0, 1000), setTimeout(() => {
                const C = new(0, l.Howl)({
                    src: [Q(a)],
                    volume: 0.9
                });
                C.play(), h.default.powerups.specialSongIsPlaying = !0;
                const D = String(h.default.ui.backgroundColor);
                h.default.ui.backgroundColor = b, C.on('end', () => {
                    h.default.powerups.specialSongIsPlaying = !1, h.default.ui.backgroundColor = D, A && h.default.gameValues.currentRoute === i.GameStatus.gameplay && B.fade(0, f.MUSIC_VOLUME, 1000);
                });
            }, 1000));
        },
        A = a => {
            const B = window.location.search.substring(1).split('&');
            for (let C = 0; C < B.length; C++) {
                const D = B[C].split('=');
                if (D[0] === a)
                    return D[1];
            }
            return null;
        },
        B = (a, b) => {
            const C = () => {
                b.onEnd && b.onEnd();
            };
            void 0 !== b.volume ? a.volume(b.volume) : a.volume(1), b.fadeIn && a.volume(0), a.play(), b.fadeIn && a.fade(0, void 0 !== b.volume ? b.volume : 1, b.fadeInDuration || 1000), a.once('play', () => {
                b.onPlay && b.onPlay(), b.fadeOut && setTimeout(() => {
                    a.fade(b.volume || 1, 0, 1000);
                }, 1000 * (a.duration() - 1));
            });
            const D = () => {
                b.onError ? b.onError() : C();
            };
            return a.once('end', C), a.once('loaderror', D), a.once('playerror', D), a;
        },
        C = (a, b, D = 1000) => {
            b ? (a.fade(a.volume(), 0, D), setTimeout(() => a.stop(), D)) : a.stop();
        },
        E = (a, b) => {
            const F = h.default.engine.game;
            F && F.send(a, b);
        },
        F = a => (0, n.default)() ? (0, e.jsx)(e.Fragment, {
            children: a.children
        }) : (0, e.jsx)('div', {}),
        G = () => !0 === h.default.gameOptions.music,
        H = () => h.default.gameOptions.specialGameType.includes(k.THANOS),
        I = () => h.default.gameOptions.specialGameType.includes(k.HIDDEN),
        J = () => h.default.gameOptions.specialGameType.includes(k.BOSS_BATTLE),
        K = () => h.default.gameOptions.specialGameType.includes(k.HUMAN_ZOMBIE_DEFENDING_HOMEBASE),
        L = () => h.default.gameOptions.specialGameType.includes(k.LAVA),
        M = () => h.default.gameOptions.specialGameType.includes(k.IMPOSTER),
        N = () => h.default.gameOptions.specialGameType.includes(k.DRAW),
        O = () => h.default.gameOptions.specialGameType.includes(k.PARDY);

    function P() {
        return !0;
    }

    function Q(a) {
        return '/assets/host/' + a;
    }
}), d.register('25lmu', function(b, c) {
    a(b.exports, 'MUSIC_VOLUME', function() {
        return g;
    }), a(b.exports, 'default', function() {
        return j;
    });
    var e = d('6yrsF'),
        f = d('1MpQD');
    const g = 0.45,
        h = !1,
        i = a => new(0, e.Howl)({
            src: [(0, f.getAssetPath)(`${ a }.mp3`)],
            preload: h
        });
    var j = {
        realityShow: new(0, e.Howl)({
            src: [(0, f.getAssetPath)('reality-show.mp3')],
            loop: !0,
            volume: g,
            preload: h
        }),
        thanos: {
            thanos: new(0, e.Howl)({
                src: [(0, f.getAssetPath)('thanos.mp3')],
                loop: !0,
                volume: g,
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
            volume: g,
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
}), d.register('8D3j3', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
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
}), d.register('s0hjF', function(b, c) {
    a(b.exports, 'THANOS', function() {
        return d;
    }), a(b.exports, 'HIDDEN', function() {
        return f;
    }), a(b.exports, 'BOSS_BATTLE', function() {
        return g;
    }), a(b.exports, 'SHOP_QR_SCAN', function() {
        return h;
    }), a(b.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return i;
    }), a(b.exports, 'LAVA', function() {
        return j;
    }), a(b.exports, 'IMPOSTER', function() {
        return k;
    }), a(b.exports, 'DRAW', function() {
        return l;
    }), a(b.exports, 'COMEBACK', function() {
        return m;
    }), a(b.exports, 'PARDY', function() {
        return n;
    });
    const e = 'THANOS',
        f = 'HIDDEN',
        g = 'BOSS_BATTLE',
        h = 'SHOP_QR_SCAN',
        i = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        j = 'LAVA',
        k = 'IMPOSTER',
        l = 'DRAW',
        m = 'COMEBACK',
        n = 'PARDY';
}), d.register('6VUtq', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('uPP4W'),
        f = d('W/x78'),
        g = function(a, b) {
            if (Array.isArray(a))
                return a;
            if (Symbol.iterator in Object(a))
                return function(a, b) {
                    var h = [],
                        i = !0,
                        j = !1,
                        k = void 0;
                    try {
                        for (var l, m = a[Symbol.iterator](); !(i = (l = m.next()).done) && (h.push(l.value), !b || h.length !== b); i = !0);
                    } catch (a) {
                        j = !0, k = a;
                    } finally {
                        try {
                            !i && h.return && h.return();
                        } finally {
                            if (j)
                                throw k;
                        }
                    }
                    return h;
                }(a, b);
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        },
        h = f.isSupported && f.visibility,
        i = function() {
            var j = (0, f.getHandlerArgs)(),
                k = g(j, 1)[0],
                l = (0, e.useState)(k),
                m = g(l, 2),
                n = m[0],
                o = m[1];
            return (0, e.useEffect)(function() {
                if (h) {
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
}), d.register('W/x78', function(b, c) {
    a(b.exports, 'isSupported', function() {
        return g;
    }), a(b.exports, 'visibility', function() {
        return h;
    }), a(b.exports, 'getHandlerArgs', function() {
        return n;
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
        g = e && Boolean(document.addEventListener),
        h = function() {
            if (!g)
                return null;
            var i = !0,
                j = !1,
                k = void 0;
            try {
                for (var l, m = f[Symbol.iterator](); !(i = (l = m.next()).done); i = !0) {
                    var n = l.value;
                    if (n.hidden in document)
                        return n;
                }
            } catch (i) {
                j = !0, k = i;
            } finally {
                try {
                    !i && h.return && h.return();
                } finally {
                    if (j)
                        throw k;
                }
            }
            return null;
        }(),
        i = function() {
            if (!h)
                return [
                    !0,
                    'visible'
                ];
            var j = h.hidden,
                k = h.state;
            return [
                !document[j],
                document[k]
            ];
        };
}), d.register('0wOVz', function(b, c) {
    a(b.exports, 'CLASSIC', function() {
        return d;
    }), a(b.exports, 'TEAMS', function() {
        return f;
    }), a(b.exports, 'THANOS', function() {
        return g;
    }), a(b.exports, 'BOSS_BATTLE', function() {
        return h;
    }), a(b.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return i;
    }), a(b.exports, 'LAVA', function() {
        return j;
    }), a(b.exports, 'IMPOSTER', function() {
        return k;
    }), a(b.exports, 'DRAW', function() {
        return l;
    }), a(b.exports, 'PARDY', function() {
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
}), d.register('0iTfX', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var e = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), d.register('6KrRo', function(c, f) {
    a(c.exports, 'default', function() {
        return u;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('YfLmS'),
        i = d('1MpQD'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('ZHc14'),
        m = d('PDLD/2'),
        n = d('nogjv'),
        o = d('JtCCC'),
        p = d('0Vm3k'),
        q = d('tK/kr24'),
        r = d('kHl2z');
    const s = a => (0, g.jsxs)('span', {
        children: [
            a.minutes,
            ':',
            a.seconds
        ]
    });
    let t = class extends k.Component {
        componentDidMount() {
            this.props.gameValues.gameEndDate || (this.props.gameValues.gameEndDate = this.state.startDate + 60000 * this.props.gameOptions.goal.value);
        }
        render() {
            const u = this.getGameGoalText();
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
                            children: (0, i.inThanosMode)() ? 'Collect All 6 Infinity Stones' : 'TIME' === u ? this.timeRender() : u
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
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
            }), (0, e.default)(this, 'timeRender', () => this.props.gameValues.gameEndDate ? (0, g.jsx)(b(l), {
                renderer: s,
                onComplete: i.endGame,
                date: this.props.gameValues.gameEndDate
            }) : null), (0, e.default)(this, 'getGameGoalText', () => {
                const {
                    gameOptions: {
                        goal: u
                    }
                } = this.props;
                return u.type === m.GameGoal.allIn ? `Reach ${ (0, i.getMoney)(u.value) }` : u.type === m.GameGoal.race ? `First to ${ (0, i.getMoney)(u.value) }` : u.type === m.GameGoal.time ? 'TIME' : '';
            });
        }
    };
    t = (0, f.__decorate)([
        (0, j.inject)('gameValues', 'gameOptions', 'ui', 'engine'),
        j.observer
    ], t);
    var u = v;
}), d.register('ZHc14', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.getTimeDifference = a.exports.zeroPad = void 0;
    var e = Object.assign || function(a) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (a[h] = g[h]);
            }
            return a;
        },
        f = function() {
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
        g = i(d('uPP4W')),
        h = i(d('uj3CK'));

    function i(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    var j = a.exports.zeroPad = function(a) {
            var k = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            if (0 === k)
                return a;
            var l = String(a);
            return l.length >= k ? l : ('0'.repeat(k) + l).slice(-1 * k);
        },
        k = a.exports.getTimeDifference = function(a) {
            var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                m = l.now,
                n = void 0 === m ? Date.now : m,
                o = l.precision,
                p = void 0 === o ? 0 : o,
                q = l.controlled,
                r = void 0 !== q && q,
                s = 'string' == typeof a ? new Date(a) : a,
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
        l = function(a) {
            function m(a) {
                ! function(a, m) {
                    if (!(a instanceof m))
                        throw new TypeError('Cannot call a class as a function');
                }(this, m);
                var n = function(a, m) {
                    if (!a)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return !m || 'object' != typeof m && 'function' != typeof m ? a : m;
                }(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, a));
                m.call(n);
                var o = n.props,
                    p = o.date,
                    q = o.now,
                    r = o.precision,
                    s = o.controlled;
                return n.mounted = !1, n.state = e({}, k(p, {
                    now: q,
                    precision: r,
                    controlled: s
                })), n;
            }
            return function(a, m) {
                if ('function' != typeof m && null !== m)
                    throw new TypeError('Super expression must either be null or a function, not ' + typeof m);
                a.prototype = Object.create(m && m.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(a, m) : a.__proto__ = m);
            }(m, a), f(m, [{
                    key: 'componentDidMount',
                    value: function() {
                        this.mounted = !0, this.props.controlled || (this.interval = setInterval(this.tick, this.props.intervalDelay));
                    }
                },
                {
                    key: 'componentWillReceiveProps',
                    value: function(a) {
                        var n = a.date,
                            o = a.now,
                            p = a.precision,
                            q = a.controlled;
                        this.setDeltaState(k(n, {
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
                    value: function(a) {
                        !this.state.completed && a.completed && (this.clearInterval(), this.props.onComplete && this.props.onComplete(a)), this.mounted && this.setState(e({}, a));
                    }
                },
                {
                    key: 'getFormattedDelta',
                    value: function() {
                        var n = this.state,
                            o = n.days,
                            p = n.hours,
                            q = this.state,
                            r = q.minutes,
                            s = q.seconds,
                            t = this.props,
                            u = t.daysInHours,
                            v = t.zeroPadLength;
                        return u ? (p = j(p + 24 * o, v), o = null) : p = j(p, Math.min(2, v)), {
                            days: o,
                            hours: p,
                            minutes: j(r, Math.min(2, v)),
                            seconds: j(s, Math.min(2, v))
                        };
                    }
                },
                {
                    key: 'clearInterval',
                    value: function(a) {
                        function n() {
                            return a.apply(this, arguments);
                        }
                        return n.toString = function() {
                            return a.toString();
                        }, n;
                    }(function() {
                        clearInterval(this.interval), delete this.interval;
                    })
                },
                {
                    key: 'render',
                    value: function() {
                        var o = this.getFormattedDelta();
                        if (this.props.renderer)
                            return this.props.renderer(e({}, this.props, this.state, o));
                        if (this.state.completed && this.props.children) {
                            var p = e({}, this.props, this.state, o);
                            return delete p.children, g.default.cloneElement(this.props.children, {
                                countdown: p
                            });
                        }
                        var p = o.days,
                            q = o.hours,
                            r = o.minutes,
                            s = o.seconds;
                        return g.default.createElement('span', null, p, null != p ? ':' : '', q, ':', r, ':', s);
                    }
                }
            ]), m;
        }(g.default.Component),
        m = function() {
            var n = this;
            this.tick = function() {
                var o = n.props,
                    p = o.date,
                    q = o.now,
                    r = o.precision,
                    s = o.controlled,
                    t = o.onTick,
                    u = k(p, {
                        now: q,
                        precision: r,
                        controlled: s
                    });
                n.setDeltaState(e({}, u)), t && u.total > 0 && t(u);
            };
        };
    a.exports.default = l, l.propTypes = {
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
    }, l.defaultProps = {
        daysInHours: !1,
        zeroPadLength: 2,
        controlled: !1,
        intervalDelay: 1000,
        precision: 0,
        children: null
    };
}), d.register('nogjv', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('YfLmS');
    d('uPP4W');
    var h = a => (0, e.jsx)(g.default, {
        placement: 'leftBottom',
        title: a.tooltipMessage,
        children: (0, e.jsx)(f.default, {
            style: {
                marginLeft: 5
            },
            onClick: a.onClick,
            type: 'primary',
            shape: 'circle',
            icon: a.icon,
            size: 'large'
        })
    });
}), d.register('JtCCC', function(b, c) {
    a(b.exports, 'Container', function() {
        return l;
    }), a(b.exports, 'GameCode', function() {
        return m;
    }), a(b.exports, 'Goal', function() {
        return n;
    }), a(b.exports, 'HeaderSectionContainer', function() {
        return o;
    });
    var e = d('0iTfX'),
        f = d('h99Nu');
    let g, h, i, j, k = a => a;
    const l = f.default.div(g || (g = k`
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
        m = f.default.div(h || (h = k`
  padding: 6px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  font-family: ${ 0 };
  ${ 0 }
`), e.default.fontFamilyName, a => a.showLargeCode ? '\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.9);\n    z-index: 99999;\n    font-size: 150px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  ' : null),
        n = f.default.div(i || (i = k`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  font-size: 29px;
  ${ 0 };
`), e.default.black),
        o = f.default.div(j || (j = k`
  ${ 0 }
  width: ${ 0 }%;
;
`), a => a.customCSS ? a.customCSS : '', a => a.customWidth ? a.customWidth : 25);
}), d.register('0Vm3k', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('3nT4r'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'EnterOutlined';
    var j = f.forwardRef(i);
}), d.register('3nT4r', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'enter',
        theme: 'outlined'
    };
}), d.register('tK/kr24', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('XEZLJ24'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'LogoutOutlined';
    var j = f.forwardRef(i);
}), d.register('XEZLJ24', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), d.register('kHl2z', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('eRitH'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'SoundOutlined';
    var j = f.forwardRef(i);
}), d.register('eRitH', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 00-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0021.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0021.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 00-21.7-5.9L746 287.8a15.99 15.99 0 00-5.8 21.8L760 344z'
                }
            }]
        },
        name: 'sound',
        theme: 'outlined'
    };
}), d.register('j7vB1', function(b, c) {
    a(b.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('G602L'),
        j = d('MJNTX');
    let k;
    const l = h.default.div(k || (k = (a => a)`
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
    var n = o;
}), d.register('G602L', function(b, c) {
    a(b.exports, 'leaderboardSorter', function() {
        return q;
    }), a(b.exports, 'default', function() {
        return t;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('1mZtJ'),
        h = d('1MpQD'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('cBb/w'),
        l = d('h99Nu'),
        m = d('PDLD/2'),
        n = d('uu6j3'),
        o = d('0wOVz');
    let p;
    const q = a => {
            const r = (0, h.inThanosMode)() ? 'stones' : 'balance';
            return a.slice().sort((a, c) => a[r] === c[r] ? 0 : a[r] > c[r] ? -1 : 1);
        },
        r = l.default.div(p || (p = (a => a)`
  max-width: ${ 0 };
  ${ 0 } min-width: 420px;
  flex: 1;
  min-height: 0;
  ${ 0 } display: flex;
  flex-direction: column;
`), a => a.customWidth ? a.customMaxWidth : '420px', a => a.customWidth ? 'width:' + a.customWidth + ';' : null, a => a.blockScroll ? null : 'overflow: scroll;');
    let s = class extends j.Component {
        render() {
            const t = (0, h.inTeamMode)(),
                u = q(t ? this.props.players.teams : this.props.players.players),
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
                            isPlayer: !t,
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
    var t = u;
}), d.register('1mZtJ', function(b, c) {
    a(b.exports, 'PowerupNames', function() {
        return d;
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
}), d.register('uu6j3', function(b, c) {
    a(b.exports, 'getTeamPlayerNames', function() {
        return A;
    }), a(b.exports, 'default', function() {
        return M;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('3Ntzy'),
        h = d('KV+OV'),
        i = d('1MpQD'),
        j = d('t5mrz'),
        k = d('0iTfX'),
        l = d('mJDQE'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('PDLD/2'),
        p = d('fQNJp');
    let q, r, s, t, u, v, w, x, y, z = a => a;
    const A = a => {
            let B = '';
            return a.forEach((c, d) => {
                B += c, d + 1 !== a.length && (B += ', ');
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
`), a => a.background, a => a.text, l.default.basic),
        C = n.default.div(r || (r = z`
  ${ 0 };
  font-size: ${ 0 }px;
`), k.default.black, a => a.large ? 34 : 23),
        D = n.default.div(s || (s = z`
  ${ 0 };
  font-size: ${ 0 }px;
  margin-left: 7px;
  margin-right: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`), k.default.bold, a => a.large ? 30 : 20),
        E = n.default.div(t || (t = z`
  font-size: ${ 0 }px;
`), a => a.large ? 30 : 20),
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
`), a => a.large ? 37 : 25, a => a.large ? 37 : 25, a => a.background),
        I = n.default.div(x || (x = z`
  font-size: ${ 0 }px;
  ${ 0 };
`), a => a.large ? 37 : 25, k.default.bold),
        J = n.default.div(y || (y = z`
  font-size: ${ 0 }px;
  text-align: center;
`), a => a.large ? 24 : 16),
        K = 'takes the lead';
    class L extends m.Component {
        componentDidUpdate(a) {
            if (this.props.gameGoal.type === o.GameGoal.race && this.props.data.balance >= this.props.gameGoal.value)
                (0, i.endGame)();
            else if (1 === this.props.position && 1 !== a.position) {
                if (this.props.hidden)
                    return;
                if (this.props.isPlayer) {
                    const M = this.props.data;
                    (0, i.addActivityItem)({
                        name: (0, i.inHiddenMode)() ? 'Someone' : M.name,
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                drawerVisible: !1
            }), (0, e.default)(this, 'openDrawer', () => this.setState({
                drawerVisible: !0
            })), (0, e.default)(this, 'closeDrawer', () => this.setState({
                drawerVisible: !1
            })), (0, e.default)(this, 'getTeamPlayerNames', () => {
                const M = this.props.data;
                return A(M.players);
            }), (0, e.default)(this, 'getColors', () => {
                const M = this.props.data,
                    {
                        theme: N
                    } = O,
                    P = this.props.themes,
                    Q = P.filter(O => O.name === N).length > 0 ? P.filter(O => O.name === N)[0] : P.filter(O => 'Default' === O.name)[0];
                return 'Default' === Q.name ? {
                    background: j.default.White,
                    text: j.default.Black
                } : {
                    background: Q.question.background,
                    text: Q.question.text
                };
            });
        }
    }
    var M = N;
}), d.register('3Ntzy', function(b, c) {
    a(b.exports, 'default', function() {
        return k;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('qLBdK'),
        h = d('Vlfxs'),
        i = d('uPP4W');
    let j = class extends i.Component {
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
                    return (await g.default.post('/api/translate', {
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
}), d.register('mJDQE', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var e = {
        basic: '0px 4px 33px -6px rgba(0, 0, 0, 0.46)',
        light: '0 4px 14px 0 rgba(0, 0, 0, 0.2)'
    };
}), d.register('fQNJp', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('YfLmS'),
        h = d('8D3j3'),
        i = d('1MpQD'),
        j = d('t5mrz'),
        k = d('uPP4W'),
        l = d('h99Nu');
    let m;
    const n = a => (0, f.jsx)(g.default, {
        title: a.tooltip,
        placement: 'bottomRight',
        children: (0, f.jsx)(r, {
            onClick: a.handleClick,
            backgroundColor: a.backgroundColor,
            children: (0, f.jsx)('i', {
                className: a.icon
            })
        })
    });
    class o extends k.Component {
        render() {
            const p = void 0 === this.props.playerBalance ? `${ this.props.playerStones } stones` : (0, i.getMoney)(this.props.playerBalance || 0);
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
                                    p,
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'kickPlayer', () => {
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
    var p = q;
    const r = l.default.div(m || (m = (a => a)`
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
`), a => a.backgroundColor, j.default.White);
}), d.register('MJNTX', function(b, c) {
    a(b.exports, 'default', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('HnqLp'),
        i = d('/nJeo');
    let j;
    const k = g.default.div(j || (j = (a => a)`
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
    var m = n;
}), d.register('HnqLp', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('mJDQE'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('cBb/w'),
        l = d('h99Nu'),
        m = d('gU9FF'),
        n = d('1MpQD');
    let o;
    const p = l.default.div(o || (o = (a => a)`
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getContent', () => this.props.withoutContainer ? this.getFeed() : (0, g.jsx)(p, {
                children: this.getFeed()
            })), (0, e.default)(this, 'getFeed', () => {
                const r = this.props.gameValues.activityItems.slice().reverse();
                return (0, g.jsx)(k.default, {
                    enterAnimation: 'accordionVertical',
                    style: {
                        padding: 8
                    },
                    children: r.map(r => (0, g.jsx)(m.default, {
                        customFont: this.props.customFont,
                        item: r
                    }, 'ai-' + r.key))
                });
            });
        }
    };
    q = (0, f.__decorate)([
        (0, i.inject)('gameValues'),
        i.observer
    ], q);
    var r = a => (0, g.jsx)(n.HideIfTabbedAway, {
        children: (0, g.jsx)(q, {
            ...a
        })
    });
}), d.register('gU9FF', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('3Ntzy'),
        g = d('t5mrz'),
        h = d('0iTfX'),
        i = d('uPP4W'),
        j = d('h99Nu');
    let k, l, m = a => a;
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
`), a => a.customColor ? a.customColor : g.default.Gold);
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
    var q = r;
}), d.register('/nJeo', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD'),
        g = d('mJDQE'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('155EM'),
        l = d('WuQ0G'),
        m = d('hM8sf');
    let n;
    const o = i.lazy(() => d('FiBdx')),
        p = j.default.div(n || (n = (a => a)`
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
    var q = (0, h.observer)(() => {
        const {
            innerWidth: r,
            innerHeight: s
        } = (0, l.useWindowSize)(), {
            players: t
        } = i.useContext(m.default), u = (0, f.inThanosMode)() ? t.totalStones : t.totalBalance;
        return (0, e.jsxs)(p, {
            id: 'gimkit-balance-tracker',
            children: [
                (0, e.jsx)(f.HideIfTabbedAway, {
                    children: (0, e.jsx)(k.default, {
                        width: r,
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
}), d.register('155EM', function(c, A) {
    a(c.exports, 'default', function() {
        return x;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('1MpQD'),
        i = d('0iTfX'),
        j = d('mJDQE'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('Atmdn'),
        n = d('h99Nu'),
        o = d('PDLD/2');
    let p, q, r = a => a;
    const s = a => (0, h.getMoney)(a),
        t = a => `${ a } ${ (0, h.plural)('stone', a) }`,
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
`), a => a.fontSize, j.default.basic);
    let w = class extends l.Component {
        static getDerivedStateFromProps(a, b) {
            return {
                lastBalance: b.currentBalance,
                currentBalance: a.balance
            };
        }
        componentDidUpdate() {
            this.props.gameOptions.goal.type === o.GameGoal.allIn && this.state.currentBalance >= this.props.gameOptions.goal.value && (0, h.endGame)();
        }
        render() {
            const x = (0, h.inThanosMode)() ? t : s,
                y = (d = this.props.width, A = this.props.height, e = x(this.state.currentBalance).length, (d + A) / 2 / (e + (e < 3 ? 4 : 2)) * 0.9);
            var z, A, B;
            return (0, g.jsx)(u, {
                children: (0, g.jsx)(v, {
                    fontSize: y,
                    children: (0, g.jsx)(b(m), {
                        start: this.state.lastBalance,
                        end: this.state.currentBalance,
                        formattingFn: (0, h.inThanosMode)() ? t : s,
                        duration: 0.6
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                lastBalance: 0,
                currentBalance: 0
            });
        }
    };
    w = (0, f.__decorate)([
        (0, k.inject)('gameOptions'),
        k.observer
    ], w);
    var x = y;
}), d.register('Atmdn', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var e = d('uPP4W'),
        f = d('43hS6');

    function g(a, b) {
        var h = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            b && (i = i.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function h(a) {
        for (var i = 1; i < arguments.length; i++) {
            var j = null != arguments[i] ? arguments[i] : {};
            i % 2 ? g(Object(j), !0).forEach(function(i) {
                i(a, i, j[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(j)) : g(Object(j)).forEach(function(i) {
                Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(j, i));
            });
        }
        return a;
    }

    function i(a, b, e) {
        return b in a ? Object.defineProperty(a, b, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = e, a;
    }

    function j() {
        return j = Object.assign ? Object.assign.bind() : function(a) {
            for (var k = 1; k < arguments.length; k++) {
                var l = arguments[k];
                for (var m in l)
                    Object.prototype.hasOwnProperty.call(l, m) && (a[m] = l[m]);
            }
            return a;
        }, j.apply(this, arguments);
    }

    function k(a, b) {
        if (null == a)
            return {};
        var l, m, n = function(a, b) {
            if (null == a)
                return {};
            var o, p, q = {},
                r = Object.keys(a);
            for (p = 0; p < r.length; p++)
                o = r[p], b.indexOf(o) >= 0 || (q[o] = a[o]);
            return q;
        }(a, b);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(a);
            for (m = 0; m < o.length; m++)
                l = o[m], b.indexOf(l) >= 0 || Object.prototype.propertyIsEnumerable.call(a, l) && (n[l] = a[l]);
        }
        return n;
    }
    var l = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? e.useLayoutEffect : e.useEffect;

    function m(a) {
        var n = e.useRef(a);
        return l(function() {
            n.current = a;
        }), e.useCallback(function() {
            for (var o = arguments.length, p = new Array(o), q = 0; q < o; q++)
                p[q] = arguments[q];
            return n.current.apply(void 0, p);
        }, []);
    }
    var n = [
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
        o = {
            decimal: '.',
            delay: null,
            prefix: '',
            suffix: '',
            duration: 2,
            start: 0,
            startOnMount: !0,
            enableReinitialize: !0
        },
        p = function(a) {
            var q = e.useMemo(function() {
                    return h(h({}, o), a);
                }, [a]),
                r = q.ref,
                s = q.startOnMount,
                t = q.enableReinitialize,
                u = q.delay,
                v = q.onEnd,
                w = q.onStart,
                x = q.onPauseResume,
                y = q.onReset,
                z = q.onUpdate,
                A = k(q, n),
                B = e.useRef(),
                C = e.useRef(),
                D = e.useRef(!1),
                E = m(function() {
                    return function(a, q) {
                        var F = q.decimal,
                            G = q.decimals,
                            H = q.duration,
                            I = q.easingFn,
                            J = q.end,
                            K = q.formattingFn,
                            L = q.numerals,
                            M = q.prefix,
                            N = q.separator,
                            O = q.start,
                            P = q.suffix,
                            Q = q.useEasing,
                            R = q.enableScrollSpy,
                            S = q.scrollSpyDelay,
                            T = q.scrollSpyOnce;
                        return new f.CountUp(a, J, {
                            startVal: O,
                            duration: H,
                            decimal: F,
                            decimalPlaces: G,
                            easingFn: I,
                            formattingFn: K,
                            numerals: L,
                            separator: N,
                            prefix: M,
                            suffix: P,
                            useEasing: Q,
                            useGrouping: !!N,
                            enableScrollSpy: R,
                            scrollSpyDelay: S,
                            scrollSpyOnce: T
                        });
                    }('string' == typeof r ? r : r.current, A);
                }),
                F = m(function(a) {
                    var G = B.current;
                    if (G && !a)
                        return G;
                    var H = E();
                    return B.current = H, H;
                }),
                G = m(function() {
                    var H = function() {
                        return F(!0).start(function() {
                            null == v || v({
                                pauseResume: H,
                                reset: I,
                                start: K,
                                update: J
                            });
                        });
                    };
                    u && u > 0 ? C.current = setTimeout(H, 1000 * u) : H(), null == w || w({
                        pauseResume: H,
                        reset: I,
                        update: J
                    });
                }),
                H = m(function() {
                    F().pauseResume(), null == x || x({
                        reset: I,
                        start: K,
                        update: J
                    });
                }),
                I = m(function() {
                    F().el && (C.current && clearTimeout(C.current), F().reset(), null == y || y({
                        pauseResume: H,
                        start: K,
                        update: J
                    }));
                }),
                J = m(function(a) {
                    F().update(a), null == z || z({
                        pauseResume: H,
                        reset: I,
                        start: K
                    });
                }),
                K = m(function() {
                    I(), G();
                }),
                L = m(function(a) {
                    s && (a && I(), G());
                });
            return e.useEffect(function() {
                D.current ? t && L(!0) : (D.current = !0, L());
            }, [
                t,
                D,
                L,
                u,
                a.start,
                a.suffix,
                a.prefix,
                a.duration,
                a.separator,
                a.decimals,
                a.decimal,
                a.formattingFn
            ]), e.useEffect(function() {
                return function() {
                    I();
                };
            }, [I]), {
                start: K,
                pauseResume: H,
                reset: I,
                update: J,
                getCountUp: F
            };
        },
        q = [
            'className',
            'redraw',
            'containerProps',
            'children',
            'style'
        ];
    a.exports.default = function(a) {
        var r = a.className,
            s = a.redraw,
            t = a.containerProps,
            u = a.children,
            v = a.style,
            w = k(a, q),
            x = e.useRef(null),
            y = e.useRef(!1),
            z = p(h(h({}, w), {}, {
                ref: x,
                startOnMount: 'function' != typeof u || 0 === a.delay,
                enableReinitialize: !1
            })),
            A = z.start,
            B = z.reset,
            C = z.update,
            D = z.pauseResume,
            E = z.getCountUp,
            F = m(function() {
                A();
            }),
            G = m(function(r) {
                a.preserveValue || B(), C(r);
            }),
            H = m(function() {
                'function' != typeof a.children || x.current instanceof Element ? E() : console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
            });
        e.useEffect(function() {
            H();
        }, [H]), e.useEffect(function() {
            y.current && G(a.end);
        }, [
            a.end,
            G
        ]);
        var I = s && a;
        return e.useEffect(function() {
            s && y.current && F();
        }, [
            F,
            s,
            I
        ]), e.useEffect(function() {
            !s && y.current && F();
        }, [
            F,
            s,
            a.start,
            a.suffix,
            a.prefix,
            a.duration,
            a.separator,
            a.decimals,
            a.decimal,
            a.className,
            a.formattingFn
        ]), e.useEffect(function() {
            y.current = !0;
        }, []), 'function' == typeof u ? u({
            countUpRef: x,
            start: A,
            reset: B,
            update: C,
            pauseResume: D,
            getCountUp: E
        }) : e.createElement('span', j({
            className: r,
            ref: x,
            style: v
        }, t), void 0 !== a.start ? E().formattingFn(a.start) : '');
    }, a.exports.useCountUp = p;
}), d.register('43hS6', function(b, c) {
    a(b.exports, 'CountUp', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var e = function() {
            return (e = Object.assign || function(a) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (a[i] = f[i]);
                return a;
            }).apply(this, arguments);
        },
        f = function() {
            function g(g, b, c) {
                var h = this;
                this.endVal = b, this.options = c, this.version = '2.3.2', this.defaults = {
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
                }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = '', this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(g) {
                    h.startTime || (h.startTime = g);
                    var i = g - h.startTime;
                    h.remaining = h.duration - i, h.useEasing ? h.countDown ? h.frameVal = h.startVal - h.easingFn(i, 0, h.startVal - h.endVal, h.duration) : h.frameVal = h.easingFn(i, h.startVal, h.endVal - h.startVal, h.duration) : h.frameVal = h.startVal + (h.endVal - h.startVal) * (i / h.duration);
                    var j = h.countDown ? h.frameVal < h.endVal : h.frameVal > h.endVal;
                    h.frameVal = j ? h.endVal : h.frameVal, h.frameVal = Number(h.frameVal.toFixed(h.options.decimalPlaces)), h.printValue(h.frameVal), i < h.duration ? h.rAF = requestAnimationFrame(h.count) : null !== h.finalEndVal ? h.update(h.finalEndVal) : h.callback && h.callback();
                }, this.formatNumber = function(g) {
                    var i, j, k, l, m = g < 0 ? '-' : '';
                    i = Math.abs(g).toFixed(h.options.decimalPlaces);
                    var n = (i += '').split('.');
                    if (j = n[0], k = n.length > 1 ? h.options.decimal + n[1] : '', h.options.useGrouping) {
                        l = '';
                        for (var o = 0, p = j.length; o < p; ++o)
                            0 !== o && o % 3 == 0 && (l = h.options.separator + l), l = j[p - o - 1] + l;
                        j = l;
                    }
                    return h.options.numerals && h.options.numerals.length && (j = j.replace(/[0-9]/g, function(g) {
                        return h.options.numerals[+g];
                    }), k = k.replace(/[0-9]/g, function(g) {
                        return h.options.numerals[+g];
                    })), m + h.options.prefix + j + k + h.options.suffix;
                }, this.easeOutExpo = function(g, b, c, e) {
                    return c * (1 - Math.pow(2, -10 * g / e)) * 1024 / 1023 + b;
                }, this.options = e(e({}, this.defaults), c), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(b), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, '' === this.options.separator && (this.options.useGrouping = !1), this.el = 'string' == typeof g ? document.getElementById(g) : g, this.el ? this.printValue(this.startVal) : this.error = '[CountUp] target is null or undefined', 'undefined' != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, g) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                    return h.handleScroll(h);
                }), window.onscroll = function() {
                    window.onScrollFns.forEach(function(g) {
                        return g();
                    });
                }, this.handleScroll(this)));
            }
            return g.prototype.handleScroll = function(g) {
                if (g && window && !g.once) {
                    var h = window.innerHeight + window.scrollY,
                        i = g.el.getBoundingClientRect(),
                        j = i.top + i.height + window.pageYOffset;
                    j < h && j > window.scrollY && g.paused ? (g.paused = !1, setTimeout(function() {
                        return g.start();
                    }, g.options.scrollSpyDelay), g.options.scrollSpyOnce && (g.once = !0)) : window.scrollY > j && !g.paused && g.reset();
                }
            }, g.prototype.determineDirectionAndSmartEasing = function() {
                var h = this.finalEndVal ? this.finalEndVal : this.endVal;
                this.countDown = this.startVal > h;
                var i = h - this.startVal;
                if (Math.abs(i) > this.options.smartEasingThreshold && this.options.useEasing) {
                    this.finalEndVal = h;
                    var j = this.countDown ? 1 : -1;
                    this.endVal = h + j * this.options.smartEasingAmount, this.duration = this.duration / 2;
                } else
                    this.endVal = h, this.finalEndVal = null;
                null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
            }, g.prototype.start = function(g) {
                this.error || (this.callback = g, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
            }, g.prototype.pauseResume = function() {
                this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
            }, g.prototype.reset = function() {
                cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
            }, g.prototype.update = function(g) {
                cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(g), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
            }, g.prototype.printValue = function(g) {
                var h = this.formattingFn(g);
                'INPUT' === this.el.tagName ? this.el.value = h : 'text' === this.el.tagName || 'tspan' === this.el.tagName ? this.el.textContent = h : this.el.innerHTML = h;
            }, g.prototype.ensureNumber = function(g) {
                return 'number' == typeof g && !isNaN(g);
            }, g.prototype.validateValue = function(g) {
                var h = Number(g);
                return this.ensureNumber(h) ? h : (this.error = '[CountUp] invalid start or end value: '.concat(g), null);
            }, g.prototype.resetDuration = function() {
                this.startTime = null, this.duration = 1000 * Number(this.options.duration), this.remaining = this.duration;
            }, g;
        }();
}), d.register('WuQ0G', function(b, c) {
    a(b.exports, 'useWindowSize', function() {
        return i;
    });
    var e = d('uPP4W'),
        f = d('43hEj'),
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

    function i() {
        var j = (0, e.useState)(function() {
                return 'undefined' != typeof window ? h() : g;
            }),
            k = j[0],
            l = j[1];
        return (0, f.useIsomorphicEffect)(function() {
            function m() {
                l(h());
            }
            if ('undefined' != typeof window)
                return window.addEventListener('resize', m),
                    function() {
                        window.removeEventListener('resize', m);
                    };
            console.warn('useWindowSize: window is undefined.');
        }, []), k;
    }
}), d.register('43hEj', function(b, c) {
    a(b.exports, 'useIsomorphicEffect', function() {
        return f;
    });
    var e = d('uPP4W'),
        f = 'undefined' == typeof window ? e.useEffect : e.useLayoutEffect;
}), d.register('hM8sf', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('uPP4W'),
        f = d('6G/rR');
    var g = e.createContext(f.default);
}), d.register('FiBdx', function(a, b) {
    a.exports = import('./' + d('tIOy4').resolve('gBSGY')).then(() => d('2A+Qr'));
}), d.register('loQxd', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('HnqLp'),
        g = d('6KrRo');
    d('uPP4W');
    var h = d('h99Nu'),
        i = d('TjrFO'),
        j = d('laJ/S'),
        k = d('PjB0f');
    let l, m, n, o, p = a => a;
    var q = () => ((0, j.useDidMount)(() => {
        (0, k.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
    }), (0, e.jsxs)(r, {
        children: [
            (0, e.jsx)(g.default, {}),
            (0, e.jsxs)(s, {
                children: [
                    (0, e.jsx)(t, {
                        children: (0, e.jsx)(i.default, {})
                    }),
                    (0, e.jsx)(u, {
                        children: (0, e.jsx)(f.default, {
                            withoutContainer: !0
                        })
                    })
                ]
            })
        ]
    }));
    const r = h.default.div(l || (l = p`
  height: 100vh;
  width: 100%;
  display: flex;
  background: #151515;
  flex-direction: column;
`)),
        s = h.default.div(m || (m = p`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`)),
        t = h.default.div(n || (n = p`
  font-family: ${ 0 };
  height: 65%;
  width: 100%;
`), '\'Bowlby One SC\', cursive'),
        u = h.default.div(o || (o = p`
  height: 35%;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 7px;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
`));
}), d.register('TjrFO', function(b, c) {
    a(b.exports, 'getImage', function() {
        return o;
    }), a(b.exports, 'default', function() {
        return q;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('1MpQD'),
        h = d('t5mrz'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu'),
        l = d('6wqlJ');
    let m;
    const n = 'halloween-zombie',
        o = a => a === n ? (0, g.getAssetPath)('zombie-head.svg') : (0, g.getAssetPath)('support.svg');
    let p = class extends j.Component {
        render() {
            return (0, f.jsx)(s, {
                children: this.props.entities.defendingHomebase.map(a => {
                    return (0, f.jsx)(l.default, {
                        backgroundColor: (b = a.id, 'halloween-human' === b ? '#003c8f' : b === n ? '#494949' : h.default.Black),
                        color: h.default.White,
                        maxHealth: a.maxHealth,
                        currentHealth: a.health,
                        name: a.name,
                        image: o(a.id)
                    }, `base-${ a.id }`);
                    var q;
                })
            });
        }
    };
    p = (0, e.__decorate)([
        (0, i.inject)('entities'),
        i.observer
    ], p);
    var q = r;
    const s = k.default.div(m || (m = (a => a)`
  width: 100%;
  height: 100%;
  display: flex;
`));
}), d.register('6wqlJ', function(b, c) {
    a(b.exports, 'default', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('3Ntzy'),
        g = d('0x1Q5'),
        h = d('1MpQD'),
        i = d('0iTfX'),
        j = d('uPP4W'),
        k = d('lmfrI');
    class l extends j.Component {
        render() {
            const m = this.props,
                n = m.currentHealth / m.maxHealth * 100;
            return (0, e.jsxs)('div', {
                style: {
                    width: '50%',
                    height: '100%',
                    padding: 25,
                    boxSizing: 'border-box',
                    color: m.color,
                    background: m.backgroundColor,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: [
                    (0, e.jsx)('img', {
                        src: m.image,
                        style: {
                            width: 150
                        }
                    }),
                    (0, e.jsx)('div', {
                        style: {
                            fontSize: 50
                        },
                        children: m.name
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
                            (0, h.numberWithCommas)(m.currentHealth),
                            ' /',
                            ' ',
                            (0, h.numberWithCommas)(m.maxHealth),
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
    var m = n;
}), d.register('pES3K', function(b, c) {
    a(b.exports, 'default', function() {
        return t;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('25lmu'),
        i = d('1MpQD'),
        j = d('0iTfX'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('mzNWs'),
        o = d('bCuvm'),
        p = d('X0Q4w'),
        q = d('sEzem');
    let r, s = class extends l.Component {
        componentDidMount() {
            this.sound = (0, i.playSound)(h.default.lava.lavaRumble, {});
        }
        componentWillUnmount() {
            this.sound && (0, i.stopSound)(h.default.lava.lavaRumble);
        }
        render() {
            const {
                lava: t
            } = this.props.entities;
            return t ? (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsxs)(v, {
                        children: [
                            (0, g.jsx)(p.default, {
                                buildHeight: t.buildHeight,
                                lavaHeight: t.lavaHeight,
                                seconds: t.secondsLasted,
                                gameCode: this.props.gameValues.gameCode
                            }),
                            (0, g.jsx)(q.default, {
                                buildHeight: t.buildHeight,
                                lavaHeight: t.lavaHeight,
                                lavaSpeed: t.lavaIncreaseSpeed,
                                buildsInProgress: t.buildsInProgress
                            })
                        ]
                    }),
                    (0, g.jsx)(n.default, {}),
                    (0, g.jsx)(o.default, {})
                ]
            }) : null;
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'sound', null);
        }
    };
    s = (0, f.__decorate)([
        (0, k.inject)('entities', 'gameValues'),
        k.observer
    ], s);
    var t = u;
    const v = m.default.div.attrs({
        className: 'animated fadeIn'
    })(r || (r = (a => a)`
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: 2;
  display: flex;
  font-family: ${ 0 };
`), j.default.fontFamilyName);
}), d.register('mzNWs', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('h99Nu');
    let g;
    var h = () => (0, e.jsx)(i, {
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
    const i = f.default.div(g || (g = (a => a)`
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
}), d.register('bCuvm', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('0iTfX'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu');
    let k, l, m, n = a => a,
        o = class extends i.Component {
            render() {
                return this.props.entities.lava && this.props.entities.lava.lavaIncreasePaused ? (0, f.jsxs)(r, {
                    children: [
                        (0, f.jsx)(s, {}),
                        (0, f.jsx)(t, {
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
    var p = q;
    const r = j.default.div.attrs({
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
        s = j.default.i.attrs({
            className: 'fas fa-pause-circle'
        })(l || (l = n`
  font-size: 100px;
  color: #f5f5f5;
`)),
        t = j.default.div(m || (m = n`
  margin-left: 30px;
  font-size: 57px;
  font-weight: bold;
`));
}), d.register('X0Q4w', function(c, D) {
    a(c.exports, 'getTimerFromSeconds', function() {
        return z;
    }), a(c.exports, 'default', function() {
        return A;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('hdLv+'),
        i = d('b9Bct'),
        j = d('1MpQD'),
        k = d('HnqLp');
    let l, m, n, o, p, q, r, s, t, u, v, w, x, y = a => a;
    const z = a => {
        const A = (a, A) => (Math.pow(10, A) + ~~a).toString().substring(1),
            B = a % 60;
        return `${ A(Math.floor(a / 60), 2) }:${ A(B, 2) }`;
    };
    var A = a => {
        const {
            buildHeight: B,
            lavaHeight: C,
            seconds: D
        } = E, F = !!('undefined' != typeof window && window && window.navigator && navigator.userAgent.indexOf('Firefox') > 0);
        f.useEffect(() => {
            B < C && (0, j.endGame)();
        }, [C]);
        const G = ((E, b) => {
                if (b / E > 0.8)
                    return Math.round(1.2 * E);
                const H = Math.round(E).toString().length;
                let I = '';
                for (let J = 0; J < H; J++)
                    I += '9';
                let K = Number(I) + 1;
                return K *= 1.1, Math.round(K);
            })(B, C),
            H = Math.round(B / G * 100),
            I = Math.round(C / G * 100);
        return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(B, {
                children: [
                    (0, e.jsxs)('div', {
                        className: 'maxWidth',
                        style: {
                            transform: 'translateY(156px)'
                        },
                        children: [
                            (0, e.jsx)(b(h), {
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
                                    height: `${ I + 1 }vh`
                                },
                                transition: {
                                    duration: 2
                                },
                                style: {
                                    width: '100%',
                                    marginTop: F ? -7 : -6.5,
                                    background: 'linear-gradient(180deg, rgba(244,114,9,0.8) 0%, rgba(208,8,8,0.8) 100%)'
                                }
                            })
                        ]
                    }),
                    (0, e.jsx)(G, {
                        children: (0, e.jsxs)(H, {
                            children: [
                                (0, e.jsxs)(J, {
                                    children: [
                                        (0, e.jsxs)(K, {
                                            children: [
                                                (0, j.numberWithCommas)(B),
                                                ' ',
                                                (0, j.plural)('block', B)
                                            ]
                                        }),
                                        (0, e.jsxs)(L, {
                                            children: [
                                                (0, e.jsx)(N, {}),
                                                (0, e.jsx)(M, {
                                                    initial: {
                                                        height: 0
                                                    },
                                                    animate: {
                                                        height: `${ H }vh`
                                                    },
                                                    transition: {
                                                        duration: 2
                                                    }
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, e.jsx)(I, {
                                    children: (0, e.jsx)(k.default, {
                                        withoutContainer: !0
                                    })
                                })
                            ]
                        })
                    }),
                    (0, e.jsx)(C, {
                        children: (0, e.jsxs)(D, {
                            children: [
                                (0, e.jsx)(E, {
                                    children: z(D)
                                }),
                                (0, e.jsxs)(F, {
                                    children: [
                                        (0, e.jsx)('b', {
                                            children: 'Game Code:'
                                        }),
                                        ' ',
                                        E.gameCode
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        });
    };
    const B = g.default.div(l || (l = y`
  width: calc(100% - 350px);
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  overflow: hidden;
`)),
        C = g.default.div(m || (m = y`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`)),
        D = g.default.div(n || (n = y`
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
        E = g.default.div(o || (o = y`
  font-size: 70px;
  line-height: 70px;
`)),
        F = g.default.div(p || (p = y`
  font-size: 21px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 5px;
`)),
        G = g.default.div(q || (q = y`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
`)),
        H = g.default.div(r || (r = y`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`)),
        I = g.default.div(s || (s = y`
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
        J = g.default.div(t || (t = y`
  transform: translateY(${ 0 }px);
  width: 250px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  z-index: -1;
`), 156),
        K = g.default.div(u || (u = y`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
`)),
        L = g.default.div(v || (v = y`
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
        M = (0, g.default)(i.motion.div)(w || (w = y`
  width: 100%;
`)),
        N = g.default.div(x || (x = y`
  width: 100%;
  height: ${ 0 }px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), 150);
}), d.register('hdLv+', function(a, b) {
    a.exports, a.exports = function(a, b) {
        function e(a) {
            return a && 'object' == typeof a && 'default' in a ? a : {
                default: a
            };
        }
        var f = e(a),
            g = e(b);

        function h(a, b) {
            for (var i = 0; i < b.length; i++) {
                var j = b[i];
                j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(a, j.key, j);
            }
        }

        function i(a, b, e) {
            return b in a ? Object.defineProperty(a, b, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[b] = e, a;
        }

        function j() {
            return (j = Object.assign || function(a) {
                for (var k = 1; k < arguments.length; k++) {
                    var l = arguments[k];
                    for (var m in l)
                        Object.prototype.hasOwnProperty.call(l, m) && (a[m] = l[m]);
                }
                return a;
            }).apply(this, arguments);
        }

        function k(a, b) {
            var l = Object.keys(a);
            if (Object.getOwnPropertySymbols) {
                var m = Object.getOwnPropertySymbols(a);
                b && (m = m.filter(function(b) {
                    return Object.getOwnPropertyDescriptor(a, b).enumerable;
                })), l.push.apply(l, m);
            }
            return l;
        }

        function l(a) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
                return a.__proto__ || Object.getPrototypeOf(a);
            })(a);
        }

        function m(a, b) {
            return (m = Object.setPrototypeOf || function(a, b) {
                return a.__proto__ = b, a;
            })(a, b);
        }

        function n(a, b) {
            if (null == a)
                return {};
            var o, p, q = function(a, b) {
                if (null == a)
                    return {};
                var r, s, t = {},
                    u = Object.keys(a);
                for (s = 0; s < u.length; s++)
                    r = u[s], 0 <= b.indexOf(r) || (t[r] = a[r]);
                return t;
            }(a, b);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(a);
                for (p = 0; p < r.length; p++)
                    o = r[p], 0 <= b.indexOf(o) || Object.prototype.propertyIsEnumerable.call(a, o) && (q[o] = a[o]);
            }
            return q;
        }

        function o(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }

        function p(a) {
            var q = function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ('function' == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                } catch (a) {
                    return !1;
                }
            }();
            return function() {
                var r, s = l(a);
                if (q) {
                    var t = l(this).constructor;
                    r = Reflect.construct(s, arguments, t);
                } else
                    r = s.apply(this, arguments);
                return function(a, q) {
                    return !q || 'object' != typeof q && 'function' != typeof q ? o(a) : q;
                }(this, r);
            };
        }

        function q(a) {
            var r = a.options,
                s = n(a, ['options']);
            return f.default.createElement(r, j({}, s, r, s));
        }
        var r = function() {
                ! function(a, b) {
                    if ('function' != typeof b && null !== b)
                        throw new TypeError('Super expression must either be null or a function');
                    a.prototype = Object.create(b && b.prototype, {
                        constructor: {
                            value: a,
                            writable: !0,
                            configurable: !0
                        }
                    }), b && m(a, b);
                }(e, a.Component);
                var s = p(e);

                function t(a) {
                    var u;
                    return function(a, s) {
                        if (!(a instanceof s))
                            throw new TypeError('Cannot call a class as a function');
                    }(this, t), i(o(u = s.call(this, a)), 'width', function() {
                        return u.container.current.offsetWidth;
                    }), i(o(u), 'height', function() {
                        return u.container.current.offsetHeight;
                    }), u.container = f.default.createRef(), u.state = {
                        path: ''
                    }, u.lastUpdate = 0, u.elapsed = 0, u.step = 0, u.update = u.update.bind(o(u)), u;
                }
                return function(a, s, t) {
                    s && h(a.prototype, s), t && h(a, t);
                }(t, [{
                        key: 'calculateWavePoints',
                        value: function() {
                            for (var u = [], v = 0; v <= Math.max(this.props.points, 1); v++) {
                                var w = v / this.props.points * this.width(),
                                    x = (this.step + (v + v % this.props.points)) * this.props.speed * 100,
                                    y = Math.sin(x / 100) * this.props.amplitude,
                                    z = Math.sin(x / 100) * y + this.props.height;
                                u.push({
                                    x: w,
                                    y: z
                                });
                            }
                            return u;
                        }
                    },
                    {
                        key: 'buildPath',
                        value: function(a) {
                            function u(a, u) {
                                return ' C '.concat(a.x, ' ').concat(a.y, ' ').concat(a.x, ' ').concat(a.y, ' ').concat(u.x, ' ').concat(u.y);
                            }
                            var v = 'M '.concat(a[0].x, ' ').concat(a[0].y),
                                w = {
                                    x: (a[1].x - a[0].x) / 2,
                                    y: a[1].y - a[0].y + a[0].y + (a[1].y - a[0].y)
                                };
                            v += u(w, a[1]);
                            for (var x = y, z = 1; z < a.length - 1; z++)
                                v += u(x = {
                                    x: a[z].x - x.x + a[z].x,
                                    y: a[z].y - x.y + a[z].y
                                }, a[z + 1]);
                            return (v += ' L '.concat(this.width(), ' ').concat(this.height())) + ' L 0 '.concat(this.height(), ' Z');
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
                                var A = new Date();
                                this.elapsed += A - this.lastUpdate, this.lastUpdate = A;
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
                            var A = this.props,
                                B = A.style,
                                C = A.className,
                                D = A.fill,
                                E = (A.paused, A.children),
                                F = A.id,
                                G = (A.d, A.ref, n(A, [
                                    'style',
                                    'className',
                                    'fill',
                                    'paused',
                                    'children',
                                    'id',
                                    'd',
                                    'ref'
                                ]));
                            return y.default.createElement('div', {
                                style: function(A) {
                                    for (var H = 1; H < arguments.length; H++) {
                                        var I = null != arguments[H] ? arguments[H] : {};
                                        H % 2 ? k(Object(I), !0).forEach(function(H) {
                                            i(A, H, I[H]);
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(I)) : k(Object(I)).forEach(function(H) {
                                            Object.defineProperty(A, H, Object.getOwnPropertyDescriptor(I, H));
                                        });
                                    }
                                    return A;
                                }({
                                    width: '100%',
                                    display: 'inline-block'
                                }, B),
                                className: C,
                                id: F,
                                ref: this.container
                            }, y.default.createElement('svg', {
                                width: '100%',
                                height: '100%',
                                version: '1.1',
                                xmlns: 'http://www.w3.org/2000/svg'
                            }, E, y.default.createElement('path', j({
                                d: this.state.path,
                                fill: D
                            }, G))));
                        }
                    }
                ]), t;
            }(),
            s = {
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 3
            };
        return q.defaultProps = {
            paused: !1,
            fill: '#fff'
        }, q.propTypes = {
            paused: g.default.bool,
            fill: g.default.string,
            options: g.default.object
        }, q;
    }(d('uPP4W'), d('uj3CK'));
}), d.register('sEzem', function(b, c) {
    a(b.exports, 'default', function() {
        return s;
    });
    var e = d('8kSQZ'),
        f = d('v5Njf'),
        g = d('IsmrL'),
        h = d('ExtIT'),
        i = d('+4qMp'),
        j = d('8D3j3'),
        k = d('1MpQD'),
        l = d('t5mrz'),
        m = d('PjB0f');
    d('uPP4W');
    var n = d('h99Nu'),
        o = d('OH+hq');
    let p, q, r = a => a;
    var s = a => (0, e.jsx)(t, {
        children: (0, e.jsxs)(u, {
            children: [
                (0, e.jsx)(o.default, {
                    icon: 'fas fa-volcano',
                    title: 'Lava Height',
                    value: a.lavaHeight,
                    label: (0, m.plural)('block', a.lavaHeight),
                    footer: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(h.default, {
                                style: {
                                    background: l.default.White,
                                    marginTop: 15,
                                    marginBottom: 15
                                }
                            }),
                            (0, e.jsx)(g.default, {
                                onClick: () => {
                                    (0, k.send)(j.default.hostIncreaseLavaHeight, {
                                        amount: 0.1
                                    }), i.default.success({
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
                (0, e.jsx)(o.default, {
                    icon: 'fas fa-building',
                    title: 'Building Height',
                    value: a.buildHeight,
                    label: (0, m.plural)('block', a.buildHeight)
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, e.jsx)(o.default, {
                    icon: 'fas fa-tachometer-fast',
                    title: 'Lava Increase Speed',
                    value: a.lavaSpeed,
                    label: `${ (0, m.plural)('block', a.lavaSpeed) } per second`
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, e.jsx)(o.default, {
                    icon: 'fas fa-hammer',
                    title: 'Builds In Progress',
                    value: a.buildsInProgress
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 30
                    }
                })
            ]
        })
    });
    const t = n.default.div(p || (p = r`
  width: 350px;
  height: 100%;
  overflow-y: auto;
  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: rgba(0, 0, 0, 0.2);
`)),
        u = n.default.div(q || (q = r`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
`));
}), d.register('v5Njf', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('Au1Om'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'ArrowUpOutlined';
    var j = f.forwardRef(i);
}), d.register('Au1Om', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z'
                }
            }]
        },
        name: 'arrow-up',
        theme: 'outlined'
    };
}), d.register('OH+hq', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD');
    d('uPP4W');
    var g = d('h99Nu');
    let h, i, j, k, l, m, n, o = a => a;
    var p = a => (0, e.jsxs)(q, {
        children: [
            (0, e.jsxs)(r, {
                children: [
                    (0, e.jsx)(s, {
                        className: a.icon
                    }),
                    (0, e.jsx)(t, {
                        children: a.title
                    })
                ]
            }),
            (0, e.jsxs)(u, {
                children: [
                    (0, e.jsx)(v, {
                        children: (0, f.numberWithCommas)(a.value)
                    }),
                    a.label ? (0, e.jsx)(w, {
                        children: a.label
                    }) : null,
                    a.footer ? a.footer : null
                ]
            })
        ]
    });
    const q = g.default.div(h || (h = o`
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
        r = g.default.div(i || (i = o`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 10px;
  padding-left: 20px;
`)),
        s = g.default.i(j || (j = o`
  font-size: 15px;
  line-height: 15px;
  margin-right: 8px;
`)),
        t = g.default.div(k || (k = o`
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
`)),
        u = g.default.div(l || (l = o`
  width: 100%;
  padding: 20px;
`)),
        v = g.default.div(m || (m = o`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-size: 32px;
  line-height: 32px;
  font-weight: bold;
`)),
        w = g.default.div(n || (n = o`
  font-size: 16px;
  line-height: 16px;
  margin-top: 4px;
`));
}), d.register('ZwDmc', function(b, c) {
    a(b.exports, 'Container', function() {
        return B;
    }), a(b.exports, 'Content', function() {
        return C;
    }), a(b.exports, 'default', function() {
        return z;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('t5mrz'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('t6qxD'),
        l = d('lGL9U'),
        m = d('iJxzR'),
        n = d('HUNR1'),
        o = d('jwO1Z'),
        p = d('1MpQD'),
        q = d('25lmu'),
        r = d('kzbC1'),
        s = d('Vlfxs'),
        t = d('axhrt'),
        u = d('PjB0f');
    let v, w, x = a => a,
        y = class extends i.Component {
            componentDidMount() {
                (0, u.loadFont)('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'), setTimeout(() => {
                    (0, p.playSound)(q.default.imposter.spaceshipAmbience, {
                        volume: 0.16
                    });
                }, 1800);
            }
            render() {
                return (0, g.jsxs)(B, {
                    children: [
                        (0, g.jsx)(k.default, {}),
                        (0, g.jsx)(C, {
                            children: this.getContent()
                        })
                    ]
                });
            }
            constructor(...a) {
                super(...a), (0, e.default)(this, 'getContent', () => {
                    const {
                        status: z
                    } = this.props.imposter;
                    return z === t.ImposterStatus.intro ? (0, g.jsx)(r.default, {}) : z === t.ImposterStatus.questions ? (0, g.jsx)(l.default, {}) : z === t.ImposterStatus.discussion ? (0, g.jsx)(m.default, {}) : z === t.ImposterStatus.voting ? (0, g.jsx)(n.default, {}) : z === t.ImposterStatus.votingResult ? (0, g.jsx)(o.default, {}) : null;
                });
            }
        };
    y = (0, f.__decorate)([
        (0, s.inject)('imposter'),
        s.observer
    ], y);
    var z = A;
    const B = j.default.div(v || (v = x`
  flex: 1;
  background: ${ 0 };
  color: ${ 0 };
  display: flex;
`), h.default.Black, h.default.White),
        C = j.default.div(w || (w = x`
  flex: 1;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
`));
}), d.register('t6qxD', function(b, c) {
    a(b.exports, 'default', function() {
        return k;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('1MpQD');
    let i;
    class j extends f.Component {
        render() {
            return (0, e.jsxs)(m, {
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
    var k = l;
    const m = g.default.div(i || (i = (a => a)`
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
}), d.register('lGL9U', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('1MpQD'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu'),
        l = d('dECXa'),
        m = d('IeTjy');
    let n, o, p = a => a,
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
                return this.shouldGameEnd() ? null : (0, g.jsx)(t, {
                    children: (0, g.jsxs)(u, {
                        className: 'animated fadeIn',
                        children: [
                            (0, g.jsx)(l.default, {}),
                            (0, g.jsx)(m.default, {})
                        ]
                    })
                });
            }
            constructor(...a) {
                super(...a), (0, e.default)(this, 'checkForGameToEnd', () => {
                    this.shouldGameEnd() && (0, h.endGame)();
                }), (0, e.default)(this, 'shouldGameEnd', () => {
                    const {
                        meetingsLeft: r,
                        impostersLeft: s
                    } = this.props.imposter;
                    return !r || !s || r < s;
                });
            }
        };
    q = (0, f.__decorate)([
        (0, i.inject)('imposter'),
        i.observer
    ], q);
    var r = s;
    const t = k.default.div(n || (n = p`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 100vw;
`)),
        u = k.default.div(o || (o = p`
  flex: 1;
  display: flex;
  overflow: hidden;
`));
}), d.register('dECXa', function(b, c) {
    a(b.exports, 'default', function() {
        return B;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('mi9lw'),
        i = d('t5mrz'),
        j = d('uPP4W'),
        k = d('h99Nu'),
        l = d('bfSx/'),
        m = d('tK/kr24'),
        n = d('IsmrL'),
        o = d('c9FPT'),
        p = d('Vlfxs'),
        q = d('1MpQD'),
        r = d('8D3j3'),
        s = d('3Ntzy');
    let t, u, v, w, x, y, z = a => a,
        A = class extends j.Component {
            render() {
                const B = this.props.imposter.people.filter(B => B.markedAsClear);
                return (0, g.jsxs)(D, {
                    children: [
                        (0, g.jsxs)(E, {
                            children: [
                                this.canShowClearList() ? (0, g.jsx)(G, {
                                    children: (0, g.jsx)(s.default, {
                                        text: h.imposterStrings.clearList
                                    })
                                }) : null,
                                B.map(B => (0, g.jsx)(H, {
                                    children: B.name
                                }, `clear-${ B.id }`))
                            ]
                        }),
                        (0, g.jsxs)(F, {
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
                                (0, g.jsxs)(I, {
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
            constructor(...a) {
                super(...a), (0, e.default)(this, 'canShowClearList', () => {
                    const {
                        modeOptions: B
                    } = this.props.gameOptions;
                    return !(!B || !B.allowPublicInvestigations);
                }), (0, e.default)(this, 'endGameEarly', () => {
                    (0, q.send)(r.default.imposter.imposterWin);
                });
            }
        };
    A = (0, f.__decorate)([
        (0, p.inject)('imposter', 'gameValues', 'gameOptions'),
        p.observer
    ], A);
    var B = C;
    const D = k.default.div(t || (t = z`
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
        E = k.default.div(u || (u = z`
  padding: 20px;
  flex: 1;
  overflow-y: auto;
`)),
        F = k.default.div(v || (v = z`
  flex-shrink: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  border-top-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 2px;
`)),
        G = k.default.div(w || (w = z`
  font-size: 44px;
  line-height: 44px;
  font-weight: bold;
  margin-bottom: 15px;
`)),
        H = k.default.div(x || (x = z`
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
        I = k.default.div(y || (y = z`
  opacity: 0.9;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`));
}), d.register('mi9lw', function(b, c) {
    a(b.exports, 'imposterStrings', function() {
        return d;
    }), a(b.exports, 'imposterFontName', function() {
        return f;
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
        f = '"Space Grotesk", monospace';
}), d.register('bfSx/', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('rysZa'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'BulbOutlined';
    var j = f.forwardRef(i);
}), d.register('rysZa', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z'
                }
            }]
        },
        name: 'bulb',
        theme: 'outlined'
    };
}), d.register('c9FPT', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('axhrt'),
        f = d('6G/rR');
    var g = () => {
        f.default.imposter.status === e.ImposterStatus.questions && (f.default.imposter.status = e.ImposterStatus.discussion);
    };
}), d.register('IeTjy', function(b, c) {
    a(b.exports, 'default', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('mi9lw'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('orrO0'),
        j = d('KztDb');
    let k;
    class l extends g.Component {
        render() {
            return (0, e.jsxs)(o, {
                children: [
                    (0, e.jsx)(j.default, {}),
                    (0, e.jsx)(i.default, {})
                ]
            });
        }
    }
    var m = n;
    const o = h.default.div(k || (k = (a => a)`
  flex: 1;
  overflow: hidden;
  font-family: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), f.imposterFontName);
}), d.register('orrO0', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('HnqLp'),
        h = d('h99Nu'),
        i = d('mi9lw'),
        j = d('3Ntzy');
    let k, l, m, n = a => a;
    class o extends f.Component {
        render() {
            return (0, e.jsxs)(r, {
                children: [
                    (0, e.jsx)(s, {
                        children: (0, e.jsx)(j.default, {
                            text: i.imposterStrings.investigationLog
                        })
                    }),
                    (0, e.jsx)(t, {
                        children: (0, e.jsx)(g.default, {
                            withoutContainer: !0,
                            customFont: i.imposterFontName
                        })
                    })
                ]
            });
        }
    }
    var p = q;
    const r = h.default.div(k || (k = n`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 35px;
  overflow: hidden;
`)),
        s = h.default.div(l || (l = n`
  font-size: 44px;
  line-height: 44px;
  font-weight: bold;
  margin-bottom: 15px;
`)),
        t = h.default.div(m || (m = n`
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
}), d.register('KztDb', function(b, c) {
    a(b.exports, 'default', function() {
        return t;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('3Ntzy'),
        h = d('1MpQD'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu');
    let l, m, n, o, p, q = a => a;
    const r = a => (0, f.jsxs)(x, {
        children: [
            (0, f.jsx)(y, {
                children: a.num
            }),
            (0, f.jsx)(z, {
                children: (0, f.jsx)(g.default, {
                    text: `${ (0, h.plural)(a.stat, a.num) } left`
                })
            })
        ]
    });
    let s = class extends j.Component {
        render() {
            const {
                imposter: {
                    investigationsLeft: t,
                    meetingsLeft: u,
                    impostersLeft: v
                }
            } = this.props;
            return (0, f.jsxs)(v, {
                children: [
                    (0, f.jsx)(r, {
                        num: v,
                        stat: 'impostor'
                    }),
                    (0, f.jsx)(w, {}),
                    (0, f.jsx)(r, {
                        num: u,
                        stat: 'meeting'
                    }),
                    (0, f.jsx)(w, {}),
                    (0, f.jsx)(r, {
                        num: t,
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
    var t = u;
    const v = k.default.div(l || (l = q`
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
        w = k.default.div(m || (m = q`
  height: 100%;
  width: 3px;
  background: rgba(255, 255, 255, 0.2);
  margin-left: 35px;
  margin-right: 35px;
`)),
        x = k.default.div(n || (n = q`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`)),
        y = k.default.div(o || (o = q`
  font-size: 42px;
  line-height: 42px;
  font-weight: bold;
`)),
        z = k.default.div(p || (p = q`
  font-size: 18px;
  line-height: 18px;
  margin-top: 10px;
`));
}), d.register('iJxzR', function(b, c) {
    a(b.exports, 'Container', function() {
        return C;
    }), a(b.exports, 'ContentContainer', function() {
        return D;
    }), a(b.exports, 'Image', function() {
        return E;
    }), a(b.exports, 'Title', function() {
        return F;
    }), a(b.exports, 'Description', function() {
        return G;
    }), a(b.exports, 'Divider', function() {
        return H;
    }), a(b.exports, 'ActionText', function() {
        return I;
    }), a(b.exports, 'default', function() {
        return A;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('IsmrL'),
        i = d('mi9lw'),
        j = d('3Ntzy'),
        k = d('25lmu'),
        l = d('1MpQD'),
        m = d('t5mrz'),
        n = d('axhrt'),
        o = d('Vlfxs'),
        p = d('uPP4W'),
        q = d('h99Nu');
    let r, s, t, u, v, w, x, y = a => a,
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
                return (0, g.jsx)(C, {
                    children: (0, g.jsxs)(D, {
                        className: 'animated zoomInDown',
                        style: {
                            animationDelay: '0.6s',
                            animationDuration: '2.2s'
                        },
                        children: [
                            (0, g.jsx)(E, {
                                src: (0, l.getAssetPath)('discussion.svg')
                            }),
                            (0, g.jsx)(F, {
                                children: (0, g.jsx)(j.default, {
                                    text: i.imposterStrings.discussionHeader
                                })
                            }),
                            (0, g.jsx)(G, {
                                children: (0, g.jsx)(j.default, {
                                    text: i.imposterStrings.discussionDescription
                                })
                            }),
                            (0, g.jsx)(H, {}),
                            (0, g.jsx)(I, {
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
            constructor(...a) {
                super(...a), (0, e.default)(this, 'startVoting', () => this.props.imposter.status = n.ImposterStatus.voting);
            }
        };
    z = (0, f.__decorate)([
        (0, o.inject)('imposter'),
        o.observer
    ], z);
    var A = B;
    const C = q.default.div.attrs({
            className: 'maxWidth maxHeight scroll-y flex hc vc'
        })(r || (r = y`
  font-family: ${ 0 };
`), i.imposterFontName),
        D = q.default.div.attrs({
            className: 'flex hc vc flex-column'
        })(s || (s = y`
  margin: 45px;
  background: rgba(255, 255, 255, 0.95);
  color: ${ 0 };
  padding: 60px;
  border-radius: 10px;
  max-width: 650px;
`), m.default.Black),
        E = q.default.img(t || (t = y`
  height: 170px;
`)),
        F = q.default.div(u || (u = y`
  font-size: 52px;
  margin-top: 15px;
  font-weight: 900;
`)),
        G = q.default.div(v || (v = y`
  font-size: 24px;
  line-height: 24px;
  margin-top: 2px;
`)),
        H = q.default.div(w || (w = y`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.6);
  margin-top: 30px;
  margin-bottom: 30px;
`)),
        I = q.default.div(x || (x = y`
  margin-bottom: 11px;
  font-size: 15px;
`));
}), d.register('HUNR1', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('IsmrL'),
        i = d('mi9lw'),
        j = d('3Ntzy'),
        k = d('25lmu'),
        l = d('1MpQD'),
        m = d('axhrt'),
        n = d('Vlfxs'),
        o = d('uPP4W'),
        p = d('iJxzR');
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
            const r = this.possibleVotes();
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
                            children: `${ this.props.imposter.votes }/${ r } ${ (0, l.plural)('vote', r) } in`
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'possibleVotes', () => this.props.imposter.people.filter(a => !a.votedOff).length), (0, e.default)(this, 'endVoting', () => {
                this.props.imposter.status = m.ImposterStatus.votingResult;
            });
        }
    };
    q = (0, f.__decorate)([
        (0, n.inject)('imposter'),
        n.observer
    ], q);
    var r = s;
}), d.register('jwO1Z', function(b, c) {
    a(b.exports, 'Container', function() {
        return z;
    }), a(b.exports, 'Content', function() {
        return A;
    }), a(b.exports, 'default', function() {
        return x;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('mi9lw'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('R0oq9'),
        l = d('Jir1K'),
        m = d('fsdcs'),
        n = d('Vlfxs'),
        o = d('axhrt'),
        p = d('1MpQD'),
        q = d('25lmu');
    let r, s, t, u = a => a;
    var v;
    (v = t || (t = {})).boom = 'boom', v.name = 'name', v.reveal = 'reveal', v.stats = 'stats';
    let w = class extends i.Component {
        componentDidMount() {
            (0, p.playSound)(q.default.eventBoom, {}), setTimeout(() => {
                this.setToName();
            }, 2200);
        }
        render() {
            return (0, g.jsx)(z, {
                children: (0, g.jsx)(A, {
                    children: this.getContent()
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
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
                    stage: x
                } = this.state;
                return x === t.boom ? null : x === t.name ? (0, g.jsx)(l.default, {
                    onFinish: this.setToReveal,
                    name: this.props.imposter.meetingResults.name
                }) : x === t.reveal ? (0, g.jsx)(k.default, {
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
    var x = y;
    const z = j.default.div.attrs({
            className: 'maxWidth maxHeight flex vc'
        })(r || (r = u`
  font-family: ${ 0 };
  font-size: 36px;
  padding: 100px;
`), h.imposterFontName),
        A = j.default.div(s || (s = u``));
}), d.register('R0oq9', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('8kSQZ'),
        f = d('25lmu'),
        g = d('1MpQD'),
        h = d('uPP4W');
    var i = a => {
        const [j, k] = h.useState(!1);
        return h.useEffect(() => {
            setTimeout(() => {
                k(!0);
            }, 6770), (0, g.playSound)(f.default.imposter.tensionBuild, {
                volume: 0.53,
                onEnd: () => a.onFinish(),
                onError: () => {
                    setTimeout(a.onFinish, 10000);
                }
            });
        }, []), (0, e.jsxs)('div', {
            className: 'animated fadeIn',
            style: {
                animationDuration: '2s'
            },
            children: [
                a.name,
                ' was',
                j && (a.wasImposter ? ' an impostor.' : ' not an impostor.')
            ]
        });
    };
}), d.register('Jir1K', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('25lmu'),
        h = d('k2Slr');
    var i = a => {
        const [j, k] = f.useState(!1);
        return (0, e.jsx)('div', {
            className: j ? 'animated fadeOut' : '',
            children: (0, e.jsx)(h.default, {
                text: `${ a.name } was voted off the ship.`,
                sound: g.default.imposter.typing,
                soundDuration: 3600,
                onFinish: () => {
                    setTimeout(() => k(!0), 2000), setTimeout(a.onFinish, 3000);
                }
            })
        });
    };
}), d.register('k2Slr', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD'),
        g = d('uPP4W'),
        h = d('WgDR6');
    var i = a => {
        g.useEffect(() => {
            a.sound && (0, f.playSound)(a.sound, {
                volume: a.volume
            });
        }, []);
        const j = a.text,
            k = a.pace ? a.pace : a.soundDuration ? Math.round(a.soundDuration / j.length) : 140;
        return (0, e.jsx)(h.WindupChildren, {
            onFinished: a.onFinish,
            children: (0, e.jsx)(h.Pace, {
                ms: k,
                children: j
            })
        });
    };
}), d.register('WgDR6', function(c, t) {
    a(c.exports, 'Pace', function() {
        return B;
    }), a(c.exports, 'WindupChildren', function() {
        return R;
    });
    var e = d('uPP4W');
    d('+5s2q');

    function f(a) {
        return 2 === a.length;
    }

    function g(a) {
        return !!Array.isArray(a) && (3 === a.length && !(!Array.isArray(a[0]) || !Array.isArray(a[1])));
    }

    function h(a, b) {
        return [
            [],
            a.split(''),
            b
        ];
    }

    function i(a, b) {
        return [
            [],
            a,
            b
        ];
    }

    function j(a) {
        const [k, l] = m;
        return !(k.length > 0) && l.reduce((k, l) => g(l) && g(m) && k ? j(l) : k, !0);
    }

    function k([l, m]) {
        return 0 === m.length;
    }

    function n(l) {
        const o = z(l);
        return k(o) ? o : n(o);
    }

    function o(l) {
        if (j(l))
            return l;
        const [p, q, r] = s, t = s => g(s) ? o(s) : s;
        return [
            [],
            [
                ...p.map(t),
                ...q.map(t)
            ],
            r
        ];
    }

    function p([q, r]) {
        const s = r.reduce((q, r) => g(r) && !j(r) ? s(r) : q, void 0);
        if (s)
            return s;
        return q[q.length - 1];
    }

    function s(q) {
        const t = p(q);
        return g(t) ? s(t) : t;
    }

    function t([u, v]) {
        const w = u.map(u => {
                if (g(u)) {
                    const [x, y, z] = A;
                    return [
                        t(A),
                        z
                    ];
                }
                return u;
            }),
            [x] = y;
        if (g(x) && !j(x)) {
            const [z, A, B] = C;
            return [
                ...w,
                [
                    t(C),
                    B
                ]
            ];
        }
        return w;
    }

    function w([x, y]) {
        const [z] = A;
        return g(z) ? w(z) : z;
    }

    function z(x) {
        if (k(x))
            return x;
        const [A, B, C] = D, [E, ...e] = F;
        if (g(E)) {
            const G = z(E);
            return k(G) ? [
                [
                    ...A,
                    G
                ],
                e,
                C
            ] : [
                A,
                [
                    G,
                    ...e
                ],
                C
            ];
        }
        return [
            [
                ...A,
                E
            ],
            e,
            C
        ];
    }

    function A(x, y) {
        switch (x) {
            case '\u2014':
            case '\u2026':
                return 200;
            case '.':
            case ',':
                return 150;
            case '?':
            case '!':
                if ('!' !== y && '?' !== y)
                    return 150;
            case '-':
            case ' ':
            case '\n':
                return 0;
            default:
                return 20;
        }
    }
    const B = ({
        children: C
    }) => y(e).createElement(y(e).Fragment, null, C);

    function D(C) {
        if (k(C))
            return;
        const [E, F, G] = H, [I] = J;
        return I && g(I) ? D(I) : G.pace;
    }
    const E = ({
        children: F
    }) => y(e).createElement(y(e).Fragment, null, F);

    function G(F) {
        return F.type === E;
    }

    function H(F) {
        const [I, J, K] = L, M = p(L), [N] = O;
        let P = [];
        return M && g(M) && P.push(...H(M)), N && g(N) && !j(N) && P.push(...H(N)), K.onChar && P.push(K.onChar), P;
    }

    function I(F) {
        return {
            windup: F,
            didFinishOnce: !1
        };
    }

    function J(F, y) {
        switch (y.type) {
            case 'replace':
                return I(y.windup);
            case 'next':
                return {
                    ...F,
                    windup: z(F.windup)
                };
            case 'rewind':
                return {
                    windup: o(F.windup),
                        didFinishOnce: !1
                };
            case 'fast-forward':
                return {
                    ...F,
                    windup: n(F.windup)
                };
            case 'finish':
                return {
                    ...F,
                    didFinishOnce: !0
                };
            default:
                return F;
        }
    }

    function K(F, y) {
        const [{
            windup: L,
            didFinishOnce: M
        }, N] = (0, e.useReducer)(J, F, I), O = (0, e.useRef)(null), P = k(L), Q = (0, e.useCallback)(() => {
            P || (O.current && clearTimeout(O.current), N({
                type: 'fast-forward'
            }));
        }, [P]), R = (0, e.useCallback)(() => {
            O.current && clearTimeout(O.current), N({
                type: 'rewind'
            });
        }, []);
        return (0, e.useEffect)(() => {
            N({
                type: 'replace',
                windup: F
            });
        }, [F]), (0, e.useEffect)(() => {
            O.current && clearTimeout(O.current), y.skipped && N({
                type: 'fast-forward'
            }), !1 === y.skipped && N({
                type: 'rewind'
            });
        }, [y.skipped]), (0, e.useEffect)(() => {
            const S = H(L),
                T = s(L);
            S.length > 0 && T && S.forEach(S => {
                S(T);
            });
        }, [L]), (0, e.useEffect)(() => {
            if (!1 === M && P) {
                const S = setTimeout(() => {
                    y.onFinished && y.onFinished(), N({
                        type: 'finish'
                    });
                }, 0);
                return () => {
                    clearTimeout(S);
                };
            }
        }, [
            M,
            P,
            y
        ]), (0, e.useEffect)(() => {
            if (!P) {
                const S = D(L) || A,
                    T = s(L),
                    U = w(L);
                return O.current = setTimeout(() => {
                    N({
                        type: 'next'
                    });
                }, T ? S(T, U) : 0), () => {
                    O.current && clearTimeout(O.current);
                };
            }
        }, [
            L,
            P
        ]), {
            windup: L,
            skip: Q,
            rewind: R,
            isFinished: P
        };
    }
    const L = [
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

    function M(F) {
        const N = f(F) ? F[1] : F[2],
            O = f(F) ? F[0] : t(F),
            P = N.element || y(e).Fragment;
        if (N.props && Object.keys(N.props).includes('children'))
            return y(e).createElement(P, Object.assign({}, N.props));
        const Q = O.reduce((F, y) => {
            if ('string' == typeof y) {
                const R = F.slice(0, F.length - 1),
                    S = F[F.length - 1];
                return S && 'string' == typeof S ? [
                    ...R,
                    S + y
                ] : [
                    ...F,
                    y
                ];
            }
            return [
                ...F,
                M(y)
            ];
        }, []);
        return 'string' == typeof N.element && L.includes(N.element) ? y(e).createElement(P, Object.assign({
            key: N.key
        }, N.props)) : y(e).createElement(P, Object.assign({
            key: N.key
        }, N.props), Q);
    }
    const N = ({}) => null;
    const O = y(e).createContext({
        skip: () => {
            console.warn('Tried to use the useSkip hook outside of a WindupChildren component!!');
        },
        rewind: () => {
            console.warn('Tried to use the useRewind hook outside of a WindupChildren component!');
        },
        isFinished: !1
    });

    function P(F, c) {
        if ('string' == typeof c)
            return [
                ...F,
                ...c.split('')
            ];
        if ('number' == typeof c)
            return [
                ...F,
                ...c.toString().split('')
            ];
        if (!y(e).isValidElement(c))
            return F;
        const {
            children: Q,
            ...R
        } = c.props, S = c.type === B ? {
            pace: F => 'ms' in c.props ? c.props.ms : c.props.getPace(F)
        } : {};
        const T = G(c) ? {
                onChar: c.props.fn
            } : {},
            U = c.key ? {
                key: c.key
            } : {};
        if (function(F) {
                return F.type === N;
            }(c))
            return [
                ...F,
                h(' ', {
                    element: y(e).Fragment,
                    ...U,
                    props: {},
                    pace: () => c.props.ms
                })
            ];
        if (void 0 === Q)
            return [
                ...F,
                h(' ', {
                    element: c.type,
                    props: R,
                    ...U,
                    ...S,
                    ...T
                })
            ];
        if ('string' == typeof Q)
            return [
                ...F,
                h(Q, {
                    element: c.type,
                    props: R,
                    ...U,
                    ...S,
                    ...T
                })
            ];
        if (Q instanceof Function)
            return [
                ...F,
                h(' ', {
                    element: c.type,
                    props: {
                        children: Q,
                        ...R
                    },
                    ...U,
                    ...S,
                    ...T
                })
            ];
        const V = y(e).Children.toArray(Q).reduce(P, []).map(F => {
            if (g(F)) {
                const [W, X, Y] = Z;
                return [
                    W,
                    X,
                    {
                        ...S,
                        ...T,
                        ...Y
                    }
                ];
            }
            return F;
        });
        return [
            ...F,
            i(V, {
                element: c.type,
                props: R,
                ...U,
                ...S,
                ...T
            })
        ];
    }

    function Q(F) {
        return null == F ? '' : y(e).Children.map(F, F => 'string' == typeof F ? F : 'number' == typeof F ? F.toString() : y(e).isValidElement(F) ? `#${ F.key || '' }<${ Q(F.props.children) }>` : '').join(',');
    }
    const R = ({
        children: S,
        onFinished: T,
        skipped: U
    }) => {
        const V = function(S, y) {
                return (0, e.useMemo)(S, [Q(y)]);
            }(() => i(y(e).Children.toArray(S).reduce(P, []), {
                element: void 0
            }), S),
            {
                windup: W,
                skip: X,
                rewind: Y,
                isFinished: Z
            } = K(V, {
                onFinished: T,
                skipped: U
            });
        return y(e).createElement(O.Provider, {
            value: {
                skip: X,
                rewind: Y,
                isFinished: Z
            }
        }, M(W));
    };
}), d.register('+5s2q', function(b, c) {
    function e(a, b, c) {
        const f = 'OffscreenCanvas' in window,
            g = document.createElement('canvas'),
            h = f ? g.transferControlToOffscreen() : g;
        h.width = b;
        const i = h.getContext('2d');
        if (i) {
            i.font = c;
            return a.split(' ').reduce((a, c) => {
                const [j] = a.slice(-1), k = [
                    ...j,
                    c
                ].join(' ');
                let {
                    width: l
                } = i.measureText(k);
                return l <= b ? [
                    ...a.slice(0, -1),
                    [
                        ...j,
                        c
                    ]
                ] : 0 === j.length ? [
                    ...a.slice(0, -1),
                    [c]
                ] : [
                    ...a,
                    [c]
                ];
            }, [
                []
            ]).map(a => a.join(' ')).join('\n');
        }
        return console.warn('No canvas context was found, so the string was left as is!'), a;
    }
    a(b.exports, 'default', function() {
        return f;
    });
    var f = function(a, b, c) {
        if (function(a) {
                return Array.isArray(a);
            }(a)) {
            return e(a.join(''), b, c).split('').reduce((a, b, c) => '\n' === b ? [
                ...a,
                c
            ] : a, []).reduce((a, b) => function(a, b) {
                const {
                    indexToInsertInto: g,
                    localPosition: h
                } = b.reduce(({
                    indexToInsertInto: i,
                    localPosition: j,
                    lengthOfPreceding: k
                }, f, f) => {
                    const l = f.length + k;
                    return !i && !j && a < l ? {
                        indexToInsertInto: f,
                        localPosition: a - k,
                        lengthOfPreceding: l
                    } : {
                        indexToInsertInto: i,
                        localPosition: j,
                        lengthOfPreceding: l
                    };
                }, {
                    indexToInsertInto: 0,
                    localPosition: 0,
                    lengthOfPreceding: 0
                });
                return i.map((a, i) => i === j ? a.slice(0, k) + '\n' + a.slice(k) : a).map(a => a.split('\n').map((a, i, j) => i < j.length - 2 && i > 0 ? a.trim() : i < j.length - 2 ? a.trimRight() : i > 0 ? a.trimLeft() : a).join('\n'));
            }(b, a), a);
        }
        return e(a, b, c);
    };
}), d.register('fsdcs', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('8kSQZ'),
        f = d('25lmu'),
        g = d('1MpQD');
    d('uPP4W');
    var h = d('k2Slr');
    var i = a => (0, e.jsx)(h.default, {
        text: 0 === a.remainingImposters ? '0 impostors remain. Our research is saved!' : `${ a.remainingImposters } ${ (0, g.plural)('impostor', a.remainingImposters) } remain${ 1 === a.remainingImposters ? 's' : '' }. ${ a.meetingsLeft } ${ (0, g.plural)('meeting', a.meetingsLeft) } left.`,
        sound: f.default.imposter.typing,
        soundDuration: 3600,
        onFinish: () => {
            setTimeout(a.onFinish, 2200);
        }
    });
}), d.register('kzbC1', function(c, f) {
    a(c.exports, 'default', function() {
        return w;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('25lmu'),
        i = d('1MpQD'),
        j = d('axhrt'),
        k = d('PjB0f'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('jwO1Z'),
        o = d('k2Slr'),
        p = d('hTpBg'),
        q = d('h99Nu'),
        r = d('IsmrL');
    let s;
    let t = class extends m.Component {
        render() {
            return (0, g.jsx)(v, {
                gameOptions: this.props.gameOptions,
                imposter: this.props.imposter
            });
        }
    };
    t = (0, f.__decorate)([
        (0, l.inject)('gameOptions', 'imposter'),
        l.observer
    ], t);
    class u extends m.Component {
        componentDidMount() {
            (0, i.getMusicTrack)().fade(0, 0, 0), (0, i.playSound)(h.default.imposter.spaceDoorOpen, {
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
                    (0, g.jsx)(n.Container, {
                        children: (0, g.jsx)(n.Content, {
                            className: this.state.exiting ? 'animated fadeOut' : '',
                            children: this.state.show ? (0, g.jsx)(o.default, {
                                text: this.stages[this.state.stageIndex].text,
                                sound: h.default.imposter.typing,
                                soundDuration: 3600,
                                onFinish: this.nextStage
                            }, `imposter-intro-stage-${ this.state.stageIndex }`) : null
                        })
                    }),
                    (0, g.jsxs)(y, {
                        children: [
                            (0, g.jsx)('div', {}),
                            (0, g.jsx)('div', {
                                children: (0, g.jsx)(r.default, {
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
            var v, w;
            super(...a), (0, e.default)(this, 'state', {
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
                const x = this.stages;
                this.props.setTimeout(() => {
                    x[this.state.stageIndex + 1] ? (this.state.stageIndex + 1 === 1 && this.props.setTimeout(() => {
                        (0, i.playSound)(h.default.imposter.mystery, {
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
    const v = b(p)(u);
    var w = x;
    const y = q.default.div(s || (s = (a => a)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`));
}), d.register('hTpBg', function(a, b) {
    var e = d('uPP4W'),
        f = d('Q4vId');
    a.exports = f(e);
}), d.register('Q4vId', function(a, b) {
    var e = d('SsY2+'),
        f = d('zO4y4'),
        g = d('A7U/D');
    a.exports = function(a) {
        var h = 'undefined' == typeof window ? c : window,
            i = function(a, h, c) {
                return function(i, e) {
                    var j = Array.prototype.slice.call(arguments, 2),
                        k = a(function() {
                            h.call(this, k), 'function' == typeof i && i.apply(this, j);
                        }.bind(this), e);
                    return this[c] ? this[c].push(k) : this[c] = [k], k;
                };
            },
            j = function(a, h) {
                return function(c) {
                    if (this[h]) {
                        var k = this[h].indexOf(c); -
                        1 !== k && this[h].splice(k, 1);
                    }
                    a(c);
                };
            },
            k = '_ReactTimeout_timeouts',
            l = j(h.clearTimeout, k),
            m = i(h.setTimeout, l, k),
            n = '_ReactTimeout_intervals',
            o = j(h.clearInterval, n),
            p = i(h.setInterval, function() {}, n),
            q = '_ReactTimeout_immediates',
            r = j(h.clearImmediate, q),
            s = i(h.setImmediate, r, q),
            t = '_ReactTimeout_rafs',
            u = j(h.cancelAnimationFrame, t),
            v = i(h.requestAnimationFrame, u, t),
            w = function(a) {
                return a && 'function' == typeof a.slice ? a.slice(0) : [];
            };
        return function(h) {
            var x = e({
                displayName: 'ReactTimeout',
                setTimeout: m,
                clearTimeout: l,
                setInterval: p,
                clearInterval: o,
                setImmediate: s,
                clearImmediate: r,
                requestAnimationFrame: v,
                cancelAnimationFrame: u,
                componentWillUnmount: function() {
                    w(this[k]).forEach(this.clearTimeout), w(this[n]).forEach(this.clearInterval), w(this[q]).forEach(this.clearImmediate), w(this[t]).forEach(this.cancelAnimationFrame);
                },
                getWrappedInstance: function() {
                    return this.wrappedInstance;
                },
                render: function() {
                    return a.createElement(h, f({}, this.props, {
                        ref: function(a) {
                            this.wrappedInstance = a;
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
            return g(x, h);
        };
    };
}), d.register('SsY2+', function(a, b) {
    var e = d('uPP4W'),
        f = d('AxCQ4');
    if (void 0 === e)
        throw Error('create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.');
    var g = new e.Component().updater;
    a.exports = f(e.Component, e.isValidElement, g);
}), d.register('AxCQ4', function(a, b) {
    var e = d('zO4y4'),
        f = {};

    function g(a, b, e, d, f, g, h, i) {
        if (!a) {
            var h;
            if (void 0 === b)
                h = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
            else {
                var i = [
                        e,
                        d,
                        f,
                        g,
                        h,
                        i
                    ],
                    j = 0;
                (h = new Error(b.replace(/%s/g, function() {
                    return i[j++];
                }))).name = 'Invariant Violation';
            }
            throw h.framesToPop = 1, h;
        }
    }
    var h = 'mixins';
    a.exports = function(a, b, d) {
        var i = [],
            j = {
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
            k = {
                getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
            },
            l = {
                displayName: function(a, b) {
                    a.displayName = b;
                },
                mixins: function(a, b) {
                    if (b)
                        for (var m = 0; m < b.length; m++)
                            n(a, b[m]);
                },
                childContextTypes: function(a, b) {
                    a.childContextTypes = e({}, a.childContextTypes, b);
                },
                contextTypes: function(a, b) {
                    a.contextTypes = e({}, a.contextTypes, b);
                },
                getDefaultProps: function(a, b) {
                    a.getDefaultProps ? a.getDefaultProps = p(a.getDefaultProps, b) : a.getDefaultProps = b;
                },
                propTypes: function(a, b) {
                    a.propTypes = e({}, a.propTypes, b);
                },
                statics: function(a, b) {
                    ! function(a, b) {
                        if (!b)
                            return;
                        for (var m in b) {
                            var n = b[m];
                            if (b.hasOwnProperty(m)) {
                                if (g(!(m in l), 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', m), m in a)
                                    return g('DEFINE_MANY_MERGED' === (k.hasOwnProperty(m) ? k[m] : null), 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', m), void(a[m] = p(a[m], n));
                                a[m] = n;
                            }
                        }
                    }(a, b);
                },
                autobind: function() {}
            };

        function m(a, b) {
            var n = j.hasOwnProperty(b) ? j[b] : null;
            u.hasOwnProperty(b) && g('OVERRIDE_BASE' === n, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', b), a && g('DEFINE_MANY' === n || 'DEFINE_MANY_MERGED' === n, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', b);
        }

        function n(a, e) {
            if (e) {
                g('function' != typeof e, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.'), g(!b(e), 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.');
                var o = a.prototype,
                    p = o.__reactAutoBindPairs;
                for (var q in (e.hasOwnProperty(h) && l.mixins(a, e.mixins), e))
                    if (e.hasOwnProperty(q) && q !== h) {
                        var r = e[q],
                            s = o.hasOwnProperty(q);
                        if (m(s, q), l.hasOwnProperty(q))
                            l[q](a, r);
                        else {
                            var t = j.hasOwnProperty(q);
                            if ('function' == typeof r && !t && !s && !1 !== e.autobind)
                                p.push(q, r), o[q] = r;
                            else if (s) {
                                var u = j[q];
                                g(t && ('DEFINE_MANY_MERGED' === u || 'DEFINE_MANY' === u), 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', u, q), 'DEFINE_MANY_MERGED' === u ? o[q] = p(o[q], r) : 'DEFINE_MANY' === u && (o[q] = q(o[q], r));
                            } else
                                o[q] = r;
                        }
                    }
            } else;
        }

        function o(a, b) {
            for (var p in (g(a && b && 'object' == typeof a && 'object' == typeof b, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'), b))
                b.hasOwnProperty(p) && (g(void 0 === a[p], 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', p), a[p] = b[p]);
            return a;
        }

        function p(a, b) {
            return function() {
                var q = a.apply(this, arguments),
                    r = b.apply(this, arguments);
                if (null == q)
                    return r;
                if (null == r)
                    return q;
                var s = {};
                return o(s, q), o(s, r), s;
            };
        }

        function q(a, b) {
            return function() {
                a.apply(this, arguments), b.apply(this, arguments);
            };
        }

        function r(a, b) {
            return b.bind(a);
        }
        var s = {
                componentDidMount: function() {
                    this.__isMounted = !0;
                }
            },
            t = {
                componentWillUnmount: function() {
                    this.__isMounted = !1;
                }
            },
            u = {
                replaceState: function(a, b) {
                    this.updater.enqueueReplaceState(this, a, b);
                },
                isMounted: function() {
                    return !!this.__isMounted;
                }
            },
            v = function() {};
        return e(v.prototype, a.prototype, u),
            function(a) {
                var w = function(a, e, h) {
                    this.__reactAutoBindPairs.length && function(a) {
                        for (var x = a.__reactAutoBindPairs, y = 0; y < x.length; y += 2) {
                            var z = x[y],
                                A = x[y + 1];
                            a[z] = r(a, A);
                        }
                    }(this), this.props = a, this.context = e, this.refs = f, this.updater = h || d, this.state = null;
                    var x = this.getInitialState ? this.getInitialState() : null;
                    g('object' == typeof x && !Array.isArray(x), '%s.getInitialState(): must return an object or null', w.displayName || 'ReactCompositeComponent'), this.state = x;
                };
                for (var x in (w.prototype = new v(), w.prototype.constructor = w, w.prototype.__reactAutoBindPairs = [], i.forEach(n.bind(null, w)), n(w, s), n(w, a), n(w, t), w.getDefaultProps && (w.defaultProps = w.getDefaultProps()), g(w.prototype.render, 'createClass(...): Class specification must implement a `render` method.'), j))
                    w.prototype[x] || (w.prototype[x] = null);
                return w;
            };
    };
}), d.register('A7U/D', function(a, b) {
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
        h = Object.getOwnPropertyNames,
        i = Object.getOwnPropertySymbols,
        j = Object.getOwnPropertyDescriptor,
        k = Object.getPrototypeOf,
        l = k && k(Object);
    a.exports = function a(b, k, l) {
        if ('string' != typeof k) {
            if (l) {
                var m = k(k);
                m && m !== l && a(b, m, l);
            }
            var m = h(k);
            i && (m = m.concat(i(k)));
            for (var n = 0; n < m.length; ++n) {
                var o = m[n];
                if (!(e[o] || f[o] || l && l[o])) {
                    var p = j(k, o);
                    try {
                        g(b, o, p);
                    } catch (a) {}
                }
            }
            return b;
        }
        return b;
    };
}), d.register('hIaqD', function(b, c) {
    a(b.exports, 'GRID_BACKGROUND_CSS', function() {
        return v;
    }), a(b.exports, 'default', function() {
        return w;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('dwAq5'),
        h = d('h99Nu'),
        i = d('t5mrz'),
        j = d('FH3n5'),
        k = d('BYKTn'),
        l = d('aF+jE'),
        m = d('Vlfxs'),
        n = d('hM8sf'),
        o = d('pQmpW'),
        p = d('25lmu'),
        q = d('NewB0'),
        r = d('e7MuS');
    let s, t, u = a => a;
    const v = '\nbackground-color: #f1f2f3;\nbackground-image: linear-gradient(\n    to right,\n    rgba(0, 0, 0, 0.05) 1px,\n    transparent 1px\n  ),\n  linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);\n\nbackground-size: 45px 45px;\nbackground-position: center;\n';
    var w = (0, m.observer)(() => {
        const {
            draw: {
                status: x
            }
        } = f.useContext(n.default);
        f.useEffect(() => {
            p.default.draw.background.volume(q.DRAW_MODE_BACKGROUND_MUSIC_VOLUME);
        }, []);
        return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(x, {
                children: [
                    (0, e.jsx)(r.default, {}),
                    (0, e.jsx)(y, {
                        children: x === o.DrawStatus.pickDrawer ? (0, e.jsx)(k.default, {}) : x === o.DrawStatus.termSelection ? (0, e.jsx)(l.default, {}) : x === o.DrawStatus.drawing ? (0, e.jsx)(g.default, {}) : x === o.DrawStatus.results ? (0, e.jsx)(j.default, {}) : null
                    })
                ]
            })
        });
    });
    const x = h.default.div.attrs({
            className: 'flex maxWidth flex-column'
        })(s || (s = u`
  height: 100vh;
  font-family: ${ 0 };
  color: ${ 0 };
  ${ 0 }
  overflow: hidden;
`), q.DRAW_MODE_FONT, i.default.Black, v),
        y = h.default.div.attrs({
            className: 'flex flex-column'
        })(t || (t = u`
  height: 100%;
  overflow: hidden;
`));
}), d.register('dwAq5', function(b, c) {
    a(b.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('J3qtT'),
        h = d('h99Nu'),
        i = d('j1SLG'),
        j = d('vSQGf');
    let k;
    var l = () => {
        const [m, n] = f.useState(!1);
        return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)(m, {
                className: m ? 'animated fadeOut' : '',
                children: [
                    (0, e.jsx)(i.default, {
                        fadeOut: () => n(!0)
                    }),
                    (0, e.jsx)(j.default, {}),
                    (0, e.jsx)(g.default, {
                        isFadingOut: m
                    })
                ]
            })
        });
    };
    const m = h.default.div.attrs({
        className: 'flex maxWidth maxHeight'
    })(k || (k = (a => a)`
  justify-content: space-between;
  position: relative;
`));
}), d.register('J3qtT', function(c, E) {
    a(c.exports, 'default', function() {
        return A;
    });
    var e = d('8kSQZ'),
        f = d('t5mrz'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('vvCL8'),
        j = d('5VpOH'),
        k = d('Vlfxs'),
        l = d('hM8sf'),
        m = d('wiooy2'),
        n = d('1x/Uw'),
        o = d('U8PGt');
    let p, q, r, s, t, u, v = a => a;
    const w = {
            width: 667,
            height: 500
        },
        x = {
            width: 553,
            height: 400
        },
        y = {
            width: 360,
            height: 270
        },
        z = a => {
            const A = a.text.split(''),
                B = !A.includes('_') && a.noTimeLeft;
            return (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(n.ConfettiContainer, {
                        style: {
                            zIndex: B ? 9 : 0
                        },
                        children: (0, e.jsx)(b(m), {
                            config: n.confettiConfig,
                            active: B
                        })
                    }),
                    (0, e.jsx)(G, {
                        children: A.map((a, b) => {
                            const C = `letter-${ b }`;
                            return ' ' !== a || B ? (0, e.jsx)(g.Fragment, {
                                children: a
                            }, C) : (0, e.jsx)(g.Fragment, {
                                children: '\xA0\xA0\xA0'
                            }, C);
                        })
                    })
                ]
            });
        };
    var A = (0, k.observer)(a => {
        const {
            draw: {
                round: {
                    revealText: B,
                    drawer: C,
                    secondsLeft: D
                }
            }
        } = g.useContext(l.default), E = g.useRef(null), [F, G] = (0, o.default)(E), H = g.useMemo(() => 0 === D, [D]), I = g.useMemo(() => {
            let J = K;
            return (F < 790 || G < 700) && (J = x), (F < 680 || G < 530) && (J = y), J;
        }, [
            F,
            G
        ]);
        return (0, e.jsx)(B, {
            className: a.isFadingOut ? 'animated fadeOut' : '',
            children: (0, e.jsxs)(C, {
                ref: E,
                children: [
                    (0, e.jsx)(E, {
                        children: (0, e.jsx)(z, {
                            text: B,
                            noTimeLeft: H
                        })
                    }),
                    (0, e.jsx)(D, {
                        style: {
                            width: I.width,
                            height: I.height
                        },
                        children: (0, e.jsx)(j.default, {
                            width: I.width,
                            height: I.height
                        })
                    }),
                    (0, e.jsxs)(F, {
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
    const B = h.default.div(p || (p = v`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`)),
        C = h.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column vc hc'
        })(q || (q = v`
  overflow: hidden;
  z-index: 1;
`)),
        D = (0, h.default)(i.HandDrawnDiv)(r || (r = v`
  flex-shrink: 0;
  background: ${ 0 };
  overflow: hidden;
`), f.default.White),
        E = h.default.div(s || (s = v`
  font-size: 45px;
  margin-bottom: 10px;
`)),
        F = h.default.div(t || (t = v`
  font-size: 22px;
  margin-top: 10px;
`)),
        G = h.default.span(u || (u = v``));
}), d.register('vvCL8', function(b, c) {
    a(b.exports, 'HandDrawnDiv', function() {
        return g;
    });
    var e = d('t5mrz');
    let f;
    const g = d('h99Nu').default.div(f || (f = (a => a)`
  border: solid
    ${ 0 }px
    ${ 0 };
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  -webkit-transform: translateZ(0); // needed in Safari for some weird reason
`), a => void 0 !== a.borderWidth ? a.borderWidth : 3, e.default.Black);
}), d.register('5VpOH', function(b, c) {
    a(b.exports, 'default', function() {
        return k;
    });
    var e = d('8kSQZ'),
        f = d('hM8sf'),
        g = d('CFzKE'),
        h = d('UnUp5'),
        i = d('Vlfxs'),
        j = d('uPP4W');
    var k = (0, i.observer)(a => {
        const {
            draw: l
        } = j.useContext(f.default), m = j.useRef();
        return j.useEffect(() => {
            const n = (0, h.reaction)(() => l.latestLine, n => {
                    var o;
                    n && (null == m || null === (o = m.current) || void 0 === o || o.addLine(n));
                }),
                o = (0, h.reaction)(() => l.round.drawingBase64, n => {
                    var p;
                    n && (null == m || null === (p = m.current) || void 0 === p || p.drawImage(n));
                });
            return () => {
                n(), o();
            };
        }, []), (0, e.jsx)(g.default, {
            ref: m,
            height: a.height,
            width: a.width,
            canEdit: !1
        });
    });
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
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
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
                }), g - h < f ? requestAnimationFrame(f) : (b.forEach(function(b) {
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
}), d.register('1x/Uw', function(c, e) {
    a(c.exports, 'ConfettiContainer', function() {
        return F;
    }), a(c.exports, 'confettiConfig', function() {
        return G;
    }), a(c.exports, 'default', function() {
        return I;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('3Ntzy'),
        h = d('uu6j3'),
        i = d('25lmu'),
        j = d('1MpQD'),
        k = d('t5mrz'),
        l = d('0iTfX'),
        m = d('mJDQE'),
        n = d('CDq40'),
        o = d('uPP4W'),
        p = d('wiooy2'),
        q = d('h99Nu');
    let r, s, t, u, v, w, x, y = a => a;
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
`), a => a.animationDelay, a => a.colors.background, a => a.colors.text, m.default.basic),
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
`), a => a.background, k.default.White, l.default.black),
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
        F = q.default.div(x || (x = y`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        G = {
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
            const I = this.getColors();
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsxs)(z, {
                        animationDelay: this.getAnimationDelay(),
                        colors: I,
                        className: 'animated zoomInDown',
                        children: [
                            (0, f.jsx)(A, {
                                background: this.getCircleBackground(),
                                children: (0, f.jsx)(B, {
                                    children: this.getCircleMessage()
                                })
                            }),
                            (0, f.jsx)(C, {
                                children: this.getMainName()
                            }),
                            (0, f.jsx)(D, {
                                children: (0, j.getMoney)(this.props.snapshot.balance)
                            }),
                            (0, f.jsx)(E, {
                                children: this.getDescription()
                            })
                        ]
                    }),
                    1 === this.props.position ? (0, f.jsx)(F, {
                        children: (0, f.jsx)(b(p), {
                            active: this.state.showConfetti,
                            config: G
                        })
                    }) : null
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                showConfetti: !1
            }), (0, e.default)(this, 'getColors', () => {
                const {
                    isPlayer: I
                } = this.props;
                if (I) {
                    const J = this.props.snapshot,
                        {
                            theme: K
                        } = L,
                        M = this.props.themes,
                        N = M.filter(L => L.name === K).length > 0 ? M.filter(L => L.name === K)[0] : M.filter(L => 'Default' === L.name)[0];
                    return 'Default' === N.name ? {
                        background: k.default.White,
                        text: k.default.Black
                    } : {
                        background: N.question.background,
                        text: N.question.text
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
                return (0, f.jsx)(g.default, {
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
    var I = J;
}), d.register('U8PGt', function(b, c) {
    a(b.exports, 'default', function() {
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
}), d.register('KBP3q', function(b, c) {
    a(b.exports, 'default', function() {
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
}), d.register('vxwW1', function(c, e) {
    a(c.exports, 'default', function() {
        return e;
    });
    var e = b(d('uPP4W'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), d.register('X8LPJ', function(b, c) {
    a(b.exports, 'default', function() {
        return f;
    });
    var e = d('uPP4W');
    var f = a => {
        const g = e.useRef(a);
        return e.useEffect(() => {
            g.current = a;
        }), g;
    };
}), d.register('wZuO1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var e = function(a) {
        var f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, a.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), d.register('j1SLG', function(b, c) {
    a(b.exports, 'Container', function() {
        return w;
    }), a(b.exports, 'default', function() {
        return v;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('MC85q'),
        i = d('vvCL8'),
        j = d('t5mrz'),
        k = d('1MpQD'),
        l = d('Vlfxs'),
        m = d('hM8sf'),
        n = d('GMwNT'),
        o = d('8D3j3'),
        p = d('25lmu'),
        q = d('NewB0');
    let r, s, t, u = a => a;
    var v = (0, l.observer)(a => {
        const {
            draw: w
        } = f.useContext(m.default);
        f.useEffect(() => {
            if (0 === w.round.secondsLeft) {
                let x;
                (0, k.musicIsOn)() && (x = setTimeout(() => {
                    p.default.draw.background.fade(p.default.draw.background.volume(), q.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 6000);
                }, 3500));
                const y = setTimeout(() => a.fadeOut(), 6500),
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
                const x = p.default.draw.funk,
                    y = 1.3,
                    z = 2,
                    A = w.round.secondsLeft,
                    B = 0.6,
                    C = x.duration() - A - y - B - z;
                return x.volume(0), x.seek(C), setTimeout(() => {
                    x.play(), x.fade(0, q.DRAW_MODE_MUSIC_VOLUME, 9000);
                }, 1000 * B), () => {
                    x.playing && x.stop();
                };
            }
        }, []);
        return (0, e.jsxs)(w, {
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
                        (0, e.jsxs)(x, {
                            onClick: () => {
                                w.showingFeed = !w.showingFeed;
                            },
                            children: [
                                w.showingFeed ? 'Hide' : 'Show',
                                ' Feed'
                            ]
                        }),
                        (0, e.jsx)(x, {
                            onClick: () => {
                                (0, k.send)(o.default.draw.clear);
                            },
                            children: 'Clear Canvas'
                        }),
                        (0, e.jsx)(y, {
                            onClick: n.default,
                            children: 'End Round Early'
                        })
                    ]
                })
            ]
        });
    });
    const w = g.default.div.attrs({
            className: 'maxHeight flex flex-column'
        })(r || (r = u`
  padding: 20px 40px;
  z-index: 2;
  justify-content: space-between;
`)),
        x = g.default.div(s || (s = u`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
  text-decoration: underline;
  cursor: pointer;
`)),
        y = (0, g.default)(i.HandDrawnDiv).attrs({
            borderWidth: 2
        })(t || (t = u`
  text-transform: uppercase;
  cursor: pointer;
  line-height: 1;
  padding: 14px;
  font-size: 15px;
  background: ${ 0 };
`), j.default.White);
}), d.register('MC85q', function(b, c) {
    a(b.exports, 'default', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('t5mrz');
    d('uPP4W');
    var g = d('h99Nu');
    let h, i, j, k, l = a => a;
    var m = a => (0, e.jsxs)(n, {
        iconOnLeft: a.iconOnLeft,
        children: [
            (0, e.jsx)(o, {
                children: (0, e.jsx)(p, {
                    src: a.icon
                })
            }),
            (0, e.jsx)(q, {
                children: a.value
            })
        ]
    });
    const n = g.default.div.attrs({
            className: 'flex flex-column'
        })(h || (h = l`
  align-items: ${ 0 };
`), a => a.iconOnLeft ? 'flex-start' : 'flex-end'),
        o = g.default.div.attrs({
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
        p = g.default.img.attrs({
            className: 'maxWidth maxHeight'
        })(j || (j = l``)),
        q = g.default.div.attrs({
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
}), d.register('GMwNT', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('8D3j3'),
        f = d('1MpQD');
    var g = () => {
        (0, f.send)(e.default.draw.endRound);
    };
}), d.register('NewB0', function(b, c) {
    a(b.exports, 'DRAW_MODE_MUSIC_VOLUME', function() {
        return d;
    }), a(b.exports, 'DRAW_MODE_BACKGROUND_MUSIC_VOLUME', function() {
        return f;
    }), a(b.exports, 'DRAW_MODE_FONT', function() {
        return g;
    });
    const e = 0.7,
        f = 0.4,
        g = '\'Pangolin\', sans-serif';
}), d.register('vSQGf', function(b, c) {
    a(b.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD'),
        g = d('hM8sf'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('MC85q'),
        k = d('T3nic'),
        l = d('j1SLG'),
        m = d('GMwNT');
    var n = (0, h.observer)(() => {
        var o, p;
        const {
            draw: q
        } = i.useContext(g.default);
        i.useEffect(() => {
            var r, s, t;
            (null == q || null === (r = q.personCount) || void 0 === r ? void 0 : r.total) && (null == q || null === (s = q.personCount) || void 0 === s ? void 0 : s.total) === (null == q || null === (t = q.personCount) || void 0 === t ? void 0 : t.correct) && (q.everybodyGotLastRoundCorrect = !0, (0, m.default)());
        }, [
            null == q || null === (o = q.personCount) || void 0 === o ? void 0 : o.total,
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
}), d.register('T3nic', function(b, c) {
    a(b.exports, 'default', function() {
        return v;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('cBb/w'),
        h = d('h99Nu'),
        i = d('t5mrz'),
        j = d('4/f+U'),
        k = d('vvCL8'),
        l = d('1MpQD'),
        m = d('Vlfxs'),
        n = d('3Ntzy'),
        o = d('UnUp5'),
        p = d('hM8sf');
    let q, r, s = a => a;
    const t = (0, m.observer)(() => {
        const {
            draw: u
        } = f.useContext(p.default), [v, w] = f.useState([]), x = (0, j.debounce)(u => {
            w(v => [
                ...v,
                u
            ]);
        }, 120);
        f.useEffect(() => {
            const y = (0, o.reaction)(() => u.latestFeedItem, u => {
                u && (u => {
                    u.important ? w(y => [
                        ...y,
                        u
                    ]) : x(u);
                })({
                    ...u,
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
        return u.showingFeed ? (0, e.jsx)(l.HideIfTabbedAway, {
            children: (0, e.jsx)('div', {
                style: {
                    position: 'relative'
                },
                children: (0, e.jsx)(g.default, {
                    enterAnimation: 'fade',
                    leaveAnimation: 'accordionVertical',
                    duration: 150,
                    children: (0, j.takeRight)(v, y).map(u => (0, e.jsx)(u, {
                        item: u
                    }, `draw-feed-${ u.id }`))
                })
            })
        }) : null;
    });
    class u extends f.Component {
        render() {
            const {
                name: v,
                action: w,
                translateAllowed: x,
                nameColor: y,
                actionColor: z
            } = this.props.item;
            return (0, e.jsx)(x, {
                children: (0, e.jsxs)(y, {
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
    var v = w;
    const x = (0, h.default)(k.HandDrawnDiv).attrs({
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
        y = h.default.span.attrs({
            className: 'maxWidth'
        })(r || (r = s`
  text-overflow: ellipsis;
  white-space: nowrap;
`));
}), d.register('FH3n5', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('j1gH4'),
        i = d('eIblx'),
        j = d('zTABg'),
        k = d('1MpQD'),
        l = d('25lmu'),
        m = d('NewB0');
    let n, o, p = a => a;
    var q = () => (f.useEffect(() => {
        (0, k.musicIsOn)() && l.default.draw.background.fade(l.default.draw.background.volume(), m.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 2000);
    }, []), (0, e.jsxs)(r, {
        children: [
            (0, e.jsxs)(s, {
                children: [
                    (0, e.jsx)(h.default, {}),
                    (0, e.jsx)(i.default, {})
                ]
            }),
            (0, e.jsx)(j.default, {})
        ]
    }));
    const r = g.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column'
        })(n || (n = p``)),
        s = g.default.div.attrs({
            className: 'flex animated fadeIn'
        })(o || (o = p`
  flex: 1;
  overflow: hidden;
  animation-duration: 2.2s;
`));
}), d.register('j1gH4', function(b, c) {
    a(b.exports, 'default', function() {
        return s;
    });
    var e = d('8kSQZ'),
        f = d('CFzKE'),
        g = d('uPP4W'),
        h = d('vvCL8'),
        i = d('h99Nu'),
        j = d('U8PGt'),
        k = d('hM8sf'),
        l = d('t5mrz'),
        m = d('3Ntzy');
    let n, o, p, q, r = a => a;
    var s = () => {
        const {
            draw: {
                round: t,
                everybodyGotLastRoundCorrect: u,
                drawingHistory: v
            }
        } = g.useContext(k.default);
        g.useEffect(() => {
            t.drawingBase64 && v.push({
                image: t.drawingBase64,
                name: t.drawer.name,
                term: t.term,
                index: v.length
            });
        }, []);
        const w = g.useRef(null),
            [x, y] = (0, j.default)(w),
            z = Math.min(x / 4, (y - 120) / 3),
            A = 4 * z,
            B = 3 * z;
        return (0, e.jsx)(t, {
            children: (0, e.jsxs)(u, {
                ref: w,
                children: [
                    (0, e.jsx)(v, {
                        children: t.term
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
                            initialImage: t.drawingBase64
                        })
                    }) : null,
                    u ? (0, e.jsx)(w, {
                        children: (0, e.jsx)(m.default, {
                            text: 'Everybody guessed correctly!'
                        })
                    }) : null
                ]
            })
        });
    };
    const t = i.default.div.attrs({
            className: 'maxHeight'
        })(n || (n = r`
  width: 50%;
  padding: 30px;
  padding-right: 15px;
`)),
        u = i.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column hc vc'
        })(o || (o = r``)),
        v = i.default.div(p || (p = r`
  font-size: 40px;
  margin-bottom: 7px;
`)),
        w = i.default.div(q || (q = r`
  background: ${ 0 };
  color: ${ 0 };
  margin-top: 16px;
  padding: 5px 20px;
  border-radius: 55px;
  font-size: 17px;
`), l.default.SuccessGreen, l.default.White);
}), d.register('eIblx', function(b, c) {
    a(b.exports, 'default', function() {
        return s;
    });
    var e = d('8kSQZ'),
        f = d('3Ntzy'),
        g = d('1MpQD'),
        h = d('hM8sf'),
        i = d('VCvua0'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('h99Nu');
    let m, n, o, p, q = a => a;
    const r = a => (0, e.jsxs)(u, {
        children: [
            (0, e.jsx)(v, {
                children: a.name
            }),
            (0, e.jsxs)(w, {
                children: [
                    '+ ',
                    (0, g.getMoney)(a.amount)
                ]
            })
        ]
    });
    var s = (0, j.observer)(() => {
        const {
            draw: {
                pointAdditions: t
            }
        } = k.useContext(h.default);
        return (0, e.jsx)(t, {
            children: t.length ? (0, e.jsx)(e.Fragment, {
                children: t.map(t => (0, e.jsx)(r, {
                    name: t.name,
                    amount: t.amount
                }, `addition-${ t.id }`))
            }) : (0, e.jsx)('div', {
                className: 'maxHeight maxWidth flex vc',
                children: (0, e.jsx)(u, {
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
    const t = l.default.div.attrs({
            className: 'maxHeight scroll-y'
        })(m || (m = q`
  width: 50%;
  padding: 30px;
  padding-left: 15px;
`)),
        u = l.default.div.attrs({
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
        v = l.default.div(o || (o = q`
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`)),
        w = l.default.div(p || (p = q`
  color: #1b5e20;
  font-weight: bold;
  margin-left: 10px;
  flex-shrink: 0;
`));
}), d.register('VCvua0', function(b, c) {
    a(b.exports, 'default', function() {
        return e;
    });
    var e = d('cdiGP23').default;
}), d.register('cdiGP23', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
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
}), d.register('zTABg', function(b, c) {
    a(b.exports, 'default', function() {
        return o;
    });
    var e = d('8kSQZ'),
        f = d('js2PD'),
        g = d('IsmrL'),
        h = d('1MpQD'),
        i = d('pQmpW'),
        j = d('hM8sf'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu');
    let n;
    var o = (0, k.observer)(() => {
        const {
            draw: p
        } = l.useContext(j.default);
        return (0, e.jsxs)(p, {
            children: [
                (0, e.jsx)(g.default, {
                    size: 'large',
                    type: 'primary',
                    style: {
                        marginRight: 15
                    },
                    icon: (0, e.jsx)(f.default, {}),
                    onClick: () => {
                        p.status = i.DrawStatus.pickDrawer;
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
    const p = m.default.div.attrs({
        className: 'maxWidth flex hc vc'
    })(n || (n = (a => a)`
  flex-shrink: 0;
  padding: 25px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 16px rgb(0 0 0 / 50%);
`));
}), d.register('js2PD', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('Kd1D+'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'TrophyOutlined';
    var j = f.forwardRef(i);
}), d.register('Kd1D+', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z'
                }
            }]
        },
        name: 'trophy',
        theme: 'outlined'
    };
}), d.register('BYKTn', function(b, c) {
    a(b.exports, 'default', function() {
        return u;
    });
    var e = d('8kSQZ'),
        f = d('ExtIT'),
        g = d('3Ntzy'),
        h = d('1MpQD'),
        i = d('hM8sf'),
        j = d('VCvua0'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('W4R1G');
    let o, p, q, r, s, t = a => a;
    var u = (0, k.observer)(() => {
        const {
            draw: v
        } = l.useContext(i.default);
        return l.useEffect(() => {
            v.personCount = null, v.everybodyGotLastRoundCorrect = !1;
        }, []), (0, e.jsx)(v, {
            children: (0, e.jsxs)(w, {
                children: [
                    (0, e.jsx)(x, {}),
                    (0, e.jsx)(y, {
                        children: (0, e.jsx)(g.default, {
                            text: 'Who\'s drawing?'
                        })
                    }),
                    (0, e.jsx)(z, {
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
    const v = m.default.div.attrs({
            className: 'maxWidth maxHeight scroll-y flex hc'
        })(o || (o = t`
  align-items: flex-start;
`)),
        w = m.default.div.attrs({
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
        x = m.default.img.attrs({
            src: (0, h.getAssetPath)('drawing.svg')
        })(q || (q = t`
  height: 160px;
  margin-bottom: 14px;
`)),
        y = m.default.div(r || (r = t`
  font-size: 54px;
  font-weight: bold;
`)),
        z = m.default.div(s || (s = t`
  font-size: 23px;
`));
}), d.register('W4R1G', function(b, c) {
    a(b.exports, 'default', function() {
        return u;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('8D3j3'),
        h = d('1MpQD'),
        i = d('hM8sf'),
        j = d('4/f+U'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('vvCL8');
    let o, p, q, r, s = a => a;
    const t = a => (0, e.jsxs)(x, {
        children: [
            (0, e.jsx)(y, {
                children: a.name
            }),
            (0, e.jsx)(f.default, {
                type: 'dashed',
                onClick: a.onSelect,
                children: 'Select'
            })
        ]
    });
    var u = (0, k.observer)(() => {
        const {
            players: {
                players: v
            }
        } = l.useContext(i.default), w = v => {
            (0, h.send)(g.default.draw.createRound, v);
        };
        return (0, e.jsxs)(v, {
            children: [
                (0, e.jsxs)(w, {
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
                                if (!v.length)
                                    return;
                                const x = (0, j.sample)(v);
                                w(x.id);
                            },
                            children: 'Select'
                        })
                    ]
                }),
                v.slice().sort((v, w) => ((v, w) => {
                    const x = v.toLowerCase(),
                        y = w.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                })(v.name, w.name)).map(v => (0, e.jsx)(t, {
                    name: v.name,
                    onSelect: () => w(v.id)
                }, v.id))
            ]
        });
    });
    const v = m.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = s``)),
        w = (0, m.default)(n.HandDrawnDiv).attrs({
            className: 'maxWidth flex vc'
        })(p || (p = s`
  justify-content: space-between;
  padding: 12px 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
`)),
        x = m.default.div.attrs({
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
        y = m.default.div(r || (r = s`
  font-size: 19px;
`));
}), d.register('aF+jE', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD'),
        g = d('hM8sf'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('vvCL8');
    let l, m, n, o, p, q = a => a;
    var r = (0, h.observer)(() => {
        var s;
        const {
            draw: {
                round: t
            }
        } = i.useContext(g.default);
        return (null == t || null === (s = t.drawer) || void 0 === s ? void 0 : s.name) ? (0, e.jsx)(s, {
            children: (0, e.jsxs)(t, {
                children: [
                    (0, e.jsx)(u, {}),
                    (0, e.jsx)(v, {
                        children: 'Get ready!'
                    }),
                    (0, e.jsxs)(w, {
                        children: [
                            t.drawer.name,
                            ' is selecting a term...'
                        ]
                    })
                ]
            })
        }) : null;
    });
    const s = j.default.div.attrs({
            className: 'maxWidth maxHeight flex hc vc'
        })(l || (l = q`
  padding: 30px;
  text-align: center;
`)),
        t = (0, j.default)(k.HandDrawnDiv).attrs({
            className: 'flex hc vc flex-column medium-shadow'
        })(m || (m = q`
  height: 440px;
  width: 600px;
  background: rgba(255, 255, 255, 0.7);
`)),
        u = j.default.img.attrs({
            src: (0, f.getAssetPath)('paint.svg')
        })(n || (n = q`
  height: 160px;
`)),
        v = j.default.div(o || (o = q`
  margin-top: 20px;
  font-size: 68px;
  font-weight: bold;
`)),
        w = j.default.div(p || (p = q`
  font-size: 30px;
  margin-top: --6px;
`));
}), d.register('e7MuS', function(b, c) {
    a(b.exports, 'default', function() {
        return w;
    });
    var e = d('8kSQZ'),
        f = d('kHl2z'),
        g = d('IsmrL'),
        h = d('YfLmS'),
        i = d('25lmu'),
        j = d('t5mrz'),
        k = d('0iTfX'),
        l = d('pQmpW'),
        m = d('hM8sf'),
        n = d('Vlfxs'),
        o = d('uPP4W'),
        p = d('h99Nu'),
        q = d('NewB0');
    let r, s, t, u, v = a => a;
    var w = (0, n.observer)(() => {
        const {
            gameValues: {
                gameCode: x
            },
            gameOptions: y,
            draw: z
        } = o.useContext(m.default);
        return (0, e.jsxs)(x, {
            children: [
                (0, e.jsxs)(y, {
                    children: [
                        (0, e.jsx)(z, {}),
                        (0, e.jsxs)(A, {
                            children: [
                                (0, e.jsx)('b', {
                                    children: 'Game Code:'
                                }),
                                ' ',
                                x
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
    const x = p.default.div.attrs({
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
        y = p.default.div(s || (s = v``)),
        z = p.default.img.attrs({
            src: '/client/img/svgLogo.svg'
        })(t || (t = v`
  height: 22px;
`)),
        A = p.default.div(u || (u = v`
  font-size: 14px;
  margin-top: 10px;
  line-height: 1;
  opacity: 0.7;
`));
}), d.register('+JcpN', function(b, c) {
    a(b.exports, 'default', function() {
        return t;
    });
    var e = d('8kSQZ'),
        f = d('/+kT6'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('1VlXH'),
        j = d('SKxqm'),
        k = d('Rwumc'),
        l = d('6RRzg'),
        m = d('Vlfxs'),
        n = d('hM8sf'),
        o = d('41n4U'),
        p = d('5moSQ');
    let q, r, s = a => a;
    var t = (0, m.observer)(() => {
        const {
            pardy: u
        } = g.useContext(n.default), v = () => {
            u.screen = o.PardyScreen.home;
        }, w = !(!u || !u.currentRound || 'Finale' !== u.currentRound.type) ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.2)';
        return (0, e.jsx)(f.AnimateSharedLayout, {
            children: (0, e.jsx)(p.default, {
                children: (0, e.jsxs)(u, {
                    style: {
                        background: w
                    },
                    children: [
                        (0, e.jsx)(j.default, {}),
                        (0, e.jsx)(v, {
                            children: u.screen === o.PardyScreen.home ? (0, e.jsx)(i.default, {}) : u.screen === o.PardyScreen.answer ? (0, e.jsx)(l.default, {
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
    const u = h.default.div.attrs({
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
        v = h.default.div(r || (r = s`
  flex: 1;
  overflow: hidden;
`));
}), d.register('/+kT6', function(b, c) {
    a(b.exports, 'AnimateSharedLayout', function() {
        return j;
    });
    var e = d('D6j9S'),
        f = d('uPP4W'),
        g = d('W07Lg'),
        h = d('6WzPh');
    let i = 0;
    const j = ({
        children: k
    }) => (f.useEffect(() => {
        (0, e.warning)(!1, 'AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations');
    }, []), f.createElement(h.LayoutGroup, {
        id: (0, g.useConstant)(() => 'asl-' + i++)
    }, k));
}), d.register('6WzPh', function(b, c) {
    a(b.exports, 'LayoutGroup', function() {
        return k;
    });
    var e = d('uPP4W'),
        f = (e = d('uPP4W'), d('am8F9')),
        g = d('JZel3'),
        h = d('Ibf8h'),
        i = d('h07qE');
    const j = a => !0 === a,
        k = ({
            children: l,
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
            null === t.current && ((l => j(!0 === l) || 'id' === l)(o) && u && (m = m ? u + '-' + m : u), t.current = {
                id: m,
                group: j(o) && p.group || (0, i.nodeGroup)()
            });
            const v = (0, e.useMemo)(() => ({
                ...t.current,
                forceRender: r
            }), [s]);
            return e.createElement(f.LayoutGroupContext.Provider, {
                value: v
            }, l);
        };
}), d.register('JZel3', function(b, c) {
    a(b.exports, 'DeprecatedLayoutGroupContext', function() {
        return e;
    });
    const e = (0, d('uPP4W').createContext)(null);
}), d.register('Ibf8h', function(b, c) {
    a(b.exports, 'useForceUpdate', function() {
        return h;
    });
    var e = d('PZ0qk'),
        f = d('uPP4W'),
        g = d('2T4Wv');

    function h() {
        const i = (0, g.useIsMounted)(),
            [j, k] = (0, f.useState)(0),
            l = (0, f.useCallback)(() => {
                i.current && k(j + 1);
            }, [j]);
        return [
            (0, f.useCallback)(() => e.sync.postRender(l), [l]),
            j
        ];
    }
}), d.register('2T4Wv', function(b, c) {
    a(b.exports, 'useIsMounted', function() {
        return g;
    });
    var e = d('uPP4W'),
        f = d('/26CJ');

    function g() {
        const h = (0, e.useRef)(!1);
        return (0, f.useIsomorphicLayoutEffect)(() => (h.current = !0, () => {
            h.current = !1;
        }), []), h;
    }
}), d.register('h07qE', function(b, c) {
    a(b.exports, 'nodeGroup', function() {
        return f;
    });
    const e = a => !a.isLayoutDirty && a.willUpdate(!1);

    function f() {
        const g = new Set(),
            h = new WeakMap(),
            i = () => g.forEach(e);
        return {
            add: e => {
                g.add(e), h.set(e, e.addEventListener('willUpdate', i));
            },
            remove: e => {
                var j;
                g.delete(e), null === (j = h.get(e)) || void 0 === j || j(), h.delete(e), i();
            },
            dirty: i
        };
    }
}), d.register('1VlXH', function(b, c) {
    a(b.exports, 'PardyHomeScreen', function() {
        return n;
    }), a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('mGO+S'),
        h = d('DIshc'),
        i = d('h99Nu'),
        j = d('P/IxZ'),
        k = d('b9Bct');
    let l, m, n, o = a => a;
    var p;
    (p = n || (n = {})).board = 'board', p.rankings = 'rankings';
    var q = () => {
        const [r, s] = f.useState(n.board);
        return (0, e.jsxs)(r, {
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
                (0, e.jsx)(s, {
                    children: r === n.rankings ? (0, e.jsx)(h.default, {}) : (0, e.jsx)(g.default, {})
                }),
                (0, e.jsx)(j.default, {
                    screen: r,
                    setToBoardScreen: () => s(n.board),
                    setToRankingScreen: () => s(n.rankings)
                })
            ]
        });
    };
    const r = (0, i.default)(k.motion.div).attrs({
            className: 'flex maxWidth maxHeight flex-column'
        })(l || (l = o``)),
        s = i.default.div(m || (m = o`
  flex: 1;
  z-index: 1;
  overflow: hidden;
`));
}), d.register('mGO+S', function(b, c) {
    a(b.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('GPy+o'),
        h = d('h99Nu'),
        i = d('Vlfxs'),
        j = d('hM8sf');
    let k;
    var l = (0, i.observer)(() => {
        const {
            pardy: {
                board: m
            }
        } = f.useContext(j.default);
        if (!m)
            return null;
        const n = `${ Math.round(100 / m.categories.length) }%`;
        return (0, e.jsx)(m, {
            children: m.categories.map((c, d) => (0, e.jsx)(g.default, {
                category: c,
                width: n,
                totalCategories: m.categories.length,
                categoryIndex: d
            }, c.name))
        });
    });
    const m = h.default.div.attrs({
        className: 'flex hc maxAll'
    })(k || (k = (a => a)`
  padding: 20px;
`));
}), d.register('GPy+o', function(b, c) {
    a(b.exports, 'default', function() {
        return t;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('QcdUe'),
        h = d('h99Nu'),
        i = d('t5mrz'),
        j = d('41n4U'),
        k = d('Vlfxs'),
        l = d('hM8sf'),
        m = d('1MpQD'),
        n = d('25lmu');
    let o, p, q, r, s = a => a;
    var t = (0, k.observer)(a => {
        const {
            pardy: u
        } = f.useContext(l.default);
        return (0, e.jsxs)(u, {
            width: a.width,
            children: [
                (0, e.jsx)(v, {
                    children: (0, e.jsx)(w, {
                        children: a.category.name
                    })
                }),
                (0, e.jsx)(x, {
                    children: a.category.items.map((c, d) => (0, e.jsx)(g.default, {
                        id: c.id,
                        amount: c.amount,
                        totalCategories: a.totalCategories,
                        categoryIndex: a.categoryIndex,
                        itemIndex: d,
                        onSelect: () => {
                            return d = c.id, n.default.pardy.music.fade(n.default.pardy.music.volume(), 0, 500), (0, m.playSound)(n.default.pardy.riser, {}), u.currentRound = {
                                type: 'Normal',
                                value: {
                                    category: a.category.name,
                                    id: d
                                }
                            }, u.questionScreen = j.PardyQuestionScreen.preview, u.questionStatus = j.PardyQuestionStatus.preview, void(u.screen = j.PardyScreen.question);
                            var v;
                        },
                        disabled: u.disabledSections.includes(c.id)
                    }, `${ a.category.name }-${ c.id }`))
                })
            ]
        });
    });
    const u = h.default.div.attrs({
            className: 'flex flex-column vc'
        })(o || (o = s`
  height: 100%;
  width: ${ 0 };
  overflow: hidden;
`), a => a.width),
        v = h.default.div.attrs({
            className: 'flex hc'
        })(p || (p = s`
  font-size: 32px;
  margin-bottom: 10px;
  flex-shrink: 0;
  text-shadow: 0px 3px 3px ${ 0 };
  width: 100%;
`), i.default.Black),
        w = h.default.div(q || (q = s`
  max-width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`)),
        x = h.default.div(r || (r = s`
  flex: 1;
  width: 100%;
`));
}), d.register('QcdUe', function(b, c) {
    a(b.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD'),
        g = d('t5mrz');
    d('uPP4W');
    var h = d('h99Nu'),
        i = d('b9Bct');
    let j, k, l, m = a => a;
    var n = a => {
        const o = ((a, o, c) => {
                let p = !1,
                    q = !1;
                return a < o || (p = !0), c < 5 || (q = !0), {
                    top: !0,
                    right: p,
                    bottom: q,
                    left: !0
                };
            })(a.categoryIndex + 1, a.totalCategories, a.itemIndex + 1),
            p = a => a ? 2 : 0;
        return (0, e.jsx)(o, {
            onClick: a.disabled ? void 0 : a.onSelect,
            style: {
                borderBottomWidth: p(o.bottom),
                borderTopWidth: p(o.top),
                borderLeftWidth: p(o.left),
                borderRightWidth: p(o.right),
                background: a.disabled ? 'rgba(0,0,0,0.2' : 'transparent',
                cursor: a.disabled ? 'not-allowed' : 'pointer'
            },
            children: (0, e.jsx)(p, {
                style: {
                    opacity: a.disabled ? 0.5 : 1,
                    pointerEvents: a.disabled ? 'none' : 'auto'
                },
                layoutId: `item-${ a.id }`,
                children: (0, e.jsx)(q, {
                    layoutId: `item-${ a.id }-amount`,
                    children: (0, f.getMoney)(a.amount)
                })
            })
        });
    };
    const o = h.default.div.attrs({
            className: 'flex hc vc'
        })(j || (j = m`
  background: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-color: ${ 0 };
  height: 20%;
  user-select: none;
`), g.default.White),
        p = (0, h.default)(i.motion.div).attrs({
            className: 'maxAll flex-center'
        })(k || (k = m`
  text-shadow: 0px 2px 2px ${ 0 };
  transition: background 0.25s;
  font-size: 26px;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`), g.default.Black),
        q = (0, h.default)(i.motion.div)(l || (l = m``));
}), d.register('DIshc', function(b, c) {
    a(b.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('9p8Pm'),
        h = d('h99Nu'),
        i = d('Vlfxs'),
        j = d('hM8sf'),
        k = d('G602L'),
        l = d('PjB0f');
    let m;
    var n = (0, i.observer)(() => {
        const {
            players: o,
            pardy: {
                powers: p
            }
        } = f.useContext(j.default), q = (0, k.leaderboardSorter)(o.filteredPlayers), r = q[0], s = q.filter((o, p) => 0 !== p), t = o => {
            if (!o)
                return null;
            const u = p.find(p => p.id === o);
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
                s && s.length ? (0, e.jsx)(o, {
                    children: s.map((o, p) => (0, e.jsx)(g.default, {
                        size: 'normal',
                        backgroundColor: t(o.power),
                        name: o.name,
                        amount: o.balance,
                        place: (0, l.numberToRank)(p + 2)
                    }, o.id))
                }) : null
            ]
        });
    });
    const o = h.default.div.attrs({
        className: 'flex wrap hc vc'
    })(m || (m = (a => a)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
  justify-content: center;
`));
}), d.register('9p8Pm', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('lmfrI'),
        g = d('gSUVO'),
        h = d('1MpQD'),
        i = d('0iTfX'),
        j = d('pm/mI');
    d('uPP4W');
    var k = d('h99Nu');
    let l, m, n, o, p = a => a;
    var q = a => {
        const r = 'normal' === a.size;
        return (0, e.jsxs)(r, {
            className: r ? 'light-shadow' : 'medium-shadow',
            style: {
                width: r ? 300 : 600
            },
            children: [
                (0, e.jsx)(s, {
                    children: a.place
                }),
                (0, e.jsx)(t, {
                    style: {
                        height: r ? 150 : 200,
                        backgroundColor: a.backgroundColor || 'rgba(0,0,0,0.15)'
                    },
                    children: (0, e.jsx)(j.default, {
                        mode: 'single',
                        text: a.name,
                        noBold: !0
                    })
                }),
                (0, e.jsx)(u, {
                    children: (0, h.getMoney)(a.amount)
                })
            ]
        });
    };
    const r = k.default.div(l || (l = p`
  border-radius: 5px;
  border: 2px solid ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  max-width: 100%;
`), f.default.White, i.default.fontFamilyName, g.FontWeights.Bold),
        s = k.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = p`
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 22px;
  border-bottom: 2px solid ${ 0 };
`), f.default.White),
        t = k.default.div.attrs({
            className: 'flex hc vc maxWidth'
        })(n || (n = p`
  font-family: 'Londrina Solid', sans-serif;
  padding: 10px;
  text-shadow: #000 3px 3px 2px;
`)),
        u = k.default.div.attrs({
            className: 'maxWidth'
        })(o || (o = p`
  padding: 10px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 22px;
  border-top: 2px solid ${ 0 };
`), f.default.White);
}), d.register('P/IxZ', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL');
    d('uPP4W');
    var g = d('h99Nu'),
        h = d('1VlXH');
    let i;
    var j = a => (0, e.jsxs)(k, {
        children: [
            (0, e.jsx)(f.default, {
                type: a.screen === h.PardyHomeScreen.board ? 'primary' : 'default',
                onClick: a.setToBoardScreen,
                style: {
                    width: 140,
                    marginRight: 10
                },
                children: 'Board'
            }),
            (0, e.jsx)(f.default, {
                type: a.screen === h.PardyHomeScreen.rankings ? 'primary' : 'default',
                onClick: a.setToRankingScreen,
                style: {
                    width: 140
                },
                children: 'Rankings'
            })
        ]
    });
    const k = g.default.div.attrs({
        className: 'flex hc vc'
    })(i || (i = (a => a)`
  flex-shrink: 0;
  height: 60px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  z-index: 2;
`));
}), d.register('SKxqm', function(b, c) {
    a(b.exports, 'default', function() {
        return C;
    });
    var e = d('8kSQZ'),
        f = d('M1Vx4'),
        g = d('25lmu'),
        h = d('1MpQD'),
        i = d('t5mrz'),
        j = d('mJDQE'),
        k = d('hM8sf'),
        l = d('41n4U'),
        m = d('b9Bct'),
        n = d('Vlfxs'),
        o = d('uPP4W'),
        p = d('h99Nu'),
        q = d('fIPuX'),
        r = d('8QQ2U'),
        s = d('/RkuN');
    let t, u, v, w, x, y, z = a => a;
    const A = (0, n.observer)(() => {
            const {
                gameValues: {
                    gameCode: B
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
            return (0, e.jsxs)(E, {
                children: [
                    (0, e.jsxs)(F, {
                        children: [
                            'Code: ',
                            B
                        ]
                    }),
                    (0, e.jsx)(B, {}),
                    (0, e.jsx)(J, {
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
        B = (0, n.observer)(() => {
            const {
                pardy: C
            } = o.useContext(k.default), D = (() => {
                const {
                    currentRound: E
                } = F;
                if (!E)
                    return null;
                if ('Finale' === E.type)
                    return 'The Finale';
                const G = (0, r.default)();
                return G && G.categoryName && G.amount ? `${ G.categoryName } - ${ (0, h.getMoney)(G.amount) }` : null;
            })(), E = !D || (C.screen === l.PardyScreen.home || C.questionScreen === l.PardyQuestionScreen.finale || C.questionScreen === l.PardyQuestionScreen.preview);
            return (0, e.jsx)(G, {
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
                        (0, e.jsx)(I, {
                            children: D || ''
                        }),
                        (0, e.jsx)(H, {
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
    var C = D;
    const E = p.default.div.attrs({
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
        F = p.default.div(u || (u = z`
  flex-shrink: 0;
  width: ${ 0 }px;
`), 125),
        G = p.default.div(v || (v = z`
  flex: 1;
  height: ${ 0 }px;
  overflow: hidden;
`), 50),
        H = p.default.div.attrs({
            className: 'flex-center'
        })(w || (w = z`
  height: ${ 0 }px;
`), 50),
        I = p.default.div.attrs({
            className: 'flex-center maxWidth'
        })(x || (x = z`
  height: ${ 0 }px;
  font-size: 22px;
  font-weight: 400;
`), 50),
        J = p.default.div.attrs({
            className: 'flex'
        })(y || (y = z`
  flex-shrink: 0;
  width: ${ 0 }px;
  justify-content: flex-end;
`), 125);
}), d.register('fIPuX', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var e = {
        musicVolume: 0.25,
        finaleMusicVolume: 0.45,
        countdownVolume: 0.4
    };
}), d.register('8QQ2U', function(b, c) {
    a(b.exports, 'default', function() {
        return f;
    });
    var e = d('6G/rR');
    var f = () => {
        const {
            currentRound: g,
            board: h,
            finaleQuestionId: i
        } = e.default.pardy;
        if ('Finale' === g.type)
            return {
                questionId: i
            };
        const {
            id: j,
            category: k
        } = g.value, l = h.categories.find(g => g.name === k);
        if (!l)
            return null;
        const m = l.items.find(g => g.id === j);
        return m ? {
            categoryItemId: m.id,
            amount: m.amount,
            categoryName: l.name,
            questionId: m.questionId
        } : null;
    };
}), d.register('/RkuN', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('41n4U'),
        f = d('6G/rR');
    var g = () => {
        f.default.pardy.currentRound = {
            type: 'Finale',
            value: void 0
        }, f.default.pardy.questionScreen = e.PardyQuestionScreen.finale, f.default.pardy.questionStatus = e.PardyQuestionStatus.preview, f.default.pardy.screen = e.PardyScreen.question;
    };
}), d.register('Rwumc', function(b, c) {
    a(b.exports, 'default', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('hM8sf'),
        g = d('41n4U'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('gpTRT'),
        k = d('g9gu6'),
        l = d('phnx4');
    var m = (0, h.observer)(a => {
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
}), d.register('gpTRT', function(b, c) {
    a(b.exports, 'default', function() {
        return v;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('mLnVy'),
        i = d('wLK8W'),
        j = d('RoETs'),
        k = d('b9Bct'),
        l = d('Vlfxs'),
        m = d('hM8sf'),
        n = d('41n4U'),
        o = d('8QQ2U'),
        p = d('25lmu'),
        q = d('1MpQD');
    let r, s, t = a => a;
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
    var v = (0, l.observer)(() => {
        const {
            pardy: w
        } = f.useContext(m.default), [x, y] = f.useState(0), [z, A] = f.useState(!1), B = f.useMemo(() => !(0, o.default)().categoryItemId, []);
        f.useEffect(() => {
            w.questionScreen = n.PardyQuestionScreen.question;
            const C = (0, o.default)();
            C.categoryItemId && w.disabledSections.push(C.categoryItemId);
        }, []);
        const C = x => {
            w.questionStatus = n.PardyQuestionStatus.timesUp, x && ((0, q.playSound)(p.default.pardy.complete, {}), p.default.pardy.countdown.fade(p.default.pardy.countdown.volume(), 0, 600));
        };
        return (0, e.jsx)(w, {
            children: (0, e.jsxs)(x, {
                initial: u.out,
                animate: z ? u.movingOut : u.in,
                onAnimationComplete: () => {
                    z && (w.screen = n.PardyScreen.answer);
                },
                transition: {
                    duration: 0.7,
                    ease: 'easeOut'
                },
                children: [
                    (0, e.jsx)(h.default, {
                        setToAskScreen: () => w.questionStatus = n.PardyQuestionStatus.ask,
                        setToTimesUpScreen: C,
                        spaceBetweenQuestionAndEdgeOfContainer: x,
                        inFinale: B
                    }),
                    (0, e.jsx)(i.default, {
                        onSpaceBetweenChanged: w => y(w)
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
    const w = g.default.div.attrs({
            className: 'maxWidth maxHeight'
        })(r || (r = t`
  background: rgba(0, 0, 0, 0.2);
  z-index: 2;
`)),
        x = (0, g.default)(k.motion.div).attrs({
            className: 'maxWidth maxHeight flex flex-column'
        })(s || (s = t`
  overflow: hidden;
`));
}), d.register('mLnVy', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('hM8sf'),
        g = d('41n4U'),
        h = d('/+kT6'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu'),
        l = d('JD1R7'),
        m = d('Y2Kay'),
        n = d('XkX14');
    let o;
    var p = (0, i.observer)(a => {
        const {
            pardy: {
                questionStatus: q
            }
        } = j.useContext(f.default), [r, s] = j.useState(!1), t = q => {
            q && s(!0), a.setToTimesUpScreen(q);
        };
        return (0, e.jsx)(h.AnimateSharedLayout, {
            children: (0, e.jsx)(q, {
                children: q === g.PardyQuestionStatus.preview ? (0, e.jsx)(m.default, {
                    setToAskScreen: a.setToAskScreen,
                    spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer
                }) : q === g.PardyQuestionStatus.timesUp ? (0, e.jsx)(n.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer,
                    everybodyAnswered: r,
                    inFinale: a.inFinale
                }) : q === g.PardyQuestionStatus.ask ? (0, e.jsx)(l.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer,
                    setToTimesUpScreen: t
                }) : null
            })
        });
    });
    const q = k.default.div.attrs({
        className: 'maxWidth'
    })(o || (o = (a => a)`
  height: 25%;
`));
}), d.register('JD1R7', function(b, c) {
    a(b.exports, 'default', function() {
        return s;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('vWDOt'),
        h = d('h99Nu'),
        i = d('b9Bct'),
        j = d('Vlfxs'),
        k = d('hM8sf'),
        l = d('fIPuX'),
        m = d('25lmu'),
        n = d('1MpQD');
    let o, p, q, r = a => a;
    var s = (0, j.observer)(a => {
        const {
            pardy: {
                playersAnswered: t,
                playerCount: u
            },
            gameOptions: v
        } = f.useContext(k.default), w = v.modeOptions;
        f.useEffect(() => {
            t === u && u && a.setToTimesUpScreen(!0);
        }, [
            t,
            u
        ]), f.useEffect(() => {
            (0, n.playSound)(m.default.pardy.roundStart, {});
            const x = m.default.pardy.countdown;
            x.stop();
            const y = w.questionDuration,
                z = x.duration() - y - 6 - 0.6;
            x.volume(0), x.seek(z), setTimeout(() => {
                x.play(), x.fade(0, (0, n.musicIsOn)() ? l.default.countdownVolume : 0, 2700);
            }, 600);
        }, []);
        const x = f.useMemo(() => w.questionDuration, []);
        return (0, e.jsx)(t, {
            children: (0, e.jsxs)(u, {
                style: {
                    marginTop: a.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [
                    (0, e.jsx)(g.default, {
                        seconds: x,
                        onFinish: a.setToTimesUpScreen
                    }),
                    (0, e.jsxs)(v, {
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
    const t = h.default.div.attrs({
            className: 'maxWidth maxHeight flex vc hc'
        })(o || (o = r``)),
        u = h.default.div.attrs({
            className: 'flex vc'
        })(p || (p = r`
  justify-content: space-between;
  width: 90%;
  opacity: 0.9;
`)),
        v = (0, h.default)(i.motion.div)(q || (q = r`
  font-size: 24px;
`));
}), d.register('vWDOt', function(b, c) {
    a(b.exports, 'default', function() {
        return k;
    });
    var e = d('8kSQZ'),
        f = d('uIVkr'),
        g = d('b9Bct'),
        h = d('uPP4W'),
        i = d('h99Nu');
    let j;
    var k = a => {
        const [l, m] = h.useState(a.seconds);
        return (0, f.useIntervalWhen)(() => {
            l ? (m(a => a - 1), a.onTick && a.onTick()) : a.onFinish();
        }, 1000), (0, e.jsx)(l, {
            layoutId: 'time-circle',
            transition: {
                duration: 0.5
            },
            style: a.style,
            children: l
        });
    };
    const l = (0, i.default)(g.motion.div).attrs({
        className: 'flex hc vc'
    })(j || (j = (a => a)`
  height: 70px;
  width: 70px;
  font-size: 32px;
  border: 3px solid;
  border-radius: 50%;
  line-height: 1;
`));
}), d.register('uIVkr', function(b, c) {
    a(b.exports, 'useIntervalWhen', function() {
        return f;
    });
    var e = d('uPP4W');

    function f(a, b, c, d) {
        void 0 === b && (b = 0), void 0 === c && (c = !0), void 0 === d && (d = !1);
        var g = (0, e.useRef)();

        function h() {
            g.current && g.current();
        }
        (0, e.useEffect)(function() {
            g.current = a;
        }), (0, e.useEffect)(function() {
            if ('undefined' != typeof window) {
                if (c) {
                    d && h();
                    var i = window.setInterval(h, b);
                    return function() {
                        window.clearInterval(i);
                    };
                }
            } else
                console.warn('useIntervalWhen: window is undefined.');
        }, [
            c,
            b
        ]);
    }
}), d.register('Y2Kay', function(b, c) {
    a(b.exports, 'default', function() {
        return k;
    });
    var e = d('8kSQZ'),
        f = d('25lmu'),
        g = d('1MpQD');
    d('uPP4W');
    var h = d('h99Nu'),
        i = d('vWDOt');
    let j;
    var k = a => (0, e.jsx)(l, {
        children: (0, e.jsx)(i.default, {
            seconds: 3,
            onFinish: a.setToAskScreen,
            style: {
                marginTop: a.spaceBetweenQuestionAndEdgeOfContainer
            },
            onTick: () => {
                (0, g.playSound)(f.default.pardy.tick, {});
            }
        })
    });
    const l = h.default.div.attrs({
        className: 'flex maxWidth maxHeight hc vc'
    })(j || (j = (a => a)``));
}), d.register('XkX14', function(c, e) {
    a(c.exports, 'default', function() {
        return s;
    });
    var e = d('8kSQZ'),
        f = d('1x/Uw'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('wiooy2'),
        j = d('gSUVO'),
        k = d('b9Bct'),
        l = d('1MpQD'),
        m = d('25lmu'),
        n = d('fIPuX');
    let o, p, q, r = a => a;
    var s = a => {
        const [t, u] = g.useState(!1);
        return g.useEffect(() => {
            u(!0), setTimeout(() => {
                if ((0, l.musicIsOn)()) {
                    const v = a.inFinale ? m.default.pardy.finaleMusic : m.default.pardy.music;
                    v.fade(v.volume(), a.inFinale ? n.default.finaleMusicVolume : n.default.musicVolume, 1000);
                }
            }, 2500);
        }, []), (0, e.jsx)(t, {
            children: (0, e.jsxs)(u, {
                style: {
                    marginTop: a.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [
                    (0, e.jsx)(f.ConfettiContainer, {
                        style: {
                            zIndex: 0
                        },
                        children: (0, e.jsx)(b(i), {
                            active: t,
                            config: f.confettiConfig
                        })
                    }),
                    (0, e.jsx)(v, {
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
                        children: a.everybodyAnswered ? 'Everybody answered!' : 'Time\'s up!'
                    })
                ]
            })
        });
    };
    const t = h.default.div.attrs({
            className: 'flex maxWidth maxHeight vc hc'
        })(o || (o = r``)),
        u = h.default.div(p || (p = r``)),
        v = (0, h.default)(k.motion.div)(q || (q = r`
  font-size: 36px;
  font-weight: ${ 0 };
`), j.FontWeights.Bold);
}), d.register('wLK8W', function(b, c) {
    a(b.exports, 'PardyQuestionContainer', function() {
        return r;
    }), a(b.exports, 'PardyQuestionContent', function() {
        return s;
    }), a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('U8PGt'),
        g = d('Ez+ug'),
        h = d('T19c3'),
        i = d('Ud+L4'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('h99Nu'),
        m = d('K4W5x');
    let n, o, p = a => a;
    var q = (0, j.observer)(a => {
        const r = k.useRef(),
            [, s] = (0, f.default)(r),
            t = k.useRef(),
            [, u] = (0, f.default)(t),
            v = k.useMemo(m.default, []);
        if (!v)
            return null;
        k.useEffect(() => {
            const w = (s - u) / 2;
            a.onSpaceBetweenChanged(w);
        }, [
            s,
            u
        ]);
        return (0, e.jsx)(r, {
            ref: r,
            children: (0, e.jsx)(s, {
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
    const r = l.default.div.attrs({
            className: 'flex hc vc'
        })(n || (n = p`
  height: 50%;
  overflow: hidden;
`)),
        s = l.default.div.attrs({
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
}), d.register('K4W5x', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('6G/rR'),
        f = d('8QQ2U');
    var g = () => {
        const h = (0, f.default)();
        if (!h)
            return null;
        return e.default.kit.questions.find(b => b._id === h.questionId);
    };
}), d.register('RoETs', function(b, c) {
    a(b.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('hM8sf'),
        g = d('41n4U'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('xpHrE'),
        l = d('KxhPY');
    let m;
    var n = (0, h.observer)(a => {
        const {
            pardy: {
                questionStatus: o
            }
        } = i.useContext(f.default);
        return (0, e.jsx)(o, {
            children: o === g.PardyQuestionStatus.ask ? (0, e.jsx)(k.default, {
                spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer,
                setToTimesUpScreen: () => a.setToTimesUpScreen(!0)
            }) : o === g.PardyQuestionStatus.timesUp ? (0, e.jsx)(l.default, {
                spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer,
                animateOut: a.animateOut
            }) : null
        });
    });
    const o = j.default.div.attrs({
        className: 'maxWidth flex hc'
    })(m || (m = (a => a)`
  height: 25%;
`));
}), d.register('xpHrE', function(b, c) {
    a(b.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('b9Bct');
    d('uPP4W');
    var h = d('h99Nu');
    let i, j, k = a => a;
    var l = a => (0, e.jsx)(m, {
        children: (0, e.jsx)(n, {
            style: {
                marginBottom: a.spaceBetweenQuestionAndEdgeOfContainer
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
                onClick: a.setToTimesUpScreen,
                type: 'primary',
                size: 'large',
                children: 'End Round Early'
            })
        })
    });
    const m = h.default.div.attrs({
            className: 'flex maxWidth maxHeight vc'
        })(i || (i = k`
  justify-content: flex-end;
  width: 90%;
`)),
        n = (0, h.default)(g.motion.div)(j || (j = k``));
}), d.register('KxhPY', function(b, c) {
    a(b.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('b9Bct');
    d('uPP4W');
    var g = d('h99Nu'),
        h = d('317FW');
    let i, j, k, l = a => a;
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
    var n = a => (0, e.jsx)(o, {
        children: (0, e.jsx)(p, {
            style: {
                marginBottom: a.spaceBetweenQuestionAndEdgeOfContainer
            },
            children: (0, e.jsx)(q, {
                initial: m.out,
                animate: m.in,
                transition: {
                    duration: 0.7,
                    delay: 1.3
                },
                children: (0, e.jsx)(h.default, {
                    delay: 2.5,
                    duration: 3.1,
                    onLoad: a.animateOut
                })
            })
        })
    });
    const o = g.default.div.attrs({
            className: 'flex maxWidth maxHeight hc vc'
        })(i || (i = l``)),
        p = g.default.div(j || (j = l`
  width: 90%;
`)),
        q = (0, g.default)(f.motion.div).attrs({
            className: 'maxWidth'
        })(k || (k = l``));
}), d.register('317FW', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('b9Bct'),
        g = d('h99Nu');
    let h;
    var i = a => (0, e.jsx)(j, {
        style: {
            height: a.height || 15
        },
        children: (0, e.jsx)(f.motion.div, {
            initial: {
                width: 0
            },
            animate: {
                width: '100%'
            },
            transition: {
                delay: a.delay,
                duration: a.duration,
                ease: 'easeInOut'
            },
            onAnimationComplete: a.onLoad,
            style: {
                background: 'rgba(255, 255, 255, 0.7)',
                height: '100%'
            }
        })
    });
    const j = g.default.div.attrs({
        className: 'maxWidth'
    })(h || (h = (a => a)`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  overflow: hidden;
`));
}), d.register('g9gu6', function(b, c) {
    a(b.exports, 'default', function() {
        return B;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('b9Bct'),
        h = d('h99Nu'),
        i = d('lmfrI'),
        j = d('1MpQD'),
        k = d('317FW'),
        l = d('Vlfxs'),
        m = d('8QQ2U'),
        n = d('hM8sf'),
        o = d('41n4U'),
        p = d('25lmu');
    let q, r, s, t, u, v, w, x, y = a => a;
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
    var B = (0, l.observer)(a => {
        const {
            pardy: C
        } = f.useContext(n.default), [D, E] = f.useState(!1), [F, G] = f.useState(!1), H = f.useMemo(m.default, []);
        f.useEffect(() => {
            C.questionScreen = o.PardyQuestionScreen.preview;
        }, []);
        return H && H.categoryItemId && H.categoryName ? (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(C, {
                    children: (0, e.jsx)(D, {
                        layoutId: `item-${ H.categoryItemId }`,
                        transition: {
                            duration: 0.9
                        },
                        children: (0, e.jsxs)(E, {
                            initial: A.in,
                            animate: F ? A.out : A.in,
                            transition: {
                                delay: 0.3,
                                duration: 0.7
                            },
                            onAnimationComplete: () => {
                                F && a.setToQuestionScreen();
                            },
                            children: [
                                (0, e.jsx)(G, {
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
                                (0, e.jsx)(H, {
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
                (0, e.jsx)(I, {
                    children: (0, e.jsx)(J, {
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
    const C = h.default.div.attrs({
            className: 'flex hc vc maxWidth maxHeight'
        })(q || (q = y``)),
        D = (0, h.default)(g.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(r || (r = y`
  background: rgba(0, 0, 0, 0.2);
`)),
        E = (0, h.default)(g.motion.div).attrs({
            className: 'flex flex-column hc vc maxWidth maxHeight'
        })(s || (s = y``)),
        F = (0, h.default)(g.motion.div)(t || (t = y`
  text-shadow: 0px 5px 5px ${ 0 };
`), i.default.Black),
        G = (0, h.default)(F)(u || (u = y`
  font-size: 42px;
`)),
        H = (0, h.default)(F)(v || (v = y`
  font-size: 142px;
`)),
        I = h.default.div.attrs({
            className: 'maxWidth flex hc'
        })(w || (w = y`
  position: absolute;
  bottom: 0;
  left: 0;
`)),
        J = (0, h.default)(g.motion.div)(x || (x = y`
  width: 80%;
`));
}), d.register('phnx4', function(b, c) {
    a(b.exports, 'ANIMATING_OUT_DURATION', function() {
        return z;
    }), a(b.exports, 'default', function() {
        return A;
    });
    var e = d('8kSQZ'),
        f = d('gSUVO'),
        g = d('25lmu'),
        h = d('1MpQD'),
        i = d('hM8sf'),
        j = d('41n4U'),
        k = d('b9Bct'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('fIPuX'),
        p = d('SvWR6'),
        q = d('9t7/7');
    h = d('1MpQD');
    let r, s, t, u, v, w = a => a;
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
        z = 0.7;
    var A = (0, l.observer)(a => {
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
                (0, e.jsx)(B, {
                    initial: x.out,
                    animate: C ? x.movingOut : x.in,
                    transition: {
                        duration: C ? z : 0.5
                    },
                    onAnimationComplete: () => {
                        C && a.setToQuestionScreen();
                    },
                    children: (0, e.jsxs)(C, {
                        initial: y.out,
                        animate: C ? y.movingOut : y.in,
                        transition: {
                            duration: C ? z : 1.4,
                            delay: C ? 0 : 3,
                            ease: 'easeOut'
                        },
                        children: [
                            (0, e.jsx)(D, {
                                children: 'The Finale'
                            }),
                            (0, e.jsxs)(E, {
                                children: [
                                    (0, e.jsx)(F, {
                                        children: 'You will be asked one more question'
                                    }),
                                    (0, e.jsx)(F, {
                                        children: 'Make your bet on whether or not you\'ll answer correctly'
                                    }),
                                    (0, e.jsx)(F, {
                                        children: 'Bet as much or as little as you want; the maximum is your current cash amount'
                                    }),
                                    (0, e.jsx)(F, {
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
    const B = (0, n.default)(k.motion.div).attrs({
            className: 'maxWidth maxHeight scroll-y'
        })(r || (r = w``)),
        C = (0, n.default)(k.motion.div).attrs({
            className: 'maxWidth flex hc vc flex-column'
        })(s || (s = w`
  min-height: 100%;
  padding: 20px;
  z-index: 3;
`)),
        D = n.default.div(t || (t = w`
  text-transform: uppercase;
  font-size: 94px;
  font-weight: ${ 0 };
  text-decoration: underline;
  margin-bottom: 20px;
`), f.FontWeights.UltraBold),
        E = n.default.ul(u || (u = w`
  font-size: 26px;
  font-weight: ${ 0 };
`), f.FontWeights.Normal),
        F = n.default.li(v || (v = w``));
}), d.register('SvWR6', function(b, c) {
    a(b.exports, 'default', function() {
        return o;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('gSUVO'),
        h = d('hM8sf'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu');
    let l, m, n = a => a;
    var o = (0, i.observer)(a => {
        const {
            pardy: p
        } = j.useContext(h.default);
        return (0, e.jsxs)(p, {
            children: [
                (0, e.jsxs)(q, {
                    children: [
                        p.betsPlaced,
                        '/',
                        p.playerCount,
                        ' bets placed'
                    ]
                }),
                (0, e.jsx)(f.default, {
                    onClick: a.exit,
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
    const p = k.default.div.attrs({
            className: 'maxWidth flex vcc'
        })(l || (l = n`
  max-width: 900px;
  justify-content: space-between;
  margin-top: 40px;
`)),
        q = k.default.div(m || (m = n`
  font-size: 24px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold);
}), d.register('9t7/7', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('uIVkr'),
        g = d('LChhu'),
        h = d('b9Bct'),
        i = d('FNaij'),
        j = d('4/f+U'),
        k = d('uPP4W'),
        l = d('h99Nu'),
        m = d('phnx4');
    let n, o, p = a => a;
    var q = a => {
        const {
            x: r,
            y: s
        } = t((0, j.random)(4000, 9000));
        return (0, e.jsx)(r, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: a.animatingOut ? 0 : 1
            },
            transition: {
                duration: a.animatingOut ? m.ANIMATING_OUT_DURATION : 1.4
            },
            children: (0, e.jsx)(s, {
                style: {
                    x: r,
                    y: s
                }
            })
        });
    };
    const r = (0, l.default)(h.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(n || (n = p`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`)),
        s = (0, l.default)(h.motion.div)(o || (o = p`
  height: 220px;
  width: 220px;
  border-radius: 50%;
  filter: blur(4px);
  background: #fff59d;
  opacity: 0.2;
`)),
        t = (u = 5000) => {
            const v = (0, i.useMotionValue)(0),
                w = (0, i.useMotionValue)(0),
                x = window.innerWidth,
                y = window.innerHeight,
                z = f => {
                    const A = (0, j.random)(0, x),
                        B = (0, j.random)(0, y);
                    f ? (v.set(A), w.set(B)) : ((0, g.animate)(v, A, {
                        duration: u / 1000,
                        ease: 'easeInOut'
                    }), (0, g.animate)(w, B, {
                        duration: u / 1000,
                        ease: 'easeInOut'
                    }));
                };
            return k.useEffect(() => {
                z(!0), z();
            }, []), (0, f.useIntervalWhen)(z, u), {
                x: v,
                y: w
            };
        };
}), d.register('FNaij', function(b, c) {
    a(b.exports, 'useMotionValue', function() {
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
}), d.register('6RRzg', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('25lmu'),
        g = d('1MpQD'),
        h = d('b9Bct'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('VTzsr'),
        l = d('TOei8'),
        m = d('6ObVF');
    let n, o, p = a => a;
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
    var r = a => {
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
        return (0, e.jsx)(s, {
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
                s && a.setToHomeScreen();
            },
            children: (0, e.jsxs)(t, {
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
    const s = (0, j.default)(h.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(n || (n = p`
  overflow: hidden;
`)),
        t = (0, j.default)(h.motion.div).attrs({
            className: 'maxWidth maxHeight'
        })(o || (o = p``));
}), d.register('VTzsr', function(b, c) {
    a(b.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('U8PGt'),
        g = d('T19c3'),
        h = d('Ez+ug'),
        i = d('uPP4W'),
        j = d('wLK8W'),
        k = d('K4W5x');
    var l = a => {
        const m = i.useRef(),
            [, n] = (0, f.default)(m),
            o = i.useRef(),
            [, p] = (0, f.default)(o);
        i.useEffect(() => {
            const q = (n - p) / 2;
            a.onSpaceBetweenChanged(q);
        }, [
            n,
            p
        ]);
        const q = i.useMemo(k.default, []);
        if (!q)
            return null;
        const r = q.answers.find(a => a.correct);
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
}), d.register('TOei8', function(b, c) {
    a(b.exports, 'default', function() {
        return s;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('1MpQD'),
        h = d('hM8sf'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu'),
        l = d('/RkuN');
    let m, n, o, p, q, r = a => a;
    var s = (0, i.observer)(a => {
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
            return w.categories.forEach(a => {
                a.items.forEach(() => A += 1);
            }), x.length >= A ? {
                text: 'Continue to The Finale',
                handler: () => {
                    (0, l.default)();
                }
            } : {
                text: 'Continue',
                handler: () => {
                    a.exit();
                }
            };
        }, []);
        return (0, e.jsx)(t, {
            children: (0, e.jsxs)(u, {
                style: {
                    marginBottom: a.spaceBetweenContentAndEdgeOfContainer
                },
                children: [
                    (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsxs)(v, {
                                children: [
                                    u,
                                    '/',
                                    t,
                                    ' answered correctly'
                                ]
                            }),
                            v ? (0, e.jsxs)(w, {
                                children: [
                                    v,
                                    ' was the first to answer correctly!'
                                ]
                            }) : null
                        ]
                    }),
                    (0, e.jsx)(x, {
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
    const t = k.default.div.attrs({
            className: 'maxWidth flex vc hc'
        })(m || (m = r`
  height: 25%;
`)),
        u = k.default.div.attrs({
            className: 'flex'
        })(n || (n = r`
  width: 90%;
  justify-content: space-between;
  align-items: flex-end;
`)),
        v = k.default.div(o || (o = r`
  font-weight: 400;
  font-size: 22px;
`)),
        w = k.default.div(p || (p = r`
  font-weight: 300;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
`)),
        x = k.default.div(q || (q = r``));
}), d.register('6ObVF', function(b, c) {
    a(b.exports, 'default', function() {
        return k;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('h99Nu');
    let g, h, i, j = a => a;
    var k = a => (0, e.jsx)(l, {
        children: (0, e.jsx)(m, {
            style: {
                marginTop: a.spaceBetweenContentAndEdgeOfContainer
            },
            children: (0, e.jsx)(n, {
                children: 'Answer:'
            })
        })
    });
    const l = f.default.div.attrs({
            className: 'maxWidth flex vc hc'
        })(g || (g = j`
  height: 25%;
`)),
        m = f.default.div(h || (h = j``)),
        n = f.default.div(i || (i = j`
  font-size: 32px;
`));
}), d.register('5moSQ', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('h99Nu');
    let g, h, i = a => a;
    var j = a => (0, e.jsxs)(k, {
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
            (0, e.jsx)(l, {
                children: a.children
            })
        ]
    });
    const k = f.default.div(g || (g = i`
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
        l = f.default.div.attrs({
            className: 'maxAll'
        })(h || (h = i`
  position: absolute;
  top: 0;
  left: 0;
`));
}), d.register('SURf1', function(b, c) {
    a(b.exports, 'default', function() {
        return z;
    });
    var e = d('8kSQZ'),
        f = d('0iTfX'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('P16bE'),
        j = d('iwyL6'),
        k = d('YZkLC'),
        l = d('j4sYN'),
        m = d('Vlfxs'),
        n = d('Lzk+f'),
        o = d('1MpQD'),
        p = d('25lmu'),
        q = d('NewB0'),
        r = d('RBz1q'),
        s = d('hM8sf'),
        t = d('fIPuX');
    let u, v, w = a => a;
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
    var z = (0, m.observer)(() => {
        const {
            ui: A
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
            (0, o.inLavaMode)() && (A.backgroundColor = '#ac1900'), (0, o.inImposterMode)() && (A.backgroundColor = '#000a12'), (0, o.inDrawMode)() && (A.backgroundColor = '#f1f2f3');
        }, []);
        const B = g.useMemo(() => (0, o.inPardyMode)() ? r.default : g.Fragment, []);
        return A.showingLavaPreScreen ? (0, e.jsx)(n.default, {}) : (0, e.jsx)(B, {
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
}), d.register('P16bE', function(b, c) {
    a(b.exports, 'default', function() {
        return A;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('f9f+a'),
        i = d('cR5QE'),
        j = d('1MpQD'),
        k = d('0iTfX'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('PDLD/2');
    let p, q, r, s, t = a => a;
    const u = (a, b) => {
            const v = a.name.toUpperCase(),
                w = b.name.toUpperCase();
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
            const A = this.props.players.filteredPlayers.reverse();
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
                            children: A.sort(u).map(A => (0, g.jsx)(h.default, {
                                'data-id': A.id,
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
                                    children: A.name
                                })
                            }, A.id))
                        })
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'handleClick', a => {
                this.props.gameValues.bossId = a.currentTarget.dataset.id, this.props.gameValues.currentRoute = o.GameStatus.teams;
            });
        }
    };
    z = (0, f.__decorate)([
        (0, l.inject)('engine', 'players', 'gameValues'),
        l.observer
    ], z);
    var A = B;
}), d.register('iwyL6', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('1MpQD'),
        k = d('t5mrz'),
        l = d('Vnwty'),
        m = d('qEw51'),
        n = d('KlhV/');
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getContainerBackground', () => (0, j.inDrawMode)() ? 'rgba(0,0,0,0.1)' : 'rgba(0, 0, 0, 0.4)'), (0, e.default)(this, 'getContainerColor', () => (0, j.inDrawMode)() ? k.default.Black : k.default.White);
        }
    };
    o = (0, f.__decorate)([
        (0, h.inject)('gameValues'),
        h.observer
    ], o);
    var p = q;
}), d.register('Vnwty', function(c, y) {
    a(c.exports, 'default', function() {
        return u;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('EefFJ'),
        g = d('h99Nu'),
        h = d('PjB0f'),
        i = d('SlNZ027'),
        j = d('jrTkz0'),
        k = d('OECP7'),
        l = d('PMzGD'),
        m = d('iHElh'),
        n = d('Dog9Y'),
        o = d('gSUVO'),
        p = d('S/jX4');
    let q, r, s, t = a => a;
    var u = a => {
        const {
            gameCode: v
        } = w, x = () => `${ (0, h.getDomain)() }/join?gc=${ v }`, y = () => {
            b(i)(x()), j.default.success('Game link copied');
        };
        var z, A, B;
        return (0, e.jsxs)(v, {
            style: {
                background: null !== (z = w.background) && void 0 !== z ? z : 'rgba(48, 28, 86, 0.9)',
                color: null !== (A = w.color) && void 0 !== A ? A : p.default.White,
                height: null !== (B = w.height) && void 0 !== B ? B : 'auto'
            },
            children: [
                (0, e.jsxs)(w, {
                    children: [
                        'Go to ',
                        (0, e.jsx)('b', {
                            children: window && window.location ? window.location.hostname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0] + '/join' : ''
                        }),
                        ' and enter code'
                    ]
                }),
                w.gameCode ? (0, e.jsx)(k.default, {
                    overlayInnerStyle: {
                        padding: 20
                    },
                    content: (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsx)(l.default, {
                                value: x(),
                                size: 350,
                                bordered: !1
                            }),
                            (0, e.jsx)(n.default, {
                                block: !0,
                                onClick: y,
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
                    children: (0, e.jsx)(x, {
                        onClick: y,
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
    const v = (0, g.default)(f.default).attrs({
            className: 'medium-shadow flex-column flex-center maxWidth'
        })(q || (q = t`
  line-height: 1;
  padding: 25px 40px;
`)),
        w = g.default.div(r || (r = t`
  font-size: 32px;
`)),
        x = g.default.div(s || (s = t`
  font-size: 106px;
  margin-top: 13px;
  font-weight: ${ 0 };
  cursor: pointer;
`), o.FontWeights.UltraBold);
}), d.register('EefFJ', function(b, c) {
    a(b.exports, 'default', function() {
        return f;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = a => {
        const g = g => {
            g.stopPropagation(), a.onClick && a.onClick(g);
        };
        return (0, e.jsx)('div', {
            style: {
                ...a.style || {},
                pointerEvents: a.disable ? 'none' : 'all'
            },
            className: a.className,
            onMouseDown: g,
            onTouchStart: g,
            children: a.children
        });
    };
}), d.register('SlNZ027', function(a, b) {
    var e = d('QMiH027'),
        f = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    a.exports = function(a, b) {
        var g, h, i, j, k, l, m = !1;
        b || (b = {}), g = b.debug || !1;
        try {
            if (i = e(), j = document.createRange(), k = document.getSelection(), (l = document.createElement('span')).textContent = a, l.ariaHidden = 'true', l.style.all = 'unset', l.style.position = 'fixed', l.style.top = 0, l.style.clip = 'rect(0, 0, 0, 0)', l.style.whiteSpace = 'pre', l.style.webkitUserSelect = 'text', l.style.MozUserSelect = 'text', l.style.msUserSelect = 'text', l.style.userSelect = 'text', l.addEventListener('copy', function(e) {
                    if (e.stopPropagation(), b.format)
                        if (e.preventDefault(), void 0 === e.clipboardData) {
                            g && console.warn('unable to use e.clipboardData'), g && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var n = f[b.format] || f.default;
                            window.clipboardData.setData(n, a);
                        } else
                            e.clipboardData.clearData(), e.clipboardData.setData(b.format, a);
                    b.onCopy && (e.preventDefault(), b.onCopy(e.clipboardData));
                }), document.body.appendChild(l), j.selectNodeContents(l), k.addRange(j), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            m = !0;
        } catch (e) {
            g && console.error('unable to copy using execCommand: ', e), g && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(b.format || 'text', a), b.onCopy && b.onCopy(window.clipboardData), m = !0;
            } catch (e) {
                g && console.error('unable to copy using clipboardData: ', e), g && console.error('falling back to prompt'), h = function(a) {
                    var n = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return a.replace(/#{\s*key\s*}/g, n);
                }('message' in b ? b.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(h, a);
            }
        } finally {
            k && ('function' == typeof k.removeRange ? k.removeRange(j) : k.removeAllRanges()), l && document.body.removeChild(l), i();
        }
        return m;
    };
}), d.register('QMiH027', function(a, b) {
    a.exports = function() {
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
                'Caret' === e.type && e.removeAllRanges(), e.rangeCount || g.forEach(function(f) {
                    e.addRange(f);
                }), f && f.focus();
            };
    };
}), d.register('OECP7', function(c, p) {
    a(c.exports, 'default', function() {
        return u;
    }, function(a) {
        return u = a;
    });
    var e = d('VAIs1'),
        f = d('uPP4W'),
        g = d('qEw51'),
        h = d('YfLmS'),
        i = d('tLNBh'),
        j = d('XiKtc'),
        k = d('2iTdQ'),
        l = d('ljd7h'),
        m = function(a, b) {
            var n = {};
            for (var o in a)
                Object.prototype.hasOwnProperty.call(a, o) && b.indexOf(o) < 0 && (n[o] = a[o]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var p = 0;
                for (o = Object.getOwnPropertySymbols(a); p < o.length; p++)
                    b.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(a, o[p]) && (n[o[p]] = a[o[p]]);
            }
            return n;
        };
    const n = a => {
            let {
                title: o,
                content: p,
                prefixCls: q
            } = r;
            return o || p ? f.createElement(f.Fragment, null, o && f.createElement('div', {
                className: `${ q }-title`
            }, (0, i.getRenderPropValue)(o)), f.createElement('div', {
                className: `${ q }-inner-content`
            }, (0, i.getRenderPropValue)(p))) : null;
        },
        o = f.forwardRef((a, c) => {
            var p, q;
            const {
                prefixCls: r,
                title: s,
                content: t,
                overlayClassName: u,
                placement: v = 'top',
                trigger: w = 'hover',
                mouseEnterDelay: x = 0.1,
                mouseLeaveDelay: y = 0.1,
                overlayStyle: z = {},
                arrowPointAtCenter: A,
                arrow: B
            } = C, D = m(C, [
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
                getPrefixCls: E
            } = f.useContext(g.ConfigContext), F = E('popover', r), [G, H] = (0, l.default)(F), I = E(), J = b(e)(u, H), K = null !== (q = null !== (p = 'boolean' != typeof B && (null == B ? void 0 : B.arrowPointAtCenter)) && void 0 !== p ? p : A) && void 0 !== q && q, L = null != B ? B : {
                arrowPointAtCenter: K
            };
            return G(f.createElement(h.default, Object.assign({
                placement: v,
                arrow: L,
                trigger: w,
                mouseEnterDelay: x,
                mouseLeaveDelay: y,
                overlayStyle: z
            }, D, {
                prefixCls: F,
                overlayClassName: J,
                ref: c,
                overlay: f.createElement(n, {
                    prefixCls: F,
                    title: s,
                    content: t
                }),
                transitionName: (0, j.getTransitionName)(I, 'zoom-big', D.transitionName),
                'data-popover-inject': !0
            })));
        });
    o._InternalPanelDoNotUseOrYouWillBeFired = k.default;
    var p = q;
}), d.register('tLNBh', function(b, c) {
    a(b.exports, 'getRenderPropValue', function() {
        return d;
    });
    const e = a => a ? 'function' == typeof a ? a() : a : null;
}), d.register('2iTdQ', function(c, n) {
    a(c.exports, 'getOverlay', function() {
        return l;
    }, function(a) {
        return l = a;
    }), a(c.exports, 'RawPurePanel', function() {
        return m;
    }, function(a) {
        return m = a;
    }), a(c.exports, 'default', function() {
        return n;
    }, function(a) {
        return n = a;
    });
    var e = d('uPP4W'),
        f = d('VAIs1'),
        g = d('E77Jm'),
        h = d('qEw51'),
        i = d('ljd7h'),
        j = d('tLNBh'),
        k = function(a, b) {
            var l = {};
            for (var m in a)
                Object.prototype.hasOwnProperty.call(a, m) && b.indexOf(m) < 0 && (l[m] = a[m]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var n = 0;
                for (m = Object.getOwnPropertySymbols(a); n < m.length; n++)
                    b.indexOf(m[n]) < 0 && Object.prototype.propertyIsEnumerable.call(a, m[n]) && (l[m[n]] = a[m[n]]);
            }
            return l;
        };
    const l = (a, b, c) => {
        if (b || c)
            return e.createElement(e.Fragment, null, b && e.createElement('div', {
                className: `${ a }-title`
            }, (0, j.getRenderPropValue)(b)), e.createElement('div', {
                className: `${ a }-inner-content`
            }, (0, j.getRenderPropValue)(c)));
    };

    function m(a) {
        const {
            hashId: n,
            prefixCls: o,
            className: p,
            style: q,
            placement: r = 'top',
            title: s,
            content: t,
            children: u
        } = v;
        return e.createElement('div', {
            className: b(f)(n, o, `${ o }-pure`, `${ o }-placement-${ r }`, p),
            style: q
        }, e.createElement(g.Popup, Object.assign({}, v, {
            className: n,
            prefixCls: o
        }), u || l(o, s, t)));
    }

    function n(a) {
        const {
            prefixCls: o
        } = p, q = k(p, ['prefixCls']), {
            getPrefixCls: r
        } = e.useContext(h.ConfigContext), s = r('popover', o), [t, u] = (0, i.default)(s);
        return t(e.createElement(m, Object.assign({}, q, {
            prefixCls: s,
            hashId: u
        })));
    }
}), d.register('ljd7h', function(b, c) {
    a(b.exports, 'default', function() {
        return v;
    });
    var e = d('Sz24z'),
        f = d('vvwoA'),
        g = d('jnIuq'),
        h = d('0a13R'),
        i = d('P38j/'),
        j = d('dcHOy');
    const k = a => {
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
                marginXS: v,
                colorBgElevated: w
            } = x;
            return [{
                    [l]: Object.assign(Object.assign({}, (0, i.resetComponent)(x)), {
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
                            marginBottom: v,
                            color: s,
                            fontWeight: p
                        },
                        [`${ l }-inner-content`]: {
                            color: n
                        }
                    })
                },
                (0, j.default)(x, {
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
        l = a => {
            const {
                componentCls: m
            } = n;
            return {
                [m]: h.PresetColors.map(c => {
                    const o = n[`${ c }-6`];
                    return {
                        [`&${ m }-${ c }`]: {
                            '--antd-arrow-background-color': o,
                            [`${ m }-inner`]: {
                                backgroundColor: o
                            },
                            [`${ m }-arrow`]: {
                                background: 'transparent'
                            }
                        }
                    };
                })
            };
        },
        m = a => {
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
            } = w, x = s - Math.round(t * u);
            return {
                [n]: {
                    [`${ n }-inner`]: {
                        padding: 0
                    },
                    [`${ n }-title`]: {
                        margin: 0,
                        padding: `${ x / 2 }px ${ v }px ${ x / 2 - o }px`,
                        borderBottom: `${ o }px ${ p } ${ q }`
                    },
                    [`${ n }-inner-content`]: {
                        padding: `${ r }px ${ v }px`
                    }
                }
            };
        };
    var n = (0, f.default)('Popover', a => {
        const {
            colorBgElevated: o,
            colorText: p,
            wireframe: q
        } = r, s = (0, g.merge)(r, {
            popoverBg: o,
            popoverColor: p,
            popoverPadding: 12
        });
        return [
            k(s),
            l(s),
            q && m(s),
            (0, e.initZoomMotion)(s, 'zoom-big')
        ];
    }, a => {
        let {
            zIndexPopupBase: o
        } = p;
        return {
            zIndexPopup: o + 30,
            width: 177
        };
    });
}), d.register('Dog9Y', function(b, c) {
    a(b.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('CDq40'),
        g = d('uPP4W'),
        h = d('h99Nu'),
        i = d('gSUVO'),
        j = d('S/jX4');
    let k;
    var l = a => {
        const m = a.size || 'default',
            n = g.useMemo(() => a.customColor ? a.customColor : a.disabled ? '#546e7a' : 'success' === a.type ? '#2e7d32' : 'danger' === a.type ? '#c62828' : '#3f51b5', [
                a.disabled,
                a.type,
                a.customColor
            ]),
            o = g.useMemo(() => (0, f.darken)(0.1, n), [n]),
            p = g.useMemo(() => 'small' === m || 'default' === m ? 14 : 20, [m]),
            q = g.useMemo(() => 'small' === m ? 6 : 'default' === m ? 8 : 12, [m]),
            r = g.useMemo(() => {
                const s = 'small' === m ? '8px' : '12px';
                return a.customHorizontalPadding ? `${ s } ${ a.customHorizontalPadding }px` : 'small' === m ? `${ s } 24px` : 'default' === m ? `${ s } 28px` : `${ s } 42px`;
            }, [
                m,
                a.customHorizontalPadding
            ]),
            s = g.useMemo(() => 'small' === m ? 41 : 49, [m]),
            t = g.useMemo(() => a.customFontWeight ? a.customFontWeight : 'large' === m ? i.FontWeights.Bold : i.FontWeights.Normal, [
                a.customFontWeight,
                m
            ]),
            u = () => {
                a.disabled || a.onClick && a.onClick();
            };
        return (0, e.jsx)(m, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: s
            }, a.style || {}),
            children: (0, e.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': a.ariaLabel,
                onClick: a.usePointerDownEvent ? void 0 : u,
                onPointerDown: a.usePointerDownEvent ? u : void 0,
                style: {
                    cursor: a.disabled ? 'not-allowed' : 'pointer',
                    width: a.block ? '100%' : 'auto'
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
                        children: a.children
                    })
                ]
            })
        });
    };
    const m = h.default.div.attrs({
        className: 'flex'
    })(k || (k = (a => a)`
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
}), d.register('S/jX4', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var e = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), d.register('YZkLC', function(b, c) {
    a(b.exports, 'default', function() {
        return y;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('3Ntzy'),
        i = d('1MpQD'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('h99Nu'),
        m = d('PDLD/2'),
        n = d('mi9lw'),
        o = d('t5mrz'),
        p = d('oSNZM'),
        q = d('Ftbrq'),
        r = d('69E3X'),
        s = d('LYLbA'),
        t = d('js2PD'),
        u = d('qgO2124');
    let v;
    const w = l.default.div(v || (v = (a => a)`
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
`), a => a.background, a => a.color);
    let x = class extends k.Component {
        render() {
            const y = (() => {
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
                    (0, g.jsx)(y, {
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getContainerBackground', () => (0, i.inDrawMode)() ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.4)'), (0, e.default)(this, 'getContainerColor', () => (0, i.inDrawMode)() ? o.default.Black : o.default.White), (0, e.default)(this, 'getNoun', a => {
                let y = 'player';
                return (0, i.inTeamMode)() && (y = 'team'), a && (y += 's'), y;
            }), (0, e.default)(this, 'getMessage', () => {
                const y = this.props.gameOptions.goal,
                    {
                        type: z,
                        value: A
                    } = B;
                return (0, i.inThanosMode)() ? 'Be the first to acquire all 6 Infinity Stones!' : (0, i.inZombiesVsHumansMode)() ? 'Be the last team to survive!' : (0, i.inLavaMode)() ? 'Work together to stay above the lava as long as you can!' : (0, i.inImposterMode)() ? n.imposterStrings.goal : (0, i.inDrawMode)() ? 'Guess student drawings to earn the most points!' : (0, i.inPardyMode)() ? 'Answer questions correctly & choose the right power to come out on top!' : z === m.GameGoal.time ? `Try to make as much money as you can in ${ (0, i.numberWithCommas)(A) } ${ (0, i.plural)('minute', A) }!` : z === m.GameGoal.race ? `The first ${ this.getNoun() } to earn ${ (0, i.getMoney)(A) } wins!` : z === m.GameGoal.allIn ? `The game ends once the combined balance of all ${ this.getNoun(!0) } reaches ${ (0, i.getMoney)(A) }!` : '';
            });
        }
    };
    x = (0, f.__decorate)([
        (0, j.inject)('gameOptions'),
        j.observer
    ], x);
    var y = z;
}), d.register('oSNZM', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('lByv9'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'CheckOutlined';
    var j = f.forwardRef(i);
}), d.register('lByv9', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), d.register('Ftbrq', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('U2LJa'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'ClockCircleOutlined';
    var j = f.forwardRef(i);
}), d.register('U2LJa', function(b, c) {
    a(b.exports, 'default', function() {
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
}), d.register('69E3X', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('diVqG'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'HighlightOutlined';
    var j = f.forwardRef(i);
}), d.register('diVqG', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M957.6 507.4L603.2 158.2a7.9 7.9 0 00-11.2 0L353.3 393.4a8.03 8.03 0 00-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 00-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0011.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0011.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z'
                }
            }]
        },
        name: 'highlight',
        theme: 'outlined'
    };
}), d.register('LYLbA', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('DTUm6'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'RocketOutlined';
    var j = f.forwardRef(i);
}), d.register('DTUm6', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z'
                }
            }]
        },
        name: 'rocket',
        theme: 'outlined'
    };
}), d.register('qgO2124', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('wOJzl24'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'UsergroupAddOutlined';
    var j = f.forwardRef(i);
}), d.register('wOJzl24', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), d.register('j4sYN', function(b, c) {
    a(b.exports, 'default', function() {
        return v;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('mOFFH'),
        l = d('o8Oaf'),
        m = d('t5mrz'),
        n = d('1MpQD');
    let o, p, q, r = a => a;
    const s = j.default.div.attrs({
            className: 'scroll-y'
        })(o || (o = r`
  flex: 1;
  min-height: 0;
  color: ${ 0 };
`), a => a.color),
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
    let v = class extends i.Component {
        render() {
            return (0, g.jsx)(s, {
                color: this.getContainerColor(),
                children: (0, g.jsxs)(t, {
                    children: [
                        (0, g.jsx)(l.default, {
                            amountOfPlayers: this.props.players.filteredPlayers.length
                        }),
                        (0, g.jsx)(u, {
                            children: this.props.players.filteredPlayers.reverse().map(a => (0, g.jsx)(k.default, {
                                player: a
                            }, a.id))
                        })
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getContainerColor', () => (0, n.inDrawMode)() ? m.default.Black : m.default.White);
        }
    };
    v = (0, f.__decorate)([
        (0, h.inject)('players'),
        h.observer
    ], v);
}), d.register('mOFFH', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('YfLmS'),
        i = d('1MpQD'),
        j = d('0iTfX'),
        k = d('Vlfxs'),
        l = d('uPP4W');
    let m;
    const n = d('h99Nu').default.div(m || (m = (a => a)`
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
`), a => a.showBorder ? '2px solid' : 'none', j.default.normal);
    let o = class extends l.Component {
        render() {
            const {
                player: p
            } = this.props;
            return (0, g.jsx)(n, {
                onClick: this.banPlayer,
                showBorder: this.shouldShowBorder,
                children: (0, g.jsx)(h.default, {
                    title: 'Remove from Game',
                    children: p.name
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'shouldShowBorder', (0, i.inDrawMode)()), (0, e.default)(this, 'banPlayer', () => (0, i.banPlayer)(this.props.player.id));
        }
    };
    o = (0, f.__decorate)([
        (0, k.inject)('kit', 'gameOptions'),
        k.observer
    ], o);
    var p = q;
}), d.register('o8Oaf', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD'),
        g = d('0iTfX'),
        h = d('uPP4W'),
        i = d('h99Nu'),
        j = d('i4GoV');
    let k, l, m = a => a;
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
    var p = a => {
        const {
            amountOfPlayers: q
        } = r, s = h.useMemo(() => (0, f.inPardyMode)() ? 'contestant' : 'player', []);
        return (0, e.jsxs)(n, {
            children: [
                (0, e.jsx)(o, {
                    children: `${ q } ${ (0, f.plural)(s, q) }`
                }),
                (0, e.jsx)(j.default, {})
            ]
        });
    };
}), d.register('i4GoV', function(b, c) {
    a(b.exports, 'default', function() {
        return w;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('1MpQD'),
        i = d('t5mrz'),
        j = d('0iTfX'),
        k = d('mJDQE'),
        l = d('Vlfxs'),
        m = d('CDq40'),
        n = d('uPP4W'),
        o = d('h99Nu'),
        p = d('PDLD/2');
    let q, r, s = a => a;
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
`), a => a.disabled ? i.default.DisabledGray : a.customColor || i.default.SuccessGreen, i.default.White, j.default.black, k.default.basic, a => a.disabled ? 'not-allowed' : 'pointer', a => a.disabled ? i.default.DisabledGray : (0, m.lighten)(0.1, a.customColor || i.default.SuccessGreen));
    let v = class extends n.Component {
        render() {
            const w = this.getButtonInfo();
            let x = () => null;
            return w.disabled || (x = this.handleClick), (0, g.jsx)(t, {
                children: (0, g.jsx)(u, {
                    onClick: x,
                    disabled: w.disabled,
                    children: w.text
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'playerCount', () => this.props.players.filteredPlayers.length), (0, e.default)(this, 'handleClickCallback', () => {
                !(0, h.inBossBattleMode)() || this.props.onTeamScreen ? !(0, h.inTeamMode)() || this.props.onTeamScreen ? (0, h.inBossBattleMode)() ? this.props.ui.showingBossPreScreen = !0 : (0, h.inZombiesVsHumansMode)() ? this.props.ui.showingHumansVsZombiesPreScreen = !0 : (0, h.inLavaMode)() ? this.props.ui.showingLavaPreScreen = !0 : this.props.gameValues.currentRoute = p.GameStatus.gameplay : this.props.gameValues.currentRoute = p.GameStatus.teams : this.props.gameValues.showBossBattleModal = !this.props.gameValues.showBossBattleModal;
            }), (0, e.default)(this, 'handleClick', () => {
                this.handleClickCallback();
            }), (0, e.default)(this, 'getButtonInfo', () => {
                const w = this.playerCount(),
                    x = this.props.gameOptions;
                let y = 'player';
                if ((0, h.inPardyMode)() && (y = 'contestant'), (0, h.inBossBattleMode)() || (0, h.inZombiesVsHumansMode)()) {
                    const z = ((0, h.inBossBattleMode)() ? 3 : 2) - w;
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
                    const z = Math.max(3, 2 * x.modeOptions.numberOfImposters) - w;
                    if (z > 0 && (0, h.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ z } more ${ (0, h.plural)(y, z) } needed`
                        };
                }
                if ((0, h.inDrawMode)()) {
                    const z = 2 - w;
                    if (z > 0 && (0, h.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ z } more ${ (0, h.plural)(y, z) } needed`
                        };
                }
                if ((0, h.inThanosMode)()) {
                    const z = 2 - w;
                    if (z > 0 && (0, h.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ z } more ${ (0, h.plural)(y, z) } needed`
                        };
                }
                if ((0, h.inTeamMode)() && !this.props.onTeamScreen) {
                    const z = 2 * (x.modeOptions.playersPerTeam || 4) - w;
                    return z > 0 && (0, h.inProduction)() ? {
                        disabled: !0,
                        text: `${ z } more ${ (0, h.plural)(y, z) } needed`
                    } : {
                        disabled: !1,
                        text: 'Make Teams'
                    };
                }
                return {
                    disabled: 0 === w && (0, h.inProduction)(),
                    text: 'Start Game'
                };
            });
        }
    };
    v = (0, f.__decorate)([
        (0, l.inject)('gameOptions', 'gameValues', 'players', 'kit', 'ui'),
        l.observer
    ], v);
    var w = x;
}), d.register('Lzk+f', function(b, c) {
    a(b.exports, 'default', function() {
        return s;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('25lmu'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('h99Nu'),
        l = d('PDLD/2'),
        m = d('PjB0f');
    let n, o, p, q = a => a;
    let r = class extends j.Component {
        componentDidMount() {
            (0, m.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), h.default.lava.pantherShort.unload(), h.default.lava.pantherShort.load(), h.default.lava.pantherShort.on('load', () => {
                this.startGame(), h.default.lava.pantherShort.play();
            }), h.default.lava.pantherShort.on('loaderror', this.startGame), h.default.lava.pantherShort.on('playerror', this.startGame);
        }
        render() {
            return (0, g.jsx)(u, {
                children: (0, g.jsx)(v, {
                    children: (0, g.jsx)(w, {
                        children: this.state.content
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
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
            ]), (0, e.default)(this, 'setStage', a => {
                const s = this.getStages()[a];
                if (!s)
                    return this.props.gameValues.currentRoute = l.GameStatus.gameplay, void(this.props.ui.showingLavaPreScreen = !1);
                this.setState({
                    content: s.content
                }), setTimeout(() => this.setStage(a + 1), s.delay);
            }), (0, e.default)(this, 'startGame', () => {
                this.setStage(0);
            });
        }
    };
    r = (0, f.__decorate)([
        (0, i.inject)('gameValues', 'ui'),
        i.observer
    ], r);
    var s = t;
    const u = k.default.div(n || (n = q`
  background: linear-gradient(182deg, #c86300, #dd3725);
  background-size: 400% 400%;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`)),
        v = k.default.div(o || (o = q`
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
        w = k.default.div(p || (p = q`
  max-width: 800px;
`));
}), d.register('BiWtn', function(b, c) {
    a(b.exports, 'default', function() {
        return k;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('Vlfxs'),
        h = d('uPP4W'),
        i = d('9YwGZ');
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
}), d.register('9YwGZ', function(b, c) {
    a(b.exports, 'Container', function() {
        return w;
    }), a(b.exports, 'default', function() {
        return B;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('25lmu'),
        i = d('1MpQD'),
        j = d('t5mrz'),
        k = d('0iTfX'),
        l = d('4/f+U'),
        m = d('Vlfxs'),
        n = d('uPP4W'),
        o = d('h99Nu'),
        p = d('PDLD/2'),
        q = d('TQGRh');
    let r, s, t = a => a;
    const u = a => new Promise(b => setTimeout(() => b(), a)),
        v = a => {
            let w = '';
            return a.forEach((c, d) => {
                w += c, d + 1 !== a.length && (w += ', ');
            }), w;
        },
        w = o.default.div(r || (r = t`
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
            let B = !1;
            const C = this.props.gameValues.thanosValues.showAt,
                D = setInterval(() => {
                    const E = Math.round((C - Date.now()) / 1000);
                    if (E <= 0)
                        return this.showResults(), clearInterval(D);
                    8 !== E || B || (B = !0, h.default.suspense.play()), this.setState({
                        secondsLeft: E
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
                                    ` ${ v(this.props.gameValues.thanosValues.saved.map(a => a.name)) }`
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
                                    ` ${ v(this.props.gameValues.thanosValues.snapped.map(a => a.name)) }`
                                ]
                            })
                        ]
                    })
                ]
            }) : null), (0, e.default)(this, 'showResults', async () => {
                const B = [];
                this.props.gameValues.thanosValues.saved.forEach(b => B.push({
                    survives: !0,
                    id: b.id,
                    name: b.name
                })), this.props.gameValues.thanosValues.snapped.forEach(b => B.push({
                    survives: !1,
                    id: b.id,
                    name: b.name
                }));
                const C = (0, l.shuffle)(B);
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
    var B = C;
}), d.register('TQGRh', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('UM8oI'),
        f = d('8kSQZ'),
        g = d('25lmu'),
        h = d('uPP4W');
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                showSurvived: !1,
                startHide: !1,
                show: !0
            });
        }
    }
    var j = k;
}), d.register('T01qO', function(b, c) {
    a(b.exports, 'default', function() {
        return z;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('25lmu'),
        i = d('1MpQD'),
        j = d('0iTfX'),
        k = d('UnUp5'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('3ui7e'),
        p = d('Gvg/o'),
        q = d('pa00H'),
        r = d('kaaOe'),
        s = d('2mqwk'),
        t = d('oAYDw'),
        u = d('8Iy/8'),
        v = d('E+lpI');
    let w;
    const x = n.default.div(w || (w = (a => a)`
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                show: !1
            }), (0, e.default)(this, 'getContent', a => (0, i.inBossBattleMode)() && !a ? (0, g.jsx)(g.Fragment, {
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
    var z = A;
}), d.register('3ui7e', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('25lmu'),
        i = d('t5mrz'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('h99Nu'),
        m = d('PjB0f');
    let n;
    const o = 'The Boss',
        p = a => (0, g.jsx)('div', {
            style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: a.backgroundColor,
                padding: 35,
                boxSizing: 'border-box',
                animationDuration: '12s',
                animationDelay: '3s',
                flexDirection: 'column'
            },
            className: 'animated fadeIn',
            children: a.children
        });
    let q = class extends k.Component {
        componentDidMount() {
            (0, m.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap');
            const r = h.default.eventBoom;
            r.volume(1), r.play(), r.on('play', this.handlePlay), r.on('loaderror', this.handlePlay), r.on('playerror', this.handlePlay);
        }
        render() {
            return this.state.showFinalContent ? this.props.contentWhenComplete : (0, g.jsx)(t, {
                children: this.getContent()
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
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
                let r = 'The Boss';
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const s = this.props.players.teams.find(r => r.id === o);
                    s && s.players[0] && (r = s.players[0]);
                }
                return r;
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
    var r = s;
    const t = l.default.div(n || (n = (a => a)`
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
}), d.register('Gvg/o', function(b, c) {
    a(b.exports, 'default', function() {
        return v;
    }), a(b.exports, 'BackgroundMove', function() {
        return x;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('uu6j3'),
        h = d('pa00H'),
        i = d('3Ntzy'),
        j = d('25lmu'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('9YwGZ'),
        o = d('TjrFO'),
        p = d('PjB0f');
    let q, r, s, t = a => a;
    let u = class extends l.Component {
        componentDidMount() {
            (0, p.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), j.default.boom.play(), setTimeout(() => {
                j.default.fanfare.play();
            }, 8000);
        }
        render() {
            const v = this.props.gameValues.defendingHomebaseResults;
            return v ? (0, f.jsx)(n.Container, {
                children: (0, f.jsx)(y, {
                    className: 'animated fadeIn',
                    style: {
                        animationDuration: '12s',
                        animationDelay: '8s'
                    },
                    children: (0, f.jsxs)(z, {
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
                                            text: `${ v.loser.name } Defeated!`
                                        })
                                    }),
                                    (0, f.jsx)('img', {
                                        src: (0, o.getImage)(v.winner.id),
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
                                            text: `${ v.winner.name } Win!`
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
                                            (0, g.getTeamPlayerNames)(v.winnerPlayerNames),
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
    var v = w;
    const x = (0, m.keyframes)(q || (q = t`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`)),
        y = m.default.div(r || (r = t`
  font-family: ${ 0 };
  height: 100%;
  width: 100%;
`), '\'Bowlby One SC\', cursive'),
        z = m.default.div(s || (s = t`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(270deg, #020a29, #087d17, #b67509);
  background-size: 600% 600%;
  animation: ${ 0 } 21s ease infinite;
  text-align: center;
`), x);
}), d.register('pa00H', function(b, c) {
    a(b.exports, 'default', function() {
        return C;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('69E3X'),
        i = d('nCiau'),
        j = d('iH/0w'),
        k = d('IsmrL'),
        l = d('2t11m'),
        m = d('8D3j3'),
        n = d('1MpQD'),
        o = d('0iTfX'),
        p = d('mJDQE'),
        q = d('Vlfxs'),
        r = d('uPP4W'),
        s = d('h99Nu'),
        t = d('t5mrz');
    let u, v, w, x = a => a;
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
`), a => a.customCSS ? a.customCSS : null),
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
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
    var C = D;
}), d.register('nCiau', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('2RGhe'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'RedoOutlined';
    var j = f.forwardRef(i);
}), d.register('2RGhe', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z'
                }
            }]
        },
        name: 'redo',
        theme: 'outlined'
    };
}), d.register('iH/0w', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('uhRWM'),
        f = d('uPP4W'),
        g = d('kblNR'),
        h = d('tEXgG'),
        i = function(a, b) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, a), {}, {
                ref: b,
                icon: g.default
            }));
        };
    i.displayName = 'SolutionOutlined';
    var j = f.forwardRef(i);
}), d.register('kblNR', function(b, c) {
    a(b.exports, 'default', function() {
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
                    d: 'M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm356.8-74.4c29-26.3 47.2-64.3 47.2-106.6 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6-57 32.5-96.2 92.7-99.2 162.1-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3-2.9-69.5-42.2-129.6-99.2-162.1zM692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80z'
                }
            }]
        },
        name: 'solution',
        theme: 'outlined'
    };
}), d.register('2t11m', function(b, c) {
    a(b.exports, 'getClappingEmoji', function() {
        return d;
    });
    const e = () => '\uD83D\uDC4F';
}), d.register('kaaOe', function(b, c) {
    a(b.exports, 'default', function() {
        return s;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('G602L'),
        h = d('1x/Uw'),
        i = d('1MpQD'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('h99Nu');
    let m, n, o = a => a;
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
            const s = (0, i.inTeamMode)(),
                t = (0, i.inBossBattleMode)(),
                u = (0, g.leaderboardSorter)(this.props.players.finalResults);
            let v, w, x;
            return u[0] && (v = u[0]), u[1] && (w = u[1]), u[2] && (x = u[2]), (0, f.jsxs)(p, {
                children: [
                    !t && (0, f.jsxs)(q, {
                        children: [
                            x ? (0, f.jsx)(h.default, {
                                snapshot: x,
                                isPlayer: !s,
                                position: 3,
                                themes: this.props.gameValues.availableThemes
                            }) : null,
                            v ? (0, f.jsx)(h.default, {
                                snapshot: v,
                                isPlayer: !s,
                                position: 1,
                                themes: this.props.gameValues.availableThemes
                            }) : null,
                            w ? (0, f.jsx)(h.default, {
                                snapshot: w,
                                isPlayer: !s,
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
    var s = t;
}), d.register('2mqwk', function(b, c) {
    a(b.exports, 'default', function() {
        return z;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('uPP4W'),
        i = d('pa00H'),
        j = d('h99Nu'),
        k = d('35w3I'),
        l = d('0iTfX'),
        m = d('Q4e8X'),
        n = d('Gvg/o'),
        o = d('J0g5g'),
        p = d('25lmu'),
        q = d('t5mrz'),
        r = d('1MpQD'),
        s = d('Vlfxs');
    let t, u, v, w, x = a => a,
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
                    lava: z
                } = this.props.entities;
                return 0 !== this.state.stage && z ? (0, g.jsx)(B, {
                    children: (0, g.jsx)(C, {
                        children: (0, g.jsxs)(D, {
                            children: [
                                (0, g.jsx)('div', {
                                    className: 'maxWidth',
                                    style: {
                                        flexShrink: 0,
                                        zIndex: 2
                                    },
                                    children: (0, g.jsx)(i.default, {})
                                }),
                                (0, g.jsxs)(E, {
                                    children: [
                                        (0, g.jsx)(k.default, {
                                            seconds: z.secondsLasted
                                        }),
                                        (0, g.jsx)(m.default, {
                                            buildHeight: z.buildHeight,
                                            pieceCount: z.buildPieces
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
            constructor(...a) {
                super(...a), (0, e.default)(this, 'state', {
                    stage: 0
                });
            }
        };
    y = (0, f.__decorate)([
        (0, s.inject)('gameOptions', 'entities'),
        s.observer
    ], y);
    var z = A;
    const B = j.default.div.attrs({
            className: 'maxWidth'
        })(t || (t = x`
  height: 100vh;
  background: ${ 0 };
`), q.default.Black),
        C = j.default.div.attrs({
            className: 'maxWidth maxHeight animated fadeIn'
        })(u || (u = x`
  animation-duration: 6s;
`)),
        D = j.default.div.attrs({
            className: 'maxWidth maxHeight flex flex-column'
        })(v || (v = x`
  overflow: hidden;
  background: linear-gradient(285deg, #a62a16, #b5761f, #2f2d2a);
  background-size: 600% 600%;
  animation: ${ 0 } 10s ease infinite;
  font-family: ${ 0 };
`), n.BackgroundMove, l.default.fontFamilyName),
        E = j.default.div.attrs({
            className: 'flex flex-column vc maxWidth animated fadeInDown'
        })(w || (w = x`
  flex: 1;
  z-index: 1;
  overflow-y: auto;
  padding-bottom: 50px;
  animation-duration: 8.2s;
`));
}), d.register('35w3I', function(b, c) {
    a(b.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD');
    d('uPP4W');
    var g = d('h99Nu'),
        h = d('X0Q4w');
    let i, j, k, l, m = a => a;
    var n = a => (0, e.jsxs)(o, {
        children: [
            (0, e.jsx)(r, {
                style: {
                    marginRight: 70,
                    transform: 'rotate(-16deg)'
                }
            }),
            (0, e.jsxs)('div', {
                children: [
                    (0, e.jsx)(p, {
                        children: 'Lava Survival Time:'
                    }),
                    (0, e.jsx)(q, {
                        children: (0, h.getTimerFromSeconds)(a.seconds)
                    })
                ]
            }),
            (0, e.jsx)(r, {
                style: {
                    marginLeft: 70,
                    transform: 'rotate(16deg)'
                }
            })
        ]
    });
    const o = g.default.div.attrs({
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
        p = g.default.div(j || (j = m`
  font-size: 28px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.9);
`)),
        q = g.default.div(k || (k = m`
  font-size: 146px;
  line-height: 146px;
  font-weight: bold;
  margin-top: 9px;
`)),
        r = g.default.img.attrs({
            src: (0, f.getAssetPath)('medal.svg')
        })(l || (l = m`
  height: 105px;
  opacity: 0.8;
`));
}), d.register('Q4e8X', function(b, c) {
    a(b.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('PjB0f');
    d('uPP4W');
    var g = d('h99Nu'),
        h = d('OH+hq');
    let i, j, k = a => a;
    var l = a => (0, e.jsxs)(m, {
        children: [
            (0, e.jsx)(n, {
                children: (0, e.jsx)(h.default, {
                    icon: 'fas fa-building',
                    title: 'Building Height',
                    value: a.buildHeight,
                    label: (0, f.plural)('block', a.buildHeight)
                })
            }),
            (0, e.jsx)('div', {
                style: {
                    width: 35
                }
            }),
            (0, e.jsx)(n, {
                children: (0, e.jsx)(h.default, {
                    icon: 'fas fa-tally',
                    title: 'Building Pieces',
                    value: a.pieceCount,
                    label: (0, f.plural)('piece', a.pieceCount)
                })
            })
        ]
    });
    const m = g.default.div.attrs({
            className: 'flex vc hc maxWidth'
        })(i || (i = k`
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
`)),
        n = g.default.div(j || (j = k`
  width: 350px;
`));
}), d.register('J0g5g', function(b, c) {
    a(b.exports, 'default', function() {
        return m;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('Vlfxs'),
        h = d('uPP4W'),
        i = d('h99Nu'),
        j = d('uu6j3');
    let k, l = class extends h.Component {
        render() {
            return (0, f.jsxs)(o, {
                children: [
                    (0, f.jsx)('b', {
                        children: 'Builders:'
                    }),
                    ' ',
                    (0, j.getTeamPlayerNames)(this.props.players.players.map(a => a.name))
                ]
            });
        }
    };
    l = (0, e.__decorate)([
        (0, g.inject)('players'),
        g.observer
    ], l);
    var m = n;
    const o = i.default.div(k || (k = (a => a)`
  width: 90%;
  max-width: 732px;
  font-size: 21px;
  opacity: 0.8;
  margin-top: 50px;
`));
}), d.register('oAYDw', function(b, c) {
    a(b.exports, 'default', function() {
        return n;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('ZwDmc'),
        h = d('t6qxD'),
        i = d('pa00H'),
        j = d('Qqi+e'),
        k = d('h99Nu');
    let l;
    class m extends f.Component {
        render() {
            return (0, e.jsx)(g.Container, {
                children: (0, e.jsxs)(p, {
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
    var n = o;
    const p = k.default.div.attrs({
        className: 'flex animated fadeIn'
    })(l || (l = (a => a)`
  flex: 1;
  animation-duration: 1.8s;
`));
}), d.register('Qqi+e', function(b, c) {
    a(b.exports, 'default', function() {
        return z;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('mi9lw'),
        i = d('8D3j3'),
        j = d('25lmu'),
        k = d('1MpQD'),
        l = d('axhrt'),
        m = d('Vlfxs'),
        n = d('uPP4W'),
        o = d('h99Nu'),
        p = d('uu6j3');
    let q, r, s, t, u, v, w, x = a => a,
        y = class extends n.Component {
            componentDidMount() {
                (0, k.send)(i.default.imposter.requestPeople), this.impostersWon() ? (0, k.playSound)(j.default.imposter.imposterWin, {
                    volume: 0.8
                }) : (0, k.playSound)(j.default.imposter.crewmateWin, {
                    volume: 0.6
                });
            }
            render() {
                const z = this.impostersWon(),
                    A = this.imposterNames();
                return (0, g.jsxs)(B, {
                    children: [
                        (0, g.jsxs)(C, {
                            children: [
                                z ? 'Impostors' : 'Crewmates',
                                ' Win'
                            ]
                        }),
                        (0, g.jsxs)(D, {
                            children: [
                                (0, g.jsx)(E, {
                                    style: {
                                        background: z ? '#d32f2f' : '#4caf50'
                                    }
                                }),
                                (0, g.jsx)(F, {
                                    children: (0, g.jsx)(G, {
                                        src: (0, k.getAssetPath)(z ? 'astronaut2.svg' : 'astronaut.svg')
                                    })
                                })
                            ]
                        }),
                        (0, g.jsxs)(H, {
                            children: [
                                (0, g.jsxs)('b', {
                                    children: [
                                        (0, k.plural)('Impostor', this.props.imposter.people.filter(z => z.role === l.PersonRole.imposter).length),
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
            constructor(...a) {
                super(...a), (0, e.default)(this, 'impostersWon', () => this.props.imposter.impostersLeft >= 1), (0, e.default)(this, 'imposterNames', () => (0, p.getTeamPlayerNames)(this.props.imposter.people.filter(a => a.role === l.PersonRole.imposter).map(a => a.name)));
            }
        };
    y = (0, f.__decorate)([
        (0, m.inject)('imposter'),
        m.observer
    ], y);
    var z = A;
    const B = o.default.div.attrs({
            className: 'flex flex-column vc animated fadeIn'
        })(q || (q = x`
  animation-duration: 12s;
  padding: 100px;
  padding-top: 25px;
  font-family: ${ 0 };
  text-align: center;
`), h.imposterFontName),
        C = o.default.div(r || (r = x`
  font-size: 75px;
  font-weight: 700;
`)),
        D = o.default.div(s || (s = x`
  height: 250px;
  width: 300px;
  position: relative;
  margin-top: 50px;
  margin-bottom: 75px;
`)),
        E = o.default.div.attrs({
            className: 'maxWidth maxHeight animated pulse infinite'
        })(t || (t = x`
  border-radius: 50%;
  animation-duration: 2.5s;
  filter: blur(50px);
`)),
        F = o.default.div.attrs({
            className: 'flex maxWidth hc vc'
        })(u || (u = x`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`)),
        G = o.default.img(v || (v = x`
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.4));
  height: 160px;
`)),
        H = o.default.div(w || (w = x`
  font-size: 24px;
`));
}), d.register('8Iy/8', function(c, D) {
    a(c.exports, 'default', function() {
        return A;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('pa00H'),
        h = d('h99Nu'),
        i = d('hIaqD'),
        j = d('t5mrz'),
        k = d('4ubfe'),
        l = d('E0I6J'),
        m = d('Vlfxs'),
        n = d('G602L'),
        o = d('hM8sf'),
        p = d('1MpQD'),
        q = d('25lmu'),
        r = d('1x/Uw'),
        s = d('wiooy2'),
        t = d('NewB0'),
        u = d('3b0vs');
    let v, w, x, y = a => a;
    const z = (0, m.observer)(() => {
        const {
            players: {
                finalResults: A
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
        const H = (0, n.leaderboardSorter)(A),
            I = H.length ? H[0] : null,
            J = H.filter((A, b) => b > 0);
        return (0, e.jsxs)(B, {
            children: [
                (0, e.jsx)(g.default, {}),
                (0, e.jsxs)(C, {
                    children: [
                        I ? (0, e.jsxs)('div', {
                            className: 'maxWidth vc flex-column',
                            style: {
                                display: B ? 'flex' : 'none'
                            },
                            children: [
                                (0, e.jsx)(r.ConfettiContainer, {
                                    children: (0, e.jsx)(b(s), {
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
                                (0, e.jsx)(D, {}),
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
    var A = (0, m.observer)(() => {
        const {
            players: {
                finalResults: B
            }
        } = f.useContext(o.default);
        return B ? (0, e.jsx)(z, {}) : null;
    });
    const B = h.default.div.attrs({
            className: 'flex flex-column scroll-y'
        })(v || (v = y`
  flex: 1;
  font-family: ${ 0 };
  color: ${ 0 };
  ${ 0 }
`), t.DRAW_MODE_FONT, j.default.Black, i.GRID_BACKGROUND_CSS),
        C = h.default.div.attrs({
            className: 'scroll-y flex vc flex-column'
        })(w || (w = y`
  flex: 1;
  padding: 40px 0px;
`)),
        D = h.default.div(x || (x = y`
  width: 95%;
  max-width: 1200px;
  margin: 40px 0px;
  background: ${ 0 };
  border-radius: 23%;
  flex-shrink: 0;
  height: 2px;
`), j.default.Black);
}), d.register('4ubfe', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD'),
        g = d('t5mrz');
    d('uPP4W');
    var h = d('h99Nu'),
        i = d('vvCL8');
    let j, k, l, m, n, o, p = a => a;
    var q = a => (0, e.jsxs)(r, {
        children: [
            (0, e.jsx)(s, {
                children: (0, e.jsx)(t, {})
            }),
            (0, e.jsxs)(u, {
                children: [
                    (0, e.jsx)(v, {
                        children: a.name
                    }),
                    (0, e.jsx)(w, {
                        children: (0, f.getMoney)(a.amount)
                    })
                ]
            })
        ]
    });
    const r = h.default.div.attrs({
            className: 'flex vc flex-column animated zoomInDown'
        })(j || (j = p`
  width: 90%;
  max-width: 580px;
`)),
        s = h.default.div.attrs({
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
        t = h.default.img.attrs({
            src: (0, f.getAssetPath)('hand-drawn-trophy.svg')
        })(l || (l = p`
  height: 93px;
`)),
        u = (0, h.default)(i.HandDrawnDiv).attrs({
            className: 'maxWidth flex flex-column vc medium-shadow'
        })(m || (m = p`
  padding: 30px;
  padding-top: 65px;
  background: ${ 0 };
`), g.default.White),
        v = h.default.div(n || (n = p`
  font-size: 53px;
  font-weight: bold;
`)),
        w = h.default.div(o || (o = p`
  font-size: 24px;
`));
}), d.register('E0I6J', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('1MpQD'),
        g = d('t5mrz'),
        h = d('PjB0f');
    d('uPP4W');
    var i = d('h99Nu');
    let j, k, l, m, n, o, p = a => a;
    const q = a => (0, e.jsxs)(t, {
        children: [
            (0, e.jsxs)(u, {
                children: [
                    (0, e.jsx)(v, {
                        children: (0, h.numberToRank)(a.place)
                    }),
                    (0, e.jsx)(w, {
                        children: a.name
                    })
                ]
            }),
            (0, e.jsx)(x, {
                children: (0, f.getMoney)(a.amount)
            })
        ]
    });
    var r = a => (0, e.jsx)(s, {
        children: a.people.map((a, b) => (0, e.jsx)(q, {
            name: a.name,
            amount: a.balance,
            place: b + 2
        }, `draw-leaderboard-${ a.id }`))
    });
    const s = i.default.div(j || (j = p`
  width: 90%;
  max-width: 780px;
`)),
        t = i.default.div.attrs({
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
        u = i.default.div.attrs({
            className: 'flex vc'
        })(l || (l = p`
  margin-right: 20px;
`)),
        v = i.default.div.attrs({
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
        w = i.default.div(n || (n = p`
  font-size: 21px;
  margin-left: 12px;
  font-weight: bold;
`)),
        x = i.default.div(o || (o = p`
  font-size: 18px;
`));
}), d.register('3b0vs', function(b, c) {
    a(b.exports, 'default', function() {
        return F;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('ExtIT'),
        h = d('cR5QE'),
        i = d('gSUVO'),
        j = d('GFgjD'),
        k = d('t5mrz'),
        l = d('0iTfX'),
        m = d('hM8sf'),
        n = d('q721a'),
        o = d('PjB0f'),
        p = d('Vlfxs'),
        q = d('uPP4W'),
        r = d('h99Nu');
    let s, t, u, v, w, x, y, z, A, B, C, D = a => a;
    const E = a => {
        const [F, G] = q.useState(!1), [H, I] = q.useState(!1);
        return (0, e.jsxs)(G, {
            children: [
                (0, e.jsxs)(M, {
                    children: [
                        (0, e.jsxs)('div', {
                            children: [
                                (0, e.jsx)(O, {
                                    children: a.term
                                }),
                                (0, e.jsx)(P, {
                                    children: a.name
                                })
                            ]
                        }),
                        (0, e.jsx)(N, {
                            children: a.canPublish ? (0, e.jsx)(f.default, {
                                onClick: () => {
                                    F || H || (G(!0), (0, o.request)({
                                        url: '/api/v1/fun/draw-that/add',
                                        method: 'post',
                                        data: {
                                            term: a.term,
                                            image: a.image
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
                (0, e.jsx)(Q, {
                    src: a.image
                })
            ]
        });
    };
    var F = (0, p.observer)(() => {
        const {
            draw: G
        } = q.useContext(m.default), H = (0, o.getUser)(), I = !(!H || (0, o.isStudent)(H) || !(0, o.isUpgraded)(H) || H.freeTrial && H.freeTrial.currentlyOnFreeTrial), J = (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(L, {
                    children: 'View drawings from your students down below!'
                }),
                (0, e.jsxs)(L, {
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
                (0, e.jsx)(L, {
                    children: 'While their name will not be shared, please get the drawer\'s permission before publishing to the gallery.'
                })
            ]
        }), K = (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(L, {
                    children: 'View drawings from your students down below!'
                }),
                (0, e.jsxs)(L, {
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
                (0, e.jsx)(L, {
                    children: 'For safety purposes, only paying subscribers can contribute art to the gallery.'
                })
            ]
        });
        return (0, e.jsxs)(h.default, {
            open: G.drawingsModalOpen,
            closable: !0,
            onCancel: () => {
                G.drawingsModalOpen = !1;
            },
            style: {
                top: 20,
                fontFamily: l.default.fontFamilyName,
                color: k.default.Black
            },
            footer: null,
            children: [
                (0, e.jsxs)(H, {
                    children: [
                        (0, e.jsx)(I, {}),
                        (0, e.jsx)(J, {
                            children: 'Drawings'
                        }),
                        (0, e.jsx)(K, {
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
                G.drawingHistory.map((G, H) => (0, e.jsx)(E, {
                    image: G.image,
                    name: G.name,
                    term: G.term,
                    canPublish: I
                }, `drawing-history-${ G.index }`))
            ]
        });
    });
    const G = r.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(s || (s = D`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        H = r.default.div.attrs({
            className: 'maxWidth flex flex-column vc'
        })(t || (t = D`
  background: #fff3e0;
  padding: 20px;
  border-radius: 5px;
`)),
        I = r.default.img.attrs({
            src: '/client/img/drawThat/art-gallery.svg'
        })(u || (u = D`
  height: 65px;
`)),
        J = r.default.div(v || (v = D`
  font-size: 30px;
  margin-top: 6px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        K = r.default.ul(w || (w = D`
  margin-top: 4px;
  font-size: 14px;
  li {
    margin-bottom: 5px;
  }
`)),
        L = r.default.li(x || (x = D`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`)),
        M = r.default.div.attrs({
            className: 'maxWidth flex vc'
        })(y || (y = D`
  justify-content: space-between;
  margin-bottom: 10px;
`)),
        N = r.default.div(z || (z = D`
  margin-left: 15px;
`)),
        O = r.default.div(A || (A = D`
  font-size: 22px;
  font-weight: ${ 0 };
`), i.FontWeights.Bold),
        P = r.default.div(B || (B = D`
  font-size: 14px;
  opacity: 0.7;
`)),
        Q = r.default.img.attrs({
            className: 'maxWidth'
        })(C || (C = D`
  border: 2px solid #e8e8e8;
  border-radius: 4px;
`));
}), d.register('E+lpI', function(b, c) {
    a(b.exports, 'default', function() {
        return w;
    });
    var e = d('8kSQZ'),
        f = d('lmfrI'),
        g = d('gSUVO'),
        h = d('25lmu'),
        i = d('hM8sf'),
        j = d('PjB0f'),
        k = d('b9Bct'),
        l = d('Vlfxs'),
        m = d('uPP4W'),
        n = d('h99Nu'),
        o = d('pa00H'),
        p = d('5moSQ'),
        q = d('x+xVP'),
        r = d('HfTa2');
    let s, t, u, v = a => a;
    var w = (0, l.observer)(() => {
        const {
            players: {
                players: x
            }
        } = m.useContext(i.default);
        m.useEffect(() => {
            h.default.pardy.countdown.stop(), h.default.pardy.music.fade(h.default.pardy.music.volume(), 0, 400), h.default.pardy.finaleMusic.fade(h.default.pardy.finaleMusic.volume(), 0, 400);
        }, []);
        const [y, z] = (0, j.useBoolean)(!(x.length >= 2));
        return (0, e.jsx)(x, {
            children: (0, e.jsx)(p.default, {
                children: (0, e.jsxs)(y, {
                    children: [
                        (0, e.jsx)(o.default, {}),
                        (0, e.jsx)(z, {
                            children: y ? (0, e.jsx)(q.default, {}) : (0, e.jsx)(r.default, {
                                setToLeaderboardScreen: z
                            })
                        })
                    ]
                })
            })
        });
    });
    const x = n.default.div.attrs({
            className: 'flex'
        })(s || (s = v`
  flex: 1;
  background: ${ 0 };
  font-family: 'Londrina Solid', cursive;
  font-weight: ${ 0 };
  overflow: hidden;
`), f.default.Black, g.FontWeights.Light),
        y = (0, n.default)(k.motion.div).attrs({
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
        z = n.default.div(u || (u = v`
  flex: 1;
  overflow: hidden;
`));
}), d.register('x+xVP', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('8kSQZ');
    d('uPP4W');
    var f = d('DIshc'),
        g = d('h99Nu'),
        h = d('b9Bct');
    let i;
    var j = () => (0, e.jsx)(k, {
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
    const k = (0, g.default)(h.motion.div).attrs({
        className: 'maxAll'
    })(i || (i = (a => a)``));
}), d.register('HfTa2', function(c, G) {
    a(c.exports, 'default', function() {
        return D;
    });
    var e = d('8kSQZ'),
        f = d('ExtIT'),
        g = d('gSUVO'),
        h = d('uPP4W'),
        i = d('h99Nu'),
        j = d('Atmdn'),
        k = d('1MpQD'),
        l = d('wiooy2'),
        m = d('1x/Uw'),
        n = d('b9Bct'),
        o = d('Vlfxs'),
        p = d('hM8sf'),
        q = d('G602L'),
        r = d('4/f+U'),
        s = d('25lmu'),
        t = d('fIPuX'),
        u = d('fdhqz');
    let v, w, x, y, z, A, B = a => a;
    const C = a => (0, e.jsxs)(G, {
        style: {
            background: a.isWinner ? '#005005' : 'rgba(0, 0, 0, 0.6)'
        },
        className: a.isWinner ? 'animated tada' : '',
        children: [
            (0, e.jsxs)(H, {
                children: [
                    'Contestant ',
                    a.contestantType
                ]
            }),
            (0, e.jsx)(I, {
                children: a.contestantName
            }),
            (0, e.jsx)(f.default, {
                style: {
                    margin: '12px 0px'
                }
            }),
            (0, e.jsx)(J, {
                children: (0, e.jsx)(b(j), {
                    start: 0,
                    end: a.balance,
                    formattingFn: k.getMoney,
                    duration: 6.5,
                    delay: 1.8,
                    onEnd: a.handleCountEnd
                })
            })
        ]
    });
    var D = (0, o.observer)(a => {
        const {
            players: {
                players: E
            }
        } = h.useContext(p.default), [F, G] = h.useState(!1), H = h.useMemo(() => {
            const I = (0, q.leaderboardSorter)(E),
                J = [];
            return I[0] && J.push(I[0]), I[1] && J.push(I[1]), (0, r.shuffle)(J);
        }, []);
        h.useEffect(() => {
            H && 2 === H.length || a.setToLeaderboardScreen();
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
                (0, e.jsx)(E, {
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
                        F && a.setToLeaderboardScreen();
                    },
                    children: (0, e.jsx)(u.default, {
                        children: (0, e.jsxs)(F, {
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
                    children: (0, e.jsx)(b(l), {
                        active: F,
                        config: m.confettiConfig
                    })
                })
            ]
        });
    });
    const E = (0, i.default)(n.motion.div).attrs({
            className: 'maxAll'
        })(v || (v = B``)),
        F = i.default.div.attrs({
            className: 'flex-center maxAll'
        })(w || (w = B`
  padding: 30px;
`)),
        G = i.default.div.attrs({
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
        H = i.default.div(y || (y = B`
  font-style: italic;
  text-transform: uppercase;
  font-size: 18px;
`)),
        I = i.default.div(z || (z = B`
  font-size: 32px;
  font-weight: ${ 0 };
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`), g.FontWeights.Normal),
        J = i.default.div(A || (A = B`
  font-size: 32px;
`));
}), d.register('fdhqz', function(b, c) {
    a(b.exports, 'default', function() {
        return m;
    });
    var e = d('8kSQZ'),
        f = d('uPP4W'),
        g = d('h99Nu'),
        h = d('U8PGt');
    let i, j, k, l = a => a;
    var m = a => {
        const n = f.useRef(null),
            [o, p] = (0, h.default)(n),
            q = Math.min(o / 800, p / 450);
        let r = 450 * q;
        isNaN(r) && (r = 0);
        let s = 800 * q;
        return isNaN(s) && (s = 0), (0, e.jsx)(n, {
            ref: n,
            children: (0, e.jsx)(o, {
                style: {
                    height: r,
                    width: s
                },
                children: (0, e.jsx)(p, {
                    style: {
                        transform: `scale(${ q })`
                    },
                    children: a.children
                })
            })
        });
    };
    const n = g.default.div(i || (i = l`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`)),
        o = g.default.div(j || (j = l``)),
        p = g.default.div(k || (k = l`
  height: ${ 0 }px;
  width: ${ 0 }px;
  transform-origin: top left;
  display: flex;
  justify-content: center;
  align-items: center;
`), 450, 800);
}), d.register('k9Cyd', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('8kSQZ'),
        f = d('fgVTE0'),
        g = d('lmfrI'),
        h = d('hM8sf'),
        i = d('uM80Q'),
        j = d('PjB0f'),
        k = d('Vlfxs'),
        l = d('uPP4W'),
        m = d('h99Nu'),
        n = d('1MpQD'),
        o = d('jrO6D'),
        p = d('EWau1');
    let q;
    var r = (0, k.observer)(() => {
        const {
            engine: s,
            gameValues: t,
            metadata: u
        } = l.useContext(h.default), v = (0, n.getQueryVariable)('id'), [w, x] = (0, j.useBoolean)(!1);
        return l.useEffect(() => {
            (0, p.default)(v, {
                onSuccess: () => {
                    x(), (0, o.default)();
                },
                onError: s => {
                    s && s.message && s.message.text ? t.roomIntentErrorMessage = s.message.text : t.roomIntentErrorMessage = 'There was an error. Please refresh and try again.';
                }
            });
        }, []), l.useEffect(() => {
            s.joinedRoom && w && u.hasReceivedHostStaticState && (t.currentRoute = i.GameStatus.join);
        }, [
            w,
            s.joinedRoom,
            u.hasReceivedHostStaticState
        ]), (0, e.jsx)(s, {
            children: (0, e.jsx)(f.default, {
                style: {
                    color: g.default.White
                },
                size: 84
            }, 'setup-loader')
        });
    });
    const s = m.default.div.attrs({
        className: 'maxAll flex-center flex-column'
    })(q || (q = (a => a)`
  color: ${ 0 };
`), g.default.White);
}), d.register('fgVTE0', function(b, c) {
    a(b.exports, 'default', function() {
        return r;
    });
    var e = d('b5p1k12'),
        f = d('lWzbN'),
        g = d('uPP4W');
    d('uj3CK');
    var h = d('LS7Qv'),
        i = d('knVNm'),
        j = d('l/I4j'),
        k = 44;

    function l(a) {
        var m, n, o;
        return m = a, n = 0, o = 1, a = (Math.min(Math.max(n, m), o) - n) / (o - n), a = (a -= 1) * a * a + 1;
    }
    var m = g.forwardRef(function(a, b) {
            var n, o = a.classes,
                p = a.className,
                q = a.color,
                r = void 0 === q ? 'primary' : q,
                s = a.disableShrink,
                t = void 0 !== s && s,
                u = a.size,
                v = void 0 === u ? 40 : u,
                w = a.style,
                x = a.thickness,
                y = void 0 === x ? 3.6 : x,
                z = a.value,
                A = void 0 === z ? 0 : z,
                B = a.variant,
                C = void 0 === B ? 'indeterminate' : B,
                D = (0, f.default)(a, [
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
                E = {},
                F = {},
                G = {};
            if ('determinate' === C || 'static' === C) {
                var H = 2 * Math.PI * ((k - y) / 2);
                E.strokeDasharray = H.toFixed(3), G['aria-valuenow'] = Math.round(A), 'static' === C ? (E.strokeDashoffset = ''.concat(((100 - A) / 100 * H).toFixed(3), 'px'), F.transform = 'rotate(-90deg)') : (E.strokeDashoffset = ''.concat((n = (100 - A) / 100, n * n * H).toFixed(3), 'px'), F.transform = 'rotate('.concat((270 * l(A / 70)).toFixed(3), 'deg)'));
            }
            return g.createElement('div', (0, e.default)({
                className: (0, h.default)(o.root, p, 'inherit' !== r && o['color'.concat((0, j.default)(r))], {
                    indeterminate: o.indeterminate,
                    static: o.static
                } [C]),
                style: (0, e.default)({
                    width: v,
                    height: v
                }, F, w),
                ref: b,
                role: 'progressbar'
            }, G, D), g.createElement('svg', {
                className: o.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(k, ' ').concat(k)
            }, g.createElement('circle', {
                className: (0, h.default)(o.circle, t && o.circleDisableShrink, {
                    indeterminate: o.circleIndeterminate,
                    static: o.circleStatic
                } [C]),
                style: E,
                cx: k,
                cy: k,
                r: (k - y) / 2,
                fill: 'none',
                strokeWidth: y
            })));
        }),
        n = (0, i.default)(function(a) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: a.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: a.palette.primary.main
                },
                colorSecondary: {
                    color: a.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: a.transitions.create('stroke-dashoffset')
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
        })(m);
}), d.register('uM80Q', function(b, c) {
    let e;
    var f;
    let g;
    var h;
    let i;
    var j;
    let k;
    var l;
    let m;
    var n;
    a(b.exports, 'GameStatus', function() {
        return i;
    }), (f = e || (e = {})).multipleChoice = 'mc', f.textInput = 'text', (h = g || (g = {})).public = 'public', h.private = 'private', (j = i || (i = {})).setup = 'setup', j.join = 'join', j.teams = 'teams', j.gameplay = 'gameplay', j.results = 'results', (l = k || (k = {})).classic = 'classic', l.team = 'team', (n = m || (m = {})).time = 'time', n.race = 'race', n.allIn = 'allIn';
}), d.register('jrO6D', function(b, c) {
    a(b.exports, 'default', function() {
        return f;
    });
    var e = d('4T5hN');
    var f = () => {
        (0, e.default)().then().catch(a => !1);
    };
}), d.register('4T5hN', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('1MpQD'),
        f = d('JNqOw'),
        g = d('wU1vy'),
        h = d('PjB0f');
    var i = async () => {
        try {
            const j = await (0, f.default)();
            await (0, g.default)({
                createOptions: {
                    serverUrl: j.serverUrl,
                    roomType: 'LiveGame',
                    options: {
                        intentId: (0, e.getQueryVariable)('id'),
                        authToken: (0, h.isLoggedIn)() ? (0, h.getUser)().token : ''
                    }
                }
            });
        } catch (a) {
            console.log({
                errorCreatingGame: a
            });
        }
    };
}), d.register('JNqOw', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('6G/rR'),
        f = d('PjB0f'),
        g = d('PDLD/2');
    var h = async () => {
        try {
            e.default.engine.findingServerForGame = !0;
            let i = '';
            try {
                const j = await new Promise((i, j) => {
                    (0, f.request)({
                        url: '/api/matchmaker/find-server-to-host-game',
                        data: {
                            source: g.ExperienceSource.original
                        },
                        success: j => {
                            i(j);
                        },
                        error: i => {
                            j(i);
                        }
                    });
                });
                if (!j || !j.url)
                    throw 'No server response';
                i = j.url;
            } catch (i) {
                throw e.default.engine.errorFindingServerForGame = !0, e.default.engine.findingServerForGame = !1, i;
            }
            if (e.default.engine.findingServerForGame = !1, !i)
                throw new Error('No Server URL');
            return {
                serverUrl: i
            };
        } catch (a) {
            throw a;
        }
    };
}), d.register('wU1vy', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('+KLzG'),
        f = d('6G/rR'),
        g = d('oYKUg');
    var h = a => {
        const {
            joinOptions: i,
            createOptions: j
        } = k;
        if (!i && !j)
            return;
        const l = () => {
            f.default.engine.attemptingToConnect = !1, f.default.engine.hasConnected = !1, f.default.engine.connected = !1, f.default.engine.connectionError = !1, f.default.engine.joinedRoom = !1, f.default.engine.attemptingToJoinRoom = !1, f.default.engine.errorJoiningRoom = !1, f.default.engine.roomError = null;
        };
        l(), f.default.engine.attemptingToConnect = !0;
        const m = new(0, e.Client)(i ? i.serverUrl : j.serverUrl, {
                transports: ['websocket'],
                clientIdSuffix: '-host'
            }),
            n = m.onConnectError.add(i => {
                console.log({
                    connectionError: i
                }), k.onConnectError && k.onConnectError(i), k.disposeOnError && l(), f.default.engine.connectionError = !0, f.default.engine.attemptingToConnect = !1;
            });
        m.onConnect.add(() => {
            n(), f.default.engine.client = m, f.default.engine.connected = !0, f.default.engine.hasConnected = !0, f.default.engine.attemptingToConnect = !1, f.default.engine.attemptingToJoinRoom = !0, m.onConnectError.add(() => {
                f.default.engine.connectionError = !0;
            }), m.onConnect.add(() => {
                f.default.engine.connected = !0, f.default.engine.connectionError = !1, f.default.engine.attemptingToConnect = !1, f.default.engine.attemptingToJoinRoom = !0;
            }), m.onReconnect.add(() => {
                f.default.engine.connected = !0, f.default.engine.connectionError = !1, f.default.engine.attemptingToConnect = !1, f.default.engine.attemptingToJoinRoom = !0;
            }), f.default.engine.attemptingToJoinRoom = !0;
            const o = i ? m.joinRoom(i.roomId, i.options) : m.createRoom(j.roomType, j.options);
            o.onJoinAttempt.add(() => {
                f.default.engine.attemptingToJoinRoom = !0;
            }), o.onJoinError.add(i => {
                console.log({
                    roomJoinError: i
                }), k.onRoomJoinError && k.onRoomJoinError(i), f.default.engine.roomError = i, f.default.engine.errorJoiningRoom = !0, f.default.engine.attemptingToJoinRoom = !1;
            });
            const p = o.onJoinError.add(() => {
                k.disposeOnError && l();
            });
            o.onJoin.add(() => {
                (0, g.default)(o), k.onRoomJoin && k.onRoomJoin();
            }, !0), o.onJoin.add(() => {
                p(), f.default.engine.joinedRoom = !0, f.default.engine.attemptingToJoinRoom = !1, f.default.engine.game || (f.default.engine.game = o);
            }), o.onLeave.add(() => {
                f.default.engine.joinedRoom = !1;
            });
        }, !0), m.onDisconnect.add(() => {
            f.default.engine.attemptingToConnect = !0, f.default.engine.connected = !1, k.onDisconnect && k.onDisconnect();
        });
    };
}), d.register('oYKUg', function(b, c) {
    a(b.exports, 'default', function() {
        return q;
    });
    var e = d('cR5QE'),
        f = d('25lmu'),
        g = d('1MpQD'),
        h = d('6G/rR'),
        i = d('CKG/N'),
        j = d('LcHGk'),
        k = d('OqHZg'),
        l = d('c9FPT'),
        m = d('ALO6J'),
        n = d('D+JEc'),
        o = d('PjB0f');
    const p = a => {
        f.default[a] && Object.keys(f.default[a]).forEach(b => {
            f.default[a][b] && f.default[a][b].load && f.default[a][b].load();
        });
    };
    var q = a => {
        const r = m.default.map(a => a());
        a.onMessage.add((c, d) => {
            const s = {
                action: c,
                payload: d
            };
            if (s.action !== i.default.stateUpdate)
                if (s.action !== i.default.viewableGameCode) {
                    if (s.action === i.default.hostStaticState) {
                        if (h.default.metadata.hasReceivedHostStaticState)
                            return;
                        return Object.keys(d.options || {}).forEach(a => {
                            h.default.gameOptions[a] = d.options[a];
                        }), h.default.gameValues.availableThemes.replace(d.themes), h.default.gameValues.gameCode = d.gameCode, Object.keys(f.default).forEach(a => {
                            f.default[a] && f.default[a].load && f.default[a].load();
                        }), (0, g.inImposterMode)() && p('imposter'), (0, g.inThanosMode)() && p('thanos'), (0, g.inLavaMode)() && p('lava'), (0, g.inBossBattleMode)() && p('bossBattle'), (0, g.inDrawMode)() && (p('draw'), (0, o.loadFont)('https://fonts.googleapis.com/css2?family=Pangolin&display=swap')), (0, g.inPardyMode)() && ((0, o.loadFont)('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap'), p('pardy')), (0, n.default)(a), void(h.default.metadata.hasReceivedHostStaticState = !0);
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
                                                        return h.default.gameValues.defendingHomebaseResults = d, void(0, g.endGame)(!0);
                                                    if (s.action !== i.default.playAgainIntentId)
                                                        if (s.action === i.default.errorModal && e.default.error({
                                                                title: d.title,
                                                                content: d.content
                                                            }), s.action !== i.default.setReportId) {
                                                            if (s.action !== i.default.lavaResults)
                                                                return s.action === i.default.imposter.quickStats ? (h.default.imposter.impostersLeft = d.impostersLeft, h.default.imposter.meetingsLeft = d.meetingsLeft, void(h.default.imposter.investigationsLeft = d.investigationsLeft)) : void(s.action !== i.default.imposter.people ? s.action !== i.default.imposter.meetingResults ? s.action !== i.default.imposter.callAMeeting ? s.action !== i.default.imposter.voteCount ? s.action !== i.default.draw.line ? s.action !== i.default.draw.feedItem ? s.action !== i.default.draw.personCount ? s.action !== i.default.draw.pointAdditions || h.default.draw.pointAdditions.replace(d) : h.default.draw.personCount = d : h.default.draw.latestFeedItem = d : h.default.draw.latestLine = d : h.default.imposter.votes = d : (0, l.default)() : h.default.imposter.meetingResults = d : h.default.imposter.people.replace(d));
                                                            h.default.entities.lava = d;
                                                        } else
                                                            h.default.gameValues.reportId = d.reportId;
                                                    else
                                                        window.location.href = `/host?id=${ d }`;
                                                } else
                                                    h.default.entities.defendingHomebase.replace(d);
                    else
                        h.default.gameValues.thanosValues = d;
                    else
                        h.default.gameValues.clapCount = d;
                    else
                        'final' === d.key ? h.default.players.finalResults.replace(d.items) : h.default.players.teams.replace(d.items);
                    else
                        'final' === d.key ? h.default.players.finalResults.replace(d.items) : h.default.players.players.replace(d.items);
                    else {
                        if (!d.audioFile || !d.background)
                            return;
                        (0, g.startSpecialSong)(d.audioFile, d.background);
                    } else
                        h.default.stats.playerStats.push(s.payload);
                    else
                        (0, g.addActivityItem)(s.payload);
                } else
                    h.default.gameValues.gameCode = d;
            else
                (0, j.default)(d.type, d.value, r);
        }), (0, k.default)(a);
    };
}), d.register('CKG/N', function(b, c) {
    a(b.exports, 'default', function() {
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
}), d.register('LcHGk', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('6G/rR'),
        f = d('2wdF+');
    var g = (a, b, c) => {
        if (a === f.default.gameStatus)
            return void(e.default.gameValues.currentRoute !== b && (e.default.gameValues.currentRoute = b));
        const h = c.find(b => b.key === a);
        h && h.listener.applyPatches(b);
    };
}), d.register('2wdF+', function(b, c) {
    a(b.exports, 'default', function() {
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
}), d.register('OqHZg', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('1MpQD'),
        f = d('6G/rR'),
        g = d('PDLD/2'),
        h = d('8D3j3');
    const i = a => {
        const j = f.default.gameValues.currentRoute;
        if (j === g.GameStatus.join)
            return a.send(h.default.requestPlayerLeaderboard), void setTimeout(() => i(a), 1000);
        if (j === g.GameStatus.teams)
            return a.send(h.default.requestTeamLeaderboard), void setTimeout(() => i(a), 4700);
        if (j === g.GameStatus.gameplay) {
            if ((0, e.inLavaMode)())
                return;
            return (0, e.inImposterMode)() ? a.send(h.default.imposter.requestPeople) : (0, e.inZombiesVsHumansMode)() ? a.send(h.default.requestDefendingHomebase) : (0, e.inTeamMode)() ? a.send(h.default.requestTeamLeaderboard) : a.send(h.default.requestPlayerLeaderboard), void setTimeout(() => i(a), 2500);
        }
        j !== g.GameStatus.results && setTimeout(() => i(a), 1000);
    };
    var j = k;
}), d.register('ALO6J', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    }), d('hJM9U');
    var e = d('B/hPl'),
        f = d('Peu7A');
    d('qQVI6');
    var g = d('zw+cI');
    var h = [
        e.default,
        f.default,
        g.default
    ];
}), d.register('hJM9U', function(b, c) {
    a(b.exports, 'Round', function() {
        return d('B/hPl').default;
    }), a(b.exports, 'Status', function() {
        return d('Peu7A').default;
    });
    d('B/hPl'), d('Peu7A');
}), d.register('B/hPl', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('6G/rR'),
        f = d('yaVwU'),
        g = d('2wdF+');
    const h = [
        'secondsLeft',
        'term',
        'drawer',
        'drawingBase64',
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
}), d.register('Peu7A', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('6G/rR'),
        f = d('yaVwU'),
        g = d('2wdF+');
    var h = () => {
        const i = new(0, f.default)();
        return i.onPropChange('value', i => {
            e.default.draw.status = i;
        }), {
            key: g.default.draw.status,
            listener: i
        };
    };
}), d.register('qQVI6', function(b, c) {
    a(b.exports, 'PardyState', function() {
        return d('zw+cI').default;
    });
    d('zw+cI');
}), d.register('zw+cI', function(b, c) {
    a(b.exports, 'default', function() {
        return i;
    });
    var e = d('6G/rR'),
        f = d('yaVwU'),
        g = d('2wdF+');
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
    var i = () => {
        const j = new(0, f.default)();
        return h.forEach(b => {
            j.onPropChange(b, j => {
                'powers' === b ? e.default.pardy.powers.replace(j) : e.default.pardy[b] = j;
            });
        }), {
            key: g.default.pardy.state,
            listener: j
        };
    };
}), d.register('D+JEc', function(b, c) {
    a(b.exports, 'default', function() {
        return j;
    });
    var e = d('1MpQD'),
        f = d('UnUp5'),
        g = d('6G/rR'),
        h = d('8D3j3'),
        i = d('PDLD/2');
    var j = a => {
        (0, f.reaction)(() => g.default.gameValues.currentRoute, b => {
            i.GameStatus.gameplay, a.send(h.default.newGameStatus, b);
        }), (0, e.inImposterMode)() && (0, f.reaction)(() => g.default.imposter.status, b => a.send(h.default.imposter.status, b)), (0, e.inPardyMode)() && ((0, f.reaction)(() => g.default.pardy.currentRound, b => {
            a.send(h.default.pardy.setNewRoundDetails, b);
        }), (0, f.reaction)(() => g.default.pardy.screen, b => {
            a.send(h.default.pardy.setScreen, b);
        }), (0, f.reaction)(() => g.default.pardy.questionScreen, b => {
            a.send(h.default.pardy.setQuestionScreen, b);
        }), (0, f.reaction)(() => g.default.pardy.questionStatus, b => {
            a.send(h.default.pardy.setQuestionStatus, b);
        }));
    };
}), d.register('EWau1', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('PjB0f'),
        f = d('6G/rR');
    var g = (a, b) => {
        (0, e.request)({
            url: `/api/matchmaker/intent/live-game/summary/${ a }`,
            success: a => {
                f.default.kit.questions = a.questions, f.default.metadata.currentGameIsUsingGroups = !!a.usingGroups, b.onSuccess && b.onSuccess();
            },
            error: a => {
                b.onError && b.onError(a);
            }
        });
    };
}), d.register('JrozK', function(b, c) {
    a(b.exports, 'default', function() {
        return t;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('8D3j3'),
        i = d('1MpQD'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('h99Nu'),
        m = d('FTZlY'),
        n = d('ULiSR'),
        o = d('V6pm3'),
        p = d('38Nsi');
    let q;
    const r = l.default.div(q || (q = (a => a)`
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
            const t = !(0, i.inBossBattleMode)();
            return this.props.ui.showingBossPreScreen ? (0, g.jsx)(m.default, {}) : this.props.ui.showingHumansVsZombiesPreScreen ? (0, g.jsx)(n.default, {}) : (0, g.jsxs)(r, {
                children: [
                    (0, g.jsx)(o.default, {
                        reshuffle: t ? this.makeTeams : null
                    }),
                    (0, g.jsx)(p.default, {})
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'makeBossBattleTeams', () => {
                this.props.engine.game.send(h.default.makeTeams, {
                    boss: this.props.gameValues.bossId
                });
            }), (0, e.default)(this, 'makeTeams', a => {
                this.props.engine.game.send(h.default.makeTeams);
            });
        }
    };
    s = (0, f.__decorate)([
        (0, j.inject)('engine', 'gameOptions', 'gameValues', 'ui'),
        j.observer
    ], s);
    var t = u;
}), d.register('FTZlY', function(c, e) {
    a(c.exports, 'default', function() {
        return v;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('1x/Uw'),
        i = d('25lmu'),
        j = d('Vlfxs'),
        k = d('uPP4W'),
        l = d('wiooy2'),
        m = d('h99Nu'),
        n = d('PDLD/2'),
        o = d('1MpQD'),
        p = d('PjB0f');
    let q, r, s, t = a => a;
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
            return (0, g.jsx)(y, {
                children: (0, g.jsxs)(z, {
                    children: [
                        (0, g.jsx)(h.ConfettiContainer, {
                            children: (0, g.jsx)(b(l), {
                                config: h.confettiConfig,
                                active: this.state.confettiActive
                            })
                        }),
                        (0, g.jsx)(b(l), {
                            config: h.confettiConfig,
                            active: this.state.confettiActive
                        }),
                        this.state.content
                    ]
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
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
            ]), (0, e.default)(this, 'setStage', a => {
                const v = this.getStages(),
                    w = v[a];
                if (!w)
                    return this.props.gameValues.currentRoute = n.GameStatus.gameplay, void(this.props.ui.showingBossPreScreen = !1);
                a + 1 === v.length && this.setState({
                    confettiActive: !0
                }), this.setState({
                    content: w.content
                }), setTimeout(() => this.setStage(a + 1), w.delay);
            }), (0, e.default)(this, 'startGame', () => {
                this.setStage(0);
            }), (0, e.default)(this, 'getBossName', () => {
                let v = 'The Boss';
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const w = this.props.players.teams.find(v => 'The Boss' === v.id);
                    w && w.players[0] && (v = w.players[0]);
                }
                return v;
            });
        }
    };
    u = (0, f.__decorate)([
        (0, j.inject)('players', 'gameValues', 'ui'),
        j.observer
    ], u);
    var v = w;
    const x = (0, m.keyframes)(q || (q = t`
  from {
    transform: scale(0.7);
  }
  to {
    transform: scale(1);
  }
`)),
        y = m.default.div(r || (r = t`
  background: #b53d00;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`)),
        z = m.default.div(s || (s = t`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 65px;
  font-family: ${ 0 };
  text-align: center;
  animation: ${ 0 } 12s ease-in-out;
`), '\'Bowlby One SC\', cursive', x);
}), d.register('ULiSR', function(b, c) {
    a(b.exports, 'default', function() {
        return s;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('25lmu'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('3Ntzy'),
        l = d('h99Nu'),
        m = d('PDLD/2'),
        n = d('PjB0f');
    let o, p, q = a => a;
    let r = class extends j.Component {
        componentDidMount() {
            (0, n.loadFont)('https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap'), h.default.engagingSuspense.unload(), h.default.engagingSuspense.load(), h.default.engagingSuspense.on('load', () => {
                this.startGame(), h.default.engagingSuspense.play();
            }), h.default.engagingSuspense.on('loaderror', this.startGame), h.default.engagingSuspense.on('playerror', this.startGame);
        }
        render() {
            return (0, g.jsx)(u, {
                children: (0, g.jsx)(v, {
                    children: this.state.content
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
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
            ]), (0, e.default)(this, 'setStage', a => {
                const s = this.getStages()[a];
                if (!s)
                    return this.props.gameValues.currentRoute = m.GameStatus.gameplay, void(this.props.ui.showingHumansVsZombiesPreScreen = !1);
                this.setState({
                    content: s.content
                }), setTimeout(() => this.setStage(a + 1), s.delay);
            }), (0, e.default)(this, 'startGame', () => {
                this.setStage(0);
            });
        }
    };
    r = (0, f.__decorate)([
        (0, i.inject)('players', 'gameValues', 'ui'),
        i.observer
    ], r);
    var s = t;
    const u = l.default.div(o || (o = q`
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
        v = l.default.div(p || (p = q`
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
}), d.register('V6pm3', function(b, c) {
    a(b.exports, 'HEADER_HEIGHT', function() {
        return r;
    }), a(b.exports, 'default', function() {
        return w;
    });
    var e = d('8kSQZ'),
        f = d('nCiau'),
        g = d('IsmrL'),
        h = d('1MpQD'),
        i = d('0iTfX'),
        j = d('mJDQE'),
        k = d('uPP4W'),
        l = d('h99Nu'),
        m = d('i4GoV');
    let n, o, p, q = a => a;
    const r = '83px',
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
`), r, j.default.basic),
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
    var w = x;
}), d.register('38Nsi', function(b, c) {
    a(b.exports, 'default', function() {
        return p;
    });
    var e = d('6gioo'),
        f = d('8kSQZ'),
        g = d('iHElh'),
        h = d('Vlfxs'),
        i = d('uPP4W'),
        j = d('h99Nu'),
        k = d('V6pm3'),
        l = d('/Zg9e');
    let m;
    const n = j.default.div(m || (m = (a => a)`
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
                children: this.props.players.teams && this.props.players.teams.length ? this.props.players.teams.map(a => (0, f.jsx)(l.default, {
                    team: a
                }, a.id)) : (0, f.jsx)(g.default, {
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
    var p = q;
}), d.register('/Zg9e', function(b, c) {
    a(b.exports, 'default', function() {
        return x;
    });
    var e = d('8kSQZ'),
        f = d('ExtIT'),
        g = d('3Ntzy'),
        h = d('1MpQD'),
        i = d('t5mrz'),
        j = d('0iTfX'),
        k = d('mJDQE'),
        l = d('uPP4W'),
        m = d('h99Nu');
    let n, o, p, q, r = a => a;
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
`), a => a.background),
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
                team: x
            } = this.props;
            return (0, e.jsxs)(s, {
                children: [
                    (0, e.jsxs)(u, {
                        children: [
                            (0, e.jsx)(t, {
                                background: (0, h.getTeamColor)(x.id),
                                children: x.icon && (0, e.jsx)('i', {
                                    className: x.icon,
                                    style: {
                                        color: x.color.text
                                    }
                                })
                            }),
                            (0, e.jsx)(g.default, {
                                text: x.id
                            })
                        ]
                    }),
                    (0, e.jsx)(f.default, {
                        style: {
                            marginTop: 7,
                            marginBottom: 7
                        }
                    }),
                    x.players.map(b => (0, e.jsx)(v, {
                        children: b
                    }, x.balance + b))
                ]
            });
        }
    }
    var x = y;
}), d.register('AU4G3', function(b, c) {
    a(b.exports, 'default', function() {
        return w;
    });
    var e = d('UM8oI'),
        f = d('6gioo'),
        g = d('8kSQZ'),
        h = d('j3/1r'),
        i = d('IsmrL'),
        j = d('ExtIT'),
        k = d('KV+OV'),
        l = d('cR5QE'),
        m = d('iHElh'),
        n = d('Vlfxs'),
        o = d('uPP4W'),
        p = d('jOlHj'),
        q = d('t5mrz'),
        r = d('0iTfX'),
        s = d('PDLD/2'),
        t = d('q721a');
    const u = 'https://status.gimkit.com';
    let v = class extends o.Component {
        render() {
            const {
                engine: w,
                gameValues: x
            } = this.props, y = ((w, x) => !((!x.roomIntentErrorMessage || x.currentRoute !== s.GameStatus.setup) && !w.errorFindingServerForGame && (x.currentRoute === s.GameStatus.results || !w.connectionError && (x.currentRoute === s.GameStatus.setup || !w.game || !w.errorJoiningRoom && w.joinedRoom))))(w, x);
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
        constructor(...a) {
            super(...a), (0, e.default)(this, 'getLoading', () => {
                const {
                    engine: w,
                    gameValues: x
                } = this.props;
                return (!x.roomIntentErrorMessage || x.currentRoute !== s.GameStatus.setup) && (!w.errorJoiningRoom && (!w.errorFindingServerForGame && !(!w.game && w.connectionError)));
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
    var w = x;
}), d.register('j3/1r', function(b, c) {
    a(b.exports, 'default', function() {
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
}), d.register('xxsym', function(b, c) {
    a(b.exports, 'default', function() {
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
}), d.register('jOlHj', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var e = a => {
        let f = 'Error joining game',
            g = '';
        return a && a.includes && a.includes('No data found') ? (f = 'All done', g = 'You were disconnected for too long, so we closed down the game you were hosting.') : g = `Error message - ${ JSON.stringify(a) }`, {
            title: f,
            description: g
        };
    };
}), d.register('Mibyl', function(b, c) {
    a(b.exports, 'default', function() {
        return l;
    });
    var e = d('8kSQZ'),
        f = d('IsmrL'),
        g = d('q721a'),
        h = d('zAesI'),
        i = d('Vlfxs'),
        j = d('uPP4W'),
        k = d('hM8sf');
    var l = (0, i.observer)(() => {
        const {
            ui: m
        } = j.useContext(k.default);
        return m.showingClassTip ? (0, e.jsx)(h.default, {
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
}), d.register('zAesI', function(b, c) {
    a(b.exports, 'default', function() {
        return v;
    });
    var e = d('8kSQZ'),
        f = d('lmfrI'),
        g = d('gSUVO'),
        h = d('uPP4W'),
        i = d('nLioi'),
        j = d('h99Nu'),
        k = d('b9Bct');
    let l, m, n, o, p, q, r, s, t = a => a;
    const u = a => {
        const [v, w] = h.useState(!0), [x, y] = h.useState(!1);
        h.useEffect(() => {
            y(!0);
        }, []), h.useEffect(() => {
            const z = setTimeout(() => {
                g();
            }, 1000 * a.autoCloseDuration);
            return () => clearTimeout(z);
        }, []);
        const z = () => y(!1);
        return v ? (0, e.jsxs)(w, {
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
                (0, e.jsxs)(x, {
                    children: [
                        (0, e.jsx)(A, {
                            src: a.imageUrl
                        }),
                        (0, e.jsx)(y, {
                            onClick: z,
                            children: (0, e.jsx)(z, {})
                        })
                    ]
                }),
                (0, e.jsxs)(B, {
                    children: [
                        (0, e.jsx)(C, {
                            children: a.title
                        }),
                        (0, e.jsx)(D, {
                            children: a.description
                        })
                    ]
                })
            ]
        }) : null;
    };
    var v = a => (0, i.createPortal)((0, e.jsx)(u, {
        ...a
    }), document.body);
    const w = (0, j.default)(k.motion.div).attrs({
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
        x = j.default.div.attrs({
            className: 'maxWidth'
        })(m || (m = t`
  position: relative;
`)),
        y = j.default.div.attrs({
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
        z = j.default.i.attrs({
            className: 'fal fa-times'
        })(o || (o = t``)),
        A = j.default.img.attrs({
            className: 'maxWidth'
        })(p || (p = t``)),
        B = j.default.div(q || (q = t`
  padding: 20px;
`)),
        C = j.default.div(r || (r = t`
  font-size: 22px;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        D = j.default.div(s || (s = t`
  font-size: 15px;
  margin-top: 7px;
`));
}), d.register('XRX1525', function(b, c) {
    a(b.exports, 'default', function() {
        return h;
    });
    var e = d('xgR9K'),
        f = d('uPP4W'),
        g = d('qEw51');

    function h(a, b, c) {
        return function(d) {
            const {
                prefixCls: i,
                style: j
            } = k, l = f.useRef(null), [m, n] = f.useState(0), [o, p] = f.useState(0), [q, r] = (0, e.default)(!1, {
                value: k.open
            }), {
                getPrefixCls: s
            } = f.useContext(g.ConfigContext), t = s(b || 'select', i);
            return f.useEffect(() => {
                if (r(!0), 'undefined' != typeof ResizeObserver) {
                    const u = new ResizeObserver(u => {
                            const v = u[0].target;
                            n(v.offsetHeight + 8), p(v.offsetWidth);
                        }),
                        v = setInterval(() => {
                            var w;
                            const x = c ? `.${ c(t) }` : `.${ t }-dropdown`,
                                y = null === (w = l.current) || void 0 === w ? void 0 : w.querySelector(x);
                            y && (clearInterval(v), u.observe(y));
                        }, 10);
                    return () => {
                        clearInterval(v), u.disconnect();
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
                ref: l,
                style: {
                    paddingBottom: m,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: o
                }
            }, f.createElement(a, Object.assign({}, k, {
                style: Object.assign(Object.assign({}, j), {
                    margin: 0
                }),
                open: q,
                visible: q,
                getPopupContainer: () => l.current
            }))));
        };
    }
}), d.register('2TjlJ25', function(b, c) {
    a(b.exports, 'initMoveMotion', function() {
        return n;
    });
    var e = d('M5GjZ'),
        f = d('YNerC');
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
        n = (a, b) => {
            const {
                antCls: o
            } = p, q = `${ o }-${ b }`, {
                inKeyframes: r,
                outKeyframes: s
            } = m[b];
            return [
                (0, f.initMotion)(q, r, s, p.motionDurationMid),
                {
                    [`\n        ${ q }-enter,\n        ${ q }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: p.motionEaseOutCirc
                    },
                    [`${ q }-leave`]: {
                        animationTimingFunction: p.motionEaseInOutCirc
                    }
                }
            ];
        };
}), d.register('5nJMd26', function(c, p) {
    a(c.exports, 'SpaceContext', function() {
        return n;
    }, function(a) {
        return n = a;
    }), a(c.exports, 'default', function() {
        return v;
    }, function(a) {
        return v = a;
    });
    var e = d('VAIs1'),
        f = d('8N2Yw'),
        g = d('uPP4W'),
        h = d('qEw51'),
        i = d('azbx226'),
        j = d('okyqG'),
        k = d('W5kb426'),
        l = d('pGyzR'),
        m = function(a, b) {
            var n = {};
            for (var o in a)
                Object.prototype.hasOwnProperty.call(a, o) && b.indexOf(o) < 0 && (n[o] = a[o]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var p = 0;
                for (o = Object.getOwnPropertySymbols(a); p < o.length; p++)
                    b.indexOf(o[p]) < 0 && Object.prototype.propertyIsEnumerable.call(a, o[p]) && (n[o[p]] = a[o[p]]);
            }
            return n;
        };
    const n = g.createContext({
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
    const p = a => {
        const {
            getPrefixCls: q,
            space: r,
            direction: s
        } = g.useContext(h.ConfigContext), {
            size: t = (null == r ? void 0 : r.size) || 'small',
            align: u,
            className: v,
            rootClassName: w,
            children: x,
            direction: y = 'horizontal',
            prefixCls: z,
            split: A,
            style: B,
            wrap: C = !1
        } = D, E = m(D, [
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
        ]), F = (0, i.default)(), [G, H] = g.useMemo(() => (Array.isArray(t) ? t : [
            t,
            t
        ]).map(D => function(D) {
            return 'string' == typeof D ? o[D] : D || 0;
        }(D)), [t]), I = (0, f.default)(x, {
            keepEmpty: !0
        }), J = void 0 === u && 'horizontal' === y ? 'center' : u, K = q('space', z), [L, M] = (0, l.default)(K), N = b(e)(K, M, `${ K }-${ y }`, {
            [`${ K }-rtl`]: 'rtl' === s,
            [`${ K }-align-${ J }`]: J
        }, v, w), O = `${ K }-item`, P = 'rtl' === s ? 'marginLeft' : 'marginRight';
        let Q = 0;
        const R = I.map((D, b) => {
                null != D && (Q = b);
                const S = D && D.key || `${ O }-${ b }`;
                return g.createElement(k.default, {
                    className: O,
                    key: S,
                    direction: y,
                    index: b,
                    marginDirection: P,
                    split: A,
                    wrap: C
                }, D);
            }),
            S = g.useMemo(() => ({
                horizontalSize: G,
                verticalSize: H,
                latestIndex: Q,
                supportFlexGap: F
            }), [
                G,
                H,
                Q,
                F
            ]);
        if (0 === I.length)
            return null;
        const T = {};
        return C && (T.flexWrap = 'wrap', F || (T.marginBottom = -H)), F && (T.columnGap = G, T.rowGap = H), L(g.createElement('div', Object.assign({
            className: N,
            style: Object.assign(Object.assign({}, T), B)
        }, E), g.createElement(n.Provider, {
            value: S
        }, R)));
    };
    p.Compact = j.default;
    var q = r;
}), d.register('azbx226', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('uPP4W'),
        f = d('94UTy'),
        g = () => {
            const [h, i] = e.useState(!1);
            return e.useEffect(() => {
                i((0, f.detectFlexGapSupported)());
            }, []), h;
        };
}), d.register('W5kb426', function(b, c) {
    a(b.exports, 'default', function() {
        return g;
    });
    var e = d('uPP4W'),
        f = d('5nJMd26');

    function g(a) {
        let {
            className: h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = o;
        const {
            horizontalSize: p,
            verticalSize: q,
            latestIndex: r,
            supportFlexGap: s
        } = e.useContext(f.SpaceContext);
        let t = {};
        return s || ('vertical' === i ? j < r && (t = {
            marginBottom: p / (m ? 2 : 1)
        }) : t = Object.assign(Object.assign({}, j < r && {
            [k]: p / (m ? 2 : 1)
        }), n && {
            paddingBottom: q
        })), null == l ? null : e.createElement(e.Fragment, null, e.createElement('div', {
            className: h,
            style: t
        }, l), j < r && m && e.createElement('span', {
            className: `${ h }-split`,
            style: t
        }, m));
    }
}), d.register('2WDH6', function(b, c) {
    a(b.exports, 'getCloudinaryUrl', function() {
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
}), d.register('bTRJM', function(b, c) {
    a(b.exports, 'default', function() {
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
}), d.register('FV1v91', function(a, b) {
    a.exports = function(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    };
}), d.register('zlrQu', function(a, b) {});