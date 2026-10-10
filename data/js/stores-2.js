import {
    c as e,
    f as t,
    i as n,
    l as ee,
    p as r,
    t as i
} from "./decorate.js";
import {
    t as te
} from "./MapModeType.js";
import {
    t as ne
} from "./MapStyle.js";
var a = function(e) {
        return e.preload = `preload`, e.game = `game`, e
    }(a || {}),
    o = class {
        constructor() {
            this.currentScene = a.preload, this.isCursorOverCanvas = !1, this.gpuTier = 0, t(this)
        }
    };
i([r], o.prototype, `currentScene`, void 0), i([r], o.prototype, `isCursorOverCanvas`, void 0);
var s = class {
    constructor() {
        this.client = null, this.clientConnectionString = ``, this.authId = ``, this.findingServerForGame = !1, this.errorFindingServerForGame = !1, this.attemptingToConnect = !0, this.attemptingToReconnect = !1, this.failedToReconnect = !1, this.hasJoinedRoom = !1, this.joinedRoom = !1, this.errorJoiningRoom = !1, this.error = null, this.isOffline = !1, this.isUpToDateWithPingPong = !0, this.syncingAfterReconnection = !1, this.phaseBeforeReconnect = null, this.roomIntentErrorMessage = ``, this.ping = 0, t(this)
    }
};
i([r], s.prototype, `authId`, void 0), i([r], s.prototype, `findingServerForGame`, void 0), i([r], s.prototype, `errorFindingServerForGame`, void 0), i([r], s.prototype, `attemptingToConnect`, void 0), i([r], s.prototype, `attemptingToReconnect`, void 0), i([r], s.prototype, `failedToReconnect`, void 0), i([r], s.prototype, `hasJoinedRoom`, void 0), i([r], s.prototype, `joinedRoom`, void 0), i([r], s.prototype, `errorJoiningRoom`, void 0), i([r], s.prototype, `error`, void 0), i([r], s.prototype, `isOffline`, void 0), i([r], s.prototype, `isUpToDateWithPingPong`, void 0), i([r], s.prototype, `syncingAfterReconnection`, void 0), i([r], s.prototype, `phaseBeforeReconnect`, void 0), i([r], s.prototype, `roomIntentErrorMessage`, void 0), i([r], s.prototype, `ping`, void 0);
var c = class {
    constructor() {
        this.percentageAssetsLoaded = 0, this.completedInitialLoad = !1, this.loadedInitialTerrain = !1, this.loadedInitialDevices = !1, t(this)
    }
};
i([r], c.prototype, `percentageAssetsLoaded`, void 0), i([r], c.prototype, `completedInitialLoad`, void 0), i([r], c.prototype, `loadedInitialTerrain`, void 0), i([r], c.prototype, `loadedInitialDevices`, void 0);
var re = class {
        constructor() {
            this.mainCharacterTeleported = !1
        }
    },
    l = function(e) {
        return e.none = `none`, e.adding = `adding`, e.removing = `removing`, e.editingDevice = `editingDevice`, e.editingWire = `editingWire`, e.hooks = `hooks`, e.deviceUI = `deviceUI`, e
    }(l || {}),
    ie = function(e) {
        return e.cut = `cut`, e.copy = `copy`, e
    }({}),
    u = class {
        constructor() {
            this.selectedDeviceType = ``, this.existingDevice = {
                use: !1,
                id: ``,
                action: `copy`,
                shiftX: 0,
                shiftY: 0
            }, this.currentlySelectedProp = ``, t(this)
        }
    };
i([r], u.prototype, `selectedDeviceType`, void 0), i([r], u.prototype, `existingDevice`, void 0), i([r], u.prototype, `currentlySelectedProp`, void 0);
var d = {
        minDepth: 1,
        maxDepth: 5,
        playerBuiltTerrain: 6,
        previewDepth: 999
    },
    f = class {
        constructor() {
            this.currentlySelectedTerrain = ``, this.currentlySelectedTerrainDepth = Math.floor((d.maxDepth + d.minDepth) / 2), this.buildTerrainAsWall = !1, this.brushSize = 1, t(this)
        }
    };
