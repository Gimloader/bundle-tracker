function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('qZ7qT', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _q(b.exports, 'default', function() {
        return _p;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('6XgQB1'),
        i = a('gs4MT'),
        j = a('PMl60'),
        k = a('D6J6Y'),
        l = a('3mdhc');
    let m;
    const n = f.lazy(() => a('5Q/qq')),
        o = f.lazy(() => a('40EZl'));
    var _p = () => {
        const [_q, r] = f.useState(!0), [s, t] = f.useState(), u = (0, j.getUrlVariable)('id');
        if (f.useEffect(() => {
                if (u)
                    return u === k.TutorialConsts.mapId ? (t(h.ExperienceSource.map), void r(!1)) : void(0, j.request)({
                        url: `/api/matchmaker/intent/fetch-source/${ u }`,
                        success: _q => {
                            t(_q), r(!1);
                        },
                        error: () => {
                            t(h.ExperienceSource.original), r(!1);
                        }
                    });
                window.location.href = i.DASHBOARD;
            }, []), !_q && s) {
            if (s === h.ExperienceSource.original)
                return (0, e.jsx)(f.Suspense, {
                    fallback: (0, e.jsx)(_q, {}),
                    children: (0, e.jsx)(n, {})
                });
            if (s === h.ExperienceSource.map)
                return (0, e.jsx)(f.Suspense, {
                    fallback: (0, e.jsx)(_q, {}),
                    children: (0, e.jsx)(o, {
                        createDetails: {
                            intentId: u
                        }
                    })
                });
        }
        return (0, e.jsx)(_q, {
            children: (0, e.jsx)(j.Title, {
                title: 'Host'
            })
        });
    };
    const _q = g.default.div(m || (m = (_b => _b)`
  flex: 1;
  background: ${ 0 };
`), l.default.background);
}), a.register('6XgQB1', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    let j;
    let k;
    var l;
    _b(b.exports, 'QuestionType', function() {
        return d;
    }), _b(b.exports, 'Privacy', function() {
        return f;
    }), _b(b.exports, 'GameStatus', function() {
        return h;
    }), _b(b.exports, 'GameType', function() {
        return j;
    }), _b(b.exports, 'GameGoal', function() {
        return k;
    }), _b(b.exports, 'themes', function() {
        return _q;
    }), _b(b.exports, 'ExperienceSource', function() {
        return _r;
    }), (e = d || (d = {})).multipleChoice = 'mc', e.textInput = 'text', (g = f || (f = {})).public = 'public', g.private = 'private', (i = h || (h = {})).setup = 'setup', i.join = 'join', i.teams = 'teams', i.gameplay = 'gameplay', i.results = 'results', (j || (j = {})).live = 'live', (l = k || (k = {})).time = 'time', l.race = 'race', l.allIn = 'allIn';
    const m = '#ffffff',
        n = '#000000';
    let o;
    var p;
    (p = o || (o = {})).easy = 'easy', p.medium = 'medium', p.hard = 'hard', p.veryHard = 'veryHard', p.veryVeryHard = 'veryVeryHard';
    const _q = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: m
            },
            palette: [{
                    background: '#771322',
                    text: m
                },
                {
                    background: '#A85C15',
                    text: m
                },
                {
                    background: '#0D6B33',
                    text: m
                },
                {
                    background: '#076296',
                    text: m
                }
            ],
            owned: !0,
            isActive: !0
        },
        {
            cost: 5,
            name: 'Thanksgiving',
            description: 'The perfect theme to show your thanks',
            question: {
                background: '#6C2F00',
                text: m
            },
            palette: [{
                    background: '#9E682A',
                    text: m
                },
                {
                    background: '#B54730',
                    text: m
                },
                {
                    background: '#8A9748',
                    text: m
                },
                {
                    background: '#F1B930',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 10,
            name: 'Night',
            description: 'A little easier on the eyes',
            question: {
                background: '#000a12',
                text: m
            },
            palette: [{
                    background: '#263238',
                    text: m
                },
                {
                    background: '#37474f',
                    text: m
                },
                {
                    background: '#455a64',
                    text: m
                },
                {
                    background: '#546e7a',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500000,
            name: 'Thanos',
            description: 'Perfectly balanced, as all things should be',
            question: {
                background: '#0D0019',
                text: m
            },
            palette: [{
                    background: '#220044',
                    text: m
                },
                {
                    background: '#330066',
                    text: m
                },
                {
                    background: '#3E007C',
                    text: m
                },
                {
                    background: '#4F1787',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 2000,
            name: 'Ocean',
            description: 'Under the sea...',
            question: {
                background: '#000063',
                text: m
            },
            palette: [{
                    background: '#283593',
                    text: m
                },
                {
                    background: '#076296',
                    text: m
                },
                {
                    background: '#0277bd',
                    text: m
                },
                {
                    background: '#1565c0',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000,
            name: 'Forest',
            description: 'A walk through the woods',
            question: {
                background: '#4c3d33',
                text: m
            },
            palette: [{
                    background: '#385645',
                    text: m
                },
                {
                    background: '#425C49',
                    text: m
                },
                {
                    background: '#415641',
                    text: m
                },
                {
                    background: '#4C6349',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 1250,
            name: 'Sunset',
            description: 'Take a breather',
            question: {
                background: '#7F7496',
                text: m
            },
            palette: [{
                    background: '#F46F5A',
                    text: m
                },
                {
                    background: '#ED712D',
                    text: m
                },
                {
                    background: '#7A596A',
                    text: m
                },
                {
                    background: '#E8AB3C',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 750,
            name: 'Pastel',
            description: 'Lighten the mood',
            question: {
                background: '#FFbfd1',
                text: '#434343'
            },
            palette: [{
                    background: '#FFA69E',
                    text: '#5b5b5b'
                },
                {
                    background: '#FCF6BF',
                    text: '#5b5b5b'
                },
                {
                    background: '#D0F4DE',
                    text: '#5b5b5b'
                },
                {
                    background: '#93E1D8',
                    text: '#5b5b5b'
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500,
            name: 'Retro',
            description: 'Old school...',
            question: {
                background: '#9C0022',
                text: m
            },
            palette: [{
                    background: '#001D3B',
                    text: m
                },
                {
                    background: '#FFAE52',
                    text: m
                },
                {
                    background: '#FE5963',
                    text: m
                },
                {
                    background: '#A71C94',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000000,
            name: 'Pure Gold',
            description: 'Now you\'re just showing off',
            question: {
                background: n,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: n
                },
                {
                    background: '#FFC721',
                    text: n
                },
                {
                    background: '#FFD147',
                    text: n
                },
                {
                    background: '#FFCD38',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let _r;
    var s;
    (s = _r || (_r = {})).original = 'original', s.map = 'map';
}), a.register('D6J6Y', function(b, c) {
    _b(b.exports, 'TutorialConsts', function() {
        return _e;
    });
    var d = a('cPBfb');
    const _e = {
        mapId: 'tutorial0001',
        topDevices: [
            d.default.characterSpawnPad,
            d.default.gimkitLiveQuestion,
            d.default.itemGranter,
            d.default.sentry,
            d.default.endGame
        ],
        topProps: [
            'bare-tree-1',
            'bare-tree-2',
            'bare-tree-3',
            'snow-tree-1',
            'snow-tree-1-dark',
            'snow-tree-2',
            'snow-tree-2-dark',
            'snow-tree-3',
            'snow-tree-3-dark'
        ],
        topTerrain: [
            'Snow',
            'Snowy Grass'
        ]
    };
}), a.register('cPBfb', function(b, c) {
    let d;
    var e;
    _b(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).scriptRunner = 'scriptRunner', e.rng = 'rng', e.editingAccessPoint = 'editingAccessPoint', e.luckyBlock = 'luckyBlock', e.chest = 'chest', e.jumpGranter = 'jumpGranter', e.teamColorTilesManager = 'teamColorTilesManager', e.changingBooth = 'changingBooth', e.popupListItem = 'popupListItem', e.gadgetModifier = 'gadgetModifier', e.zombieSpawnZone = 'zombieSpawnZone', e.zombieWaveDesigner = 'zombieWaveDesigner', e.zombieDesigner = 'zombieDesigner', e.zombieInvasion = 'zombieInvasion', e.codeUI = 'codeUI', e.damager = 'damager', e.cameraPoint = 'cameraPoint', e.blockingZone = 'blockingZone', e.character = 'character', e.classDesigner = 'classDesigner', e.backgroundTilesZone = 'backgroundTilesZone', e.proceduralTerrainZoneZoneInstruction = 'proceduralTerrainZoneZoneInstruction', e.proceduralTerrainZone = 'proceduralTerrainZone', e.dialogueAction = 'dialogueAction', e.dialogue = 'dialogue', e.voiceLine = 'voiceLine', e.scorebar = 'scorebar', e.outline = 'outline', e.ball = 'ball', e.damageBoost = 'damageBoost', e.checkpoint = 'checkpoint', e.playerPositionDetector = 'playerPositionDetector', e.itemImage = 'itemImage', e.mood = 'mood', e.playerAppearanceModifier = 'playerAppearanceModifier', e.waypoint = 'waypoint', e.flag = 'flag', e.checker = 'checker', e.trigger = 'trigger', e.counter = 'counter', e.teleporter = 'teleporter', e.itemGranter = 'itemGranter', e.characterSpawnPad = 'characterSpawnPad', e.textBillboard = 'textBillboard', e.prop = 'prop', e.barrier = 'barrier', e.button = 'button', e.droppedItem = 'droppedItem', e.property = 'property', e.mapOptions = 'mapOptions', e.teamSettings = 'teamSettings', e.imageBillboard = 'imageBillboard', e.gimkitLiveQuestion = 'gimkitLiveQuestion', e.ballZone = 'ballZone', e.zone = 'zone', e.captureFlagZone = 'captureFlagZone', e.textExplainer = 'textExplainer', e.relay = 'relay', e.cameraSize = 'cameraSize', e.music = 'music', e.speed = 'speed', e.soundEffect = 'soundEffect', e.inventoryItemManager = 'inventoryItemManager', e.guiDevice = 'guiDevice', e.lifecycle = 'lifecycle', e.endGame = 'endGame', e.countdown = 'countdown', e.shadow = 'shadow', e.characterProximity = 'characterProximity', e.repeater = 'repeater', e.vendingMachine = 'vendingMachine', e.teamSwitcher = 'teamSwitcher', e.notification = 'notification', e.endOfGameWidget = 'endOfGameWidget', e.respawn = 'respawn', e.xp = 'xp', e.assignmentCheckpoint = 'assignmentCheckpoint', e.assignmentContext = 'assignmentContext', e.placedSticker = 'placedSticker', e.wireRepeater = 'wireRepeater', e.movementMeter = 'movementMeter', e.craftingTable = 'craftingTable', e.craftingRecipe = 'craftingRecipe', e.startingInventory = 'startingInventory', e.healthGranter = 'healthGranter', e.sentry = 'sentry', e.knockoutManager = 'knockoutManager', e.laserBeam = 'laserBeam', e.laserBeamManager = 'laserBeamManager', e.cosmosModifier = 'cosmosModifier', e.passwordLock = 'passwordLock', e.itemSpawner = 'itemSpawner', e.tagZone = 'tagZone', e.achievement = 'achievement';
    var _f = d;
}), a.register('3mdhc', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        background: '#673ab7'
    };
}), a.register('5Q/qq', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('b7Bno')),
        import('./' + a('HmN9A').resolve('GSLeG')),
        import('./' + a('HmN9A').resolve('in5Zm')),
        import('./' + a('HmN9A').resolve('emV63')),
        import('./' + a('HmN9A').resolve('aepPt')),
        import('./' + a('HmN9A').resolve('jScf8')),
        import('./' + a('HmN9A').resolve('fdG0P')),
        import('./' + a('HmN9A').resolve('h8E7U')),
        import('./' + a('HmN9A').resolve('cvq1E')),
        import('./' + a('HmN9A').resolve('NHzsh')),
        import('./' + a('HmN9A').resolve('d6saV')),
        import('./' + a('HmN9A').resolve('6fGMH')),
        import('./' + a('HmN9A').resolve('5BLiG')),
        import('./' + a('HmN9A').resolve('83uYn')),
        import('./' + a('HmN9A').resolve('f3m2d')),
        import('./' + a('HmN9A').resolve('k0ZSq')),
        import('./' + a('HmN9A').resolve('ehnD9')),
        import('./' + a('HmN9A').resolve('6AbL8'))
    ]).then(() => a('LQ+V+'));
}), a.register('40EZl', function(b, c) {
    b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('b7Bno')),
        import('./' + a('HmN9A').resolve('2lWdt')),
        import('./' + a('HmN9A').resolve('1gjsp')),
        import('./' + a('HmN9A').resolve('in5Zm')),
        import('./' + a('HmN9A').resolve('emV63')),
        import('./' + a('HmN9A').resolve('aepPt')),
        import('./' + a('HmN9A').resolve('jScf8')),
        import('./' + a('HmN9A').resolve('hEmsF')),
        import('./' + a('HmN9A').resolve('fdG0P')),
        import('./' + a('HmN9A').resolve('h8E7U')),
        import('./' + a('HmN9A').resolve('jZGfx')),
        import('./' + a('HmN9A').resolve('cvq1E')),
        import('./' + a('HmN9A').resolve('NHzsh')),
        import('./' + a('HmN9A').resolve('2odS1')),
        import('./' + a('HmN9A').resolve('d6saV')),
        import('./' + a('HmN9A').resolve('6fGMH')),
        import('./' + a('HmN9A').resolve('3AR7P')),
        import('./' + a('HmN9A').resolve('jS4Db')),
        import('./' + a('HmN9A').resolve('5BLiG')),
        import('./' + a('HmN9A').resolve('83uYn')),
        import('./' + a('HmN9A').resolve('f3m2d')),
        import('./' + a('HmN9A').resolve('k0ZSq')),
        import('./' + a('HmN9A').resolve('ehnD9')),
        import('./' + a('HmN9A').resolve('8PKLa'))
    ]).then(() => a('AQ78Z'));
});