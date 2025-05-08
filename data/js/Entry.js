function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'Container', function () {
        return _p;
    }), a(c.exports, 'default', function () {
        return _o;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....');
    let n;
    var _o = () => {
        const [p, q] = g.useState(null), [r, s] = (0, k.useBoolean)(!1);
        g.useEffect(() => {
            (0, k.request)({
                url: '/api/matchmaker/intent/map/tutorial/create',
                success: t => {
                    q(t);
                },
                error: t => {
                    (0, k.throwMessageError)({
                        e: t,
                        default: { title: 'There was an error loading into the tutorial.' },
                        onOk: () => window.location.href = '/'
                    });
                }
            });
        }, []);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(k.Title, { title: 'Gimkit Creative Tutorial' }),
                p ? r ? (0, f.jsx)(m.default, {}) : (0, f.jsx)(l.default, {
                    intentId: p,
                    onTutorialComplete: s
                }) : (0, f.jsx)(_p, { children: (0, f.jsx)(j.default, { size: 'large' }) })
            ]
        });
    };
    const _p = (0, h.default)(i.Centered).attrs({ className: 'maxAll' })(n || (n = (q => q)``));
}), b.register('.....', function (c, d) {
    a(c.exports, 'Centered', function () {
        return _k;
    }), a(c.exports, 'VerticallyCentered', function () {
        return _l;
    }), a(c.exports, 'CenteredColumn', function () {
        return _m;
    }), a(c.exports, 'VerticalCentered', function () {
        return _n;
    });
    var e = b('.....');
    let f, g, h, i, j = k => k;
    const _k = e.default.div.attrs({ className: 'flex-center' })(f || (f = j``)), _l = e.default.div.attrs({ className: 'flex vc' })(g || (g = j``)), _m = (0, e.default)(_k).attrs({ className: 'flex-column' })(h || (h = j``)), _n = e.default.div.attrs({ className: 'flex vc' })(i || (i = j``));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _C;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....');
    let r, s, t, u, v, w, x, y, z, A, B = C => C;
    var _C = D => {
        const [E, F] = h.useState(0), G = h.useRef(null), H = l.TutorialData.steps[E].text, I = l.TutorialData.steps[E].cb, J = I === l.OnNextClicked, K = (L, M) => {
                const N = l.TutorialData.steps[M];
                N && N.cb !== l.OnNextClicked && (N.completed || N.cb(L) && (N.cb = l.OnNextClicked));
            };
        (0, k.SetTutorialEventListener)(L => {
            for (let M = 1; M < 6; M++)
                K(L, E + M);
            I(L) && E < l.TutorialData.steps.length - 1 && (() => {
                for (let N = 1; N < l.TutorialData.steps.length; N++) {
                    const O = l.TutorialData.steps[E + N];
                    if (O && !O.completed) {
                        M(E + N);
                        break;
                    }
                }
            })();
        });
        const [L, M] = h.useState(!0);
        h.useEffect(() => {
            M(!0);
            const N = setTimeout(() => {
                M(!1);
            }, 1500);
            return () => {
                clearTimeout(N);
            };
        }, [E]), h.useEffect(() => {
            const N = setInterval(() => {
                var O;
                null === (O = G.current) || void 0 === O || O.focus();
            }, 100);
            return () => {
                clearInterval(N);
            };
        }, []);
        const N = `/host?id=${ D.intentId }`, O = E === l.TutorialData.steps.length - 1, P = O ? 'Claim Reward' : 'Next';
        return (0, e.jsxs)(_D, {
            children: [
                (0, e.jsx)(m.Title, {
                    title: 'Gimkit Creative Tutorial',
                    override: !0
                }),
                (0, e.jsxs)(_E, {
                    children: [
                        (0, e.jsx)(_F, {
                            children: (0, e.jsx)('iframe', {
                                ref: G,
                                style: { border: 'none' },
                                className: 'maxAll',
                                width: '100%',
                                height: '100%',
                                src: N,
                                title: 'Creative Tutorial',
                                allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            })
                        }),
                        (0, e.jsx)(_G, {
                            children: (0, e.jsx)(q.default, {
                                children: (0, e.jsxs)(_H, {
                                    children: [
                                        (0, e.jsx)(_I, { src: (0, g.default)('characters/spine/preview/construction.png') }),
                                        (0, e.jsx)(_J, {
                                            children: (0, e.jsx)(j.default, {
                                                percent: O ? 99.99 : E / l.TutorialData.steps.length * 100,
                                                status: 'active',
                                                style: {
                                                    width: '80%',
                                                    maxWidth: 450,
                                                    marginTop: 30
                                                },
                                                trailColor: 'rgba(255, 255, 255, 0.2)',
                                                showInfo: !1
                                            })
                                        }),
                                        (0, e.jsx)(_K, { children: (0, e.jsx)(_L, { children: H }) }),
                                        !J && !O || L ? (0, e.jsx)(_M, {}) : (0, e.jsx)(_M, {
                                            className: 'animated fadeIn',
                                            children: (0, e.jsx)(n.default, {
                                                type: 'success',
                                                customFontWeight: o.FontWeights.Bold,
                                                onClick: () => {
                                                    O ? D.onTutorialComplete() : (0, k.EmitTutorialEvent)({ event: k.TutorialEventName.NEXT });
                                                },
                                                ariaLabel: P,
                                                children: P
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        });
    };
    const _D = i.default.div.attrs({ className: 'flex hc' })(r || (r = B`
  flex: 1;
  background: ${ 0 };
`), f.default.BackgroundPurple), _E = (0, i.default)(p.CenteredColumn).attrs({ className: 'maxAll' })(s || (s = B`
  flex-direction: column;
`)), _F = i.default.div(t || (t = B`
  flex: 1;
  width: 100%;
`)), _G = i.default.div.attrs({ className: 'maxWidth' })(u || (u = B`
  min-height: ${ 0 }px;
  box-shadow: 0px 2px 14px 0px black;
  background: #182673;
  color: ${ 0 };
  overflow: hidden;
  flex-shrink: 0;
`), 125, f.default.White), _H = i.default.div.attrs({ className: 'maxAll flex vc between' })(v || (v = B`
  position: relative;
  min-height: ${ 0 }px;
  padding: 25px 30px;
  padding-top: 40px;
`), 125), _I = i.default.img(w || (w = B`
  height: 153px;
  position: absolute;
  bottom: -32px;
  left: -22px;
  opacity: 0.9;
  transform: rotate(356deg);
`)), _J = i.default.div.attrs({ className: 'maxWidth flex-center' })(x || (x = B`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 20px;
`)), _K = i.default.div(y || (y = B`
  font-size: 19px;
  margin-left: 105px;
`)), _L = i.default.div(z || (z = B`
  text-align: left;
  margin: auto auto auto 0;
`)), _M = i.default.div.attrs({ className: 'flex hc vc maxHeight' })(A || (A = B`
  margin-left: 35px;
  flex-shrink: 0;
  min-width: 85px;
`));
}), b.register('.....', function (c, d) {
    let e;
    a(c.exports, 'default', function () {
        return _f;
    });
    var _f = g => {
        const h = (() => {
            var i;
            if (e)
                return e;
            const j = null === (i = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === i ? void 0 : i.getAttribute('content');
            return void 0 !== j && '$CDN_MAP_ASSETS_URL' !== j ? (e = j, e) : '';
        })();
        return g.startsWith('/assets/map') ? `${ h }${ g }` : `${ h }/assets/map/${ g }`;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'TutorialEventName', function () {
        return _g;
    }), a(c.exports, 'EmitTutorialEvent', function () {
        return _j;
    }), a(c.exports, 'SetTutorialEventListener', function () {
        return _k;
    });
    var e = b('.....');
    const f = 'tutorial_event';
    let _g;
    var h;
    let i;
    (h = _g || (_g = {})).NEXT = 'next', h.OPEN_ADD_MENU = 'open_add_menu', h.OPEN_ADD_SUBMENU = 'open_add_submenu', h.SELECT_PROP_TO_ADD = 'select_prop_to_add', h.SELECT_TERRAIN_TO_ADD = 'select_terrain_to_add', h.SELECT_DEVICE_TO_ADD = 'select_device_to_add', h.START_COPY_DEVICE = 'start_copy_device', h.PLACE_DEVICE_DOWN = 'place_device_down', h.START_THE_GAME = 'start_the_game', h.ANSWER_A_QUESTION = 'answer_a_question', h.END_THE_GAME = 'end_the_game', h.END_THE_GAME_BY_DEVICE = 'end_the_game_by_device', h.RESTORE_THE_MAP = 'restore_the_map', h.OPEN_DEVICE_OPTIONS = 'open_device_options', h.CHANGE_DEVICE_OPTION = 'change_device_option', h.CLOSE_DEVICE_OPTIONS = 'close_device_options', h.START_ADDING_WIRE = 'start_adding_wire', h.START_WIRE_FROM_DEVICE = 'start_wire_from_device', h.END_WIRE_TO_DEVICE = 'end_wire_to_device', h.CONFIGURE_WIRE = 'configure_wire', h.GRANT_ITEM = 'grant_item', window.document.addEventListener(f, j => {
        i && i(j.detail);
    }, !1);
    const _j = k => {
            if (!(0, e.IsTutorial)() && k.event !== _g.NEXT)
                return;
            const l = new CustomEvent(f, { detail: k });
            window.top.document.dispatchEvent(l);
        }, _k = l => {
            i = l;
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'IsTutorial', function () {
        return _f;
    });
    var e = b('.....');
    const _f = () => window._mapId === e.TutorialConsts.mapId;
}), b.register('.....', function (c, d) {
    a(c.exports, 'TutorialConsts', function () {
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
}), b.register('.....', function (c, d) {
    let e;
    var f;
    a(c.exports, 'default', function () {
        return _g;
    }), (f = e || (e = {})).scriptRunner = 'scriptRunner', f.rng = 'rng', f.editingAccessPoint = 'editingAccessPoint', f.luckyBlock = 'luckyBlock', f.chest = 'chest', f.jumpGranter = 'jumpGranter', f.teamColorTilesManager = 'teamColorTilesManager', f.changingBooth = 'changingBooth', f.popupListItem = 'popupListItem', f.gadgetModifier = 'gadgetModifier', f.zombieSpawnZone = 'zombieSpawnZone', f.zombieWaveDesigner = 'zombieWaveDesigner', f.zombieDesigner = 'zombieDesigner', f.zombieInvasion = 'zombieInvasion', f.codeUI = 'codeUI', f.damager = 'damager', f.cameraPoint = 'cameraPoint', f.blockingZone = 'blockingZone', f.character = 'character', f.classDesigner = 'classDesigner', f.backgroundTilesZone = 'backgroundTilesZone', f.proceduralTerrainZoneZoneInstruction = 'proceduralTerrainZoneZoneInstruction', f.proceduralTerrainZone = 'proceduralTerrainZone', f.dialogueAction = 'dialogueAction', f.dialogue = 'dialogue', f.voiceLine = 'voiceLine', f.scorebar = 'scorebar', f.outline = 'outline', f.ball = 'ball', f.damageBoost = 'damageBoost', f.checkpoint = 'checkpoint', f.playerPositionDetector = 'playerPositionDetector', f.itemImage = 'itemImage', f.mood = 'mood', f.playerAppearanceModifier = 'playerAppearanceModifier', f.waypoint = 'waypoint', f.flag = 'flag', f.checker = 'checker', f.trigger = 'trigger', f.counter = 'counter', f.teleporter = 'teleporter', f.itemGranter = 'itemGranter', f.characterSpawnPad = 'characterSpawnPad', f.textBillboard = 'textBillboard', f.prop = 'prop', f.barrier = 'barrier', f.button = 'button', f.droppedItem = 'droppedItem', f.property = 'property', f.mapOptions = 'mapOptions', f.teamSettings = 'teamSettings', f.imageBillboard = 'imageBillboard', f.gimkitLiveQuestion = 'gimkitLiveQuestion', f.ballZone = 'ballZone', f.zone = 'zone', f.captureFlagZone = 'captureFlagZone', f.textExplainer = 'textExplainer', f.relay = 'relay', f.cameraSize = 'cameraSize', f.music = 'music', f.speed = 'speed', f.soundEffect = 'soundEffect', f.inventoryItemManager = 'inventoryItemManager', f.guiDevice = 'guiDevice', f.lifecycle = 'lifecycle', f.endGame = 'endGame', f.countdown = 'countdown', f.shadow = 'shadow', f.characterProximity = 'characterProximity', f.repeater = 'repeater', f.vendingMachine = 'vendingMachine', f.teamSwitcher = 'teamSwitcher', f.notification = 'notification', f.endOfGameWidget = 'endOfGameWidget', f.respawn = 'respawn', f.xp = 'xp', f.assignmentCheckpoint = 'assignmentCheckpoint', f.assignmentContext = 'assignmentContext', f.placedSticker = 'placedSticker', f.wireRepeater = 'wireRepeater', f.movementMeter = 'movementMeter', f.craftingTable = 'craftingTable', f.craftingRecipe = 'craftingRecipe', f.startingInventory = 'startingInventory', f.healthGranter = 'healthGranter', f.sentry = 'sentry', f.knockoutManager = 'knockoutManager', f.laserBeam = 'laserBeam', f.laserBeamManager = 'laserBeamManager', f.cosmosModifier = 'cosmosModifier', f.passwordLock = 'passwordLock', f.itemSpawner = 'itemSpawner', f.tagZone = 'tagZone', f.achievement = 'achievement';
    var _g = e;
}), b.register('.....', function (c, d) {
    a(c.exports, 'OnNextClicked', function () {
        return _m;
    }), a(c.exports, 'TutorialData', function () {
        return _p;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
    const _m = n => n.event === g.TutorialEventName.NEXT, n = o => (0, e.jsx)('span', {
            style: {
                fontWeight: 'bold',
                color: '#ffff94'
            },
            children: o.children
        }), o = () => (0, e.jsx)(e.Fragment, { children: (0, e.jsx)('br', {}) }), _p = {
            steps: [
                {
                    text: (0, e.jsxs)('div', {
                        children: [
                            'Hey there! Welcome to ',
                            (0, e.jsx)(n, { children: 'Gimkit Creative' }),
                            ', a tool which you can use to build your own maps, game modes, and more!'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)('div', {
                        children: [
                            'I\u2019ll be here to show you the basics of Gimkit Creative.',
                            (0, e.jsx)('br', {}),
                            'Once you get the basics down, you\'ll be able to build all sorts of maps & games!'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: 'Let\'s chat about the game you\'re going to build today!',
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'In this game, there will be an ',
                            (0, e.jsx)(n, { children: 'enemy you have to knockout' }),
                            ' ',
                            'to win the game!'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'However, you\'re going to start with ',
                            (0, e.jsx)(n, { children: 'nothing' }),
                            ' in your inventory! ',
                            (0, e.jsx)(o, {}),
                            'You\'ll have to answer a question correctly to earn a Snowball Launcher.'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Once you have that Snowball Launcher, you can use it to',
                            ' ',
                            (0, e.jsx)(n, { children: 'knockout the enemy!' })
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'To recap, in your game, you will...',
                            (0, e.jsxs)('ol', {
                                style: { marginTop: 10 },
                                children: [
                                    (0, e.jsx)('li', { children: 'Answer a question correctly' }),
                                    (0, e.jsx)('li', { children: 'Earn a Snowball Launcher' }),
                                    (0, e.jsx)('li', { children: 'Knockout the enemy with the Snowball Launcher' })
                                ]
                            })
                        ]
                    }),
                    cb: _m
                },
                {
                    text: 'You ready? Let\u2019s get building!',
                    cb: _m
                },
                {
                    text: (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsx)(n, { children: 'To add anything to your map' }),
                            ', click the',
                            ' ',
                            (0, e.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, e.jsx)(h.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, e.jsx)(i.default, { name: 'fas fa-plus' })
                                })
                            }),
                            ' ',
                            'button on the top right! Go ahead and click it now!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.OPEN_ADD_MENU
                },
                {
                    text: (0, e.jsxs)('div', {
                        children: [
                            'Nice! This is the ',
                            (0, e.jsx)(n, { children: 'Add Menu' }),
                            ', which is where you\u2019ll go to add things to your map. ',
                            (0, e.jsx)(o, {}),
                            'Terrain, Props, Devices, and Wires are all things you can add to your map. Let\u2019s start by selecting ',
                            (0, e.jsx)(n, { children: 'Terrain' }),
                            '.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.OPEN_ADD_SUBMENU && 'terrain' === q.menu
                },
                {
                    text: (0, e.jsxs)('div', {
                        children: [
                            (0, e.jsx)(n, { children: 'Terrain are the floors and walls of your map.' }),
                            ' As you can see, there are many different options to choose from! ',
                            (0, e.jsx)(o, {}),
                            ' Since this game will have the player using a Snowball Launcher, let\u2019s add some snow! Select the ',
                            (0, e.jsx)(n, { children: 'Snow' }),
                            ' terrain.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.SELECT_TERRAIN_TO_ADD && 'Snow' === q.terrainId
                },
                {
                    text: (0, e.jsxs)('div', {
                        children: [
                            'Awesome! You have the Snow Terrain selected, and you can start',
                            ' ',
                            (0, e.jsx)(n, { children: 'clicking to place it anywhere on the map!' }),
                            ' ',
                            (0, e.jsx)(o, {}),
                            ' Go ahead and place a bunch of snow on the map and',
                            ' ',
                            (0, e.jsx)(n, { children: 'click the Next Button when you\u2019re done!' })
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Looking good! But\u2026our map is looking a little empty. That is where',
                            ' ',
                            (0, e.jsx)(n, { children: 'props' }),
                            ' come in!'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(n, { children: 'Props are objects you can place on your map for decoration.' }),
                            ' ',
                            'Things like trees, tables, and chairs.',
                            ' ',
                            (0, e.jsx)(n, { children: 'Let\u2019s add some trees to liven things up!' }),
                            (0, e.jsx)(o, {}),
                            ' ',
                            (0, e.jsx)(o, {}),
                            'If you haven\u2019t yet, close out of the terrain adding screen by clicking the ',
                            (0, e.jsx)(n, { children: 'X' }),
                            ' button.',
                            (0, e.jsx)(o, {}),
                            'From there, open up the add menu again by clicking',
                            ' ',
                            (0, e.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, e.jsx)(h.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, e.jsx)(i.default, { name: 'fas fa-plus' })
                                })
                            }),
                            ' ',
                            'on the top right!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.OPEN_ADD_MENU
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'And now, select ',
                            (0, e.jsx)(n, { children: 'Props' }),
                            '!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.OPEN_ADD_SUBMENU && 'props' === q.menu
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Here you can find all the props available to use! ',
                            (0, e.jsx)(o, {}),
                            (0, e.jsx)(n, { children: 'Select one of the trees' }),
                            ' to begin adding it to the map!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.SELECT_PROP_TO_ADD && q.propId.toLocaleLowerCase().includes('tree')
                },
                {
                    text: 'Just click to place the tree down on your map!',
                    cb: q => q.event === g.TutorialEventName.PLACE_DEVICE_DOWN && q.device.deviceOption.id === f.default.prop && q.device.options.propId.toLocaleLowerCase().includes('tree')
                },
                {
                    text: (0, e.jsxs)('div', {
                        children: [
                            'Nice! But one tree isn\u2019t enough. Let\u2019s add another one. ',
                            (0, e.jsx)(o, {}),
                            ' ',
                            (0, e.jsx)(o, {}),
                            'To make things quicker, you can hover your mouse over the tree and then press',
                            ' ',
                            (0, e.jsx)('span', {
                                style: {
                                    color: j.default.Black,
                                    background: j.default.White,
                                    padding: '4px 8px',
                                    borderRadius: 4,
                                    margin: 4
                                },
                                children: 'C'
                            }),
                            ' ',
                            'on your keyboard (C for copy). Try that now!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.START_COPY_DEVICE && q.device.deviceOption.id === f.default.prop && q.device.options.propId.toLocaleLowerCase().includes('tree')
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Perfect! Now go place as many trees on your map as you would like, and then click the ',
                            (0, e.jsx)(n, { children: 'Next Button' }),
                            ' when you\u2019re ready!'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Awesome work. Terrain and props are how you get your map to look exactly how you want it to! ',
                            (0, e.jsx)(o, {}),
                            'But, how do you actually make this map\u2026a game? That is where',
                            ' ',
                            (0, e.jsx)(n, { children: 'Devices' }),
                            ' come in!'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(n, { children: 'Devices are how game mechanics are built.' }),
                            ' Each device is responsible for a small part of your gameplay.',
                            (0, e.jsx)(o, {}),
                            ' ',
                            (0, e.jsx)(o, {}),
                            'For example, the ',
                            (0, e.jsx)(n, { children: 'Spawn Pad device' }),
                            ' is responsible for setting the location of players when your game begins. ',
                            (0, e.jsx)(o, {}),
                            ' ',
                            (0, e.jsx)(o, {}),
                            'The ',
                            (0, e.jsx)(n, { children: 'Teleporter device' }),
                            ' is responsible for teleporting a player from one place to another!'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Let\u2019s start off by placing our first device. Click the',
                            ' ',
                            (0, e.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, e.jsx)(h.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, e.jsx)(i.default, { name: 'fas fa-plus' })
                                })
                            }),
                            ' ',
                            'button on the top right to open the add menu, and then select',
                            ' ',
                            (0, e.jsx)(n, { children: 'Devices' }),
                            '.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.OPEN_ADD_SUBMENU && 'devices' === q.menu
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Here are all the devices you can place! It might look like a lot, but each device typically does just one small task. ',
                            (0, e.jsx)(o, {}),
                            'Select the ',
                            (0, e.jsx)(n, { children: 'Spawn Pad' }),
                            ' device.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.SELECT_DEVICE_TO_ADD && q.deviceTypeId === f.default.characterSpawnPad
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(n, { children: 'Click to place the Spawn Pad device anywhere' }),
                            '. That is where you will spawn once the game begins!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.PLACE_DEVICE_DOWN && q.device.deviceOption.id === f.default.characterSpawnPad
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Perfect. Now\u2026what should we add in next? How about a way for players to answer multiple-choice questions, like in normal Gimkit modes?',
                            (0, e.jsx)(o, {}),
                            (0, e.jsx)(o, {}),
                            ' Open the ',
                            (0, e.jsx)(n, { children: 'Add Menu' }),
                            ', select ',
                            (0, e.jsx)(n, { children: 'Devices' }),
                            ', and then select the ',
                            (0, e.jsx)(n, { children: 'Questioner' }),
                            ' device.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.SELECT_DEVICE_TO_ADD && q.deviceTypeId === f.default.gimkitLiveQuestion
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'With this device,',
                            ' ',
                            (0, e.jsx)(n, { children: 'players will be able to walk up to it and start answering multiple choice questions!' }),
                            ' ',
                            'Place it next to the Spawn Pad so that players won\u2019t have to walk far to start answering.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.PLACE_DEVICE_DOWN && q.device.deviceOption.id === f.default.gimkitLiveQuestion
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Nice work. At this point, you\u2019ve added a lot. Let\'s test your game to make sure everything works properly. ',
                            (0, e.jsx)(o, {}),
                            (0, e.jsx)(o, {}),
                            'You\u2019re currently in editing mode, but you can quickly jump into a game by clicking the',
                            ' ',
                            (0, e.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, e.jsx)(h.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, e.jsx)(i.default, { name: 'fas fa-play' })
                                })
                            }),
                            ' ',
                            'button on the bottom right.',
                            ' ',
                            (0, e.jsx)(n, { children: 'Click that button and start the game!' })
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.START_THE_GAME
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Now you\u2019re in-game! This is what players will experience when they play your map! ',
                            (0, e.jsx)(o, {}),
                            'Walk over to the Questioner Device you placed and',
                            ' ',
                            (0, e.jsx)(n, { children: 'answer a question!' })
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.ANSWER_A_QUESTION
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Woohoo! Everything works! ',
                            (0, e.jsx)(o, {}),
                            'Let\u2019s go back to editing and finishing up our game. Close out of this screen and end the game by clicking',
                            ' ',
                            (0, e.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, e.jsx)(k.default, {
                                    type: 'danger',
                                    onClick: () => !1,
                                    customHorizontalPadding: 18,
                                    ariaLabel: 'Stop',
                                    children: (0, e.jsx)('i', { className: 'far fa-stop-circle' })
                                })
                            }),
                            ' ',
                            'on the top right.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.END_THE_GAME
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'And now you can head back into editing mode by clicking',
                            ' ',
                            (0, e.jsx)(n, { children: 'Restore Map' }),
                            ' on the bottom right.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.RESTORE_THE_MAP
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Let\u2019s think. What do we need to add next? ',
                            (0, e.jsx)(o, {}),
                            'Well, we\u2019re going to want to have a ',
                            (0, e.jsx)(n, { children: 'Snowball Launcher.' }),
                            ' ',
                            'This way you can fight back against the enemy (which you\u2019ll add later).'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'To do this, you\u2019ll use the ',
                            (0, e.jsx)(n, { children: 'Item Granter device.' }),
                            ' This device allows you to grant players items in their inventory. ',
                            (0, e.jsx)(o, {}),
                            (0, e.jsx)(o, {}),
                            'Go add an Item Granter device to the map, and place it to the right of your Questioner!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.PLACE_DEVICE_DOWN && q.device.deviceOption.id === f.default.itemGranter
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Right now, the Item Granter doesn\u2019t know which item you want to grant, you have to edit it! ',
                            (0, e.jsx)(o, {}),
                            (0, e.jsx)(n, { children: 'You can edit any device by clicking on it.' }),
                            ' Go click on the Item Granter you just placed.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.OPEN_DEVICE_OPTIONS && q.device.deviceOption.id === f.default.itemGranter
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'You\u2019re now on the ',
                            (0, e.jsx)(n, { children: 'editing screen' }),
                            ', where you can customize this device exactly how you want! ',
                            (0, e.jsx)(o, {}),
                            'You\u2019ll see on the right side that there are all sorts of options you can change, including the item to grant, and how many of that item to grant.'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Go change the ',
                            (0, e.jsx)(n, { children: 'Item To Grant' }),
                            ' option and select any',
                            ' ',
                            (0, e.jsx)(n, { children: 'Snowball Launcher' }),
                            '!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.CHANGE_DEVICE_OPTION && q.device.deviceOption.id === f.default.itemGranter && 'itemId' === q.option && q.value.toLocaleLowerCase().includes('snowball_launcher')
                },
                {
                    text: 'Fantastic! Now this Item Granter will give the player a Snowball Launcher! ',
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Close out of the editing screen by clicking the ',
                            (0, e.jsx)(n, { children: 'X' }),
                            ' on the top right!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.CLOSE_DEVICE_OPTIONS
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'The Item Granter is setup, but now we need to connect it to Questioner in some way. ',
                            (0, e.jsx)(o, {}),
                            'We want to give the player a Snowball Launcher when they answer a question correctly.',
                            (0, e.jsx)(o, {}),
                            'How can we do that?'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'That is where the final piece of Gimkit Creative comes into play:',
                            ' ',
                            (0, e.jsx)(n, { children: 'wires!' })
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(n, { children: 'Wires connect devices together' }),
                            ' \u2014 it\u2019s the way different devices can communicate with one another.'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Open the ',
                            (0, e.jsx)(n, { children: 'Add Menu' }),
                            ' and then select ',
                            (0, e.jsx)(n, { children: 'Wires' }),
                            '.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.START_ADDING_WIRE
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(n, { children: 'Now select where the wire will come from.' }),
                            ' Since we\u2019re waiting on a player to answer a question, we want the wire to come from the Questioner device. ',
                            (0, e.jsx)(o, {}),
                            ' ',
                            (0, e.jsx)(o, {}),
                            'Click the Questioner device to begin the wire!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.START_WIRE_FROM_DEVICE && q.device.deviceOption.id === f.default.gimkitLiveQuestion
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(n, { children: 'Now select where the wire will end.' }),
                            (0, e.jsx)(o, {}),
                            'We want the player to get the Snowball Launcher, and the Item Granter is responsible for doing that! So,',
                            ' ',
                            (0, e.jsx)(n, { children: 'select the Item Granter' }),
                            ' for the end of the wire.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.END_WIRE_TO_DEVICE && q.device.deviceOption.id === f.default.itemGranter
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Nice work! ',
                            (0, e.jsx)(o, {}),
                            'You connected the two devices together, but now you need to',
                            ' ',
                            (0, e.jsx)(n, { children: 'tell it exactly what to do.' })
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'We want to grant the Snowball Launcher when a player answers a question correctly. ',
                            (0, e.jsx)(o, {}),
                            'On the left side, select ',
                            (0, e.jsx)(n, { children: 'Question answered correctly' }),
                            '. On the right side, select ',
                            (0, e.jsx)(n, { children: 'Grant item' }),
                            '.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.CONFIGURE_WIRE && 'questionCorrect' === q.wire.startConnection && 'grant' === q.wire.endConnection
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Perfection! Just like that,',
                            ' ',
                            (0, e.jsx)(n, { children: 'you\u2019ve connected these two devices together.' }),
                            (0, e.jsx)(o, {}),
                            'Let\u2019s make sure everything works! Close out of this screen by clicking the ',
                            (0, e.jsx)(n, { children: 'X' }),
                            ' on the top right. Then, start the game by clicking',
                            ' ',
                            (0, e.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, e.jsx)(h.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, e.jsx)(i.default, { name: 'fas fa-play' })
                                })
                            }),
                            ' ',
                            'on the bottom right.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.START_THE_GAME
                },
                {
                    text: (0, e.jsx)(e.Fragment, { children: 'Go answer a question correctly, and let\u2019s see if you get a Snowball Launcher!' }),
                    cb: q => q.event === g.TutorialEventName.GRANT_ITEM && q.itemId.toLocaleLowerCase().includes('snowball_launcher')
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(n, { children: 'You got the Snowball Launcher, woohoo!' }),
                            ' ',
                            (0, e.jsx)(o, {}),
                            ' ',
                            (0, e.jsx)(o, {}),
                            ' In Gimkit Creative, this is exactly how you\u2019ll create your own game mechanics.',
                            ' ',
                            (0, e.jsx)(n, { children: 'You\u2019ll place different devices together and connect them via wires!' })
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'And just like that, you now know the four fundamentals of Gimkit Creative: ',
                            (0, e.jsx)(n, { children: 'terrain, props, devices, and wires!' })
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'End the game and then click ',
                            (0, e.jsx)(n, { children: 'Restore Map' }),
                            ' to go back into Editing Mode.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.RESTORE_THE_MAP
                },
                {
                    text: (0, e.jsx)(e.Fragment, { children: 'Let\u2018s finish your game by adding an enemy. You\u2019ll have to defeat this enemy to win the game!' }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Open the ',
                            (0, e.jsx)(n, { children: 'Add Menu' }),
                            ' and select ',
                            (0, e.jsx)(n, { children: 'Devices' }),
                            '.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.OPEN_ADD_SUBMENU && 'devices' === q.menu
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Let\u2019s add a ',
                            (0, e.jsx)(n, { children: 'Sentry Device' }),
                            '. ',
                            (0, e.jsx)(o, {}),
                            ' The Sentry Device spawns an enemy that will fire at you in-game.',
                            ' ',
                            (0, e.jsx)(n, { children: 'Select the Sentry Device.' })
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.SELECT_DEVICE_TO_ADD && q.deviceTypeId === f.default.sentry
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Now place the Sentry on the map! ',
                            (0, e.jsx)(o, {}),
                            'Make sure to place it in an open area so that you\u2019re able to fire at it!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.PLACE_DEVICE_DOWN && q.device.deviceOption.id === f.default.sentry
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'When you knockout the Sentry, we want the game to end. To end the game, we can use the ',
                            (0, e.jsx)(n, { children: 'End Game Device!' }),
                            ' ',
                            (0, e.jsx)(o, {}),
                            ' Open the',
                            ' ',
                            (0, e.jsx)(n, { children: 'Add Menu' }),
                            ', select ',
                            (0, e.jsx)(n, { children: 'Devices' }),
                            ', and then select the ',
                            (0, e.jsx)(n, { children: 'End Game Device' }),
                            '.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.SELECT_DEVICE_TO_ADD && q.deviceTypeId === f.default.endGame
                },
                {
                    text: 'Place the End Game device just a little bit to the right of the Sentry!',
                    cb: q => q.event === g.TutorialEventName.PLACE_DEVICE_DOWN && q.device.deviceOption.id === f.default.endGame
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Now\u2026we want to connect these two devices together. And you know how we can do that: ',
                            (0, e.jsx)(n, { children: 'wires!' })
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Open the ',
                            (0, e.jsx)(n, { children: 'Add Menu' }),
                            ', select ',
                            (0, e.jsx)(n, { children: 'Wires' }),
                            ', and then place a wire starting from the ',
                            (0, e.jsx)(n, { children: 'Sentry Device' }),
                            ' and ending at the ',
                            (0, e.jsx)(n, { children: 'End Game Device' }),
                            '.'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.END_WIRE_TO_DEVICE && q.device.deviceOption.id === f.default.endGame
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Perfect. Now, let\u2019s configure the wire.',
                            (0, e.jsx)(o, {}),
                            'Make it so once the Sentry gets knocked out, the game ends!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.CONFIGURE_WIRE && 'knockedOut' === q.wire.startConnection && 'endGame' === q.wire.endConnection
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Way to go! With that, I think your game is ready! ',
                            (0, e.jsx)(o, {}),
                            (0, e.jsx)(n, { children: 'Start the game' }),
                            ' and let\u2019s try it for real!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.START_THE_GAME
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(n, { children: 'The game has started!' }),
                            (0, e.jsx)(o, {}),
                            'Go answer a question correctly, gain the snowball launcher, and knockout that enemy!'
                        ]
                    }),
                    cb: q => q.event === g.TutorialEventName.END_THE_GAME_BY_DEVICE
                },
                {
                    text: (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)('div', {
                            className: 'animated tada',
                            children: 'Woohoo! It worked!'
                        })
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsxs)(n, {
                                children: [
                                    'Great work today, ',
                                    (0, l.getUser)().firstName,
                                    '!'
                                ]
                            }),
                            ' You\'ve already built your very own mini-game!'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Keep exploring Gimkit Creative!',
                            (0, e.jsx)(o, {}),
                            'As you explore and learn, you\'ll be able to build more & more types of maps & games! ',
                            (0, e.jsx)(n, { children: 'The possibilities are endless!' })
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'Also, don\u2019t worry if you\u2019re not understanding something! Gimkit Creative is open for you to just experiment, and play around!',
                            ' ',
                            (0, e.jsx)(o, {}),
                            ' ',
                            (0, e.jsx)(o, {}),
                            ' Just like any other skill, you may not get it right away. But',
                            ' ',
                            (0, e.jsx)(n, { children: 'the more you practice, the better you\u2019ll get.' }),
                            ' You can do this!'
                        ]
                    }),
                    cb: _m
                },
                {
                    text: (0, e.jsxs)(e.Fragment, {
                        children: [
                            'And...that\'s the end of the tutorial.',
                            ' ',
                            (0, e.jsx)(n, { children: 'Click the button to the right to claim your reward!' })
                        ]
                    }),
                    cb: () => !1
                }
            ]
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    var _j = k => {
        const [l, m, n] = (0, g.useBoolean)(!1), o = f.useRef(null);
        return (0, e.jsx)('div', {
            ref: o,
            children: (0, e.jsx)(h.default, {
                title: k.tooltip,
                placement: 'bottom',
                open: l,
                getPopupContainer: () => o.current,
                children: (0, e.jsx)('div', {
                    onMouseEnter: m,
                    onMouseLeave: n,
                    children: (0, e.jsx)(i.default, {
                        type: 'default',
                        onClick: k.onClick,
                        customHorizontalPadding: 18,
                        customColor: '#4A2C83',
                        ariaLabel: k.tooltip,
                        children: k.children
                    })
                })
            })
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....');
    let g, h, i = j => j;
    var _j = k => (0, e.jsxs)(_k, {
        children: [
            (0, e.jsx)(_l, { children: k.children }),
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
    background: #1b065b;
    background: linear-gradient(304deg, #2a5b93, #1b065b);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
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
`)), _l = f.default.div(h || (h = i`
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.4); */
  flex: 1;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _v;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    let p, q, r, s, t, u = v => v;
    var _v = () => {
        const [w, x] = f.useState(!0), [y, z] = f.useState(!1), A = () => {
                x(!0), (0, k.request)({
                    url: '/api/created-map/tutorial-reward',
                    method: 'POST',
                    success: () => {
                        z(!1);
                    },
                    error: () => {
                        z(!0);
                    },
                    both: () => {
                        x(!1);
                    }
                });
            };
        return f.useEffect(() => {
            (0, k.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap'), A();
        }, []), w ? (0, e.jsx)(_w, { children: (0, e.jsx)(n.default, { size: 'large' }) }) : y ? (0, e.jsxs)(_w, {
            children: [
                (0, e.jsx)('div', {
                    style: {
                        fontFamily: j.Fonts.SFPro,
                        fontSize: 18,
                        textTransform: 'none',
                        marginBottom: 10
                    },
                    children: 'An error occurred redeeming your reward. Click the button to try again.'
                }),
                (0, e.jsx)(m.default, {
                    onClick: A,
                    children: 'Try Again'
                })
            ]
        }) : (0, e.jsx)(_w, {
            children: (0, e.jsxs)(_w, {
                className: 'animated fadeIn',
                children: [
                    (0, e.jsx)(_x, { children: 'Gimkit Creative' }),
                    (0, e.jsx)(_y, { children: 'Tutorial Complete!' }),
                    (0, e.jsx)('div', {
                        className: 'animated pulse infinite',
                        style: { animationDuration: '3s' },
                        children: (0, e.jsx)(_z, {})
                    }),
                    (0, e.jsxs)(_A, {
                        children: [
                            'You unlocked the',
                            ' ',
                            (0, e.jsx)('span', {
                                style: { color: '#ffff94' },
                                children: 'Blueprint Gim!'
                            }),
                            ' You can find it in your Locker!'
                        ]
                    }),
                    (0, e.jsx)('div', {
                        style: { marginTop: 30 },
                        children: (0, e.jsx)(l.default, {
                            type: 'success',
                            customFontWeight: j.FontWeights.Bold,
                            style: { fontFamily: j.Fonts.SFPro },
                            size: 'large',
                            onClick: () => window.location.href = '/',
                            ariaLabel: 'Back To Dashboard',
                            children: 'Back To Dashboard'
                        })
                    })
                ]
            })
        });
    };
    const _w = (0, g.default)(h.CenteredColumn)(p || (p = u`
  flex: 1;
  background: #25397d;
  color: ${ 0 };
  font-family: ${ 0 };
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
`), i.default.White, j.Fonts.FugazOne), _x = g.default.div(q || (q = u`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 26px;
  opacity: 0.85;
`)), _y = g.default.div(r || (r = u`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 48px;
  margin-top: -9px;
`)), _z = g.default.img.attrs({ src: (0, o.default)('characters/spine/preview/construction.png') })(s || (s = u`
  height: 279px;
  transform: rotate(355deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`)), _A = g.default.div(t || (t = u`
  font-family: ${ 0 };
  text-transform: none;
  font-weight: ${ 0 };
  font-size: 21px;
  margin-top: 10px;
`), j.Fonts.SFPro, j.FontWeights.Bold);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CheckOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z' }
                }]
        },
        name: 'check',
        theme: 'outlined'
    };
});