i([r], f.prototype, `currentlySelectedTerrain`, void 0), i([r], f.prototype, `currentlySelectedTerrainDepth`, void 0), i([r], f.prototype, `buildTerrainAsWall`, void 0), i([r], f.prototype, `brushSize`, void 0);
var p = class {
    constructor() {
        this.startDeviceSelected = !1, this.hoveringOverSupportedDevice = !1, this.pointUnderMouseDeviceId = void 0, t(this)
    }
};
i([r], p.prototype, `startDeviceSelected`, void 0), i([r], p.prototype, `hoveringOverSupportedDevice`, void 0), i([r], p.prototype, `pointUnderMouseDeviceId`, void 0);
var ae = function(e) {
        return e.none = `none`, e.device = `device`, e.terrain = `terrain`, e.wire = `wire`, e
    }({}),
    oe = class {
        constructor() {
            this.terrain = new f, this.devices = new u, this.wires = new p, this.mode = `none`, t(this)
        }
    };
i([r], oe.prototype, `mode`, void 0);
var m = class {
    constructor() {
        this.__devicesUnderCursor = r.array(), this.__wiresUnderCursor = r.set(), this.cursorIsOverCharacterId = ``, t(this)
    }
    get cursorIsOverDevice() {
        return !!this.__devicesUnderCursor.length
    }
    get cursorIsOverWire() {
        return !!this.__wiresUnderCursor.size
    }
};
i([e], m.prototype, `cursorIsOverDevice`, null), i([e], m.prototype, `cursorIsOverWire`, null), i([r], m.prototype, `cursorIsOverCharacterId`, void 0);
var h = class {
    constructor() {
        this.current = {
            deviceId: ``,
            props: {}
        }, this.desiredOpenDeviceId = ``, this.serverVersionOpenDeviceId = ``, t(this)
    }
};
i([r], h.prototype, `current`, void 0), i([r], h.prototype, `serverVersionOpenDeviceId`, void 0);
var se = function(e) {
        return e.home = `home`, e.grid = `grid`, e
    }({}),
    g = class {
        constructor() {
            this.currentlyEditedDevice = {}, this.visualEditing = {}, this.screen = `home`, this.currentlyEditedGridId = ``, this.sortingState = r.array(), this.currentlySortedDeviceId = ``, this.usingMultiselect = !1, t(this)
        }
    };
i([r], g.prototype, `currentlyEditedDevice`, void 0), i([r], g.prototype, `visualEditing`, void 0), i([r], g.prototype, `screen`, void 0), i([r], g.prototype, `currentlyEditedGridId`, void 0), i([r], g.prototype, `sortingState`, void 0), i([r], g.prototype, `currentlySortedDeviceId`, void 0), i([r], g.prototype, `usingMultiselect`, void 0);
var ce = class {
    constructor() {
        this.currentlyEditedWireId = ``, t(this)
    }
};
i([r], ce.prototype, `currentlyEditedWireId`, void 0);
var _ = class {
    constructor() {
        this.phase = null, this.movementSpeed = null, this.showGrid = null, this.cameraZoom = 1, this.topDownControlsActive = !1, t(this)
    }
};
i([r], _.prototype, `phase`, void 0), i([r], _.prototype, `movementSpeed`, void 0), i([r], _.prototype, `showGrid`, void 0), i([r], _.prototype, `cameraZoom`, void 0), i([r], _.prototype, `topDownControlsActive`, void 0);
var le = class {
        constructor() {
            this.device = new g, this.wire = new ce, this.preferences = new _
        }
    },
    v = class {
        constructor() {
            this.deviceId = ``, this.info = null, t(this)
        }
    };
