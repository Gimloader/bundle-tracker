function e(e, t, n, a) {
    Object.defineProperty(e, t, {
        get: n,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("2vMHv", (function(n, a) {
    var i;
    i = n.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(n.exports, "Container", (function() {
        return p
    })), e(n.exports, "default", (function() {
        return x
    }));
    var r = t("hxEiv"),
        o = t("fywoC"),
        s = t("2FDaO"),
        l = t("4ifJF"),
        c = t("gHmyG"),
        d = t("iMOcM"),
        h = t("f40vJ"),
        u = t("hHrJI");
    let m;
    var x = () => {
        const [e, t] = o.useState(null), [n, a] = (0, d.useBoolean)(!1);
        o.useEffect((() => {
            (0, d.request)({
                url: "/api/matchmaker/intent/map/tutorial/create",
                success: e => {
                    t(e)
                },
                error: e => {
                    (0, d.throwMessageError)({
                        e: e,
                        default: {
                            title: "There was an error loading into the tutorial."
                        },
                        onOk: () => window.location.href = "/"
                    })
                }
            })
        }), []);
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(d.Title, {
                title: "Gimkit Creative Tutorial"
            }), e ? n ? (0, r.jsx)(u.default, {}) : (0, r.jsx)(h.default, {
                intentId: e,
                onTutorialComplete: a
            }) : (0, r.jsx)(p, {
                children: (0, r.jsx)(c.default, {
                    size: "large"
                })
            })]
        })
    };
    const p = (0, s.default)(l.Centered).attrs({
        className: "maxAll"
    })(m || (m = (e => e)``))
})), t.register("4ifJF", (function(n, a) {
    e(n.exports, "Centered", (function() {
        return d
    })), e(n.exports, "VerticallyCentered", (function() {
        return h
    })), e(n.exports, "CenteredColumn", (function() {
        return u
    })), e(n.exports, "VerticalCentered", (function() {
        return m
    }));
    var i = t("2FDaO");
    let r, o, s, l, c = e => e;
    const d = i.default.div.attrs({
            className: "flex-center"
        })(r || (r = c``)),
        h = i.default.div.attrs({
            className: "flex vc"
        })(o || (o = c``)),
        u = (0, i.default)(d).attrs({
            className: "flex-column"
        })(s || (s = c``)),
        m = i.default.div.attrs({
            className: "flex vc"
        })(l || (l = c``))
})), t.register("f40vJ", (function(n, a) {
    e(n.exports, "default", (function() {
        return C
    }));
    var i = t("hxEiv"),
        r = t("lKmIF"),
        o = t("alREA"),
        s = t("fywoC"),
        l = t("2FDaO"),
        c = t("fI2SP"),
        d = t("6zpVf"),
        h = t("9FXgq"),
        u = t("iMOcM"),
        m = t("aQuqp"),
        x = t("69SUA"),
        p = t("4ifJF"),
        g = t("5JnD6");
    let f, v, y, b, w, j, E, T, k, _, N = e => e;
    var C = e => {
        const [t, n] = s.useState(0), a = s.useRef(null), r = h.TutorialData.steps[t].text, l = h.TutorialData.steps[t].cb, p = l === h.OnNextClicked, f = (e, t) => {
            const n = h.TutorialData.steps[t];
            n && n.cb !== h.OnNextClicked && (n.completed || n.cb(e) && (n.cb = h.OnNextClicked))
        };
        (0, d.SetTutorialEventListener)((e => {
            for (let n = 1; n < 6; n++) f(e, t + n);
            l(e) && t < h.TutorialData.steps.length - 1 && (() => {
                for (let e = 1; e < h.TutorialData.steps.length; e++) {
                    const a = h.TutorialData.steps[t + e];
                    if (a && !a.completed) {
                        n(t + e);
                        break
                    }
                }
            })()
        }));
        const [v, y] = s.useState(!0);
        s.useEffect((() => {
            y(!0);
            const e = setTimeout((() => {
                y(!1)
            }), 1500);
            return () => {
                clearTimeout(e)
            }
        }), [t]), s.useEffect((() => {
            const e = setInterval((() => {
                var e;
                null === (e = a.current) || void 0 === e || e.focus()
            }), 100);
            return () => {
                clearInterval(e)
            }
        }), []);
        const b = `/host?id=${e.intentId}`,
            w = t === h.TutorialData.steps.length - 1,
            j = w ? "Claim Reward" : "Next";
        return (0, i.jsxs)(D, {
            children: [(0, i.jsx)(u.Title, {
                title: "Gimkit Creative Tutorial",
                override: !0
            }), (0, i.jsxs)(S, {
                children: [(0, i.jsx)(F, {
                    children: (0, i.jsx)("iframe", {
                        ref: a,
                        style: {
                            border: "none"
                        },
                        className: "maxAll",
                        width: "100%",
                        height: "100%",
                        src: b,
                        title: "Creative Tutorial",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    })
                }), (0, i.jsx)(I, {
                    children: (0, i.jsx)(g.default, {
                        children: (0, i.jsxs)(O, {
                            children: [(0, i.jsx)(A, {
                                src: (0, o.default)("characters/spine/preview/construction.png")
                            }), (0, i.jsx)(L, {
                                children: (0, i.jsx)(c.default, {
                                    percent: w ? 99.99 : t / h.TutorialData.steps.length * 100,
                                    status: "active",
                                    style: {
                                        width: "80%",
                                        maxWidth: 450,
                                        marginTop: 30
                                    },
                                    trailColor: "rgba(255, 255, 255, 0.2)",
                                    showInfo: !1
                                })
                            }), (0, i.jsx)(M, {
                                children: (0, i.jsx)(P, {
                                    children: r
                                })
                            }), !p && !w || v ? (0, i.jsx)(G, {}) : (0, i.jsx)(G, {
                                className: "animated fadeIn",
                                children: (0, i.jsx)(m.default, {
                                    type: "success",
                                    customFontWeight: x.FontWeights.Bold,
                                    onClick: () => {
                                        w ? e.onTutorialComplete() : (0, d.EmitTutorialEvent)({
                                            event: d.TutorialEventName.NEXT
                                        })
                                    },
                                    ariaLabel: j,
                                    children: j
                                })
                            })]
                        })
                    })
                })]
            })]
        })
    };
    const D = l.default.div.attrs({
            className: "flex hc"
        })(f || (f = N`
  flex: 1;
  background: ${0};
`), r.default.BackgroundPurple),
        S = (0, l.default)(p.CenteredColumn).attrs({
            className: "maxAll"
        })(v || (v = N`
  flex-direction: column;
`)),
        F = l.default.div(y || (y = N`
  flex: 1;
  width: 100%;
`)),
        I = l.default.div.attrs({
            className: "maxWidth"
        })(b || (b = N`
  min-height: ${0}px;
  box-shadow: 0px 2px 14px 0px black;
  background: #182673;
  color: ${0};
  overflow: hidden;
  flex-shrink: 0;
`), 125, r.default.White),
        O = l.default.div.attrs({
            className: "maxAll flex vc between"
        })(w || (w = N`
  position: relative;
  min-height: ${0}px;
  padding: 25px 30px;
  padding-top: 40px;
`), 125),
        A = l.default.img(j || (j = N`
  height: 153px;
  position: absolute;
  bottom: -32px;
  left: -22px;
  opacity: 0.9;
  transform: rotate(356deg);
`)),
        L = l.default.div.attrs({
            className: "maxWidth flex-center"
        })(E || (E = N`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 20px;
`)),
        M = l.default.div(T || (T = N`
  font-size: 19px;
  margin-left: 105px;
`)),
        P = l.default.div(k || (k = N`
  text-align: left;
  margin: auto auto auto 0;
`)),
        G = l.default.div.attrs({
            className: "flex hc vc maxHeight"
        })(_ || (_ = N`
  margin-left: 35px;
  flex-shrink: 0;
  min-width: 85px;
`))
})), t.register("alREA", (function(t, n) {
    let a;
    e(t.exports, "default", (function() {
        return i
    }));
    var i = e => {
        const t = (() => {
            var e;
            if (a) return a;
            const t = null === (e = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === e ? void 0 : e.getAttribute("content");
            return void 0 !== t && "$CDN_MAP_ASSETS_URL" !== t ? (a = t, a) : ""
        })();
        return e.startsWith("/assets/map") ? `${t}${e}` : `${t}/assets/map/${e}`
    }
})), t.register("6zpVf", (function(n, a) {
    e(n.exports, "TutorialEventName", (function() {
        return o
    })), e(n.exports, "EmitTutorialEvent", (function() {
        return c
    })), e(n.exports, "SetTutorialEventListener", (function() {
        return d
    }));
    var i = t("aNA20");
    const r = "tutorial_event";
    let o;
    var s;
    let l;
    (s = o || (o = {})).NEXT = "next", s.OPEN_ADD_MENU = "open_add_menu", s.OPEN_ADD_SUBMENU = "open_add_submenu", s.SELECT_PROP_TO_ADD = "select_prop_to_add", s.SELECT_TERRAIN_TO_ADD = "select_terrain_to_add", s.SELECT_DEVICE_TO_ADD = "select_device_to_add", s.START_COPY_DEVICE = "start_copy_device", s.PLACE_DEVICE_DOWN = "place_device_down", s.START_THE_GAME = "start_the_game", s.ANSWER_A_QUESTION = "answer_a_question", s.END_THE_GAME = "end_the_game", s.END_THE_GAME_BY_DEVICE = "end_the_game_by_device", s.RESTORE_THE_MAP = "restore_the_map", s.OPEN_DEVICE_OPTIONS = "open_device_options", s.CHANGE_DEVICE_OPTION = "change_device_option", s.CLOSE_DEVICE_OPTIONS = "close_device_options", s.START_ADDING_WIRE = "start_adding_wire", s.START_WIRE_FROM_DEVICE = "start_wire_from_device", s.END_WIRE_TO_DEVICE = "end_wire_to_device", s.CONFIGURE_WIRE = "configure_wire", s.GRANT_ITEM = "grant_item", window.document.addEventListener(r, (e => {
        l && l(e.detail)
    }), !1);
    const c = e => {
            if (!(0, i.IsTutorial)() && e.event !== o.NEXT) return;
            const t = new CustomEvent(r, {
                detail: e
            });
            window.top.document.dispatchEvent(t)
        },
        d = e => {
            l = e
        }
})), t.register("aNA20", (function(n, a) {
    e(n.exports, "IsTutorial", (function() {
        return r
    }));
    var i = t("80uFV");
    const r = () => window._mapId === i.TutorialConsts.mapId
})), t.register("80uFV", (function(n, a) {
    e(n.exports, "TutorialConsts", (function() {
        return r
    }));
    var i = t("z5iun");
    const r = {
        mapId: "tutorial0001",
        topDevices: [i.default.characterSpawnPad, i.default.gimkitLiveQuestion, i.default.itemGranter, i.default.sentry, i.default.endGame],
        topProps: ["bare-tree-1", "bare-tree-2", "bare-tree-3", "snow-tree-1", "snow-tree-1-dark", "snow-tree-2", "snow-tree-2-dark", "snow-tree-3", "snow-tree-3-dark"],
        topTerrain: ["Snow", "Snowy Grass"]
    }
})), t.register("z5iun", (function(t, n) {
    let a;
    var i;
    e(t.exports, "default", (function() {
        return r
    })), (i = a || (a = {})).luckyBlock = "luckyBlock", i.chest = "chest", i.jumpGranter = "jumpGranter", i.teamColorTilesManager = "teamColorTilesManager", i.changingBooth = "changingBooth", i.popupListItem = "popupListItem", i.gadgetModifier = "gadgetModifier", i.zombieSpawnZone = "zombieSpawnZone", i.zombieWaveDesigner = "zombieWaveDesigner", i.zombieDesigner = "zombieDesigner", i.zombieInvasion = "zombieInvasion", i.codeUI = "codeUI", i.damager = "damager", i.cameraPoint = "cameraPoint", i.blockingZone = "blockingZone", i.character = "character", i.classDesigner = "classDesigner", i.backgroundTilesZone = "backgroundTilesZone", i.proceduralTerrainZoneZoneInstruction = "proceduralTerrainZoneZoneInstruction", i.proceduralTerrainZone = "proceduralTerrainZone", i.dialogueAction = "dialogueAction", i.dialogue = "dialogue", i.voiceLine = "voiceLine", i.scorebar = "scorebar", i.outline = "outline", i.ball = "ball", i.damageBoost = "damageBoost", i.checkpoint = "checkpoint", i.playerPositionDetector = "playerPositionDetector", i.itemImage = "itemImage", i.mood = "mood", i.playerAppearanceModifier = "playerAppearanceModifier", i.waypoint = "waypoint", i.flag = "flag", i.checker = "checker", i.trigger = "trigger", i.counter = "counter", i.teleporter = "teleporter", i.itemGranter = "itemGranter", i.characterSpawnPad = "characterSpawnPad", i.textBillboard = "textBillboard", i.prop = "prop", i.barrier = "barrier", i.button = "button", i.droppedItem = "droppedItem", i.property = "property", i.mapOptions = "mapOptions", i.teamSettings = "teamSettings", i.imageBillboard = "imageBillboard", i.gimkitLiveQuestion = "gimkitLiveQuestion", i.ballZone = "ballZone", i.zone = "zone", i.captureFlagZone = "captureFlagZone", i.textExplainer = "textExplainer", i.relay = "relay", i.cameraSize = "cameraSize", i.music = "music", i.speed = "speed", i.soundEffect = "soundEffect", i.inventoryItemManager = "inventoryItemManager", i.guiDevice = "guiDevice", i.lifecycle = "lifecycle", i.endGame = "endGame", i.countdown = "countdown", i.shadow = "shadow", i.characterProximity = "characterProximity", i.repeater = "repeater", i.vendingMachine = "vendingMachine", i.teamSwitcher = "teamSwitcher", i.notification = "notification", i.endOfGameWidget = "endOfGameWidget", i.respawn = "respawn", i.xp = "xp", i.assignmentCheckpoint = "assignmentCheckpoint", i.assignmentContext = "assignmentContext", i.placedSticker = "placedSticker", i.wireRepeater = "wireRepeater", i.movementMeter = "movementMeter", i.craftingTable = "craftingTable", i.craftingRecipe = "craftingRecipe", i.startingInventory = "startingInventory", i.healthGranter = "healthGranter", i.sentry = "sentry", i.knockoutManager = "knockoutManager", i.laserBeam = "laserBeam", i.laserBeamManager = "laserBeamManager", i.cosmosModifier = "cosmosModifier", i.passwordLock = "passwordLock", i.itemSpawner = "itemSpawner", i.tagZone = "tagZone";
    var r = a
})), t.register("9FXgq", (function(n, a) {
    e(n.exports, "OnNextClicked", (function() {
        return u
    })), e(n.exports, "TutorialData", (function() {
        return p
    }));
    var i = t("hxEiv"),
        r = t("z5iun"),
        o = t("6zpVf"),
        s = t("dSH74"),
        l = t("py2Xr"),
        c = t("lKmIF"),
        d = t("aQuqp"),
        h = t("iMOcM");
    const u = e => e.event === o.TutorialEventName.NEXT,
        m = e => (0, i.jsx)("span", {
            style: {
                fontWeight: "bold",
                color: "#ffff94"
            },
            children: e.children
        }),
        x = () => (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("br", {})
        }),
        p = {
            steps: [{
                text: (0, i.jsxs)("div", {
                    children: ["Hey there! Welcome to ", (0, i.jsx)(m, {
                        children: "Gimkit Creative"
                    }), ", a tool which you can use to build your own maps, game modes, and more!"]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)("div", {
                    children: ["I’ll be here to show you the basics of Gimkit Creative.", (0, i.jsx)("br", {}), "Once you get the basics down, you'll be able to build all sorts of maps & games!"]
                }),
                cb: u
            }, {
                text: "Let's chat about the game you're going to build today!",
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["In this game, there will be an ", (0, i.jsx)(m, {
                        children: "enemy you have to knockout"
                    }), " ", "to win the game!"]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["However, you're going to start with ", (0, i.jsx)(m, {
                        children: "nothing"
                    }), " in your inventory! ", (0, i.jsx)(x, {}), "You'll have to answer a question correctly to earn a Snowball Launcher."]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Once you have that Snowball Launcher, you can use it to", " ", (0, i.jsx)(m, {
                        children: "knockout the enemy!"
                    })]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["To recap, in your game, you will...", (0, i.jsxs)("ol", {
                        style: {
                            marginTop: 10
                        },
                        children: [(0, i.jsx)("li", {
                            children: "Answer a question correctly"
                        }), (0, i.jsx)("li", {
                            children: "Earn a Snowball Launcher"
                        }), (0, i.jsx)("li", {
                            children: "Knockout the enemy with the Snowball Launcher"
                        })]
                    })]
                }),
                cb: u
            }, {
                text: "You ready? Let’s get building!",
                cb: u
            }, {
                text: (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(m, {
                        children: "To add anything to your map"
                    }), ", click the", " ", (0, i.jsx)("div", {
                        style: {
                            display: "inline-block",
                            margin: 10
                        },
                        children: (0, i.jsx)(s.default, {
                            tooltip: "",
                            onClick: () => !1,
                            children: (0, i.jsx)(l.default, {
                                name: "fas fa-plus"
                            })
                        })
                    }), " ", "button on the top right! Go ahead and click it now!"]
                }),
                cb: e => e.event === o.TutorialEventName.OPEN_ADD_MENU
            }, {
                text: (0, i.jsxs)("div", {
                    children: ["Nice! This is the ", (0, i.jsx)(m, {
                        children: "Add Menu"
                    }), ", which is where you’ll go to add things to your map. ", (0, i.jsx)(x, {}), "Terrain, Props, Devices, and Wires are all things you can add to your map. Let’s start by selecting ", (0, i.jsx)(m, {
                        children: "Terrain"
                    }), "."]
                }),
                cb: e => e.event === o.TutorialEventName.OPEN_ADD_SUBMENU && "terrain" === e.menu
            }, {
                text: (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(m, {
                        children: "Terrain are the floors and walls of your map."
                    }), " As you can see, there are many different options to choose from! ", (0, i.jsx)(x, {}), " Since this game will have the player using a Snowball Launcher, let’s add some snow! Select the ", (0, i.jsx)(m, {
                        children: "Snow"
                    }), " terrain."]
                }),
                cb: e => e.event === o.TutorialEventName.SELECT_TERRAIN_TO_ADD && "Snow" === e.terrainId
            }, {
                text: (0, i.jsxs)("div", {
                    children: ["Awesome! You have the Snow Terrain selected, and you can start", " ", (0, i.jsx)(m, {
                        children: "clicking to place it anywhere on the map!"
                    }), " ", (0, i.jsx)(x, {}), " Go ahead and place a bunch of snow on the map and", " ", (0, i.jsx)(m, {
                        children: "click the Next Button when you’re done!"
                    })]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Looking good! But…our map is looking a little empty. That is where", " ", (0, i.jsx)(m, {
                        children: "props"
                    }), " come in!"]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        children: "Props are objects you can place on your map for decoration."
                    }), " ", "Things like trees, tables, and chairs.", " ", (0, i.jsx)(m, {
                        children: "Let’s add some trees to liven things up!"
                    }), (0, i.jsx)(x, {}), " ", (0, i.jsx)(x, {}), "If you haven’t yet, close out of the terrain adding screen by clicking the ", (0, i.jsx)(m, {
                        children: "X"
                    }), " button.", (0, i.jsx)(x, {}), "From there, open up the add menu again by clicking", " ", (0, i.jsx)("div", {
                        style: {
                            display: "inline-block",
                            margin: 10
                        },
                        children: (0, i.jsx)(s.default, {
                            tooltip: "",
                            onClick: () => !1,
                            children: (0, i.jsx)(l.default, {
                                name: "fas fa-plus"
                            })
                        })
                    }), " ", "on the top right!"]
                }),
                cb: e => e.event === o.TutorialEventName.OPEN_ADD_MENU
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["And now, select ", (0, i.jsx)(m, {
                        children: "Props"
                    }), "!"]
                }),
                cb: e => e.event === o.TutorialEventName.OPEN_ADD_SUBMENU && "props" === e.menu
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Here you can find all the props available to use! ", (0, i.jsx)(x, {}), (0, i.jsx)(m, {
                        children: "Select one of the trees"
                    }), " to begin adding it to the map!"]
                }),
                cb: e => e.event === o.TutorialEventName.SELECT_PROP_TO_ADD && e.propId.toLocaleLowerCase().includes("tree")
            }, {
                text: "Just click to place the tree down on your map!",
                cb: e => e.event === o.TutorialEventName.PLACE_DEVICE_DOWN && e.device.deviceOption.id === r.default.prop && e.device.options.propId.toLocaleLowerCase().includes("tree")
            }, {
                text: (0, i.jsxs)("div", {
                    children: ["Nice! But one tree isn’t enough. Let’s add another one. ", (0, i.jsx)(x, {}), " ", (0, i.jsx)(x, {}), "To make things quicker, you can hover your mouse over the tree and then press", " ", (0, i.jsx)("span", {
                        style: {
                            color: c.default.Black,
                            background: c.default.White,
                            padding: "4px 8px",
                            borderRadius: 4,
                            margin: 4
                        },
                        children: "C"
                    }), " ", "on your keyboard (C for copy). Try that now!"]
                }),
                cb: e => e.event === o.TutorialEventName.START_COPY_DEVICE && e.device.deviceOption.id === r.default.prop && e.device.options.propId.toLocaleLowerCase().includes("tree")
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Perfect! Now go place as many trees on your map as you would like, and then click the ", (0, i.jsx)(m, {
                        children: "Next Button"
                    }), " when you’re ready!"]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Awesome work. Terrain and props are how you get your map to look exactly how you want it to! ", (0, i.jsx)(x, {}), "But, how do you actually make this map…a game? That is where", " ", (0, i.jsx)(m, {
                        children: "Devices"
                    }), " come in!"]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        children: "Devices are how game mechanics are built."
                    }), " Each device is responsible for a small part of your gameplay.", (0, i.jsx)(x, {}), " ", (0, i.jsx)(x, {}), "For example, the ", (0, i.jsx)(m, {
                        children: "Spawn Pad device"
                    }), " is responsible for setting the location of players when your game begins. ", (0, i.jsx)(x, {}), " ", (0, i.jsx)(x, {}), "The ", (0, i.jsx)(m, {
                        children: "Teleporter device"
                    }), " is responsible for teleporting a player from one place to another!"]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Let’s start off by placing our first device. Click the", " ", (0, i.jsx)("div", {
                        style: {
                            display: "inline-block",
                            margin: 10
                        },
                        children: (0, i.jsx)(s.default, {
                            tooltip: "",
                            onClick: () => !1,
                            children: (0, i.jsx)(l.default, {
                                name: "fas fa-plus"
                            })
                        })
                    }), " ", "button on the top right to open the add menu, and then select", " ", (0, i.jsx)(m, {
                        children: "Devices"
                    }), "."]
                }),
                cb: e => e.event === o.TutorialEventName.OPEN_ADD_SUBMENU && "devices" === e.menu
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Here are all the devices you can place! It might look like a lot, but each device typically does just one small task. ", (0, i.jsx)(x, {}), "Select the ", (0, i.jsx)(m, {
                        children: "Spawn Pad"
                    }), " device."]
                }),
                cb: e => e.event === o.TutorialEventName.SELECT_DEVICE_TO_ADD && e.deviceTypeId === r.default.characterSpawnPad
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        children: "Click to place the Spawn Pad device anywhere"
                    }), ". That is where you will spawn once the game begins!"]
                }),
                cb: e => e.event === o.TutorialEventName.PLACE_DEVICE_DOWN && e.device.deviceOption.id === r.default.characterSpawnPad
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Perfect. Now…what should we add in next? How about a way for players to answer multiple-choice questions, like in normal Gimkit modes?", (0, i.jsx)(x, {}), (0, i.jsx)(x, {}), " Open the ", (0, i.jsx)(m, {
                        children: "Add Menu"
                    }), ", select ", (0, i.jsx)(m, {
                        children: "Devices"
                    }), ", and then select the ", (0, i.jsx)(m, {
                        children: "Questioner"
                    }), " device."]
                }),
                cb: e => e.event === o.TutorialEventName.SELECT_DEVICE_TO_ADD && e.deviceTypeId === r.default.gimkitLiveQuestion
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["With this device,", " ", (0, i.jsx)(m, {
                        children: "players will be able to walk up to it and start answering multiple choice questions!"
                    }), " ", "Place it next to the Spawn Pad so that players won’t have to walk far to start answering."]
                }),
                cb: e => e.event === o.TutorialEventName.PLACE_DEVICE_DOWN && e.device.deviceOption.id === r.default.gimkitLiveQuestion
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Nice work. At this point, you’ve added a lot. Let's test your game to make sure everything works properly. ", (0, i.jsx)(x, {}), (0, i.jsx)(x, {}), "You’re currently in editing mode, but you can quickly jump into a game by clicking the", " ", (0, i.jsx)("div", {
                        style: {
                            display: "inline-block",
                            margin: 10
                        },
                        children: (0, i.jsx)(s.default, {
                            tooltip: "",
                            onClick: () => !1,
                            children: (0, i.jsx)(l.default, {
                                name: "fas fa-play"
                            })
                        })
                    }), " ", "button on the bottom right.", " ", (0, i.jsx)(m, {
                        children: "Click that button and start the game!"
                    })]
                }),
                cb: e => e.event === o.TutorialEventName.START_THE_GAME
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Now you’re in-game! This is what players will experience when they play your map! ", (0, i.jsx)(x, {}), "Walk over to the Questioner Device you placed and", " ", (0, i.jsx)(m, {
                        children: "answer a question!"
                    })]
                }),
                cb: e => e.event === o.TutorialEventName.ANSWER_A_QUESTION
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Woohoo! Everything works! ", (0, i.jsx)(x, {}), "Let’s go back to editing and finishing up our game. Close out of this screen and end the game by clicking", " ", (0, i.jsx)("div", {
                        style: {
                            display: "inline-block",
                            margin: 10
                        },
                        children: (0, i.jsx)(d.default, {
                            type: "danger",
                            onClick: () => !1,
                            customHorizontalPadding: 18,
                            ariaLabel: "Stop",
                            children: (0, i.jsx)("i", {
                                className: "far fa-stop-circle"
                            })
                        })
                    }), " ", "on the top right."]
                }),
                cb: e => e.event === o.TutorialEventName.END_THE_GAME
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["And now you can head back into editing mode by clicking", " ", (0, i.jsx)(m, {
                        children: "Restore Map"
                    }), " on the bottom right."]
                }),
                cb: e => e.event === o.TutorialEventName.RESTORE_THE_MAP
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Let’s think. What do we need to add next? ", (0, i.jsx)(x, {}), "Well, we’re going to want to have a ", (0, i.jsx)(m, {
                        children: "Snowball Launcher."
                    }), " ", "This way you can fight back against the enemy (which you’ll add later)."]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["To do this, you’ll use the ", (0, i.jsx)(m, {
                        children: "Item Granter device."
                    }), " This device allows you to grant players items in their inventory. ", (0, i.jsx)(x, {}), (0, i.jsx)(x, {}), "Go add an Item Granter device to the map, and place it to the right of your Questioner!"]
                }),
                cb: e => e.event === o.TutorialEventName.PLACE_DEVICE_DOWN && e.device.deviceOption.id === r.default.itemGranter
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Right now, the Item Granter doesn’t know which item you want to grant, you have to edit it! ", (0, i.jsx)(x, {}), (0, i.jsx)(m, {
                        children: "You can edit any device by clicking on it."
                    }), " Go click on the Item Granter you just placed."]
                }),
                cb: e => e.event === o.TutorialEventName.OPEN_DEVICE_OPTIONS && e.device.deviceOption.id === r.default.itemGranter
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["You’re now on the ", (0, i.jsx)(m, {
                        children: "editing screen"
                    }), ", where you can customize this device exactly how you want! ", (0, i.jsx)(x, {}), "You’ll see on the right side that there are all sorts of options you can change, including the item to grant, and how many of that item to grant."]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Go change the ", (0, i.jsx)(m, {
                        children: "Item To Grant"
                    }), " option and select any", " ", (0, i.jsx)(m, {
                        children: "Snowball Launcher"
                    }), "!"]
                }),
                cb: e => e.event === o.TutorialEventName.CHANGE_DEVICE_OPTION && e.device.deviceOption.id === r.default.itemGranter && "itemId" === e.option && e.value.toLocaleLowerCase().includes("snowball_launcher")
            }, {
                text: "Fantastic! Now this Item Granter will give the player a Snowball Launcher! ",
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Close out of the editing screen by clicking the ", (0, i.jsx)(m, {
                        children: "X"
                    }), " on the top right!"]
                }),
                cb: e => e.event === o.TutorialEventName.CLOSE_DEVICE_OPTIONS
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["The Item Granter is setup, but now we need to connect it to Questioner in some way. ", (0, i.jsx)(x, {}), "We want to give the player a Snowball Launcher when they answer a question correctly.", (0, i.jsx)(x, {}), "How can we do that?"]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["That is where the final piece of Gimkit Creative comes into play:", " ", (0, i.jsx)(m, {
                        children: "wires!"
                    })]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        children: "Wires connect devices together"
                    }), " — it’s the way different devices can communicate with one another."]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Open the ", (0, i.jsx)(m, {
                        children: "Add Menu"
                    }), " and then select ", (0, i.jsx)(m, {
                        children: "Wires"
                    }), "."]
                }),
                cb: e => e.event === o.TutorialEventName.START_ADDING_WIRE
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        children: "Now select where the wire will come from."
                    }), " Since we’re waiting on a player to answer a question, we want the wire to come from the Questioner device. ", (0, i.jsx)(x, {}), " ", (0, i.jsx)(x, {}), "Click the Questioner device to begin the wire!"]
                }),
                cb: e => e.event === o.TutorialEventName.START_WIRE_FROM_DEVICE && e.device.deviceOption.id === r.default.gimkitLiveQuestion
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        children: "Now select where the wire will end."
                    }), (0, i.jsx)(x, {}), "We want the player to get the Snowball Launcher, and the Item Granter is responsible for doing that! So,", " ", (0, i.jsx)(m, {
                        children: "select the Item Granter"
                    }), " for the end of the wire."]
                }),
                cb: e => e.event === o.TutorialEventName.END_WIRE_TO_DEVICE && e.device.deviceOption.id === r.default.itemGranter
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Nice work! ", (0, i.jsx)(x, {}), "You connected the two devices together, but now you need to", " ", (0, i.jsx)(m, {
                        children: "tell it exactly what to do."
                    })]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["We want to grant the Snowball Launcher when a player answers a question correctly. ", (0, i.jsx)(x, {}), "On the left side, select ", (0, i.jsx)(m, {
                        children: "Question answered correctly"
                    }), ". On the right side, select ", (0, i.jsx)(m, {
                        children: "Grant item"
                    }), "."]
                }),
                cb: e => e.event === o.TutorialEventName.CONFIGURE_WIRE && "questionCorrect" === e.wire.startConnection && "grant" === e.wire.endConnection
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Perfection! Just like that,", " ", (0, i.jsx)(m, {
                        children: "you’ve connected these two devices together."
                    }), (0, i.jsx)(x, {}), "Let’s make sure everything works! Close out of this screen by clicking the ", (0, i.jsx)(m, {
                        children: "X"
                    }), " on the top right. Then, start the game by clicking", " ", (0, i.jsx)("div", {
                        style: {
                            display: "inline-block",
                            margin: 10
                        },
                        children: (0, i.jsx)(s.default, {
                            tooltip: "",
                            onClick: () => !1,
                            children: (0, i.jsx)(l.default, {
                                name: "fas fa-play"
                            })
                        })
                    }), " ", "on the bottom right."]
                }),
                cb: e => e.event === o.TutorialEventName.START_THE_GAME
            }, {
                text: (0, i.jsx)(i.Fragment, {
                    children: "Go answer a question correctly, and let’s see if you get a Snowball Launcher!"
                }),
                cb: e => e.event === o.TutorialEventName.GRANT_ITEM && e.itemId.toLocaleLowerCase().includes("snowball_launcher")
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        children: "You got the Snowball Launcher, woohoo!"
                    }), " ", (0, i.jsx)(x, {}), " ", (0, i.jsx)(x, {}), " In Gimkit Creative, this is exactly how you’ll create your own game mechanics.", " ", (0, i.jsx)(m, {
                        children: "You’ll place different devices together and connect them via wires!"
                    })]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["And just like that, you now know the four fundamentals of Gimkit Creative: ", (0, i.jsx)(m, {
                        children: "terrain, props, devices, and wires!"
                    })]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["End the game and then click ", (0, i.jsx)(m, {
                        children: "Restore Map"
                    }), " to go back into Editing Mode."]
                }),
                cb: e => e.event === o.TutorialEventName.RESTORE_THE_MAP
            }, {
                text: (0, i.jsx)(i.Fragment, {
                    children: "Let‘s finish your game by adding an enemy. You’ll have to defeat this enemy to win the game!"
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Open the ", (0, i.jsx)(m, {
                        children: "Add Menu"
                    }), " and select ", (0, i.jsx)(m, {
                        children: "Devices"
                    }), "."]
                }),
                cb: e => e.event === o.TutorialEventName.OPEN_ADD_SUBMENU && "devices" === e.menu
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Let’s add a ", (0, i.jsx)(m, {
                        children: "Sentry Device"
                    }), ". ", (0, i.jsx)(x, {}), " The Sentry Device spawns an enemy that will fire at you in-game.", " ", (0, i.jsx)(m, {
                        children: "Select the Sentry Device."
                    })]
                }),
                cb: e => e.event === o.TutorialEventName.SELECT_DEVICE_TO_ADD && e.deviceTypeId === r.default.sentry
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Now place the Sentry on the map! ", (0, i.jsx)(x, {}), "Make sure to place it in an open area so that you’re able to fire at it!"]
                }),
                cb: e => e.event === o.TutorialEventName.PLACE_DEVICE_DOWN && e.device.deviceOption.id === r.default.sentry
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["When you knockout the Sentry, we want the game to end. To end the game, we can use the ", (0, i.jsx)(m, {
                        children: "End Game Device!"
                    }), " ", (0, i.jsx)(x, {}), " Open the", " ", (0, i.jsx)(m, {
                        children: "Add Menu"
                    }), ", select ", (0, i.jsx)(m, {
                        children: "Devices"
                    }), ", and then select the ", (0, i.jsx)(m, {
                        children: "End Game Device"
                    }), "."]
                }),
                cb: e => e.event === o.TutorialEventName.SELECT_DEVICE_TO_ADD && e.deviceTypeId === r.default.endGame
            }, {
                text: "Place the End Game device just a little bit to the right of the Sentry!",
                cb: e => e.event === o.TutorialEventName.PLACE_DEVICE_DOWN && e.device.deviceOption.id === r.default.endGame
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Now…we want to connect these two devices together. And you know how we can do that: ", (0, i.jsx)(m, {
                        children: "wires!"
                    })]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Open the ", (0, i.jsx)(m, {
                        children: "Add Menu"
                    }), ", select ", (0, i.jsx)(m, {
                        children: "Wires"
                    }), ", and then place a wire starting from the ", (0, i.jsx)(m, {
                        children: "Sentry Device"
                    }), " and ending at the ", (0, i.jsx)(m, {
                        children: "End Game Device"
                    }), "."]
                }),
                cb: e => e.event === o.TutorialEventName.END_WIRE_TO_DEVICE && e.device.deviceOption.id === r.default.endGame
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Perfect. Now, let’s configure the wire.", (0, i.jsx)(x, {}), "Make it so once the Sentry gets knocked out, the game ends!"]
                }),
                cb: e => e.event === o.TutorialEventName.CONFIGURE_WIRE && "knockedOut" === e.wire.startConnection && "endGame" === e.wire.endConnection
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Way to go! With that, I think your game is ready! ", (0, i.jsx)(x, {}), (0, i.jsx)(m, {
                        children: "Start the game"
                    }), " and let’s try it for real!"]
                }),
                cb: e => e.event === o.TutorialEventName.START_THE_GAME
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        children: "The game has started!"
                    }), (0, i.jsx)(x, {}), "Go answer a question correctly, gain the snowball launcher, and knockout that enemy!"]
                }),
                cb: e => e.event === o.TutorialEventName.END_THE_GAME_BY_DEVICE
            }, {
                text: (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "animated tada",
                        children: "Woohoo! It worked!"
                    })
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(m, {
                        children: ["Great work today, ", (0, h.getUser)().firstName, "!"]
                    }), " You've already built your very own mini-game!"]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Keep exploring Gimkit Creative!", (0, i.jsx)(x, {}), "As you explore and learn, you'll be able to build more & more types of maps & games! ", (0, i.jsx)(m, {
                        children: "The possibilities are endless!"
                    })]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["Also, don’t worry if you’re not understanding something! Gimkit Creative is open for you to just experiment, and play around!", " ", (0, i.jsx)(x, {}), " ", (0, i.jsx)(x, {}), " Just like any other skill, you may not get it right away. But", " ", (0, i.jsx)(m, {
                        children: "the more you practice, the better you’ll get."
                    }), " You can do this!"]
                }),
                cb: u
            }, {
                text: (0, i.jsxs)(i.Fragment, {
                    children: ["And...that's the end of the tutorial.", " ", (0, i.jsx)(m, {
                        children: "Click the button to the right to claim your reward!"
                    })]
                }),
                cb: () => !1
            }]
        }
})), t.register("dSH74", (function(n, a) {
    e(n.exports, "default", (function() {
        return c
    }));
    var i = t("hxEiv"),
        r = t("fywoC"),
        o = t("iMOcM"),
        s = t("e4KJZ"),
        l = t("aQuqp");
    var c = e => {
        const [t, n, a] = (0, o.useBoolean)(!1), c = r.useRef(null);
        return (0, i.jsx)("div", {
            ref: c,
            children: (0, i.jsx)(s.default, {
                title: e.tooltip,
                placement: "bottom",
                open: t,
                getPopupContainer: () => c.current,
                children: (0, i.jsx)("div", {
                    onMouseEnter: n,
                    onMouseLeave: a,
                    children: (0, i.jsx)(l.default, {
                        type: "default",
                        onClick: e.onClick,
                        customHorizontalPadding: 18,
                        customColor: "#4A2C83",
                        ariaLabel: e.tooltip,
                        children: e.children
                    })
                })
            })
        })
    }
})), t.register("aQuqp", (function(n, a) {
    e(n.exports, "default", (function() {
        return h
    }));
    var i = t("hxEiv"),
        r = t("6edaj"),
        o = t("fywoC"),
        s = t("2FDaO"),
        l = t("69SUA"),
        c = t("8UJqa");
    let d;
    var h = e => {
        const t = e.size || "default",
            n = o.useMemo((() => e.customColor ? e.customColor : e.disabled ? "#546e7a" : "success" === e.type ? "#2e7d32" : "danger" === e.type ? "#c62828" : "#3f51b5"), [e.disabled, e.type, e.customColor]),
            a = o.useMemo((() => (0, r.darken)(.1, n)), [n]),
            s = o.useMemo((() => "small" === t || "default" === t ? 14 : 20), [t]),
            c = o.useMemo((() => "small" === t ? 6 : "default" === t ? 8 : 12), [t]),
            d = o.useMemo((() => {
                const n = "small" === t ? "8px" : "12px";
                return e.customHorizontalPadding ? `${n} ${e.customHorizontalPadding}px` : "small" === t ? `${n} 24px` : "default" === t ? `${n} 28px` : `${n} 42px`
            }), [t, e.customHorizontalPadding]),
            h = o.useMemo((() => "small" === t ? 41 : 49), [t]),
            m = o.useMemo((() => e.customFontWeight ? e.customFontWeight : "large" === t ? l.FontWeights.Bold : l.FontWeights.Normal), [e.customFontWeight, t]),
            x = () => {
                e.disabled || e.onClick && e.onClick()
            };
        return (0, i.jsx)(u, {
            style: Object.assign({
                pointerEvents: "all",
                WebkitFlexShrink: 0,
                flexShrink: 0,
                height: h
            }, e.style || {}),
            children: (0, i.jsxs)("button", {
                className: "btn-pushable",
                "aria-label": e.ariaLabel,
                onClick: e.usePointerDownEvent ? void 0 : x,
                onPointerDown: e.usePointerDownEvent ? x : void 0,
                style: {
                    cursor: e.disabled ? "not-allowed" : "pointer",
                    width: e.block ? "100%" : "auto"
                },
                children: [(0, i.jsx)("span", {
                    className: "btn-shadow",
                    style: {
                        borderRadius: c
                    }
                }), (0, i.jsx)("span", {
                    className: "btn-edge",
                    style: {
                        background: a,
                        borderRadius: c
                    }
                }), (0, i.jsx)("span", {
                    className: "btn-front",
                    style: {
                        background: n,
                        fontSize: s,
                        borderRadius: c,
                        padding: d,
                        fontWeight: m
                    },
                    children: e.children
                })]
            })
        })
    };
    const u = s.default.div.attrs({
        className: "flex"
    })(d || (d = (e => e)`
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
    color: ${0};
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
`), c.default.White)
})), t.register("8UJqa", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        White: "#FFFFFF",
        Black: "#000000",
        Yellow: "#FFFF00",
        Purple: "#673ab7"
    }
})), t.register("py2Xr", (function(n, a) {
    e(n.exports, "default", (function() {
        return r
    }));
    var i = t("hxEiv");
    t("fywoC");
    var r = e => (0, i.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), t.register("5JnD6", (function(n, a) {
    e(n.exports, "default", (function() {
        return c
    }));
    var i = t("hxEiv");
    t("fywoC");
    var r = t("2FDaO");
    let o, s, l = e => e;
    var c = e => (0, i.jsxs)(d, {
        children: [(0, i.jsx)(h, {
            children: e.children
        }), (0, i.jsx)("div", {
            className: "area",
            children: (0, i.jsxs)("ul", {
                className: "circles",
                children: [(0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {}), (0, i.jsx)("li", {})]
            })
        })]
    });
    const d = r.default.div(o || (o = l`
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
        h = r.default.div(s || (s = l`
  z-index: 1;
  /* background: rgba(0, 0, 0, 0.4); */
  flex: 1;
`))
})), t.register("hHrJI", (function(n, a) {
    e(n.exports, "default", (function() {
        return w
    }));
    var i = t("hxEiv"),
        r = t("fywoC"),
        o = t("2FDaO"),
        s = t("4ifJF"),
        l = t("lKmIF"),
        c = t("69SUA"),
        d = t("iMOcM"),
        h = t("aQuqp"),
        u = t("93yIm"),
        m = t("gHmyG"),
        x = t("alREA");
    let p, g, f, v, y, b = e => e;
    var w = () => {
        const [e, t] = r.useState(!0), [n, a] = r.useState(!1), o = () => {
            t(!0), (0, d.request)({
                url: "/api/created-map/tutorial-reward",
                method: "POST",
                success: () => {
                    a(!1)
                },
                error: () => {
                    a(!0)
                },
                both: () => {
                    t(!1)
                }
            })
        };
        return r.useEffect((() => {
            (0, d.loadFont)("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"), o()
        }), []), e ? (0, i.jsx)(j, {
            children: (0, i.jsx)(m.default, {
                size: "large"
            })
        }) : n ? (0, i.jsxs)(j, {
            children: [(0, i.jsx)("div", {
                style: {
                    fontFamily: c.Fonts.SFPro,
                    fontSize: 18,
                    textTransform: "none",
                    marginBottom: 10
                },
                children: "An error occurred redeeming your reward. Click the button to try again."
            }), (0, i.jsx)(u.default, {
                onClick: o,
                children: "Try Again"
            })]
        }) : (0, i.jsx)(j, {
            children: (0, i.jsxs)(j, {
                className: "animated fadeIn",
                children: [(0, i.jsx)(E, {
                    children: "Gimkit Creative"
                }), (0, i.jsx)(T, {
                    children: "Tutorial Complete!"
                }), (0, i.jsx)("div", {
                    className: "animated pulse infinite",
                    style: {
                        animationDuration: "3s"
                    },
                    children: (0, i.jsx)(k, {})
                }), (0, i.jsxs)(_, {
                    children: ["You unlocked the", " ", (0, i.jsx)("span", {
                        style: {
                            color: "#ffff94"
                        },
                        children: "Blueprint Gim!"
                    }), " You can find it in your Locker!"]
                }), (0, i.jsx)("div", {
                    style: {
                        marginTop: 30
                    },
                    children: (0, i.jsx)(h.default, {
                        type: "success",
                        customFontWeight: c.FontWeights.Bold,
                        style: {
                            fontFamily: c.Fonts.SFPro
                        },
                        size: "large",
                        onClick: () => window.location.href = "/",
                        ariaLabel: "Back To Dashboard",
                        children: "Back To Dashboard"
                    })
                })]
            })
        })
    };
    const j = (0, o.default)(s.CenteredColumn)(p || (p = b`
  flex: 1;
  background: #25397d;
  color: ${0};
  font-family: ${0};
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
`), l.default.White, c.Fonts.FugazOne),
        E = o.default.div(g || (g = b`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 26px;
  opacity: 0.85;
`)),
        T = o.default.div(f || (f = b`
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.75);
  font-size: 48px;
  margin-top: -9px;
`)),
        k = o.default.img.attrs({
            src: (0, x.default)("characters/spine/preview/construction.png")
        })(v || (v = b`
  height: 279px;
  transform: rotate(355deg);
  filter: drop-shadow(0px 0px 9px rgba(255, 255, 255, 0.9));
`)),
        _ = o.default.div(y || (y = b`
  font-family: ${0};
  text-transform: none;
  font-weight: ${0};
  font-size: 21px;
  margin-top: 10px;
`), c.Fonts.SFPro, c.FontWeights.Bold)
})), t.register("kLpOI", (function(n, a) {
    e(n.exports, "default", (function() {
        return c
    }));
    var i = t("dnh3u"),
        r = t("fywoC"),
        o = t("ayjhg"),
        s = t("dwKuN"),
        l = function(e, t) {
            return r.createElement(s.default, (0, i.default)((0, i.default)({}, e), {}, {
                ref: t,
                icon: o.default
            }))
        };
    l.displayName = "CheckOutlined";
    var c = r.forwardRef(l)
})), t.register("ayjhg", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var a = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }]
        },
        name: "check",
        theme: "outlined"
    }
}));