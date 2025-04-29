function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('E7oFF', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'Container', function() {
        return _o;
    }), _o(b.exports, 'default', function() {
        return _n;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('0HHAH'),
        i = a('6CIVV'),
        j = a('PMl60'),
        k = a('4VQGS'),
        l = a('Am38a');
    let m;
    var _n = () => {
        const [_o, p] = f.useState(null), [q, r] = (0, j.useBoolean)(!1);
        f.useEffect(() => {
            (0, j.request)({
                url: '/api/matchmaker/intent/map/tutorial/create',
                success: _o => {
                    p(_o);
                },
                error: _o => {
                    (0, j.throwMessageError)({
                        e: _o,
                        default: {
                            title: 'There was an error loading into the tutorial.'
                        },
                        onOk: () => window.location.href = '/'
                    });
                }
            });
        }, []);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(j.Title, {
                    title: 'Gimkit Creative Tutorial'
                }),
                _o ? q ? (0, e.jsx)(l.default, {}) : (0, e.jsx)(k.default, {
                    intentId: _o,
                    onTutorialComplete: r
                }) : (0, e.jsx)(_o, {
                    children: (0, e.jsx)(i.default, {
                        size: 'large'
                    })
                })
            ]
        });
    };
    const _o = (0, g.default)(h.Centered).attrs({
        className: 'maxAll'
    })(m || (m = (_K => _K)``));
}), a.register('0HHAH', function(b, c) {
    _K(b.exports, 'Centered', function() {
        return _j;
    }), _K(b.exports, 'VerticallyCentered', function() {
        return _k;
    }), _K(b.exports, 'CenteredColumn', function() {
        return _l;
    }), _K(b.exports, 'VerticalCentered', function() {
        return _m;
    });
    var d = a('Axq+p');
    let e, f, g, h, i = _K => _K;
    const _j = d.default.div.attrs({
            className: 'flex-center'
        })(e || (e = i``)),
        _k = d.default.div.attrs({
            className: 'flex vc'
        })(f || (f = i``)),
        _l = (0, d.default)(_j).attrs({
            className: 'flex-column'
        })(g || (g = i``)),
        _m = d.default.div.attrs({
            className: 'flex vc'
        })(h || (h = i``));
}), a.register('4VQGS', function(b, c) {
    _K(b.exports, 'default', function() {
        return _B;
    });
    var d = a('0hzx+'),
        e = a('sHRDd'),
        f = a('2Xvuf'),
        g = a('LEQ5w'),
        h = a('Axq+p'),
        i = a('8y7vq'),
        j = a('L1523'),
        k = a('y1th1'),
        l = a('PMl60'),
        m = a('led8j'),
        n = a('b5kvC'),
        o = a('0HHAH'),
        p = a('7IstX');
    let q, r, s, t, u, v, w, x, y, z, A = _K => _K;
    var _B = _K => {
        const [C, D] = g.useState(0), E = g.useRef(null), F = k.TutorialData.steps[C].text, G = k.TutorialData.steps[C].cb, H = G === k.OnNextClicked, I = (_K, C) => {
            const J = k.TutorialData.steps[C];
            J && J.cb !== k.OnNextClicked && (J.completed || J.cb(_K) && (J.cb = k.OnNextClicked));
        };
        (0, j.SetTutorialEventListener)(_K => {
            for (let J = 1; J < 6; J++)
                I(_K, C + J);
            G(_K) && C < k.TutorialData.steps.length - 1 && (() => {
                for (let _K = 1; _K < k.TutorialData.steps.length; _K++) {
                    const L = k.TutorialData.steps[C + _K];
                    if (L && !L.completed) {
                        J(C + _K);
                        break;
                    }
                }
            })();
        });
        const [J, K] = g.useState(!0);
        g.useEffect(() => {
            K(!0);
            const L = setTimeout(() => {
                K(!1);
            }, 1500);
            return () => {
                clearTimeout(L);
            };
        }, [C]), g.useEffect(() => {
            const L = setInterval(() => {
                var M;
                null === (M = E.current) || void 0 === M || M.focus();
            }, 100);
            return () => {
                clearInterval(L);
            };
        }, []);
        const L = `/host?id=${ _g.intentId }`,
            M = C === k.TutorialData.steps.length - 1,
            N = M ? 'Claim Reward' : 'Next';
        return (0, d.jsxs)(_C, {
            children: [
                (0, d.jsx)(l.Title, {
                    title: 'Gimkit Creative Tutorial',
                    override: !0
                }),
                (0, d.jsxs)(_D, {
                    children: [
                        (0, d.jsx)(_E, {
                            children: (0, d.jsx)('iframe', {
                                ref: E,
                                style: {
                                    border: 'none'
                                },
                                className: 'maxAll',
                                width: '100%',
                                height: '100%',
                                src: L,
                                title: 'Creative Tutorial',
                                allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            })
                        }),
                        (0, d.jsx)(_F, {
                            children: (0, d.jsx)(p.default, {
                                children: (0, d.jsxs)(_G, {
                                    children: [
                                        (0, d.jsx)(_H, {
                                            src: (0, f.default)('characters/spine/preview/construction.png')
                                        }),
                                        (0, d.jsx)(_I, {
                                            children: (0, d.jsx)(i.default, {
                                                percent: M ? 99.99 : C / k.TutorialData.steps.length * 100,
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
                                        (0, d.jsx)(_J, {
                                            children: (0, d.jsx)(_K, {
                                                children: F
                                            })
                                        }),
                                        !H && !M || J ? (0, d.jsx)(_L, {}) : (0, d.jsx)(_L, {
                                            className: 'animated fadeIn',
                                            children: (0, d.jsx)(m.default, {
                                                type: 'success',
                                                customFontWeight: n.FontWeights.Bold,
                                                onClick: () => {
                                                    M ? _g.onTutorialComplete() : (0, j.EmitTutorialEvent)({
                                                        event: j.TutorialEventName.NEXT
                                                    });
                                                },
                                                ariaLabel: N,
                                                children: N
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
    const _C = h.default.div.attrs({
            className: 'flex hc'
        })(q || (q = A`
  flex: 1;
  background: ${ 0 };
`), e.default.BackgroundPurple),
        _D = (0, h.default)(o.CenteredColumn).attrs({
            className: 'maxAll'
        })(r || (r = A`
  flex-direction: column;
`)),
        _E = h.default.div(s || (s = A`
  flex: 1;
  width: 100%;
`)),
        _F = h.default.div.attrs({
            className: 'maxWidth'
        })(t || (t = A`
  min-height: ${ 0 }px;
  box-shadow: 0px 2px 14px 0px black;
  background: #182673;
  color: ${ 0 };
  overflow: hidden;
  flex-shrink: 0;
`), 125, e.default.White),
        _G = h.default.div.attrs({
            className: 'maxAll flex vc between'
        })(u || (u = A`
  position: relative;
  min-height: ${ 0 }px;
  padding: 25px 30px;
  padding-top: 40px;
`), 125),
        _H = h.default.img(v || (v = A`
  height: 153px;
  position: absolute;
  bottom: -32px;
  left: -22px;
  opacity: 0.9;
  transform: rotate(356deg);
`)),
        _I = h.default.div.attrs({
            className: 'maxWidth flex-center'
        })(w || (w = A`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 20px;
`)),
        _J = h.default.div(x || (x = A`
  font-size: 19px;
  margin-left: 105px;
`)),
        _K = h.default.div(y || (y = A`
  text-align: left;
  margin: auto auto auto 0;
`)),
        _L = h.default.div.attrs({
            className: 'flex hc vc maxHeight'
        })(z || (z = A`
  margin-left: 35px;
  flex-shrink: 0;
  min-width: 85px;
`));
}), a.register('2Xvuf', function(b, c) {
    let d;
    _g(b.exports, 'default', function() {
        return _e;
    });
    var _e = _g => {
        const f = (() => {
            var _g;
            if (d)
                return d;
            const h = null === (_g = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === _g ? void 0 : _g.getAttribute('content');
            return void 0 !== h && '$CDN_MAP_ASSETS_URL' !== h ? (d = h, d) : '';
        })();
        return _v.startsWith('/assets/map') ? `${ f }${ _v }` : `${ f }/assets/map/${ _v }`;
    };
}), a.register('L1523', function(b, c) {
    _v(b.exports, 'TutorialEventName', function() {
        return _f;
    }), _v(b.exports, 'EmitTutorialEvent', function() {
        return _i;
    }), _v(b.exports, 'SetTutorialEventListener', function() {
        return _j;
    });
    var d = a('Xc4Kz');
    const e = 'tutorial_event';
    let _f;
    var g;
    let h;
    (g = _f || (_f = {})).NEXT = 'next', g.OPEN_ADD_MENU = 'open_add_menu', g.OPEN_ADD_SUBMENU = 'open_add_submenu', g.SELECT_PROP_TO_ADD = 'select_prop_to_add', g.SELECT_TERRAIN_TO_ADD = 'select_terrain_to_add', g.SELECT_DEVICE_TO_ADD = 'select_device_to_add', g.START_COPY_DEVICE = 'start_copy_device', g.PLACE_DEVICE_DOWN = 'place_device_down', g.START_THE_GAME = 'start_the_game', g.ANSWER_A_QUESTION = 'answer_a_question', g.END_THE_GAME = 'end_the_game', g.END_THE_GAME_BY_DEVICE = 'end_the_game_by_device', g.RESTORE_THE_MAP = 'restore_the_map', g.OPEN_DEVICE_OPTIONS = 'open_device_options', g.CHANGE_DEVICE_OPTION = 'change_device_option', g.CLOSE_DEVICE_OPTIONS = 'close_device_options', g.START_ADDING_WIRE = 'start_adding_wire', g.START_WIRE_FROM_DEVICE = 'start_wire_from_device', g.END_WIRE_TO_DEVICE = 'end_wire_to_device', g.CONFIGURE_WIRE = 'configure_wire', g.GRANT_ITEM = 'grant_item', window.document.addEventListener(e, _v => {
        h && h(_v.detail);
    }, !1);
    const _i = _v => {
            if (!(0, d.IsTutorial)() && _v.event !== _f.NEXT)
                return;
            const j = new CustomEvent(e, {
                detail: _v
            });
            window.top.document.dispatchEvent(j);
        },
        _j = _v => {
            h = _v;
        };
}), a.register('Xc4Kz', function(b, c) {
    _v(b.exports, 'IsTutorial', function() {
        return _e;
    });
    var d = a('D6J6Y');
    const _e = () => window._mapId === d.TutorialConsts.mapId;
}), a.register('D6J6Y', function(b, c) {
    _v(b.exports, 'TutorialConsts', function() {
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
    _v(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).scriptRunner = 'scriptRunner', e.rng = 'rng', e.editingAccessPoint = 'editingAccessPoint', e.luckyBlock = 'luckyBlock', e.chest = 'chest', e.jumpGranter = 'jumpGranter', e.teamColorTilesManager = 'teamColorTilesManager', e.changingBooth = 'changingBooth', e.popupListItem = 'popupListItem', e.gadgetModifier = 'gadgetModifier', e.zombieSpawnZone = 'zombieSpawnZone', e.zombieWaveDesigner = 'zombieWaveDesigner', e.zombieDesigner = 'zombieDesigner', e.zombieInvasion = 'zombieInvasion', e.codeUI = 'codeUI', e.damager = 'damager', e.cameraPoint = 'cameraPoint', e.blockingZone = 'blockingZone', e.character = 'character', e.classDesigner = 'classDesigner', e.backgroundTilesZone = 'backgroundTilesZone', e.proceduralTerrainZoneZoneInstruction = 'proceduralTerrainZoneZoneInstruction', e.proceduralTerrainZone = 'proceduralTerrainZone', e.dialogueAction = 'dialogueAction', e.dialogue = 'dialogue', e.voiceLine = 'voiceLine', e.scorebar = 'scorebar', e.outline = 'outline', e.ball = 'ball', e.damageBoost = 'damageBoost', e.checkpoint = 'checkpoint', e.playerPositionDetector = 'playerPositionDetector', e.itemImage = 'itemImage', e.mood = 'mood', e.playerAppearanceModifier = 'playerAppearanceModifier', e.waypoint = 'waypoint', e.flag = 'flag', e.checker = 'checker', e.trigger = 'trigger', e.counter = 'counter', e.teleporter = 'teleporter', e.itemGranter = 'itemGranter', e.characterSpawnPad = 'characterSpawnPad', e.textBillboard = 'textBillboard', e.prop = 'prop', e.barrier = 'barrier', e.button = 'button', e.droppedItem = 'droppedItem', e.property = 'property', e.mapOptions = 'mapOptions', e.teamSettings = 'teamSettings', e.imageBillboard = 'imageBillboard', e.gimkitLiveQuestion = 'gimkitLiveQuestion', e.ballZone = 'ballZone', e.zone = 'zone', e.captureFlagZone = 'captureFlagZone', e.textExplainer = 'textExplainer', e.relay = 'relay', e.cameraSize = 'cameraSize', e.music = 'music', e.speed = 'speed', e.soundEffect = 'soundEffect', e.inventoryItemManager = 'inventoryItemManager', e.guiDevice = 'guiDevice', e.lifecycle = 'lifecycle', e.endGame = 'endGame', e.countdown = 'countdown', e.shadow = 'shadow', e.characterProximity = 'characterProximity', e.repeater = 'repeater', e.vendingMachine = 'vendingMachine', e.teamSwitcher = 'teamSwitcher', e.notification = 'notification', e.endOfGameWidget = 'endOfGameWidget', e.respawn = 'respawn', e.xp = 'xp', e.assignmentCheckpoint = 'assignmentCheckpoint', e.assignmentContext = 'assignmentContext', e.placedSticker = 'placedSticker', e.wireRepeater = 'wireRepeater', e.movementMeter = 'movementMeter', e.craftingTable = 'craftingTable', e.craftingRecipe = 'craftingRecipe', e.startingInventory = 'startingInventory', e.healthGranter = 'healthGranter', e.sentry = 'sentry', e.knockoutManager = 'knockoutManager', e.laserBeam = 'laserBeam', e.laserBeamManager = 'laserBeamManager', e.cosmosModifier = 'cosmosModifier', e.passwordLock = 'passwordLock', e.itemSpawner = 'itemSpawner', e.tagZone = 'tagZone', e.achievement = 'achievement';
    var _f = d;
}), a.register('y1th1', function(b, c) {
    _v(b.exports, 'OnNextClicked', function() {
        return _l;
    }), _v(b.exports, 'TutorialData', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('cPBfb'),
        f = a('L1523'),
        g = a('ARJGy'),
        h = a('9R7cy'),
        i = a('sHRDd'),
        j = a('led8j'),
        k = a('PMl60');
    const _l = _v => _v.event === f.TutorialEventName.NEXT,
        m = _v => (0, d.jsx)('span', {
            style: {
                fontWeight: 'bold',
                color: '#ffff94'
            },
            children: _v.children
        }),
        n = () => (0, d.jsx)(d.Fragment, {
            children: (0, d.jsx)('br', {})
        }),
        _o = {
            steps: [{
                    text: (0, d.jsxs)('div', {
                        children: [
                            'Hey there! Welcome to ',
                            (0, d.jsx)(m, {
                                children: 'Gimkit Creative'
                            }),
                            ', a tool which you can use to build your own maps, game modes, and more!'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)('div', {
                        children: [
                            'I\u2019ll be here to show you the basics of Gimkit Creative.',
                            (0, d.jsx)('br', {}),
                            'Once you get the basics down, you\'ll be able to build all sorts of maps & games!'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: 'Let\'s chat about the game you\'re going to build today!',
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'In this game, there will be an ',
                            (0, d.jsx)(m, {
                                children: 'enemy you have to knockout'
                            }),
                            ' ',
                            'to win the game!'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'However, you\'re going to start with ',
                            (0, d.jsx)(m, {
                                children: 'nothing'
                            }),
                            ' in your inventory! ',
                            (0, d.jsx)(n, {}),
                            'You\'ll have to answer a question correctly to earn a Snowball Launcher.'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Once you have that Snowball Launcher, you can use it to',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'knockout the enemy!'
                            })
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'To recap, in your game, you will...',
                            (0, d.jsxs)('ol', {
                                style: {
                                    marginTop: 10
                                },
                                children: [
                                    (0, d.jsx)('li', {
                                        children: 'Answer a question correctly'
                                    }),
                                    (0, d.jsx)('li', {
                                        children: 'Earn a Snowball Launcher'
                                    }),
                                    (0, d.jsx)('li', {
                                        children: 'Knockout the enemy with the Snowball Launcher'
                                    })
                                ]
                            })
                        ]
                    }),
                    cb: _l
                },
                {
                    text: 'You ready? Let\u2019s get building!',
                    cb: _l
                },
                {
                    text: (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'To add anything to your map'
                            }),
                            ', click the',
                            ' ',
                            (0, d.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, d.jsx)(g.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, d.jsx)(h.default, {
                                        name: 'fas fa-plus'
                                    })
                                })
                            }),
                            ' ',
                            'button on the top right! Go ahead and click it now!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.OPEN_ADD_MENU
                },
                {
                    text: (0, d.jsxs)('div', {
                        children: [
                            'Nice! This is the ',
                            (0, d.jsx)(m, {
                                children: 'Add Menu'
                            }),
                            ', which is where you\u2019ll go to add things to your map. ',
                            (0, d.jsx)(n, {}),
                            'Terrain, Props, Devices, and Wires are all things you can add to your map. Let\u2019s start by selecting ',
                            (0, d.jsx)(m, {
                                children: 'Terrain'
                            }),
                            '.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.OPEN_ADD_SUBMENU && 'terrain' === _v.menu
                },
                {
                    text: (0, d.jsxs)('div', {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'Terrain are the floors and walls of your map.'
                            }),
                            ' As you can see, there are many different options to choose from! ',
                            (0, d.jsx)(n, {}),
                            ' Since this game will have the player using a Snowball Launcher, let\u2019s add some snow! Select the ',
                            (0, d.jsx)(m, {
                                children: 'Snow'
                            }),
                            ' terrain.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.SELECT_TERRAIN_TO_ADD && 'Snow' === _v.terrainId
                },
                {
                    text: (0, d.jsxs)('div', {
                        children: [
                            'Awesome! You have the Snow Terrain selected, and you can start',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'clicking to place it anywhere on the map!'
                            }),
                            ' ',
                            (0, d.jsx)(n, {}),
                            ' Go ahead and place a bunch of snow on the map and',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'click the Next Button when you\u2019re done!'
                            })
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Looking good! But\u2026our map is looking a little empty. That is where',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'props'
                            }),
                            ' come in!'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'Props are objects you can place on your map for decoration.'
                            }),
                            ' ',
                            'Things like trees, tables, and chairs.',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'Let\u2019s add some trees to liven things up!'
                            }),
                            (0, d.jsx)(n, {}),
                            ' ',
                            (0, d.jsx)(n, {}),
                            'If you haven\u2019t yet, close out of the terrain adding screen by clicking the ',
                            (0, d.jsx)(m, {
                                children: 'X'
                            }),
                            ' button.',
                            (0, d.jsx)(n, {}),
                            'From there, open up the add menu again by clicking',
                            ' ',
                            (0, d.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, d.jsx)(g.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, d.jsx)(h.default, {
                                        name: 'fas fa-plus'
                                    })
                                })
                            }),
                            ' ',
                            'on the top right!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.OPEN_ADD_MENU
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'And now, select ',
                            (0, d.jsx)(m, {
                                children: 'Props'
                            }),
                            '!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.OPEN_ADD_SUBMENU && 'props' === _v.menu
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Here you can find all the props available to use! ',
                            (0, d.jsx)(n, {}),
                            (0, d.jsx)(m, {
                                children: 'Select one of the trees'
                            }),
                            ' to begin adding it to the map!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.SELECT_PROP_TO_ADD && _v.propId.toLocaleLowerCase().includes('tree')
                },
                {
                    text: 'Just click to place the tree down on your map!',
                    cb: _v => _v.event === f.TutorialEventName.PLACE_DEVICE_DOWN && _v.device.deviceOption.id === e.default.prop && _v.device.options.propId.toLocaleLowerCase().includes('tree')
                },
                {
                    text: (0, d.jsxs)('div', {
                        children: [
                            'Nice! But one tree isn\u2019t enough. Let\u2019s add another one. ',
                            (0, d.jsx)(n, {}),
                            ' ',
                            (0, d.jsx)(n, {}),
                            'To make things quicker, you can hover your mouse over the tree and then press',
                            ' ',
                            (0, d.jsx)('span', {
                                style: {
                                    color: i.default.Black,
                                    background: i.default.White,
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
                    cb: _v => _v.event === f.TutorialEventName.START_COPY_DEVICE && _v.device.deviceOption.id === e.default.prop && _v.device.options.propId.toLocaleLowerCase().includes('tree')
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Perfect! Now go place as many trees on your map as you would like, and then click the ',
                            (0, d.jsx)(m, {
                                children: 'Next Button'
                            }),
                            ' when you\u2019re ready!'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Awesome work. Terrain and props are how you get your map to look exactly how you want it to! ',
                            (0, d.jsx)(n, {}),
                            'But, how do you actually make this map\u2026a game? That is where',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'Devices'
                            }),
                            ' come in!'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'Devices are how game mechanics are built.'
                            }),
                            ' Each device is responsible for a small part of your gameplay.',
                            (0, d.jsx)(n, {}),
                            ' ',
                            (0, d.jsx)(n, {}),
                            'For example, the ',
                            (0, d.jsx)(m, {
                                children: 'Spawn Pad device'
                            }),
                            ' is responsible for setting the location of players when your game begins. ',
                            (0, d.jsx)(n, {}),
                            ' ',
                            (0, d.jsx)(n, {}),
                            'The ',
                            (0, d.jsx)(m, {
                                children: 'Teleporter device'
                            }),
                            ' is responsible for teleporting a player from one place to another!'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Let\u2019s start off by placing our first device. Click the',
                            ' ',
                            (0, d.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, d.jsx)(g.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, d.jsx)(h.default, {
                                        name: 'fas fa-plus'
                                    })
                                })
                            }),
                            ' ',
                            'button on the top right to open the add menu, and then select',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'Devices'
                            }),
                            '.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.OPEN_ADD_SUBMENU && 'devices' === _v.menu
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Here are all the devices you can place! It might look like a lot, but each device typically does just one small task. ',
                            (0, d.jsx)(n, {}),
                            'Select the ',
                            (0, d.jsx)(m, {
                                children: 'Spawn Pad'
                            }),
                            ' device.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.SELECT_DEVICE_TO_ADD && _v.deviceTypeId === e.default.characterSpawnPad
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'Click to place the Spawn Pad device anywhere'
                            }),
                            '. That is where you will spawn once the game begins!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.PLACE_DEVICE_DOWN && _v.device.deviceOption.id === e.default.characterSpawnPad
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Perfect. Now\u2026what should we add in next? How about a way for players to answer multiple-choice questions, like in normal Gimkit modes?',
                            (0, d.jsx)(n, {}),
                            (0, d.jsx)(n, {}),
                            ' Open the ',
                            (0, d.jsx)(m, {
                                children: 'Add Menu'
                            }),
                            ', select ',
                            (0, d.jsx)(m, {
                                children: 'Devices'
                            }),
                            ', and then select the ',
                            (0, d.jsx)(m, {
                                children: 'Questioner'
                            }),
                            ' device.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.SELECT_DEVICE_TO_ADD && _v.deviceTypeId === e.default.gimkitLiveQuestion
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'With this device,',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'players will be able to walk up to it and start answering multiple choice questions!'
                            }),
                            ' ',
                            'Place it next to the Spawn Pad so that players won\u2019t have to walk far to start answering.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.PLACE_DEVICE_DOWN && _v.device.deviceOption.id === e.default.gimkitLiveQuestion
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Nice work. At this point, you\u2019ve added a lot. Let\'s test your game to make sure everything works properly. ',
                            (0, d.jsx)(n, {}),
                            (0, d.jsx)(n, {}),
                            'You\u2019re currently in editing mode, but you can quickly jump into a game by clicking the',
                            ' ',
                            (0, d.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, d.jsx)(g.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, d.jsx)(h.default, {
                                        name: 'fas fa-play'
                                    })
                                })
                            }),
                            ' ',
                            'button on the bottom right.',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'Click that button and start the game!'
                            })
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.START_THE_GAME
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Now you\u2019re in-game! This is what players will experience when they play your map! ',
                            (0, d.jsx)(n, {}),
                            'Walk over to the Questioner Device you placed and',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'answer a question!'
                            })
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.ANSWER_A_QUESTION
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Woohoo! Everything works! ',
                            (0, d.jsx)(n, {}),
                            'Let\u2019s go back to editing and finishing up our game. Close out of this screen and end the game by clicking',
                            ' ',
                            (0, d.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, d.jsx)(j.default, {
                                    type: 'danger',
                                    onClick: () => !1,
                                    customHorizontalPadding: 18,
                                    ariaLabel: 'Stop',
                                    children: (0, d.jsx)('i', {
                                        className: 'far fa-stop-circle'
                                    })
                                })
                            }),
                            ' ',
                            'on the top right.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.END_THE_GAME
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'And now you can head back into editing mode by clicking',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'Restore Map'
                            }),
                            ' on the bottom right.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.RESTORE_THE_MAP
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Let\u2019s think. What do we need to add next? ',
                            (0, d.jsx)(n, {}),
                            'Well, we\u2019re going to want to have a ',
                            (0, d.jsx)(m, {
                                children: 'Snowball Launcher.'
                            }),
                            ' ',
                            'This way you can fight back against the enemy (which you\u2019ll add later).'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'To do this, you\u2019ll use the ',
                            (0, d.jsx)(m, {
                                children: 'Item Granter device.'
                            }),
                            ' This device allows you to grant players items in their inventory. ',
                            (0, d.jsx)(n, {}),
                            (0, d.jsx)(n, {}),
                            'Go add an Item Granter device to the map, and place it to the right of your Questioner!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.PLACE_DEVICE_DOWN && _v.device.deviceOption.id === e.default.itemGranter
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Right now, the Item Granter doesn\u2019t know which item you want to grant, you have to edit it! ',
                            (0, d.jsx)(n, {}),
                            (0, d.jsx)(m, {
                                children: 'You can edit any device by clicking on it.'
                            }),
                            ' Go click on the Item Granter you just placed.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.OPEN_DEVICE_OPTIONS && _v.device.deviceOption.id === e.default.itemGranter
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'You\u2019re now on the ',
                            (0, d.jsx)(m, {
                                children: 'editing screen'
                            }),
                            ', where you can customize this device exactly how you want! ',
                            (0, d.jsx)(n, {}),
                            'You\u2019ll see on the right side that there are all sorts of options you can change, including the item to grant, and how many of that item to grant.'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Go change the ',
                            (0, d.jsx)(m, {
                                children: 'Item To Grant'
                            }),
                            ' option and select any',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'Snowball Launcher'
                            }),
                            '!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.CHANGE_DEVICE_OPTION && _v.device.deviceOption.id === e.default.itemGranter && 'itemId' === _v.option && _v.value.toLocaleLowerCase().includes('snowball_launcher')
                },
                {
                    text: 'Fantastic! Now this Item Granter will give the player a Snowball Launcher! ',
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Close out of the editing screen by clicking the ',
                            (0, d.jsx)(m, {
                                children: 'X'
                            }),
                            ' on the top right!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.CLOSE_DEVICE_OPTIONS
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'The Item Granter is setup, but now we need to connect it to Questioner in some way. ',
                            (0, d.jsx)(n, {}),
                            'We want to give the player a Snowball Launcher when they answer a question correctly.',
                            (0, d.jsx)(n, {}),
                            'How can we do that?'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'That is where the final piece of Gimkit Creative comes into play:',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'wires!'
                            })
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'Wires connect devices together'
                            }),
                            ' \u2014 it\u2019s the way different devices can communicate with one another.'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Open the ',
                            (0, d.jsx)(m, {
                                children: 'Add Menu'
                            }),
                            ' and then select ',
                            (0, d.jsx)(m, {
                                children: 'Wires'
                            }),
                            '.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.START_ADDING_WIRE
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'Now select where the wire will come from.'
                            }),
                            ' Since we\u2019re waiting on a player to answer a question, we want the wire to come from the Questioner device. ',
                            (0, d.jsx)(n, {}),
                            ' ',
                            (0, d.jsx)(n, {}),
                            'Click the Questioner device to begin the wire!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.START_WIRE_FROM_DEVICE && _v.device.deviceOption.id === e.default.gimkitLiveQuestion
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'Now select where the wire will end.'
                            }),
                            (0, d.jsx)(n, {}),
                            'We want the player to get the Snowball Launcher, and the Item Granter is responsible for doing that! So,',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'select the Item Granter'
                            }),
                            ' for the end of the wire.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.END_WIRE_TO_DEVICE && _v.device.deviceOption.id === e.default.itemGranter
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Nice work! ',
                            (0, d.jsx)(n, {}),
                            'You connected the two devices together, but now you need to',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'tell it exactly what to do.'
                            })
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'We want to grant the Snowball Launcher when a player answers a question correctly. ',
                            (0, d.jsx)(n, {}),
                            'On the left side, select ',
                            (0, d.jsx)(m, {
                                children: 'Question answered correctly'
                            }),
                            '. On the right side, select ',
                            (0, d.jsx)(m, {
                                children: 'Grant item'
                            }),
                            '.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.CONFIGURE_WIRE && 'questionCorrect' === _v.wire.startConnection && 'grant' === _v.wire.endConnection
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Perfection! Just like that,',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'you\u2019ve connected these two devices together.'
                            }),
                            (0, d.jsx)(n, {}),
                            'Let\u2019s make sure everything works! Close out of this screen by clicking the ',
                            (0, d.jsx)(m, {
                                children: 'X'
                            }),
                            ' on the top right. Then, start the game by clicking',
                            ' ',
                            (0, d.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, d.jsx)(g.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, d.jsx)(h.default, {
                                        name: 'fas fa-play'
                                    })
                                })
                            }),
                            ' ',
                            'on the bottom right.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.START_THE_GAME
                },
                {
                    text: (0, d.jsx)(d.Fragment, {
                        children: 'Go answer a question correctly, and let\u2019s see if you get a Snowball Launcher!'
                    }),
                    cb: _v => _v.event === f.TutorialEventName.GRANT_ITEM && _v.itemId.toLocaleLowerCase().includes('snowball_launcher')
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'You got the Snowball Launcher, woohoo!'
                            }),
                            ' ',
                            (0, d.jsx)(n, {}),
                            ' ',
                            (0, d.jsx)(n, {}),
                            ' In Gimkit Creative, this is exactly how you\u2019ll create your own game mechanics.',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'You\u2019ll place different devices together and connect them via wires!'
                            })
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'And just like that, you now know the four fundamentals of Gimkit Creative: ',
                            (0, d.jsx)(m, {
                                children: 'terrain, props, devices, and wires!'
                            })
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'End the game and then click ',
                            (0, d.jsx)(m, {
                                children: 'Restore Map'
                            }),
                            ' to go back into Editing Mode.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.RESTORE_THE_MAP
                },
                {
                    text: (0, d.jsx)(d.Fragment, {
                        children: 'Let\u2018s finish your game by adding an enemy. You\u2019ll have to defeat this enemy to win the game!'
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Open the ',
                            (0, d.jsx)(m, {
                                children: 'Add Menu'
                            }),
                            ' and select ',
                            (0, d.jsx)(m, {
                                children: 'Devices'
                            }),
                            '.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.OPEN_ADD_SUBMENU && 'devices' === _v.menu
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Let\u2019s add a ',
                            (0, d.jsx)(m, {
                                children: 'Sentry Device'
                            }),
                            '. ',
                            (0, d.jsx)(n, {}),
                            ' The Sentry Device spawns an enemy that will fire at you in-game.',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'Select the Sentry Device.'
                            })
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.SELECT_DEVICE_TO_ADD && _v.deviceTypeId === e.default.sentry
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Now place the Sentry on the map! ',
                            (0, d.jsx)(n, {}),
                            'Make sure to place it in an open area so that you\u2019re able to fire at it!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.PLACE_DEVICE_DOWN && _v.device.deviceOption.id === e.default.sentry
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'When you knockout the Sentry, we want the game to end. To end the game, we can use the ',
                            (0, d.jsx)(m, {
                                children: 'End Game Device!'
                            }),
                            ' ',
                            (0, d.jsx)(n, {}),
                            ' Open the',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'Add Menu'
                            }),
                            ', select ',
                            (0, d.jsx)(m, {
                                children: 'Devices'
                            }),
                            ', and then select the ',
                            (0, d.jsx)(m, {
                                children: 'End Game Device'
                            }),
                            '.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.SELECT_DEVICE_TO_ADD && _v.deviceTypeId === e.default.endGame
                },
                {
                    text: 'Place the End Game device just a little bit to the right of the Sentry!',
                    cb: _v => _v.event === f.TutorialEventName.PLACE_DEVICE_DOWN && _v.device.deviceOption.id === e.default.endGame
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Now\u2026we want to connect these two devices together. And you know how we can do that: ',
                            (0, d.jsx)(m, {
                                children: 'wires!'
                            })
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Open the ',
                            (0, d.jsx)(m, {
                                children: 'Add Menu'
                            }),
                            ', select ',
                            (0, d.jsx)(m, {
                                children: 'Wires'
                            }),
                            ', and then place a wire starting from the ',
                            (0, d.jsx)(m, {
                                children: 'Sentry Device'
                            }),
                            ' and ending at the ',
                            (0, d.jsx)(m, {
                                children: 'End Game Device'
                            }),
                            '.'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.END_WIRE_TO_DEVICE && _v.device.deviceOption.id === e.default.endGame
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Perfect. Now, let\u2019s configure the wire.',
                            (0, d.jsx)(n, {}),
                            'Make it so once the Sentry gets knocked out, the game ends!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.CONFIGURE_WIRE && 'knockedOut' === _v.wire.startConnection && 'endGame' === _v.wire.endConnection
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Way to go! With that, I think your game is ready! ',
                            (0, d.jsx)(n, {}),
                            (0, d.jsx)(m, {
                                children: 'Start the game'
                            }),
                            ' and let\u2019s try it for real!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.START_THE_GAME
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(m, {
                                children: 'The game has started!'
                            }),
                            (0, d.jsx)(n, {}),
                            'Go answer a question correctly, gain the snowball launcher, and knockout that enemy!'
                        ]
                    }),
                    cb: _v => _v.event === f.TutorialEventName.END_THE_GAME_BY_DEVICE
                },
                {
                    text: (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)('div', {
                            className: 'animated tada',
                            children: 'Woohoo! It worked!'
                        })
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsxs)(m, {
                                children: [
                                    'Great work today, ',
                                    (0, k.getUser)().firstName,
                                    '!'
                                ]
                            }),
                            ' You\'ve already built your very own mini-game!'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Keep exploring Gimkit Creative!',
                            (0, d.jsx)(n, {}),
                            'As you explore and learn, you\'ll be able to build more & more types of maps & games! ',
                            (0, d.jsx)(m, {
                                children: 'The possibilities are endless!'
                            })
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'Also, don\u2019t worry if you\u2019re not understanding something! Gimkit Creative is open for you to just experiment, and play around!',
                            ' ',
                            (0, d.jsx)(n, {}),
                            ' ',
                            (0, d.jsx)(n, {}),
                            ' Just like any other skill, you may not get it right away. But',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'the more you practice, the better you\u2019ll get.'
                            }),
                            ' You can do this!'
                        ]
                    }),
                    cb: _l
                },
                {
                    text: (0, d.jsxs)(d.Fragment, {
                        children: [
                            'And...that\'s the end of the tutorial.',
                            ' ',
                            (0, d.jsx)(m, {
                                children: 'Click the button to the right to claim your reward!'
                            })
                        ]
                    }),
                    cb: () => !1
                }
            ]
        };
}), a.register('ARJGy', function(b, c) {
    _v(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('PMl60'),
        g = a('ijg0s'),
        h = a('led8j');
    var _i = _v => {
        const [j, k, l] = (0, f.useBoolean)(!1), m = e.useRef(null);
        return (0, d.jsx)('div', {
            ref: m,
            children: (0, d.jsx)(g.default, {
                title: _v.tooltip,
                placement: 'bottom',
                open: j,
                getPopupContainer: () => m.current,
                children: (0, d.jsx)('div', {
                    onMouseEnter: k,
                    onMouseLeave: l,
                    children: (0, d.jsx)(h.default, {
                        type: 'default',
                        onClick: _v.onClick,
                        customHorizontalPadding: 18,
                        customColor: '#4A2C83',
                        ariaLabel: _v.tooltip,
                        children: _v.children
                    })
                })
            })
        });
    };
}), a.register('led8j', function(b, c) {
    _v(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('GT7Vh'),
        f = a('LEQ5w'),
        g = a('Axq+p'),
        h = a('b5kvC'),
        i = a('vShe/');
    let j;
    var _k = _v => {
        const l = _v.size || 'default',
            m = f.useMemo(() => _v.customColor ? _v.customColor : _v.disabled ? '#546e7a' : 'success' === _v.type ? '#2e7d32' : 'danger' === _v.type ? '#c62828' : '#3f51b5', [
                _v.disabled,
                _v.type,
                _v.customColor
            ]),
            n = f.useMemo(() => (0, e.darken)(0.1, m), [m]),
            o = f.useMemo(() => 'small' === l || 'default' === l ? 14 : 20, [l]),
            p = f.useMemo(() => 'small' === l ? 6 : 'default' === l ? 8 : 12, [l]),
            q = f.useMemo(() => {
                const r = 'small' === l ? '8px' : '12px';
                return _v.customHorizontalPadding ? `${ r } ${ _v.customHorizontalPadding }px` : 'small' === l ? `${ r } 24px` : 'default' === l ? `${ r } 28px` : `${ r } 42px`;
            }, [
                l,
                _v.customHorizontalPadding
            ]),
            r = f.useMemo(() => 'small' === l ? 41 : 49, [l]),
            s = f.useMemo(() => _v.customFontWeight ? _v.customFontWeight : 'large' === l ? h.FontWeights.Bold : h.FontWeights.Normal, [
                _v.customFontWeight,
                l
            ]),
            t = () => {
                _v.disabled || _v.onClick && _v.onClick();
            };
        return (0, d.jsx)(_l, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: r
            }, _v.style || {}),
            children: (0, d.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': _v.ariaLabel,
                onClick: _v.usePointerDownEvent ? void 0 : t,
                onPointerDown: _v.usePointerDownEvent ? t : void 0,
                style: {
                    cursor: _v.disabled ? 'not-allowed' : 'pointer',
                    width: _v.block ? '100%' : 'auto'
                },
                children: [
                    (0, d.jsx)('span', {
                        className: 'btn-shadow',
                        style: {
                            borderRadius: p
                        }
                    }),
                    (0, d.jsx)('span', {
                        className: 'btn-edge',
                        style: {
                            background: n,
                            borderRadius: p
                        }
                    }),
                    (0, d.jsx)('span', {
                        className: 'btn-front',
                        style: {
                            background: m,
                            fontSize: o,
                            borderRadius: p,
                            padding: q,
                            fontWeight: s
                        },
                        children: _v.children
                    })
                ]
            })
        });
    };
    const _l = g.default.div.attrs({
        className: 'flex'
    })(j || (j = (_v => _v)`
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
`), i.default.White);
}), a.register('vShe/', function(b, c) {
    _v(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), a.register('9R7cy', function(b, c) {
    _v(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _v => (0, d.jsx)('i', {
        className: `${ _v.name }${ _v.className ? ` ${ _v.className }` : '' }`,
        style: _v.style
    });
}), a.register('7IstX', function(b, c) {
    _v(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p');
    let f, g, h = _v => _v;
    var _i = _v => (0, d.jsxs)(_j, {
        children: [
            (0, d.jsx)(_k, {
                children: _v.children
            }),
            (0, d.jsx)('div', {
                className: 'area',
                children: (0, d.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {}),
                        (0, d.jsx)('li', {})
                    ]
                })
            })
        ]
    });
    const _j = e.default.div(f || (f = h`
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
`)),
        _k = e.default.div(g || (g = h`
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.4); */
  flex: 1;
`));
}), a.register('Am38a', function(b, c) {
    _v(b.exports, 'default', function() {
        return _u;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('0HHAH'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('PMl60'),
        k = a('led8j'),
        l = a('ulE4q'),
        m = a('6CIVV'),
        n = a('2Xvuf');
    let o, p, q, r, s, t = _v => _v;
    var _u = () => {
        const [_v, w] = e.useState(!0), [x, y] = e.useState(!1), z = () => {
            w(!0), (0, j.request)({
                url: '/api/created-map/tutorial-reward',
                method: 'POST',
                success: () => {
                    y(!1);
                },
                error: () => {
                    y(!0);
                },
                both: () => {
                    w(!1);
                }
            });
        };
        return e.useEffect(() => {
            (0, j.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap'), z();
        }, []), _v ? (0, d.jsx)(_v, {
            children: (0, d.jsx)(m.default, {
                size: 'large'
            })
        }) : x ? (0, d.jsxs)(_v, {
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontFamily: i.Fonts.SFPro,
                        fontSize: 18,
                        textTransform: 'none',
                        marginBottom: 10
                    },
                    children: 'An error occurred redeeming your reward. Click the button to try again.'
                }),
                (0, d.jsx)(l.default, {
                    onClick: z,
                    children: 'Try Again'
                })
            ]
        }) : (0, d.jsx)(_v, {
            children: (0, d.jsxs)(_v, {
                className: 'animated fadeIn',
                children: [
                    (0, d.jsx)(_w, {
                        children: 'Gimkit Creative'
                    }),
                    (0, d.jsx)(_x, {
                        children: 'Tutorial Complete!'
                    }),
                    (0, d.jsx)('div', {
                        className: 'animated pulse infinite',
                        style: {
                            animationDuration: '3s'
                        },
                        children: (0, d.jsx)(_y, {})
                    }),
                    (0, d.jsxs)(_z, {
                        children: [
                            'You unlocked the',
                            ' ',
                            (0, d.jsx)('span', {
                                style: {
                                    color: '#ffff94'
                                },
                                children: 'Blueprint Gim!'
                            }),
                            ' You can find it in your Locker!'
                        ]
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            marginTop: 30
                        },
                        children: (0, d.jsx)(k.default, {
                            type: 'success',
                            customFontWeight: i.FontWeights.Bold,
                            style: {
                                fontFamily: i.Fonts.SFPro
                            },
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
    const _v = (0, f.default)(g.CenteredColumn)(o || (o = t`
  flex: 1;
  background: #25397d;
  color: ${ 0 };
  font-family: ${ 0 };
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
`), h.default.White, i.Fonts.FugazOne),
        _w = f.default.div(p || (p = t`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 26px;
  opacity: 0.85;
`)),
        _x = f.default.div(q || (q = t`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 48px;
  margin-top: -9px;
`)),
        _y = f.default.img.attrs({
            src: (0, n.default)('characters/spine/preview/construction.png')
        })(r || (r = t`
  height: 279px;
  transform: rotate(355deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`)),
        _z = f.default.div(s || (s = t`
  font-family: ${ 0 };
  text-transform: none;
  font-weight: ${ 0 };
  font-size: 21px;
  margin-top: 10px;
`), i.Fonts.SFPro, i.FontWeights.Bold);
}), a.register('CJCpN', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('v47zB'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var _i = e.forwardRef(h);
}), a.register('v47zB', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
});