i([r], v.prototype, `deviceId`, void 0), i([r], v.prototype, `info`, void 0);
var ue = class {
    constructor(e) {
        this.existsBeforeReconnect = !1, this.amount = 0, this.amount = e, t(this)
    }
};
i([r], ue.prototype, `amount`, void 0);
var y = class {
    constructor() {
        this.itemId = ``, this.waiting = !1, this.waitingStartTime = 0, this.waitingEndTime = 0, this.currentClip = 0, this.clipSize = 0, this.durability = -1, this.count = 0, t(this)
    }
};
i([r], y.prototype, `itemId`, void 0), i([r], y.prototype, `waiting`, void 0), i([r], y.prototype, `waitingStartTime`, void 0), i([r], y.prototype, `waitingEndTime`, void 0), i([r], y.prototype, `currentClip`, void 0), i([r], y.prototype, `clipSize`, void 0), i([r], y.prototype, `durability`, void 0), i([r], y.prototype, `count`, void 0);
var b = class {
    constructor() {
        this.slots = r.map(), this.maxSlots = 999, this.alertFeed = void 0, this.alertsFeed = [], this.activeInteractiveSlot = 0, this.interactiveSlots = r.map(), this.interactiveSlotsOrder = r.array([1, 2, 3, 4, 5]), this.interactiveSlotErrorMessages = r.map(), this.infiniteAmmo = !1, this.interactiveSlotErrorMessageTimeouts = new Map, this.isCurrentWaitingSoundForItem = !1, this.currentWaitingEndTime = 0, this.lastShotsTimestamps = new Map, t(this), this.interactiveSlots.set(`1`, new y), this.interactiveSlots.set(`2`, new y), this.interactiveSlots.set(`3`, new y), this.interactiveSlots.set(`4`, new y), this.interactiveSlots.set(`5`, new y)
    }
};
i([r], b.prototype, `slots`, void 0), i([r], b.prototype, `maxSlots`, void 0), i([r], b.prototype, `alertFeed`, void 0), i([r], b.prototype, `alertsFeed`, void 0), i([r], b.prototype, `activeInteractiveSlot`, void 0), i([r], b.prototype, `interactiveSlots`, void 0), i([r], b.prototype, `interactiveSlotsOrder`, void 0), i([r], b.prototype, `interactiveSlotErrorMessages`, void 0), i([r], b.prototype, `infiniteAmmo`, void 0);
var de = function(e) {
        return e.everything = `Everything`, e.propsAndDevices = `Props & Devices`, e.tiles = `Tiles`, e.wires = `Wires`, e
    }({}),
    fe = function(e) {
        return e.allLayers = `All Layers`, e.topLayer = `Top Layer`, e.layer = `Layer`, e
    }({}),
    x = class {
        constructor() {
            this.deviceIdToRemove = null, this.wireIdToRemove = null, this.tilesToRemove = [], this.removingMode = `Everything`, this.removingTilesMode = `Top Layer`, this.removingTilesLayer = 3, this.removingTilesEraserSize = 1, t(this)
        }
    };
i([r], x.prototype, `deviceIdToRemove`, void 0), i([r], x.prototype, `wireIdToRemove`, void 0), i([r], x.prototype, `tilesToRemove`, void 0), i([r], x.prototype, `removingMode`, void 0), i([r], x.prototype, `removingTilesMode`, void 0), i([r], x.prototype, `removingTilesLayer`, void 0), i([r], x.prototype, `removingTilesEraserSize`, void 0);
var S = class {
    constructor() {
        this.title = ``, this.description = ``, t(this)
    }
};
i([r], S.prototype, `title`, void 0), i([r], S.prototype, `description`, void 0);
var C = class {
    constructor() {
        this.id = ``, this.name = ``, this.shuffle = !1, t(this)
    }
};
i([r], C.prototype, `id`, void 0), i([r], C.prototype, `name`, void 0), i([r], C.prototype, `shuffle`, void 0);
var w = class {
    constructor() {
        this.additions = r.array(), this.additionTimeouts = new Map, this.showingLevelUp = !1, t(this)
    }
};
i([r], w.prototype, `additions`, void 0), i([r], w.prototype, `showingLevelUp`, void 0);
var pe = class {
    constructor() {
        this.startGameWithMode = te.liveGame, t(this)
    }
};
i([r], pe.prototype, `startGameWithMode`, void 0);
var T = class {
    constructor() {
        this.enabled = !!localStorage.getItem(`cinematicMode`), this.mainCharacterVisible = !0, this.charactersVisible = !0, this.nameTagsVisible = !0, this.followingMainCharacter = !0, this.hidingGUI = !1, t(this)
    }
};
i([r], T.prototype, `enabled`, void 0), i([r], T.prototype, `mainCharacterVisible`, void 0), i([r], T.prototype, `charactersVisible`, void 0), i([r], T.prototype, `nameTagsVisible`, void 0), i([r], T.prototype, `followingMainCharacter`, void 0), i([r], T.prototype, `hidingGUI`, void 0);
var E = class {
    constructor() {
        this.lives = -1, this.health = 0, this.shield = 0, this.fragility = 0, this.maxHealth = 0, this.maxShield = 0, t(this)
    }
};
i([r], E.prototype, `lives`, void 0), i([r], E.prototype, `health`, void 0), i([r], E.prototype, `shield`, void 0), i([r], E.prototype, `fragility`, void 0), i([r], E.prototype, `maxHealth`, void 0), i([r], E.prototype, `maxShield`, void 0);
var D = class {
    constructor() {
        this.allowWeaponDrop = !0, this.allowItemDrop = !0, this.allowResourceDrop = !0, t(this)
    }
};
i([r], D.prototype, `allowWeaponDrop`, void 0), i([r], D.prototype, `allowItemDrop`, void 0), i([r], D.prototype, `allowResourceDrop`, void 0);
var O = class {
    constructor() {
        this.activeDeviceId = ``, this.vignetteActive = !0, this.vignetteStrength = 0, t(this)
    }
};
i([r], O.prototype, `vignetteActive`, void 0), i([r], O.prototype, `vignetteStrength`, void 0);
var me = {
        normal: 310
    },
    he = class {
        constructor() {
            this.left = !1, this.right = !1, this.up = !1
        }
    },
    ge = class {
        constructor() {
            this.activeClassDeviceId = ``, this.lastActivatedClassDeviceId = ``, this.lastClassDeviceActivationId = -1, t(this)
        }
    };
