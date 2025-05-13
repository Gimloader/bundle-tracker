function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _q;
    });
    var f = b('.....'),
        g = b('.....'),
        h = b('.....'),
        i = b('.....'),
        j = b('.....'),
        k = b('.....'),
        l = b('.....'),
        m = b('.....');
    let n;
    const o = g.lazy(() => b('.....')),
        p = g.lazy(() => b('.....'));
    var _q = () => {
        const [r, s] = g.useState(!0), [t, u] = g.useState(), v = (0, k.getUrlVariable)('id');
        if (g.useEffect(() => {
                if (v)
                    return v === l.TutorialConsts.mapId ? (u(i.ExperienceSource.map), void s(!1)) : void(0, k.request)({
                        url: `/api/matchmaker/intent/fetch-source/${ v }`,
                        success: w => {
                            u(w), s(!1);
                        },
                        error: () => {
                            u(i.ExperienceSource.original), s(!1);
                        }
                    });
                window.location.href = j.DASHBOARD;
            }, []), !r && t) {
            if (t === i.ExperienceSource.original)
                return (0, f.jsx)(g.Suspense, {
                    fallback: (0, f.jsx)(_r, {}),
                    children: (0, f.jsx)(o, {})
                });
            if (t === i.ExperienceSource.map)
                return (0, f.jsx)(g.Suspense, {
                    fallback: (0, f.jsx)(_r, {}),
                    children: (0, f.jsx)(p, {
                        createDetails: {
                            intentId: v
                        }
                    })
                });
        }
        return (0, f.jsx)(_r, {
            children: (0, f.jsx)(k.Title, {
                title: 'Host'
            })
        });
    };
    const _r = h.default.div(n || (n = (s => s)`
  flex: 1;
  background: ${ 0 };
`), m.default.background);
}), b.register('.....', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    let i;
    var j;
    let k;
    let l;
    var m;
    a(c.exports, 'QuestionType', function() {
        return e;
    }), a(c.exports, 'Privacy', function() {
        return g;
    }), a(c.exports, 'GameStatus', function() {
        return i;
    }), a(c.exports, 'GameType', function() {
        return k;
    }), a(c.exports, 'GameGoal', function() {
        return l;
    }), a(c.exports, 'themes', function() {
        return _r;
    }), a(c.exports, 'ExperienceSource', function() {
        return _s;
    }), (f = e || (e = {})).multipleChoice = 'mc', f.textInput = 'text', (h = g || (g = {})).public = 'public', h.private = 'private', (j = i || (i = {})).setup = 'setup', j.join = 'join', j.teams = 'teams', j.gameplay = 'gameplay', j.results = 'results', (k || (k = {})).live = 'live', (m = l || (l = {})).time = 'time', m.race = 'race', m.allIn = 'allIn';
    const n = '#ffffff',
        o = '#000000';
    let p;
    var q;
    (q = p || (p = {})).easy = 'easy', q.medium = 'medium', q.hard = 'hard', q.veryHard = 'veryHard', q.veryVeryHard = 'veryVeryHard';
    const _r = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: n
            },
            palette: [{
                    background: '#771322',
                    text: n
                },
                {
                    background: '#A85C15',
                    text: n
                },
                {
                    background: '#0D6B33',
                    text: n
                },
                {
                    background: '#076296',
                    text: n
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
                text: n
            },
            palette: [{
                    background: '#9E682A',
                    text: n
                },
                {
                    background: '#B54730',
                    text: n
                },
                {
                    background: '#8A9748',
                    text: n
                },
                {
                    background: '#F1B930',
                    text: n
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
                text: n
            },
            palette: [{
                    background: '#263238',
                    text: n
                },
                {
                    background: '#37474f',
                    text: n
                },
                {
                    background: '#455a64',
                    text: n
                },
                {
                    background: '#546e7a',
                    text: n
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
                text: n
            },
            palette: [{
                    background: '#220044',
                    text: n
                },
                {
                    background: '#330066',
                    text: n
                },
                {
                    background: '#3E007C',
                    text: n
                },
                {
                    background: '#4F1787',
                    text: n
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
                text: n
            },
            palette: [{
                    background: '#283593',
                    text: n
                },
                {
                    background: '#076296',
                    text: n
                },
                {
                    background: '#0277bd',
                    text: n
                },
                {
                    background: '#1565c0',
                    text: n
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
                text: n
            },
            palette: [{
                    background: '#385645',
                    text: n
                },
                {
                    background: '#425C49',
                    text: n
                },
                {
                    background: '#415641',
                    text: n
                },
                {
                    background: '#4C6349',
                    text: n
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
                text: n
            },
            palette: [{
                    background: '#F46F5A',
                    text: n
                },
                {
                    background: '#ED712D',
                    text: n
                },
                {
                    background: '#7A596A',
                    text: n
                },
                {
                    background: '#E8AB3C',
                    text: n
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
                text: n
            },
            palette: [{
                    background: '#001D3B',
                    text: n
                },
                {
                    background: '#FFAE52',
                    text: n
                },
                {
                    background: '#FE5963',
                    text: n
                },
                {
                    background: '#A71C94',
                    text: n
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
                background: o,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: o
                },
                {
                    background: '#FFC721',
                    text: o
                },
                {
                    background: '#FFD147',
                    text: o
                },
                {
                    background: '#FFCD38',
                    text: o
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let _s;
    var t;
    (t = _s || (_s = {})).original = 'original', t.map = 'map';
}), b.register('.....', function(c, d) {
    a(c.exports, 'TutorialConsts', function() {
        return _f;
    });
    var e = b('.....');
    const _f = {
        mapId: 'tutorial0001',
        topDevices: [
            e.default.characterSpawnPad,
            e.default.gimkitLiveQuestion,
            e.default.itemGranter,
            e.default.sentry,
            e.default.endGame
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
}), b.register('.....', function(c, d) {
    let e;
    var f;
    a(c.exports, 'default', function() {
        return _g;
    }), (f = e || (e = {})).scriptRunner = 'scriptRunner', f.rng = 'rng', f.editingAccessPoint = 'editingAccessPoint', f.luckyBlock = 'luckyBlock', f.chest = 'chest', f.jumpGranter = 'jumpGranter', f.teamColorTilesManager = 'teamColorTilesManager', f.changingBooth = 'changingBooth', f.popupListItem = 'popupListItem', f.gadgetModifier = 'gadgetModifier', f.zombieSpawnZone = 'zombieSpawnZone', f.zombieWaveDesigner = 'zombieWaveDesigner', f.zombieDesigner = 'zombieDesigner', f.zombieInvasion = 'zombieInvasion', f.codeUI = 'codeUI', f.damager = 'damager', f.cameraPoint = 'cameraPoint', f.blockingZone = 'blockingZone', f.character = 'character', f.classDesigner = 'classDesigner', f.backgroundTilesZone = 'backgroundTilesZone', f.proceduralTerrainZoneZoneInstruction = 'proceduralTerrainZoneZoneInstruction', f.proceduralTerrainZone = 'proceduralTerrainZone', f.dialogueAction = 'dialogueAction', f.dialogue = 'dialogue', f.voiceLine = 'voiceLine', f.scorebar = 'scorebar', f.outline = 'outline', f.ball = 'ball', f.damageBoost = 'damageBoost', f.checkpoint = 'checkpoint', f.playerPositionDetector = 'playerPositionDetector', f.itemImage = 'itemImage', f.mood = 'mood', f.playerAppearanceModifier = 'playerAppearanceModifier', f.waypoint = 'waypoint', f.flag = 'flag', f.checker = 'checker', f.trigger = 'trigger', f.counter = 'counter', f.teleporter = 'teleporter', f.itemGranter = 'itemGranter', f.characterSpawnPad = 'characterSpawnPad', f.textBillboard = 'textBillboard', f.prop = 'prop', f.barrier = 'barrier', f.button = 'button', f.droppedItem = 'droppedItem', f.property = 'property', f.mapOptions = 'mapOptions', f.teamSettings = 'teamSettings', f.imageBillboard = 'imageBillboard', f.gimkitLiveQuestion = 'gimkitLiveQuestion', f.ballZone = 'ballZone', f.zone = 'zone', f.captureFlagZone = 'captureFlagZone', f.textExplainer = 'textExplainer', f.relay = 'relay', f.cameraSize = 'cameraSize', f.music = 'music', f.speed = 'speed', f.soundEffect = 'soundEffect', f.inventoryItemManager = 'inventoryItemManager', f.guiDevice = 'guiDevice', f.lifecycle = 'lifecycle', f.endGame = 'endGame', f.countdown = 'countdown', f.shadow = 'shadow', f.characterProximity = 'characterProximity', f.repeater = 'repeater', f.vendingMachine = 'vendingMachine', f.teamSwitcher = 'teamSwitcher', f.notification = 'notification', f.endOfGameWidget = 'endOfGameWidget', f.respawn = 'respawn', f.xp = 'xp', f.assignmentCheckpoint = 'assignmentCheckpoint', f.assignmentContext = 'assignmentContext', f.placedSticker = 'placedSticker', f.wireRepeater = 'wireRepeater', f.movementMeter = 'movementMeter', f.craftingTable = 'craftingTable', f.craftingRecipe = 'craftingRecipe', f.startingInventory = 'startingInventory', f.healthGranter = 'healthGranter', f.sentry = 'sentry', f.knockoutManager = 'knockoutManager', f.laserBeam = 'laserBeam', f.laserBeamManager = 'laserBeamManager', f.cosmosModifier = 'cosmosModifier', f.passwordLock = 'passwordLock', f.itemSpawner = 'itemSpawner', f.tagZone = 'tagZone', f.achievement = 'achievement';
    var _g = e;
}), b.register('.....', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        background: '#673ab7'
    };
}), b.register('.....', function(c, d) {
    c.exports = Promise.all([
        import('./' + b('.....').resolve('b7Bno')),
        import('./' + b('.....').resolve('GSLeG')),
        import('./' + b('.....').resolve('in5Zm')),
        import('./' + b('.....').resolve('emV63')),
        import('./' + b('.....').resolve('aepPt')),
        import('./' + b('.....').resolve('jScf8')),
        import('./' + b('.....').resolve('fdG0P')),
        import('./' + b('.....').resolve('h8E7U')),
        import('./' + b('.....').resolve('cvq1E')),
        import('./' + b('.....').resolve('NHzsh')),
        import('./' + b('.....').resolve('d6saV')),
        import('./' + b('.....').resolve('6fGMH')),
        import('./' + b('.....').resolve('5BLiG')),
        import('./' + b('.....').resolve('83uYn')),
        import('./' + b('.....').resolve('f3m2d')),
        import('./' + b('.....').resolve('k0ZSq')),
        import('./' + b('.....').resolve('ehnD9')),
        import('./' + b('.....').resolve('6AbL8'))
    ]).then(() => b('.....'));
}), b.register('.....', function(c, d) {
    c.exports = Promise.all([
        import('./' + b('.....').resolve('b7Bno')),
        import('./' + b('.....').resolve('1gjsp')),
        import('./' + b('.....').resolve('bgF9Q')),
        import('./' + b('.....').resolve('in5Zm')),
        import('./' + b('.....').resolve('emV63')),
        import('./' + b('.....').resolve('aepPt')),
        import('./' + b('.....').resolve('jScf8')),
        import('./' + b('.....').resolve('hEmsF')),
        import('./' + b('.....').resolve('fdG0P')),
        import('./' + b('.....').resolve('h8E7U')),
        import('./' + b('.....').resolve('jZGfx')),
        import('./' + b('.....').resolve('cvq1E')),
        import('./' + b('.....').resolve('NHzsh')),
        import('./' + b('.....').resolve('2odS1')),
        import('./' + b('.....').resolve('d6saV')),
        import('./' + b('.....').resolve('6fGMH')),
        import('./' + b('.....').resolve('3AR7P')),
        import('./' + b('.....').resolve('jS4Db')),
        import('./' + b('.....').resolve('5BLiG')),
        import('./' + b('.....').resolve('83uYn')),
        import('./' + b('.....').resolve('f3m2d')),
        import('./' + b('.....').resolve('k0ZSq')),
        import('./' + b('.....').resolve('ehnD9')),
        import('./' + b('.....').resolve('8PKLa'))
    ]).then(() => b('.....'));
});