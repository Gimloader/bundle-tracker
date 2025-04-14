function t(t, e, i, a) {
    Object.defineProperty(t, e, {
        get: i,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}
var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("hfWPP", (function(i, a) {
    var s;
    s = i.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), t(i.exports, "default", (function() {
        return g
    }));
    var o = e("divCp"),
        n = e("bNmF9"),
        l = e("3afnZ"),
        r = e("bG93V"),
        h = e("iMOcM"),
        d = e("iRjsB"),
        c = e("4Sil9"),
        v = e("6Tpu2"),
        u = e("4uojN"),
        f = e("bvStP");
    class p extends n.default {
        constructor(t) {
            super(t), (0, o.default)(this, "activityAlpha", 1), (0, o.default)(this, "createView", (() => {
                this.back = this.parts.add.sprite({
                    ...l.BackAsset,
                    onReady: t => {
                        t.view.setScale(.4), t.view.alpha = this.activityAlpha
                    }
                }), this.front = this.parts.add.sprite({
                    ...l.FrontAsset,
                    depthChange: 150,
                    onReady: t => {
                        t.view.setScale(.4), t.view.alpha = this.activityAlpha
                    }
                }), this.front2 = this.parts.add.sprite({
                    ...l.Front2Asset,
                    depthChange: 100,
                    onReady: t => {
                        t.view.setScale(.4), t.view.alpha = this.activityAlpha
                    }
                }), this.shadow = this.shadows.add({
                    x: 0,
                    y: 100,
                    r1: 150,
                    r2: 60,
                    alphaMultip: this.activityAlpha
                })
            })), (0, o.default)(this, "createColliders", (() => {
                this.colliders.add.box({
                    x: -100,
                    y: 10,
                    w: 20,
                    h: 200
                }), this.colliders.add.box({
                    x: 100,
                    y: 10,
                    w: 20,
                    h: 180
                }), this.colliders.add.box({
                    x: 0,
                    y: -30,
                    w: 200,
                    h: 120
                }), this.colliders.add.box({
                    x: -40,
                    y: 120,
                    w: 120,
                    h: 20,
                    angle: 20
                })
            })), (0, o.default)(this, "setupInteractiveZones", (() => {
                this.interactiveZones.add.circle({
                    x: -20,
                    y: 70,
                    r: 60
                });
                const t = !d.default.session.cosmosBlocked && (0, h.isLoggedIn)(),
                    e = t ? c.ChangingBoothConsts.interactiveInfo.normal : d.default.session.cosmosBlocked ? c.ChangingBoothConsts.interactiveInfo.cosmosBlocked : c.ChangingBoothConsts.interactiveInfo.notLoggedIn,
                    i = t ? void 0 : c.ChangingBoothConsts.interactiveInfo.notAvailableHeader,
                    a = t ? void 0 : c.ChangingBoothConsts.interactiveInfo.notAvailableColor;
                this.interactiveZones.setInfo({
                    message: e,
                    allowedToInteract: t,
                    duration: c.ChangingBoothConsts.interactiveInfo.duration,
                    topHeader: i,
                    topHeaderColor: a
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(r.Messages.open)
                }
            })), (0, o.default)(this, "openDeviceUI", (() => {
                this.deviceUI.open({})
            })), (0, o.default)(this, "updateActiveState", (() => {
                const t = this.state.active ? 1 : 0;
                this.tweens.add({
                    targets: this,
                    activityAlpha: t,
                    duration: 100,
                    onUpdate: () => {
                        var t, e, i, a, s, o;
                        null === (t = this.back) || void 0 === t || null === (e = t.view) || void 0 === e || e.setAlpha(this.activityAlpha), null === (i = this.front) || void 0 === i || null === (a = i.view) || void 0 === a || a.setAlpha(this.activityAlpha), null === (s = this.front2) || void 0 === s || null === (o = s.view) || void 0 === o || o.setAlpha(this.activityAlpha), this.shadow.alphaMultip = this.activityAlpha
                    }
                }), this.interactiveZones.setForceDisabled(!this.state.active), this.state.active || this.deviceUI.close()
            })), (0, o.default)(this, "onStateChange", (t => {
                "active" === t && this.updateActiveState()
            })), (0, o.default)(this, "checkIfCollidersEnabled", (() => this.state.active)), this.layers.setDefaultLayer(f.default.DepthSortedCharactersAndDevices), this.activityAlpha = this.state.active ? 1 : 0, (0, v.InPreGamePhase)() && (0, u.isSavedVersion)() && (this.activityAlpha = 1), this.createView(), this.createColliders(), this.setupInteractiveZones()
        }
    }
    var g = p
})), e.register("3afnZ", (function(i, a) {
    t(i.exports, "BackAsset", (function() {
        return o
    })), t(i.exports, "FrontAsset", (function() {
        return n
    })), t(i.exports, "Front2Asset", (function() {
        return l
    }));
    var s = e("alREA");
    const o = {
            imageId: (0, s.default)("devices/changing_booth/back.png"),
            imageUrl: (0, s.default)("devices/changing_booth/back.png")
        },
        n = {
            imageId: (0, s.default)("devices/changing_booth/front.png"),
            imageUrl: (0, s.default)("devices/changing_booth/front.png")
        },
        l = {
            imageId: (0, s.default)("devices/changing_booth/front_2.png"),
            imageUrl: (0, s.default)("devices/changing_booth/front_2.png")
        }
})), e.register("bG93V", (function(e, i) {
    let a;
    t(e.exports, "Messages", (function() {
        return a
    })), (a || (a = {})).open = "open"
})), e.register("4Sil9", (function(e, i) {
    t(e.exports, "ChangingBoothConsts", (function() {
        return a
    }));
    const a = {
        interactiveInfo: {
            normal: "Change Your Cosmetics",
            cosmosBlocked: "Cosmos Blocked",
            notLoggedIn: "Log In to Use",
            notAvailableHeader: "Not Available",
            notAvailableColor: "#ffcdd2",
            duration: 1
        }
    }
}));