i([r], ge.prototype, `activeClassDeviceId`, void 0);
var k = class {
    constructor() {
        this.currentId = ``, this.currentOptionId = ``, this.currentIcon = ``, this.currentName = ``, this.currentData = {}, this.pendingDeleteId = null, this.showDeleteConfirm = !1, this.isUIOpen = !1, this.openOptionId = null, t(this)
    }
};
i([r], k.prototype, `currentId`, void 0), i([r], k.prototype, `currentOptionId`, void 0), i([r], k.prototype, `currentIcon`, void 0), i([r], k.prototype, `currentName`, void 0), i([r], k.prototype, `currentData`, void 0), i([r], k.prototype, `pendingDeleteId`, void 0), i([r], k.prototype, `showDeleteConfirm`, void 0), i([r], k.prototype, `isUIOpen`, void 0), i([r], k.prototype, `openOptionId`, void 0);
var A = class {
    constructor() {
        this.currentAction = l.none, this.phase = !1, this.movementSpeed = me.normal, this.roleLevel = 0, this.completedInitialPlacement = !1, this.isRespawning = !1, this.unredeemedXP = 0, this.properties = r.map(), this.myTeam = ``, this.spawnPosition = {
            x: 0,
            y: 0
        }, this.teleportCount = 0, this.classDesigner = new ge, this.adding = new oe, this.removing = new x, this.editing = new le, this.inventory = new b, this.context = new m, this.interactives = new v, this.deviceUI = new h, this.nonDismissMessage = new S, this.spectating = new C, this.xp = new w, this.preferences = new pe, this.cinematicMode = new T, this.health = new E, this.zoneDropOverrides = new D, this.mood = new O, this.mobileControls = new he, this.customAssets = new k, this.gotKicked = !1, t(this)
    }
};
i([r], A.prototype, `currentAction`, void 0), i([r], A.prototype, `phase`, void 0), i([r], A.prototype, `movementSpeed`, void 0), i([r], A.prototype, `completedInitialPlacement`, void 0), i([r], A.prototype, `isRespawning`, void 0), i([r], A.prototype, `unredeemedXP`, void 0), i([r], A.prototype, `properties`, void 0);
var j = {
        width: 1e3,
        height: 1e3
    },
    M = class {
        constructor() {
            this.devices = r.map(), this.codeGrids = r.map(), this.states = new Map, t(this)
        }
    };
i([r], M.prototype, `devices`, void 0), i([r], M.prototype, `codeGrids`, void 0);
var _e = class {
        constructor() {
            this.tiles = new Map, this.modifiedHealth = new Map, this.teamColorTiles = new Map, this.currentTerrainUpdateId = 0, this.queuedTiles = new Map
        }
    },
    ve = class {
        constructor() {
            this.wires = r.map(), t(this)
        }
    };
