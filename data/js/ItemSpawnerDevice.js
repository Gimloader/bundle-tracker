import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./GetAssetPath.js";
import {
    t as n
} from "./playSound.js";
import {
    t as r
} from "./phaser.js";
import {
    o as i,
    s as a
} from "./FixPhaserBootProcess.js";
import {
    t as o
} from "./stores-2.js";
import {
    r as s
} from "./InPhase.js";
import {
    t as c
} from "./Device.js";
import {
    r as l
} from "./GlobalLocalDepth.js";
import {
    t as u
} from "./InventoryItemRarity.js";
import {
    Bt as d,
    G as f,
    J as p,
    Y as m
} from "./App-42.js";
import {
    t as h
} from "./NewWidthSameAspectRatio.js";
import {
    t as g
} from "./AddOutline.js";
import {
    t as _
} from "./RemoveOutline.js";
import {
    n as v,
    r as y,
    t as b
} from "./Constants.js";
import {
    t as x
} from "./InventoryItemNameWithCount.js";
var S = e(r()),
    C = {
        [u.common]: `light_gray`,
        [u.uncommon]: `green`,
        [u.rare]: `blue`,
        [u.epic]: `purple`,
        [u.legendary]: `yellow`
    },
    w = e => {
        if (!e) return C.uncommon;
        let t = o.worldOptions.itemOptions.find(t => t.id === e);
        return t ? C[(t == null ? void 0 : t.rarity) ?? u.common] : C.uncommon
    },
    T = function(e) {
        return e.collect = `collect`, e
    }({}),
    E = class extends c {
        constructor(e) {
            super(e), this.hasLoaded = !1, this.isShowing = !0, this.isWithinInteractionRange = !1, this.itemDimensions = {
                width: 0,
                height: 0
            }, this.setInteractionInfo = () => {
                let e = f(this.options.itemId),
                    t = p(this.options.itemId),
                    n = m(this.options.itemId),
                    r = !0;
                if (t || n) {
                    var i;
                    let e = ((i = o.me.inventory.slots.get(this.options.itemId)) == null ? void 0 : i.amount) ?? 0;
                    t ? r = e < y({
                        itemId: this.options.itemId
                    }) : n && (r = e < v({
                        itemId: this.options.itemId
                    }))
                }
                if (e) {
                    let t = this.options.itemAmount;
                    this.interactiveZones.setInfo({
                        message: x(e, t),
                        action: b.interaction.message.action,
                        allowedToInteract: r,
                        topHeader: r ? void 0 : b.interaction.message.fullInventory,
                        topHeaderColor: b.interaction.message.fullInventoryColor
                    })
                }
            }, this.addOutline = () => {
                this.hasLoaded && g({
                    view: this.itemImage.view
                })
            }, this.removeOutline = () => {
                this.hasLoaded && _({
                    view: this.itemImage.view
                })
            }, this.show = () => {
                this.isShowing = !0, this.tweens.add({
                    targets: this.itemImage.view,
                    displayWidth: this.itemDimensions.width,
                    displayHeight: this.itemDimensions.height,
                    duration: 250,
                    ease: S.default.Math.Easing.Back.In
                }), this.interactiveZones.setForceDisabled(!1)
            }, this.hide = () => {
                this.isShowing = !1, this.tweens.add({
                    targets: this.itemImage.view,
                    displayWidth: 0,
                    displayHeight: 0,
                    duration: 250,
                    ease: S.default.Math.Easing.Back.Out
                }), this.interactiveZones.setForceDisabled(!0), this.isWithinInteractionRange && this.removeOutline()
            }, this.onUpdate = () => {
                if (this.hasLoaded) {
                    if (d() >= (this.state.itemAvailableTimestamp ?? 0)) {
                        if (this.isShowing) return;
                        this.show()
                    } else {
                        if (!this.isShowing) return;
                        this.hide()
                    }
                }
            };
            let r = t(`devices/models/baseModel/bases/${w(this.options.itemId)}.png`);
            this.base = this.parts.add.sprite({
                imageId: r,
                imageUrl: r,
                layerId: l.DevicesUnderCharacters
            }), this.base.view.setScale(.15);
            let c = o.worldOptions.itemOptions.find(e => e.id === this.options.itemId);
            if (c) {
                let e = c.previewImage;
                this.itemImage = this.parts.add.sprite({
                    imageId: e,
                    imageUrl: e,
                    layerId: l.DepthSortedCharactersAndDevices,
                    onReady: e => {
                        this.itemDimensions = h({
                            height: e.view.height,
                            width: e.view.width,
                            newWidth: b.itemWidth
                        }), e.view.setDisplaySize(this.itemDimensions.width, this.itemDimensions.height), this.hasLoaded = !0
                    }
                }), this.itemImage.view.setY(this.itemImage.view.y - 50), this.tweens.add({
                    targets: this.itemImage.view,
                    y: this.itemImage.view.y - 15,
                    duration: 1200,
                    yoyo: !0,
                    repeat: -1,
                    ease: S.default.Math.Easing.Sine.InOut
                }), this.interactiveZones.add.circle({
                    x: 0,
                    y: 0,
                    r: 100
                }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                    s() || (this.isWithinInteractionRange = !0, this.setInteractionInfo(), this.addOutline())
                }, this.interactiveZones.onNonInteractive = () => {
                    s() || (this.removeOutline(), this.isWithinInteractionRange = !1)
                }, this.interactiveZones.onInteraction = () => {
                    this.sendToServerDevice(T.collect), n({
                        path: t(`sounds/core/collectItem.mp3`),
                        volume: a({
                            volume: .7,
                            type: i.soundEffect
                        })
                    })
                }
            }
        }
    };
export {
    E as
    default
};