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
d.register('a0QPr', function(e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), a(e.exports, 'default', function() {
        return _j;
    });
    var h = d('gRbUn');
    d('O0Kav');
    var i = d('35ZQC');
    var _j = () => (0, h.jsx)(h.Fragment, {
        children: (0, h.jsx)(i.default, {})
    });
}), d.register('35ZQC', function(e, f) {
    a(e.exports, 'default', function() {
        return _g;
    });
    var _g = d('wy2U6').default;
}), d.register('wy2U6', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('gRbUn'),
        h = d('6jmvl');
    d('O0Kav');
    var i = d('ZE7Lv'),
        j = d('1PEs4'),
        k = d('quE27'),
        l = d('yrLp3');
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
}), d.register('ZE7Lv', function(e, f) {
    a(e.exports, 'default', function() {
        return _v;
    });
    var g = d('IKPfB'),
        h = d('7aq3/'),
        i = d('8ATK/'),
        j = d('Ldqwz'),
        k = d('h+yoh'),
        l = d('Xy4Gw'),
        m = d('w8R4k'),
        n = d('s3+ua'),
        o = d('LaN3B'),
        p = d('ZLAyM'),
        q = d('EbsVB'),
        r = d('b4rHF'),
        s = d('NGM+H'),
        t = d('m+kUN'),
        u = d('BfG+k');
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
}), d.register('IKPfB', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
    class i {
        constructor() {
            this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !1, this.hasConnected = !1, this.connected = !1, this.connectionError = !1, this.joinedRoom = !1, this.attemptingToJoinRoom = !1, this.errorJoiningRoom = !1, this.roomError = null, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'game', void 0), (0, g.__decorate)([h.observable], i.prototype, 'client', void 0), (0, g.__decorate)([h.observable], i.prototype, 'findingServerForGame', void 0), (0, g.__decorate)([h.observable], i.prototype, 'errorFindingServerForGame', void 0), (0, g.__decorate)([h.observable], i.prototype, 'attemptingToConnect', void 0), (0, g.__decorate)([h.observable], i.prototype, 'hasConnected', void 0), (0, g.__decorate)([h.observable], i.prototype, 'connected', void 0), (0, g.__decorate)([h.observable], i.prototype, 'connectionError', void 0), (0, g.__decorate)([h.observable], i.prototype, 'joinedRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'attemptingToJoinRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'errorJoiningRoom', void 0), (0, g.__decorate)([h.observable], i.prototype, 'roomError', void 0);
    var _j = i;
}), d.register('7aq3/', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
    class i {
        constructor() {
            this.defendingHomebase = h.observable.array(), this.lava = null, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'defendingHomebase', void 0), (0, g.__decorate)([h.observable], i.prototype, 'lava', void 0);
    var _j = i;
}), d.register('8ATK/', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = class {};
}), d.register('Ldqwz', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT'),
        i = d('YSFE52');
    class j {
        get formattedGameOptions() {
            return (0, h.toJS)(this);
        }
        constructor() {
            this.type = i.GameType.live, this.goal = {
                type: i.GameGoal.time,
                value: 10
            }, this.specialGameType = h.observable.array(), this.currency = '$', this.language = 'en', this.startingCash = 0, this.handicap = -50, this.clapping = !0, this.joinInLate = !0, this.powerups = !0, this.themes = !0, this.cleanPowerupsOnly = !1, this.allowGoogleTranslate = !1, this.music = !0, this.modeOptions = {}, this.setGameOptionsFromStorage = (a, e) => {
                Object.keys(a).forEach(f => {
                    null !== this[f] && ('group' !== f && 'specialGameType' !== f && 'modeOptions' !== f || e) && (this[f] = a[f]);
                });
            }, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], j.prototype, 'type', void 0), (0, g.__decorate)([h.observable], j.prototype, 'goal', void 0), (0, g.__decorate)([h.observable], j.prototype, 'specialGameType', void 0), (0, g.__decorate)([h.observable], j.prototype, 'currency', void 0), (0, g.__decorate)([h.observable], j.prototype, 'language', void 0), (0, g.__decorate)([h.observable], j.prototype, 'startingCash', void 0), (0, g.__decorate)([h.observable], j.prototype, 'handicap', void 0), (0, g.__decorate)([h.observable], j.prototype, 'clapping', void 0), (0, g.__decorate)([h.observable], j.prototype, 'joinInLate', void 0), (0, g.__decorate)([h.observable], j.prototype, 'powerups', void 0), (0, g.__decorate)([h.observable], j.prototype, 'themes', void 0), (0, g.__decorate)([h.observable], j.prototype, 'cleanPowerupsOnly', void 0), (0, g.__decorate)([h.observable], j.prototype, 'allowGoogleTranslate', void 0), (0, g.__decorate)([h.observable], j.prototype, 'music', void 0), (0, g.__decorate)([h.observable], j.prototype, 'modeOptions', void 0), (0, g.__decorate)([h.action.bound], j.prototype, 'setGameOptionsFromStorage', void 0), (0, g.__decorate)([h.computed], j.prototype, 'formattedGameOptions', null);
    var _k = j;
}), d.register('h+yoh', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('JkQCT'),
        j = d('YSFE52');
    class k {
        constructor() {
            (0, g.default)(this, 'availableThemes', i.observable.array()), this.currentRoute = j.GameStatus.setup, this.gameCode = '', this.clapCount = 0, this.reportId = '', this.activityItems = i.observable.array(), this.thanosValues = null, this.bossId = null, this.showBossBattleModal = !1, this.gameEndDate = 0, this.defendingHomebaseResults = null, this.roomIntentErrorMessage = '', (0, i.makeObservable)(this);
        }
    }
    (0, h.__decorate)([i.observable], k.prototype, 'currentRoute', void 0), (0, h.__decorate)([i.observable], k.prototype, 'gameCode', void 0), (0, h.__decorate)([i.observable], k.prototype, 'clapCount', void 0), (0, h.__decorate)([i.observable], k.prototype, 'reportId', void 0), (0, h.__decorate)([i.observable], k.prototype, 'activityItems', void 0), (0, h.__decorate)([i.observable], k.prototype, 'thanosValues', void 0), (0, h.__decorate)([i.observable], k.prototype, 'bossId', void 0), (0, h.__decorate)([i.observable], k.prototype, 'showBossBattleModal', void 0), (0, h.__decorate)([i.observable], k.prototype, 'gameEndDate', void 0), (0, h.__decorate)([i.observable], k.prototype, 'defendingHomebaseResults', void 0), (0, h.__decorate)([i.observable], k.prototype, 'roomIntentErrorMessage', void 0);
    var _l = k;
}), d.register('Xy4Gw', function(e, f) {
    a(e.exports, 'default', function() {
        return _h;
    });
    var g = d('s/YA9');
    var _h = class {
        constructor() {
            (0, g.default)(this, 'questions', []);
        }
    };
}), d.register('w8R4k', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
    const i = (a, e) => a + e.balance,
        j = (a, e) => a + e.stones;
    class k {
        get filteredPlayers() {
            return this.players.filter(a => 'Player [Still Entering Name]' !== a.name);
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
}), d.register('s3+ua', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
    class i {
        constructor() {
            this.specialSongIsPlaying = !1, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'specialSongIsPlaying', void 0);
    var _j = i;
}), d.register('LaN3B', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
    class i {
        constructor() {
            this.playerStats = h.observable.array(), (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'playerStats', void 0);
    var _j = i;
}), d.register('ZLAyM', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
    class i {
        constructor() {
            (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'translations', void 0);
    var _j = i;
}), d.register('EbsVB', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT'),
        i = d('wsTfV');
    class j {
        constructor() {
            this.backgroundColor = i.default.BackgroundPurple, this.showingBossPreScreen = !1, this.showingLavaPreScreen = !1, this.showingHumansVsZombiesPreScreen = !1, this.snowing = !1, this.showingClassTip = !1, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], j.prototype, 'backgroundColor', void 0), (0, g.__decorate)([h.observable], j.prototype, 'showingBossPreScreen', void 0), (0, g.__decorate)([h.observable], j.prototype, 'showingLavaPreScreen', void 0), (0, g.__decorate)([h.observable], j.prototype, 'showingHumansVsZombiesPreScreen', void 0), (0, g.__decorate)([h.observable], j.prototype, 'snowing', void 0), (0, g.__decorate)([h.observable], j.prototype, 'showingClassTip', void 0);
    var _k = j;
}), d.register('wsTfV', function(e, f) {
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
}), d.register('b4rHF', function(e, f) {
    a(e.exports, 'PersonRole', function() {
        return _i;
    }), a(e.exports, 'ImposterStatus', function() {
        return _k;
    }), a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
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
}), d.register('NGM+H', function(e, f) {
    a(e.exports, 'DrawStatus', function() {
        return _i;
    }), a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
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
}), d.register('m+kUN', function(e, f) {
    a(e.exports, 'PardyScreen', function() {
        return _i;
    }), a(e.exports, 'PardyQuestionScreen', function() {
        return _k;
    }), a(e.exports, 'PardyQuestionStatus', function() {
        return _m;
    }), a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
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
}), d.register('BfG+k', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('4F2ZN'),
        h = d('JkQCT');
    class i {
        constructor() {
            this.hasReceivedHostStaticState = !1, this.currentGameIsUsingGroups = !1, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'hasReceivedHostStaticState', void 0), (0, g.__decorate)([h.observable], i.prototype, 'currentGameIsUsingGroups', void 0);
    var _j = i;
}), d.register('1PEs4', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('gRbUn'),
        h = d('wsTfV'),
        i = d('6jmvl'),
        j = d('O0Kav'),
        k = d('u4s09'),
        l = d('E50jl'),
        m = d('yrLp3'),
        n = d('YSFE52');
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
        _q = k.default.div(o || (o = (a => a)`
  min-height: 100vh;
  width: 100%;
  color: ${ 0 };
  background: ${ 0 };
  transition: background ${ 0 }s;
  display: flex;
  flex-direction: column;
`), h.default.White, a => a.backgroundColor, a => a.instantAnimateBackground ? 0 : 0.5);
    var _r = p;
}), d.register('E50jl', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('YSFE52');
    d('O0Kav');
    var i = d('YX10u'),
        j = d('jLWD6'),
        k = d('cI/U8'),
        l = d('GfHTV'),
        m = d('LPaIR'),
        n = d('eRiQf'),
        o = d('iWv9H'),
        p = d('1ARxV'),
        q = d('3OkVA'),
        r = d('AhvCr');
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
}), d.register('YX10u', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('6jmvl'),
        j = d('O0Kav');
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
}), d.register('jLWD6', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('6jmvl'),
        j = d('O0Kav'),
        k = d('e2uj5');
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
}), d.register('e2uj5', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('s/YA9'),
        h = d('gRbUn'),
        i = d('O0Kav'),
        j = d('IJcrR');
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
}), d.register('IJcrR', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('ZE7Lv'),
        h = d('JkQCT');

    function _i() {
        var j = !0,
            k = document.getElementById('snow-canv');
        if (k) {
            for (var l, m = k.getContext('2d'), n = k.width = window.innerWidth, o = k.height = window.innerHeight, p = [], q = 0; q < 29; ++q)
                (l = new _m()).y = Math.random() * (o + 50), l.x = Math.random() * n, l.t = Math.random() * (2 * Math.PI), l.sz = 100 / (10 + 100 * Math.random()) * 1.3, l.sp = 0.15 * Math.pow(0.8 * l.sz, 2) * 1, l.sp = l.sp < 1 ? 1 : l.sp, p.push(l);
            _l(), (0, h.reaction)(() => g.default.ui.isSnowing, () => {
                const r = g.default.ui.isSnowing;
                !j && r ? (j = r, _l()) : j = r;
            });
        }

        function _l() {
            if (j) {
                window.requestAnimationFrame(_l), d.clearRect(0, 0, _i, _j), d.fillRect(0, 0, _i, _j), d.fill();
                for (var m = 0; m < _k.length; ++m) {
                    var n = _k[m];
                    n.t += 0.05, n.t = n.t >= 2 * Math.PI ? 0 : n.t, n.y += n.sp, n.x += Math.sin(1 * n.t) * (0.3 * n.sz), n.y > _j + 50 && (n.y = -10 - 20 * Math.random()), n.x > _i + 20 && (n.x = -20), n.x < -20 && (n.x = _i + 20), n.draw();
                }
            }
        }

        function _m() {
            this.draw = function() {
                this.g = d.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, 'hsla(255,255%,255%,1)'), this.g.addColorStop(1, 'hsla(255,255%,255%,0)'), d.moveTo(this.x, this.y), d.fillStyle = this.g, d.beginPath(), d.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), d.fill();
            };
        }
    }
}), d.register('cI/U8', function(e, f) {
    a(e.exports, 'default', function() {
        return _z;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('aK6ep'),
        _j = d('wsTfV'),
        _k = d('RcaOq'),
        l = d('JkQCT'),
        m = d('6jmvl'),
        n = d('O0Kav'),
        o = d('u4s09'),
        p = d('LSL2U'),
        q = d('3x04k'),
        r = d('rw/ws'),
        s = d('zeSCA'),
        t = d('cLRT9'),
        u = d('Yg/TP'),
        v = d('L06N1');
    let w;
    const x = o.default.div(w || (w = (a => a)`
  height: 100vh;
  width: 100%;
  font-family: ${ 0 };
  display: flex;
  flex-direction: column;
`), _k.default.fontFamilyName);
    let y = class extends n.Component {
        componentDidMount() {
            if (this.props.blockComponentDidMountScript)
                return;
            (0, i.addActivityItem)({
                name: 'The Game',
                action: 'has started!',
                customTextColor: _j.default.LightSuccessGreen
            });
            const z = (0, i.getMusicTrack)();
            this.props.gameOptions.music && (z.playing() || (0, i.inDrawMode)() || (0, i.inPardyMode)() || z.play()), (0, l.reaction)(() => this.props.gameOptions.music, e => {
                e ? z.playing() || (0, i.inDrawMode)() || (0, i.inPardyMode)() || z.play() : (0, i.inPardyMode)() || z.pause();
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
}), d.register('aK6ep', function(e, f) {
    a(e.exports, 'plural', function() {
        return _s;
    }), a(e.exports, 'numberWithCommas', function() {
        return _t;
    }), a(e.exports, 'getMoney', function() {
        return _u;
    }), a(e.exports, 'inDrawMode', function() {
        return _P;
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
        return _J;
    }), a(e.exports, 'inZombiesVsHumansMode', function() {
        return _M;
    }), a(e.exports, 'getMusicTrack', function() {
        return _A;
    }), a(e.exports, 'inImposterMode', function() {
        return _O;
    }), a(e.exports, 'inLavaMode', function() {
        return _N;
    }), a(e.exports, 'startSpecialSong', function() {
        return _B;
    }), a(e.exports, 'getAssetPath', function() {
        return _S;
    }), a(e.exports, 'getQueryVariable', function() {
        return _C;
    }), a(e.exports, 'playSound', function() {
        return _D;
    }), a(e.exports, 'stopSound', function() {
        return _E;
    }), a(e.exports, 'send', function() {
        return _G;
    }), a(e.exports, 'HideIfTabbedAway', function() {
        return _H;
    }), a(e.exports, 'musicIsOn', function() {
        return _I;
    }), a(e.exports, 'inHiddenMode', function() {
        return _K;
    }), a(e.exports, 'inBossBattleMode', function() {
        return _L;
    }), a(e.exports, 'inPardyMode', function() {
        return _Q;
    }), a(e.exports, 'inProduction', function() {
        return _R;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('tf3/Y'),
        i = (d('qDc0h'), d('wsTfV')),
        j = d('ZE7Lv'),
        k = d('YSFE52'),
        l = d('TdWEF'),
        m = d('wSQ6B'),
        n = d('6yrsF'),
        o = d('9zaF+'),
        p = d('CUZWw'),
        q = d('t+nQW');
    const r = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        },
        _s = (a, e, f) => 1 === e ? a : f || a + 's',
        _t = a => a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        _u = a => {
            const v = Math.round(a);
            return _P() ? `${ _t(v) } ${ _s('point', v) }` : (v < 0 ? '-' : '') + j.default.gameOptions.currency + _t(Math.abs(v));
        },
        _v = a => {
            j.default.engine.game.send(l.default.kickPlayer, a), j.default.players.players.replace(j.default.players.players.filter(e => e.id !== a)), j.default.ui.showingClassTip || j.default.metadata.currentGameIsUsingGroups || (j.default.ui.showingClassTip = !0);
        },
        _w = a => {
            j.default.gameValues.activityItems.replace([
                ...(0, o.takeRight)(j.default.gameValues.activityItems, 22),
                {
                    ...a,
                    key: r() + r() + '-' + r() + '-' + r() + '-' + r()
                }
            ]);
        },
        _x = () => [
            q.TEAMS,
            m.HUMAN_ZOMBIE_DEFENDING_HOMEBASE,
            m.BOSS_BATTLE
        ].includes(j.default.gameOptions.specialGameType[0]),
        _y = a => {
            const z = j.default.players.teams.findIndex(z => z.id === a);
            return -1 !== z ? j.default.players.teams[z].color.background : i.default.White;
        },
        _z = a => {
            if ((_J() || _M()) && !a)
                return;
            const A = _A();
            _O() || A.fade(h.MUSIC_VOLUME, 0, 1000), setTimeout(() => {
                _x() ? j.default.engine.game.send(l.default.requestTeamLeaderboard, 'final') : j.default.engine.game.send(l.default.requestPlayerLeaderboard, 'final'), j.default.gameValues.currentRoute = k.GameStatus.results;
            }, 500);
        };
    const _A = () => _J() ? h.default.thanos.thanos : _M() ? h.default.halloween : _N() ? h.default.lava.panther : _O() ? h.default.imposter.mysteriousCase : _P() ? h.default.draw.background : h.default.realityShow,
        _B = (a, e) => {
            const C = j.default.gameOptions.music,
                D = _A();
            j.default.powerups.specialSongIsPlaying || (C && D.fade(h.MUSIC_VOLUME, 0, 1000), setTimeout(() => {
                const E = new(0, n.Howl)({
                    src: [_S(a)],
                    volume: 0.9
                });
                E.play(), j.default.powerups.specialSongIsPlaying = !0;
                const F = String(j.default.ui.backgroundColor);
                j.default.ui.backgroundColor = e, E.on('end', () => {
                    j.default.powerups.specialSongIsPlaying = !1, j.default.ui.backgroundColor = F, C && j.default.gameValues.currentRoute === k.GameStatus.gameplay && D.fade(0, h.MUSIC_VOLUME, 1000);
                });
            }, 1000));
        },
        _C = a => {
            const D = window.location.search.substring(1).split('&');
            for (let E = 0; E < D.length; E++) {
                const F = D[E].split('=');
                if (F[0] === a)
                    return F[1];
            }
            return null;
        },
        _D = (a, e) => {
            const E = () => {
                e.onEnd && e.onEnd();
            };
            void 0 !== e.volume ? a.volume(e.volume) : a.volume(1), e.fadeIn && a.volume(0), a.play(), e.fadeIn && a.fade(0, void 0 !== e.volume ? e.volume : 1, e.fadeInDuration || 1000), a.once('play', () => {
                e.onPlay && e.onPlay(), e.fadeOut && setTimeout(() => {
                    a.fade(e.volume || 1, 0, 1000);
                }, 1000 * (a.duration() - 1));
            });
            const F = () => {
                e.onError ? e.onError() : E();
            };
            return a.once('end', E), a.once('loaderror', F), a.once('playerror', F), a;
        },
        _E = (a, e, F = 1000) => {
            e ? (a.fade(a.volume(), 0, F), setTimeout(() => a.stop(), F)) : a.stop();
        },
        _G = (a, e) => {
            const H = j.default.engine.game;
            H && H.send(a, e);
        },
        _H = a => (0, p.default)() ? (0, g.jsx)(g.Fragment, {
            children: a.children
        }) : (0, g.jsx)('div', {}),
        _I = () => !0 === j.default.gameOptions.music,
        _J = () => j.default.gameOptions.specialGameType.includes(m.THANOS),
        _K = () => j.default.gameOptions.specialGameType.includes(m.HIDDEN),
        _L = () => j.default.gameOptions.specialGameType.includes(m.BOSS_BATTLE),
        _M = () => j.default.gameOptions.specialGameType.includes(m.HUMAN_ZOMBIE_DEFENDING_HOMEBASE),
        _N = () => j.default.gameOptions.specialGameType.includes(m.LAVA),
        _O = () => j.default.gameOptions.specialGameType.includes(m.IMPOSTER),
        _P = () => j.default.gameOptions.specialGameType.includes(m.DRAW),
        _Q = () => j.default.gameOptions.specialGameType.includes(m.PARDY);

    function _R() {
        return !0;
    }

    function _S(T) {
        return '/assets/host/' + T;
    }
}), d.register('tf3/Y', function(e, f) {
    a(e.exports, 'MUSIC_VOLUME', function() {
        return _i;
    }), a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('6yrsF'),
        h = d('aK6ep');
    const _i = 0.45,
        j = !1,
        k = a => new(0, g.Howl)({
            src: [(0, h.getAssetPath)(`${ a }.mp3`)],
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
}), d.register('TdWEF', function(e, f) {
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
}), d.register('wSQ6B', function(e, f) {
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
}), d.register('CUZWw', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('O0Kav'),
        h = d('H2Jc3'),
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
                            !o && _j.return && _j.return();
                        } finally {
                            if (p)
                                throw q;
                        }
                    }
                    return n;
                }(j, k);
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
        },
        _j = h.isSupported && h.visibility,
        _k = function() {
            var l = (0, h.getHandlerArgs)(),
                m = i(l, 1)[0],
                n = (0, g.useState)(m),
                o = i(n, 2),
                p = o[0],
                q = o[1];
            return (0, g.useEffect)(function() {
                if (_j) {
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
}), d.register('H2Jc3', function(e, f) {
    a(e.exports, 'isSupported', function() {
        return _i;
    }), a(e.exports, 'visibility', function() {
        return _j;
    }), a(e.exports, 'getHandlerArgs', function() {
        return _p;
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
                    var _p = n.value;
                    if (_p.hidden in document)
                        return _p;
                }
            } catch (k) {
                l = !0, m = k;
            } finally {
                try {
                    !k && _j.return && _j.return();
                } finally {
                    if (l)
                        throw m;
                }
            }
            return null;
        }(),
        k = function() {
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
}), d.register('t+nQW', function(e, f) {
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
}), d.register('RcaOq', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), d.register('LSL2U', function(e, f) {
    a(e.exports, 'default', function() {
        return _w;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('Dn89R'),
        k = d('aK6ep'),
        l = d('6jmvl'),
        m = d('O0Kav'),
        n = d('Qm1Hr'),
        o = d('YSFE52'),
        p = d('18v0z'),
        q = d('JTiQk'),
        r = d('gWjq2'),
        s = d('JTTlV24'),
        t = d('oFOzU');
    const u = a => (0, i.jsxs)('span', {
        children: [
            a.minutes,
            ':',
            a.seconds
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
}), d.register('Qm1Hr', function(e, f) {
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
            return function(j, k, l) {
                return k && i(j.prototype, k), l && i(j, l), j;
            };
        }(),
        i = _k(d('O0Kav')),
        j = _k(d('HoW8Y'));

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
            }(p, o), h(p, [{
                    key: 'componentDidMount',
                    value: function() {
                        this.mounted = !0, this.props.controlled || (this.interval = setInterval(this.tick, this.props.intervalDelay));
                    }
                },
                {
                    key: 'componentWillReceiveProps',
                    value: function(q) {
                        var r = q.date,
                            s = q.now,
                            t = q.precision,
                            u = q.controlled;
                        this.setDeltaState(m(r, {
                            now: s,
                            precision: t,
                            controlled: u
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
                    value: function(q) {
                        !this.state.completed && q.completed && (this.clearInterval(), this.props.onComplete && this.props.onComplete(q)), this.mounted && this.setState(g({}, q));
                    }
                },
                {
                    key: 'getFormattedDelta',
                    value: function() {
                        var q = this.state,
                            r = q.days,
                            s = q.hours,
                            t = this.state,
                            u = t.minutes,
                            v = t.seconds,
                            w = this.props,
                            x = w.daysInHours,
                            y = w.zeroPadLength;
                        return x ? (s = l(s + 24 * r, y), r = null) : s = l(s, Math.min(2, y)), {
                            days: r,
                            hours: s,
                            minutes: l(u, Math.min(2, y)),
                            seconds: l(v, Math.min(2, y))
                        };
                    }
                },
                {
                    key: 'clearInterval',
                    value: function(q) {
                        function r() {
                            return q.apply(this, arguments);
                        }
                        return r.toString = function() {
                            return q.toString();
                        }, r;
                    }(function() {
                        clearInterval(this.interval), delete this.interval;
                    })
                },
                {
                    key: 'render',
                    value: function() {
                        var q = this.getFormattedDelta();
                        if (this.props.renderer)
                            return this.props.renderer(g({}, this.props, this.state, q));
                        if (this.state.completed && this.props.children) {
                            var r = g({}, this.props, this.state, q);
                            return delete r.children, i.default.cloneElement(this.props.children, {
                                countdown: r
                            });
                        }
                        var r = q.days,
                            s = q.hours,
                            t = q.minutes,
                            u = q.seconds;
                        return i.default.createElement('span', null, r, null != r ? ':' : '', s, ':', t, ':', u);
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
}), d.register('18v0z', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('gRbUn'),
        h = d('P1KtI'),
        i = d('Dn89R');
    d('O0Kav');
    var _j = a => (0, g.jsx)(i.default, {
        placement: 'leftBottom',
        title: a.tooltipMessage,
        children: (0, g.jsx)(h.default, {
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
}), d.register('JTiQk', function(e, f) {
    a(e.exports, 'Container', function() {
        return _n;
    }), a(e.exports, 'GameCode', function() {
        return _o;
    }), a(e.exports, 'Goal', function() {
        return _p;
    }), a(e.exports, 'HeaderSectionContainer', function() {
        return _q;
    });
    var g = d('RcaOq'),
        h = d('u4s09');
    let i, j, k, l, m = a => a;
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
`), g.default.fontFamilyName, a => a.showLargeCode ? '\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.9);\n    z-index: 99999;\n    font-size: 150px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  ' : null),
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
`), a => a.customCSS ? a.customCSS : '', a => a.customWidth ? a.customWidth : 25);
}), d.register('gWjq2', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('Omeih'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'EnterOutlined';
    var _l = h.forwardRef(k);
}), d.register('Omeih', function(e, f) {
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
}), d.register('JTTlV24', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('P++lt24'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'LogoutOutlined';
    var _l = h.forwardRef(k);
}), d.register('P++lt24', function(e, f) {
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
}), d.register('oFOzU', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('a3wEm'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'SoundOutlined';
    var _l = h.forwardRef(k);
}), d.register('a3wEm', function(e, f) {
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
}), d.register('3x04k', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('gRbUn'),
        h = d('aK6ep'),
        i = d('O0Kav'),
        j = d('u4s09'),
        k = d('Y+ehH'),
        l = d('pzi9v');
    let m;
    const n = j.default.div(m || (m = (a => a)`
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
}), d.register('Y+ehH', function(e, f) {
    a(e.exports, 'leaderboardSorter', function() {
        return _s;
    }), a(e.exports, 'default', function() {
        return _v;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('v5WwX'),
        j = d('aK6ep'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('hQxzs'),
        n = d('u4s09'),
        o = d('YSFE52'),
        p = d('KU8+q'),
        q = d('t+nQW');
    let r;
    const _s = a => {
            const t = (0, j.inThanosMode)() ? 'stones' : 'balance';
            return a.slice().sort((a, f) => a[t] === f[t] ? 0 : a[t] > f[t] ? -1 : 1);
        },
        t = n.default.div(r || (r = (a => a)`
  max-width: ${ 0 };
  ${ 0 } min-width: 420px;
  flex: 1;
  min-height: 0;
  ${ 0 } display: flex;
  flex-direction: column;
`), a => a.customWidth ? a.customMaxWidth : '420px', a => a.customWidth ? 'width:' + a.customWidth + ';' : null, a => a.blockScroll ? null : 'overflow: scroll;');
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
                        children: w.map((w, x) => this.props.hideTop3 && x + 1 <= 3 ? null : (0, h.jsx)(p.default, {
                            position: x + 1,
                            data: w,
                            isPlayer: !v,
                            gameGoal: this.props.gameOptions.goal,
                            themes: this.props.gameValues.availableThemes,
                            hidden: !this.props.showHidden && w.activePowerups.includes(i.PowerupNames.undercover),
                            hideName: !(!(0, j.inHiddenMode)() || this.props.gameValues.currentRoute !== o.GameStatus.gameplay),
                            hideBalance: !this.props.forceShowBalance && (this.props.gameValues.currentRoute === o.GameStatus.gameplay && !(!(0, j.inHiddenMode)() && !this.props.gameOptions.specialGameType.includes(q.CLASSIC)))
                        }, w.id || w.name))
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
}), d.register('v5WwX', function(e, f) {
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
}), d.register('KU8+q', function(e, f) {
    a(e.exports, 'getTeamPlayerNames', function() {
        return _C;
    }), a(e.exports, 'default', function() {
        return _O;
    });
    var g = d('s/YA9'),
        h = d('gRbUn'),
        i = d('3Y4Gz'),
        j = d('3t9ce'),
        k = d('aK6ep'),
        l = d('wsTfV'),
        m = d('RcaOq'),
        n = d('RcqBP'),
        o = d('O0Kav'),
        p = d('u4s09'),
        q = d('YSFE52'),
        r = d('IaOs1');
    let s, t, u, v, w, x, y, z, A, B = a => a;
    const _C = a => {
            let D = '';
            return a.forEach((f, d) => {
                D += f, d + 1 !== a.length && (D += ', ');
            }), D;
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
`), a => a.background, a => a.text, n.default.basic),
        E = p.default.div(t || (t = B`
  ${ 0 };
  font-size: ${ 0 }px;
`), m.default.black, a => a.large ? 34 : 23),
        F = p.default.div(u || (u = B`
  ${ 0 };
  font-size: ${ 0 }px;
  margin-left: 7px;
  margin-right: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`), m.default.bold, a => a.large ? 30 : 20),
        G = p.default.div(v || (v = B`
  font-size: ${ 0 }px;
`), a => a.large ? 30 : 20),
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
`), a => a.large ? 37 : 25, a => a.large ? 37 : 25, a => a.background),
        K = p.default.div(z || (z = B`
  font-size: ${ 0 }px;
  ${ 0 };
`), a => a.large ? 37 : 25, m.default.bold),
        L = p.default.div(A || (A = B`
  font-size: ${ 0 }px;
  text-align: center;
`), a => a.large ? 24 : 16),
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
                    const P = this.props.data;
                    (0, k.addActivityItem)({
                        name: P.id,
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
            const P = this.props.data;
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
                                        background: (0, k.getTeamColor)(P.id),
                                        children: P.icon && (0, h.jsx)('i', {
                                            className: P.icon,
                                            style: {
                                                color: P.color.text
                                            }
                                        })
                                    }),
                                    (0, h.jsx)(K, {
                                        large: this.props.large,
                                        children: (0, h.jsx)(i.default, {
                                            text: P.id
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
                        children: (0, k.getMoney)(P.balance)
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
                    R = Q.filter(O => O.name === P).length > 0 ? Q.filter(O => O.name === P)[0] : Q.filter(O => 'Default' === O.name)[0];
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
}), d.register('3Y4Gz', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('qDc0h'),
        j = d('6jmvl'),
        k = d('O0Kav');
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
}), d.register('RcqBP', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
        basic: '0px 4px 33px -6px rgba(0, 0, 0, 0.46)',
        light: '0 4px 14px 0 rgba(0, 0, 0, 0.2)'
    };
}), d.register('IaOs1', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('s/YA9'),
        h = d('gRbUn'),
        i = d('Dn89R'),
        j = d('TdWEF'),
        k = d('aK6ep'),
        l = d('wsTfV'),
        m = d('O0Kav'),
        n = d('u4s09');
    let o;
    const p = a => (0, h.jsx)(i.default, {
        title: a.tooltip,
        placement: 'bottomRight',
        children: (0, h.jsx)(_s, {
            onClick: a.handleClick,
            backgroundColor: a.backgroundColor,
            children: (0, h.jsx)('i', {
                className: a.icon
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
    const _s = n.default.div(o || (o = (a => a)`
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
`), a => a.backgroundColor, l.default.White);
}), d.register('pzi9v', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('D/xq1'),
        k = d('VDFqw');
    let l;
    const m = i.default.div(l || (l = (a => a)`
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
}), d.register('D/xq1', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('RcqBP'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('hQxzs'),
        n = d('u4s09'),
        o = d('berZi'),
        p = d('aK6ep');
    let q;
    const r = n.default.div(q || (q = (a => a)`
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
                    children: t.map(t => (0, i.jsx)(o.default, {
                        customFont: this.props.customFont,
                        item: t
                    }, 'ai-' + t.key))
                });
            });
        }
    };
    s = (0, h.__decorate)([
        (0, k.inject)('gameValues'),
        k.observer
    ], s);
    var _t = a => (0, i.jsx)(p.HideIfTabbedAway, {
        children: (0, i.jsx)(s, {
            ...a
        })
    });
}), d.register('berZi', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('3Y4Gz'),
        i = d('wsTfV'),
        j = d('RcaOq'),
        k = d('O0Kav'),
        l = d('u4s09');
    let m, n, o = a => a;
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
`), a => a.customColor ? a.customColor : i.default.Gold);
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
}), d.register('VDFqw', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('aK6ep'),
        i = d('RcqBP'),
        j = d('6jmvl'),
        k = d('O0Kav'),
        l = d('u4s09'),
        m = d('84vLM'),
        n = d('wAr+d'),
        o = d('yrLp3');
    let p;
    const q = k.lazy(() => d('kI2KX')),
        r = l.default.div(p || (p = (a => a)`
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
}), d.register('84vLM', function(e, f) {
    a(e.exports, 'default', function() {
        return _z;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('aK6ep'),
        k = d('RcaOq'),
        l = d('RcqBP'),
        m = d('6jmvl'),
        n = d('O0Kav'),
        o = d('rE3bg'),
        p = d('u4s09'),
        q = d('YSFE52');
    let r, s, t = a => a;
    const u = a => (0, j.getMoney)(a),
        v = a => `${ a } ${ (0, j.plural)('stone', a) }`,
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
`), a => a.fontSize, l.default.basic);
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
}), d.register('rE3bg', function(e, f) {
    Object.defineProperty(e.exports, '__esModule', {
        value: !0
    });
    var g = d('O0Kav'),
        h = d('u5LqT');

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

    function j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? i(Object(m), !0).forEach(function(n) {
                _k(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : i(Object(m)).forEach(function(n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }

    function _k(l, m, n) {
        return m in l ? Object.defineProperty(l, m, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : l[m] = n, l;
    }

    function l() {
        return l = Object.assign ? Object.assign.bind() : function(m) {
            for (var n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                for (var p in o)
                    Object.prototype.hasOwnProperty.call(o, p) && (m[p] = o[p]);
            }
            return m;
        }, l.apply(this, arguments);
    }

    function m(n, o) {
        if (null == n)
            return {};
        var p, q, r = function(s, t) {
            if (null == s)
                return {};
            var u, v, w = {},
                x = Object.keys(s);
            for (v = 0; v < x.length; v++)
                u = x[v], t.indexOf(u) >= 0 || (w[u] = s[u]);
            return w;
        }(n, o);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(n);
            for (q = 0; q < s.length; q++)
                p = s[q], o.indexOf(p) >= 0 || Object.prototype.propertyIsEnumerable.call(n, p) && (r[p] = n[p]);
        }
        return r;
    }
    var n = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? g.useLayoutEffect : g.useEffect;

    function o(p) {
        var q = g.useRef(p);
        return n(function() {
            q.current = p;
        }), g.useCallback(function() {
            for (var r = arguments.length, s = new Array(r), t = 0; t < r; t++)
                s[t] = arguments[t];
            return q.current.apply(void 0, s);
        }, []);
    }
    var p = [
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
        q = {
            decimal: '.',
            delay: null,
            prefix: '',
            suffix: '',
            duration: 2,
            start: 0,
            startOnMount: !0,
            enableReinitialize: !0
        },
        r = function(s) {
            var t = g.useMemo(function() {
                    return j(j({}, q), s);
                }, [s]),
                u = t.ref,
                v = t.startOnMount,
                w = t.enableReinitialize,
                x = t.delay,
                y = t.onEnd,
                z = t.onStart,
                A = t.onPauseResume,
                B = t.onReset,
                C = t.onUpdate,
                D = m(t, p),
                E = g.useRef(),
                F = g.useRef(),
                G = g.useRef(!1),
                H = o(function() {
                    return function(I, J) {
                        var K = J.decimal,
                            L = J.decimals,
                            M = J.duration,
                            N = J.easingFn,
                            O = J.end,
                            P = J.formattingFn,
                            Q = J.numerals,
                            R = J.prefix,
                            S = J.separator,
                            T = J.start,
                            U = J.suffix,
                            V = J.useEasing,
                            W = J.enableScrollSpy,
                            X = J.scrollSpyDelay,
                            Y = J.scrollSpyOnce;
                        return new h.CountUp(I, O, {
                            startVal: T,
                            duration: M,
                            decimal: K,
                            decimalPlaces: L,
                            easingFn: N,
                            formattingFn: P,
                            numerals: Q,
                            separator: S,
                            prefix: R,
                            suffix: U,
                            useEasing: V,
                            useGrouping: !!S,
                            enableScrollSpy: W,
                            scrollSpyDelay: X,
                            scrollSpyOnce: Y
                        });
                    }('string' == typeof u ? u : u.current, D);
                }),
                I = o(function(J) {
                    var K = E.current;
                    if (K && !J)
                        return K;
                    var L = H();
                    return E.current = L, L;
                }),
                J = o(function() {
                    var K = function() {
                        return I(!0).start(function() {
                            null == y || y({
                                pauseResume: _K,
                                reset: _L,
                                start: _N,
                                update: _M
                            });
                        });
                    };
                    x && x > 0 ? F.current = setTimeout(K, 1000 * x) : K(), null == z || z({
                        pauseResume: _K,
                        reset: _L,
                        update: _M
                    });
                }),
                _K = o(function() {
                    I().pauseResume(), null == A || A({
                        reset: _L,
                        start: _N,
                        update: _M
                    });
                }),
                _L = o(function() {
                    I().el && (F.current && clearTimeout(F.current), I().reset(), null == B || B({
                        pauseResume: _K,
                        start: _N,
                        update: _M
                    }));
                }),
                _M = o(function(N) {
                    I().update(N), null == C || C({
                        pauseResume: _K,
                        reset: _L,
                        start: _N
                    });
                }),
                _N = o(function() {
                    _L(), J();
                }),
                O = o(function(P) {
                    v && (P && _L(), J());
                });
            return g.useEffect(function() {
                G.current ? w && O(!0) : (G.current = !0, O());
            }, [
                w,
                G,
                O,
                x,
                s.start,
                s.suffix,
                s.prefix,
                s.duration,
                s.separator,
                s.decimals,
                s.decimal,
                s.formattingFn
            ]), g.useEffect(function() {
                return function() {
                    _L();
                };
            }, [_L]), {
                start: _N,
                pauseResume: _K,
                reset: _L,
                update: _M,
                getCountUp: I
            };
        },
        s = [
            'className',
            'redraw',
            'containerProps',
            'children',
            'style'
        ];
    e.exports.default = function(t) {
        var u = t.className,
            v = t.redraw,
            w = t.containerProps,
            x = t.children,
            y = t.style,
            z = m(t, s),
            A = g.useRef(null),
            B = g.useRef(!1),
            C = r(j(j({}, z), {}, {
                ref: A,
                startOnMount: 'function' != typeof x || 0 === t.delay,
                enableReinitialize: !1
            })),
            D = C.start,
            E = C.reset,
            F = C.update,
            G = C.pauseResume,
            H = C.getCountUp,
            I = o(function() {
                D();
            }),
            J = o(function(K) {
                t.preserveValue || E(), F(K);
            }),
            K = o(function() {
                'function' != typeof t.children || A.current instanceof Element ? H() : console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
            });
        g.useEffect(function() {
            K();
        }, [K]), g.useEffect(function() {
            B.current && J(t.end);
        }, [
            t.end,
            J
        ]);
        var L = v && t;
        return g.useEffect(function() {
            v && B.current && I();
        }, [
            I,
            v,
            L
        ]), g.useEffect(function() {
            !v && B.current && I();
        }, [
            I,
            v,
            t.start,
            t.suffix,
            t.prefix,
            t.duration,
            t.separator,
            t.decimals,
            t.decimal,
            t.className,
            t.formattingFn
        ]), g.useEffect(function() {
            B.current = !0;
        }, []), 'function' == typeof x ? x({
            countUpRef: A,
            start: D,
            reset: E,
            update: F,
            pauseResume: G,
            getCountUp: H
        }) : g.createElement('span', l({
            className: u,
            ref: A,
            style: y
        }, w), void 0 !== t.start ? H().formattingFn(t.start) : '');
    }, e.exports.useCountUp = r;
}), d.register('u5LqT', function(e, f) {
    a(e.exports, 'CountUp', function() {
        return _l;
    }, function(g) {
        return _l = g;
    });
    var g = function() {
            return (g = Object.assign || function(h) {
                for (var i, j = 1, k = arguments.length; j < k; j++)
                    for (var _l in i = arguments[j])
                        Object.prototype.hasOwnProperty.call(i, _l) && (h[_l] = i[_l]);
                return h;
            }).apply(this, arguments);
        },
        h = function() {
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
                    return m.options.numerals && m.options.numerals.length && (p = p.replace(/[0-9]/g, function(u) {
                        return m.options.numerals[+u];
                    }), q = q.replace(/[0-9]/g, function(u) {
                        return m.options.numerals[+u];
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
            return i.prototype.handleScroll = function(j) {
                if (j && window && !j.once) {
                    var k = window.innerHeight + window.scrollY,
                        l = j.el.getBoundingClientRect(),
                        m = l.top + l.height + window.pageYOffset;
                    m < k && m > window.scrollY && j.paused ? (j.paused = !1, setTimeout(function() {
                        return j.start();
                    }, j.options.scrollSpyDelay), j.options.scrollSpyOnce && (j.once = !0)) : window.scrollY > m && !j.paused && j.reset();
                }
            }, i.prototype.determineDirectionAndSmartEasing = function() {
                var j = this.finalEndVal ? this.finalEndVal : this.endVal;
                this.countDown = this.startVal > j;
                var k = j - this.startVal;
                if (Math.abs(k) > this.options.smartEasingThreshold && this.options.useEasing) {
                    this.finalEndVal = j;
                    var l = this.countDown ? 1 : -1;
                    this.endVal = j + l * this.options.smartEasingAmount, this.duration = this.duration / 2;
                } else
                    this.endVal = j, this.finalEndVal = null;
                null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
            }, i.prototype.start = function(j) {
                this.error || (this.callback = j, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
            }, i.prototype.pauseResume = function() {
                this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
            }, i.prototype.reset = function() {
                cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
            }, i.prototype.update = function(j) {
                cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(j), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
            }, i.prototype.printValue = function(j) {
                var k = this.formattingFn(j);
                'INPUT' === this.el.tagName ? this.el.value = k : 'text' === this.el.tagName || 'tspan' === this.el.tagName ? this.el.textContent = k : this.el.innerHTML = k;
            }, i.prototype.ensureNumber = function(j) {
                return 'number' == typeof j && !isNaN(j);
            }, i.prototype.validateValue = function(j) {
                var k = Number(j);
                return this.ensureNumber(k) ? k : (this.error = '[CountUp] invalid start or end value: '.concat(j), null);
            }, i.prototype.resetDuration = function() {
                this.startTime = null, this.duration = 1000 * Number(this.options.duration), this.remaining = this.duration;
            }, i;
        }();
}), d.register('wAr+d', function(e, f) {
    a(e.exports, 'useWindowSize', function() {
        return _k;
    });
    var g = d('O0Kav'),
        h = d('LgNEN'),
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
}), d.register('LgNEN', function(e, f) {
    a(e.exports, 'useIsomorphicEffect', function() {
        return _h;
    });
    var g = d('O0Kav'),
        _h = 'undefined' == typeof window ? g.useEffect : g.useLayoutEffect;
}), d.register('yrLp3', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('O0Kav'),
        h = d('ZE7Lv');
    var _i = g.createContext(h.default);
}), d.register('kI2KX', function(e, f) {
    e.exports = import('./' + d('Dq3qN').resolve('gBSGY')).then(() => d('8Q5Um'));
}), d.register('rw/ws', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('D/xq1'),
        i = d('LSL2U');
    d('O0Kav');
    var j = d('u4s09'),
        k = d('1PtQC'),
        l = d('lKjHC'),
        m = d('quE27');
    let n, o, p, q, r = a => a;
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
}), d.register('1PtQC', function(e, f) {
    a(e.exports, 'getImage', function() {
        return _q;
    }), a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('aK6ep'),
        j = d('wsTfV'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('u4s09'),
        n = d('lbl94');
    let o;
    const p = 'halloween-zombie',
        _q = a => a === p ? (0, i.getAssetPath)('zombie-head.svg') : (0, i.getAssetPath)('support.svg');
    let r = class extends l.Component {
        render() {
            return (0, h.jsx)(_t, {
                children: this.props.entities.defendingHomebase.map(a => {
                    return (0, h.jsx)(n.default, {
                        backgroundColor: (e = a.id, 'halloween-human' === e ? '#003c8f' : e === p ? '#494949' : j.default.Black),
                        color: j.default.White,
                        maxHealth: a.maxHealth,
                        currentHealth: a.health,
                        name: a.name,
                        image: _q(a.id)
                    }, `base-${ a.id }`);
                    var s;
                })
            });
        }
    };
    r = (0, g.__decorate)([
        (0, k.inject)('entities'),
        k.observer
    ], r);
    var _s = r;
    const _t = m.default.div(o || (o = (a => a)`
  width: 100%;
  height: 100%;
  display: flex;
`));
}), d.register('lbl94', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('gRbUn'),
        h = d('3Y4Gz'),
        i = d('eyhCL'),
        j = d('aK6ep'),
        k = d('RcaOq'),
        l = d('O0Kav'),
        m = d('8KqQ+');
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
}), d.register('zeSCA', function(e, f) {
    a(e.exports, 'default', function() {
        return _v;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('tf3/Y'),
        k = d('aK6ep'),
        l = d('RcaOq'),
        m = d('6jmvl'),
        n = d('O0Kav'),
        o = d('u4s09'),
        p = d('QHmKa'),
        q = d('D61Qd'),
        r = d('PG7oh'),
        s = d('1ozTj');
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
    })(t || (t = (a => a)`
  height: 100vh;
  width: 100vw;
  background: transparent;
  z-index: 2;
  display: flex;
  font-family: ${ 0 };
`), l.default.fontFamilyName);
}), d.register('QHmKa', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('u4s09');
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
    const _k = h.default.div(i || (i = (a => a)`
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
}), d.register('D61Qd', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('RcaOq'),
        j = d('6jmvl'),
        k = d('O0Kav'),
        l = d('u4s09');
    let m, n, o, p = a => a,
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
}), d.register('PG7oh', function(e, f) {
    a(e.exports, 'getTimerFromSeconds', function() {
        return _B;
    }), a(e.exports, 'default', function() {
        return _C;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('hE1Qf'),
        k = d('9aZ6t'),
        l = d('aK6ep'),
        m = d('D/xq1');
    let n, o, p, q, r, s, t, u, v, w, x, y, z, A = a => a;
    const _B = a => {
        const C = (a, C) => (Math.pow(10, C) + ~~a).toString().substring(1),
            D = a % 60;
        return `${ C(Math.floor(a / 60), 2) }:${ C(D, 2) }`;
    };
    var _C = a => {
        const {
            buildHeight: D,
            lavaHeight: E,
            seconds: F
        } = a, G = !!('undefined' != typeof window && window && window.navigator && navigator.userAgent.indexOf('Firefox') > 0);
        h.useEffect(() => {
            D < E && (0, l.endGame)();
        }, [E]);
        const H = ((a, b) => {
                if (b / a > 0.8)
                    return Math.round(1.2 * a);
                const I = Math.round(a).toString().length;
                let J = '';
                for (let K = 0; K < I; K++)
                    J += '9';
                let L = Number(J) + 1;
                return L *= 1.1, Math.round(L);
            })(D, E),
            I = Math.round(D / H * 100),
            J = Math.round(E / H * 100);
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
                                    height: `${ J + 1 }vh`
                                },
                                transition: {
                                    duration: 2
                                },
                                style: {
                                    width: '100%',
                                    marginTop: G ? -7 : -6.5,
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
                                                (0, l.numberWithCommas)(D),
                                                ' ',
                                                (0, l.plural)('block', D)
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
                                                        height: `${ I }vh`
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
                                    children: _B(F)
                                }),
                                (0, g.jsxs)(_H, {
                                    children: [
                                        (0, g.jsx)('b', {
                                            children: 'Game Code:'
                                        }),
                                        ' ',
                                        a.gameCode
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
}), d.register('hE1Qf', function(e, f) {
    e.exports, e.exports = function(g, h) {
        function i(j) {
            return j && 'object' == typeof j && 'default' in j ? j : {
                default: j
            };
        }
        var j = i(g),
            k = i(h);

        function l(m, n) {
            for (var o = 0; o < n.length; o++) {
                var p = n[o];
                p.enumerable = p.enumerable || !1, p.configurable = !0, 'value' in p && (p.writable = !0), Object.defineProperty(m, p.key, p);
            }
        }

        function m(n, o, p) {
            return o in n ? Object.defineProperty(n, o, {
                value: p,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[o] = p, n;
        }

        function n() {
            return (n = Object.assign || function(o) {
                for (var p = 1; p < arguments.length; p++) {
                    var q = arguments[p];
                    for (var r in q)
                        Object.prototype.hasOwnProperty.call(q, r) && (o[r] = q[r]);
                }
                return o;
            }).apply(this, arguments);
        }

        function o(p, q) {
            var r = Object.keys(p);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(p);
                q && (s = s.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(p, t).enumerable;
                })), r.push.apply(r, s);
            }
            return r;
        }

        function p(q) {
            return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
                return r.__proto__ || Object.getPrototypeOf(r);
            })(q);
        }

        function q(r, s) {
            return (q = Object.setPrototypeOf || function(t, u) {
                return t.__proto__ = u, t;
            })(r, s);
        }

        function r(s, t) {
            if (null == s)
                return {};
            var u, v, w = function(x, y) {
                if (null == x)
                    return {};
                var z, A, B = {},
                    C = Object.keys(x);
                for (A = 0; A < C.length; A++)
                    z = C[A], 0 <= y.indexOf(z) || (B[z] = x[z]);
                return B;
            }(s, t);
            if (Object.getOwnPropertySymbols) {
                var x = Object.getOwnPropertySymbols(s);
                for (v = 0; v < x.length; v++)
                    u = x[v], 0 <= t.indexOf(u) || Object.prototype.propertyIsEnumerable.call(s, u) && (w[u] = s[u]);
            }
            return w;
        }

        function s(t) {
            if (void 0 === t)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t;
        }

        function t(u) {
            var v = function() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ('function' == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                } catch (u) {
                    return !1;
                }
            }();
            return function() {
                var w, x = p(u);
                if (v) {
                    var y = p(this).constructor;
                    w = Reflect.construct(x, arguments, y);
                } else
                    w = x.apply(this, arguments);
                return function(y, z) {
                    return !z || 'object' != typeof z && 'function' != typeof z ? s(y) : z;
                }(this, w);
            };
        }

        function u(v) {
            var w = v.options,
                x = r(v, ['options']);
            return j.default.createElement(_v, n({}, _w, w, x));
        }
        var _v = function() {
                ! function(w, x) {
                    if ('function' != typeof x && null !== x)
                        throw new TypeError('Super expression must either be null or a function');
                    w.prototype = Object.create(x && x.prototype, {
                        constructor: {
                            value: w,
                            writable: !0,
                            configurable: !0
                        }
                    }), x && q(w, x);
                }(i, g.Component);
                var w = t(i);

                function x(y) {
                    var z;
                    return function(A, B) {
                        if (!(A instanceof B))
                            throw new TypeError('Cannot call a class as a function');
                    }(this, x), m(s(z = w.call(this, y)), 'width', function() {
                        return z.container.current.offsetWidth;
                    }), m(s(z), 'height', function() {
                        return z.container.current.offsetHeight;
                    }), z.container = j.default.createRef(), z.state = {
                        path: ''
                    }, z.lastUpdate = 0, z.elapsed = 0, z.step = 0, z.update = z.update.bind(s(z)), z;
                }
                return function(y, z, A) {
                    z && l(y.prototype, z), A && l(y, A);
                }(x, [{
                        key: 'calculateWavePoints',
                        value: function() {
                            for (var y = [], z = 0; z <= Math.max(this.props.points, 1); z++) {
                                var A = z / this.props.points * this.width(),
                                    B = (this.step + (z + z % this.props.points)) * this.props.speed * 100,
                                    C = Math.sin(B / 100) * this.props.amplitude,
                                    D = Math.sin(B / 100) * C + this.props.height;
                                y.push({
                                    x: A,
                                    y: D
                                });
                            }
                            return y;
                        }
                    },
                    {
                        key: 'buildPath',
                        value: function(y) {
                            function z(A, B) {
                                return ' C '.concat(A.x, ' ').concat(A.y, ' ').concat(A.x, ' ').concat(A.y, ' ').concat(B.x, ' ').concat(B.y);
                            }
                            var A = 'M '.concat(y[0].x, ' ').concat(y[0].y),
                                B = {
                                    x: (y[1].x - y[0].x) / 2,
                                    y: y[1].y - y[0].y + y[0].y + (y[1].y - y[0].y)
                                };
                            A += z(B, y[1]);
                            for (var C = B, D = 1; D < y.length - 1; D++)
                                A += z(C = {
                                    x: y[D].x - C.x + y[D].x,
                                    y: y[D].y - C.y + y[D].y
                                }, y[D + 1]);
                            return (A += ' L '.concat(this.width(), ' ').concat(this.height())) + ' L 0 '.concat(this.height(), ' Z');
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
                                var y = new Date();
                                this.elapsed += y - this.lastUpdate, this.lastUpdate = y;
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
                            var y = this.props,
                                z = y.style,
                                A = y.className,
                                B = y.fill,
                                C = (y.paused, y.children),
                                D = y.id,
                                E = (y.d, y.ref, r(y, [
                                    'style',
                                    'className',
                                    'fill',
                                    'paused',
                                    'children',
                                    'id',
                                    'd',
                                    'ref'
                                ]));
                            return j.default.createElement('div', {
                                style: function(F) {
                                    for (var G = 1; G < arguments.length; G++) {
                                        var H = null != arguments[G] ? arguments[G] : {};
                                        G % 2 ? o(Object(H), !0).forEach(function(I) {
                                            m(F, I, H[I]);
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(H)) : o(Object(H)).forEach(function(I) {
                                            Object.defineProperty(F, I, Object.getOwnPropertyDescriptor(H, I));
                                        });
                                    }
                                    return F;
                                }({
                                    width: '100%',
                                    display: 'inline-block'
                                }, z),
                                className: A,
                                id: D,
                                ref: this.container
                            }, j.default.createElement('svg', {
                                width: '100%',
                                height: '100%',
                                version: '1.1',
                                xmlns: 'http://www.w3.org/2000/svg'
                            }, C, j.default.createElement('path', n({
                                d: this.state.path,
                                fill: B
                            }, E))));
                        }
                    }
                ]), x;
            }(),
            _w = {
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 3
            };
        return u.defaultProps = {
            paused: !1,
            fill: '#fff'
        }, u.propTypes = {
            paused: k.default.bool,
            fill: k.default.string,
            options: k.default.object
        }, u;
    }(d('O0Kav'), d('HoW8Y'));
}), d.register('1ozTj', function(e, f) {
    a(e.exports, 'default', function() {
        return _u;
    });
    var g = d('gRbUn'),
        h = d('eAUZP'),
        i = d('P1KtI'),
        j = d('VNuyu'),
        k = d('F3o+r'),
        l = d('TdWEF'),
        m = d('aK6ep'),
        n = d('wsTfV'),
        o = d('quE27');
    d('O0Kav');
    var p = d('u4s09'),
        q = d('UfZxY');
    let r, s, t = a => a;
    var _u = a => (0, g.jsx)(_v, {
        children: (0, g.jsxs)(_w, {
            children: [
                (0, g.jsx)(q.default, {
                    icon: 'fas fa-volcano',
                    title: 'Lava Height',
                    value: a.lavaHeight,
                    label: (0, o.plural)('block', a.lavaHeight),
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
                    value: a.buildHeight,
                    label: (0, o.plural)('block', a.buildHeight)
                }),
                (0, g.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, g.jsx)(q.default, {
                    icon: 'fas fa-tachometer-fast',
                    title: 'Lava Increase Speed',
                    value: a.lavaSpeed,
                    label: `${ (0, o.plural)('block', a.lavaSpeed) } per second`
                }),
                (0, g.jsx)('div', {
                    style: {
                        height: 15
                    }
                }),
                (0, g.jsx)(q.default, {
                    icon: 'fas fa-hammer',
                    title: 'Builds In Progress',
                    value: a.buildsInProgress
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
}), d.register('eAUZP', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('bY0ar'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'ArrowUpOutlined';
    var _l = h.forwardRef(k);
}), d.register('bY0ar', function(e, f) {
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
}), d.register('UfZxY', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('gRbUn'),
        h = d('aK6ep');
    d('O0Kav');
    var i = d('u4s09');
    let j, k, l, m, n, o, p, q = a => a;
    var _r = a => (0, g.jsxs)(_s, {
        children: [
            (0, g.jsxs)(_t, {
                children: [
                    (0, g.jsx)(_u, {
                        className: a.icon
                    }),
                    (0, g.jsx)(_v, {
                        children: a.title
                    })
                ]
            }),
            (0, g.jsxs)(_w, {
                children: [
                    (0, g.jsx)(_x, {
                        children: (0, h.numberWithCommas)(a.value)
                    }),
                    a.label ? (0, g.jsx)(_y, {
                        children: a.label
                    }) : null,
                    a.footer ? a.footer : null
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
}), d.register('cLRT9', function(e, f) {
    a(e.exports, 'Container', function() {
        return _C;
    }), a(e.exports, 'Content', function() {
        return _D;
    }), a(e.exports, 'default', function() {
        return _B;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('wsTfV'),
        k = d('O0Kav'),
        l = d('u4s09'),
        m = d('iQGYU'),
        n = d('BNTvB'),
        o = d('2ieWy'),
        p = d('FFvEp'),
        q = d('Im+xd'),
        r = d('aK6ep'),
        s = d('tf3/Y'),
        t = d('GXLv6'),
        u = d('6jmvl'),
        v = d('b4rHF'),
        w = d('quE27');
    let x, y, z = a => a,
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
}), d.register('iQGYU', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('aK6ep');
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
    const _n = i.default.div(k || (k = (a => a)`
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
}), d.register('BNTvB', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('aK6ep'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('u4s09'),
        n = d('H0k0g'),
        o = d('6klVm');
    let p, q, r = a => a,
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
}), d.register('H0k0g', function(e, f) {
    a(e.exports, 'default', function() {
        return _D;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('pHUyf'),
        k = d('wsTfV'),
        l = d('O0Kav'),
        m = d('u4s09'),
        n = d('xpdi6'),
        o = d('JTTlV24'),
        p = d('P1KtI'),
        q = d('Xx64d'),
        r = d('6jmvl'),
        s = d('aK6ep'),
        t = d('TdWEF'),
        u = d('3Y4Gz');
    let v, w, x, y, z, A, B = a => a,
        C = class extends l.Component {
            render() {
                const D = this.props.imposter.people.filter(D => D.markedAsClear);
                return (0, i.jsxs)(_E, {
                    children: [
                        (0, i.jsxs)(_F, {
                            children: [
                                this.canShowClearList() ? (0, i.jsx)(_H, {
                                    children: (0, i.jsx)(u.default, {
                                        text: j.imposterStrings.clearList
                                    })
                                }) : null,
                                D.map(D => (0, i.jsx)(_I, {
                                    children: D.name
                                }, `clear-${ D.id }`))
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
}), d.register('pHUyf', function(e, f) {
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
}), d.register('xpdi6', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('VNIjL'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'BulbOutlined';
    var _l = h.forwardRef(k);
}), d.register('VNIjL', function(e, f) {
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
}), d.register('Xx64d', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('b4rHF'),
        h = d('ZE7Lv');
    var _i = () => {
        h.default.imposter.status === g.ImposterStatus.questions && (h.default.imposter.status = g.ImposterStatus.discussion);
    };
}), d.register('6klVm', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('gRbUn'),
        h = d('pHUyf'),
        i = d('O0Kav'),
        j = d('u4s09'),
        k = d('+PNPO'),
        l = d('JO4TW');
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
    const _p = j.default.div(m || (m = (a => a)`
  flex: 1;
  overflow: hidden;
  font-family: ${ 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`), h.imposterFontName);
}), d.register('+PNPO', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('D/xq1'),
        j = d('u4s09'),
        k = d('pHUyf'),
        l = d('3Y4Gz');
    let m, n, o, p = a => a;
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
}), d.register('JO4TW', function(e, f) {
    a(e.exports, 'default', function() {
        return _v;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('3Y4Gz'),
        j = d('aK6ep'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('u4s09');
    let n, o, p, q, r, s = a => a;
    const t = a => (0, h.jsxs)(_y, {
        children: [
            (0, h.jsx)(_z, {
                children: a.num
            }),
            (0, h.jsx)(_A, {
                children: (0, h.jsx)(i.default, {
                    text: `${ (0, j.plural)(a.stat, a.num) } left`
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
}), d.register('2ieWy', function(e, f) {
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
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('P1KtI'),
        k = d('pHUyf'),
        l = d('3Y4Gz'),
        m = d('tf3/Y'),
        n = d('aK6ep'),
        o = d('wsTfV'),
        p = d('b4rHF'),
        q = d('6jmvl'),
        r = d('O0Kav'),
        s = d('u4s09');
    let t, u, v, w, x, y, z, A = a => a,
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
}), d.register('FFvEp', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('P1KtI'),
        k = d('pHUyf'),
        l = d('3Y4Gz'),
        m = d('tf3/Y'),
        n = d('aK6ep'),
        o = d('b4rHF'),
        p = d('6jmvl'),
        q = d('O0Kav'),
        r = d('2ieWy');
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
            super(...a), (0, g.default)(this, 'possibleVotes', () => this.props.imposter.people.filter(a => !a.votedOff).length), (0, g.default)(this, 'endVoting', () => {
                this.props.imposter.status = o.ImposterStatus.votingResult;
            });
        }
    };
    s = (0, h.__decorate)([
        (0, p.inject)('imposter'),
        p.observer
    ], s);
    var _t = s;
}), d.register('Im+xd', function(e, f) {
    a(e.exports, 'Container', function() {
        return _A;
    }), a(e.exports, 'Content', function() {
        return _B;
    }), a(e.exports, 'default', function() {
        return _z;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('pHUyf'),
        k = d('O0Kav'),
        l = d('u4s09'),
        m = d('SIhgw'),
        n = d('WOGVO'),
        o = d('Ux7ex'),
        p = d('6jmvl'),
        q = d('b4rHF'),
        r = d('aK6ep'),
        s = d('tf3/Y');
    let t, u, v, w = a => a;
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
}), d.register('SIhgw', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('gRbUn'),
        h = d('tf3/Y'),
        i = d('aK6ep'),
        j = d('O0Kav');
    var _k = a => {
        const [l, m] = j.useState(!1);
        return j.useEffect(() => {
            setTimeout(() => {
                m(!0);
            }, 6770), (0, i.playSound)(h.default.imposter.tensionBuild, {
                volume: 0.53,
                onEnd: () => a.onFinish(),
                onError: () => {
                    setTimeout(a.onFinish, 10000);
                }
            });
        }, []), (0, g.jsxs)('div', {
            className: 'animated fadeIn',
            style: {
                animationDuration: '2s'
            },
            children: [
                a.name,
                ' was',
                l && (a.wasImposter ? ' an impostor.' : ' not an impostor.')
            ]
        });
    };
}), d.register('WOGVO', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('tf3/Y'),
        j = d('Yr0is');
    var _k = a => {
        const [l, m] = h.useState(!1);
        return (0, g.jsx)('div', {
            className: l ? 'animated fadeOut' : '',
            children: (0, g.jsx)(j.default, {
                text: `${ a.name } was voted off the ship.`,
                sound: i.default.imposter.typing,
                soundDuration: 3600,
                onFinish: () => {
                    setTimeout(() => m(!0), 2000), setTimeout(a.onFinish, 3000);
                }
            })
        });
    };
}), d.register('Yr0is', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('gRbUn'),
        h = d('aK6ep'),
        i = d('O0Kav'),
        j = d('6IszK');
    var _k = a => {
        i.useEffect(() => {
            a.sound && (0, h.playSound)(a.sound, {
                volume: a.volume
            });
        }, []);
        const l = a.text,
            m = a.pace ? a.pace : a.soundDuration ? Math.round(a.soundDuration / l.length) : 140;
        return (0, g.jsx)(j.WindupChildren, {
            onFinished: a.onFinish,
            children: (0, g.jsx)(j.Pace, {
                ms: m,
                children: l
            })
        });
    };
}), d.register('6IszK', function(e, f) {
    a(e.exports, 'Pace', function() {
        return _v;
    }), a(e.exports, 'WindupChildren', function() {
        return _L;
    });
    var g = d('O0Kav');
    d('1iyBy');

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
        return !(n.length > 0) && o.reduce((n, o) => i(o) && i(m) && n ? l(o) : n, !0);
    }

    function m([n, o]) {
        return 0 === o.length;
    }

    function n(o) {
        const p = _t(o);
        return m(p) ? p : n(p);
    }

    function o(p) {
        if (l(p))
            return p;
        const [q, r, s] = p, t = p => i(p) ? o(p) : p;
        return [
            [],
            [
                ...q.map(t),
                ...r.map(t)
            ],
            s
        ];
    }

    function p([q, r]) {
        const s = r.reduce((q, r) => i(r) && !l(r) ? _q(r) : q, void 0);
        if (s)
            return s;
        return q[q.length - 1];
    }

    function _q(r) {
        const s = p(r);
        return i(s) ? _q(s) : s;
    }

    function r([s, t]) {
        const u = s.map(s => {
                if (i(s)) {
                    const [v, w, x] = s;
                    return [
                        r(s),
                        x
                    ];
                }
                return s;
            }),
            [v] = t;
        if (i(v) && !l(v)) {
            const [w, x, y] = v;
            return [
                ...u,
                [
                    r(v),
                    y
                ]
            ];
        }
        return u;
    }

    function s([t, u]) {
        const [v] = u;
        return i(v) ? s(v) : v;
    }

    function _t(u) {
        if (m(u))
            return u;
        const [v, w, x] = u, [y, ...g] = w;
        if (i(y)) {
            const z = _t(y);
            return m(z) ? [
                [
                    ...v,
                    z
                ],
                g,
                x
            ] : [
                v,
                [
                    z,
                    ...g
                ],
                x
            ];
        }
        return [
            [
                ...v,
                y
            ],
            g,
            x
        ];
    }

    function u(v, w) {
        switch (v) {
            case '\u2014':
            case '\u2026':
                return 200;
            case '.':
            case ',':
                return 150;
            case '?':
            case '!':
                if ('!' !== w && '?' !== w)
                    return 150;
            case '-':
            case ' ':
            case '\n':
                return 0;
            default:
                return 20;
        }
    }
    const _v = ({
        children: w
    }) => b(g).createElement(b(g).Fragment, null, w);

    function x(y) {
        if (m(y))
            return;
        const [z, A, B] = y, [C] = A;
        return C && i(C) ? x(C) : B.pace;
    }
    const y = ({
        children: z
    }) => b(g).createElement(b(g).Fragment, null, z);

    function A(B) {
        return B.type === y;
    }

    function B(C) {
        const [D, E, F] = C, G = p(C), [H] = E;
        let I = [];
        return G && i(G) && I.push(...B(G)), H && i(H) && !l(H) && I.push(...B(H)), F.onChar && I.push(F.onChar), I;
    }

    function C(D) {
        return {
            windup: D,
            didFinishOnce: !1
        };
    }

    function D(E, F) {
        switch (F.type) {
            case 'replace':
                return C(F.windup);
            case 'next':
                return {
                    ...E,
                    windup: _t(E.windup)
                };
            case 'rewind':
                return {
                    windup: o(E.windup),
                        didFinishOnce: !1
                };
            case 'fast-forward':
                return {
                    ...E,
                    windup: n(E.windup)
                };
            case 'finish':
                return {
                    ...E,
                    didFinishOnce: !0
                };
            default:
                return E;
        }
    }

    function E(F, G) {
        const [{
            windup: H,
            didFinishOnce: I
        }, J] = (0, g.useReducer)(D, F, C), K = (0, g.useRef)(null), L = m(H), M = (0, g.useCallback)(() => {
            L || (K.current && clearTimeout(K.current), J({
                type: 'fast-forward'
            }));
        }, [L]), N = (0, g.useCallback)(() => {
            K.current && clearTimeout(K.current), J({
                type: 'rewind'
            });
        }, []);
        return (0, g.useEffect)(() => {
            J({
                type: 'replace',
                windup: F
            });
        }, [F]), (0, g.useEffect)(() => {
            K.current && clearTimeout(K.current), G.skipped && J({
                type: 'fast-forward'
            }), !1 === G.skipped && J({
                type: 'rewind'
            });
        }, [G.skipped]), (0, g.useEffect)(() => {
            const O = B(H),
                P = _q(H);
            O.length > 0 && P && O.forEach(O => {
                O(P);
            });
        }, [H]), (0, g.useEffect)(() => {
            if (!1 === I && L) {
                const O = setTimeout(() => {
                    G.onFinished && G.onFinished(), J({
                        type: 'finish'
                    });
                }, 0);
                return () => {
                    clearTimeout(O);
                };
            }
        }, [
            I,
            L,
            G
        ]), (0, g.useEffect)(() => {
            if (!L) {
                const O = x(H) || u,
                    P = _q(H),
                    Q = s(H);
                return K.current = setTimeout(() => {
                    J({
                        type: 'next'
                    });
                }, P ? O(P, Q) : 0), () => {
                    K.current && clearTimeout(K.current);
                };
            }
        }, [
            H,
            L
        ]), {
            windup: H,
            skip: M,
            rewind: N,
            isFinished: L
        };
    }
    const F = [
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

    function G(H) {
        const I = h(H) ? H[1] : H[2],
            J = h(H) ? H[0] : r(H),
            K = I.element || b(g).Fragment;
        if (I.props && Object.keys(I.props).includes('children'))
            return b(g).createElement(K, Object.assign({}, I.props));
        const L = J.reduce((H, b) => {
            if ('string' == typeof b) {
                const M = H.slice(0, H.length - 1),
                    N = H[H.length - 1];
                return N && 'string' == typeof N ? [
                    ...M,
                    N + b
                ] : [
                    ...H,
                    b
                ];
            }
            return [
                ...H,
                G(b)
            ];
        }, []);
        return 'string' == typeof I.element && F.includes(I.element) ? b(g).createElement(K, Object.assign({
            key: I.key
        }, I.props)) : b(g).createElement(K, Object.assign({
            key: I.key
        }, I.props), L);
    }
    const H = ({}) => null;
    const I = b(g).createContext({
        skip: () => {
            console.warn('Tried to use the useSkip hook outside of a WindupChildren component!!');
        },
        rewind: () => {
            console.warn('Tried to use the useRewind hook outside of a WindupChildren component!');
        },
        isFinished: !1
    });

    function J(K, L) {
        if ('string' == typeof L)
            return [
                ...K,
                ...L.split('')
            ];
        if ('number' == typeof L)
            return [
                ...K,
                ...L.toString().split('')
            ];
        if (!b(g).isValidElement(L))
            return K;
        const {
            children: M,
            ...N
        } = L.props, O = L.type === _v ? {
            pace: K => 'ms' in L.props ? L.props.ms : L.props.getPace(K)
        } : {};
        const P = A(L) ? {
                onChar: L.props.fn
            } : {},
            Q = L.key ? {
                key: L.key
            } : {};
        if (function(R) {
                return R.type === H;
            }(L))
            return [
                ...K,
                j(' ', {
                    element: b(g).Fragment,
                    ...Q,
                    props: {},
                    pace: () => L.props.ms
                })
            ];
        if (void 0 === M)
            return [
                ...K,
                j(' ', {
                    element: L.type,
                    props: N,
                    ...Q,
                    ...O,
                    ...P
                })
            ];
        if ('string' == typeof M)
            return [
                ...K,
                j(M, {
                    element: L.type,
                    props: N,
                    ...Q,
                    ...O,
                    ...P
                })
            ];
        if (M instanceof Function)
            return [
                ...K,
                j(' ', {
                    element: L.type,
                    props: {
                        children: M,
                        ...N
                    },
                    ...Q,
                    ...O,
                    ...P
                })
            ];
        const R = b(g).Children.toArray(M).reduce(J, []).map(K => {
            if (i(K)) {
                const [S, T, U] = K;
                return [
                    S,
                    T,
                    {
                        ...O,
                        ...P,
                        ...U
                    }
                ];
            }
            return K;
        });
        return [
            ...K,
            k(R, {
                element: L.type,
                props: N,
                ...Q,
                ...O,
                ...P
            })
        ];
    }

    function K(L) {
        return null == L ? '' : b(g).Children.map(L, L => 'string' == typeof L ? L : 'number' == typeof L ? L.toString() : b(g).isValidElement(L) ? `#${ L.key || '' }<${ K(L.props.children) }>` : '').join(',');
    }
    const _L = ({
        children: M,
        onFinished: N,
        skipped: O
    }) => {
        const P = function(Q, R) {
                return (0, g.useMemo)(Q, [K(R)]);
            }(() => k(b(g).Children.toArray(M).reduce(J, []), {
                element: void 0
            }), M),
            {
                windup: Q,
                skip: R,
                rewind: S,
                isFinished: T
            } = E(P, {
                onFinished: N,
                skipped: O
            });
        return b(g).createElement(I.Provider, {
            value: {
                skip: R,
                rewind: S,
                isFinished: T
            }
        }, G(Q));
    };
}), d.register('1iyBy', function(e, f) {
    function g(h, i, j) {
        const k = 'OffscreenCanvas' in window,
            l = document.createElement('canvas'),
            m = k ? l.transferControlToOffscreen() : l;
        m.width = i;
        const n = m.getContext('2d');
        if (n) {
            n.font = j;
            return h.split(' ').reduce((h, j) => {
                const [o] = h.slice(-1), p = [
                    ...o,
                    j
                ].join(' ');
                let {
                    width: q
                } = n.measureText(p);
                return q <= i ? [
                    ...h.slice(0, -1),
                    [
                        ...o,
                        j
                    ]
                ] : 0 === o.length ? [
                    ...h.slice(0, -1),
                    [j]
                ] : [
                    ...h,
                    [j]
                ];
            }, [
                []
            ]).map(h => h.join(' ')).join('\n');
        }
        return console.warn('No canvas context was found, so the string was left as is!'), h;
    }
    a(e.exports, 'default', function() {
        return _h;
    });
    var _h = function(i, j, k) {
        if (function(l) {
                return Array.isArray(l);
            }(i)) {
            return g(i.join(''), j, k).split('').reduce((i, j, k) => '\n' === j ? [
                ...i,
                k
            ] : i, []).reduce((i, j) => function(l, m) {
                const {
                    indexToInsertInto: n,
                    localPosition: o
                } = m.reduce(({
                    indexToInsertInto: p,
                    localPosition: q,
                    lengthOfPreceding: r
                }, _h, _h) => {
                    const s = _h.length + r;
                    return !p && !q && l < s ? {
                        indexToInsertInto: _h,
                        localPosition: l - r,
                        lengthOfPreceding: s
                    } : {
                        indexToInsertInto: p,
                        localPosition: q,
                        lengthOfPreceding: s
                    };
                }, {
                    indexToInsertInto: 0,
                    localPosition: 0,
                    lengthOfPreceding: 0
                });
                return p.map((l, p) => p === q ? l.slice(0, r) + '\n' + l.slice(r) : l).map(l => l.split('\n').map((l, p, q) => p < q.length - 2 && p > 0 ? l.trim() : p < q.length - 2 ? l.trimRight() : p > 0 ? l.trimLeft() : l).join('\n'));
            }(j, i), i);
        }
        return g(i, j, k);
    };
}), d.register('Ux7ex', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('gRbUn'),
        _h = d('tf3/Y'),
        i = d('aK6ep');
    d('O0Kav');
    var j = d('Yr0is');
    var _k = a => (0, g.jsx)(j.default, {
        text: 0 === a.remainingImposters ? '0 impostors remain. Our research is saved!' : `${ a.remainingImposters } ${ (0, i.plural)('impostor', a.remainingImposters) } remain${ 1 === a.remainingImposters ? 's' : '' }. ${ a.meetingsLeft } ${ (0, i.plural)('meeting', a.meetingsLeft) } left.`,
        sound: _h.default.imposter.typing,
        soundDuration: 3600,
        onFinish: () => {
            setTimeout(a.onFinish, 2200);
        }
    });
}), d.register('GXLv6', function(e, f) {
    a(e.exports, 'default', function() {
        return _y;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('tf3/Y'),
        k = d('aK6ep'),
        l = d('b4rHF'),
        m = d('quE27'),
        n = d('6jmvl'),
        o = d('O0Kav'),
        p = d('Im+xd'),
        q = d('Yr0is'),
        r = d('ZAfYf'),
        s = d('u4s09'),
        t = d('P1KtI');
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
    const _z = s.default.div(u || (u = (a => a)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`));
}), d.register('ZAfYf', function(e, f) {
    var g = d('O0Kav'),
        h = d('yweeT');
    e.exports = h(g);
}), d.register('yweeT', function(e, f) {
    var g = d('pgY+h'),
        h = d('goUq6'),
        i = d('PEAmC');
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
}), d.register('pgY+h', function(e, f) {
    var g = d('O0Kav'),
        h = d('oI94c');
    if (void 0 === g)
        throw Error('create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.');
    var i = new g.Component().updater;
    e.exports = h(g.Component, g.isValidElement, i);
}), d.register('oI94c', function(e, f) {
    var g = d('goUq6'),
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
    var j = 'mixins';
    e.exports = function(k, l, m) {
        var n = [],
            o = {
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
            p = {
                getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
            },
            q = {
                displayName: function(r, s) {
                    r.displayName = s;
                },
                mixins: function(r, s) {
                    if (s)
                        for (var t = 0; t < s.length; t++)
                            _s(r, s[t]);
                },
                childContextTypes: function(r, s) {
                    r.childContextTypes = g({}, r.childContextTypes, s);
                },
                contextTypes: function(r, s) {
                    r.contextTypes = g({}, r.contextTypes, s);
                },
                getDefaultProps: function(r, s) {
                    r.getDefaultProps ? r.getDefaultProps = _u(r.getDefaultProps, s) : r.getDefaultProps = s;
                },
                propTypes: function(r, s) {
                    r.propTypes = g({}, r.propTypes, s);
                },
                statics: function(r, s) {
                    ! function(t, u) {
                        if (!u)
                            return;
                        for (var v in u) {
                            var w = u[v];
                            if (u.hasOwnProperty(v)) {
                                if (i(!(v in q), 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', v), v in t)
                                    return i('DEFINE_MANY_MERGED' === (p.hasOwnProperty(v) ? p[v] : null), 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', v), void(t[v] = _u(t[v], w));
                                t[v] = w;
                            }
                        }
                    }(r, s);
                },
                autobind: function() {}
            };

        function r(s, t) {
            var u = o.hasOwnProperty(t) ? o[t] : null;
            _z.hasOwnProperty(t) && i('OVERRIDE_BASE' === u, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', t), s && i('DEFINE_MANY' === u || 'DEFINE_MANY_MERGED' === u, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', t);
        }

        function _s(t, u) {
            if (u) {
                i('function' != typeof u, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.'), i(!l(u), 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.');
                var v = t.prototype,
                    w = v.__reactAutoBindPairs;
                for (var x in (u.hasOwnProperty(j) && q.mixins(t, u.mixins), u))
                    if (u.hasOwnProperty(x) && x !== j) {
                        var y = u[x],
                            z = v.hasOwnProperty(x);
                        if (r(z, x), q.hasOwnProperty(x))
                            q[x](t, y);
                        else {
                            var A = o.hasOwnProperty(x);
                            if ('function' == typeof y && !A && !z && !1 !== u.autobind)
                                w.push(x, y), v[x] = y;
                            else if (z) {
                                var B = o[x];
                                i(A && ('DEFINE_MANY_MERGED' === B || 'DEFINE_MANY' === B), 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', B, x), 'DEFINE_MANY_MERGED' === B ? v[x] = _u(v[x], y) : 'DEFINE_MANY' === B && (v[x] = _v(v[x], y));
                            } else
                                v[x] = y;
                        }
                    }
            } else;
        }

        function t(u, v) {
            for (var w in (i(u && v && 'object' == typeof u && 'object' == typeof v, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'), v))
                v.hasOwnProperty(w) && (i(void 0 === u[w], 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', w), u[w] = v[w]);
            return u;
        }

        function _u(v, w) {
            return function() {
                var x = v.apply(this, arguments),
                    y = w.apply(this, arguments);
                if (null == x)
                    return y;
                if (null == y)
                    return x;
                var z = {};
                return t(z, x), t(z, y), z;
            };
        }

        function _v(w, x) {
            return function() {
                w.apply(this, arguments), x.apply(this, arguments);
            };
        }

        function w(x, y) {
            return y.bind(x);
        }
        var x = {
                componentDidMount: function() {
                    this.__isMounted = !0;
                }
            },
            y = {
                componentWillUnmount: function() {
                    this.__isMounted = !1;
                }
            },
            _z = {
                replaceState: function(A, B) {
                    this.updater.enqueueReplaceState(this, A, B);
                },
                isMounted: function() {
                    return !!this.__isMounted;
                }
            },
            A = function() {};
        return g(A.prototype, k.prototype, _z),
            function(B) {
                var C = function(D, E, F) {
                    this.__reactAutoBindPairs.length && function(G) {
                        for (var H = G.__reactAutoBindPairs, I = 0; I < H.length; I += 2) {
                            var J = H[I],
                                K = H[I + 1];
                            G[J] = w(G, K);
                        }
                    }(this), this.props = D, this.context = E, this.refs = h, this.updater = F || m, this.state = null;
                    var G = this.getInitialState ? this.getInitialState() : null;
                    i('object' == typeof G && !Array.isArray(G), '%s.getInitialState(): must return an object or null', C.displayName || 'ReactCompositeComponent'), this.state = G;
                };
                for (var D in (C.prototype = new A(), C.prototype.constructor = C, C.prototype.__reactAutoBindPairs = [], n.forEach(_s.bind(null, C)), _s(C, x), _s(C, B), _s(C, y), C.getDefaultProps && (C.defaultProps = C.getDefaultProps()), i(C.prototype.render, 'createClass(...): Class specification must implement a `render` method.'), o))
                    C.prototype[D] || (C.prototype[D] = null);
                return C;
            };
    };
}), d.register('PEAmC', function(e, f) {
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
            var r = j(p);
            k && (r = r.concat(k(p)));
            for (var s = 0; s < r.length; ++s) {
                var t = r[s];
                if (!(g[t] || h[t] || q && q[t])) {
                    var u = l(p, t);
                    try {
                        i(o, t, u);
                    } catch (e) {}
                }
            }
            return o;
        }
        return o;
    };
}), d.register('Yg/TP', function(e, f) {
    a(e.exports, 'GRID_BACKGROUND_CSS', function() {
        return _x;
    }), a(e.exports, 'default', function() {
        return _y;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('H8K0y'),
        j = d('u4s09'),
        k = d('wsTfV'),
        l = d('ZlO2H'),
        m = d('4p3Hr'),
        n = d('yvYEa'),
        o = d('6jmvl'),
        p = d('yrLp3'),
        q = d('NGM+H'),
        r = d('tf3/Y'),
        s = d('1idK1'),
        t = d('o4i76');
    let u, v, w = a => a;
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
}), d.register('H8K0y', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('4DUFg'),
        j = d('u4s09'),
        k = d('zw/fi'),
        l = d('BpQ2j');
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
    })(m || (m = (a => a)`
  justify-content: space-between;
  position: relative;
`));
}), d.register('4DUFg', function(e, f) {
    a(e.exports, 'default', function() {
        return _C;
    });
    var g = d('gRbUn'),
        h = d('wsTfV'),
        i = d('O0Kav'),
        j = d('u4s09'),
        k = d('79zb7'),
        l = d('1Ujlc'),
        m = d('6jmvl'),
        n = d('yrLp3'),
        o = d('9rEO42'),
        p = d('JyHUV'),
        q = d('bQWYI');
    let r, s, t, u, v, w, x = a => a;
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
        B = a => {
            const C = a.text.split(''),
                D = !C.includes('_') && a.noTimeLeft;
            return (0, g.jsxs)(g.Fragment, {
                children: [
                    (0, g.jsx)(p.ConfettiContainer, {
                        style: {
                            zIndex: D ? 9 : 0
                        },
                        children: (0, g.jsx)(b(o), {
                            config: p.confettiConfig,
                            active: D
                        })
                    }),
                    (0, g.jsx)(_I, {
                        children: C.map((a, b) => {
                            const E = `letter-${ b }`;
                            return ' ' !== a || D ? (0, g.jsx)(i.Fragment, {
                                children: a
                            }, E) : (0, g.jsx)(i.Fragment, {
                                children: '\xA0\xA0\xA0'
                            }, E);
                        })
                    })
                ]
            });
        };
    var _C = (0, m.observer)(a => {
        const {
            draw: {
                round: {
                    revealText: D,
                    drawer: E,
                    secondsLeft: F
                }
            }
        } = i.useContext(n.default), G = i.useRef(null), [H, I] = (0, q.default)(G), J = i.useMemo(() => 0 === F, [F]), K = i.useMemo(() => {
            let L = y;
            return (H < 790 || I < 700) && (L = z), (H < 680 || I < 530) && (L = A), L;
        }, [
            H,
            I
        ]);
        return (0, g.jsx)(_D, {
            className: a.isFadingOut ? 'animated fadeOut' : '',
            children: (0, g.jsxs)(_E, {
                ref: G,
                children: [
                    (0, g.jsx)(_G, {
                        children: (0, g.jsx)(B, {
                            text: D,
                            noTimeLeft: J
                        })
                    }),
                    (0, g.jsx)(_F, {
                        style: {
                            width: K.width,
                            height: K.height
                        },
                        children: (0, g.jsx)(l.default, {
                            width: K.width,
                            height: K.height
                        })
                    }),
                    (0, g.jsxs)(_H, {
                        children: [
                            (0, g.jsx)('b', {
                                children: 'Drawer:'
                            }),
                            ' ',
                            E.name
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
}), d.register('79zb7', function(e, f) {
    a(e.exports, 'HandDrawnDiv', function() {
        return _i;
    });
    var g = d('wsTfV');
    let h;
    const _i = d('u4s09').default.div(h || (h = (a => a)`
  border: solid
    ${ 0 }px
    ${ 0 };
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  overflow: hidden;
  -webkit-transform: translateZ(0); // needed in Safari for some weird reason
`), a => void 0 !== a.borderWidth ? a.borderWidth : 3, g.default.Black);
}), d.register('1Ujlc', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('gRbUn'),
        h = d('yrLp3'),
        i = d('6cikK'),
        j = d('JkQCT'),
        k = d('6jmvl'),
        l = d('O0Kav');
    var _m = (0, k.observer)(a => {
        const {
            draw: n
        } = l.useContext(h.default), o = l.useRef();
        return l.useEffect(() => {
            const p = (0, j.reaction)(() => n.latestLine, p => {
                    var q;
                    p && (null == o || null === (q = o.current) || void 0 === q || q.addLine(p));
                }),
                q = (0, j.reaction)(() => n.round.drawingBase64, p => {
                    var r;
                    p && (null == o || null === (r = o.current) || void 0 === r || r.drawImage(p));
                });
            return () => {
                p(), q();
            };
        }, []), (0, g.jsx)(i.default, {
            ref: o,
            height: a.height,
            width: a.width,
            canEdit: !1
        });
    });
}), d.register('9rEO42', function(e, f) {
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
            return function(j, k, l) {
                return k && i(j.prototype, k), l && i(j, l), j;
            };
        }(),
        i = d('O0Kav'),
        j = (g = i) && g.__esModule ? g : {
            default: g
        },
        k = d('izSQB0');
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
                    key: 'componentWillReceiveProps',
                    value: function(p) {
                        p.active && !this.props.active && (0, k.confetti)(this.container, p.config);
                    }
                },
                {
                    key: 'setRef',
                    value: function(p) {
                        this.container = p;
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
}), d.register('izSQB0', function(e, f) {
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
        return _l(g, u, q, r);
    };

    function g(h, i, j, k, _l) {
        return Array.from({
            length: i
        }).map(function(m, _n) {
            var o = document.createElement('div'),
                p = j[_n % j.length];
            return o.style['background-color'] = p, o.style.width = k, o.style.height = _l, o.style.position = 'absolute', o.style.willChange = 'transform, opacity', h.appendChild(o), o;
        });
    }

    function h(i, j, k, l) {
        var m = i * (Math.PI / 180),
            n = j * (Math.PI / 180);
        return {
            x: 0,
            y: 0,
            wobble: 10 * l(),
            wobbleSpeed: 0.1 + 0.1 * l(),
            velocity: 0.5 * k + l() * k,
            angle2D: -m + (0.5 * n - l() * n),
            angle3D: -Math.PI / 4 + l() * (Math.PI / 2),
            tiltAngle: l() * Math.PI,
            tiltAngleSpeed: 0.1 + 0.3 * l()
        };
    }

    function i(j, k, l, m) {
        var n = void 0;
        return new Promise(function(o) {
            requestAnimationFrame(function _y(p) {
                n || (n = p);
                var q = n === p ? 0 : (p - n) / m;
                k.forEach(function(r) {
                    return function(s, t, u) {
                        s.physics.x += Math.cos(s.physics.angle2D) * s.physics.velocity, s.physics.y += Math.sin(s.physics.angle2D) * s.physics.velocity, s.physics.z += Math.sin(s.physics.angle3D) * s.physics.velocity, s.physics.wobble += s.physics.wobbleSpeed, s.physics.velocity *= u, s.physics.y += 3, s.physics.tiltAngle += s.physics.tiltAngleSpeed;
                        var v = s.physics,
                            w = v.x,
                            x = v.y,
                            _y = v.tiltAngle,
                            z = v.wobble,
                            A = 'translate3d(' + (w + 10 * Math.cos(z)) + 'px, ' + (x + 10 * Math.sin(z)) + 'px, 0) rotate3d(1, 1, 1, ' + _y + 'rad)';
                        s.element.style.transform = A, s.element.style.opacity = 1 - t;
                    }(r, q, l);
                }), p - n < m ? requestAnimationFrame(_h) : (k.forEach(function(r) {
                    if (r.element.parentNode === j)
                        return j.removeChild(r.element);
                }), o());
            });
        });
    }
    var j = {
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
}), d.register('JyHUV', function(e, f) {
    a(e.exports, 'ConfettiContainer', function() {
        return _H;
    }), a(e.exports, 'confettiConfig', function() {
        return _I;
    }), a(e.exports, 'default', function() {
        return _K;
    });
    var g = d('s/YA9'),
        _h = d('gRbUn'),
        i = d('3Y4Gz'),
        j = d('KU8+q'),
        k = d('tf3/Y'),
        l = d('aK6ep'),
        m = d('wsTfV'),
        n = d('RcaOq'),
        o = d('RcqBP'),
        p = d('SAYZy'),
        q = d('O0Kav'),
        r = d('9rEO42'),
        s = d('u4s09');
    let t, u, v, w, x, y, z, A = a => a;
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
`), a => a.animationDelay, a => a.colors.background, a => a.colors.text, o.default.basic),
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
`), a => a.background, m.default.White, n.default.black),
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
            return (0, _h.jsxs)(_h.Fragment, {
                children: [
                    (0, _h.jsxs)(B, {
                        animationDelay: this.getAnimationDelay(),
                        colors: K,
                        className: 'animated zoomInDown',
                        children: [
                            (0, _h.jsx)(C, {
                                background: this.getCircleBackground(),
                                children: (0, _h.jsx)(D, {
                                    children: this.getCircleMessage()
                                })
                            }),
                            (0, _h.jsx)(E, {
                                children: this.getMainName()
                            }),
                            (0, _h.jsx)(F, {
                                children: (0, l.getMoney)(this.props.snapshot.balance)
                            }),
                            (0, _h.jsx)(G, {
                                children: this.getDescription()
                            })
                        ]
                    }),
                    1 === this.props.position ? (0, _h.jsx)(_H, {
                        children: (0, _h.jsx)(b(r), {
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
                        O = N.filter(L => L.name === M).length > 0 ? N.filter(L => L.name === M)[0] : N.filter(L => 'Default' === L.name)[0];
                    return 'Default' === O.name ? {
                        background: m.default.White,
                        text: m.default.Black
                    } : {
                        background: O.question.background,
                        text: O.question.text
                    };
                }
                const L = this.props.snapshot;
                return {
                    background: (0, p.darken)(0.1, (0, l.getTeamColor)(L.id)),
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
                return (0, _h.jsx)(i.default, {
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
}), d.register('bQWYI', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('O0Kav'),
        h = d('GkLtI'),
        i = d('Nnw7z');
    var _j = (a, e) => {
        const [k, l] = g.useState(() => {
            var m, n;
            const o = a && 'current' in a ? a.current : a;
            return o ? [
                o.offsetWidth,
                o.offsetHeight
            ] : [
                null !== (m = null == e ? void 0 : e.initialWidth) && void 0 !== m ? m : 0,
                null !== (n = null == e ? void 0 : e.initialHeight) && void 0 !== n ? n : 0
            ];
        });
        return (0, i.default)(() => {
            const m = a && 'current' in a ? a.current : a;
            m && l([
                m.offsetWidth,
                m.offsetHeight
            ]);
        }, [a]), (0, h.default)(a, a => {
            const m = a.target;
            l([
                m.offsetWidth,
                m.offsetHeight
            ]);
        }), k;
    };
}), d.register('GkLtI', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('1PitP'),
        h = d('Nnw7z'),
        i = d('xRoVg'),
        j = d('8Q3ZG');
    let k;
    const l = () => k || (k = function() {
        const m = new Map(),
            n = new(0, g.default)((0, j.default)((n, f) => {
                var o;
                if (1 === n.length)
                    null === (o = m.get(n[0].target)) || void 0 === o || o(n[0], f);
                else
                    for (let p = 0; p < n.length; p++) {
                        var q;
                        null === (q = m.get(n[p].target)) || void 0 === q || q(n[p], f);
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
                return p.subscribe(s, (n, p) => {
                    r || q.current(n, p);
                }), () => {
                    r = !0, p.unsubscribe(s);
                };
        }, [
            n,
            p,
            q
        ]), p.observer;
    };
}), d.register('Nnw7z', function(e, f) {
    a(e.exports, 'default', function() {
        return _g;
    });
    var _g = b(d('O0Kav'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), d.register('xRoVg', function(e, f) {
    a(e.exports, 'default', function() {
        return _h;
    });
    var g = d('O0Kav');
    var _h = a => {
        const i = g.useRef(a);
        return g.useEffect(() => {
            i.current = a;
        }), i;
    };
}), d.register('8Q3ZG', function(e, f) {
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
}), d.register('zw/fi', function(e, f) {
    a(e.exports, 'Container', function() {
        return _y;
    }), a(e.exports, 'default', function() {
        return _x;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('gt8og'),
        k = d('79zb7'),
        l = d('wsTfV'),
        m = d('aK6ep'),
        n = d('6jmvl'),
        o = d('yrLp3'),
        p = d('97U0P'),
        q = d('TdWEF'),
        r = d('tf3/Y'),
        s = d('1idK1');
    let t, u, v, w = a => a;
    var _x = (0, n.observer)(a => {
        const {
            draw: y
        } = h.useContext(o.default);
        h.useEffect(() => {
            if (0 === y.round.secondsLeft) {
                let z;
                (0, m.musicIsOn)() && (z = setTimeout(() => {
                    r.default.draw.background.fade(r.default.draw.background.volume(), s.DRAW_MODE_BACKGROUND_MUSIC_VOLUME, 6000);
                }, 3500));
                const A = setTimeout(() => a.fadeOut(), 6500),
                    B = setTimeout(() => {
                        (0, p.default)();
                    }, 8000);
                return () => {
                    clearTimeout(A), clearTimeout(B), z && clearTimeout(z);
                };
            }
        }, [y.round.secondsLeft]), h.useEffect(() => {
            if (r.default.draw.roundStart.play(), (0, m.musicIsOn)()) {
                r.default.draw.background.fade(r.default.draw.background.volume(), 0, 400);
                const z = r.default.draw.funk,
                    A = 1.3,
                    B = 2,
                    C = y.round.secondsLeft,
                    D = 0.6,
                    E = z.duration() - C - A - D - B;
                return z.volume(0), z.seek(E), setTimeout(() => {
                    z.play(), z.fade(0, s.DRAW_MODE_MUSIC_VOLUME, 9000);
                }, 1000 * D), () => {
                    z.playing && z.stop();
                };
            }
        }, []);
        return (0, g.jsxs)(_y, {
            children: [
                (0, g.jsx)('div', {
                    children: (0, g.jsx)(j.default, {
                        iconOnLeft: !0,
                        icon: (0, m.getAssetPath)('hand-drawn-clock.svg'),
                        value: y.round.secondsLeft
                    })
                }),
                (0, g.jsxs)('div', {
                    style: {
                        marginBottom: 4
                    },
                    className: y.round.secondsLeft ? '' : 'animated fadeOut',
                    children: [
                        (0, g.jsxs)(_z, {
                            onClick: () => {
                                y.showingFeed = !y.showingFeed;
                            },
                            children: [
                                y.showingFeed ? 'Hide' : 'Show',
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
}), d.register('gt8og', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('gRbUn'),
        h = d('wsTfV');
    d('O0Kav');
    var i = d('u4s09');
    let j, k, l, m, n = a => a;
    var _o = a => (0, g.jsxs)(_p, {
        iconOnLeft: a.iconOnLeft,
        children: [
            (0, g.jsx)(_q, {
                children: (0, g.jsx)(_r, {
                    src: a.icon
                })
            }),
            (0, g.jsx)(_s, {
                children: a.value
            })
        ]
    });
    const _p = i.default.div.attrs({
            className: 'flex flex-column'
        })(j || (j = n`
  align-items: ${ 0 };
`), a => a.iconOnLeft ? 'flex-start' : 'flex-end'),
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
}), d.register('97U0P', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('TdWEF'),
        h = d('aK6ep');
    var _i = () => {
        (0, h.send)(g.default.draw.endRound);
    };
}), d.register('1idK1', function(e, f) {
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
}), d.register('BpQ2j', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('gRbUn'),
        h = d('aK6ep'),
        i = d('yrLp3'),
        j = d('6jmvl'),
        k = d('O0Kav'),
        l = d('gt8og'),
        m = d('hFnJK'),
        n = d('zw/fi'),
        o = d('97U0P');
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
}), d.register('hFnJK', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('hQxzs'),
        j = d('u4s09'),
        k = d('wsTfV'),
        l = d('9zaF+'),
        m = d('79zb7'),
        n = d('aK6ep'),
        o = d('6jmvl'),
        p = d('3Y4Gz'),
        q = d('JkQCT'),
        r = d('yrLp3');
    let s, t, u = a => a;
    const v = (0, o.observer)(() => {
        const {
            draw: w
        } = h.useContext(r.default), [x, y] = h.useState([]), z = (0, l.debounce)(w => {
            y(x => [
                ...x,
                w
            ]);
        }, 120);
        h.useEffect(() => {
            const A = (0, q.reaction)(() => w.latestFeedItem, w => {
                w && (w => {
                    w.important ? y(A => [
                        ...A,
                        w
                    ]) : z(w);
                })({
                    ...w,
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
                    children: (0, l.takeRight)(x, A).map(w => (0, g.jsx)(_w, {
                        item: w
                    }, `draw-feed-${ w.id }`))
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
}), d.register('ZlO2H', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('dkNkL'),
        k = d('J3GmR'),
        l = d('ODKWD'),
        m = d('aK6ep'),
        n = d('tf3/Y'),
        o = d('1idK1');
    let p, q, r = a => a;
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
}), d.register('dkNkL', function(e, f) {
    a(e.exports, 'default', function() {
        return _u;
    });
    var g = d('gRbUn'),
        h = d('6cikK'),
        i = d('O0Kav'),
        j = d('79zb7'),
        k = d('u4s09'),
        l = d('bQWYI'),
        m = d('yrLp3'),
        n = d('wsTfV'),
        o = d('3Y4Gz');
    let p, q, r, s, t = a => a;
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
}), d.register('J3GmR', function(e, f) {
    a(e.exports, 'default', function() {
        return _u;
    });
    var g = d('gRbUn'),
        h = d('3Y4Gz'),
        i = d('aK6ep'),
        j = d('yrLp3'),
        k = d('Drlhd0'),
        l = d('6jmvl'),
        m = d('O0Kav'),
        n = d('u4s09');
    let o, p, q, r, s = a => a;
    const t = a => (0, g.jsxs)(_w, {
        children: [
            (0, g.jsx)(_x, {
                children: a.name
            }),
            (0, g.jsxs)(_y, {
                children: [
                    '+ ',
                    (0, i.getMoney)(a.amount)
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
                children: v.map(v => (0, g.jsx)(t, {
                    name: v.name,
                    amount: v.amount
                }, `addition-${ v.id }`))
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
}), d.register('Drlhd0', function(e, f) {
    a(e.exports, 'default', function() {
        return _g;
    });
    var _g = d('44iM223').default;
}), d.register('44iM223', function(e, f) {
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
}), d.register('ODKWD', function(e, f) {
    a(e.exports, 'default', function() {
        return _q;
    });
    var g = d('gRbUn'),
        h = d('JksFa'),
        i = d('P1KtI'),
        j = d('aK6ep'),
        k = d('NGM+H'),
        l = d('yrLp3'),
        m = d('6jmvl'),
        n = d('O0Kav'),
        o = d('u4s09');
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
    })(p || (p = (a => a)`
  flex-shrink: 0;
  padding: 25px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 16px rgb(0 0 0 / 50%);
`));
}), d.register('JksFa', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('xilD9'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'TrophyOutlined';
    var _l = h.forwardRef(k);
}), d.register('xilD9', function(e, f) {
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
}), d.register('4p3Hr', function(e, f) {
    a(e.exports, 'default', function() {
        return _w;
    });
    var g = d('gRbUn'),
        h = d('VNuyu'),
        i = d('3Y4Gz'),
        j = d('aK6ep'),
        k = d('yrLp3'),
        l = d('Drlhd0'),
        m = d('6jmvl'),
        n = d('O0Kav'),
        o = d('u4s09'),
        p = d('xvxoG');
    let q, r, s, t, u, v = a => a;
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
}), d.register('xvxoG', function(e, f) {
    a(e.exports, 'default', function() {
        return _w;
    });
    var g = d('gRbUn'),
        h = d('P1KtI'),
        i = d('TdWEF'),
        j = d('aK6ep'),
        k = d('yrLp3'),
        l = d('9zaF+'),
        m = d('6jmvl'),
        n = d('O0Kav'),
        o = d('u4s09'),
        p = d('79zb7');
    let q, r, s, t, u = a => a;
    const v = a => (0, g.jsxs)(_z, {
        children: [
            (0, g.jsx)(_A, {
                children: a.name
            }),
            (0, g.jsx)(h.default, {
                type: 'dashed',
                onClick: a.onSelect,
                children: 'Select'
            })
        ]
    });
    var _w = (0, m.observer)(() => {
        const {
            players: {
                players: x
            }
        } = n.useContext(k.default), y = x => {
            (0, j.send)(i.default.draw.createRound, x);
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
                x.slice().sort((x, y) => ((x, y) => {
                    const z = x.toLowerCase(),
                        A = y.toLowerCase();
                    return z < A ? -1 : z > A ? 1 : 0;
                })(x.name, y.name)).map(x => (0, g.jsx)(v, {
                    name: x.name,
                    onSelect: () => y(x.id)
                }, x.id))
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
}), d.register('yvYEa', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('gRbUn'),
        h = d('aK6ep'),
        i = d('yrLp3'),
        j = d('6jmvl'),
        k = d('O0Kav'),
        l = d('u4s09'),
        m = d('79zb7');
    let n, o, p, q, r, s = a => a;
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
}), d.register('o4i76', function(e, f) {
    a(e.exports, 'default', function() {
        return _y;
    });
    var g = d('gRbUn'),
        h = d('oFOzU'),
        i = d('P1KtI'),
        j = d('Dn89R'),
        k = d('tf3/Y'),
        l = d('wsTfV'),
        m = d('RcaOq'),
        n = d('NGM+H'),
        o = d('yrLp3'),
        p = d('6jmvl'),
        q = d('O0Kav'),
        r = d('u4s09'),
        s = d('1idK1');
    let t, u, v, w, x = a => a;
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
}), d.register('L06N1', function(e, f) {
    a(e.exports, 'default', function() {
        return _v;
    });
    var g = d('gRbUn'),
        h = d('SgcHJ'),
        i = d('O0Kav'),
        j = d('u4s09'),
        k = d('/86Nf'),
        l = d('JO7y6'),
        m = d('ff+uR'),
        n = d('/Y6to'),
        o = d('6jmvl'),
        p = d('yrLp3'),
        q = d('m+kUN'),
        r = d('brGS4');
    let s, t, u = a => a;
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
}), d.register('SgcHJ', function(e, f) {
    a(e.exports, 'AnimateSharedLayout', function() {
        return _l;
    });
    var g = d('4CEZy'),
        h = d('O0Kav'),
        i = d('lnHFO'),
        j = d('atnHh');
    let k = 0;
    const _l = ({
        children: m
    }) => (h.useEffect(() => {
        (0, g.warning)(!1, 'AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations');
    }, []), h.createElement(j.LayoutGroup, {
        id: (0, i.useConstant)(() => 'asl-' + k++)
    }, m));
}), d.register('atnHh', function(e, f) {
    a(e.exports, 'LayoutGroup', function() {
        return _m;
    });
    var g = d('O0Kav'),
        h = (g = d('O0Kav'), d('P/tpU')),
        i = d('G7Mi6'),
        j = d('1tp/4'),
        k = d('0iz8F');
    const l = a => !0 === a,
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
            null === v.current && ((n => l(!0 === n) || 'id' === n)(q) && w && (o = o ? w + '-' + o : w), v.current = {
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
}), d.register('G7Mi6', function(e, f) {
    a(e.exports, 'DeprecatedLayoutGroupContext', function() {
        return _g;
    });
    const _g = (0, d('O0Kav').createContext)(null);
}), d.register('1tp/4', function(e, f) {
    a(e.exports, 'useForceUpdate', function() {
        return _j;
    });
    var g = d('yVkz9'),
        h = d('O0Kav'),
        i = d('Tzvpe');

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
}), d.register('Tzvpe', function(e, f) {
    a(e.exports, 'useIsMounted', function() {
        return _i;
    });
    var g = d('O0Kav'),
        h = d('FEEJX');

    function _i() {
        const j = (0, g.useRef)(!1);
        return (0, h.useIsomorphicLayoutEffect)(() => (j.current = !0, () => {
            j.current = !1;
        }), []), j;
    }
}), d.register('0iz8F', function(e, f) {
    a(e.exports, 'nodeGroup', function() {
        return _h;
    });
    const g = a => !a.isLayoutDirty && a.willUpdate(!1);

    function _h() {
        const i = new Set(),
            j = new WeakMap(),
            k = () => i.forEach(g);
        return {
            add: g => {
                i.add(g), j.set(g, g.addEventListener('willUpdate', k));
            },
            remove: g => {
                var l;
                i.delete(g), null === (l = j.get(g)) || void 0 === l || l(), j.delete(g), k();
            },
            dirty: k
        };
    }
}), d.register('/86Nf', function(e, f) {
    a(e.exports, 'PardyHomeScreen', function() {
        return _p;
    }), a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('1kiT6'),
        j = d('rRQRG'),
        k = d('u4s09'),
        l = d('6HxAQ'),
        m = d('9aZ6t');
    let n, o, _p, q = a => a;
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
}), d.register('1kiT6', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('ZBFED'),
        j = d('u4s09'),
        k = d('6jmvl'),
        l = d('yrLp3');
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
            children: o.categories.map((f, d) => (0, g.jsx)(i.default, {
                category: f,
                width: p,
                totalCategories: o.categories.length,
                categoryIndex: d
            }, f.name))
        });
    });
    const _o = j.default.div.attrs({
        className: 'flex hc maxAll'
    })(m || (m = (a => a)`
  padding: 20px;
`));
}), d.register('ZBFED', function(e, f) {
    a(e.exports, 'default', function() {
        return _v;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('2JSWm'),
        j = d('u4s09'),
        k = d('wsTfV'),
        l = d('m+kUN'),
        m = d('6jmvl'),
        n = d('yrLp3'),
        o = d('aK6ep'),
        p = d('tf3/Y');
    let q, r, s, t, u = a => a;
    var _v = (0, m.observer)(a => {
        const {
            pardy: w
        } = h.useContext(n.default);
        return (0, g.jsxs)(_w, {
            width: a.width,
            children: [
                (0, g.jsx)(_x, {
                    children: (0, g.jsx)(_y, {
                        children: a.category.name
                    })
                }),
                (0, g.jsx)(_z, {
                    children: a.category.items.map((f, d) => (0, g.jsx)(i.default, {
                        id: f.id,
                        amount: f.amount,
                        totalCategories: a.totalCategories,
                        categoryIndex: a.categoryIndex,
                        itemIndex: d,
                        onSelect: () => {
                            return d = f.id, p.default.pardy.music.fade(p.default.pardy.music.volume(), 0, 500), (0, o.playSound)(p.default.pardy.riser, {}), w.currentRound = {
                                type: 'Normal',
                                value: {
                                    category: a.category.name,
                                    id: d
                                }
                            }, w.questionScreen = l.PardyQuestionScreen.preview, w.questionStatus = l.PardyQuestionStatus.preview, void(w.screen = l.PardyScreen.question);
                            var x;
                        },
                        disabled: w.disabledSections.includes(f.id)
                    }, `${ a.category.name }-${ f.id }`))
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
`), a => a.width),
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
}), d.register('2JSWm', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('gRbUn'),
        h = d('aK6ep'),
        i = d('wsTfV');
    d('O0Kav');
    var j = d('u4s09'),
        k = d('9aZ6t');
    let l, m, n, o = a => a;
    var _p = a => {
        const q = ((a, q, f) => {
                let r = !1,
                    s = !1;
                return a < q || (r = !0), f < 5 || (s = !0), {
                    top: !0,
                    right: r,
                    bottom: s,
                    left: !0
                };
            })(a.categoryIndex + 1, a.totalCategories, a.itemIndex + 1),
            r = a => a ? 2 : 0;
        return (0, g.jsx)(_q, {
            onClick: a.disabled ? void 0 : a.onSelect,
            style: {
                borderBottomWidth: r(q.bottom),
                borderTopWidth: r(q.top),
                borderLeftWidth: r(q.left),
                borderRightWidth: r(q.right),
                background: a.disabled ? 'rgba(0,0,0,0.2' : 'transparent',
                cursor: a.disabled ? 'not-allowed' : 'pointer'
            },
            children: (0, g.jsx)(_r, {
                style: {
                    opacity: a.disabled ? 0.5 : 1,
                    pointerEvents: a.disabled ? 'none' : 'auto'
                },
                layoutId: `item-${ a.id }`,
                children: (0, g.jsx)(_s, {
                    layoutId: `item-${ a.id }-amount`,
                    children: (0, h.getMoney)(a.amount)
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
}), d.register('rRQRG', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('mdwq/'),
        j = d('u4s09'),
        k = d('6jmvl'),
        l = d('yrLp3'),
        m = d('Y+ehH'),
        n = d('quE27');
    let o;
    var _p = (0, k.observer)(() => {
        const {
            players: q,
            pardy: {
                powers: r
            }
        } = h.useContext(l.default), s = (0, m.leaderboardSorter)(q.filteredPlayers), t = s[0], u = s.filter((q, r) => 0 !== r), v = q => {
            if (!q)
                return null;
            const w = r.find(r => r.id === q);
            return w ? w.background : null;
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
                    children: u.map((q, r) => (0, g.jsx)(i.default, {
                        size: 'normal',
                        backgroundColor: v(q.power),
                        name: q.name,
                        amount: q.balance,
                        place: (0, n.numberToRank)(r + 2)
                    }, q.id))
                }) : null
            ]
        });
    });
    const _q = j.default.div.attrs({
        className: 'flex wrap hc vc'
    })(o || (o = (a => a)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
  justify-content: center;
`));
}), d.register('mdwq/', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('8KqQ+'),
        i = d('Eh2Wh'),
        j = d('aK6ep'),
        k = d('RcaOq'),
        l = d('F3ltk');
    d('O0Kav');
    var m = d('u4s09');
    let n, o, p, q, r = a => a;
    var _s = a => {
        const t = 'normal' === a.size;
        return (0, g.jsxs)(_t, {
            className: t ? 'light-shadow' : 'medium-shadow',
            style: {
                width: t ? 300 : 600
            },
            children: [
                (0, g.jsx)(_u, {
                    children: a.place
                }),
                (0, g.jsx)(_v, {
                    style: {
                        height: t ? 150 : 200,
                        backgroundColor: a.backgroundColor || 'rgba(0,0,0,0.15)'
                    },
                    children: (0, g.jsx)(l.default, {
                        mode: 'single',
                        text: a.name,
                        noBold: !0
                    })
                }),
                (0, g.jsx)(_w, {
                    children: (0, j.getMoney)(a.amount)
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
}), d.register('6HxAQ', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('gRbUn'),
        h = d('P1KtI');
    d('O0Kav');
    var i = d('u4s09'),
        j = d('/86Nf');
    let k;
    var _l = a => (0, g.jsxs)(_m, {
        children: [
            (0, g.jsx)(h.default, {
                type: a.screen === j.PardyHomeScreen.board ? 'primary' : 'default',
                onClick: a.setToBoardScreen,
                style: {
                    width: 140,
                    marginRight: 10
                },
                children: 'Board'
            }),
            (0, g.jsx)(h.default, {
                type: a.screen === j.PardyHomeScreen.rankings ? 'primary' : 'default',
                onClick: a.setToRankingScreen,
                style: {
                    width: 140
                },
                children: 'Rankings'
            })
        ]
    });
    const _m = i.default.div.attrs({
        className: 'flex hc vc'
    })(k || (k = (a => a)`
  flex-shrink: 0;
  height: 60px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  z-index: 2;
`));
}), d.register('JO7y6', function(e, f) {
    a(e.exports, 'default', function() {
        return _E;
    });
    var g = d('gRbUn'),
        h = d('M3JwW'),
        i = d('tf3/Y'),
        j = d('aK6ep'),
        k = d('wsTfV'),
        l = d('RcqBP'),
        m = d('yrLp3'),
        n = d('m+kUN'),
        o = d('9aZ6t'),
        p = d('6jmvl'),
        q = d('O0Kav'),
        r = d('u4s09'),
        s = d('96BQR'),
        t = d('dI33I'),
        u = d('9Xhj9');
    let v, w, x, y, z, A, B = a => a;
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
}), d.register('96BQR', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
        musicVolume: 0.25,
        finaleMusicVolume: 0.45,
        countdownVolume: 0.4
    };
}), d.register('dI33I', function(e, f) {
    a(e.exports, 'default', function() {
        return _h;
    });
    var g = d('ZE7Lv');
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
        } = i.value, n = j.categories.find(i => i.name === m);
        if (!n)
            return null;
        const o = n.items.find(i => i.id === l);
        return o ? {
            categoryItemId: o.id,
            amount: o.amount,
            categoryName: n.name,
            questionId: o.questionId
        } : null;
    };
}), d.register('9Xhj9', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('m+kUN'),
        h = d('ZE7Lv');
    var _i = () => {
        h.default.pardy.currentRound = {
            type: 'Finale',
            value: void 0
        }, h.default.pardy.questionScreen = g.PardyQuestionScreen.finale, h.default.pardy.questionStatus = g.PardyQuestionStatus.preview, h.default.pardy.screen = g.PardyScreen.question;
    };
}), d.register('ff+uR', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('gRbUn'),
        h = d('yrLp3'),
        i = d('m+kUN'),
        j = d('6jmvl'),
        k = d('O0Kav'),
        l = d('0re0r'),
        m = d('oyK3l'),
        n = d('iBs13');
    var _o = (0, j.observer)(a => {
        const {
            pardy: p
        } = k.useContext(h.default), q = () => {
            p.questionScreen = i.PardyQuestionScreen.question;
        };
        return p.questionScreen === i.PardyQuestionScreen.preview ? (0, g.jsx)(m.default, {
            setToQuestionScreen: q
        }) : p.questionScreen === i.PardyQuestionScreen.finale ? (0, g.jsx)(n.default, {
            setToQuestionScreen: q
        }) : (0, g.jsx)(l.default, {});
    });
}), d.register('0re0r', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('EnP7H'),
        k = d('GAyLr'),
        l = d('Q1p0J'),
        m = d('9aZ6t'),
        n = d('6jmvl'),
        o = d('yrLp3'),
        p = d('m+kUN'),
        q = d('dI33I'),
        r = d('tf3/Y'),
        s = d('aK6ep');
    let t, u, v = a => a;
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
        const E = z => {
            y.questionStatus = p.PardyQuestionStatus.timesUp, z && ((0, s.playSound)(r.default.pardy.complete, {}), r.default.pardy.countdown.fade(r.default.pardy.countdown.volume(), 0, 600));
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
                        onSpaceBetweenChanged: y => A(y)
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
}), d.register('EnP7H', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('gRbUn'),
        h = d('yrLp3'),
        i = d('m+kUN'),
        j = d('SgcHJ'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('u4s09'),
        n = d('CRqOr'),
        o = d('utDOM'),
        p = d('lkNSx');
    let q;
    var _r = (0, k.observer)(a => {
        const {
            pardy: {
                questionStatus: s
            }
        } = l.useContext(h.default), [t, u] = l.useState(!1), v = s => {
            s && u(!0), a.setToTimesUpScreen(s);
        };
        return (0, g.jsx)(j.AnimateSharedLayout, {
            children: (0, g.jsx)(_s, {
                children: s === i.PardyQuestionStatus.preview ? (0, g.jsx)(o.default, {
                    setToAskScreen: a.setToAskScreen,
                    spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer
                }) : s === i.PardyQuestionStatus.timesUp ? (0, g.jsx)(p.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer,
                    everybodyAnswered: t,
                    inFinale: a.inFinale
                }) : s === i.PardyQuestionStatus.ask ? (0, g.jsx)(n.default, {
                    spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer,
                    setToTimesUpScreen: v
                }) : null
            })
        });
    });
    const _s = m.default.div.attrs({
        className: 'maxWidth'
    })(q || (q = (a => a)`
  height: 25%;
`));
}), d.register('CRqOr', function(e, f) {
    a(e.exports, 'default', function() {
        return _u;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('aJetf'),
        j = d('u4s09'),
        k = d('9aZ6t'),
        l = d('6jmvl'),
        m = d('yrLp3'),
        n = d('96BQR'),
        o = d('tf3/Y'),
        p = d('aK6ep');
    let q, r, s, t = a => a;
    var _u = (0, l.observer)(a => {
        const {
            pardy: {
                playersAnswered: v,
                playerCount: w
            },
            gameOptions: x
        } = h.useContext(m.default), y = x.modeOptions;
        h.useEffect(() => {
            v === w && w && a.setToTimesUpScreen(!0);
        }, [
            v,
            w
        ]), h.useEffect(() => {
            (0, p.playSound)(o.default.pardy.roundStart, {});
            const z = o.default.pardy.countdown;
            z.stop();
            const A = y.questionDuration,
                B = z.duration() - A - 6 - 0.6;
            z.volume(0), z.seek(B), setTimeout(() => {
                z.play(), z.fade(0, (0, p.musicIsOn)() ? n.default.countdownVolume : 0, 2700);
            }, 600);
        }, []);
        const z = h.useMemo(() => y.questionDuration, []);
        return (0, g.jsx)(_v, {
            children: (0, g.jsxs)(_w, {
                style: {
                    marginTop: a.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [
                    (0, g.jsx)(i.default, {
                        seconds: z,
                        onFinish: a.setToTimesUpScreen
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
                            v,
                            '/',
                            w,
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
}), d.register('aJetf', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('gRbUn'),
        h = d('/4RRY'),
        i = d('9aZ6t'),
        j = d('O0Kav'),
        k = d('u4s09');
    let l;
    var _m = a => {
        const [n, o] = j.useState(a.seconds);
        return (0, h.useIntervalWhen)(() => {
            n ? (o(a => a - 1), a.onTick && a.onTick()) : a.onFinish();
        }, 1000), (0, g.jsx)(_n, {
            layoutId: 'time-circle',
            transition: {
                duration: 0.5
            },
            style: a.style,
            children: n
        });
    };
    const _n = (0, k.default)(i.motion.div).attrs({
        className: 'flex hc vc'
    })(l || (l = (a => a)`
  height: 70px;
  width: 70px;
  font-size: 32px;
  border: 3px solid;
  border-radius: 50%;
  line-height: 1;
`));
}), d.register('/4RRY', function(e, f) {
    a(e.exports, 'useIntervalWhen', function() {
        return _h;
    });
    var g = d('O0Kav');

    function _h(i, j, k, l) {
        void 0 === j && (j = 0), void 0 === k && (k = !0), void 0 === l && (l = !1);
        var m = (0, g.useRef)();

        function n() {
            m.current && m.current();
        }
        (0, g.useEffect)(function() {
            m.current = i;
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
}), d.register('utDOM', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('gRbUn'),
        h = d('tf3/Y'),
        i = d('aK6ep');
    d('O0Kav');
    var j = d('u4s09'),
        k = d('aJetf');
    let l;
    var _m = a => (0, g.jsx)(_n, {
        children: (0, g.jsx)(k.default, {
            seconds: 3,
            onFinish: a.setToAskScreen,
            style: {
                marginTop: a.spaceBetweenQuestionAndEdgeOfContainer
            },
            onTick: () => {
                (0, i.playSound)(h.default.pardy.tick, {});
            }
        })
    });
    const _n = j.default.div.attrs({
        className: 'flex maxWidth maxHeight hc vc'
    })(l || (l = (a => a)``));
}), d.register('lkNSx', function(e, f) {
    a(e.exports, 'default', function() {
        return _u;
    });
    var g = d('gRbUn'),
        h = d('JyHUV'),
        i = d('O0Kav'),
        j = d('u4s09'),
        k = d('9rEO42'),
        l = d('Eh2Wh'),
        m = d('9aZ6t'),
        n = d('aK6ep'),
        o = d('tf3/Y'),
        p = d('96BQR');
    let q, r, s, t = a => a;
    var _u = a => {
        const [v, w] = i.useState(!1);
        return i.useEffect(() => {
            w(!0), setTimeout(() => {
                if ((0, n.musicIsOn)()) {
                    const x = a.inFinale ? o.default.pardy.finaleMusic : o.default.pardy.music;
                    x.fade(x.volume(), a.inFinale ? p.default.finaleMusicVolume : p.default.musicVolume, 1000);
                }
            }, 2500);
        }, []), (0, g.jsx)(_v, {
            children: (0, g.jsxs)(_w, {
                style: {
                    marginTop: a.spaceBetweenQuestionAndEdgeOfContainer
                },
                children: [
                    (0, g.jsx)(h.ConfettiContainer, {
                        style: {
                            zIndex: 0
                        },
                        children: (0, g.jsx)(b(k), {
                            active: v,
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
                        children: a.everybodyAnswered ? 'Everybody answered!' : 'Time\'s up!'
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
}), d.register('GAyLr', function(e, f) {
    a(e.exports, 'PardyQuestionContainer', function() {
        return _t;
    }), a(e.exports, 'PardyQuestionContent', function() {
        return _u;
    }), a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('bQWYI'),
        i = d('NevzH'),
        j = d('LBV5W'),
        k = d('YBABi'),
        l = d('6jmvl'),
        m = d('O0Kav'),
        n = d('u4s09'),
        o = d('N1Oov');
    let p, q, r = a => a;
    var _s = (0, l.observer)(a => {
        const t = m.useRef(),
            [, u] = (0, h.default)(t),
            v = m.useRef(),
            [, w] = (0, h.default)(v),
            x = m.useMemo(o.default, []);
        if (!x)
            return null;
        m.useEffect(() => {
            const y = (u - w) / 2;
            a.onSpaceBetweenChanged(y);
        }, [
            u,
            w
        ]);
        return (0, g.jsx)(_t, {
            ref: t,
            children: (0, g.jsx)(_u, {
                ref: v,
                children: x.text ? x.audio || x.image ? (0, g.jsx)(k.default, {
                    text: x.text,
                    image: x.image,
                    audio: x.audio,
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, g.jsx)(j.default, {
                    text: x.text || 'Question',
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, g.jsx)(i.default, {
                    image: x.image,
                    audio: x.audio,
                    latex: x.latex
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
}), d.register('N1Oov', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('ZE7Lv'),
        h = d('dI33I');
    var _i = () => {
        const j = (0, h.default)();
        if (!j)
            return null;
        return g.default.kit.questions.find(e => e._id === j.questionId);
    };
}), d.register('Q1p0J', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('gRbUn'),
        h = d('yrLp3'),
        i = d('m+kUN'),
        j = d('6jmvl'),
        k = d('O0Kav'),
        l = d('u4s09'),
        m = d('wG2My'),
        n = d('h2j1D');
    let o;
    var _p = (0, j.observer)(a => {
        const {
            pardy: {
                questionStatus: q
            }
        } = k.useContext(h.default);
        return (0, g.jsx)(_q, {
            children: q === i.PardyQuestionStatus.ask ? (0, g.jsx)(m.default, {
                spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer,
                setToTimesUpScreen: () => a.setToTimesUpScreen(!0)
            }) : q === i.PardyQuestionStatus.timesUp ? (0, g.jsx)(n.default, {
                spaceBetweenQuestionAndEdgeOfContainer: a.spaceBetweenQuestionAndEdgeOfContainer,
                animateOut: a.animateOut
            }) : null
        });
    });
    const _q = l.default.div.attrs({
        className: 'maxWidth flex hc'
    })(o || (o = (a => a)`
  height: 25%;
`));
}), d.register('wG2My', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('gRbUn'),
        h = d('P1KtI'),
        i = d('9aZ6t');
    d('O0Kav');
    var j = d('u4s09');
    let k, l, m = a => a;
    var _n = a => (0, g.jsx)(_o, {
        children: (0, g.jsx)(_p, {
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
            children: (0, g.jsx)(h.default, {
                onClick: a.setToTimesUpScreen,
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
}), d.register('h2j1D', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('gRbUn'),
        h = d('9aZ6t');
    d('O0Kav');
    var i = d('u4s09'),
        j = d('udTkc');
    let k, l, m, n = a => a;
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
    var _p = a => (0, g.jsx)(_q, {
        children: (0, g.jsx)(_r, {
            style: {
                marginBottom: a.spaceBetweenQuestionAndEdgeOfContainer
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
                    onLoad: a.animateOut
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
}), d.register('udTkc', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('9aZ6t'),
        i = d('u4s09');
    let j;
    var _k = a => (0, g.jsx)(_l, {
        style: {
            height: a.height || 15
        },
        children: (0, g.jsx)(h.motion.div, {
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
    const _l = i.default.div.attrs({
        className: 'maxWidth'
    })(j || (j = (a => a)`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 100px;
  overflow: hidden;
`));
}), d.register('oyK3l', function(e, f) {
    a(e.exports, 'default', function() {
        return _D;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('9aZ6t'),
        j = d('u4s09'),
        k = d('8KqQ+'),
        l = d('aK6ep'),
        m = d('udTkc'),
        n = d('6jmvl'),
        o = d('dI33I'),
        p = d('yrLp3'),
        q = d('m+kUN'),
        r = d('tf3/Y');
    let s, t, u, v, w, x, y, z, A = a => a;
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
    var _D = (0, n.observer)(a => {
        const {
            pardy: E
        } = h.useContext(p.default), [F, G] = h.useState(!1), [H, I] = h.useState(!1), J = h.useMemo(o.default, []);
        h.useEffect(() => {
            E.questionScreen = q.PardyQuestionScreen.preview;
        }, []);
        return J && J.categoryItemId && J.categoryName ? (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(_E, {
                    children: (0, g.jsx)(_F, {
                        layoutId: `item-${ J.categoryItemId }`,
                        transition: {
                            duration: 0.9
                        },
                        children: (0, g.jsxs)(_G, {
                            initial: C.in,
                            animate: H ? C.out : C.in,
                            transition: {
                                delay: 0.3,
                                duration: 0.7
                            },
                            onAnimationComplete: () => {
                                H && a.setToQuestionScreen();
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
                                    children: J.categoryName
                                }),
                                (0, g.jsx)(_J, {
                                    layoutId: `item-${ J.categoryItemId }-amount`,
                                    transition: {
                                        duration: 0.9
                                    },
                                    children: (0, l.getMoney)(J.amount)
                                })
                            ]
                        })
                    })
                }),
                (0, g.jsx)(_K, {
                    children: (0, g.jsx)(_L, {
                        initial: B.out,
                        animate: F ? B.out : B.in,
                        transition: {
                            delay: F ? 0 : 0.5,
                            duration: 0.5
                        },
                        children: (0, g.jsx)(m.default, {
                            delay: 1.2,
                            duration: 1.4,
                            onLoad: () => {
                                G(!0), I(!0), setTimeout(() => {
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
}), d.register('iBs13', function(e, f) {
    a(e.exports, 'ANIMATING_OUT_DURATION', function() {
        return _B;
    }), a(e.exports, 'default', function() {
        return _C;
    });
    var g = d('gRbUn'),
        h = d('Eh2Wh'),
        i = d('tf3/Y'),
        j = d('aK6ep'),
        k = d('yrLp3'),
        l = d('m+kUN'),
        m = d('9aZ6t'),
        n = d('6jmvl'),
        o = d('O0Kav'),
        p = d('u4s09'),
        q = d('96BQR'),
        r = d('fGqjX'),
        s = d('lYcWP');
    j = d('aK6ep');
    let t, u, v, w, x, y = a => a;
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
    var _C = (0, n.observer)(a => {
        const {
            pardy: D
        } = o.useContext(k.default), [E, F] = o.useState(!1);
        o.useEffect(() => {
            D.questionScreen = l.PardyQuestionScreen.finale;
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
                    animate: E ? z.movingOut : z.in,
                    transition: {
                        duration: E ? _B : 0.5
                    },
                    onAnimationComplete: () => {
                        E && a.setToQuestionScreen();
                    },
                    children: (0, g.jsxs)(_E, {
                        initial: A.out,
                        animate: E ? A.movingOut : A.in,
                        transition: {
                            duration: E ? _B : 1.4,
                            delay: E ? 0 : 3,
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
                                    F(!0), setTimeout(() => {
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
                            animatingOut: E
                        }),
                        (0, g.jsx)(s.default, {
                            animatingOut: E
                        }),
                        (0, g.jsx)(s.default, {
                            animatingOut: E
                        }),
                        (0, g.jsx)(s.default, {
                            animatingOut: E
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
}), d.register('fGqjX', function(e, f) {
    a(e.exports, 'default', function() {
        return _q;
    });
    var g = d('gRbUn'),
        h = d('P1KtI'),
        i = d('Eh2Wh'),
        j = d('yrLp3'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('u4s09');
    let n, o, p = a => a;
    var _q = (0, k.observer)(a => {
        const {
            pardy: r
        } = l.useContext(j.default);
        return (0, g.jsxs)(_r, {
            children: [
                (0, g.jsxs)(_s, {
                    children: [
                        r.betsPlaced,
                        '/',
                        r.playerCount,
                        ' bets placed'
                    ]
                }),
                (0, g.jsx)(h.default, {
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
}), d.register('lYcWP', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('/4RRY'),
        i = d('I7f6M'),
        j = d('9aZ6t'),
        k = d('P6MZO'),
        l = d('9zaF+'),
        m = d('O0Kav'),
        n = d('u4s09'),
        o = d('iBs13');
    let p, q, r = a => a;
    var _s = a => {
        const {
            x: t,
            y: u
        } = _v((0, l.random)(4000, 9000));
        return (0, g.jsx)(_t, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: a.animatingOut ? 0 : 1
            },
            transition: {
                duration: a.animatingOut ? o.ANIMATING_OUT_DURATION : 1.4
            },
            children: (0, g.jsx)(_u, {
                style: {
                    x: t,
                    y: u
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
                B = h => {
                    const C = (0, l.random)(0, z),
                        D = (0, l.random)(0, A);
                    h ? (x.set(C), y.set(D)) : ((0, i.animate)(x, C, {
                        duration: w / 1000,
                        ease: 'easeInOut'
                    }), (0, i.animate)(y, D, {
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
}), d.register('P6MZO', function(e, f) {
    a(e.exports, 'useMotionValue', function() {
        return _k;
    });
    var g = d('O0Kav'),
        h = d('EErEc'),
        i = d('gqmh2'),
        j = d('lnHFO');

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
}), d.register('/Y6to', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('gRbUn'),
        h = d('tf3/Y'),
        i = d('aK6ep'),
        j = d('9aZ6t'),
        k = d('O0Kav'),
        l = d('u4s09'),
        m = d('Dr5wN'),
        n = d('pQQFC'),
        o = d('VzaC7');
    let p, q, r = a => a;
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
    var _t = a => {
        const [u, v] = k.useState(!1), [w, x] = k.useState(0), y = {
            out: {
                background: p = '#388e3c',
                opacity: 0
            },
            in: {
                background: p,
                opacity: 1
            }
        };
        var z;
        return (0, g.jsx)(_u, {
            initial: {
                background: 'rgba(0, 0, 0, 0.2)',
                opacity: 1
            },
            animate: u ? y.out : y.in,
            transition: {
                delay: u ? 0 : 0.2,
                duration: 0.7,
                ease: 'easeOut'
            },
            onAnimationComplete: () => {
                u && a.setToHomeScreen();
            },
            children: (0, g.jsxs)(_v, {
                initial: s.initial,
                animate: u ? s.out : s.in,
                transition: {
                    duration: 0.7,
                    ease: 'easeOut'
                },
                children: [
                    (0, g.jsx)(o.default, {
                        spaceBetweenContentAndEdgeOfContainer: w
                    }),
                    (0, g.jsx)(m.default, {
                        onSpaceBetweenChanged: x
                    }),
                    (0, g.jsx)(n.default, {
                        spaceBetweenContentAndEdgeOfContainer: w,
                        exit: () => {
                            v(!0), setTimeout(() => {
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
}), d.register('Dr5wN', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('gRbUn'),
        h = d('bQWYI'),
        i = d('LBV5W'),
        j = d('NevzH'),
        k = d('O0Kav'),
        l = d('GAyLr'),
        m = d('N1Oov');
    var _n = a => {
        const o = k.useRef(),
            [, p] = (0, h.default)(o),
            q = k.useRef(),
            [, r] = (0, h.default)(q);
        k.useEffect(() => {
            const s = (p - r) / 2;
            a.onSpaceBetweenChanged(s);
        }, [
            p,
            r
        ]);
        const s = k.useMemo(m.default, []);
        if (!s)
            return null;
        const t = s.answers.find(a => a.correct);
        return (0, g.jsx)(l.PardyQuestionContainer, {
            ref: o,
            children: (0, g.jsx)(l.PardyQuestionContent, {
                ref: q,
                children: t ? t.text ? (0, g.jsx)(i.default, {
                    text: t.text,
                    noBold: !0,
                    allowGoogleTranslate: !1
                }) : (0, g.jsx)(j.default, {
                    image: t.image,
                    latex: t.latex
                }) : (0, g.jsx)(i.default, {
                    text: 'No Correct Answer!',
                    noBold: !0
                })
            })
        });
    };
}), d.register('pQQFC', function(e, f) {
    a(e.exports, 'default', function() {
        return _u;
    });
    var g = d('gRbUn'),
        h = d('P1KtI'),
        i = d('aK6ep'),
        j = d('yrLp3'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('u4s09'),
        n = d('9Xhj9');
    let o, p, q, r, s, t = a => a;
    var _u = (0, k.observer)(a => {
        const {
            pardy: {
                playerCount: v,
                playersAnsweredCorrectly: w,
                nameOfFirstPlayerToAnswerCorrectly: x,
                board: y,
                disabledSections: z,
                currentRound: A
            }
        } = l.useContext(j.default), B = l.useMemo(() => {
            if ('Finale' === A.type)
                return {
                    text: 'View Final Results',
                    handler: () => {
                        (0, i.endGame)();
                    }
                };
            let C = 0;
            return y.categories.forEach(a => {
                a.items.forEach(() => C += 1);
            }), z.length >= C ? {
                text: 'Continue to The Finale',
                handler: () => {
                    (0, n.default)();
                }
            } : {
                text: 'Continue',
                handler: () => {
                    a.exit();
                }
            };
        }, []);
        return (0, g.jsx)(_v, {
            children: (0, g.jsxs)(_w, {
                style: {
                    marginBottom: a.spaceBetweenContentAndEdgeOfContainer
                },
                children: [
                    (0, g.jsxs)('div', {
                        children: [
                            (0, g.jsxs)(_x, {
                                children: [
                                    w,
                                    '/',
                                    v,
                                    ' answered correctly'
                                ]
                            }),
                            x ? (0, g.jsxs)(_y, {
                                children: [
                                    x,
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
                            onClick: B.handler,
                            children: B.text
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
}), d.register('VzaC7', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('u4s09');
    let i, j, k, l = a => a;
    var _m = a => (0, g.jsx)(_n, {
        children: (0, g.jsx)(_o, {
            style: {
                marginTop: a.spaceBetweenContentAndEdgeOfContainer
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
}), d.register('brGS4', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('u4s09');
    let i, j, k = a => a;
    var _l = a => (0, g.jsxs)(_m, {
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
                children: a.children
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
}), d.register('GfHTV', function(e, f) {
    a(e.exports, 'default', function() {
        return _B;
    });
    var g = d('gRbUn'),
        h = d('RcaOq'),
        i = d('O0Kav'),
        j = d('u4s09'),
        k = d('wMvJS'),
        l = d('3LsI8'),
        m = d('xrxiN'),
        n = d('BZpB7'),
        o = d('6jmvl'),
        p = d('KG7jZ'),
        q = d('aK6ep'),
        r = d('tf3/Y'),
        s = d('1idK1'),
        t = d('Kbpg5'),
        u = d('yrLp3'),
        v = d('96BQR');
    let w, x, y = a => a;
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
            (0, q.inLavaMode)() && (C.backgroundColor = '#ac1900'), (0, q.inImposterMode)() && (C.backgroundColor = '#000a12'), (0, q.inDrawMode)() && (C.backgroundColor = '#f1f2f3');
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
}), d.register('wMvJS', function(e, f) {
    a(e.exports, 'default', function() {
        return _C;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('QZ0Z+'),
        k = d('AE7vR'),
        l = d('aK6ep'),
        m = d('RcaOq'),
        n = d('6jmvl'),
        o = d('O0Kav'),
        p = d('u4s09'),
        q = d('YSFE52');
    let r, s, t, u, v = a => a;
    const w = (a, e) => {
            const x = a.name.toUpperCase(),
                y = e.name.toUpperCase();
            return x < y ? -1 : x > y ? 1 : 0;
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
                            children: C.sort(w).map(C => (0, i.jsx)(j.default, {
                                'data-id': C.id,
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
                                    children: C.name
                                })
                            }, C.id))
                        })
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, g.default)(this, 'handleClick', a => {
                this.props.gameValues.bossId = a.currentTarget.dataset.id, this.props.gameValues.currentRoute = q.GameStatus.teams;
            });
        }
    };
    B = (0, h.__decorate)([
        (0, n.inject)('engine', 'players', 'gameValues'),
        n.observer
    ], B);
    var _C = B;
}), d.register('3LsI8', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('6jmvl'),
        k = d('O0Kav'),
        l = d('aK6ep'),
        m = d('wsTfV'),
        n = d('KSj+H'),
        o = d('R2nG3'),
        p = d('NmQt6');
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
}), d.register('KSj+H', function(e, f) {
    a(e.exports, 'default', function() {
        return _w;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('UkybP'),
        i = d('u4s09'),
        j = d('quE27'),
        k = d('gS4g327'),
        l = d('Bjl070'),
        m = d('meYTW'),
        n = d('dXXu0'),
        o = d('yruHD'),
        p = d('aPZ+w'),
        q = d('Eh2Wh'),
        r = d('HOIhZ');
    let s, t, u, v = a => a;
    var _w = a => {
        const {
            gameCode: x
        } = a, y = () => `${ (0, j.getDomain)() }/join?gc=${ x }`, z = () => {
            b(k)(y()), l.default.success('Game link copied');
        };
        var A, B, C;
        return (0, g.jsxs)(_x, {
            style: {
                background: null !== (A = a.background) && void 0 !== A ? A : 'rgba(48, 28, 86, 0.9)',
                color: null !== (B = a.color) && void 0 !== B ? B : r.default.White,
                height: null !== (C = a.height) && void 0 !== C ? C : 'auto'
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
                a.gameCode ? (0, g.jsx)(m.default, {
                    overlayInnerStyle: {
                        padding: 20
                    },
                    content: (0, g.jsxs)('div', {
                        children: [
                            (0, g.jsx)(n.default, {
                                value: y(),
                                size: 350,
                                bordered: !1
                            }),
                            (0, g.jsx)(p.default, {
                                block: !0,
                                onClick: z,
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
                        onClick: z,
                        children: x
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
}), d.register('UkybP', function(e, f) {
    a(e.exports, 'default', function() {
        return _h;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var _h = a => {
        const i = i => {
            i.stopPropagation(), a.onClick && a.onClick(i);
        };
        return (0, g.jsx)('div', {
            style: {
                ...a.style || {},
                pointerEvents: a.disable ? 'none' : 'all'
            },
            className: a.className,
            onMouseDown: i,
            onTouchStart: i,
            children: a.children
        });
    };
}), d.register('gS4g327', function(e, f) {
    var g = d('OG3rI27'),
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
}), d.register('OG3rI27', function(e, f) {
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
}), d.register('meYTW', function(e, f) {
    a(e.exports, 'default', function() {
        return _w;
    }, function(g) {
        return _w = g;
    });
    var g = d('/U36/'),
        h = d('O0Kav'),
        i = d('R2nG3'),
        j = d('Dn89R'),
        k = d('pM600'),
        l = d('v33Vy'),
        m = d('l89gJ'),
        n = d('/CEuo'),
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
    const p = a => {
            let {
                title: q,
                content: r,
                prefixCls: s
            } = a;
            return q || r ? h.createElement(h.Fragment, null, q && h.createElement('div', {
                className: `${ s }-title`
            }, (0, k.getRenderPropValue)(q)), h.createElement('div', {
                className: `${ s }-inner-content`
            }, (0, k.getRenderPropValue)(r))) : null;
        },
        q = h.forwardRef((a, e) => {
            var r, s;
            const {
                prefixCls: t,
                title: u,
                content: v,
                overlayClassName: _w,
                placement: x = 'top',
                trigger: y = 'hover',
                mouseEnterDelay: z = 0.1,
                mouseLeaveDelay: A = 0.1,
                overlayStyle: B = {},
                arrowPointAtCenter: C,
                arrow: D
            } = a, E = o(a, [
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
                getPrefixCls: F
            } = h.useContext(i.ConfigContext), G = F('popover', t), [H, I] = (0, n.default)(G), J = F(), K = b(g)(_w, I), L = null !== (s = null !== (r = 'boolean' != typeof D && (null == D ? void 0 : D.arrowPointAtCenter)) && void 0 !== r ? r : C) && void 0 !== s && s, M = null != D ? D : {
                arrowPointAtCenter: L
            };
            return H(h.createElement(j.default, Object.assign({
                placement: x,
                arrow: M,
                trigger: y,
                mouseEnterDelay: z,
                mouseLeaveDelay: A,
                overlayStyle: B
            }, E, {
                prefixCls: G,
                overlayClassName: K,
                ref: e,
                overlay: h.createElement(p, {
                    prefixCls: G,
                    title: u,
                    content: v
                }),
                transitionName: (0, l.getTransitionName)(J, 'zoom-big', E.transitionName),
                'data-popover-inject': !0
            })));
        });
    q._InternalPanelDoNotUseOrYouWillBeFired = m.default;
    var r = q;
}), d.register('pM600', function(e, f) {
    a(e.exports, 'getRenderPropValue', function() {
        return d;
    });
    const g = a => a ? 'function' == typeof a ? a() : a : null;
}), d.register('l89gJ', function(e, f) {
    a(e.exports, 'getOverlay', function() {
        return _n;
    }, function(g) {
        return _n = g;
    }), a(e.exports, 'RawPurePanel', function() {
        return _o;
    }, function(g) {
        return _o = g;
    }), a(e.exports, 'default', function() {
        return _p;
    }, function(g) {
        return _p = g;
    });
    var g = d('O0Kav'),
        h = d('/U36/'),
        i = d('/RwZG'),
        j = d('R2nG3'),
        k = d('/CEuo'),
        l = d('pM600'),
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
    const _n = (a, b, e) => {
        if (b || e)
            return g.createElement(g.Fragment, null, b && g.createElement('div', {
                className: `${ a }-title`
            }, (0, l.getRenderPropValue)(b)), g.createElement('div', {
                className: `${ a }-inner-content`
            }, (0, l.getRenderPropValue)(e)));
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
        }), x || _n(r, v, w)));
    }

    function _p(q) {
        const {
            prefixCls: r
        } = q, s = m(q, ['prefixCls']), {
            getPrefixCls: t
        } = g.useContext(j.ConfigContext), u = t('popover', r), [v, w] = (0, k.default)(u);
        return v(g.createElement(_o, Object.assign({}, s, {
            prefixCls: u,
            hashId: w
        })));
    }
}), d.register('/CEuo', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    });
    var g = d('4LyRj'),
        h = d('GhPPX'),
        i = d('qJkLY'),
        j = d('rkI78'),
        k = d('/zzpx'),
        l = d('PFjz/');
    const m = a => {
            const {
                componentCls: n,
                popoverBg: o,
                popoverColor: p,
                width: q,
                fontWeightStrong: r,
                popoverPadding: s,
                boxShadowSecondary: t,
                colorTextHeading: u,
                borderRadiusLG: v,
                zIndexPopup: w,
                marginXS: _x,
                colorBgElevated: y
            } = a;
            return [{
                    [n]: Object.assign(Object.assign({}, (0, k.resetComponent)(a)), {
                        position: 'absolute',
                        top: 0,
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        zIndex: w,
                        fontWeight: 'normal',
                        whiteSpace: 'normal',
                        textAlign: 'start',
                        cursor: 'auto',
                        userSelect: 'text',
                        '--antd-arrow-background-color': y,
                        '&-rtl': {
                            direction: 'rtl'
                        },
                        '&-hidden': {
                            display: 'none'
                        },
                        [`${ n }-content`]: {
                            position: 'relative'
                        },
                        [`${ n }-inner`]: {
                            backgroundColor: o,
                            backgroundClip: 'padding-box',
                            borderRadius: v,
                            boxShadow: t,
                            padding: s
                        },
                        [`${ n }-title`]: {
                            minWidth: q,
                            marginBottom: _x,
                            color: u,
                            fontWeight: r
                        },
                        [`${ n }-inner-content`]: {
                            color: p
                        }
                    })
                },
                (0, l.default)(a, {
                    colorBg: 'var(--antd-arrow-background-color)'
                }),
                {
                    [`${ n }-pure`]: {
                        position: 'relative',
                        maxWidth: 'none',
                        [`${ n }-content`]: {
                            display: 'inline-block'
                        }
                    }
                }
            ];
        },
        n = a => {
            const {
                componentCls: o
            } = a;
            return {
                [o]: j.PresetColors.map(f => {
                    const p = a[`${ f }-6`];
                    return {
                        [`&${ o }-${ f }`]: {
                            '--antd-arrow-background-color': p,
                            [`${ o }-inner`]: {
                                backgroundColor: p
                            },
                            [`${ o }-arrow`]: {
                                background: 'transparent'
                            }
                        }
                    };
                })
            };
        },
        o = a => {
            const {
                componentCls: p,
                lineWidth: q,
                lineType: r,
                colorSplit: s,
                paddingSM: t,
                controlHeight: u,
                fontSize: v,
                lineHeight: w,
                padding: x
            } = a, y = u - Math.round(v * w);
            return {
                [p]: {
                    [`${ p }-inner`]: {
                        padding: 0
                    },
                    [`${ p }-title`]: {
                        margin: 0,
                        padding: `${ y / 2 }px ${ x }px ${ y / 2 - q }px`,
                        borderBottom: `${ q }px ${ r } ${ s }`
                    },
                    [`${ p }-inner-content`]: {
                        padding: `${ t }px ${ x }px`
                    }
                }
            };
        };
    var p = (0, h.default)('Popover', a => {
        const {
            colorBgElevated: q,
            colorText: r,
            wireframe: s
        } = a, t = (0, i.merge)(a, {
            popoverBg: q,
            popoverColor: r,
            popoverPadding: 12
        });
        return [
            m(t),
            n(t),
            s && o(t),
            (0, g.initZoomMotion)(t, 'zoom-big')
        ];
    }, a => {
        let {
            zIndexPopupBase: q
        } = a;
        return {
            zIndexPopup: q + 30,
            width: 177
        };
    });
}), d.register('aPZ+w', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('gRbUn'),
        h = d('SAYZy'),
        i = d('O0Kav'),
        j = d('u4s09'),
        k = d('Eh2Wh'),
        l = d('HOIhZ');
    let m;
    var _n = a => {
        const o = a.size || 'default',
            p = i.useMemo(() => a.customColor ? a.customColor : a.disabled ? '#546e7a' : 'success' === a.type ? '#2e7d32' : 'danger' === a.type ? '#c62828' : '#3f51b5', [
                a.disabled,
                a.type,
                a.customColor
            ]),
            q = i.useMemo(() => (0, h.darken)(0.1, p), [p]),
            r = i.useMemo(() => 'small' === o || 'default' === o ? 14 : 20, [o]),
            s = i.useMemo(() => 'small' === o ? 6 : 'default' === o ? 8 : 12, [o]),
            t = i.useMemo(() => {
                const u = 'small' === o ? '8px' : '12px';
                return a.customHorizontalPadding ? `${ u } ${ a.customHorizontalPadding }px` : 'small' === o ? `${ u } 24px` : 'default' === o ? `${ u } 28px` : `${ u } 42px`;
            }, [
                o,
                a.customHorizontalPadding
            ]),
            u = i.useMemo(() => 'small' === o ? 41 : 49, [o]),
            v = i.useMemo(() => a.customFontWeight ? a.customFontWeight : 'large' === o ? k.FontWeights.Bold : k.FontWeights.Normal, [
                a.customFontWeight,
                o
            ]),
            w = () => {
                a.disabled || a.onClick && a.onClick();
            };
        return (0, g.jsx)(_o, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: u
            }, a.style || {}),
            children: (0, g.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': a.ariaLabel,
                onClick: a.usePointerDownEvent ? void 0 : w,
                onPointerDown: a.usePointerDownEvent ? w : void 0,
                style: {
                    cursor: a.disabled ? 'not-allowed' : 'pointer',
                    width: a.block ? '100%' : 'auto'
                },
                children: [
                    (0, g.jsx)('span', {
                        className: 'btn-shadow',
                        style: {
                            borderRadius: s
                        }
                    }),
                    (0, g.jsx)('span', {
                        className: 'btn-edge',
                        style: {
                            background: q,
                            borderRadius: s
                        }
                    }),
                    (0, g.jsx)('span', {
                        className: 'btn-front',
                        style: {
                            background: p,
                            fontSize: r,
                            borderRadius: s,
                            padding: t,
                            fontWeight: v
                        },
                        children: a.children
                    })
                ]
            })
        });
    };
    const _o = j.default.div.attrs({
        className: 'flex'
    })(m || (m = (a => a)`
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
}), d.register('HOIhZ', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), d.register('xrxiN', function(e, f) {
    a(e.exports, 'default', function() {
        return _A;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('3Y4Gz'),
        k = d('aK6ep'),
        l = d('6jmvl'),
        m = d('O0Kav'),
        n = d('u4s09'),
        o = d('YSFE52'),
        p = d('pHUyf'),
        q = d('wsTfV'),
        r = d('BA14D'),
        s = d('g7UP0'),
        t = d('YVQfE'),
        u = d('YXb2d'),
        v = d('JksFa'),
        w = d('8sxYw24');
    let x;
    const y = n.default.div(x || (x = (a => a)`
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
            super(...a), (0, g.default)(this, 'getContainerBackground', () => (0, k.inDrawMode)() ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.4)'), (0, g.default)(this, 'getContainerColor', () => (0, k.inDrawMode)() ? q.default.Black : q.default.White), (0, g.default)(this, 'getNoun', a => {
                let A = 'player';
                return (0, k.inTeamMode)() && (A = 'team'), a && (A += 's'), A;
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
}), d.register('BA14D', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('+iTmi'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'CheckOutlined';
    var _l = h.forwardRef(k);
}), d.register('+iTmi', function(e, f) {
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
}), d.register('g7UP0', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('lKKrt'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'ClockCircleOutlined';
    var _l = h.forwardRef(k);
}), d.register('lKKrt', function(e, f) {
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
}), d.register('YVQfE', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('GcyQb'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'HighlightOutlined';
    var _l = h.forwardRef(k);
}), d.register('GcyQb', function(e, f) {
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
}), d.register('YXb2d', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('iJyyQ'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'RocketOutlined';
    var _l = h.forwardRef(k);
}), d.register('iJyyQ', function(e, f) {
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
}), d.register('8sxYw24', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('2lnmQ24'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'UsergroupAddOutlined';
    var _l = h.forwardRef(k);
}), d.register('2lnmQ24', function(e, f) {
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
}), d.register('BZpB7', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('6jmvl'),
        k = d('O0Kav'),
        l = d('u4s09'),
        m = d('TjXHd'),
        n = d('RakwQ'),
        o = d('wsTfV'),
        p = d('aK6ep');
    let q, r, s, t = a => a;
    const u = l.default.div.attrs({
            className: 'scroll-y'
        })(q || (q = t`
  flex: 1;
  min-height: 0;
  color: ${ 0 };
`), a => a.color),
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
                            children: this.props.players.filteredPlayers.reverse().map(a => (0, i.jsx)(m.default, {
                                player: a
                            }, a.id))
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
}), d.register('TjXHd', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('Dn89R'),
        k = d('aK6ep'),
        l = d('RcaOq'),
        m = d('6jmvl'),
        n = d('O0Kav');
    let o;
    const p = d('u4s09').default.div(o || (o = (a => a)`
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
`), a => a.showBorder ? '2px solid' : 'none', l.default.normal);
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
}), d.register('RakwQ', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('gRbUn'),
        h = d('aK6ep'),
        i = d('RcaOq'),
        j = d('O0Kav'),
        k = d('u4s09'),
        l = d('pv8Ar');
    let m, n, o = a => a;
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
    var _r = a => {
        const {
            amountOfPlayers: s
        } = a, t = j.useMemo(() => (0, h.inPardyMode)() ? 'contestant' : 'player', []);
        return (0, g.jsxs)(p, {
            children: [
                (0, g.jsx)(q, {
                    children: `${ s } ${ (0, h.plural)(t, s) }`
                }),
                (0, g.jsx)(l.default, {})
            ]
        });
    };
}), d.register('pv8Ar', function(e, f) {
    a(e.exports, 'default', function() {
        return _y;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('aK6ep'),
        k = d('wsTfV'),
        l = d('RcaOq'),
        m = d('RcqBP'),
        n = d('6jmvl'),
        o = d('SAYZy'),
        p = d('O0Kav'),
        q = d('u4s09'),
        r = d('YSFE52');
    let s, t, u = a => a;
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
`), a => a.disabled ? k.default.DisabledGray : a.customColor || k.default.SuccessGreen, k.default.White, l.default.black, m.default.basic, a => a.disabled ? 'not-allowed' : 'pointer', a => a.disabled ? k.default.DisabledGray : (0, o.lighten)(0.1, a.customColor || k.default.SuccessGreen));
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
                    const B = Math.max(3, 2 * z.modeOptions.numberOfImposters) - y;
                    if (B > 0 && (0, j.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ B } more ${ (0, j.plural)(A, B) } needed`
                        };
                }
                if ((0, j.inDrawMode)()) {
                    const B = 2 - y;
                    if (B > 0 && (0, j.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ B } more ${ (0, j.plural)(A, B) } needed`
                        };
                }
                if ((0, j.inThanosMode)()) {
                    const B = 2 - y;
                    if (B > 0 && (0, j.inProduction)())
                        return {
                            disabled: !0,
                            text: `${ B } more ${ (0, j.plural)(A, B) } needed`
                        };
                }
                if ((0, j.inTeamMode)() && !this.props.onTeamScreen) {
                    const B = 2 * (z.modeOptions.playersPerTeam || 4) - y;
                    return B > 0 && (0, j.inProduction)() ? {
                        disabled: !0,
                        text: `${ B } more ${ (0, j.plural)(A, B) } needed`
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
}), d.register('KG7jZ', function(e, f) {
    a(e.exports, 'default', function() {
        return _u;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('tf3/Y'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('u4s09'),
        n = d('YSFE52'),
        o = d('quE27');
    let p, q, r, s = a => a;
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
            ]), (0, g.default)(this, 'setStage', a => {
                const u = this.getStages()[a];
                if (!u)
                    return this.props.gameValues.currentRoute = n.GameStatus.gameplay, void(this.props.ui.showingLavaPreScreen = !1);
                this.setState({
                    content: u.content
                }), setTimeout(() => this.setStage(a + 1), u.delay);
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
}), d.register('LPaIR', function(e, f) {
    a(e.exports, 'default', function() {
        return _m;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('6jmvl'),
        j = d('O0Kav'),
        k = d('e1grD');
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
}), d.register('e1grD', function(e, f) {
    a(e.exports, 'Container', function() {
        return _y;
    }), a(e.exports, 'default', function() {
        return _D;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('tf3/Y'),
        k = d('aK6ep'),
        l = d('wsTfV'),
        m = d('RcaOq'),
        n = d('9zaF+'),
        o = d('6jmvl'),
        p = d('O0Kav'),
        q = d('u4s09'),
        r = d('YSFE52'),
        s = d('K/+IR');
    let t, u, v = a => a;
    const w = a => new Promise(e => setTimeout(() => e(), a)),
        x = a => {
            let y = '';
            return a.forEach((f, d) => {
                y += f, d + 1 !== a.length && (y += ', ');
            }), y;
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
                                    ` ${ x(this.props.gameValues.thanosValues.saved.map(a => a.name)) }`
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
                                    ` ${ x(this.props.gameValues.thanosValues.snapped.map(a => a.name)) }`
                                ]
                            })
                        ]
                    })
                ]
            }) : null), (0, g.default)(this, 'showResults', async () => {
                const D = [];
                this.props.gameValues.thanosValues.saved.forEach(e => D.push({
                    survives: !0,
                    id: e.id,
                    name: e.name
                })), this.props.gameValues.thanosValues.snapped.forEach(e => D.push({
                    survives: !1,
                    id: e.id,
                    name: e.name
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
}), d.register('K/+IR', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('s/YA9'),
        h = d('gRbUn'),
        i = d('tf3/Y'),
        j = d('O0Kav');
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
}), d.register('eRiQf', function(e, f) {
    a(e.exports, 'default', function() {
        return _B;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('tf3/Y'),
        k = d('aK6ep'),
        l = d('RcaOq'),
        m = d('JkQCT'),
        n = d('6jmvl'),
        o = d('O0Kav'),
        p = d('u4s09'),
        q = d('Nafhc'),
        r = d('7eYit'),
        s = d('gDrAC'),
        t = d('y0LoT'),
        u = d('bQAic'),
        v = d('P+RPy'),
        w = d('WkSa8'),
        x = d('+7kD3');
    let y;
    const z = p.default.div(y || (y = (a => a)`
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
            }), (0, g.default)(this, 'getContent', a => (0, k.inBossBattleMode)() && !a ? (0, i.jsx)(i.Fragment, {
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
}), d.register('Nafhc', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('tf3/Y'),
        k = d('wsTfV'),
        l = d('6jmvl'),
        m = d('O0Kav'),
        n = d('u4s09'),
        o = d('quE27');
    let p;
    const q = 'The Boss',
        r = a => (0, i.jsx)('div', {
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
                    const u = this.props.players.teams.find(t => t.id === q);
                    u && u.players[0] && (t = u.players[0]);
                }
                return t;
            }), (0, g.default)(this, 'bossWon', () => {
                let t = !0;
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const u = this.props.players.teams.find(t => t.id === q);
                    if (u) {
                        const v = u.balance,
                            w = this.props.players.teams.find(t => t.id !== q);
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
    const _u = n.default.div(p || (p = (a => a)`
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
}), d.register('7eYit', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    }), a(e.exports, 'BackgroundMove', function() {
        return _y;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('KU8+q'),
        j = d('gDrAC'),
        k = d('3Y4Gz'),
        l = d('tf3/Y'),
        m = d('6jmvl'),
        n = d('O0Kav'),
        o = d('u4s09'),
        p = d('e1grD'),
        q = d('1PtQC'),
        r = d('quE27');
    let s, t, u, v = a => a;
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
}), d.register('gDrAC', function(e, f) {
    a(e.exports, 'default', function() {
        return _E;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('YVQfE'),
        k = d('0PtLD'),
        l = d('SIUee'),
        m = d('P1KtI'),
        n = d('2DT5h'),
        o = d('TdWEF'),
        p = d('aK6ep'),
        q = d('RcaOq'),
        r = d('RcqBP'),
        s = d('6jmvl'),
        t = d('O0Kav'),
        u = d('u4s09'),
        v = d('wsTfV');
    let w, x, y, z = a => a;
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
`), a => a.customCSS ? a.customCSS : null),
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
}), d.register('0PtLD', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('EDeXS'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'RedoOutlined';
    var _l = h.forwardRef(k);
}), d.register('EDeXS', function(e, f) {
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
}), d.register('SIUee', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('Eumpy'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'SolutionOutlined';
    var _l = h.forwardRef(k);
}), d.register('Eumpy', function(e, f) {
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
}), d.register('2DT5h', function(e, f) {
    a(e.exports, 'getClappingEmoji', function() {
        return d;
    });
    const g = () => '\uD83D\uDC4F';
}), d.register('y0LoT', function(e, f) {
    a(e.exports, 'default', function() {
        return _u;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('Y+ehH'),
        j = d('JyHUV'),
        k = d('aK6ep'),
        l = d('6jmvl'),
        m = d('O0Kav'),
        n = d('u4s09');
    let o, p, q = a => a;
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
}), d.register('bQAic', function(e, f) {
    a(e.exports, 'default', function() {
        return _B;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('O0Kav'),
        k = d('gDrAC'),
        l = d('u4s09'),
        m = d('I0Xu4'),
        n = d('RcaOq'),
        o = d('Qpn2C'),
        p = d('7eYit'),
        q = d('ql6u9'),
        r = d('tf3/Y'),
        s = d('wsTfV'),
        t = d('aK6ep'),
        u = d('6jmvl');
    let v, w, x, y, z = a => a,
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
}), d.register('I0Xu4', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('gRbUn'),
        h = d('aK6ep');
    d('O0Kav');
    var i = d('u4s09'),
        j = d('PG7oh');
    let k, l, m, n, o = a => a;
    var _p = a => (0, g.jsxs)(_q, {
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
                        children: (0, j.getTimerFromSeconds)(a.seconds)
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
}), d.register('Qpn2C', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('gRbUn'),
        h = d('quE27');
    d('O0Kav');
    var i = d('u4s09'),
        j = d('UfZxY');
    let k, l, m = a => a;
    var _n = a => (0, g.jsxs)(_o, {
        children: [
            (0, g.jsx)(_p, {
                children: (0, g.jsx)(j.default, {
                    icon: 'fas fa-building',
                    title: 'Building Height',
                    value: a.buildHeight,
                    label: (0, h.plural)('block', a.buildHeight)
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
                    value: a.pieceCount,
                    label: (0, h.plural)('piece', a.pieceCount)
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
}), d.register('ql6u9', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('6jmvl'),
        j = d('O0Kav'),
        k = d('u4s09'),
        l = d('KU8+q');
    let m, n = class extends j.Component {
        render() {
            return (0, h.jsxs)(_p, {
                children: [
                    (0, h.jsx)('b', {
                        children: 'Builders:'
                    }),
                    ' ',
                    (0, l.getTeamPlayerNames)(this.props.players.players.map(a => a.name))
                ]
            });
        }
    };
    n = (0, g.__decorate)([
        (0, i.inject)('players'),
        i.observer
    ], n);
    var _o = n;
    const _p = k.default.div(m || (m = (a => a)`
  width: 90%;
  max-width: 732px;
  font-size: 21px;
  opacity: 0.8;
  margin-top: 50px;
`));
}), d.register('P+RPy', function(e, f) {
    a(e.exports, 'default', function() {
        return _p;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('cLRT9'),
        j = d('iQGYU'),
        k = d('gDrAC'),
        l = d('Vy9Oo'),
        m = d('u4s09');
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
    })(n || (n = (a => a)`
  flex: 1;
  animation-duration: 1.8s;
`));
}), d.register('Vy9Oo', function(e, f) {
    a(e.exports, 'default', function() {
        return _B;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('pHUyf'),
        k = d('TdWEF'),
        l = d('tf3/Y'),
        m = d('aK6ep'),
        n = d('b4rHF'),
        o = d('6jmvl'),
        p = d('O0Kav'),
        q = d('u4s09'),
        r = d('KU8+q');
    let s, t, u, v, w, x, y, z = a => a,
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
                                        (0, m.plural)('Impostor', this.props.imposter.people.filter(B => B.role === n.PersonRole.imposter).length),
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
                super(...a), (0, g.default)(this, 'impostersWon', () => this.props.imposter.impostersLeft >= 1), (0, g.default)(this, 'imposterNames', () => (0, r.getTeamPlayerNames)(this.props.imposter.people.filter(a => a.role === n.PersonRole.imposter).map(a => a.name)));
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
}), d.register('WkSa8', function(e, f) {
    a(e.exports, 'default', function() {
        return _C;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('gDrAC'),
        j = d('u4s09'),
        k = d('Yg/TP'),
        l = d('wsTfV'),
        m = d('6fR6K'),
        n = d('xBA8f'),
        o = d('6jmvl'),
        p = d('Y+ehH'),
        q = d('yrLp3'),
        r = d('aK6ep'),
        s = d('tf3/Y'),
        t = d('JyHUV'),
        u = d('9rEO42'),
        v = d('1idK1'),
        w = d('A9y6n');
    let x, y, z, A = a => a;
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
            L = J.filter((C, b) => b > 0);
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
}), d.register('6fR6K', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('gRbUn'),
        h = d('aK6ep'),
        i = d('wsTfV');
    d('O0Kav');
    var j = d('u4s09'),
        k = d('79zb7');
    let l, m, n, o, p, q, r = a => a;
    var _s = a => (0, g.jsxs)(_t, {
        children: [
            (0, g.jsx)(_u, {
                children: (0, g.jsx)(_v, {})
            }),
            (0, g.jsxs)(_w, {
                children: [
                    (0, g.jsx)(_x, {
                        children: a.name
                    }),
                    (0, g.jsx)(_y, {
                        children: (0, h.getMoney)(a.amount)
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
}), d.register('xBA8f', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('gRbUn'),
        h = d('aK6ep'),
        i = d('wsTfV'),
        j = d('quE27');
    d('O0Kav');
    var k = d('u4s09');
    let l, m, n, o, p, q, r = a => a;
    const s = a => (0, g.jsxs)(_v, {
        children: [
            (0, g.jsxs)(_w, {
                children: [
                    (0, g.jsx)(_x, {
                        children: (0, j.numberToRank)(a.place)
                    }),
                    (0, g.jsx)(_y, {
                        children: a.name
                    })
                ]
            }),
            (0, g.jsx)(_z, {
                children: (0, h.getMoney)(a.amount)
            })
        ]
    });
    var _t = a => (0, g.jsx)(_u, {
        children: a.people.map((a, e) => (0, g.jsx)(s, {
            name: a.name,
            amount: a.balance,
            place: e + 2
        }, `draw-leaderboard-${ a.id }`))
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
}), d.register('A9y6n', function(e, f) {
    a(e.exports, 'default', function() {
        return _H;
    });
    var g = d('gRbUn'),
        h = d('P1KtI'),
        i = d('VNuyu'),
        j = d('AE7vR'),
        k = d('Eh2Wh'),
        l = d('lptuh'),
        m = d('wsTfV'),
        n = d('RcaOq'),
        o = d('yrLp3'),
        p = d('nKuOQ'),
        q = d('quE27'),
        r = d('6jmvl'),
        s = d('O0Kav'),
        t = d('u4s09');
    let u, v, w, x, y, z, A, B, C, D, E, F = a => a;
    const G = a => {
        const [H, I] = s.useState(!1), [J, K] = s.useState(!1);
        return (0, g.jsxs)(_I, {
            children: [
                (0, g.jsxs)(_O, {
                    children: [
                        (0, g.jsxs)('div', {
                            children: [
                                (0, g.jsx)(_Q, {
                                    children: a.term
                                }),
                                (0, g.jsx)(_R, {
                                    children: a.name
                                })
                            ]
                        }),
                        (0, g.jsx)(_P, {
                            children: a.canPublish ? (0, g.jsx)(h.default, {
                                onClick: () => {
                                    H || J || (I(!0), (0, q.request)({
                                        url: '/api/v1/fun/draw-that/add',
                                        method: 'post',
                                        data: {
                                            term: a.term,
                                            image: a.image
                                        },
                                        success: () => {
                                            K(!0);
                                        },
                                        error: () => (0, l.throwError)({
                                            title: 'Error publishing'
                                        }),
                                        both: () => I(!1)
                                    }));
                                },
                                type: 'primary',
                                loading: H,
                                disabled: J,
                                children: J ? 'Published' : 'Publish'
                            }) : null
                        })
                    ]
                }),
                (0, g.jsx)(_S, {
                    src: a.image
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
                I.drawingHistory.map((I, J) => (0, g.jsx)(G, {
                    image: I.image,
                    name: I.name,
                    term: I.term,
                    canPublish: K
                }, `drawing-history-${ I.index }`))
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
}), d.register('+7kD3', function(e, f) {
    a(e.exports, 'default', function() {
        return _y;
    });
    var g = d('gRbUn'),
        h = d('8KqQ+'),
        i = d('Eh2Wh'),
        j = d('tf3/Y'),
        k = d('yrLp3'),
        l = d('quE27'),
        m = d('9aZ6t'),
        n = d('6jmvl'),
        o = d('O0Kav'),
        p = d('u4s09'),
        q = d('gDrAC'),
        r = d('brGS4'),
        s = d('4arxA'),
        t = d('VJvpk');
    let u, v, w, x = a => a;
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
}), d.register('4arxA', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('gRbUn');
    d('O0Kav');
    var h = d('rRQRG'),
        i = d('u4s09'),
        j = d('9aZ6t');
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
    })(k || (k = (a => a)``));
}), d.register('VJvpk', function(e, f) {
    a(e.exports, 'default', function() {
        return _F;
    });
    var g = d('gRbUn'),
        h = d('VNuyu'),
        i = d('Eh2Wh'),
        j = d('O0Kav'),
        k = d('u4s09'),
        l = d('rE3bg'),
        m = d('aK6ep'),
        n = d('9rEO42'),
        o = d('JyHUV'),
        p = d('9aZ6t'),
        q = d('6jmvl'),
        r = d('yrLp3'),
        s = d('Y+ehH'),
        t = d('9zaF+'),
        u = d('tf3/Y'),
        v = d('96BQR'),
        w = d('bzQU+');
    let x, y, z, A, B, C, D = a => a;
    const E = a => (0, g.jsxs)(_I, {
        style: {
            background: a.isWinner ? '#005005' : 'rgba(0, 0, 0, 0.6)'
        },
        className: a.isWinner ? 'animated tada' : '',
        children: [
            (0, g.jsxs)(_J, {
                children: [
                    'Contestant ',
                    a.contestantType
                ]
            }),
            (0, g.jsx)(_K, {
                children: a.contestantName
            }),
            (0, g.jsx)(h.default, {
                style: {
                    margin: '12px 0px'
                }
            }),
            (0, g.jsx)(_L, {
                children: (0, g.jsx)(b(l), {
                    start: 0,
                    end: a.balance,
                    formattingFn: m.getMoney,
                    duration: 6.5,
                    delay: 1.8,
                    onEnd: a.handleCountEnd
                })
            })
        ]
    });
    var _F = (0, q.observer)(a => {
        const {
            players: {
                players: G
            }
        } = j.useContext(r.default), [H, I] = j.useState(!1), J = j.useMemo(() => {
            const K = (0, s.leaderboardSorter)(G),
                L = [];
            return K[0] && L.push(K[0]), K[1] && L.push(K[1]), (0, t.shuffle)(L);
        }, []);
        j.useEffect(() => {
            J && 2 === J.length || a.setToLeaderboardScreen();
        }, [J]), j.useEffect(() => {
            setTimeout(() => {
                (0, m.playSound)(u.default.pardy.drumRoll, {
                    volume: 0.7
                });
            }, 1000);
        }, []);
        if (!J || 2 !== J.length)
            return null;
        const K = J[0].balance > J[1].balance;
        return (0, g.jsxs)(g.Fragment, {
            children: [
                (0, g.jsx)(_G, {
                    initial: {
                        y: '100%',
                        x: '0'
                    },
                    animate: {
                        y: '0%',
                        x: H ? '-100%' : '0%'
                    },
                    transition: {
                        delay: H ? 2.3 : 0.5,
                        duration: H ? 0.6 : 1.2,
                        ease: H ? 'easeIn' : 'easeOut'
                    },
                    onAnimationComplete: () => {
                        H && a.setToLeaderboardScreen();
                    },
                    children: (0, g.jsx)(w.default, {
                        children: (0, g.jsxs)(_H, {
                            children: [
                                (0, g.jsx)(E, {
                                    contestantType: 'A',
                                    contestantName: J[0].name,
                                    balance: J[0].balance,
                                    handleCountEnd: () => {
                                        (0, m.playSound)(u.default.celebrate, {}), setTimeout(() => {
                                            (0, m.musicIsOn)() && u.default.pardy.music.fade(u.default.pardy.music.volume(), v.default.musicVolume, 1000);
                                        }, 1000), I(!0), setTimeout(() => {
                                            (0, m.playSound)(u.default.pardy.swoosh, {});
                                        }, 2000);
                                    },
                                    isWinner: !!H && K
                                }),
                                (0, g.jsx)(E, {
                                    contestantType: 'B',
                                    contestantName: J[1].name,
                                    balance: J[1].balance,
                                    isWinner: !!H && !K
                                })
                            ]
                        })
                    })
                }),
                (0, g.jsx)(o.ConfettiContainer, {
                    children: (0, g.jsx)(b(n), {
                        active: H,
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
}), d.register('bzQU+', function(e, f) {
    a(e.exports, 'default', function() {
        return _o;
    });
    var g = d('gRbUn'),
        h = d('O0Kav'),
        i = d('u4s09'),
        j = d('bQWYI');
    let k, l, m, n = a => a;
    var _o = a => {
        const p = h.useRef(null),
            [q, r] = (0, j.default)(p),
            s = Math.min(q / 800, r / 450);
        let t = 450 * s;
        isNaN(t) && (t = 0);
        let u = 800 * s;
        return isNaN(u) && (u = 0), (0, g.jsx)(_p, {
            ref: p,
            children: (0, g.jsx)(_q, {
                style: {
                    height: t,
                    width: u
                },
                children: (0, g.jsx)(_r, {
                    style: {
                        transform: `scale(${ s })`
                    },
                    children: a.children
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
}), d.register('iWv9H', function(e, f) {
    a(e.exports, 'default', function() {
        return _t;
    });
    var g = d('gRbUn'),
        h = d('JNGrh0'),
        i = d('8KqQ+'),
        j = d('yrLp3'),
        k = d('/QDa4'),
        l = d('quE27'),
        m = d('6jmvl'),
        n = d('O0Kav'),
        o = d('u4s09'),
        p = d('aK6ep'),
        q = d('D4637'),
        r = d('PeMNf');
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
                onError: u => {
                    u && u.message && u.message.text ? v.roomIntentErrorMessage = u.message.text : v.roomIntentErrorMessage = 'There was an error. Please refresh and try again.';
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
    })(s || (s = (a => a)`
  color: ${ 0 };
`), i.default.White);
}), d.register('JNGrh0', function(e, f) {
    a(e.exports, 'default', function() {
        return _v;
    });
    var g = d('+pD1R19'),
        h = d('DFnC8'),
        i = d('O0Kav');
    d('HoW8Y');
    var j = d('PEco5'),
        k = d('T8OqN'),
        l = d('KOz0K'),
        m = 44;

    function n(o) {
        var p, q, r;
        return p = o, q = 0, r = 1, o = (Math.min(Math.max(q, p), r) - q) / (r - q), o = (o -= 1) * o * o + 1;
    }
    var o = i.forwardRef(function(p, q) {
            var r, s = p.classes,
                t = p.className,
                u = p.color,
                _v = void 0 === u ? 'primary' : u,
                w = p.disableShrink,
                x = void 0 !== w && w,
                y = p.size,
                z = void 0 === y ? 40 : y,
                A = p.style,
                B = p.thickness,
                C = void 0 === B ? 3.6 : B,
                D = p.value,
                E = void 0 === D ? 0 : D,
                F = p.variant,
                G = void 0 === F ? 'indeterminate' : F,
                H = (0, h.default)(p, [
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
                I = {},
                J = {},
                K = {};
            if ('determinate' === G || 'static' === G) {
                var L = 2 * Math.PI * ((m - C) / 2);
                I.strokeDasharray = L.toFixed(3), K['aria-valuenow'] = Math.round(E), 'static' === G ? (I.strokeDashoffset = ''.concat(((100 - E) / 100 * L).toFixed(3), 'px'), J.transform = 'rotate(-90deg)') : (I.strokeDashoffset = ''.concat((r = (100 - E) / 100, r * r * L).toFixed(3), 'px'), J.transform = 'rotate('.concat((270 * n(E / 70)).toFixed(3), 'deg)'));
            }
            return i.createElement('div', (0, g.default)({
                className: (0, j.default)(s.root, t, 'inherit' !== _v && s['color'.concat((0, l.default)(_v))], {
                    indeterminate: s.indeterminate,
                    static: s.static
                } [G]),
                style: (0, g.default)({
                    width: z,
                    height: z
                }, J, A),
                ref: q,
                role: 'progressbar'
            }, K, H), i.createElement('svg', {
                className: s.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(m, ' ').concat(m)
            }, i.createElement('circle', {
                className: (0, j.default)(s.circle, x && s.circleDisableShrink, {
                    indeterminate: s.circleIndeterminate,
                    static: s.circleStatic
                } [G]),
                style: I,
                cx: m,
                cy: m,
                r: (m - C) / 2,
                fill: 'none',
                strokeWidth: C
            })));
        }),
        p = (0, k.default)(function(q) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: q.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: q.palette.primary.main
                },
                colorSecondary: {
                    color: q.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: q.transitions.create('stroke-dashoffset')
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
        })(o);
}), d.register('/QDa4', function(e, f) {
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
}), d.register('D4637', function(e, f) {
    a(e.exports, 'default', function() {
        return _h;
    });
    var g = d('PWNqO');
    var _h = () => {
        (0, g.default)().then().catch(a => !1);
    };
}), d.register('PWNqO', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('aK6ep'),
        h = d('/dh2r'),
        i = d('fIdx1'),
        j = d('quE27');
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
        } catch (a) {
            console.log({
                errorCreatingGame: a
            });
        }
    };
}), d.register('/dh2r', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('ZE7Lv'),
        h = d('quE27'),
        i = d('YSFE52');
    var _j = async () => {
        try {
            g.default.engine.findingServerForGame = !0;
            let k = '';
            try {
                const l = await new Promise((k, l) => {
                    (0, h.request)({
                        url: '/api/matchmaker/find-server-to-host-game',
                        data: {
                            source: i.ExperienceSource.original
                        },
                        success: l => {
                            k(l);
                        },
                        error: k => {
                            l(k);
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
}), d.register('fIdx1', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('KJfeB'),
        h = d('ZE7Lv'),
        i = d('gdv0c');
    var _j = a => {
        const {
            joinOptions: k,
            createOptions: l
        } = a;
        if (!k && !l)
            return;
        const m = () => {
            h.default.engine.attemptingToConnect = !1, h.default.engine.hasConnected = !1, h.default.engine.connected = !1, h.default.engine.connectionError = !1, h.default.engine.joinedRoom = !1, h.default.engine.attemptingToJoinRoom = !1, h.default.engine.errorJoiningRoom = !1, h.default.engine.roomError = null;
        };
        m(), h.default.engine.attemptingToConnect = !0;
        const n = new(0, g.Client)(k ? k.serverUrl : l.serverUrl, {
                transports: ['websocket'],
                clientIdSuffix: '-host'
            }),
            o = n.onConnectError.add(k => {
                console.log({
                    connectionError: k
                }), a.onConnectError && a.onConnectError(k), a.disposeOnError && m(), h.default.engine.connectionError = !0, h.default.engine.attemptingToConnect = !1;
            });
        n.onConnect.add(() => {
            o(), h.default.engine.client = n, h.default.engine.connected = !0, h.default.engine.hasConnected = !0, h.default.engine.attemptingToConnect = !1, h.default.engine.attemptingToJoinRoom = !0, n.onConnectError.add(() => {
                h.default.engine.connectionError = !0;
            }), n.onConnect.add(() => {
                h.default.engine.connected = !0, h.default.engine.connectionError = !1, h.default.engine.attemptingToConnect = !1, h.default.engine.attemptingToJoinRoom = !0;
            }), n.onReconnect.add(() => {
                h.default.engine.connected = !0, h.default.engine.connectionError = !1, h.default.engine.attemptingToConnect = !1, h.default.engine.attemptingToJoinRoom = !0;
            }), h.default.engine.attemptingToJoinRoom = !0;
            const p = k ? n.joinRoom(k.roomId, k.options) : n.createRoom(l.roomType, l.options);
            p.onJoinAttempt.add(() => {
                h.default.engine.attemptingToJoinRoom = !0;
            }), p.onJoinError.add(k => {
                console.log({
                    roomJoinError: k
                }), a.onRoomJoinError && a.onRoomJoinError(k), h.default.engine.roomError = k, h.default.engine.errorJoiningRoom = !0, h.default.engine.attemptingToJoinRoom = !1;
            });
            const q = p.onJoinError.add(() => {
                a.disposeOnError && m();
            });
            p.onJoin.add(() => {
                (0, i.default)(p), a.onRoomJoin && a.onRoomJoin();
            }, !0), p.onJoin.add(() => {
                q(), h.default.engine.joinedRoom = !0, h.default.engine.attemptingToJoinRoom = !1, h.default.engine.game || (h.default.engine.game = p);
            }), p.onLeave.add(() => {
                h.default.engine.joinedRoom = !1;
            });
        }, !0), n.onDisconnect.add(() => {
            h.default.engine.attemptingToConnect = !0, h.default.engine.connected = !1, a.onDisconnect && a.onDisconnect();
        });
    };
}), d.register('gdv0c', function(e, f) {
    a(e.exports, 'default', function() {
        return _s;
    });
    var g = d('AE7vR'),
        h = d('tf3/Y'),
        i = d('aK6ep'),
        j = d('ZE7Lv'),
        k = d('zJeyd'),
        l = d('DPOSC'),
        m = d('XV222'),
        n = d('Xx64d'),
        o = d('BMFf5'),
        p = d('zq9/W'),
        q = d('quE27');
    const r = a => {
        h.default[a] && Object.keys(h.default[a]).forEach(e => {
            h.default[a][e] && h.default[a][e].load && h.default[a][e].load();
        });
    };
    var _s = a => {
        const t = o.default.map(a => a());
        a.onMessage.add((f, d) => {
            const u = {
                action: f,
                payload: d
            };
            if (u.action !== k.default.stateUpdate)
                if (u.action !== k.default.viewableGameCode) {
                    if (u.action === k.default.hostStaticState) {
                        if (j.default.metadata.hasReceivedHostStaticState)
                            return;
                        return Object.keys(d.options || {}).forEach(a => {
                            j.default.gameOptions[a] = d.options[a];
                        }), j.default.gameValues.availableThemes.replace(d.themes), j.default.gameValues.gameCode = d.gameCode, Object.keys(h.default).forEach(a => {
                            h.default[a] && h.default[a].load && h.default[a].load();
                        }), (0, i.inImposterMode)() && r('imposter'), (0, i.inThanosMode)() && r('thanos'), (0, i.inLavaMode)() && r('lava'), (0, i.inBossBattleMode)() && r('bossBattle'), (0, i.inDrawMode)() && (r('draw'), (0, q.loadFont)('https://fonts.googleapis.com/css2?family=Pangolin&display=swap')), (0, i.inPardyMode)() && ((0, q.loadFont)('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap'), r('pardy')), (0, p.default)(a), void(j.default.metadata.hasReceivedHostStaticState = !0);
                    }
                    if (u.action !== k.default.newActivityItem)
                        if (u.action !== k.default.newPlayerStats)
                            if (u.action !== k.default.specialSongPlayed)
                                if (u.action !== k.default.updatedPlayerLeaderboard)
                                    if (u.action !== k.default.updatedTeamLeaderboard)
                                        if (u.action !== k.default.clapCount)
                                            if (u.action !== k.default.thanosResults)
                                                if (u.action !== k.default.defendingHomebases) {
                                                    if (u.action === k.default.defendingHomebaseResults)
                                                        return j.default.gameValues.defendingHomebaseResults = d, void(0, i.endGame)(!0);
                                                    if (u.action !== k.default.playAgainIntentId)
                                                        if (u.action === k.default.errorModal && g.default.error({
                                                                title: d.title,
                                                                content: d.content
                                                            }), u.action !== k.default.setReportId) {
                                                            if (u.action !== k.default.lavaResults)
                                                                return u.action === k.default.imposter.quickStats ? (j.default.imposter.impostersLeft = d.impostersLeft, j.default.imposter.meetingsLeft = d.meetingsLeft, void(j.default.imposter.investigationsLeft = d.investigationsLeft)) : void(u.action !== k.default.imposter.people ? u.action !== k.default.imposter.meetingResults ? u.action !== k.default.imposter.callAMeeting ? u.action !== k.default.imposter.voteCount ? u.action !== k.default.draw.line ? u.action !== k.default.draw.feedItem ? u.action !== k.default.draw.personCount ? u.action !== k.default.draw.pointAdditions || j.default.draw.pointAdditions.replace(d) : j.default.draw.personCount = d : j.default.draw.latestFeedItem = d : j.default.draw.latestLine = d : j.default.imposter.votes = d : (0, n.default)() : j.default.imposter.meetingResults = d : j.default.imposter.people.replace(d));
                                                            j.default.entities.lava = d;
                                                        } else
                                                            j.default.gameValues.reportId = d.reportId;
                                                    else
                                                        window.location.href = `/host?id=${ d }`;
                                                } else
                                                    j.default.entities.defendingHomebase.replace(d);
                    else
                        j.default.gameValues.thanosValues = d;
                    else
                        j.default.gameValues.clapCount = d;
                    else
                        'final' === d.key ? j.default.players.finalResults.replace(d.items) : j.default.players.teams.replace(d.items);
                    else
                        'final' === d.key ? j.default.players.finalResults.replace(d.items) : j.default.players.players.replace(d.items);
                    else {
                        if (!d.audioFile || !d.background)
                            return;
                        (0, i.startSpecialSong)(d.audioFile, d.background);
                    } else
                        j.default.stats.playerStats.push(u.payload);
                    else
                        (0, i.addActivityItem)(u.payload);
                } else
                    j.default.gameValues.gameCode = d;
            else
                (0, l.default)(d.type, d.value, t);
        }), (0, m.default)(a);
    };
}), d.register('zJeyd', function(e, f) {
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
}), d.register('DPOSC', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('ZE7Lv'),
        h = d('m0O9M');
    var _i = (a, e, f) => {
        if (a === h.default.gameStatus)
            return void(g.default.gameValues.currentRoute !== e && (g.default.gameValues.currentRoute = e));
        const j = f.find(e => e.key === a);
        j && j.listener.applyPatches(e);
    };
}), d.register('m0O9M', function(e, f) {
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
}), d.register('XV222', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('aK6ep'),
        h = d('ZE7Lv'),
        i = d('YSFE52'),
        j = d('TdWEF');
    const k = a => {
        const l = h.default.gameValues.currentRoute;
        if (l === i.GameStatus.join)
            return a.send(j.default.requestPlayerLeaderboard), void setTimeout(() => k(a), 1000);
        if (l === i.GameStatus.teams)
            return a.send(j.default.requestTeamLeaderboard), void setTimeout(() => k(a), 4700);
        if (l === i.GameStatus.gameplay) {
            if ((0, g.inLavaMode)())
                return;
            return (0, g.inImposterMode)() ? a.send(j.default.imposter.requestPeople) : (0, g.inZombiesVsHumansMode)() ? a.send(j.default.requestDefendingHomebase) : (0, g.inTeamMode)() ? a.send(j.default.requestTeamLeaderboard) : a.send(j.default.requestPlayerLeaderboard), void setTimeout(() => k(a), 2500);
        }
        l !== i.GameStatus.results && setTimeout(() => k(a), 1000);
    };
    var _l = k;
}), d.register('BMFf5', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    }), d('egA3c');
    var g = d('3ZZ6T'),
        h = d('lV8cR');
    d('zad67');
    var i = d('L4crq');
    var _j = [
        g.default,
        h.default,
        i.default
    ];
}), d.register('egA3c', function(e, f) {
    a(e.exports, 'Round', function() {
        return d('3ZZ6T').default;
    }), a(e.exports, 'Status', function() {
        return d('lV8cR').default;
    });
    d('3ZZ6T'), d('lV8cR');
}), d.register('3ZZ6T', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('ZE7Lv'),
        h = d('tnsAR'),
        i = d('m0O9M');
    const j = [
        'secondsLeft',
        'term',
        'drawer',
        'drawingBase64',
        'revealText'
    ];
    var _k = () => {
        const l = new(0, h.default)();
        return j.forEach(e => {
            l.onPropChange(e, l => {
                g.default.draw.round[e] = l;
            });
        }), {
            key: i.default.draw.round,
            listener: l
        };
    };
}), d.register('lV8cR', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('ZE7Lv'),
        h = d('tnsAR'),
        i = d('m0O9M');
    var _j = () => {
        const k = new(0, h.default)();
        return k.onPropChange('value', k => {
            g.default.draw.status = k;
        }), {
            key: i.default.draw.status,
            listener: k
        };
    };
}), d.register('zad67', function(e, f) {
    a(e.exports, 'PardyState', function() {
        return d('L4crq').default;
    });
    d('L4crq');
}), d.register('L4crq', function(e, f) {
    a(e.exports, 'default', function() {
        return _k;
    });
    var g = d('ZE7Lv'),
        h = d('tnsAR'),
        i = d('m0O9M');
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
        return j.forEach(e => {
            l.onPropChange(e, l => {
                'powers' === e ? g.default.pardy.powers.replace(l) : g.default.pardy[e] = l;
            });
        }), {
            key: i.default.pardy.state,
            listener: l
        };
    };
}), d.register('zq9/W', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('aK6ep'),
        h = d('JkQCT'),
        i = d('ZE7Lv'),
        j = d('TdWEF'),
        k = d('YSFE52');
    var _l = a => {
        (0, h.reaction)(() => i.default.gameValues.currentRoute, e => {
            k.GameStatus.gameplay, a.send(j.default.newGameStatus, e);
        }), (0, g.inImposterMode)() && (0, h.reaction)(() => i.default.imposter.status, e => a.send(j.default.imposter.status, e)), (0, g.inPardyMode)() && ((0, h.reaction)(() => i.default.pardy.currentRound, e => {
            a.send(j.default.pardy.setNewRoundDetails, e);
        }), (0, h.reaction)(() => i.default.pardy.screen, e => {
            a.send(j.default.pardy.setScreen, e);
        }), (0, h.reaction)(() => i.default.pardy.questionScreen, e => {
            a.send(j.default.pardy.setQuestionScreen, e);
        }), (0, h.reaction)(() => i.default.pardy.questionStatus, e => {
            a.send(j.default.pardy.setQuestionStatus, e);
        }));
    };
}), d.register('PeMNf', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('quE27'),
        h = d('ZE7Lv');
    var _i = (a, e) => {
        (0, g.request)({
            url: `/api/matchmaker/intent/live-game/summary/${ a }`,
            success: a => {
                h.default.kit.questions = a.questions, h.default.metadata.currentGameIsUsingGroups = !!a.usingGroups, e.onSuccess && e.onSuccess();
            },
            error: a => {
                e.onError && e.onError(a);
            }
        });
    };
}), d.register('1ARxV', function(e, f) {
    a(e.exports, 'default', function() {
        return _v;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('TdWEF'),
        k = d('aK6ep'),
        l = d('6jmvl'),
        m = d('O0Kav'),
        n = d('u4s09'),
        o = d('opZUb'),
        p = d('GeEOd'),
        q = d('4+bYx'),
        r = d('F9uFg');
    let s;
    const t = n.default.div(s || (s = (a => a)`
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
            }), (0, g.default)(this, 'makeTeams', a => {
                this.props.engine.game.send(j.default.makeTeams);
            });
        }
    };
    u = (0, h.__decorate)([
        (0, l.inject)('engine', 'gameOptions', 'gameValues', 'ui'),
        l.observer
    ], u);
    var _v = u;
}), d.register('opZUb', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('JyHUV'),
        k = d('tf3/Y'),
        l = d('6jmvl'),
        m = d('O0Kav'),
        n = d('9rEO42'),
        o = d('u4s09'),
        p = d('YSFE52'),
        q = d('aK6ep'),
        r = d('quE27');
    let s, t, u, v = a => a;
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
            ]), (0, g.default)(this, 'setStage', a => {
                const x = this.getStages(),
                    y = x[a];
                if (!y)
                    return this.props.gameValues.currentRoute = p.GameStatus.gameplay, void(this.props.ui.showingBossPreScreen = !1);
                a + 1 === x.length && this.setState({
                    confettiActive: !0
                }), this.setState({
                    content: y.content
                }), setTimeout(() => this.setStage(a + 1), y.delay);
            }), (0, g.default)(this, 'startGame', () => {
                this.setStage(0);
            }), (0, g.default)(this, 'getBossName', () => {
                let x = 'The Boss';
                if (this.props.players && this.props.players.teams && this.props.players.teams.length) {
                    const y = this.props.players.teams.find(x => 'The Boss' === x.id);
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
}), d.register('GeEOd', function(e, f) {
    a(e.exports, 'default', function() {
        return _u;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('tf3/Y'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('3Y4Gz'),
        n = d('u4s09'),
        o = d('YSFE52'),
        p = d('quE27');
    let q, r, s = a => a;
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
            ]), (0, g.default)(this, 'setStage', a => {
                const u = this.getStages()[a];
                if (!u)
                    return this.props.gameValues.currentRoute = o.GameStatus.gameplay, void(this.props.ui.showingHumansVsZombiesPreScreen = !1);
                this.setState({
                    content: u.content
                }), setTimeout(() => this.setStage(a + 1), u.delay);
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
}), d.register('4+bYx', function(e, f) {
    a(e.exports, 'HEADER_HEIGHT', function() {
        return _t;
    }), a(e.exports, 'default', function() {
        return _y;
    });
    var g = d('gRbUn'),
        h = d('0PtLD'),
        i = d('P1KtI'),
        j = d('aK6ep'),
        k = d('RcaOq'),
        l = d('RcqBP'),
        m = d('O0Kav'),
        n = d('u4s09'),
        o = d('pv8Ar');
    let p, q, r, s = a => a;
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
}), d.register('F9uFg', function(e, f) {
    a(e.exports, 'default', function() {
        return _r;
    });
    var g = d('4F2ZN'),
        h = d('gRbUn'),
        i = d('yruHD'),
        j = d('6jmvl'),
        k = d('O0Kav'),
        l = d('u4s09'),
        m = d('4+bYx'),
        n = d('dgh9J');
    let o;
    const p = l.default.div(o || (o = (a => a)`
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
                children: this.props.players.teams && this.props.players.teams.length ? this.props.players.teams.map(a => (0, h.jsx)(n.default, {
                    team: a
                }, a.id)) : (0, h.jsx)(i.default, {
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
}), d.register('dgh9J', function(e, f) {
    a(e.exports, 'default', function() {
        return _z;
    });
    var g = d('gRbUn'),
        h = d('VNuyu'),
        i = d('3Y4Gz'),
        j = d('aK6ep'),
        k = d('wsTfV'),
        l = d('RcaOq'),
        m = d('RcqBP'),
        n = d('O0Kav'),
        o = d('u4s09');
    let p, q, r, s, t = a => a;
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
`), a => a.background),
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
                    z.players.map(e => (0, g.jsx)(x, {
                        children: e
                    }, z.balance + e))
                ]
            });
        }
    }
    var _z = y;
}), d.register('3OkVA', function(e, f) {
    a(e.exports, 'default', function() {
        return _y;
    });
    var g = d('s/YA9'),
        h = d('4F2ZN'),
        i = d('gRbUn'),
        j = d('JDzG4'),
        k = d('P1KtI'),
        l = d('VNuyu'),
        m = d('3t9ce'),
        n = d('AE7vR'),
        o = d('yruHD'),
        p = d('6jmvl'),
        q = d('O0Kav'),
        r = d('3FKjt'),
        s = d('wsTfV'),
        t = d('RcaOq'),
        u = d('YSFE52'),
        v = d('nKuOQ');
    const w = 'https://status.gimkit.com';
    let x = class extends q.Component {
        render() {
            const {
                engine: y,
                gameValues: z
            } = this.props, A = ((y, z) => !((!z.roomIntentErrorMessage || z.currentRoute !== u.GameStatus.setup) && !y.errorFindingServerForGame && (z.currentRoute === u.GameStatus.results || !y.connectionError && (z.currentRoute === u.GameStatus.setup || !y.game || !y.errorJoiningRoom && y.joinedRoom))))(y, z);
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
}), d.register('JDzG4', function(e, f) {
    a(e.exports, 'default', function() {
        return _l;
    });
    var g = d('5cnOa'),
        h = d('O0Kav'),
        i = d('LGlIv'),
        j = d('VZTwv'),
        k = function(l, m) {
            return h.createElement(j.default, (0, g.default)((0, g.default)({}, l), {}, {
                ref: m,
                icon: i.default
            }));
        };
    k.displayName = 'CloseCircleOutlined';
    var _l = h.forwardRef(k);
}), d.register('LGlIv', function(e, f) {
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
}), d.register('3FKjt', function(e, f) {
    a(e.exports, 'default', function() {
        return d;
    });
    var g = a => {
        let h = 'Error joining game',
            i = '';
        return a && a.includes && a.includes('No data found') ? (h = 'All done', i = 'You were disconnected for too long, so we closed down the game you were hosting.') : i = `Error message - ${ JSON.stringify(a) }`, {
            title: h,
            description: i
        };
    };
}), d.register('AhvCr', function(e, f) {
    a(e.exports, 'default', function() {
        return _n;
    });
    var g = d('gRbUn'),
        h = d('P1KtI'),
        i = d('nKuOQ'),
        j = d('oMIR+'),
        k = d('6jmvl'),
        l = d('O0Kav'),
        m = d('yrLp3');
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
}), d.register('oMIR+', function(e, f) {
    a(e.exports, 'default', function() {
        return _x;
    });
    var g = d('gRbUn'),
        h = d('8KqQ+'),
        i = d('Eh2Wh'),
        j = d('O0Kav'),
        k = d('kZLBJ'),
        l = d('u4s09'),
        m = d('9aZ6t');
    let n, o, p, q, r, s, t, u, v = a => a;
    const w = a => {
        const [x, y] = j.useState(!0), [z, A] = j.useState(!1);
        j.useEffect(() => {
            A(!0);
        }, []), j.useEffect(() => {
            const B = setTimeout(() => {
                i();
            }, 1000 * a.autoCloseDuration);
            return () => clearTimeout(B);
        }, []);
        const B = () => A(!1);
        return x ? (0, g.jsxs)(_y, {
            onAnimationComplete: () => {
                z || y(!1);
            },
            initial: {
                bottom: 0,
                opacity: 0
            },
            animate: {
                bottom: z ? 20 : 0,
                opacity: z ? 1 : 0
            },
            transition: {
                type: 'spring',
                stiffness: 120
            },
            children: [
                (0, g.jsxs)(_z, {
                    children: [
                        (0, g.jsx)(_C, {
                            src: a.imageUrl
                        }),
                        (0, g.jsx)(_A, {
                            onClick: B,
                            children: (0, g.jsx)(_B, {})
                        })
                    ]
                }),
                (0, g.jsxs)(_D, {
                    children: [
                        (0, g.jsx)(_E, {
                            children: a.title
                        }),
                        (0, g.jsx)(_F, {
                            children: a.description
                        })
                    ]
                })
            ]
        }) : null;
    };
    var _x = a => (0, k.createPortal)((0, g.jsx)(w, {
        ...a
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
}), d.register('e5xHg25', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('MsxQz'),
        h = d('O0Kav'),
        i = d('R2nG3');

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
                    const z = new ResizeObserver(z => {
                            const A = z[0].target;
                            s(A.offsetHeight + 8), u(A.offsetWidth);
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
}), d.register('kufQf25', function(e, f) {
    a(e.exports, 'initMoveMotion', function() {
        return _p;
    });
    var g = d('ZyWBF'),
        h = d('6vEai');
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
        _p = (a, e) => {
            const {
                antCls: q
            } = a, r = `${ q }-${ e }`, {
                inKeyframes: s,
                outKeyframes: t
            } = o[e];
            return [
                (0, h.initMotion)(r, s, t, a.motionDurationMid),
                {
                    [`\n        ${ r }-enter,\n        ${ r }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: a.motionEaseOutCirc
                    },
                    [`${ r }-leave`]: {
                        animationTimingFunction: a.motionEaseInOutCirc
                    }
                }
            ];
        };
}), d.register('E2AMI26', function(e, f) {
    a(e.exports, 'SpaceContext', function() {
        return _p;
    }, function(g) {
        return _p = g;
    }), a(e.exports, 'default', function() {
        return _x;
    }, function(g) {
        return _x = g;
    });
    var g = d('/U36/'),
        h = d('6E2xk1'),
        i = d('O0Kav'),
        j = d('R2nG3'),
        k = d('42T6R26'),
        l = d('yRLYd'),
        m = d('qW/eZ26'),
        n = d('AzDc2'),
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
    const r = a => {
        const {
            getPrefixCls: s,
            space: t,
            direction: u
        } = i.useContext(j.ConfigContext), {
            size: v = (null == t ? void 0 : t.size) || 'small',
            align: w,
            className: _x,
            rootClassName: y,
            children: z,
            direction: A = 'horizontal',
            prefixCls: B,
            split: C,
            style: D,
            wrap: E = !1
        } = a, F = o(a, [
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
        ]), G = (0, k.default)(), [H, I] = i.useMemo(() => (Array.isArray(v) ? v : [
            v,
            v
        ]).map(a => function(J) {
            return 'string' == typeof J ? q[J] : J || 0;
        }(a)), [v]), J = (0, h.default)(z, {
            keepEmpty: !0
        }), K = void 0 === w && 'horizontal' === A ? 'center' : w, L = s('space', B), [M, N] = (0, n.default)(L), O = b(g)(L, N, `${ L }-${ A }`, {
            [`${ L }-rtl`]: 'rtl' === u,
            [`${ L }-align-${ K }`]: K
        }, _x, y), P = `${ L }-item`, Q = 'rtl' === u ? 'marginLeft' : 'marginRight';
        let R = 0;
        const S = J.map((a, b) => {
                null != a && (R = b);
                const T = a && a.key || `${ P }-${ b }`;
                return i.createElement(m.default, {
                    className: P,
                    key: T,
                    direction: A,
                    index: b,
                    marginDirection: Q,
                    split: C,
                    wrap: E
                }, a);
            }),
            T = i.useMemo(() => ({
                horizontalSize: H,
                verticalSize: I,
                latestIndex: R,
                supportFlexGap: G
            }), [
                H,
                I,
                R,
                G
            ]);
        if (0 === J.length)
            return null;
        const U = {};
        return E && (U.flexWrap = 'wrap', G || (U.marginBottom = -I)), G && (U.columnGap = H, U.rowGap = I), M(i.createElement('div', Object.assign({
            className: O,
            style: Object.assign(Object.assign({}, U), D)
        }, F), i.createElement(_p.Provider, {
            value: T
        }, S)));
    };
    r.Compact = l.default;
    var s = r;
}), d.register('42T6R26', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('O0Kav'),
        h = d('nzHVd'),
        _i = () => {
            const [j, k] = g.useState(!1);
            return g.useEffect(() => {
                k((0, h.detectFlexGapSupported)());
            }, []), j;
        };
}), d.register('qW/eZ26', function(e, f) {
    a(e.exports, 'default', function() {
        return _i;
    });
    var g = d('O0Kav'),
        h = d('E2AMI26');

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
}), d.register('HloXO', function(e, f) {
    a(e.exports, 'getCloudinaryUrl', function() {
        return d;
    });
    const g = a => {
            const h = _h(a);
            return h ? a.includes('/video/upload') ? `https://${ _i }/video/upload/${ h }` : `https://${ _i }/image/upload/f_auto,fl_lossy,q_auto/${ h }` : a;
        },
        _h = a => {
            if (!_l.some(e => a.includes(e)))
                return null;
            if (a.includes(_j) && !a.includes(`/${ _k }/`))
                return null;
            const i = a.split('/');
            if (!i || !i.length || i.length < 2)
                return null;
            const j = i[i.length - 2],
                k = i[i.length - 1];
            return j && k && j.startsWith('v') ? `${ j }/${ k }` : null;
        },
        _i = 'media.gimkit.com',
        _j = 'res.cloudinary.com',
        _k = 'gimkit-production',
        _l = [
            _i,
            _j
        ];
}), d.register('JuRCP', function(e, f) {
    a(e.exports, 'default', function() {
        return _j;
    });
    var g = d('gRbUn'),
        h = d('O0Kav');
    const i = h.lazy(() => d('bPSSr0'));
    var _j = a => (0, g.jsx)(h.Suspense, {
        fallback: a.fallback || null,
        children: (0, g.jsx)(i, {
            latex: a.latex
        })
    });
}), d.register('bPSSr0', function(e, f) {
    e.exports = Promise.all([
        import('./' + d('Dq3qN').resolve('emcKB')),
        import('./' + d('Dq3qN').resolve('5OCdz'))
    ]).then(() => d('vZVkZ'));
}), d.register('C0gCp', function(e, f) {
    e.exports = function(g) {
        return g && g.__esModule ? g : {
            default: g
        };
    };
}), d.register('Qd8s8', function(e, f) {});