i([r], ve.prototype, `wires`, void 0);
var N = class {
    constructor() {
        this.customAssets = r.map(), this.updateCounter = 0, this.isUIOpen = !1, t(this)
    }
};
i([r], N.prototype, `customAssets`, void 0), i([r], N.prototype, `updateCounter`, void 0), i([r], N.prototype, `isUIOpen`, void 0);
var P = class {
    constructor() {
        t(this)
    }
};
i([r], P.prototype, `name`, void 0), i([r], P.prototype, `icon`, void 0), i([r], P.prototype, `data`, void 0);
var F = class {
    constructor() {
        this.width = j.width, this.height = j.height, this.terrain = new _e, this.customAssets = new N, this.devices = new M, this.wires = new ve, this.mapOptionsJSON = ``, t(this)
    }
};
i([r], F.prototype, `mapOptionsJSON`, void 0);
var ye = class {
    constructor() {
        this.terrainOptions = [], this.propsOptions = [], this.deviceOptions = [], this.customAssetsOptions = [], this.itemOptions = [], this.skinOptions = [], this.requestedAllProps = !1, this.hasAllProps = !1, t(this)
    }
};
i([r], ye.prototype, `hasAllProps`, void 0);
var be = function(e) {
        return e.home = `home`, e.terrain = `terrain`, e.props = `props`, e.devices = `devices`, e
    }({}),
    xe = class {
        constructor() {
            this.screen = `home`, t(this)
        }
    };
i([r], xe.prototype, `screen`, void 0);
var Se = function(e) {
        return e.home = `home`, e.mapOptions = `mapOptions`, e.editing = `editing`, e.permissions = `permissions`, e.saving = `saving`, e.help = `help`, e.publishing = `publishing`, e
    }({}),
    Ce = class {
        constructor() {
            this.screen = `home`, t(this)
        }
    };
i([r], Ce.prototype, `screen`, void 0);
var we = function(e) {
        return e.home = `home`, e.add = `add`, e.inventory = `inventory`, e.scoreboard = `scoreboard`, e.sorting = `sorting`, e.startScreen = `startScreen`, e.playerManager = `playerManager`, e.soundOptions = `soundOptions`, e.assignmentInfo = `assignmentInfo`, e.options = `options`, e.teamCustomization = `teamCustomization`, e
    }({}),
    I = class {
        constructor() {
            this.screen = `home`, this.duringGameScreenVisible = !1, this.addMenu = new xe, this.optionsMenu = new Ce, t(this)
        }
    };
i([r], I.prototype, `screen`, void 0), i([r], I.prototype, `duringGameScreenVisible`, void 0);
var L = class {
    constructor() {
        this.cosmosModalOpen = !1, this.switchToRegisterScreenWhenCosmosModalOpens = !1, this.closeAllModals = () => {
            this.cosmosModalOpen = !1, this.switchToRegisterScreenWhenCosmosModalOpens = !1
        }, t(this)
    }
};
i([r], L.prototype, `cosmosModalOpen`, void 0), i([r], L.prototype, `switchToRegisterScreenWhenCosmosModalOpens`, void 0), i([n], L.prototype, `closeAllModals`, void 0);
var Te = function(e) {
        return e.brokenShield = `b`, e.shield = `s`, e.health = `h`, e.fragility = `f`, e
    }({}),
    R = class {
        constructor() {
            this.type = Te.shield, this.show = !1, t(this)
        }
    };
