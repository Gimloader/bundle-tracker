function a(a, b, r, s) {
    Object.defineProperty(a, b, {
        get: r,
        set: s,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('I5wzs', function(r, s) {
    var c;
    c = r.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(r.exports, 'default', function() {
        return o;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('h99Nu'),
        g = b('PDLD/2'),
        h = b('q721a'),
        i = b('PjB0f'),
        j = b('aSd8d'),
        k = b('7dRR2');
    let l;
    const m = e.lazy(() => b('DKTVT')),
        n = e.lazy(() => b('/ClNH'));
    var o = () => {
        const [p, q] = e.useState(!0), [r, s] = e.useState(), t = (0, i.getUrlVariable)('id');
        if (e.useEffect(() => {
                if (t)
                    return t === j.TutorialConsts.mapId ? (s(g.ExperienceSource.map), void q(!1)) : void(0, i.request)({
                        url: `/api/matchmaker/intent/fetch-source/${ t }`,
                        success: p => {
                            s(p), q(!1);
                        },
                        error: () => {
                            s(g.ExperienceSource.original), q(!1);
                        }
                    });
                window.location.href = h.DASHBOARD;
            }, []), !p && r) {
            if (r === g.ExperienceSource.original)
                return (0, d.jsx)(e.Suspense, {
                    fallback: (0, d.jsx)(p, {}),
                    children: (0, d.jsx)(m, {})
                });
            if (r === g.ExperienceSource.map)
                return (0, d.jsx)(e.Suspense, {
                    fallback: (0, d.jsx)(p, {}),
                    children: (0, d.jsx)(n, {
                        createDetails: {
                            intentId: t
                        }
                    })
                });
        }
        return (0, d.jsx)(p, {
            children: (0, d.jsx)(i.Title, {
                title: 'Host'
            })
        });
    };
    const p = f.default.div(l || (l = (a => a)`
  flex: 1;
  background: ${ 0 };
`), k.default.background);
}), b.register('PDLD/2', function(b, r) {
    let c;
    var d;
    let e;
    var f;
    let g;
    var h;
    let i;
    let j;
    var k;
    a(b.exports, 'QuestionType', function() {
        return c;
    }), a(b.exports, 'Privacy', function() {
        return e;
    }), a(b.exports, 'GameStatus', function() {
        return g;
    }), a(b.exports, 'GameType', function() {
        return i;
    }), a(b.exports, 'GameGoal', function() {
        return j;
    }), a(b.exports, 'themes', function() {
        return p;
    }), a(b.exports, 'ExperienceSource', function() {
        return q;
    }), (d = c || (c = {})).multipleChoice = 'mc', d.textInput = 'text', (f = e || (e = {})).public = 'public', f.private = 'private', (h = g || (g = {})).setup = 'setup', h.join = 'join', h.teams = 'teams', h.gameplay = 'gameplay', h.results = 'results', (i || (i = {})).live = 'live', (k = j || (j = {})).time = 'time', k.race = 'race', k.allIn = 'allIn';
    const l = '#ffffff',
        m = '#000000';
    let n;
    var o;
    (o = n || (n = {})).easy = 'easy', o.medium = 'medium', o.hard = 'hard', o.veryHard = 'veryHard', o.veryVeryHard = 'veryVeryHard';
    const p = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: l
            },
            palette: [{
                    background: '#771322',
                    text: l
                },
                {
                    background: '#A85C15',
                    text: l
                },
                {
                    background: '#0D6B33',
                    text: l
                },
                {
                    background: '#076296',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#9E682A',
                    text: l
                },
                {
                    background: '#B54730',
                    text: l
                },
                {
                    background: '#8A9748',
                    text: l
                },
                {
                    background: '#F1B930',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#263238',
                    text: l
                },
                {
                    background: '#37474f',
                    text: l
                },
                {
                    background: '#455a64',
                    text: l
                },
                {
                    background: '#546e7a',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#220044',
                    text: l
                },
                {
                    background: '#330066',
                    text: l
                },
                {
                    background: '#3E007C',
                    text: l
                },
                {
                    background: '#4F1787',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#283593',
                    text: l
                },
                {
                    background: '#076296',
                    text: l
                },
                {
                    background: '#0277bd',
                    text: l
                },
                {
                    background: '#1565c0',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#385645',
                    text: l
                },
                {
                    background: '#425C49',
                    text: l
                },
                {
                    background: '#415641',
                    text: l
                },
                {
                    background: '#4C6349',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#F46F5A',
                    text: l
                },
                {
                    background: '#ED712D',
                    text: l
                },
                {
                    background: '#7A596A',
                    text: l
                },
                {
                    background: '#E8AB3C',
                    text: l
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
                text: l
            },
            palette: [{
                    background: '#001D3B',
                    text: l
                },
                {
                    background: '#FFAE52',
                    text: l
                },
                {
                    background: '#FE5963',
                    text: l
                },
                {
                    background: '#A71C94',
                    text: l
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
                background: m,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: m
                },
                {
                    background: '#FFC721',
                    text: m
                },
                {
                    background: '#FFD147',
                    text: m
                },
                {
                    background: '#FFCD38',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let q;
    var r;
    (r = q || (q = {})).original = 'original', r.map = 'map';
}), b.register('aSd8d', function(r, c) {
    a(r.exports, 'TutorialConsts', function() {
        return d;
    });
    var c = b('7X8h3');
    const d = {
        mapId: 'tutorial0001',
        topDevices: [
            c.default.characterSpawnPad,
            c.default.gimkitLiveQuestion,
            c.default.itemGranter,
            c.default.sentry,
            c.default.endGame
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
}), b.register('7X8h3', function(b, r) {
    let c;
    var d;
    a(b.exports, 'default', function() {
        return e;
    }), (d = c || (c = {})).luckyBlock = 'luckyBlock', d.chest = 'chest', d.jumpGranter = 'jumpGranter', d.teamColorTilesManager = 'teamColorTilesManager', d.changingBooth = 'changingBooth', d.popupListItem = 'popupListItem', d.gadgetModifier = 'gadgetModifier', d.zombieSpawnZone = 'zombieSpawnZone', d.zombieWaveDesigner = 'zombieWaveDesigner', d.zombieDesigner = 'zombieDesigner', d.zombieInvasion = 'zombieInvasion', d.codeUI = 'codeUI', d.damager = 'damager', d.cameraPoint = 'cameraPoint', d.blockingZone = 'blockingZone', d.character = 'character', d.classDesigner = 'classDesigner', d.backgroundTilesZone = 'backgroundTilesZone', d.proceduralTerrainZoneZoneInstruction = 'proceduralTerrainZoneZoneInstruction', d.proceduralTerrainZone = 'proceduralTerrainZone', d.dialogueAction = 'dialogueAction', d.dialogue = 'dialogue', d.voiceLine = 'voiceLine', d.scorebar = 'scorebar', d.outline = 'outline', d.ball = 'ball', d.damageBoost = 'damageBoost', d.checkpoint = 'checkpoint', d.playerPositionDetector = 'playerPositionDetector', d.itemImage = 'itemImage', d.mood = 'mood', d.playerAppearanceModifier = 'playerAppearanceModifier', d.waypoint = 'waypoint', d.flag = 'flag', d.checker = 'checker', d.trigger = 'trigger', d.counter = 'counter', d.teleporter = 'teleporter', d.itemGranter = 'itemGranter', d.characterSpawnPad = 'characterSpawnPad', d.textBillboard = 'textBillboard', d.prop = 'prop', d.barrier = 'barrier', d.button = 'button', d.droppedItem = 'droppedItem', d.property = 'property', d.mapOptions = 'mapOptions', d.teamSettings = 'teamSettings', d.imageBillboard = 'imageBillboard', d.gimkitLiveQuestion = 'gimkitLiveQuestion', d.ballZone = 'ballZone', d.zone = 'zone', d.captureFlagZone = 'captureFlagZone', d.textExplainer = 'textExplainer', d.relay = 'relay', d.cameraSize = 'cameraSize', d.music = 'music', d.speed = 'speed', d.soundEffect = 'soundEffect', d.inventoryItemManager = 'inventoryItemManager', d.guiDevice = 'guiDevice', d.lifecycle = 'lifecycle', d.endGame = 'endGame', d.countdown = 'countdown', d.shadow = 'shadow', d.characterProximity = 'characterProximity', d.repeater = 'repeater', d.vendingMachine = 'vendingMachine', d.teamSwitcher = 'teamSwitcher', d.notification = 'notification', d.endOfGameWidget = 'endOfGameWidget', d.respawn = 'respawn', d.xp = 'xp', d.assignmentCheckpoint = 'assignmentCheckpoint', d.assignmentContext = 'assignmentContext', d.placedSticker = 'placedSticker', d.wireRepeater = 'wireRepeater', d.movementMeter = 'movementMeter', d.craftingTable = 'craftingTable', d.craftingRecipe = 'craftingRecipe', d.startingInventory = 'startingInventory', d.healthGranter = 'healthGranter', d.sentry = 'sentry', d.knockoutManager = 'knockoutManager', d.laserBeam = 'laserBeam', d.laserBeamManager = 'laserBeamManager', d.cosmosModifier = 'cosmosModifier', d.passwordLock = 'passwordLock', d.itemSpawner = 'itemSpawner', d.tagZone = 'tagZone';
    var e = f;
}), b.register('7dRR2', function(b, r) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        background: '#673ab7'
    };
}), b.register('DKTVT', function(a, r) {
    a.exports = Promise.all([
        import('./' + b('tIOy4').resolve('7pIGN')),
        import('./' + b('tIOy4').resolve('bmWmo')),
        import('./' + b('tIOy4').resolve('cbvsE')),
        import('./' + b('tIOy4').resolve('bRZSS')),
        import('./' + b('tIOy4').resolve('9pAEb')),
        import('./' + b('tIOy4').resolve('eIECe')),
        import('./' + b('tIOy4').resolve('3J6Of')),
        import('./' + b('tIOy4').resolve('kKpXS')),
        import('./' + b('tIOy4').resolve('6o2QI')),
        import('./' + b('tIOy4').resolve('3R3up')),
        import('./' + b('tIOy4').resolve('lFChG')),
        import('./' + b('tIOy4').resolve('jnRhB')),
        import('./' + b('tIOy4').resolve('935wq')),
        import('./' + b('tIOy4').resolve('cBIIp')),
        import('./' + b('tIOy4').resolve('6T3MR')),
        import('./' + b('tIOy4').resolve('jM8u1')),
        import('./' + b('tIOy4').resolve('99xGA')),
        import('./' + b('tIOy4').resolve('6AbL8'))
    ]).then(() => b('uPF4C'));
}), b.register('/ClNH', function(a, r) {
    a.exports = Promise.all([
        import('./' + b('tIOy4').resolve('7pIGN')),
        import('./' + b('tIOy4').resolve('fFyZG')),
        import('./' + b('tIOy4').resolve('kwPwx')),
        import('./' + b('tIOy4').resolve('cbvsE')),
        import('./' + b('tIOy4').resolve('bRZSS')),
        import('./' + b('tIOy4').resolve('9pAEb')),
        import('./' + b('tIOy4').resolve('eIECe')),
        import('./' + b('tIOy4').resolve('gXDTI')),
        import('./' + b('tIOy4').resolve('3J6Of')),
        import('./' + b('tIOy4').resolve('kKpXS')),
        import('./' + b('tIOy4').resolve('11biZ')),
        import('./' + b('tIOy4').resolve('6o2QI')),
        import('./' + b('tIOy4').resolve('3R3up')),
        import('./' + b('tIOy4').resolve('5xMxo')),
        import('./' + b('tIOy4').resolve('lFChG')),
        import('./' + b('tIOy4').resolve('jnRhB')),
        import('./' + b('tIOy4').resolve('8SWDc')),
        import('./' + b('tIOy4').resolve('8Pt2G')),
        import('./' + b('tIOy4').resolve('935wq')),
        import('./' + b('tIOy4').resolve('cBIIp')),
        import('./' + b('tIOy4').resolve('6T3MR')),
        import('./' + b('tIOy4').resolve('jM8u1')),
        import('./' + b('tIOy4').resolve('99xGA')),
        import('./' + b('tIOy4').resolve('8PKLa'))
    ]).then(() => b('5F55/'));
});