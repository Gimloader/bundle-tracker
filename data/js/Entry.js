function a(a, b, p, q) {
    Object.defineProperty(a, b, {
        get: p,
        set: q,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('jhMXd', function(p, q) {
    var c;
    c = p.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(p.exports, 'Container', function() {
        return n;
    }), a(p.exports, 'default', function() {
        return m;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('h99Nu'),
        g = b('YimJ0'),
        h = b('iHElh'),
        i = b('PjB0f'),
        j = b('VukDU'),
        k = b('4O5ns');
    let l;
    var m = () => {
        const [n, o] = e.useState(null), [p, q] = (0, i.useBoolean)(!1);
        e.useEffect(() => {
            (0, i.request)({
                url: '/api/matchmaker/intent/map/tutorial/create',
                success: n => {
                    o(n);
                },
                error: n => {
                    (0, i.throwMessageError)({
                        e: n,
                        default: {
                            title: 'There was an error loading into the tutorial.'
                        },
                        onOk: () => window.location.href = '/'
                    });
                }
            });
        }, []);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(i.Title, {
                    title: 'Gimkit Creative Tutorial'
                }),
                n ? p ? (0, d.jsx)(k.default, {}) : (0, d.jsx)(j.default, {
                    intentId: n,
                    onTutorialComplete: q
                }) : (0, d.jsx)(n, {
                    children: (0, d.jsx)(h.default, {
                        size: 'large'
                    })
                })
            ]
        });
    };
    const n = (0, f.default)(g.Centered).attrs({
        className: 'maxAll'
    })(l || (l = (a => a)``));
}), b.register('YimJ0', function(C, D) {
    a(C.exports, 'Centered', function() {
        return i;
    }), a(C.exports, 'VerticallyCentered', function() {
        return j;
    }), a(C.exports, 'CenteredColumn', function() {
        return k;
    }), a(C.exports, 'VerticalCentered', function() {
        return l;
    });
    var c = b('h99Nu');
    let d, e, f, g, h = a => a;
    const i = c.default.div.attrs({
            className: 'flex-center'
        })(d || (d = h``)),
        j = c.default.div.attrs({
            className: 'flex vc'
        })(e || (e = h``)),
        k = (0, c.default)(i).attrs({
            className: 'flex-column'
        })(f || (f = h``)),
        l = c.default.div.attrs({
            className: 'flex vc'
        })(g || (g = h``));
}), b.register('VukDU', function(C, D) {
    a(C.exports, 'default', function() {
        return A;
    });
    var c = b('8kSQZ'),
        d = b('lmfrI'),
        e = b('JJQ0+'),
        f = b('uPP4W'),
        g = b('h99Nu'),
        h = b('0x1Q5'),
        i = b('D0n26'),
        j = b('QHCfu'),
        k = b('PjB0f'),
        l = b('Dog9Y'),
        m = b('gSUVO'),
        n = b('YimJ0'),
        o = b('Yn39D');
    let p, q, r, s, t, u, v, w, x, y, z = a => a;
    var A = a => {
        const [B, C] = f.useState(0), D = f.useRef(null), E = j.TutorialData.steps[B].text, F = j.TutorialData.steps[B].cb, G = F === j.OnNextClicked, H = (a, B) => {
            const I = j.TutorialData.steps[B];
            I && I.cb !== j.OnNextClicked && (I.completed || I.cb(a) && (I.cb = j.OnNextClicked));
        };
        (0, i.SetTutorialEventListener)(a => {
            for (let I = 1; I < 6; I++)
                H(a, B + I);
            F(a) && B < j.TutorialData.steps.length - 1 && (() => {
                for (let J = 1; J < j.TutorialData.steps.length; J++) {
                    const K = j.TutorialData.steps[B + J];
                    if (K && !K.completed) {
                        I(B + J);
                        break;
                    }
                }
            })();
        });
        const [I, J] = f.useState(!0);
        f.useEffect(() => {
            J(!0);
            const K = setTimeout(() => {
                J(!1);
            }, 1500);
            return () => {
                clearTimeout(K);
            };
        }, [B]), f.useEffect(() => {
            const K = setInterval(() => {
                var L;
                null === (L = D.current) || void 0 === L || L.focus();
            }, 100);
            return () => {
                clearInterval(L);
            };
        }, []);
        const K = `/host?id=${ a.intentId }`,
            L = B === j.TutorialData.steps.length - 1,
            M = L ? 'Claim Reward' : 'Next';
        return (0, c.jsxs)(B, {
            children: [
                (0, c.jsx)(k.Title, {
                    title: 'Gimkit Creative Tutorial',
                    override: !0
                }),
                (0, c.jsxs)(C, {
                    children: [
                        (0, c.jsx)(D, {
                            children: (0, c.jsx)('iframe', {
                                ref: D,
                                style: {
                                    border: 'none'
                                },
                                className: 'maxAll',
                                width: '100%',
                                height: '100%',
                                src: K,
                                title: 'Creative Tutorial',
                                allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            })
                        }),
                        (0, c.jsx)(E, {
                            children: (0, c.jsx)(o.default, {
                                children: (0, c.jsxs)(F, {
                                    children: [
                                        (0, c.jsx)(G, {
                                            src: (0, e.default)('characters/spine/preview/construction.png')
                                        }),
                                        (0, c.jsx)(H, {
                                            children: (0, c.jsx)(h.default, {
                                                percent: L ? 99.99 : B / j.TutorialData.steps.length * 100,
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
                                        (0, c.jsx)(I, {
                                            children: (0, c.jsx)(J, {
                                                children: E
                                            })
                                        }),
                                        !G && !L || I ? (0, c.jsx)(K, {}) : (0, c.jsx)(K, {
                                            className: 'animated fadeIn',
                                            children: (0, c.jsx)(l.default, {
                                                type: 'success',
                                                customFontWeight: m.FontWeights.Bold,
                                                onClick: () => {
                                                    L ? a.onTutorialComplete() : (0, i.EmitTutorialEvent)({
                                                        event: i.TutorialEventName.NEXT
                                                    });
                                                },
                                                ariaLabel: M,
                                                children: M
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
    const B = g.default.div.attrs({
            className: 'flex hc'
        })(p || (p = z`
  flex: 1;
  background: ${ 0 };
`), d.default.BackgroundPurple),
        C = (0, g.default)(n.CenteredColumn).attrs({
            className: 'maxAll'
        })(q || (q = z`
  flex-direction: column;
`)),
        D = g.default.div(r || (r = z`
  flex: 1;
  width: 100%;
`)),
        E = g.default.div.attrs({
            className: 'maxWidth'
        })(s || (s = z`
  min-height: ${ 0 }px;
  box-shadow: 0px 2px 14px 0px black;
  background: #182673;
  color: ${ 0 };
  overflow: hidden;
  flex-shrink: 0;
`), 125, d.default.White),
        F = g.default.div.attrs({
            className: 'maxAll flex vc between'
        })(t || (t = z`
  position: relative;
  min-height: ${ 0 }px;
  padding: 25px 30px;
  padding-top: 40px;
`), 125),
        G = g.default.img(u || (u = z`
  height: 153px;
  position: absolute;
  bottom: -32px;
  left: -22px;
  opacity: 0.9;
  transform: rotate(356deg);
`)),
        H = g.default.div.attrs({
            className: 'maxWidth flex-center'
        })(v || (v = z`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 20px;
`)),
        I = g.default.div(w || (w = z`
  font-size: 19px;
  margin-left: 105px;
`)),
        J = g.default.div(x || (x = z`
  text-align: left;
  margin: auto auto auto 0;
`)),
        K = g.default.div.attrs({
            className: 'flex hc vc maxHeight'
        })(y || (y = z`
  margin-left: 35px;
  flex-shrink: 0;
  min-width: 85px;
`));
}), b.register('JJQ0+', function(b, j) {
    let c;
    a(b.exports, 'default', function() {
        return d;
    });
    var d = a => {
        const e = (() => {
            var f;
            if (c)
                return c;
            const g = null === (f = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === f ? void 0 : f.getAttribute('content');
            return void 0 !== g && '$CDN_MAP_ASSETS_URL' !== g ? (c = g, c) : '';
        })();
        return a.startsWith('/assets/map') ? `${ e }${ a }` : `${ e }/assets/map/${ a }`;
    };
}), b.register('D0n26', function(j, c) {
    a(j.exports, 'TutorialEventName', function() {
        return e;
    }), a(j.exports, 'EmitTutorialEvent', function() {
        return h;
    }), a(j.exports, 'SetTutorialEventListener', function() {
        return i;
    });
    var c = b('SUzmj');
    const d = 'tutorial_event';
    let e;
    var f;
    let g;
    (f = e || (e = {})).NEXT = 'next', f.OPEN_ADD_MENU = 'open_add_menu', f.OPEN_ADD_SUBMENU = 'open_add_submenu', f.SELECT_PROP_TO_ADD = 'select_prop_to_add', f.SELECT_TERRAIN_TO_ADD = 'select_terrain_to_add', f.SELECT_DEVICE_TO_ADD = 'select_device_to_add', f.START_COPY_DEVICE = 'start_copy_device', f.PLACE_DEVICE_DOWN = 'place_device_down', f.START_THE_GAME = 'start_the_game', f.ANSWER_A_QUESTION = 'answer_a_question', f.END_THE_GAME = 'end_the_game', f.END_THE_GAME_BY_DEVICE = 'end_the_game_by_device', f.RESTORE_THE_MAP = 'restore_the_map', f.OPEN_DEVICE_OPTIONS = 'open_device_options', f.CHANGE_DEVICE_OPTION = 'change_device_option', f.CLOSE_DEVICE_OPTIONS = 'close_device_options', f.START_ADDING_WIRE = 'start_adding_wire', f.START_WIRE_FROM_DEVICE = 'start_wire_from_device', f.END_WIRE_TO_DEVICE = 'end_wire_to_device', f.CONFIGURE_WIRE = 'configure_wire', f.GRANT_ITEM = 'grant_item', window.document.addEventListener(d, a => {
        g && g(a.detail);
    }, !1);
    const h = a => {
            if (!(0, c.IsTutorial)() && a.event !== e.NEXT)
                return;
            const i = new CustomEvent(d, {
                detail: a
            });
            window.top.document.dispatchEvent(i);
        },
        i = a => {
            g = a;
        };
}), b.register('SUzmj', function(j, c) {
    a(j.exports, 'IsTutorial', function() {
        return d;
    });
    var c = b('aSd8d');
    const d = () => window._mapId === c.TutorialConsts.mapId;
}), b.register('aSd8d', function(j, c) {
    a(j.exports, 'TutorialConsts', function() {
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
}), b.register('7X8h3', function(b, j) {
    let c;
    var d;
    a(b.exports, 'default', function() {
        return e;
    }), (d = c || (c = {})).luckyBlock = 'luckyBlock', d.chest = 'chest', d.jumpGranter = 'jumpGranter', d.teamColorTilesManager = 'teamColorTilesManager', d.changingBooth = 'changingBooth', d.popupListItem = 'popupListItem', d.gadgetModifier = 'gadgetModifier', d.zombieSpawnZone = 'zombieSpawnZone', d.zombieWaveDesigner = 'zombieWaveDesigner', d.zombieDesigner = 'zombieDesigner', d.zombieInvasion = 'zombieInvasion', d.codeUI = 'codeUI', d.damager = 'damager', d.cameraPoint = 'cameraPoint', d.blockingZone = 'blockingZone', d.character = 'character', d.classDesigner = 'classDesigner', d.backgroundTilesZone = 'backgroundTilesZone', d.proceduralTerrainZoneZoneInstruction = 'proceduralTerrainZoneZoneInstruction', d.proceduralTerrainZone = 'proceduralTerrainZone', d.dialogueAction = 'dialogueAction', d.dialogue = 'dialogue', d.voiceLine = 'voiceLine', d.scorebar = 'scorebar', d.outline = 'outline', d.ball = 'ball', d.damageBoost = 'damageBoost', d.checkpoint = 'checkpoint', d.playerPositionDetector = 'playerPositionDetector', d.itemImage = 'itemImage', d.mood = 'mood', d.playerAppearanceModifier = 'playerAppearanceModifier', d.waypoint = 'waypoint', d.flag = 'flag', d.checker = 'checker', d.trigger = 'trigger', d.counter = 'counter', d.teleporter = 'teleporter', d.itemGranter = 'itemGranter', d.characterSpawnPad = 'characterSpawnPad', d.textBillboard = 'textBillboard', d.prop = 'prop', d.barrier = 'barrier', d.button = 'button', d.droppedItem = 'droppedItem', d.property = 'property', d.mapOptions = 'mapOptions', d.teamSettings = 'teamSettings', d.imageBillboard = 'imageBillboard', d.gimkitLiveQuestion = 'gimkitLiveQuestion', d.ballZone = 'ballZone', d.zone = 'zone', d.captureFlagZone = 'captureFlagZone', d.textExplainer = 'textExplainer', d.relay = 'relay', d.cameraSize = 'cameraSize', d.music = 'music', d.speed = 'speed', d.soundEffect = 'soundEffect', d.inventoryItemManager = 'inventoryItemManager', d.guiDevice = 'guiDevice', d.lifecycle = 'lifecycle', d.endGame = 'endGame', d.countdown = 'countdown', d.shadow = 'shadow', d.characterProximity = 'characterProximity', d.repeater = 'repeater', d.vendingMachine = 'vendingMachine', d.teamSwitcher = 'teamSwitcher', d.notification = 'notification', d.endOfGameWidget = 'endOfGameWidget', d.respawn = 'respawn', d.xp = 'xp', d.assignmentCheckpoint = 'assignmentCheckpoint', d.assignmentContext = 'assignmentContext', d.placedSticker = 'placedSticker', d.wireRepeater = 'wireRepeater', d.movementMeter = 'movementMeter', d.craftingTable = 'craftingTable', d.craftingRecipe = 'craftingRecipe', d.startingInventory = 'startingInventory', d.healthGranter = 'healthGranter', d.sentry = 'sentry', d.knockoutManager = 'knockoutManager', d.laserBeam = 'laserBeam', d.laserBeamManager = 'laserBeamManager', d.cosmosModifier = 'cosmosModifier', d.passwordLock = 'passwordLock', d.itemSpawner = 'itemSpawner', d.tagZone = 'tagZone';
    var e = f;
}), b.register('QHCfu', function(j, k) {
    a(j.exports, 'OnNextClicked', function() {
        return k;
    }), a(j.exports, 'TutorialData', function() {
        return n;
    });
    var c = b('8kSQZ'),
        d = b('7X8h3'),
        e = b('D0n26'),
        f = b('lV1Oj'),
        g = b('iMnBi'),
        h = b('lmfrI'),
        i = b('Dog9Y'),
        j = b('PjB0f');
    const k = a => a.event === e.TutorialEventName.NEXT,
        l = a => (0, c.jsx)('span', {
            style: {
                fontWeight: 'bold',
                color: '#ffff94'
            },
            children: a.children
        }),
        m = () => (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)('br', {})
        }),
        n = {
            steps: [{
                    text: (0, c.jsxs)('div', {
                        children: [
                            'Hey there! Welcome to ',
                            (0, c.jsx)(l, {
                                children: 'Gimkit Creative'
                            }),
                            ', a tool which you can use to build your own maps, game modes, and more!'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)('div', {
                        children: [
                            'I\u2019ll be here to show you the basics of Gimkit Creative.',
                            (0, c.jsx)('br', {}),
                            'Once you get the basics down, you\'ll be able to build all sorts of maps & games!'
                        ]
                    }),
                    cb: k
                },
                {
                    text: 'Let\'s chat about the game you\'re going to build today!',
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'In this game, there will be an ',
                            (0, c.jsx)(l, {
                                children: 'enemy you have to knockout'
                            }),
                            ' ',
                            'to win the game!'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'However, you\'re going to start with ',
                            (0, c.jsx)(l, {
                                children: 'nothing'
                            }),
                            ' in your inventory! ',
                            (0, c.jsx)(m, {}),
                            'You\'ll have to answer a question correctly to earn a Snowball Launcher.'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Once you have that Snowball Launcher, you can use it to',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'knockout the enemy!'
                            })
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'To recap, in your game, you will...',
                            (0, c.jsxs)('ol', {
                                style: {
                                    marginTop: 10
                                },
                                children: [
                                    (0, c.jsx)('li', {
                                        children: 'Answer a question correctly'
                                    }),
                                    (0, c.jsx)('li', {
                                        children: 'Earn a Snowball Launcher'
                                    }),
                                    (0, c.jsx)('li', {
                                        children: 'Knockout the enemy with the Snowball Launcher'
                                    })
                                ]
                            })
                        ]
                    }),
                    cb: k
                },
                {
                    text: 'You ready? Let\u2019s get building!',
                    cb: k
                },
                {
                    text: (0, c.jsxs)('div', {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'To add anything to your map'
                            }),
                            ', click the',
                            ' ',
                            (0, c.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, c.jsx)(f.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, c.jsx)(g.default, {
                                        name: 'fas fa-plus'
                                    })
                                })
                            }),
                            ' ',
                            'button on the top right! Go ahead and click it now!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.OPEN_ADD_MENU
                },
                {
                    text: (0, c.jsxs)('div', {
                        children: [
                            'Nice! This is the ',
                            (0, c.jsx)(l, {
                                children: 'Add Menu'
                            }),
                            ', which is where you\u2019ll go to add things to your map. ',
                            (0, c.jsx)(m, {}),
                            'Terrain, Props, Devices, and Wires are all things you can add to your map. Let\u2019s start by selecting ',
                            (0, c.jsx)(l, {
                                children: 'Terrain'
                            }),
                            '.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.OPEN_ADD_SUBMENU && 'terrain' === a.menu
                },
                {
                    text: (0, c.jsxs)('div', {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'Terrain are the floors and walls of your map.'
                            }),
                            ' As you can see, there are many different options to choose from! ',
                            (0, c.jsx)(m, {}),
                            ' Since this game will have the player using a Snowball Launcher, let\u2019s add some snow! Select the ',
                            (0, c.jsx)(l, {
                                children: 'Snow'
                            }),
                            ' terrain.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.SELECT_TERRAIN_TO_ADD && 'Snow' === a.terrainId
                },
                {
                    text: (0, c.jsxs)('div', {
                        children: [
                            'Awesome! You have the Snow Terrain selected, and you can start',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'clicking to place it anywhere on the map!'
                            }),
                            ' ',
                            (0, c.jsx)(m, {}),
                            ' Go ahead and place a bunch of snow on the map and',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'click the Next Button when you\u2019re done!'
                            })
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Looking good! But\u2026our map is looking a little empty. That is where',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'props'
                            }),
                            ' come in!'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'Props are objects you can place on your map for decoration.'
                            }),
                            ' ',
                            'Things like trees, tables, and chairs.',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'Let\u2019s add some trees to liven things up!'
                            }),
                            (0, c.jsx)(m, {}),
                            ' ',
                            (0, c.jsx)(m, {}),
                            'If you haven\u2019t yet, close out of the terrain adding screen by clicking the ',
                            (0, c.jsx)(l, {
                                children: 'X'
                            }),
                            ' button.',
                            (0, c.jsx)(m, {}),
                            'From there, open up the add menu again by clicking',
                            ' ',
                            (0, c.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, c.jsx)(f.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, c.jsx)(g.default, {
                                        name: 'fas fa-plus'
                                    })
                                })
                            }),
                            ' ',
                            'on the top right!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.OPEN_ADD_MENU
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'And now, select ',
                            (0, c.jsx)(l, {
                                children: 'Props'
                            }),
                            '!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.OPEN_ADD_SUBMENU && 'props' === a.menu
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Here you can find all the props available to use! ',
                            (0, c.jsx)(m, {}),
                            (0, c.jsx)(l, {
                                children: 'Select one of the trees'
                            }),
                            ' to begin adding it to the map!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.SELECT_PROP_TO_ADD && a.propId.toLocaleLowerCase().includes('tree')
                },
                {
                    text: 'Just click to place the tree down on your map!',
                    cb: a => a.event === e.TutorialEventName.PLACE_DEVICE_DOWN && a.device.deviceOption.id === d.default.prop && a.device.options.propId.toLocaleLowerCase().includes('tree')
                },
                {
                    text: (0, c.jsxs)('div', {
                        children: [
                            'Nice! But one tree isn\u2019t enough. Let\u2019s add another one. ',
                            (0, c.jsx)(m, {}),
                            ' ',
                            (0, c.jsx)(m, {}),
                            'To make things quicker, you can hover your mouse over the tree and then press',
                            ' ',
                            (0, c.jsx)('span', {
                                style: {
                                    color: h.default.Black,
                                    background: h.default.White,
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
                    cb: a => a.event === e.TutorialEventName.START_COPY_DEVICE && a.device.deviceOption.id === d.default.prop && a.device.options.propId.toLocaleLowerCase().includes('tree')
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Perfect! Now go place as many trees on your map as you would like, and then click the ',
                            (0, c.jsx)(l, {
                                children: 'Next Button'
                            }),
                            ' when you\u2019re ready!'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Awesome work. Terrain and props are how you get your map to look exactly how you want it to! ',
                            (0, c.jsx)(m, {}),
                            'But, how do you actually make this map\u2026a game? That is where',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'Devices'
                            }),
                            ' come in!'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'Devices are how game mechanics are built.'
                            }),
                            ' Each device is responsible for a small part of your gameplay.',
                            (0, c.jsx)(m, {}),
                            ' ',
                            (0, c.jsx)(m, {}),
                            'For example, the ',
                            (0, c.jsx)(l, {
                                children: 'Spawn Pad device'
                            }),
                            ' is responsible for setting the location of players when your game begins. ',
                            (0, c.jsx)(m, {}),
                            ' ',
                            (0, c.jsx)(m, {}),
                            'The ',
                            (0, c.jsx)(l, {
                                children: 'Teleporter device'
                            }),
                            ' is responsible for teleporting a player from one place to another!'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Let\u2019s start off by placing our first device. Click the',
                            ' ',
                            (0, c.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, c.jsx)(f.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, c.jsx)(g.default, {
                                        name: 'fas fa-plus'
                                    })
                                })
                            }),
                            ' ',
                            'button on the top right to open the add menu, and then select',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'Devices'
                            }),
                            '.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.OPEN_ADD_SUBMENU && 'devices' === a.menu
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Here are all the devices you can place! It might look like a lot, but each device typically does just one small task. ',
                            (0, c.jsx)(m, {}),
                            'Select the ',
                            (0, c.jsx)(l, {
                                children: 'Spawn Pad'
                            }),
                            ' device.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.SELECT_DEVICE_TO_ADD && a.deviceTypeId === d.default.characterSpawnPad
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'Click to place the Spawn Pad device anywhere'
                            }),
                            '. That is where you will spawn once the game begins!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.PLACE_DEVICE_DOWN && a.device.deviceOption.id === d.default.characterSpawnPad
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Perfect. Now\u2026what should we add in next? How about a way for players to answer multiple-choice questions, like in normal Gimkit modes?',
                            (0, c.jsx)(m, {}),
                            (0, c.jsx)(m, {}),
                            ' Open the ',
                            (0, c.jsx)(l, {
                                children: 'Add Menu'
                            }),
                            ', select ',
                            (0, c.jsx)(l, {
                                children: 'Devices'
                            }),
                            ', and then select the ',
                            (0, c.jsx)(l, {
                                children: 'Questioner'
                            }),
                            ' device.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.SELECT_DEVICE_TO_ADD && a.deviceTypeId === d.default.gimkitLiveQuestion
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'With this device,',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'players will be able to walk up to it and start answering multiple choice questions!'
                            }),
                            ' ',
                            'Place it next to the Spawn Pad so that players won\u2019t have to walk far to start answering.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.PLACE_DEVICE_DOWN && a.device.deviceOption.id === d.default.gimkitLiveQuestion
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Nice work. At this point, you\u2019ve added a lot. Let\'s test your game to make sure everything works properly. ',
                            (0, c.jsx)(m, {}),
                            (0, c.jsx)(m, {}),
                            'You\u2019re currently in editing mode, but you can quickly jump into a game by clicking the',
                            ' ',
                            (0, c.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, c.jsx)(f.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, c.jsx)(g.default, {
                                        name: 'fas fa-play'
                                    })
                                })
                            }),
                            ' ',
                            'button on the bottom right.',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'Click that button and start the game!'
                            })
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.START_THE_GAME
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Now you\u2019re in-game! This is what players will experience when they play your map! ',
                            (0, c.jsx)(m, {}),
                            'Walk over to the Questioner Device you placed and',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'answer a question!'
                            })
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.ANSWER_A_QUESTION
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Woohoo! Everything works! ',
                            (0, c.jsx)(m, {}),
                            'Let\u2019s go back to editing and finishing up our game. Close out of this screen and end the game by clicking',
                            ' ',
                            (0, c.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, c.jsx)(i.default, {
                                    type: 'danger',
                                    onClick: () => !1,
                                    customHorizontalPadding: 18,
                                    ariaLabel: 'Stop',
                                    children: (0, c.jsx)('i', {
                                        className: 'far fa-stop-circle'
                                    })
                                })
                            }),
                            ' ',
                            'on the top right.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.END_THE_GAME
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'And now you can head back into editing mode by clicking',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'Restore Map'
                            }),
                            ' on the bottom right.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.RESTORE_THE_MAP
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Let\u2019s think. What do we need to add next? ',
                            (0, c.jsx)(m, {}),
                            'Well, we\u2019re going to want to have a ',
                            (0, c.jsx)(l, {
                                children: 'Snowball Launcher.'
                            }),
                            ' ',
                            'This way you can fight back against the enemy (which you\u2019ll add later).'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'To do this, you\u2019ll use the ',
                            (0, c.jsx)(l, {
                                children: 'Item Granter device.'
                            }),
                            ' This device allows you to grant players items in their inventory. ',
                            (0, c.jsx)(m, {}),
                            (0, c.jsx)(m, {}),
                            'Go add an Item Granter device to the map, and place it to the right of your Questioner!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.PLACE_DEVICE_DOWN && a.device.deviceOption.id === d.default.itemGranter
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Right now, the Item Granter doesn\u2019t know which item you want to grant, you have to edit it! ',
                            (0, c.jsx)(m, {}),
                            (0, c.jsx)(l, {
                                children: 'You can edit any device by clicking on it.'
                            }),
                            ' Go click on the Item Granter you just placed.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.OPEN_DEVICE_OPTIONS && a.device.deviceOption.id === d.default.itemGranter
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'You\u2019re now on the ',
                            (0, c.jsx)(l, {
                                children: 'editing screen'
                            }),
                            ', where you can customize this device exactly how you want! ',
                            (0, c.jsx)(m, {}),
                            'You\u2019ll see on the right side that there are all sorts of options you can change, including the item to grant, and how many of that item to grant.'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Go change the ',
                            (0, c.jsx)(l, {
                                children: 'Item To Grant'
                            }),
                            ' option and select any',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'Snowball Launcher'
                            }),
                            '!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.CHANGE_DEVICE_OPTION && a.device.deviceOption.id === d.default.itemGranter && 'itemId' === a.option && a.value.toLocaleLowerCase().includes('snowball_launcher')
                },
                {
                    text: 'Fantastic! Now this Item Granter will give the player a Snowball Launcher! ',
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Close out of the editing screen by clicking the ',
                            (0, c.jsx)(l, {
                                children: 'X'
                            }),
                            ' on the top right!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.CLOSE_DEVICE_OPTIONS
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'The Item Granter is setup, but now we need to connect it to Questioner in some way. ',
                            (0, c.jsx)(m, {}),
                            'We want to give the player a Snowball Launcher when they answer a question correctly.',
                            (0, c.jsx)(m, {}),
                            'How can we do that?'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'That is where the final piece of Gimkit Creative comes into play:',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'wires!'
                            })
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'Wires connect devices together'
                            }),
                            ' \u2014 it\u2019s the way different devices can communicate with one another.'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Open the ',
                            (0, c.jsx)(l, {
                                children: 'Add Menu'
                            }),
                            ' and then select ',
                            (0, c.jsx)(l, {
                                children: 'Wires'
                            }),
                            '.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.START_ADDING_WIRE
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'Now select where the wire will come from.'
                            }),
                            ' Since we\u2019re waiting on a player to answer a question, we want the wire to come from the Questioner device. ',
                            (0, c.jsx)(m, {}),
                            ' ',
                            (0, c.jsx)(m, {}),
                            'Click the Questioner device to begin the wire!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.START_WIRE_FROM_DEVICE && a.device.deviceOption.id === d.default.gimkitLiveQuestion
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'Now select where the wire will end.'
                            }),
                            (0, c.jsx)(m, {}),
                            'We want the player to get the Snowball Launcher, and the Item Granter is responsible for doing that! So,',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'select the Item Granter'
                            }),
                            ' for the end of the wire.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.END_WIRE_TO_DEVICE && a.device.deviceOption.id === d.default.itemGranter
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Nice work! ',
                            (0, c.jsx)(m, {}),
                            'You connected the two devices together, but now you need to',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'tell it exactly what to do.'
                            })
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'We want to grant the Snowball Launcher when a player answers a question correctly. ',
                            (0, c.jsx)(m, {}),
                            'On the left side, select ',
                            (0, c.jsx)(l, {
                                children: 'Question answered correctly'
                            }),
                            '. On the right side, select ',
                            (0, c.jsx)(l, {
                                children: 'Grant item'
                            }),
                            '.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.CONFIGURE_WIRE && 'questionCorrect' === a.wire.startConnection && 'grant' === a.wire.endConnection
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Perfection! Just like that,',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'you\u2019ve connected these two devices together.'
                            }),
                            (0, c.jsx)(m, {}),
                            'Let\u2019s make sure everything works! Close out of this screen by clicking the ',
                            (0, c.jsx)(l, {
                                children: 'X'
                            }),
                            ' on the top right. Then, start the game by clicking',
                            ' ',
                            (0, c.jsx)('div', {
                                style: {
                                    display: 'inline-block',
                                    margin: 10
                                },
                                children: (0, c.jsx)(f.default, {
                                    tooltip: '',
                                    onClick: () => !1,
                                    children: (0, c.jsx)(g.default, {
                                        name: 'fas fa-play'
                                    })
                                })
                            }),
                            ' ',
                            'on the bottom right.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.START_THE_GAME
                },
                {
                    text: (0, c.jsx)(c.Fragment, {
                        children: 'Go answer a question correctly, and let\u2019s see if you get a Snowball Launcher!'
                    }),
                    cb: a => a.event === e.TutorialEventName.GRANT_ITEM && a.itemId.toLocaleLowerCase().includes('snowball_launcher')
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'You got the Snowball Launcher, woohoo!'
                            }),
                            ' ',
                            (0, c.jsx)(m, {}),
                            ' ',
                            (0, c.jsx)(m, {}),
                            ' In Gimkit Creative, this is exactly how you\u2019ll create your own game mechanics.',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'You\u2019ll place different devices together and connect them via wires!'
                            })
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'And just like that, you now know the four fundamentals of Gimkit Creative: ',
                            (0, c.jsx)(l, {
                                children: 'terrain, props, devices, and wires!'
                            })
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'End the game and then click ',
                            (0, c.jsx)(l, {
                                children: 'Restore Map'
                            }),
                            ' to go back into Editing Mode.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.RESTORE_THE_MAP
                },
                {
                    text: (0, c.jsx)(c.Fragment, {
                        children: 'Let\u2018s finish your game by adding an enemy. You\u2019ll have to defeat this enemy to win the game!'
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Open the ',
                            (0, c.jsx)(l, {
                                children: 'Add Menu'
                            }),
                            ' and select ',
                            (0, c.jsx)(l, {
                                children: 'Devices'
                            }),
                            '.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.OPEN_ADD_SUBMENU && 'devices' === a.menu
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Let\u2019s add a ',
                            (0, c.jsx)(l, {
                                children: 'Sentry Device'
                            }),
                            '. ',
                            (0, c.jsx)(m, {}),
                            ' The Sentry Device spawns an enemy that will fire at you in-game.',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'Select the Sentry Device.'
                            })
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.SELECT_DEVICE_TO_ADD && a.deviceTypeId === d.default.sentry
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Now place the Sentry on the map! ',
                            (0, c.jsx)(m, {}),
                            'Make sure to place it in an open area so that you\u2019re able to fire at it!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.PLACE_DEVICE_DOWN && a.device.deviceOption.id === d.default.sentry
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'When you knockout the Sentry, we want the game to end. To end the game, we can use the ',
                            (0, c.jsx)(l, {
                                children: 'End Game Device!'
                            }),
                            ' ',
                            (0, c.jsx)(m, {}),
                            ' Open the',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'Add Menu'
                            }),
                            ', select ',
                            (0, c.jsx)(l, {
                                children: 'Devices'
                            }),
                            ', and then select the ',
                            (0, c.jsx)(l, {
                                children: 'End Game Device'
                            }),
                            '.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.SELECT_DEVICE_TO_ADD && a.deviceTypeId === d.default.endGame
                },
                {
                    text: 'Place the End Game device just a little bit to the right of the Sentry!',
                    cb: a => a.event === e.TutorialEventName.PLACE_DEVICE_DOWN && a.device.deviceOption.id === d.default.endGame
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Now\u2026we want to connect these two devices together. And you know how we can do that: ',
                            (0, c.jsx)(l, {
                                children: 'wires!'
                            })
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Open the ',
                            (0, c.jsx)(l, {
                                children: 'Add Menu'
                            }),
                            ', select ',
                            (0, c.jsx)(l, {
                                children: 'Wires'
                            }),
                            ', and then place a wire starting from the ',
                            (0, c.jsx)(l, {
                                children: 'Sentry Device'
                            }),
                            ' and ending at the ',
                            (0, c.jsx)(l, {
                                children: 'End Game Device'
                            }),
                            '.'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.END_WIRE_TO_DEVICE && a.device.deviceOption.id === d.default.endGame
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Perfect. Now, let\u2019s configure the wire.',
                            (0, c.jsx)(m, {}),
                            'Make it so once the Sentry gets knocked out, the game ends!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.CONFIGURE_WIRE && 'knockedOut' === a.wire.startConnection && 'endGame' === a.wire.endConnection
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Way to go! With that, I think your game is ready! ',
                            (0, c.jsx)(m, {}),
                            (0, c.jsx)(l, {
                                children: 'Start the game'
                            }),
                            ' and let\u2019s try it for real!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.START_THE_GAME
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsx)(l, {
                                children: 'The game has started!'
                            }),
                            (0, c.jsx)(m, {}),
                            'Go answer a question correctly, gain the snowball launcher, and knockout that enemy!'
                        ]
                    }),
                    cb: a => a.event === e.TutorialEventName.END_THE_GAME_BY_DEVICE
                },
                {
                    text: (0, c.jsx)(c.Fragment, {
                        children: (0, c.jsx)('div', {
                            className: 'animated tada',
                            children: 'Woohoo! It worked!'
                        })
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            (0, c.jsxs)(l, {
                                children: [
                                    'Great work today, ',
                                    (0, j.getUser)().firstName,
                                    '!'
                                ]
                            }),
                            ' You\'ve already built your very own mini-game!'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Keep exploring Gimkit Creative!',
                            (0, c.jsx)(m, {}),
                            'As you explore and learn, you\'ll be able to build more & more types of maps & games! ',
                            (0, c.jsx)(l, {
                                children: 'The possibilities are endless!'
                            })
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'Also, don\u2019t worry if you\u2019re not understanding something! Gimkit Creative is open for you to just experiment, and play around!',
                            ' ',
                            (0, c.jsx)(m, {}),
                            ' ',
                            (0, c.jsx)(m, {}),
                            ' Just like any other skill, you may not get it right away. But',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'the more you practice, the better you\u2019ll get.'
                            }),
                            ' You can do this!'
                        ]
                    }),
                    cb: k
                },
                {
                    text: (0, c.jsxs)(c.Fragment, {
                        children: [
                            'And...that\'s the end of the tutorial.',
                            ' ',
                            (0, c.jsx)(l, {
                                children: 'Click the button to the right to claim your reward!'
                            })
                        ]
                    }),
                    cb: () => !1
                }
            ]
        };
}), b.register('lV1Oj', function(j, k) {
    a(j.exports, 'default', function() {
        return h;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('PjB0f'),
        f = b('YfLmS'),
        g = b('Dog9Y');
    var h = a => {
        const [i, j, k] = (0, e.useBoolean)(!1), l = d.useRef(null);
        return (0, c.jsx)('div', {
            ref: l,
            children: (0, c.jsx)(f.default, {
                title: a.tooltip,
                placement: 'bottom',
                open: i,
                getPopupContainer: () => l.current,
                children: (0, c.jsx)('div', {
                    onMouseEnter: j,
                    onMouseLeave: k,
                    children: (0, c.jsx)(g.default, {
                        type: 'default',
                        onClick: a.onClick,
                        customHorizontalPadding: 18,
                        customColor: '#4A2C83',
                        ariaLabel: a.tooltip,
                        children: a.children
                    })
                })
            })
        });
    };
}), b.register('Dog9Y', function(l, m) {
    a(l.exports, 'default', function() {
        return j;
    });
    var c = b('8kSQZ'),
        d = b('CDq40'),
        e = b('uPP4W'),
        f = b('h99Nu'),
        g = b('gSUVO'),
        h = b('S/jX4');
    let i;
    var j = a => {
        const k = a.size || 'default',
            l = e.useMemo(() => a.customColor ? a.customColor : a.disabled ? '#546e7a' : 'success' === a.type ? '#2e7d32' : 'danger' === a.type ? '#c62828' : '#3f51b5', [
                a.disabled,
                a.type,
                a.customColor
            ]),
            m = e.useMemo(() => (0, d.darken)(0.1, l), [l]),
            n = e.useMemo(() => 'small' === k || 'default' === k ? 14 : 20, [k]),
            o = e.useMemo(() => 'small' === k ? 6 : 'default' === k ? 8 : 12, [k]),
            p = e.useMemo(() => {
                const q = 'small' === k ? '8px' : '12px';
                return a.customHorizontalPadding ? `${ q } ${ a.customHorizontalPadding }px` : 'small' === k ? `${ q } 24px` : 'default' === k ? `${ q } 28px` : `${ q } 42px`;
            }, [
                k,
                a.customHorizontalPadding
            ]),
            q = e.useMemo(() => 'small' === k ? 41 : 49, [k]),
            r = e.useMemo(() => a.customFontWeight ? a.customFontWeight : 'large' === k ? g.FontWeights.Bold : g.FontWeights.Normal, [
                a.customFontWeight,
                k
            ]),
            s = () => {
                a.disabled || a.onClick && a.onClick();
            };
        return (0, c.jsx)(k, {
            style: Object.assign({
                pointerEvents: 'all',
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: q
            }, a.style || {}),
            children: (0, c.jsxs)('button', {
                className: 'btn-pushable',
                'aria-label': a.ariaLabel,
                onClick: a.usePointerDownEvent ? void 0 : s,
                onPointerDown: a.usePointerDownEvent ? s : void 0,
                style: {
                    cursor: a.disabled ? 'not-allowed' : 'pointer',
                    width: a.block ? '100%' : 'auto'
                },
                children: [
                    (0, c.jsx)('span', {
                        className: 'btn-shadow',
                        style: {
                            borderRadius: o
                        }
                    }),
                    (0, c.jsx)('span', {
                        className: 'btn-edge',
                        style: {
                            background: m,
                            borderRadius: o
                        }
                    }),
                    (0, c.jsx)('span', {
                        className: 'btn-front',
                        style: {
                            background: l,
                            fontSize: n,
                            borderRadius: o,
                            padding: p,
                            fontWeight: r
                        },
                        children: a.children
                    })
                ]
            })
        });
    };
    const k = f.default.div.attrs({
        className: 'flex'
    })(i || (i = (a => a)`
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
`), h.default.White);
}), b.register('S/jX4', function(b, w) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        White: '#FFFFFF',
        Black: '#000000',
        Yellow: '#FFFF00',
        Purple: '#673ab7'
    };
}), b.register('iMnBi', function(w, x) {
    a(w.exports, 'default', function() {
        return d;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = a => (0, c.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), b.register('Yn39D', function(w, x) {
    a(w.exports, 'default', function() {
        return h;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu');
    let e, f, g = a => a;
    var h = a => (0, c.jsxs)(i, {
        children: [
            (0, c.jsx)(j, {
                children: a.children
            }),
            (0, c.jsx)('div', {
                className: 'area',
                children: (0, c.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, c.jsx)('li', {}),
                        (0, c.jsx)('li', {}),
                        (0, c.jsx)('li', {}),
                        (0, c.jsx)('li', {}),
                        (0, c.jsx)('li', {}),
                        (0, c.jsx)('li', {}),
                        (0, c.jsx)('li', {}),
                        (0, c.jsx)('li', {}),
                        (0, c.jsx)('li', {}),
                        (0, c.jsx)('li', {})
                    ]
                })
            })
        ]
    });
    const i = d.default.div(e || (e = g`
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
        j = d.default.div(f || (f = g`
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.4); */
  flex: 1;
`));
}), b.register('4O5ns', function(w, x) {
    a(w.exports, 'default', function() {
        return t;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('h99Nu'),
        f = b('YimJ0'),
        g = b('lmfrI'),
        h = b('gSUVO'),
        i = b('PjB0f'),
        j = b('Dog9Y'),
        k = b('IsmrL'),
        l = b('iHElh'),
        m = b('JJQ0+');
    let n, o, p, q, r, s = a => a;
    var t = () => {
        const [u, v] = d.useState(!0), [w, x] = d.useState(!1), y = () => {
            v(!0), (0, i.request)({
                url: '/api/created-map/tutorial-reward',
                method: 'POST',
                success: () => {
                    x(!1);
                },
                error: () => {
                    x(!0);
                },
                both: () => {
                    v(!1);
                }
            });
        };
        return d.useEffect(() => {
            (0, i.loadFont)('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap'), y();
        }, []), u ? (0, c.jsx)(u, {
            children: (0, c.jsx)(l.default, {
                size: 'large'
            })
        }) : w ? (0, c.jsxs)(u, {
            children: [
                (0, c.jsx)('div', {
                    style: {
                        fontFamily: h.Fonts.SFPro,
                        fontSize: 18,
                        textTransform: 'none',
                        marginBottom: 10
                    },
                    children: 'An error occurred redeeming your reward. Click the button to try again.'
                }),
                (0, c.jsx)(k.default, {
                    onClick: y,
                    children: 'Try Again'
                })
            ]
        }) : (0, c.jsx)(u, {
            children: (0, c.jsxs)(u, {
                className: 'animated fadeIn',
                children: [
                    (0, c.jsx)(v, {
                        children: 'Gimkit Creative'
                    }),
                    (0, c.jsx)(w, {
                        children: 'Tutorial Complete!'
                    }),
                    (0, c.jsx)('div', {
                        className: 'animated pulse infinite',
                        style: {
                            animationDuration: '3s'
                        },
                        children: (0, c.jsx)(x, {})
                    }),
                    (0, c.jsxs)(y, {
                        children: [
                            'You unlocked the',
                            ' ',
                            (0, c.jsx)('span', {
                                style: {
                                    color: '#ffff94'
                                },
                                children: 'Blueprint Gim!'
                            }),
                            ' You can find it in your Locker!'
                        ]
                    }),
                    (0, c.jsx)('div', {
                        style: {
                            marginTop: 30
                        },
                        children: (0, c.jsx)(j.default, {
                            type: 'success',
                            customFontWeight: h.FontWeights.Bold,
                            style: {
                                fontFamily: h.Fonts.SFPro
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
    const u = (0, e.default)(f.CenteredColumn)(n || (n = s`
  flex: 1;
  background: #25397d;
  color: ${ 0 };
  font-family: ${ 0 };
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
`), g.default.White, h.Fonts.FugazOne),
        v = e.default.div(o || (o = s`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 26px;
  opacity: 0.85;
`)),
        w = e.default.div(p || (p = s`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 48px;
  margin-top: -9px;
`)),
        x = e.default.img.attrs({
            src: (0, m.default)('characters/spine/preview/construction.png')
        })(q || (q = s`
  height: 279px;
  transform: rotate(355deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`)),
        y = e.default.div(r || (r = s`
  font-family: ${ 0 };
  text-transform: none;
  font-weight: ${ 0 };
  font-size: 21px;
  margin-top: 10px;
`), h.Fonts.SFPro, h.FontWeights.Bold);
}), b.register('oSNZM', function(n, c) {
    a(n.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('lByv9'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'CheckOutlined';
    var h = d.forwardRef(g);
}), b.register('lByv9', function(b, n) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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