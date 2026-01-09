import {
    s as l,
    P as d,
    I as g,
    g as y,
    S as D
} from "./FixSpinePlugin.js";
import {
    G as v
} from "./GetAssetPath.js";
import {
    N as S
} from "./NewWidthSameAspectRatio.js";
import {
    b2 as s,
    al as O,
    aS as W,
    aT as b,
    aU as C,
    aV as A,
    b9 as G,
    L as f
} from "./App-41.js";
import {
    G as R,
    a as T,
    D as p
} from "./Constants.js";
import {
    p as x
} from "./playSound.js";
import {
    A as L
} from "./AddOutline.js";
import {
    R as M
} from "./RemoveOutline.js";
import "./_index.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./motion.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./howler.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
const c = {
        [s.common]: "light_gray",
        [s.uncommon]: "green",
        [s.rare]: "blue",
        [s.epic]: "purple",
        [s.legendary]: "yellow"
    },
    Z = e => {
        if (!e) return c.uncommon;
        const o = l.worldOptions.itemOptions.find(m => m.id === e);
        if (!o) return c.uncommon;
        const r = (o == null ? void 0 : o.rarity) ?? s.common;
        return c[r]
    };
var w = (e => (e.collect = "collect", e))(w || {});
class ii extends O {
    constructor(o) {
        super(o), this.hasLoaded = !1, this.isShowing = !0, this.isWithinInteractionRange = !1, this.itemDimensions = {
            width: 0,
            height: 0
        }, this.setInteractionInfo = () => {
            var u;
            const t = W(this.options.itemId),
                i = b(this.options.itemId),
                I = C(this.options.itemId);
            let a = !0;
            if (i || I) {
                const n = ((u = l.me.inventory.slots.get(this.options.itemId)) == null ? void 0 : u.amount) ?? 0;
                if (i) {
                    const h = R({
                        itemId: this.options.itemId
                    });
                    a = n < h
                } else if (I) {
                    const h = T({
                        itemId: this.options.itemId
                    });
                    a = n < h
                }
            }
            if (t) {
                const n = this.options.itemAmount;
                this.interactiveZones.setInfo({
                    message: A(t, n),
                    action: p.interaction.message.action,
                    allowedToInteract: a,
                    topHeader: a ? void 0 : p.interaction.message.fullInventory,
                    topHeaderColor: p.interaction.message.fullInventoryColor
                })
            }
        }, this.addOutline = () => {
            this.hasLoaded && L({
                view: this.itemImage.view
            })
        }, this.removeOutline = () => {
            this.hasLoaded && M({
                view: this.itemImage.view
            })
        }, this.show = () => {
            this.isShowing = !0, this.tweens.add({
                targets: this.itemImage.view,
                displayWidth: this.itemDimensions.width,
                displayHeight: this.itemDimensions.height,
                duration: 250,
                ease: d.Math.Easing.Back.In
            }), this.interactiveZones.setForceDisabled(!1)
        }, this.hide = () => {
            this.isShowing = !1, this.tweens.add({
                targets: this.itemImage.view,
                displayWidth: 0,
                displayHeight: 0,
                duration: 250,
                ease: d.Math.Easing.Back.Out
            }), this.interactiveZones.setForceDisabled(!0), this.isWithinInteractionRange && this.removeOutline()
        }, this.onUpdate = () => {
            if (!this.hasLoaded) return;
            const t = G(),
                i = this.state.itemAvailableTimestamp ?? 0;
            if (t >= i) {
                if (this.isShowing) return;
                this.show()
            } else {
                if (!this.isShowing) return;
                this.hide()
            }
        };
        const r = v(`devices/models/baseModel/bases/${Z(this.options.itemId)}.png`);
        this.base = this.parts.add.sprite({
            imageId: r,
            imageUrl: r,
            layerId: f.DevicesUnderCharacters
        }), this.base.view.setScale(.15);
        const m = l.worldOptions.itemOptions.find(t => t.id === this.options.itemId);
        if (m) {
            const t = m.previewImage;
            this.itemImage = this.parts.add.sprite({
                imageId: t,
                imageUrl: t,
                layerId: f.DepthSortedCharactersAndDevices,
                onReady: i => {
                    this.itemDimensions = S({
                        height: i.view.height,
                        width: i.view.width,
                        newWidth: p.itemWidth
                    }), i.view.setDisplaySize(this.itemDimensions.width, this.itemDimensions.height), this.hasLoaded = !0
                }
            }), this.itemImage.view.setY(this.itemImage.view.y - 50), this.tweens.add({
                targets: this.itemImage.view,
                y: this.itemImage.view.y - 15,
                duration: 1200,
                yoyo: !0,
                repeat: -1,
                ease: d.Math.Easing.Sine.InOut
            }), this.interactiveZones.add.circle({
                x: 0,
                y: 0,
                r: 100
            }), this.setInteractionInfo(), this.interactiveZones.onInteractiveCb = () => {
                g() || (this.isWithinInteractionRange = !0, this.setInteractionInfo(), this.addOutline())
            }, this.interactiveZones.onNonInteractive = () => {
                g() || (this.removeOutline(), this.isWithinInteractionRange = !1)
            }, this.interactiveZones.onInteraction = () => {
                this.sendToServerDevice(w.collect), x({
                    path: v("sounds/core/collectItem.mp3"),
                    volume: y({
                        volume: .7,
                        type: D.soundEffect
                    })
                })
            }
        }
    }
}
export {
    ii as
    default
};