i([r], R.prototype, `type`, void 0), i([r], R.prototype, `show`, void 0);
var z = class {
    constructor() {
        this.interactionWantsToBeVisible = !1, this.prioritizeInteraction = !0, t(this)
    }
};
i([r], z.prototype, `interactionWantsToBeVisible`, void 0), i([r], z.prototype, `prioritizeInteraction`, void 0);
var B = class {
    constructor() {
        this.none = new I, this.modals = new L, this.damageIndicator = new R, this.bottomInGamePrimaryContent = new z, this.scale = 1, this.showingGrid = !1, this.guiSlots = r.array(), this.guiSlotsChangeCounter = 0, this.openInputBlockingUI = r.array(), this.knockoutAlerts = r.array(), this.playersManagerUpdateCounter = 0, this.selectedPlayerId = ``, this.scorebar = void 0, this.achievement = new V, t(this)
    }
};
i([r], B.prototype, `scale`, void 0), i([r], B.prototype, `showingGrid`, void 0), i([r], B.prototype, `guiSlots`, void 0), i([r], B.prototype, `guiSlotsChangeCounter`, void 0), i([r], B.prototype, `openInputBlockingUI`, void 0), i([r], B.prototype, `knockoutAlerts`, void 0), i([r], B.prototype, `playersManagerUpdateCounter`, void 0), i([r], B.prototype, `selectedPlayerId`, void 0), i([r], B.prototype, `scorebar`, void 0);
var V = class {
    constructor() {
        this.id = ``, this.key = ``, this.update = (e, t) => {
            this.id = e, this.key = t
        }, this.reset = () => {
            this.id = ``, this.key = ``
        }, t(this)
    }
};
i([r], V.prototype, `id`, void 0), i([r], V.prototype, `key`, void 0), i([n], V.prototype, `update`, void 0), i([n], V.prototype, `reset`, void 0);
var Ee = class {
    constructor() {
        this.feedItems = r.array(), t(this)
    }
};
i([r], Ee.prototype, `feedItems`, void 0);
var H = function(e) {
        return e.saved = `saved`, e.published = `published`, e
    }(H || {}),
    U = function(e) {
        return e.player = `player`, e.spectator = `spectator`, e
    }(U || {}),
    De = function(e) {
        return e.preGame = `preGame`, e.game = `game`, e
    }({}),
    Oe = function(e) {
        return e.countdown = `countdown`, e.game = `game`, e.results = `results`, e
    }({}),
    W = class {
        constructor() {
            this.categories = r.array(), this.items = r.array(), t(this)
        }
    };
