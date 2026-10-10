import {
    g as e
} from "./utils.js";
import {
    t
} from "./GetAssetPath.js";
import {
    t as n
} from "./stores-2.js";
import {
    n as r
} from "./isVersion.js";
import {
    r as i
} from "./InPhase.js";
import {
    t as a
} from "./Device.js";
import {
    r as o
} from "./GlobalLocalDepth.js";
var s = {
        imageId: t(`devices/changing_booth/back.png`),
        imageUrl: t(`devices/changing_booth/back.png`)
    },
    c = {
        imageId: t(`devices/changing_booth/front.png`),
        imageUrl: t(`devices/changing_booth/front.png`)
    },
    l = {
        imageId: t(`devices/changing_booth/front_2.png`),
        imageUrl: t(`devices/changing_booth/front_2.png`)
    },
    u = function(e) {
        return e.open = `open`, e
    }({}),
    d = {
        interactiveInfo: {
            normal: `Change Your Cosmetics`,
            cosmosBlocked: `Cosmos Blocked`,
            notLoggedIn: `Log In to Use`,
            notAvailableHeader: `Not Available`,
            notAvailableColor: `#ffcdd2`,
            duration: 1
        }
    },
    f = class extends a {
        constructor(t) {
            super(t), this.activityAlpha = 1, this.createView = () => {
                this.back = this.parts.add.sprite({
                    ...s,
                    onReady: e => {
                        e.view.setScale(.4), e.view.alpha = this.activityAlpha
                    }
                }), this.front = this.parts.add.sprite({
                    ...c,
                    depthChange: 150,
                    onReady: e => {
                        e.view.setScale(.4), e.view.alpha = this.activityAlpha
                    }
                }), this.front2 = this.parts.add.sprite({
                    ...l,
                    depthChange: 100,
                    onReady: e => {
                        e.view.setScale(.4), e.view.alpha = this.activityAlpha
                    }
                }), this.shadow = this.shadows.add({
                    x: 0,
                    y: 100,
                    r1: 150,
                    r2: 60,
                    alphaMultip: this.activityAlpha
                })
            }, this.createColliders = () => {
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
            }, this.setupInteractiveZones = () => {
                this.interactiveZones.add.circle({
                    x: -20,
                    y: 70,
                    r: 60
                });
                let t = !n.session.cosmosBlocked && e(),
                    r = t ? d.interactiveInfo.normal : n.session.cosmosBlocked ? d.interactiveInfo.cosmosBlocked : d.interactiveInfo.notLoggedIn,
                    i = t ? void 0 : d.interactiveInfo.notAvailableHeader,
                    a = t ? void 0 : d.interactiveInfo.notAvailableColor;
                this.interactiveZones.setInfo({
                    message: r,
                    allowedToInteract: t,
                    duration: d.interactiveInfo.duration,
                    topHeader: i,
                    topHeaderColor: a
                }), this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(u.open)
                }
            }, this.openDeviceUI = () => {
                this.deviceUI.open({})
            }, this.updateActiveState = () => {
                let e = +!!this.state.active;
                this.tweens.add({
                    targets: this,
                    activityAlpha: e,
                    duration: 100,
                    onUpdate: () => {
                        var e, t, n;
                        (e = this.back) == null || (e = e.view) == null || e.setAlpha(this.activityAlpha), (t = this.front) == null || (t = t.view) == null || t.setAlpha(this.activityAlpha), (n = this.front2) == null || (n = n.view) == null || n.setAlpha(this.activityAlpha), this.shadow.alphaMultip = this.activityAlpha
                    }
                }), this.interactiveZones.setForceDisabled(!this.state.active), this.state.active || this.deviceUI.close()
            }, this.onStateChange = e => {
                e === `active` && this.updateActiveState()
            }, this.checkIfCollidersEnabled = () => this.state.active, this.layers.setDefaultLayer(o.DepthSortedCharactersAndDevices), this.activityAlpha = +!!this.state.active, i() && r() && (this.activityAlpha = 1), this.createView(), this.createColliders(), this.setupInteractiveZones()
        }
    };
export {
    f as
    default
};