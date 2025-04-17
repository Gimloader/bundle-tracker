function e(e, t, r, o) {
    Object.defineProperty(e, t, {
        get: r,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("8FbPu", (function(r, o) {
    var i;
    i = r.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
    }), e(r.exports, "default", (function() {
        return h
    }));
    var n = t("hxEiv"),
        a = t("fywoC"),
        c = t("2FDaO"),
        s = t("j2XHK"),
        l = t("b1oE9"),
        u = t("iMOcM"),
        p = t("80uFV"),
        d = t("fWVTg");
    let m;
    const g = a.lazy((() => t("lvqmB"))),
        b = a.lazy((() => t("fGUzt")));
    var h = () => {
        const [e, t] = a.useState(!0), [r, o] = a.useState(), i = (0, u.getUrlVariable)("id");
        if (a.useEffect((() => {
                if (i) return i === p.TutorialConsts.mapId ? (o(s.ExperienceSource.map), void t(!1)) : void(0, u.request)({
                    url: `/api/matchmaker/intent/fetch-source/${i}`,
                    success: e => {
                        o(e), t(!1)
                    },
                    error: () => {
                        o(s.ExperienceSource.original), t(!1)
                    }
                });
                window.location.href = l.DASHBOARD
            }), []), !e && r) {
            if (r === s.ExperienceSource.original) return (0, n.jsx)(a.Suspense, {
                fallback: (0, n.jsx)(v, {}),
                children: (0, n.jsx)(g, {})
            });
            if (r === s.ExperienceSource.map) return (0, n.jsx)(a.Suspense, {
                fallback: (0, n.jsx)(v, {}),
                children: (0, n.jsx)(b, {
                    createDetails: {
                        intentId: i
                    }
                })
            })
        }
        return (0, n.jsx)(v, {
            children: (0, n.jsx)(u.Title, {
                title: "Host"
            })
        })
    };
    const v = c.default.div(m || (m = (e => e)`
  flex: 1;
  background: ${0};
`), d.default.background)
})), t.register("j2XHK", (function(t, r) {
    let o;
    var i;
    let n;
    var a;
    let c;
    var s;
    let l;
    let u;
    var p;
    e(t.exports, "QuestionType", (function() {
        return o
    })), e(t.exports, "Privacy", (function() {
        return n
    })), e(t.exports, "GameStatus", (function() {
        return c
    })), e(t.exports, "GameType", (function() {
        return l
    })), e(t.exports, "GameGoal", (function() {
        return u
    })), e(t.exports, "themes", (function() {
        return h
    })), e(t.exports, "ExperienceSource", (function() {
        return v
    })), (i = o || (o = {})).multipleChoice = "mc", i.textInput = "text", (a = n || (n = {})).public = "public", a.private = "private", (s = c || (c = {})).setup = "setup", s.join = "join", s.teams = "teams", s.gameplay = "gameplay", s.results = "results", (l || (l = {})).live = "live", (p = u || (u = {})).time = "time", p.race = "race", p.allIn = "allIn";
    const d = "#ffffff",
        m = "#000000";
    let g;
    var b;
    (b = g || (g = {})).easy = "easy", b.medium = "medium", b.hard = "hard", b.veryHard = "veryHard", b.veryVeryHard = "veryVeryHard";
    const h = [{
        cost: 0,
        name: "Default",
        description: "Works fine, that's all",
        question: {
            background: "#303f9f",
            text: d
        },
        palette: [{
            background: "#771322",
            text: d
        }, {
            background: "#A85C15",
            text: d
        }, {
            background: "#0D6B33",
            text: d
        }, {
            background: "#076296",
            text: d
        }],
        owned: !0,
        isActive: !0
    }, {
        cost: 5,
        name: "Thanksgiving",
        description: "The perfect theme to show your thanks",
        question: {
            background: "#6C2F00",
            text: d
        },
        palette: [{
            background: "#9E682A",
            text: d
        }, {
            background: "#B54730",
            text: d
        }, {
            background: "#8A9748",
            text: d
        }, {
            background: "#F1B930",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 10,
        name: "Night",
        description: "A little easier on the eyes",
        question: {
            background: "#000a12",
            text: d
        },
        palette: [{
            background: "#263238",
            text: d
        }, {
            background: "#37474f",
            text: d
        }, {
            background: "#455a64",
            text: d
        }, {
            background: "#546e7a",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 5e5,
        name: "Thanos",
        description: "Perfectly balanced, as all things should be",
        question: {
            background: "#0D0019",
            text: d
        },
        palette: [{
            background: "#220044",
            text: d
        }, {
            background: "#330066",
            text: d
        }, {
            background: "#3E007C",
            text: d
        }, {
            background: "#4F1787",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 2e3,
        name: "Ocean",
        description: "Under the sea...",
        question: {
            background: "#000063",
            text: d
        },
        palette: [{
            background: "#283593",
            text: d
        }, {
            background: "#076296",
            text: d
        }, {
            background: "#0277bd",
            text: d
        }, {
            background: "#1565c0",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e5,
        name: "Forest",
        description: "A walk through the woods",
        question: {
            background: "#4c3d33",
            text: d
        },
        palette: [{
            background: "#385645",
            text: d
        }, {
            background: "#425C49",
            text: d
        }, {
            background: "#415641",
            text: d
        }, {
            background: "#4C6349",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1250,
        name: "Sunset",
        description: "Take a breather",
        question: {
            background: "#7F7496",
            text: d
        },
        palette: [{
            background: "#F46F5A",
            text: d
        }, {
            background: "#ED712D",
            text: d
        }, {
            background: "#7A596A",
            text: d
        }, {
            background: "#E8AB3C",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 750,
        name: "Pastel",
        description: "Lighten the mood",
        question: {
            background: "#FFbfd1",
            text: "#434343"
        },
        palette: [{
            background: "#FFA69E",
            text: "#5b5b5b"
        }, {
            background: "#FCF6BF",
            text: "#5b5b5b"
        }, {
            background: "#D0F4DE",
            text: "#5b5b5b"
        }, {
            background: "#93E1D8",
            text: "#5b5b5b"
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 500,
        name: "Retro",
        description: "Old school...",
        question: {
            background: "#9C0022",
            text: d
        },
        palette: [{
            background: "#001D3B",
            text: d
        }, {
            background: "#FFAE52",
            text: d
        }, {
            background: "#FE5963",
            text: d
        }, {
            background: "#A71C94",
            text: d
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e8,
        name: "Pure Gold",
        description: "Now you're just showing off",
        question: {
            background: m,
            text: "#FFCD2B"
        },
        palette: [{
            background: "#FFCD2B",
            text: m
        }, {
            background: "#FFC721",
            text: m
        }, {
            background: "#FFD147",
            text: m
        }, {
            background: "#FFCD38",
            text: m
        }],
        owned: !1,
        isActive: !1
    }];
    let v;
    var f;
    (f = v || (v = {})).original = "original", f.map = "map"
})), t.register("80uFV", (function(r, o) {
    e(r.exports, "TutorialConsts", (function() {
        return n
    }));
    var i = t("z5iun");
    const n = {
        mapId: "tutorial0001",
        topDevices: [i.default.characterSpawnPad, i.default.gimkitLiveQuestion, i.default.itemGranter, i.default.sentry, i.default.endGame],
        topProps: ["bare-tree-1", "bare-tree-2", "bare-tree-3", "snow-tree-1", "snow-tree-1-dark", "snow-tree-2", "snow-tree-2-dark", "snow-tree-3", "snow-tree-3-dark"],
        topTerrain: ["Snow", "Snowy Grass"]
    }
})), t.register("z5iun", (function(t, r) {
    let o;
    var i;
    e(t.exports, "default", (function() {
        return n
    })), (i = o || (o = {})).luckyBlock = "luckyBlock", i.chest = "chest", i.jumpGranter = "jumpGranter", i.teamColorTilesManager = "teamColorTilesManager", i.changingBooth = "changingBooth", i.popupListItem = "popupListItem", i.gadgetModifier = "gadgetModifier", i.zombieSpawnZone = "zombieSpawnZone", i.zombieWaveDesigner = "zombieWaveDesigner", i.zombieDesigner = "zombieDesigner", i.zombieInvasion = "zombieInvasion", i.codeUI = "codeUI", i.damager = "damager", i.cameraPoint = "cameraPoint", i.blockingZone = "blockingZone", i.character = "character", i.classDesigner = "classDesigner", i.backgroundTilesZone = "backgroundTilesZone", i.proceduralTerrainZoneZoneInstruction = "proceduralTerrainZoneZoneInstruction", i.proceduralTerrainZone = "proceduralTerrainZone", i.dialogueAction = "dialogueAction", i.dialogue = "dialogue", i.voiceLine = "voiceLine", i.scorebar = "scorebar", i.outline = "outline", i.ball = "ball", i.damageBoost = "damageBoost", i.checkpoint = "checkpoint", i.playerPositionDetector = "playerPositionDetector", i.itemImage = "itemImage", i.mood = "mood", i.playerAppearanceModifier = "playerAppearanceModifier", i.waypoint = "waypoint", i.flag = "flag", i.checker = "checker", i.trigger = "trigger", i.counter = "counter", i.teleporter = "teleporter", i.itemGranter = "itemGranter", i.characterSpawnPad = "characterSpawnPad", i.textBillboard = "textBillboard", i.prop = "prop", i.barrier = "barrier", i.button = "button", i.droppedItem = "droppedItem", i.property = "property", i.mapOptions = "mapOptions", i.teamSettings = "teamSettings", i.imageBillboard = "imageBillboard", i.gimkitLiveQuestion = "gimkitLiveQuestion", i.ballZone = "ballZone", i.zone = "zone", i.captureFlagZone = "captureFlagZone", i.textExplainer = "textExplainer", i.relay = "relay", i.cameraSize = "cameraSize", i.music = "music", i.speed = "speed", i.soundEffect = "soundEffect", i.inventoryItemManager = "inventoryItemManager", i.guiDevice = "guiDevice", i.lifecycle = "lifecycle", i.endGame = "endGame", i.countdown = "countdown", i.shadow = "shadow", i.characterProximity = "characterProximity", i.repeater = "repeater", i.vendingMachine = "vendingMachine", i.teamSwitcher = "teamSwitcher", i.notification = "notification", i.endOfGameWidget = "endOfGameWidget", i.respawn = "respawn", i.xp = "xp", i.assignmentCheckpoint = "assignmentCheckpoint", i.assignmentContext = "assignmentContext", i.placedSticker = "placedSticker", i.wireRepeater = "wireRepeater", i.movementMeter = "movementMeter", i.craftingTable = "craftingTable", i.craftingRecipe = "craftingRecipe", i.startingInventory = "startingInventory", i.healthGranter = "healthGranter", i.sentry = "sentry", i.knockoutManager = "knockoutManager", i.laserBeam = "laserBeam", i.laserBeamManager = "laserBeamManager", i.cosmosModifier = "cosmosModifier", i.passwordLock = "passwordLock", i.itemSpawner = "itemSpawner", i.tagZone = "tagZone";
    var n = o
})), t.register("fWVTg", (function(t, r) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
        background: "#673ab7"
    }
})), t.register("lvqmB", (function(e, r) {
    e.exports = Promise.all([import("./" + t("ihc6Q").resolve("7pIGN")), import("./" + t("ihc6Q").resolve("bmWmo")), import("./" + t("ihc6Q").resolve("cbvsE")), import("./" + t("ihc6Q").resolve("bRZSS")), import("./" + t("ihc6Q").resolve("9pAEb")), import("./" + t("ihc6Q").resolve("eIECe")), import("./" + t("ihc6Q").resolve("3J6Of")), import("./" + t("ihc6Q").resolve("kKpXS")), import("./" + t("ihc6Q").resolve("6o2QI")), import("./" + t("ihc6Q").resolve("3R3up")), import("./" + t("ihc6Q").resolve("lFChG")), import("./" + t("ihc6Q").resolve("jnRhB")), import("./" + t("ihc6Q").resolve("935wq")), import("./" + t("ihc6Q").resolve("cBIIp")), import("./" + t("ihc6Q").resolve("6T3MR")), import("./" + t("ihc6Q").resolve("jM8u1")), import("./" + t("ihc6Q").resolve("99xGA")), import("./" + t("ihc6Q").resolve("6AbL8"))]).then((() => t("d7rWR")))
})), t.register("fGUzt", (function(e, r) {
    e.exports = Promise.all([import("./" + t("ihc6Q").resolve("7pIGN")), import("./" + t("ihc6Q").resolve("fFyZG")), import("./" + t("ihc6Q").resolve("kwPwx")), import("./" + t("ihc6Q").resolve("cbvsE")), import("./" + t("ihc6Q").resolve("bRZSS")), import("./" + t("ihc6Q").resolve("9pAEb")), import("./" + t("ihc6Q").resolve("eIECe")), import("./" + t("ihc6Q").resolve("gXDTI")), import("./" + t("ihc6Q").resolve("3J6Of")), import("./" + t("ihc6Q").resolve("kKpXS")), import("./" + t("ihc6Q").resolve("11biZ")), import("./" + t("ihc6Q").resolve("6o2QI")), import("./" + t("ihc6Q").resolve("3R3up")), import("./" + t("ihc6Q").resolve("5xMxo")), import("./" + t("ihc6Q").resolve("lFChG")), import("./" + t("ihc6Q").resolve("jnRhB")), import("./" + t("ihc6Q").resolve("8SWDc")), import("./" + t("ihc6Q").resolve("8Pt2G")), import("./" + t("ihc6Q").resolve("935wq")), import("./" + t("ihc6Q").resolve("cBIIp")), import("./" + t("ihc6Q").resolve("6T3MR")), import("./" + t("ihc6Q").resolve("jM8u1")), import("./" + t("ihc6Q").resolve("99xGA")), import("./" + t("ihc6Q").resolve("8PKLa"))]).then((() => t("3EK5n")))
}));