i([r], W.prototype, `categories`, void 0), i([r], W.prototype, `items`, void 0);
var ke = class {
    constructor() {
        this.widgets = r.array(), t(this)
    }
};
i([r], ke.prototype, `widgets`, void 0);
var G = class {
    constructor() {
        this.phase = Oe.countdown, this.callToAction = new W, this.widgets = new ke, this.countdownEnd = 0, this.resultsEnd = 0, t(this)
    }
};
i([r], G.prototype, `phase`, void 0), i([r], G.prototype, `countdownEnd`, void 0), i([r], G.prototype, `resultsEnd`, void 0);
var K = class {
    constructor() {
        this.adding = !0, this.removing = !0, this.editing = !0, this.manageCodeGrids = !0, t(this)
    }
};
i([r], K.prototype, `adding`, void 0), i([r], K.prototype, `removing`, void 0), i([r], K.prototype, `editing`, void 0), i([r], K.prototype, `manageCodeGrids`, void 0);
var Ae = class {
    constructor() {
        this.characterToTeamMap = r.map(), t(this)
    }
};
i([r], Ae.prototype, `characterToTeamMap`, void 0);
var q = class {
    constructor() {
        this.amIGameOwner = !1, this.ownerRole = U.player, this.gameOwnerId = ``, this.mapStyle = ne.topDown, this.version = H.published, this.modeType = te.liveGame, this.gameTime = 0, this.phaseChangedAtServerAt = 0, this.gameTimeLastUpdateAt = 0, this.loadingPhase = !1, this.phaseChangedAt = Date.now(), this.phase = null, this.duringTransition = !1, this.gameClockDuration = ``, this.canAddGameTime = !1, this.cosmosBlocked = !1, this.allowGoogleTranslate = !1, this.mapCreatorRoleLevel = 0, this.gameSession = new G, this.globalPermissions = new K, this.customTeams = new Ae, t(this)
    }
};
i([r], q.prototype, `amIGameOwner`, void 0), i([r], q.prototype, `ownerRole`, void 0), i([r], q.prototype, `gameOwnerId`, void 0), i([r], q.prototype, `mapStyle`, void 0), i([r], q.prototype, `version`, void 0), i([r], q.prototype, `modeType`, void 0), i([r], q.prototype, `gameTime`, void 0), i([r], q.prototype, `phaseChangedAtServerAt`, void 0), i([r], q.prototype, `gameTimeLastUpdateAt`, void 0), i([r], q.prototype, `loadingPhase`, void 0), i([r], q.prototype, `phase`, void 0), i([r], q.prototype, `duringTransition`, void 0), i([r], q.prototype, `gameClockDuration`, void 0), i([r], q.prototype, `canAddGameTime`, void 0), i([r], q.prototype, `cosmosBlocked`, void 0), i([r], q.prototype, `allowGoogleTranslate`, void 0);
var je = class {
    constructor() {
        this.characters = r.map(), t(this)
    }
};
i([r], je.prototype, `characters`, void 0);
var J = class {
    constructor() {
        this.teams = r.map(), this.updateCounter = 0, t(this)
    }
};
i([r], J.prototype, `teams`, void 0), i([r], J.prototype, `updateCounter`, void 0);
var Y = class {
    constructor() {
        this.gameCode = ``, t(this)
    }
};
i([r], Y.prototype, `gameCode`, void 0);
var X = class {
    constructor() {
        this.gridSnap = 0, this.showMemoryBarAtAllTimes = !1, this.accessPoints = r.map(), t(this)
    }
};
i([r], X.prototype, `gridSnap`, void 0), i([r], X.prototype, `showMemoryBarAtAllTimes`, void 0), i([r], X.prototype, `accessPoints`, void 0);
var Me = class {
    constructor() {
        this.hookJSON = JSON.stringify({
            hooks: []
        }), t(this)
    }
};
i([r], Me.prototype, `hookJSON`, void 0);
var Z = class {
    constructor() {
        this.objective = ``, this.percentageComplete = 0, this.hasSavedProgress = !1, t(this)
    }
};
i([r], Z.prototype, `objective`, void 0), i([r], Z.prototype, `percentageComplete`, void 0), i([r], Z.prototype, `hasSavedProgress`, void 0);
var Ne = class {
        constructor() {
            this.deviceMaxOnMapDefault = 0, this.collidingTiles = 0, this.nonCollidingTiles = 0, this.wires = 0, this.codeGrids = 0, this.blocksPerCodeGrid = 0, this.codeGridsPerDevice = 0, this.customAssetOnMapDefault = 0
        }
    },
    Pe = class {
        constructor() {
            this.deviceInitialDefault = 999999999999, this.deviceSubsequentDefault = 999999999999, this.nonCollidingTile = 999999999999, this.collidingTile = 999999999999, this.wire = 999999999999, this.codeGrid = 999999999999, this.customAssetDefault = 999999999999
        }
    },
    Q = class {
        constructor() {
            this.devices = r.map(), this.collidingTiles = 0, this.nonCollidingTiles = 0, this.wires = 0, this.codeGrids = 0, this.customAssets = r.map(), t(this)
        }
    };
i([r], Q.prototype, `devices`, void 0), i([r], Q.prototype, `collidingTiles`, void 0), i([r], Q.prototype, `nonCollidingTiles`, void 0), i([r], Q.prototype, `wires`, void 0), i([r], Q.prototype, `codeGrids`, void 0), i([r], Q.prototype, `customAssets`, void 0);
var $ = class {
    constructor() {
        this.usedMemoryCost = 0, this.maxUsedMemory = 0, this.counters = new Q, this.limits = new Ne, this.costs = new Pe, t(this)
    }
};
i([r], $.prototype, `usedMemoryCost`, void 0), i([r], $.prototype, `maxUsedMemory`, void 0), ee({
    enforceActions: `never`
});
var Fe = {
    network: new s,
    scene: new o,
    loading: new c,
    phaser: new re,
    memorySystem: new $,
    me: new A,
    worldOptions: new ye,
    world: new F,
    characters: new je,
    teams: new J,
    session: new q,
    gui: new B,
    matchmaker: new Y,
    activityFeed: new Ee,
    editing: new X,
    hooks: new Me,
    assignment: new Z
};
export {
    d as _, H as a, a as b, Se as c, me as d, de as f, ae as g, se as h, U as i, be as l, ue as m, Oe as n, Te as o, fe as p, De as r, we as s, Fe as t, j as u, ie as v, l as y
};